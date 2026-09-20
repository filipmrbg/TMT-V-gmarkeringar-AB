import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import CTABanner from '../components/CTABanner';
import { usePageTitle } from '../hooks/usePageTitle';
import services, { ServiceItem } from '../data/services';

const container: React.CSSProperties = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 clamp(20px, 5vw, 40px)',
};

export default function ServicesOverview() {
  usePageTitle(
    'Våra Tjänster | TMT Vägmarkeringar',
    'Utforska våra tjänster inom vägmarkering, linjemålning, parkeringsmarkering och industrimålning i hela Sverige.'
  );

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const attempt = () => {
        const element = document.getElementById(id);
        if (element) {
          const yOffset = -100;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
          return true;
        }
        return false;
      };
      if (!attempt()) {
        const t1 = setTimeout(attempt, 80);
        const t2 = setTimeout(attempt, 250);
        const t3 = setTimeout(attempt, 600);
        return () => {
          clearTimeout(t1);
          clearTimeout(t2);
          clearTimeout(t3);
        };
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [hash]);

  const scrollToSection = (slug: string) => {
    const element = document.getElementById(slug);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      window.history.pushState(null, '', `#${slug}`);
    }
  };

  return (
    <main style={{ fontFamily: 'var(--font-family)', background: '#ffffff' }}>

      {/* ── HERO HEADER ──────────── */}
      <section style={{
        position: 'relative',
        backgroundImage: 'url("/services-hero.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center 45%',
        paddingTop: '140px',
        paddingBottom: '46px',
        textAlign: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.82) 0%, rgba(15, 23, 42, 0.72) 100%)' }} />

        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          <ScrollReveal animation="blur-in">
            <h1 style={{
              color: 'var(--color-white)',
              fontWeight: 700,
              fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
              margin: '0 0 16px 0',
              lineHeight: 1.15,
            }}>
              Våra Tjänster
            </h1>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={150}>
            <p style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: '1.08rem',
              maxWidth: '640px',
              margin: '0 auto',
              lineHeight: 1.65,
            }}>
              TMT Vägmarkeringar AB erbjuder professionella lösningar inom parkeringsplatser, väg- och industrimålning, snöröjning och TMA-säkerhet i hela Sverige.
            </p>
          </ScrollReveal>
        </div>
      </section>


      {/* ── QUICK JUMP NAVIGATION (STATIC, DOES NOT FOLLOW ON SCROLL) ──────────────────────────── */}
      <div style={{
        position: 'relative',
        background: '#ffffff',
        borderBottom: '1px solid #e2e8f0',
        padding: '16px 0',
      }}>
        <div style={container}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '10px',
            flexWrap: 'wrap',
          }}>
            {services.map((svc) => (
              <button
                key={svc.slug}
                onClick={() => scrollToSection(svc.slug)}
                style={{
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '999px',
                  padding: '9px 20px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: '#334155',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  fontFamily: 'var(--font-family)',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--color-primary)';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.borderColor = 'var(--color-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f8fafc';
                  e.currentTarget.style.color = '#334155';
                  e.currentTarget.style.borderColor = '#e2e8f0';
                }}
              >
                {svc.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── DETAILED SERVICE SECTIONS (ALTERNATING LAYOUT) ──────────── */}
      <div style={{ padding: '60px 0 100px 0' }}>
        {services.map((svc: ServiceItem, index: number) => {
          const isEven = index % 2 === 0;

          return (
            <section
              key={svc.slug}
              id={svc.slug}
              style={{
                padding: '80px 0',
                background: isEven ? '#ffffff' : '#f8fafc',
                borderBottom: '1px solid #e2e8f0',
              }}
            >
              <div style={container}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                  gap: '50px',
                  alignItems: 'center',
                }}>

                  {/* Image Column */}
                  <div style={{ order: isEven ? 1 : 2 }}>
                    <ScrollReveal animation={isEven ? 'fade-right' : 'fade-left'}>
                      <div style={{
                        position: 'relative',
                        borderRadius: '24px',
                        overflow: 'hidden',
                        boxShadow: '0 20px 40px rgba(15, 23, 42, 0.12)',
                        border: '3px solid #ffffff',
                        aspectRatio: '4/3',
                        background: '#0f172a',
                      }}>
                        <img
                          src={svc.image}
                          alt={svc.title}
                          loading="eager"
                          decoding="async"
                          fetchPriority={index < 2 ? "high" : "auto"}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            display: 'block',
                          }}
                        />
                      </div>
                    </ScrollReveal>
                  </div>

                  {/* Content Column */}
                  <div style={{ order: isEven ? 2 : 1 }}>
                    <ScrollReveal animation={isEven ? 'fade-left' : 'fade-right'}>
                      {svc.tag && (
                        <span style={{
                          color: '#0f172a',
                          fontWeight: 700,
                          fontSize: '0.8rem',
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          display: 'inline-block',
                          marginBottom: '12px',
                          background: '#e2e8f0',
                          padding: '4px 12px',
                          borderRadius: '999px',
                        }}>
                          {svc.tag}
                        </span>
                      )}
                      <h2 style={{
                        color: 'var(--color-text-dark)',
                        fontWeight: 700,
                        fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                        margin: '0 0 16px 0',
                        lineHeight: 1.2,
                      }}>
                        {svc.title}
                      </h2>
                      <p style={{
                        color: 'var(--color-gray-600)',
                        fontSize: '1.02rem',
                        lineHeight: 1.75,
                        margin: '0 0 24px 0',
                        whiteSpace: 'pre-line',
                      }}>
                        {svc.detailedDescription}
                      </p>

                      {/* Highlights */}
                      {svc.highlights && svc.highlights.length > 0 && (
                        <div style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                          gap: '10px 16px',
                          marginBottom: '28px',
                        }}>
                          {svc.highlights.map((h, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                              <CheckCircle2 size={18} color="#0F172A" style={{ flexShrink: 0 }} />
                              <span style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 600 }}>
                                {h}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Action Buttons */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
                        <Link
                          to={`/offert?service=${svc.slug}`}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            background: '#0F172A',
                            color: '#ffffff',
                            fontWeight: 700,
                            fontSize: '0.95rem',
                            padding: '14px 28px',
                            borderRadius: 'var(--border-radius-pill)',
                            textDecoration: 'none',
                            boxShadow: '0 4px 16px rgba(15, 23, 42, 0.2)',
                            transition: 'all 0.25s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = '#1E293B';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = '#0F172A';
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}
                        >
                          Begär offert för {svc.title} <ArrowRight size={16} />
                        </Link>

                        <Link
                          to={`/tjanster/${svc.slug}`}
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            background: '#ffffff',
                            border: '1.5px solid #cbd5e1',
                            color: '#0f172a',
                            fontWeight: 700,
                            fontSize: '0.92rem',
                            padding: '12px 22px',
                            borderRadius: 'var(--border-radius-pill)',
                            textDecoration: 'none',
                            transition: 'all 0.2s ease',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = '#0f172a';
                            e.currentTarget.style.background = '#f8fafc';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = '#cbd5e1';
                            e.currentTarget.style.background = '#ffffff';
                          }}
                        >
                          Läs mer & fördjupning <ArrowRight size={15} />
                        </Link>
                      </div>
                    </ScrollReveal>
                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ── CTA BANNER ────────────────────────────────────────── */}
      <CTABanner />

    </main>
  );
}
