import { ShieldCheck, Award, Users } from 'lucide-react';
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
    'Om TMT Vägmarkeringar | Professionell linjemålning i hela Sverige',
    'Läs om TMT Vägmarkeringar AB. Sedan starten 2019 hjälper vi företag, kommuner och BRF:er med hållbara vägmarkeringar över hela Sverige.'
  );

  return (
    <main style={{ fontFamily: 'var(--font-family)' }}>

      {/* ── SECTION A: HERO HEADER ────────────────────────────── */}
      <section style={{
        position: 'relative',
        backgroundImage: 'url("/gallery/gallery-1.jpg")',
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
                Om TMT Vägmarkeringar AB
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={150}>
              <p style={{ color: 'rgba(255,255,255,0.92)', fontSize: '1.08rem', margin: '0 auto', maxWidth: '660px', lineHeight: 1.6 }}>
                Specialister på vägmarkering, linjemålning och parkeringsmarkeringar med över 30 års samlad erfarenhet över hela Sverige.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION B: ABOUT STORY & HISTORY ─────────────────────────── */}
      <section style={{ background: 'var(--color-light)', padding: '90px 0' }}>
        <div style={{ ...container, maxWidth: '1060px' }}>
          <div className="about-content-grid">

            {/* Left: Company Image */}
            <ScrollReveal animation="scale-in" easing="spring">
              <div className="about-sticky-sidebar" style={{
                display: 'flex',
                justifyContent: 'center',
              }}>
                <img
                  src={images.about.hero.url || '/about.jpg'}
                  alt="TMT Vägmarkeringar AB verksamhet"
                  loading="eager"
                  decoding="async"
                  style={{
                    width: '100%',
                    maxWidth: '320px',
                    height: 'auto',
                    objectFit: 'cover',
                    borderRadius: '20px',
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
                <span style={{
                  color: '#0f172a',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  display: 'inline-block',
                  marginBottom: '10px',
                  background: '#e2e8f0',
                  padding: '4px 14px',
                  borderRadius: '999px',
                }}>
                  Vår Bakgrund och Erfarenhet
                </span>
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.9rem, 3.2vw, 2.5rem)',
                  lineHeight: 1.2,
                  margin: '0 0 20px 0',
                }}>
                  Tydliga linjer och hållbara trafikmiljöer sedan 2019
                </h2>
              </ScrollReveal>
              <ScrollReveal animation="fade-up" delay={100}>
                <div>
                  <p style={{
                    color: 'var(--color-gray-600)',
                    fontSize: '1.05rem',
                    lineHeight: 1.8,
                    margin: '0 0 20px 0',
                    fontWeight: 500,
                  }}>
                    TMT Vägmarkeringar AB grundades 2019 med ambitionen att erbjuda marknadens mest pålitliga och kvalitativa lösningar inom vägmarkering och linjemålning.
                  </p>
                  
                  <p style={{
                    color: 'var(--color-gray-600)',
                    fontSize: '1rem',
                    lineHeight: 1.8,
                    margin: '0 0 20px 0',
                  }}>
                    Med över 30 års samlad erfarenhet inom vägmarkering, linjemålning och trafiksäkerhet har vi etablerat oss som en trygg partner för företag, kommuner, bostadsrättsföreningar och fastighetsägare i hela Sverige. Vi förstår vikten av tydliga trafikmiljöer och utför allt från nymålning av parkeringsrutor och övergångsställen till kompletta vägmarkeringssystem och industrimålning.
                  </p>

                  <p style={{
                    color: 'var(--color-gray-600)',
                    fontSize: '1rem',
                    lineHeight: 1.8,
                    margin: '0 0 24px 0',
                  }}>
                    Vårt fokus ligger på högsta kvalitet, noggrannhet och kundnöjdhet. Genom moderna arbetsmetoder och beprövade, godkända material säkerställer vi markeringar som håller över tid och uppfyller gällande krav och standarder.
                  </p>

                  {/* Vision Card */}
                  <div style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderLeft: '4px solid #0f172a',
                    padding: '24px 28px',
                    borderRadius: '0 16px 16px 0',
                    margin: '28px 0 36px 0',
                  }}>
                    <p style={{
                      color: 'var(--color-text-dark)',
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      lineHeight: 1.5,
                      margin: '0 0 10px 0',
                    }}>
                      Vår vision: Säkra, tydliga och hållbara trafikmiljöer för alla.
                    </p>
                    <p style={{
                      color: 'var(--color-gray-600)',
                      fontSize: '0.96rem',
                      lineHeight: 1.65,
                      margin: '0 0 12px 0',
                    }}>
                      Oavsett om du representerar en kommunal förvaltning, en bostadsrättsförening eller en industriverksamhet är vi en tillgänglig och engagerad partner från första rådgivning till färdig linjemålning.
                    </p>
                    <span style={{
                      color: '#0f172a',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      display: 'block',
                    }}>
                      Dan Wååg, VD och Grundare TMT Vägmarkeringar AB
                    </span>
                  </div>

                  <Button variant="primary" size="lg" href="/kontakt">
                    Kontakta oss för offert och rådgivning
                  </Button>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>


      {/* ── SECTION D: KÄRNVÄRDEN / TRYGGHET ─────────────────────────── */}
      <section style={{ background: '#f8fafc', padding: '80px 0', borderTop: '1px solid #e2e8f0' }}>
        <div style={container}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '30px',
          }} className="values-grid">
            {[
              {
                icon: ShieldCheck,
                title: 'Kvalitet och Standard',
                desc: 'Alla våra vägmarkeringar och material uppfyller Trafikverkets standarder och krav på friktion och reflexförmåga.',
              },
              {
                icon: Award,
                title: 'Över 30 års erfarenhet',
                desc: 'Gedigen kompetens från allt från motorvägar till bostadsrättsföreningars parkeringsrutor och truckgångar.',
              },
              {
                icon: Users,
                title: 'Rikstäckande service',
                desc: 'Vi är verksamma i hela Sverige och anpassar etablering och arbetstider för minsta möjliga trafikpåverkan.',
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <ScrollReveal key={i} animation="fade-up" delay={i * 100}>
                <div style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '28px 24px',
                  height: '100%',
                  boxSizing: 'border-box',
                }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    background: '#0F172A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px',
                    boxShadow: '0 4px 12px rgba(15, 23, 42, 0.12)',
                  }}>
                    <Icon size={24} color="#ffffff" />
                  </div>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--color-text-dark)',
                    margin: '0 0 10px 0',
                  }}>
                    {title}
                  </h3>
                  <p style={{
                    margin: 0,
                    color: 'var(--color-gray-600)',
                    fontSize: '0.92rem',
                    lineHeight: 1.6,
                  }}>
                    {desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION E: CTA ────────────────────────────────────────── */}
      <CTABanner />

      <style>{`
        @media (max-width: 900px) {
          .about-content-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .about-content-grid img {
            max-width: 260px !important;
            margin: 0 auto;
          }
          .values-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </main>
  );
}
