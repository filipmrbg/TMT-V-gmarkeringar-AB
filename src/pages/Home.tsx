import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  Phone,
  MapPin,
  Paintbrush,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import CTABanner from '../components/CTABanner';
import ReviewCard from '../components/ReviewCard';
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
    answer: 'Nej, vi erbjuder alltid kostnadsfria offerter och rådgivning helt utan förbindelser.',
  },
  {
    question: 'Hur fungerar ROT avdraget vid måleri?',
    answer: 'Som privatperson har du rätt till ROT avdrag som reducerar arbetskostnaden med 30 %. Vi sköter all administration direkt med Skatteverket och drar av beloppet direkt på din faktura.',
  },
  {
    question: 'Lämnar ni garanti på utfört måleriarbete?',
    answer: 'Ja, vi arbetar alltid enligt gällande branschstandard och lämnar fullständiga garantier på både utfört arbete och material.',
  },
  {
    question: 'Hjälper ni till med både små och stora måleriprojekt?',
    answer: 'Ja, vi åtar oss allt från målning av ett enskilt rum eller tapetsering till fullständig fasadmålning och rumsrenovering.',
  },
  {
    question: 'Hur går processen till från start till mål?',
    answer: 'Vi inleder med en dialog kring dina färgval och önskemål, tar fram en tydlig offert och sätter en överenskommen tidsplan innan arbetet påbörjas.',
  },
];

const heroSlides = [
  { url: '/hero-slides/slide-1.webp', alt: 'J Måleri Åhus professionellt måleri' },
  { url: '/hero-slides/slide-2.webp', alt: 'Invändigt måleri och tapetsering' },
  { url: '/hero-slides/slide-3.webp', alt: 'Högklassigt måleriarbete med perfekt finish' },
  { url: '/hero-slides/slide-4.webp', alt: 'Fasadmålning och träskydd i Åhus' },
];

