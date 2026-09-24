import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import CTABanner from '../components/CTABanner';
import SocialBanner from '../components/SocialBanner';
import ProjectsGallery from '../components/ProjectsGallery';
import FAQAccordion from '../components/FAQAccordion';
import CallModal from '../components/CallModal';
import { ServiceIcon } from '../components/ServiceIcons';
import { usePageTitle } from '../hooks/usePageTitle';
import services, { ServiceItem } from '../data/services';
import images from '../data/images';

const container: React.CSSProperties = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 clamp(20px, 5vw, 40px)',
};

const homeFaqItems = [
  {
    question: 'Kostar det något att få en offert?',
    answer: 'Nej, att begära offert och teknisk rådgivning förbinder er inte till något. Vi lämnar ett tydligt prisförslag anpassat för ert projekt.',
  },
  {
    question: 'Utför ni vägmarkeringar över hela Sverige?',
    answer: 'Ja, TMT Vägmarkeringar AB utför uppdrag åt företag, kommuner, bostadsrättsföreningar, samfälligheter och fastighetsägare över hela landet.',
  },
  {
    question: 'Vilka typer av material använder ni vid linjemålning?',
    answer: 'Vi arbetar med godkänd termoplast, slitstark 2K-vägfärg och reflexpärlor som uppfyller alla krav och standarder för nordiskt klimat och hög trafikbelastning.',
  },
  {
    question: 'Hur snabbt kan ytan öppnas för trafik efter markering?',
    answer: 'Termoplast och moderna markeringsfärger torkar och härdar mycket snabbt, oftast inom 15–30 minuter, vilket minimerar avstängningar och driftstörningar.',
  },
  {
    question: 'Kan ni utföra arbetet under kvällar, nätter eller helger?',
    answer: 'Ja, vi anpassar våra arbetstider efter trafikflöde och er verksamhet och utför regelbundet uppdrag nattetid eller under helger när trafiken är som lägst.',
  },
];

