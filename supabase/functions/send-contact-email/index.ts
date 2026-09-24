import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY")!;
const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

const FROM_EMAIL = "Kontaktformulär <info@contact.bgbygger.se>";
const TO_EMAIL = "info@tmtab.com";

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const body: ContactPayload = await req.json();

    if (!body.name || !body.email || !body.phone || !body.message) {
      return new Response(
        JSON.stringify({ error: "Namn, e-post, telefon och meddelande är obligatoriska." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const { data: insertData, error: insertError } = await supabase
      .from("contact_submissions")
      .insert({
        name: body.name,
        email: body.email,
        phone: body.phone,
        service: body.service || null,
        message: body.message,
      })
      .select()
      .single();

    if (insertError) {
      return new Response(
        JSON.stringify({ error: "Kunde inte spara i databasen." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const serviceLabel = body.service
      ? `Tjänst: ${body.service}\n`
      : "";

    const emailHtml = `
      <h2>Ny kontaktformulärsinlämning</h2>
      <p><strong>Namn:</strong> ${body.name}</p>
      <p><strong>E-post:</strong> ${body.email}</p>
      <p><strong>Telefon:</strong> ${body.phone}</p>
      ${body.service ? `<p><strong>Tjänst:</strong> ${body.service}</p>` : ""}
      <p><strong>Meddelande:</strong></p>
      <p>${body.message.replace(/\n/g, "<br>")}</p>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        subject: `Ny förfrågan från ${body.name}`,
        html: emailHtml,
        reply_to: body.email,
      }),
    });

    let emailSent = false;
    if (resendResponse.ok) {
      emailSent = true;
      await supabase
        .from("contact_submissions")
        .update({ email_sent: true })
        .eq("id", insertData.id);
    }

    return new Response(
      JSON.stringify({ success: true, email_sent: emailSent }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message || "Ett oväntat fel inträffade." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