export default function Home() {
  usePageTitle(
    'J Måleri Åhus | Måleri och tapetsering i Åhus & Kristianstad',
    'J Måleri Åhus utför allt inom invändigt och utvändigt måleri, tapetsering, spackling och fasadmålning i Åhus/Kristianstad med omnejd för privatpersoner och företag. Kontakta oss för fri offert!'
  );

  const heroBgRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);

  // Auto-advance slideshow every 4s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

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
        alignItems: 'center',
        overflow: 'hidden',
        paddingTop: 'clamp(70px, 10vh, 110px)',
        paddingBottom: '60px',
        boxSizing: 'border-box',
      }}>
        {/* Hero Background Slideshow (Nelhages-inspired) */}
        <div
          ref={heroBgRef}
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 0,
            overflow: 'hidden',
          }}
        >
          {heroSlides.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={slide.url}
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: isActive ? 1 : 0,
                  transition: 'opacity 1.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  pointerEvents: 'none',
                }}
              >
                <img
                  src={slide.url}
                  alt={slide.alt}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding={index === 0 ? 'sync' : 'async'}
                  // @ts-expect-error fetchPriority is supported in modern browsers
                  fetchpriority={index === 0 ? 'high' : 'auto'}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transform: isActive ? 'scale(1.04)' : 'scale(1.0)',
                    transition: 'transform 6s ease-out',
                    filter: 'brightness(0.92) contrast(1.04)',
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Sophisticated gradient overlay for readability & punch */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(15, 23, 42, 0.76) 0%, rgba(15, 23, 42, 0.48) 55%, rgba(15, 23, 42, 0.22) 100%)',
          zIndex: 1,
        }} />

        <div style={{ ...container, position: 'relative', zIndex: 2, width: '100%', display: 'flex', justifyContent: 'center' }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '760px',
            margin: '0 auto',
            paddingTop: '0px',
            paddingBottom: '30px',
          }}>
            {/* Prominent Center Brand Logo (Reference Layout) */}
            <ScrollReveal animation="fade-down" delay={0} duration={0.7}>
              <div style={{
                marginBottom: '18px',
                display: 'flex',
                justifyContent: 'center',
              }}>
                <img
                  src={images.logo.url}
                  alt={images.logo.alt}
                  style={{
                    width: 'clamp(175px, 45vw, 255px)',
                    height: 'auto',
                    display: 'block',
                    filter: 'drop-shadow(0 8px 30px rgba(0, 0, 0, 0.95))',
                  }}
                />
              </div>
            </ScrollReveal>

            {/* Top Location Line */}
            <ScrollReveal animation="fade-down" delay={100} duration={0.6}>
              <span style={{
                fontFamily: "'Outfit', sans-serif",
                letterSpacing: '0.24em',
                textTransform: 'uppercase',
                fontSize: 'clamp(0.7rem, 1.2vw, 0.82rem)',
                fontWeight: 700,
                color: 'rgba(255, 255, 255, 0.92)',
                display: 'block',
                marginBottom: '14px',
              }}>
                ÅHUS • KRISTIANSTAD
              </span>
            </ScrollReveal>

            {/* Headline (H1) based on Insta bio */}
            <ScrollReveal animation="fade-up" delay={200} duration={0.8}>
              <h1 style={{
                fontFamily: "'Outfit', sans-serif",
                color: '#ffffff',
                fontSize: 'clamp(1.75rem, 3.6vw, 2.9rem)',
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: '-0.01em',
                margin: '0 0 14px 0',
                textShadow: '0 3px 20px rgba(0, 0, 0, 0.75), 0 1px 4px rgba(0, 0, 0, 0.9)',
              }}>
                Professionellt måleri för privatpersoner & företag
              </h1>
            </ScrollReveal>

            {/* Subtitle / Description - Clean, grounded & high quality */}
            <ScrollReveal animation="fade-up" delay={300} duration={0.8}>
              <p style={{
                fontFamily: "'Outfit', 'Plus Jakarta Sans', sans-serif",
                color: 'rgba(255, 255, 255, 0.92)',
                fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
                lineHeight: 1.55,
                maxWidth: '560px',
                margin: '0 auto 28px auto',
                textShadow: '0 2px 12px rgba(0, 0, 0, 0.85)',
                fontWeight: 400,
              }}>
                Allt inom invändig och utvändig målning samt tapetsering i Åhus/Kristianstad med omnejd. Noggrant utfört med högsta kvalitet och personlig service.
              </p>
            </ScrollReveal>

            {/* Action Buttons */}
            <ScrollReveal animation="fade-up" delay={400} duration={0.8}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                flexWrap: 'wrap',
                width: '100%',
              }}>
                <Button variant="primary" size="lg" href="/offert">
                  Begär kostnadsfri offert
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  href="tel:0768899716"
                  onClick={(e) => {
                    if (window.innerWidth > 768) {
                      e.preventDefault();
                      setIsCallModalOpen(true);
                    }
                  }}
                >
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <Phone size={18} />
                    Ring 076-889 97 16
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

      {/* ── SECTION 2: VÅRA TJÄNSTER (CLEAN 4 CARDS ON A ROW - NO PHOTOS) ───── */}
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
                  color: 'var(--color-primary)',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '8px',
                }}>
                  Vad vi erbjuder
                </span>
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 800,
                  fontSize: 'clamp(1.9rem, 3.6vw, 2.7rem)',
                  letterSpacing: '-0.025em',
                  margin: 0,
                  lineHeight: 1.18,
                }}>
                  Måleritjänster med fokus på kvalitet
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
                  Från invändig målning och tapetsering till komplett fasadmålning i Åhus/Kristianstad med omnejd.
                </p>
                <Link
                  to="/tjanster"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--color-primary)',
                    fontWeight: 700,
                    fontSize: '0.92rem',
                    textDecoration: 'none',
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
                      color="var(--color-primary, #c28447)"
                      size={42}
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

      {/* ── SECTION 3: DIN LOKALA MÅLERIFIRMA / OM OSS ─────────────── */}
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
                  alt="J Måleri Åhus"
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
                  fontWeight: 800,
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  lineHeight: 1.2,
                  margin: '0 0 14px 0',
                }}>
                  Din lokala målerifirma i Åhus med omnejd
                </h2>
              </ScrollReveal>
              <ScrollReveal animation="scale-x-left" delay={200} duration={0.6}>
                <span style={{ display: 'block', width: '60px', height: '3px', background: 'var(--color-primary)', borderRadius: '2px', margin: '0 0 24px' }} />
              </ScrollReveal>
              <ScrollReveal animation="fade-right" duration={0.8} delay={100}>
                <p style={{
                  color: 'var(--color-gray-600)',
                  fontSize: '1rem',
                  lineHeight: 1.75,
                  margin: '0 0 32px 0',
                }}>
                  J Måleri Åhus har sin bas i Åhus och utför allt inom invändigt och utvändigt måleri, tapetsering, spackling och fasadrenovering för både privatpersoner och företag. Vi kombinerar gediget hantverkskunnande med moderna kvalitetsfärger och noggrannhet i varje penseldrag – så att du får ett perfekt och hållbart resultat från start till mål.
                </p>
              </ScrollReveal>
              <ScrollReveal animation="fade-right" duration={0.8} delay={200}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    'En och samma kontaktperson genom hela projektet',
                    'Tydliga offerter, fasta priser och direkt ROT avdrag (30%)',
                    'Noggrant underarbete och kvalitetsfärg för maximal livslängd',
                    'Lokal närvaro och personlig service i Åhus/Kristianstad med omnejd',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <CheckCircle2 size={24} color="var(--color-primary)" style={{ flexShrink: 0 }} />
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

      {/* ── SECTION 5: HUR DET FUNGERAR (3-STEGS PROCESS MED PILAR) ── */}
      <section style={{
        background: '#ffffff',
        padding: 'clamp(60px, 8vw, 100px) 0',
        borderTop: '1px solid #e2e8f0',
      }}>
        <div style={container}>
          {/* Clean Authentic Split-Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '44px',
          }}>
            <div style={{ maxWidth: '540px' }}>
              <ScrollReveal animation="fade-right">
                <span style={{
                  color: 'var(--color-primary)',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '8px',
                }}>
                  Enkelt och tryggt
                </span>
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 800,
                  fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)',
                  letterSpacing: '-0.025em',
                  margin: 0,
                  lineHeight: 1.2,
                }}>
                  Så går det till från idé till färdigt resultat
                </h2>
              </ScrollReveal>
            </div>

            <div style={{ maxWidth: '420px' }}>
              <ScrollReveal animation="fade-left" delay={150}>
                <p style={{
                  color: 'var(--color-gray-600)',
                  fontSize: '1rem',
                  lineHeight: 1.65,
                  margin: 0,
                }}>
                  Från första kontakt till färdigmålat resultat i tre enkla steg med full transparens och trygghet.
                </p>
              </ScrollReveal>
            </div>
          </div>

          <div className="steps-grid-wrapper" style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            gap: '0',
            textAlign: 'center',
          }}>
            {[
              {
                icon: Phone,
                title: '1. Kontakta oss',
                desc: 'Berätta om dina måleriplaner och idéer. Vi ger kostnadsfri rådgivning och bollar färg- och materialval.',
              },
              {
                icon: MapPin,
                title: '2. Platsbesök och offert',
                desc: 'Vi går igenom underlag och ytor på plats och tar fram en tydlig offert med fast pris och tidsplan.',
              },
              {
                icon: Paintbrush,
                title: '3. Vi målar',
                desc: 'Vi utför måleriarbetet enligt överenskommelse med hög kvalitet, täcker rent och lämnar ett perfekt resultat.',
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <div key={i} style={{ display: 'contents' }}>
                <ScrollReveal animation="blur-in" delay={i * 150} duration={0.8}>
                  <div className="step-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: '1', maxWidth: '280px' }}>
                    <div style={{
                      width: '70px',
                      height: '70px',
                      background: 'var(--color-primary)',
                      borderRadius: 'var(--border-radius-md)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '20px',
                    }}>
                      <Icon size={28} color="#ffffff" />
                    </div>
                    <h3 style={{
                      color: 'var(--color-text-dark)',
                      fontWeight: 700,
                      fontSize: '1.15rem',
                      margin: '0 0 12px 0',
                    }}>
                      {title}
                    </h3>
                    <p style={{
                      color: 'var(--color-gray-600)',
                      fontSize: '0.95rem',
                      lineHeight: 1.65,
                      margin: 0,
                      maxWidth: '260px',
                    }}>
                      {desc}
                    </p>
                  </div>
                </ScrollReveal>
                {i < 2 && (
                  <div className="step-arrow">
                    <svg width="65" height="24" viewBox="0 0 65 24" fill="none" stroke="#C4C4C4" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.75 }}>
                      <path d="M 5 12 C 20 10, 40 10, 58 11" />
                      <path d="M 49 5 C 52 8, 56 10, 58 11" />
                      <path d="M 48 18 C 51 15, 56 12, 58 11" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: MID CTA ──────────────────────────────────── */}
      <section style={{
        position: 'relative',
        padding: 'clamp(50px, 7vw, 80px) 0',
        textAlign: 'center',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(/cta-mid-section.webp)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,31,46,0.88)' }} />
        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          <ScrollReveal animation="scale-in">
            <h2 style={{
              color: 'var(--color-white)',
              fontWeight: 800,
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              margin: '0 0 12px 0',
            }}>
              Nyfiken på vad ditt måleriprojekt kostar?
            </h2>
            <p style={{
              color: 'rgba(255,255,255,0.7)',
              fontSize: '1rem',
              margin: '0 0 32px 0',
              lineHeight: 1.7,
            }}>
              Vi återkopplar med en kostnadsfri offert inom 24 timmar.
            </p>
            <Button variant="primary" size="lg" href="/offert">
              Begär offert
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* ── SECTION 7: KUNDRECENSIONER ──────────────────────────── */}
      <section style={{ background: 'var(--color-light)', padding: 'clamp(60px, 8vw, 100px) 0' }}>
        <div style={container}>
          {/* Clean Authentic Split-Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '24px',
            marginBottom: '44px',
          }}>
            <div>
              <ScrollReveal animation="fade-right">
                <span style={{
                  color: 'var(--color-primary)',
                  fontWeight: 700,
                  fontSize: '0.82rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '8px',
                }}>
                  Kundomdömen
                </span>
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 800,
                  fontSize: 'clamp(1.9rem, 3.4vw, 2.6rem)',
                  letterSpacing: '-0.025em',
                  margin: 0,
                  lineHeight: 1.2,
                }}>
                  Vad säger våra kunder?
                </h2>
              </ScrollReveal>
            </div>

            <div>
              <ScrollReveal animation="fade-left" delay={100}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '0.92rem',
                  color: '#4b5563',
                  fontWeight: 500,
                  background: '#ffffff',
                  padding: '10px 18px',
                  borderRadius: '50px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
                }}>
                  <svg viewBox="0 0 24 24" width="18" height="18" style={{ flexShrink: 0 }}>
                    <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.69a5.74 5.74 0 0 1-2.49 3.77v3.13h4.01c2.34-2.16 3.69-5.32 3.69-8.75z" />
                    <path fill="#34A853" d="M12 24c3.24 0 5.97-1.08 7.96-2.91l-4.01-3.13c-1.11.75-2.53 1.19-3.95 1.19-3.04 0-5.61-2.05-6.53-4.82H1.31v3.23A12 12 0 0 0 12 24z" />
                    <path fill="#FBBC05" d="M5.47 14.33A7.16 7.16 0 0 1 5 12c0-.8.14-1.58.39-2.33V6.44H1.31A11.96 11.96 0 0 0 0 12c0 2.05.52 4 1.31 5.67l4.16-3.34z" />
                    <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.22 0 12 0A12 12 0 0 0 1.31 6.44l4.16 3.23a7.18 7.18 0 0 1 6.53-4.92z" />
                  </svg>
                  <span style={{ fontWeight: 700, color: '#111827' }}>5.0 / 5</span>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={15} fill="#FBBC05" color="#FBBC05" />
                    ))}
                  </div>
                  <span style={{ color: 'var(--color-gray-600)', fontSize: '0.85rem' }}>(Omdömen i Åhus och Kristianstad)</span>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <div className="reviews-grid">
            {[
              {
                name: 'Johan E.',
                location: 'Åhus',
                text: 'Vi anlitade J Måleri Åhus för ommålning av hela nedervåningen inklusive spackling och målning i vardagsrummet. Otroligt proffsigt bemötande av Joakim, raka besked och fantastiskt resultat med knivskarpa linjer. Rekommenderas varmt!',
                stars: 5,
                date: 'för 2 veckor sedan',
                authorSub: 'Lokal guide • 14 omdömen',
                avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120'
              },
              {
                name: 'Karin M.',
                location: 'Kristianstad',
                text: 'J Måleri Åhus hjälpte oss med utvändig fasadmålning av villan och garaget. Från grundlig tvätt och skrapning till två strykningar flöt allt på helt enligt tidsplanen. Mycket noggranna hantverkare som lämnade tomten skinande ren.',
                stars: 5,
                date: 'för en månad sedan',
                authorSub: '8 omdömen',
                avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120&h=120'
              },
              {
                name: 'Markus L.',
                location: 'Yngsjö',
                text: 'Toppklassigt måleriarbete vid vår renovering. J Måleri Åhus levererade perfekt finish på både väggar, tak och snickerier. Tryggt, prisvärt och med full koll på ROT avdraget!',
                stars: 5,
                date: 'för 2 månader sedan',
                authorSub: 'Lokal guide • 19 omdömen',
                avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120'
              },
            ].map((review, i) => {
              const delay = i * 150;
              return (
                <ScrollReveal key={i} animation="fade-up" delay={delay}>
                  <ReviewCard review={review} />
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: VANLIGA FRÅGOR (FAQ - DARK CONTRAST BREAK) ── */}
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
          background: 'radial-gradient(ellipse at 85% 25%, rgba(194, 132, 71, 0.12) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          <FAQAccordion
            items={homeFaqItems}
            title="Vanliga frågor"
            subtitle="Här hittar du svar på vanliga funderingar kring offerter, ROT avdrag och hur vi arbetar."
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
        .step-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 80px;
          height: 70px;
        }
        @media (max-width: 1024px) {
          .reviews-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr !important; gap: 32px !important; }
          .reviews-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
          .steps-grid-wrapper { flex-direction: column !important; align-items: center !important; gap: 24px !important; }
          .step-arrow {
            transform: rotate(90deg);
          }
        }
      `}</style>
    </main>
  );
}
