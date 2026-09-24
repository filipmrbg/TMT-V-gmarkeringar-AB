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
const TO_EMAIL = "min.f.bjorgaas@gmail.com";

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

    const escapeHtml = (value: string): string => value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#039;");

    const safeName = escapeHtml(body.name.trim());
    const safeEmail = escapeHtml(body.email.trim());
    const safePhone = escapeHtml(body.phone.trim());
    const safeService = body.service ? escapeHtml(body.service.trim()) : "Inte angivet";
    const safeMessage = escapeHtml(body.message.trim()).replace(/\n/g, "<br>");
    const subjectName = body.name.trim().replace(/[\\r\\n]/g, " ");

    const detailRow = (label: string, value: string): string => `
      <tr>
        <td style="padding: 14px 0; border-bottom: 1px solid #e5e7eb; color: #64748b; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; width: 34%; vertical-align: top;">${label}</td>
        <td style="padding: 14px 0; border-bottom: 1px solid #e5e7eb; color: #0f172a; font-size: 16px; line-height: 1.5; vertical-align: top;">${value}</td>
      </tr>`;

    const emailHtml = `
      <!doctype html>
      <html lang="sv">
        <body style="margin: 0; padding: 0; background: #f1f5f9; font-family: Arial, Helvetica, sans-serif; color: #0f172a;">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background: #f1f5f9; padding: 32px 16px;">
            <tr>
              <td align="center">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 620px; background: #ffffff; border-radius: 18px; overflow: hidden; box-shadow: 0 8px 28px rgba(15, 23, 42, 0.08);">
                  <tr>
                    <td style="background: #0f172a; padding: 30px 36px;">
                      <div style="color: #f59e0b; font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;">TMT Vägmarkeringar</div>
                      <h1 style="margin: 10px 0 0; color: #ffffff; font-size: 26px; line-height: 1.2;">Ny offertförfrågan</h1>
                      <p style="margin: 10px 0 0; color: #cbd5e1; font-size: 15px; line-height: 1.5;">Ett nytt meddelande har skickats från kontaktformuläret.</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 28px 36px 34px;">
                      <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                        ${detailRow("Namn", safeName)}
                        ${detailRow("E-post", `<a href="mailto:${safeEmail}" style="color: #0f172a; font-weight: 700; text-decoration: underline;">${safeEmail}</a>`)}
                        ${detailRow("Telefon", `<a href="tel:${safePhone}" style="color: #0f172a; font-weight: 700; text-decoration: underline;">${safePhone}</a>`)}
                        ${detailRow("Tjänst", safeService)}
                      </table>
                      <div style="margin-top: 28px; padding: 20px; background: #f8fafc; border-left: 4px solid #f59e0b; border-radius: 8px;">
                        <div style="margin-bottom: 8px; color: #64748b; font-size: 13px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase;">Projektbeskrivning</div>
                        <div style="color: #334155; font-size: 16px; line-height: 1.65;">${safeMessage}</div>
                      </div>
                      <div style="margin-top: 28px; text-align: center;">
                        <a href="mailto:${safeEmail}" style="display: inline-block; padding: 13px 22px; background: #0f172a; border-radius: 999px; color: #ffffff; font-size: 14px; font-weight: 700; text-decoration: none;">Svara kunden</a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 18px 36px; background: #f8fafc; color: #94a3b8; font-size: 12px; line-height: 1.5; text-align: center;">Detta meddelande skickades från kontaktformuläret på tmtab.com.</td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
      </html>
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
        subject: `Ny förfrågan från ${subjectName}`,
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
