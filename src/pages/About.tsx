import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import CTABanner from '../components/CTABanner';
import { usePageTitle } from '../hooks/usePageTitle';
import images from '../data/images';

const container: React.CSSProperties = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 clamp(20px, 5vw, 40px)',
};

export default function About() {
  usePageTitle(
    'Om J Måleri Åhus | Måleri och tapetsering i Åhus',
    'Läs om J Måleri Åhus. Vi utför allt inom invändigt och utvändigt måleri, tapetsering, spackling och fasadrenovering i Åhus/Kristianstad med omnejd.'
  );
  return (
    <main style={{ fontFamily: 'var(--font-family)' }}>

      {/* ── SECTION A: HERO HEADER ────────────────────────────── */}
      <section style={{
        position: 'relative',
        backgroundImage: 'url("https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_3G5LlmMYORSdAk8SxzXrK2S0Is5%2Fhf_20260828_123821_ab6a265b-5fd9-4a34-b213-ad7f9c40fe66.png&w=1920&q=85")',
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        paddingTop: '150px',
        paddingBottom: '70px',
        textAlign: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.82) 0%, rgba(15, 23, 42, 0.72) 100%)' }} />
        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          <div>
            <ScrollReveal animation="blur-in">
              <h1 style={{
                color: 'var(--color-white)',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 3.2rem)',
                margin: '0 0 16px 0',
                lineHeight: 1.15,
                letterSpacing: '-0.02em',
              }}>
                Om J Måleri Åhus
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={150}>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.08rem', margin: '0 auto', maxWidth: '640px', lineHeight: 1.6 }}>
                Utför allt inom invändigt och utvändigt måleri, tapetsering och renovering med yrkesstolthet i Åhus/Kristianstad med omnejd.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION B: ABOUT STORY & HISTORY ─────────────────────────── */}
      <section style={{ background: 'var(--color-light)', padding: '100px 0' }}>
        <div style={{ ...container, maxWidth: '960px' }}>
          <div className="about-content-grid" style={{
            display: 'grid',
            gridTemplateColumns: '260px 1fr',
            gap: '48px',
            alignItems: 'start',
          }}>

            {/* Left: Company Image */}
            <ScrollReveal animation="scale-in" easing="spring">
              <div style={{
                position: 'sticky',
                top: '120px',
                display: 'flex',
                justifyContent: 'center',
              }}>
                <img
                  src={images.about.hero.url || '/about-us.jpg'}
                  alt="J Måleri Åhus"
                  loading="eager"
                  decoding="async"
                  style={{
                    width: '100%',
                    maxWidth: '260px',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: '20px',
                    padding: '0',
                    display: 'block',
                    boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
                    border: '1px solid #e2e8f0',
                  }}
                />
              </div>
            </ScrollReveal>

            {/* Right: Text content */}
            <div>
              <ScrollReveal animation="blur-in">
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 800,
                  fontSize: 'clamp(2rem, 3.4vw, 2.7rem)',
                  lineHeight: 1.18,
                  letterSpacing: '-0.03em',
                  margin: '0 0 20px 0',
                }}>
                  Måleri där detaljerna gör hela skillnaden
                </h2>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={100}>
                <div>
                  <p style={{
                    color: 'var(--color-gray-600)',
                    fontSize: '1.08rem',
                    lineHeight: 1.8,
                    margin: '0 0 20px 0',
                    fontWeight: 500,
                  }}>
                    Jag heter Joakim och driver J Måleri Åhus – ett företag med över 15 års erfarenhet inom måleribranschen.
                  </p>
                  
                  <p style={{
                    color: 'var(--color-gray-600)',
                    fontSize: '1rem',
                    lineHeight: 1.8,
                    margin: '0 0 24px 0',
                  }}>
                    Det jag uppskattar mest med måleriet är detaljerna. Det är ofta där den stora skillnaden sitter. Därför lägger jag alltid ner det lilla extra för att skapa ett resultat som håller högsta kvalitet – både i utförandet och i helhetsintrycket.
                  </p>

                  {/* Vision Card */}
                  <div style={{
                    background: 'rgba(194, 132, 71, 0.08)',
                    borderLeft: '4px solid var(--color-primary)',
                    padding: '24px 28px',
                    borderRadius: '0 16px 16px 0',
                    margin: '28px 0 36px 0',
                  }}>
                    <p style={{
                      color: 'var(--color-text-dark)',
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      lineHeight: 1.5,
                      margin: '0 0 10px 0',
                    }}>
                      Min vision är enkel: ingen kund ska känna sig missnöjd.
                    </p>
                    <p style={{
                      color: 'var(--color-gray-600)',
                      fontSize: '1rem',
                      lineHeight: 1.7,
                      margin: '0 0 14px 0',
                    }}>
                      Med noggrannhet, personligt engagemang och ett stort fokus på kvalitet vill jag erbjuda ett måleri där du som kund kan känna dig trygg från första kontakt till färdigt resultat.
                    </p>
                    <span style={{
                      color: 'var(--color-primary)',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      display: 'block',
                    }}>
                      Joakim, J Måleri Åhus
                    </span>
                  </div>

                  <Button variant="primary" size="lg" href="/kontakt">
                    Kontakta oss för rådgivning
                  </Button>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION E: CTA ────────────────────────────────────────── */}
      <CTABanner />

      <style>{`
        @media (max-width: 768px) {
          .about-content-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .about-content-grid img {
            max-width: 220px !important;
            margin: 0 auto;
          }
        }
      `}</style>
    </main>
  );
}
