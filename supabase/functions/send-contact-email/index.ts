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

    const escapeHtml = (value: string): string => value
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#039;");

    const safeName = escapeHtml(body.name.trim());
    const safeEmail = escapeHtml(body.email.trim());
    const safePhone = escapeHtml(body.phone.trim());
    const safeMessage = escapeHtml(body.message.trim());
    const subjectName = body.name.trim().replace(/[\r\n]/g, " ");

    const now = new Date();
    const swedishMonths = ["januari", "februari", "mars", "april", "maj", "juni", "juli", "augusti", "september", "oktober", "november", "december"];
    const dateStr = `${now.getDate()} ${swedishMonths[now.getMonth()]} ${now.getFullYear()} kl. ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
    const submissionId = crypto.randomUUID();

    const serviceRow = body.service
      ? `<tr><td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;"><span style="font-weight: 600; color: #374151; display: block; margin-bottom: 4px;">Tjänst:</span><span style="color: #1f2937;">${escapeHtml(body.service.trim())}</span></td></tr>`
      : "";

    const emailHtml = `
<!DOCTYPE html>
<html lang="sv">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ny kontaktförfrågan</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f5f5f5; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  <table role="presentation" style="width: 100%; border-collapse: collapse; margin: 0; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 8px; box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06); overflow: hidden;">
          <tr>
            <td style="padding: 40px;">
              <h1 style="margin: 0 0 8px 0; font-size: 24px; font-weight: 700; color: #000000;">Ny kontaktförfrågan</h1>
              <p style="margin: 0 0 24px 0; font-size: 14px; color: #6b7280;">${dateStr}</p>

              <table role="presentation" style="width: 100%; background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <span style="font-weight: 600; color: #374151; display: block; margin-bottom: 4px;">Namn:</span>
                    <span style="color: #1f2937;">${safeName}</span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <span style="font-weight: 600; color: #374151; display: block; margin-bottom: 4px;">E-post:</span>
                    <a href="mailto:${safeEmail}" style="color: #2563eb; text-decoration: none;">${safeEmail}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <span style="font-weight: 600; color: #374151; display: block; margin-bottom: 4px;">Telefon:</span>
                    <a href="tel:${safePhone}" style="color: #2563eb; text-decoration: none;">${safePhone}</a>
                  </td>
                </tr>
                ${serviceRow}
                <tr>
                  <td style="padding: 12px 0;">
                    <span style="font-weight: 600; color: #374151; display: block; margin-bottom: 4px;">Meddelande:</span>
                    <p style="margin: 0; color: #1f2937; white-space: pre-wrap; line-height: 1.5;">${safeMessage}</p>
                  </td>
                </tr>
              </table>

              <div style="background-color: #eff6ff; border-left: 4px solid #2563eb; padding: 16px; border-radius: 4px; margin-bottom: 24px;">
                <p style="margin: 0; font-size: 14px; color: #1e40af;">
                  <strong>Submission ID:</strong> ${submissionId}
                </p>
              </div>

              <p style="margin: 0; font-size: 12px; color: #6b7280; line-height: 1.5;">
                Detta meddelande skickades automatiskt från kontaktformuläret på din webbplats.
                Svara direkt på detta e-postmeddelande för att kontakta kunden.
              </p>

            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: FROM_EMAIL,
        to: [TO_EMAIL],
        subject: `"Ny kontaktförfrågan" från ${subjectName}`,
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
