const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const EMAIL_TEMPLATE = `<!DOCTYPE html>
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
              <p style="margin: 0 0 24px 0; font-size: 14px; color: #6b7280;">{{DATUM_OCH_TID}}</p>

              <table role="presentation" style="width: 100%; background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 24px;">

                <!-- NAMN -->
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <span style="font-weight: 600; color: #374151; display: block; margin-bottom: 4px;">Namn:</span>
                    <span style="color: #1f2937;">{{NAMN}}</span>
                  </td>
                </tr>

                <!-- E-POST -->
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <span style="font-weight: 600; color: #374151; display: block; margin-bottom: 4px;">E-post:</span>
                    <a href="mailto:{{EPOST}}" style="color: #2563eb; text-decoration: none;">{{EPOST}}</a>
                  </td>
                </tr>

                <!-- TELEFON -->
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <span style="font-weight: 600; color: #374151; display: block; margin-bottom: 4px;">Telefon:</span>
                    <a href="tel:{{TELEFON}}" style="color: #2563eb; text-decoration: none;">{{TELEFON}}</a>
                  </td>
                </tr>

                <!-- TJÄNST -->
                <tr>
                  <td style="padding: 12px 0; border-bottom: 1px solid #e5e7eb;">
                    <span style="font-weight: 600; color: #374151; display: block; margin-bottom: 4px;">Vald tjänst:</span>
                    <span style="color: #1f2937;">{{TJANST}}</span>
                  </td>
                </tr>

                <!-- MEDDELANDE -->
                <tr>
                  <td style="padding: 12px 0;">
                    <span style="font-weight: 600; color: #374151; display: block; margin-bottom: 4px;">Meddelande:</span>
                    <p style="margin: 0; color: #1f2937; white-space: pre-wrap; line-height: 1.5;">{{MEDDELANDE}}</p>
                  </td>
                </tr>

              </table>

              <!-- SUBMISSION ID -->
              <div style="background-color: #eff6ff; border-left: 4px solid #2563eb; padding: 16px; border-radius: 4px; margin-bottom: 24px;">
                <p style="margin: 0; font-size: 14px; color: #1e40af;">
                  <strong>Submission ID:</strong> {{SUBMISSION_ID}}
                </p>
              </div>

              <!-- SIDFOT -->
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

function formatSwedishDateTime(date: Date): string {
  const months = [
    "januari", "februari", "mars", "april", "maj", "juni",
    "juli", "augusti", "september", "oktober", "november", "december",
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${day} ${month} ${year} kl. ${hours}:${minutes}`;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json();
    const { name, email, phone, message, service } = body as {
      name?: string;
      email?: string;
      phone?: string;
      message?: string;
      service?: string;
    };

    if (!name || !email || !phone || !message) {
      return new Response(
        JSON.stringify({ error: "Namn, e-post, telefon och meddelande är obligatoriska." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const submissionId = crypto.randomUUID();
    const now = new Date();
    const dateStr = formatSwedishDateTime(now);

    let html = EMAIL_TEMPLATE
      .replace(/{{TJANST}}/g, escapeHtml(service || "Ej angiven"))
      .replace(/{{NAMN}}/g, escapeHtml(name))
      .replace(/{{EPOST}}/g, escapeHtml(email))
      .replace(/{{TELEFON}}/g, escapeHtml(phone))
      .replace(/{{MEDDELANDE}}/g, escapeHtml(message))
      .replace(/{{DATUM_OCH_TID}}/g, escapeHtml(dateStr))
      .replace(/{{SUBMISSION_ID}}/g, escapeHtml(submissionId));

    const RECIPIENT = Deno.env.get("CONTACT_EMAIL") || "f.bjorgaas@gmail.com";
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

    if (!RESEND_API_KEY) {
      return new Response(
        JSON.stringify({ error: "E-posttjänsten är inte konfigurerad." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Kontaktformulär <info@contact.bgbygger.se>",
        to: [RECIPIENT],
        reply_to: email,
        subject: `Ny kontaktförfrågan från ${name}`,
        html,
      }),
    });

    if (!resendResponse.ok) {
      const errText = await resendResponse.text();
      console.error("Resend API error:", errText);
      return new Response(
        JSON.stringify({ error: "Kunde inte skicka e-post." }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    return new Response(
      JSON.stringify({ success: true, submissionId }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  } catch (err) {
    console.error("Edge function error:", err);
    return new Response(
      JSON.stringify({ error: "Ett oväntat fel uppstod." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
