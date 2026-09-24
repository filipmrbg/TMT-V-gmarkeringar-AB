# TMT Vägmarkeringar AB

Webbplats för TMT Vägmarkeringar AB — specialister på vägmarkering, linjemålning, linjefräsning, snöröjning och TMA-körning i hela Sverige. Företaget grundades 2019 och har över 30 års samlad erfarenhet inom branschen.

## Tjänster

- **Vägmarkeringar** — Kantlinjer, mittlinjer, cykelbanor, parkeringsrutor, laddplatser, övergångsställen och industrimålning med slitstark termoplast och godkända färgsystem.
- **Linjefräsning** — Skonsam mekanisk borttagning av gamla eller felaktiga linjer på asfalt och betong.
- **Snöröjning** — Snöplogning, sandning och saltning för fastigheter, samfälligheter och företag med jour under vintersäsongen.
- **TMA-körning** — Godkända TMA-fordon med certifierade förare (APV 1+2) för säkra vägarbeten.

## Teknikstack

- **Frontend:** React + TypeScript + Vite
- **Styling:** Tailwind CSS
- **Backend:** Supabase (databas, edge functions)
- **E-post:** Resend (via Supabase edge function)
- **Hosting:** Vercel

## Kontaktformulär

Kontakt- och offertformulären skickar ett e-postmeddelande till info@tmtab.com via en Supabase edge function. Varje submission sparas också i `contact_submissions`-tabellen i Supabase med namn, e-post, telefon, vald tjänst, meddelande och tidsstämpel.

## Utveckling

```bash
npm install      # Installera beroenden
npm run dev      # Starta utvecklingsserver
npm run build    # Bygg för produktion
npm run typecheck # Typkontroll
```

## Miljövariabler

Supabase-variabler (`SUPABASE_URL`, `SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`) är förkonfigurerade i `.env`. Edge functionen kräver `RESEND_API_KEY` som Supabase-hemlighet för att skicka e-post.