export default function Home() {
  usePageTitle(
    'TMT Vägmarkeringar | Professionell vägmarkering och linjemålning i hela Sverige',
    'TMT Vägmarkeringar AB utför professionell vägmarkering, linjemålning, parkeringsrutor och industrimålning för företag, kommuner och BRF:er i hela Sverige. Kontakta oss för offert!'
  );

  const heroBgRef = useRef<HTMLDivElement>(null);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (heroBgRef.current) {
            heroBgRef.current.style.transform = `translate3d(0, ${window.scrollY * 0.5}px, 0)`;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main style={{ fontFamily: 'var(--font-family)' }}>

      {/* ── SECTION 1: HERO ─────────────────────────────────────── */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: 'clamp(85px, 10vh, 110px)',
        paddingBottom: 'clamp(40px, 6vh, 60px)',
        boxSizing: 'border-box',
      }}>
        {/* Hero Background Video */}
        <div
          ref={heroBgRef}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            overflow: 'hidden',
          }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          >
            <source
              src={images.hero.videoUrl || 'https://d8j0ntlcm91z4.cloudfront.net/user_3G5LlmMYORSdAk8SxzXrK2S0Is5/hf_20260916_120304_b6e22521-4e42-4364-9c14-ebed64144e92.mp4'}
              type="video/mp4"
            />
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Balanced subtle gradient overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.48) 0%, rgba(15, 23, 42, 0.26) 45%, rgba(15, 23, 42, 0.52) 100%)',
          zIndex: 1,
          pointerEvents: 'none',
        }} />

        <div style={{ ...container, position: 'relative', zIndex: 2, width: '100%', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '860px',
            margin: '0 auto',
            paddingTop: '0',
            paddingBottom: '10px',
          }}>
            {/* ── Brand Emblem / Logo ── */}
            <ScrollReveal animation="fade-up" duration={0.9}>
              <div style={{
                marginBottom: '24px',
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
              }}>
                {/* Ambient glow behind logo */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 'clamp(320px, 38vw, 480px)',
                  height: 'clamp(320px, 38vw, 480px)',
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.04) 45%, transparent 70%)',
                  borderRadius: '50%',
                  pointerEvents: 'none',
                  filter: 'blur(36px)',
                }} />
                <img
                  src={images.logo.url}
                  alt={images.logo.alt}
                  style={{
                    width: 'clamp(260px, 30vw, 380px)',
                    height: 'auto',
                    display: 'block',
                    filter: 'drop-shadow(0 14px 42px rgba(0, 0, 0, 0.95)) drop-shadow(0 4px 16px rgba(0, 0, 0, 0.8))',
                    position: 'relative',
                    zIndex: 1,
                  }}
                />
              </div>
            </ScrollReveal>

            {/* ── Thin silver accent divider ── */}
            <ScrollReveal animation="fade-up" delay={120} duration={0.6}>
              <div style={{
                width: 'clamp(70px, 8vw, 110px)',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
                marginBottom: '18px',
                borderRadius: '1px',
              }} />
            </ScrollReveal>

            {/* ── Headline ── */}
            <ScrollReveal animation="fade-up" delay={200} duration={0.8}>
              <h1 style={{
                fontFamily: "var(--font-heading)",
                color: '#ffffff',
                fontSize: 'clamp(1.5rem, 2.7vw, 2.35rem)',
                fontWeight: 700,
                lineHeight: 1.22,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                margin: '0 0 12px 0',
                textShadow: '0 4px 24px rgba(0, 0, 0, 0.85)',
              }}>
                Professionell vägmarkering och linjemålning
              </h1>
            </ScrollReveal>

            {/* ── Subtitle ── */}
            <ScrollReveal animation="fade-up" delay={280} duration={0.8}>
              <p style={{
                fontFamily: "var(--font-body)",
                color: 'rgba(255, 255, 255, 0.85)',
                fontSize: 'clamp(0.92rem, 1.1vw, 1.05rem)',
                lineHeight: 1.6,
                maxWidth: '580px',
                margin: '0 auto 24px auto',
                textShadow: '0 2px 12px rgba(0, 0, 0, 0.7)',
                fontWeight: 400,
                letterSpacing: '0.01em',
              }}>
                Vi hjälper företag, kommuner och BRF:er med hållbara vägmarkeringar, parkeringslinjer och industrimålning i hela Sverige.
              </p>
            </ScrollReveal>

            {/* ── Action Buttons ── */}
            <ScrollReveal animation="fade-up" delay={450} duration={0.8}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '14px',
                flexWrap: 'wrap',
                width: '100%',
              }}>
                <Button variant="white" size="lg" href="/offert">
                  Begär offert
                </Button>

                <Button variant="outline" size="lg" href="/#tjanster">
                  Våra tjänster
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  href="tel:0737718617"
                  onClick={(e) => {
                    if (window.innerWidth > 768) {
                      e.preventDefault();
                      setIsCallModalOpen(true);
                    }
                  }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <Phone size={16} />
                    073-771 86 17
                  </span>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── CALL MODAL POPUP ────────────────────────────────────── */}
      <CallModal
        isOpen={isCallModalOpen}
        onClose={() => setIsCallModalOpen(false)}
      />

      {/* ── SECTION 2: VÅRA TJÄNSTER (CLEAN 4 CARDS ON A ROW) ───── */}
      <section
        id="tjanster"
        style={{
          background: '#f8fafc',
          padding: 'clamp(80px, 10vw, 120px) 0',
          borderTop: '1px solid #e2e8f0',
        }}
      >
        <div style={container}>
          {/* Authentic Split-Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '44px',
          }}>
            <div style={{ maxWidth: '580px' }}>
              <ScrollReveal animation="fade-right">
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
                  Vad vi erbjuder
                </span>
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.9rem, 3.6vw, 2.7rem)',
                  margin: 0,
                  lineHeight: 1.18,
                }}>
                  Väg- och linjemålning med fokus på kvalitet
                </h2>
              </ScrollReveal>
            </div>

            <div style={{ maxWidth: '420px' }}>
              <ScrollReveal animation="fade-left" delay={150}>
                <p style={{
                  color: 'var(--color-gray-600)',
                  fontSize: '1rem',
                  lineHeight: 1.65,
                  margin: '0 0 12px 0',
                }}>
                  Från kompletta vägmarkeringar och linjefräsning till snöröjning och TMA-säkerhet i hela Sverige.
                </p>
                <Link
                  to="/tjanster"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#0f172a',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    textDecoration: 'none',
                    borderBottom: '2px solid #0f172a',
                    paddingBottom: '2px',
                  }}
                >
                  Utforska alla tjänster <ArrowRight size={16} />
                </Link>
              </ScrollReveal>
            </div>
          </div>

          {/* Clean Architectural Icon-Centric Grid (4 cards on a row) */}
          <div className="services-showcase-grid">
            {services.map((svc: ServiceItem, index: number) => (
              <ScrollReveal key={svc.slug} animation="fade-up" delay={index * 80}>
                <Link
                  to={svc.href}
                  className="service-feature-card"
                  aria-label={`Läs mer om ${svc.title}`}
                >
                  {/* Bespoke Craft Line Icon */}
                  <div className="service-feature-icon">
                    <ServiceIcon
                      type={svc.slug}
                      color="currentColor"
                      size={34}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="service-feature-title">
                    {svc.title}
                  </h3>

                  {/* Description */}
                  <p className="service-feature-desc">
                    {svc.shortDescription}
                  </p>

                  {/* Clean Link Indicator */}
                  <div className="service-feature-link">
                    <span>Läs mer om tjänsten</span>
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 3: DIN PARTNER INOM VÄGMARKERING / OM OSS ─────── */}
      <section style={{ background: '#ffffff', padding: 'clamp(60px, 8vw, 100px) 0', borderTop: '1px solid #e2e8f0' }}>
        <div style={container}>
          <div className="two-col" style={{
            display: 'grid',
            gridTemplateColumns: 'clamp(280px, 35%, 400px) 1fr',
            gap: '60px',
            alignItems: 'center',
          }}>
            {/* Left: Company Image Card */}
            <ScrollReveal animation="fade-left" duration={0.8}>
              <div style={{
                position: 'relative',
                width: '100%',
                maxWidth: '440px',
                margin: '0 auto',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 12px 36px rgba(15, 23, 42, 0.08)',
                border: '1px solid #e2e8f0',
                background: '#f8fafc',
                height: '380px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0',
              }}>
                <img
                  src={images.about.hero.url}
                  alt="TMT Vägmarkeringar AB"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '24px',
                    display: 'block',
                  }}
                />
              </div>
            </ScrollReveal>

            {/* Right: text */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <ScrollReveal animation="fade-right" duration={0.8}>
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  lineHeight: 1.2,
                  margin: '0 0 14px 0',
                }}>
                  Trygg partner för vägmarkering i hela Sverige
                </h2>
              </ScrollReveal>
              <ScrollReveal animation="scale-x-left" delay={200} duration={0.6}>
                <span style={{ display: 'block', width: '60px', height: '3px', background: '#0F172A', borderRadius: '2px', margin: '0 0 24px' }} />
              </ScrollReveal>
              <ScrollReveal animation="fade-right" duration={0.8} delay={100}>
                <p style={{
                  color: 'var(--color-gray-600)',
                  fontSize: '1rem',
                  lineHeight: 1.75,
                  margin: '0 0 32px 0',
                }}>
                  TMT Vägmarkeringar AB är specialister på vägmarkering, linjemålning och parkeringsmarkeringar. Sedan starten 2019 har vi hjälpt företag, kommuner, bostadsrättsföreningar och fastighetsägare över hela Sverige att skapa säkra, tydliga och hållbara trafikmiljöer. Med över 30 års samlad erfarenhet erbjuder vi professionella lösningar anpassade efter varje kunds behov.
                </p>
              </ScrollReveal>
              <ScrollReveal animation="fade-right" duration={0.8} delay={200}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    'Över 30 års samlad branscherfarenhet inom linjemålning',
                    'Slitstarka och godkända material anpassade för nordiskt klimat',
                    'Snabb etablering och flexibla arbetstider med minimal trafikstörning',
                    'Kompletta helhetslösningar för företag, kommuner och BRF:er',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <CheckCircle2 size={22} color="#0F172A" style={{ flexShrink: 0 }} />
                      <span style={{ color: 'var(--color-text-dark)', fontWeight: 600, fontSize: '0.95rem' }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fade-right" duration={0.8} delay={250}>
                <div style={{ marginTop: '32px' }}>
                  <Button variant="dark" href="/om-oss">
                    Läs mer om oss
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: REFERENSER / PROJEKT ──────────────────────── */}
      <ProjectsGallery />

      {/* ── SECTION 5: MID CTA ──────────────────────────────────── */}
      <section style={{
        position: 'relative',
        padding: 'clamp(50px, 7vw, 80px) 0',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${images.cta?.midSection?.url || '/services/vagmarkering.jpg'})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 50%',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.90) 0%, rgba(15, 23, 42, 0.84) 100%)' }} />
        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          <ScrollReveal animation="scale-in">
            <h2 style={{
              color: 'var(--color-white)',
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              margin: '0 0 12px 0',
            }}>
              Behöver ni professionell vägmarkering eller linjemålning?
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '1rem',
              margin: '0 0 32px 0',
              lineHeight: 1.7,
            }}>
              Vi återkopplar med rådgivning och prisförslag så snart som möjligt.
            </p>
            <Button variant="white" size="lg" href="/offert">
              Begär offert
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 7: CERTIFIERINGAR & BEHÖRIGHETER (NATURAL SHOWCASE — ZERO CARDS) ── */}
      <section
        id="certifieringar"
        style={{
          background: '#ffffff',
          padding: 'clamp(80px, 9vw, 120px) 0',
          position: 'relative',
          borderTop: '1px solid #e2e8f0',
          borderBottom: '1px solid #e2e8f0',
        }}
      >
        <div style={container}>
          {/* Section Header - Clean & Natural */}
          <ScrollReveal animation="fade-up">
            <div style={{ textAlign: 'center', marginBottom: 'clamp(48px, 6vw, 70px)' }}>
              <span style={{
                color: '#0f172a',
                fontWeight: 700,
                fontSize: '0.8rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                display: 'inline-block',
                marginBottom: '12px',
                background: '#e2e8f0',
                padding: '5px 16px',
                borderRadius: '999px',
              }}>
                Auktoriserad och certifierad
              </span>
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                color: 'var(--color-text-dark)',
                fontSize: 'clamp(2rem, 3.4vw, 2.75rem)',
                fontWeight: 700,
                margin: '0 0 12px 0',
                textTransform: 'uppercase',
              }}>
                Certifieringar och behörigheter
              </h2>
              <p style={{
                color: 'var(--color-gray-600)',
                fontSize: '1.05rem',
                maxWidth: '600px',
                margin: '0 auto',
                lineHeight: 1.6,
              }}>
                Vår personal innehar alla nödvändiga certifieringar och behörigheter för säkra och godkända entreprenader.
              </p>
            </div>
          </ScrollReveal>

          {/* Natural, Large Logo Showcase — Pure Emblems, Zero Cards */}
          <div className="cert-logos-showcase">
            {[
              {
                logo: '/id06.png',
                alt: 'ID06 - Auktoriserad och certifierad personalliggare',
                title: 'ID06',
                maxH: '95px',
                maxW: '130px',
              },
              {
                logo: '/heta-arbeten.png',
                alt: 'Heta Arbeten - Brandskyddsföreningen certifierad',
                title: 'Heta Arbeten - Brandskyddsföreningen',
                maxH: '80px',
                maxW: '180px',
              },
              {
                logo: '/trafikverket-clean.png',
                alt: 'Trafikverket Arbete på väg 1+2 certifierad',
                title: 'Trafikverket - Arbete på väg 1+2',
                maxH: '58px',
                maxW: '200px',
              },
              {
                logo: '/ssg.png',
                alt: 'SSG Entre - Industrisäkerhet certifierad',
                title: 'SSG - Standard Solutions Group',
                maxH: '58px',
                maxW: '190px',
              },
            ].map((cert, i) => (
              <ScrollReveal key={cert.title} animation="fade-up" delay={i * 90}>
                <div
                  className="cert-logo-item"
                  title={cert.title}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px) scale(1.06)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  }}
                >
                  <img
                    className="cert-logo-img"
                    src={cert.logo}
                    alt={cert.alt}
                    loading="lazy"
                    style={{
                      maxHeight: cert.maxH,
                      maxWidth: cert.maxW,
                    }}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: VANLIGA FRÅGOR (FAQ) ── */}
      <section style={{
        background: '#0f172a',
        padding: 'clamp(70px, 9vw, 110px) 0',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Subtle decorative glow */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 85% 25%, rgba(255, 255, 255, 0.12) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          <FAQAccordion
            items={homeFaqItems}
            title="Vanliga frågor"
            subtitle="Här hittar du svar på vanliga funderingar kring offerter, material och hur vi arbetar över hela Sverige."
            buttonText="Kontakta oss direkt"
            buttonLink="/kontakt"
            dark={true}
          />
        </div>
      </section>

      {/* ── SOCIAL MEDIA BANNER ─────────────────────────────────── */}
      <SocialBanner />

      {/* ── SECTION 10: CTA BANNER ───────────────────────────────── */}
      <CTABanner />

      {/* ── STYLES ───────────────────────────────── */}
      <style>{`
        .steps-grid-wrapper {
          display: flex;
          align-items: flex-start;
          justify-content: center;
        }
        .review-card-el {
          background: var(--color-white);
          border: 1px solid #EDE8E0;
          border-radius: var(--border-radius-lg);
          padding: 28px 30px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .review-card-el:hover {
          transform: translateY(-5px) rotate(-0.5deg);
          box-shadow: 0 16px 40px rgba(28,21,16,0.10);
        }
        .cert-logos-showcase {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          align-items: center;
          justify-items: center;
          gap: clamp(28px, 4vw, 56px);
          max-width: 1100px;
          margin: 0 auto;
        }
        .cert-logo-item {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 95px;
          padding: 8px 12px;
          box-sizing: border-box;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .cert-logo-img {
          width: auto;
          height: auto;
          object-fit: contain;
          display: block;
          filter: drop-shadow(0 4px 12px rgba(15, 23, 42, 0.05));
          transition: filter 0.35s ease, transform 0.35s ease;
        }
        @media (max-width: 960px) {
          .cert-logos-showcase {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
            max-width: 480px;
          }
          .cert-logo-item {
            height: 75px;
            padding: 4px 8px;
          }
        }
        @media (max-width: 640px) {
          .cert-logos-showcase {
            grid-template-columns: 1fr;
            gap: 32px;
            max-width: 260px;
          }
          .cert-logo-item {
            height: auto !important;
            padding: 0 !important;
          }
          .cert-logo-img {
            max-height: 52px !important;
            max-width: 170px !important;
          }
        }
        @media (max-width: 1024px) {
          .reviews-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr !important; gap: 32px !important; }
          .reviews-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      `}</style>
    </main>
  );
}
