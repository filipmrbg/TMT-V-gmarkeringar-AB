import { Phone, MapPin, Mail, ShieldCheck } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import FAQAccordion from '../components/FAQAccordion';
import CTABanner from '../components/CTABanner';
import QuoteForm from '../components/QuoteForm';
import { usePageTitle } from '../hooks/usePageTitle';

const container: React.CSSProperties = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 clamp(20px, 5vw, 40px)',
};

const faqItems = [
  {
    question: 'Hur snabbt kan vi få en offert på vägmarkering?',
    answer: 'Vi återkopplar så snart som möjligt med ett specificerat prisförslag baserat på era underlag och önskemål.',
  },
  {
    question: 'Vilka geografiska områden är ni verksamma i?',
    answer: 'TMT Vägmarkeringar AB utför uppdrag över hela Sverige åt både privata företag, kommuner, bostadsrättsföreningar och vägsamfälligheter.',
  },
  {
    question: 'Klarar era markeringar nordiskt vinterklimat och plogning?',
    answer: 'Ja, vi använder certifierad termoplast och slitstarka tvåkomponentsfärger utvecklade för att klara tuffa väderförhållanden, saltning och snöröjning.',
  },
  {
    question: 'Kan ni utföra arbetet under nätter eller helger?',
    answer: 'Absolut! För att minimera trafikstörningar och inte blockera parkeringsytor under dagtid arbetar vi flexibelt dygnet runt efter överenskommelse.',
  },
];

export default function Contact() {
  usePageTitle(
    'Kontakta TMT Vägmarkeringar | Hela Sverige',
    'Kontakta TMT Vägmarkeringar AB för professionell vägmarkering, linjemålning, parkeringslinjer och industrimålning i hela Sverige. Ring 073-771 86 17.'
  );

  return (
    <main style={{ fontFamily: 'var(--font-family)' }}>

      {/* ── SECTION A: HERO ───────────────────────────────────── */}
      <section style={{
        position: 'relative',
        backgroundImage: 'url(/about.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        paddingTop: '150px',
        paddingBottom: '70px',
        textAlign: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.76) 100%)' }} />
        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          <div>
            <ScrollReveal animation="blur-in">
              <h1 style={{
                color: 'var(--color-white)',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                margin: '0 0 16px 0',
                lineHeight: 1.15,
              }}>
                Kontakta oss
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={150}>
              <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '1.08rem', margin: 0, maxWidth: '620px', marginInline: 'auto', lineHeight: 1.6 }}>
                Vi återkopplar så snart som möjligt med rådgivning och prisförslag anpassat efter ert projekt.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION B: CONTACT CONTENT ────────────────────────── */}
      <section style={{ background: 'var(--color-light)', padding: '80px 0' }}>
        <div style={container}>
          <div className="contact-grid" style={{
            display: 'grid',
            gridTemplateColumns: '45% 55%',
            gap: '60px',
            alignItems: 'start',
          }}>

            {/* Left: info */}
            <ScrollReveal animation="fade-right" duration={0.8}>
              <h2 style={{
                color: 'var(--color-text-dark)',
                fontWeight: 700,
                fontSize: 'clamp(1.6rem, 2.5vw, 2rem)',
                margin: '0 0 20px 0',
                lineHeight: 1.2,
              }}>
                Så når du oss
              </h2>
              <p style={{ color: 'var(--color-gray-600)', fontSize: '1rem', lineHeight: 1.8, margin: 0 }}>
                Kontakta oss via telefon, e-post eller formuläret. Oavsett om det gäller parkeringsmarkering, väglinjer, truckgångar eller symboler hjälper vi er gärna.
              </p>

              <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    minWidth: '48px',
                    background: '#0F172A',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(15, 23, 42, 0.15)',
                  }}>
                    <Phone size={22} color="#ffffff" />
                  </div>
                  <div>
                    <p style={{ margin: '0 0 4px 0', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text-dark)' }}>
                      Telefon
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <a
                        href="tel:0737718617"
                        style={{ color: 'var(--color-gray-600)', fontSize: '0.95rem', textDecoration: 'none', lineHeight: 1.5, transition: 'color 0.2s ease' }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#0F172A')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-gray-600)')}
                      >
                        073-771 86 17
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    minWidth: '48px',
                    background: '#0F172A',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(15, 23, 42, 0.15)',
                  }}>
                    <MapPin size={22} color="#ffffff" />
                  </div>
                  <div>
                    <p style={{ margin: '0 0 4px 0', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text-dark)' }}>
                      Verksamhetsområde
                    </p>
                    <p style={{ margin: 0, color: 'var(--color-gray-600)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                      Hela Sverige • Rikstäckande etablering
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    minWidth: '48px',
                    background: '#0F172A',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(15, 23, 42, 0.15)',
                  }}>
                    <Mail size={22} color="#ffffff" />
                  </div>
                  <div>
                    <p style={{ margin: '0 0 4px 0', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text-dark)' }}>
                      E-post
                    </p>
                    <a
                      href="mailto:info@tmtab.com"
                      style={{ color: 'var(--color-gray-600)', fontSize: '0.95rem', textDecoration: 'none', lineHeight: 1.5, transition: 'color 0.2s ease' }}
                      onMouseEnter={e => (e.currentTarget.style.color = '#0F172A')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-gray-600)')}
                    >
                      info@tmtab.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    minWidth: '48px',
                    background: '#0F172A',
                    borderRadius: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(15, 23, 42, 0.15)',
                  }}>
                    <ShieldCheck size={22} color="#ffffff" />
                  </div>
                  <div>
                    <p style={{ margin: '0 0 4px 0', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text-dark)' }}>
                      Företagsuppgifter
                    </p>
                    <p style={{ margin: 0, color: 'var(--color-gray-600)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                      TMT Vägmarkeringar AB • Org.nr: 559221-0099 • Godkänd för F-skatt
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: form */}
            <ScrollReveal animation="fade-left" duration={0.8} delay={100}>
              <div style={{
                background: '#ffffff',
                borderRadius: '24px',
                padding: 'clamp(28px, 5vw, 44px)',
                boxShadow: '0 4px 30px rgba(0,0,0,0.06)',
                border: '1px solid #e2e8f0',
              }}>
                <QuoteForm
                  title="Beskriv ert projekt"
                  subtitle="Vi återkopplar vanligtvis samma eller nästkommande arbetsdag."
                  buttonText="Skicka offertförfrågan"
                />
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── SECTION C: FAQ ─────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '80px 0', borderTop: '1px solid #e2e8f0' }}>
        <div style={container}>
          <FAQAccordion
            items={faqItems}
            title="Vanliga frågor om våra tjänster"
            subtitle="Här har vi samlat svar på återkommande frågor kring offerter, etablering och vägmarkeringsarbeten."
            dark={false}
          />
        </div>
      </section>

      {/* ── SECTION D: CTA ────────────────────────────────────────── */}
      <CTABanner />

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </main>
  );
}
