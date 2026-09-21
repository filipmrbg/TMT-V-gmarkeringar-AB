import { useState, useMemo, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Phone,
  ShieldCheck,
  Clock,
  MapPin,
  ChevronDown,
  Building2,
  Truck,
  Award,
  FileCheck2,
} from 'lucide-react';
import services, { ServiceItem } from '../data/services';
import ServiceIcon from '../components/ServiceIcons';
import ScrollReveal from '../components/ScrollReveal';
import CTABanner from '../components/CTABanner';
import { usePageTitle } from '../hooks/usePageTitle';

const container: React.CSSProperties = {
  maxWidth: 'var(--container-max, 1200px)',
  margin: '0 auto',
  padding: '0 clamp(20px, 5vw, 40px)',
};

const SLUG_ALIASES: Record<string, string> = {
  'parkeringsplatser': 'vagmarkering',
  'parkeringsmarkering': 'vagmarkering',
  'laddplatser-symboler': 'vagmarkering',
  'laddplatser': 'vagmarkering',
  'overgangsstallen': 'vagmarkering',
  'industrimalning': 'vagmarkering',
  'vagmarkeringar': 'vagmarkering',
};

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const resolvedSlug = (slug && SLUG_ALIASES[slug]) || slug;

  useEffect(() => {
    if (slug && SLUG_ALIASES[slug]) {
      navigate(`/tjanster/${SLUG_ALIASES[slug]}`, { replace: true });
    }
  }, [slug, navigate]);

  const service = useMemo(() => {
    return services.find((s) => s.slug === resolvedSlug);
  }, [resolvedSlug]);

  // SEO Page Title & Description
  const pageTitle = service?.seoTitle || (service
    ? `${service.title} i hela Sverige | TMT Vägmarkeringar AB`
    : 'Tjänst | TMT Vägmarkeringar');

  const pageDescription = service?.seoDescription || (service
    ? `${service.title}: ${service.shortDescription} Vi utför arbeten i Stockholm, Göteborg, Malmö och över hela Sverige. Kontakta oss för offert!`
    : 'Professionella tjänster inom vägmarkering, linjemålning och trafiksäkerhet över hela Sverige.');

  usePageTitle(pageTitle, pageDescription, service?.image);

  // ── JSON-LD Structured Data (Schema.org) for Google Rich Results ──
  useEffect(() => {
    if (!service) return;

    const origin = typeof window !== 'undefined' && window.location.origin.startsWith('http')
      ? window.location.origin
      : 'https://tmtvagmarkeringar.se';
    const pageUrl = `${origin}/tjanster/${service.slug}`;
    const imageUrl = service.image.startsWith('http') ? service.image : `${origin}${service.image}`;

    const schemas: object[] = [
      // 1. Service Schema
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        'name': service.title,
        'serviceType': service.tag || service.title,
        'description': service.shortDescription,
        'provider': {
          '@type': 'LocalBusiness',
          'name': 'TMT Vägmarkeringar AB',
          'url': 'https://tmtvagmarkeringar.se',
          'telephone': '073-771 86 17',
          'email': 'info@tmtab.com',
        },
        'areaServed': {
          '@type': 'Country',
          'name': 'Sverige',
        },
        'image': imageUrl,
        'url': pageUrl,
      },
      // 2. BreadcrumbList Schema
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        'itemListElement': [
          {
            '@type': 'ListItem',
            'position': 1,
            'name': 'Hem',
            'item': origin,
          },
          {
            '@type': 'ListItem',
            'position': 2,
            'name': 'Tjänster',
            'item': `${origin}/tjanster`,
          },
          {
            '@type': 'ListItem',
            'position': 3,
            'name': service.title,
            'item': pageUrl,
          },
        ],
      },
    ];

    // 3. FAQPage Schema (enables expandable accordion snippets in Google Search)
    if (service.faq && service.faq.length > 0) {
      schemas.push({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': service.faq.map((item) => ({
          '@type': 'Question',
          'name': item.question,
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': item.answer,
          },
        })),
      });
    }

    // Inject/Update script element in document.head
    let scriptEl = document.getElementById('service-jsonld') as HTMLScriptElement | null;
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = 'service-jsonld';
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(schemas);

    return () => {
      const el = document.getElementById('service-jsonld');
      if (el) el.remove();
    };
  }, [service]);

  // Accordion state for FAQ
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex((prev) => (prev === index ? null : index));
  };

  // Other related services (exclude current)
  const relatedServices = useMemo(() => {
    if (!service) return [];
    return services.filter((s) => s.slug !== service.slug).slice(0, 3);
  }, [service]);

  // Fallback if slug not found
  if (!service) {
    return (
      <main style={{ minHeight: '70vh', padding: '160px 20px 80px', textAlign: 'center' }}>
        <div style={container}>
          <h1 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '16px' }}>
            Tjänsten kunde inte hittas
          </h1>
          <p style={{ color: '#64748b', marginBottom: '32px' }}>
            Vi kunde tyvärr inte hitta den specifika tjänsten du letade efter.
          </p>
          <button
            onClick={() => navigate('/tjanster')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: '#0f172a',
              color: '#ffffff',
              padding: '12px 24px',
              borderRadius: '999px',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <ArrowLeft size={16} /> Tillbaka till alla tjänster
          </button>
        </div>
      </main>
    );
  }

  return (
    <main style={{ fontFamily: 'var(--font-family)', background: '#ffffff', color: '#0f172a' }}>

      {/* ── 1. HERO HEADER ────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          backgroundImage: `url("${service.heroImage || service.image || '/services/vagmarkering.jpg'}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 45%',
          paddingTop: 'clamp(140px, 16vw, 170px)',
          paddingBottom: 'clamp(60px, 8vw, 85px)',
          color: '#ffffff',
        }}
      >
        {/* Dark High-Contrast Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.90) 0%, rgba(15, 23, 42, 0.82) 100%)',
          }}
        />

        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          {/* Breadcrumbs */}
          <nav
            aria-label="Brödsmulor"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontSize: '0.85rem',
              color: 'rgba(255, 255, 255, 0.75)',
              marginBottom: '20px',
              flexWrap: 'wrap',
            }}
          >
            <Link to="/" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none' }}>
              Hem
            </Link>
            <span>/</span>
            <Link to="/tjanster" style={{ color: 'rgba(255, 255, 255, 0.75)', textDecoration: 'none' }}>
              Tjänster
            </Link>
            <span>/</span>
            <span style={{ color: '#ffffff', fontWeight: 600 }}>{service.title}</span>
          </nav>

          <ScrollReveal animation="blur-in">
            {/* Tag & Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '16px' }}>
              {service.tag && (
                <span
                  style={{
                    background: 'rgba(255, 255, 255, 0.14)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    color: '#ffffff',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '4px 14px',
                    borderRadius: '999px',
                  }}
                >
                  {service.tag}
                </span>
              )}
              {service.badge && (
                <span
                  style={{
                    background: '#ffffff',
                    color: '#0f172a',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                    padding: '4px 14px',
                    borderRadius: '999px',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                  }}
                >
                  {service.badge}
                </span>
              )}
            </div>

            {/* H1 Heading */}
            <h1
              style={{
                color: '#ffffff',
                fontWeight: 700,
                fontSize: 'clamp(2.2rem, 5vw, 3.6rem)',
                lineHeight: 1.12,
                margin: '0 0 18px 0',
                maxWidth: '850px',
              }}
            >
              {service.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={150}>
            {/* Hero Subtitle */}
            <p
              style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
                lineHeight: 1.6,
                maxWidth: '720px',
                margin: '0 0 32px 0',
                fontWeight: 400,
              }}
            >
              {service.heroText}
            </p>

            {/* Hero Actions */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
              <Link
                to={`/offert?service=${service.slug}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  background: '#ffffff',
                  color: '#0f172a',
                  fontWeight: 700,
                  fontSize: '0.98rem',
                  padding: '14px 30px',
                  borderRadius: '999px',
                  textDecoration: 'none',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.25)',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.background = '#f8fafc';
                  e.currentTarget.style.boxShadow = '0 6px 24px rgba(255, 255, 255, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = '#ffffff';
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.25)';
                }}
              >
                Begär offert <ArrowRight size={17} />
              </Link>

              <a
                href="tel:0737718617"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'transparent',
                  border: '2px solid rgba(255, 255, 255, 0.65)',
                  color: '#ffffff',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  padding: '12px 24px',
                  borderRadius: '999px',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                  e.currentTarget.style.borderColor = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.65)';
                }}
              >
                <Phone size={16} /> 073-771 86 17
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── 2. MAIN DETAIL SECTION ────────────────────────────── */}
      <section style={{ padding: 'clamp(50px, 7vw, 90px) 0', background: '#ffffff' }}>
        <div style={container}>
          <div className="service-detail-grid">
            {/* Left: Sidebar (Sticky on Desktop, Natural Flow on Mobile) */}
            <div className="service-detail-sidebar">
              <ScrollReveal animation="fade-up">
                <div
                  style={{
                    position: 'relative',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 45px rgba(15, 23, 42, 0.14)',
                    border: '4px solid #ffffff',
                    aspectRatio: '4/3',
                    background: '#0f172a',
                    marginBottom: '24px',
                  }}
                >
                  <img
                    src={service.image}
                    alt={`${service.title} - professionell linjemålning och vägmarkering utförd av TMT Vägmarkeringar AB`}
                    loading="lazy"
                    decoding="async"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                </div>

                {/* Trust Key Points Box */}
                <div
                  style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '18px',
                    padding: '24px',
                  }}
                >
                  <h4 style={{ margin: '0 0 14px 0', fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>
                    Snabbfakta om vårt arbete
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <MapPin size={18} color="#0f172a" style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: '0.9rem', color: '#334155' }}>
                        <strong>Verksamhetsområde:</strong> Hela Sverige
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <FileCheck2 size={18} color="#0f172a" style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: '0.9rem', color: '#334155' }}>
                        <strong>Standard:</strong> Trafikverkets krav och SS-EN 1436
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Clock size={18} color="#0f172a" style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: '0.9rem', color: '#334155' }}>
                        <strong>Flexibilitet:</strong> Utförs även kvällar och nätter
                      </span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <Award size={18} color="#0f172a" style={{ flexShrink: 0 }} />
                      <span style={{ fontSize: '0.9rem', color: '#334155' }}>
                        <strong>Kvalitetslöfte:</strong> Maximal friktion och slitstyrka
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Detailed Description & Highlights */}
            <div className="service-detail-main">
              <ScrollReveal animation="fade-up" delay={100}>
                {/* Icon & Title Header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: '16px',
                      background: '#f1f5f9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0f172a',
                      flexShrink: 0,
                    }}
                  >
                    <ServiceIcon type={service.slug} size={36} color="currentColor" />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Omfattning och utförande
                    </span>
                    <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', margin: 0, color: '#0f172a', fontWeight: 700 }}>
                      Professionell {service.title.toLowerCase()}
                    </h2>
                  </div>
                </div>

                {/* Detailed Text Body */}
                <div
                  style={{
                    color: '#334155',
                    fontSize: '1.05rem',
                    lineHeight: 1.8,
                    marginBottom: '32px',
                    whiteSpace: 'pre-line',
                  }}
                >
                  {service.detailedDescription}
                </div>

                {/* Highlights Grid */}
                {service.highlights && service.highlights.length > 0 && (
                  <div style={{ marginBottom: '40px' }}>
                    <h3 style={{ fontSize: '1.15rem', color: '#0f172a', fontWeight: 700, marginBottom: '16px' }}>
                      Vad som ingår i tjänsten:
                    </h3>
                    <div className="service-highlights-grid">
                      {service.highlights.map((item, idx) => (
                        <div
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '10px',
                            background: '#f8fafc',
                            border: '1px solid #e2e8f0',
                            padding: '12px 16px',
                            borderRadius: '12px',
                          }}
                        >
                          <CheckCircle2 size={18} color="#0f172a" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span style={{ fontSize: '0.92rem', color: '#1e293b', fontWeight: 600, lineHeight: 1.4 }}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Direct CTA Box */}
                <div
                  style={{
                    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                    color: '#ffffff',
                    padding: '24px clamp(20px, 4vw, 32px)',
                    borderRadius: '20px',
                    boxShadow: '0 12px 30px rgba(15, 23, 42, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '20px',
                  }}
                >
                  <div>
                    <h4 style={{ margin: '0 0 6px 0', fontSize: '1.15rem', fontWeight: 700, color: '#ffffff' }}>
                      Behöver ni hjälp med {service.title.toLowerCase()}?
                    </h4>
                    <p style={{ margin: 0, fontSize: '0.92rem', color: 'rgba(255, 255, 255, 0.8)' }}>
                      Vi återkopplar så snart som möjligt med rådgivning och prisförslag.
                    </p>
                  </div>
                  <Link
                    to={`/offert?service=${service.slug}`}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: '#ffffff',
                      color: '#0f172a',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      padding: '12px 26px',
                      borderRadius: '999px',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
                      transition: 'transform 0.2s ease, background 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)';
                      e.currentTarget.style.background = '#f8fafc';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.background = '#ffffff';
                    }}
                  >
                    Offertförfrågan <ArrowRight size={16} />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. RIKSTÄCKANDE ETABLERING (SEO & NATIONELL FÖRANKRING) ── */}
      <section
        style={{
          background: '#f8fafc',
          padding: 'clamp(70px, 9vw, 100px) 0',
          borderTop: '1px solid #e2e8f0',
          borderBottom: '1px solid #e2e8f0',
        }}
      >
        <div style={container}>
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <ScrollReveal animation="fade-up">
              <span
                style={{
                  background: '#e2e8f0',
                  color: '#0f172a',
                  fontWeight: 700,
                  fontSize: '0.8rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '4px 14px',
                  borderRadius: '999px',
                  display: 'inline-block',
                  marginBottom: '16px',
                }}
              >
                Rikstäckande verksamhet
              </span>
              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                  fontWeight: 700,
                  color: '#0f172a',
                  lineHeight: 1.25,
                  margin: '0 0 16px 0',
                }}
              >
                Vi utför {service.title.toLowerCase()} i hela Sverige
              </h2>
              <p
                style={{
                  fontSize: '1.05rem',
                  color: '#475569',
                  lineHeight: 1.7,
                  margin: '0 0 32px 0',
                }}
              >
                Med mobil maskinpark och flexibel logistik utför TMT Vägmarkeringar AB uppdrag över hela landet.
                Vi samordnar våra etableringar effektivt så att ni får högsta kvalitet och snabb service
                oavsett var i Sverige ert projekt är beläget.
              </p>

              {/* Geographic Hubs Chips */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '10px',
                  flexWrap: 'wrap',
                  marginBottom: '36px',
                }}
              >
                {[
                  'Stockholm och Mälardalen',
                  'Västra Götaland och Göteborg',
                  'Skåne och Malmö',
                  'Jönköping och Småland',
                  'Östergötland',
                  'Värmland och Örebro',
                  'Norrland och regionala orter',
                ].map((region, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: '#ffffff',
                      border: '1px solid #cbd5e1',
                      padding: '8px 16px',
                      borderRadius: '999px',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: '#1e293b',
                      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.04)',
                    }}
                  >
                    <MapPin size={14} color="#0f172a" />
                    <span>{region}</span>
                  </div>
                ))}
              </div>

              <div
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '24px',
                  textAlign: 'left',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '20px',
                }}
              >
                <div>
                  <h4 style={{ margin: '0 0 6px 0', fontSize: '0.95rem', fontWeight: 700, color: '#0f172a' }}>
                    Smidig etablering
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: '#64748b', lineHeight: 1.5 }}>
                    Vi planerar arbetet så att driftstörningar minimeras för boende, besökare och trafik.
                  </p>
                </div>
                <div>
                  <h4 style={{ margin: '0 0 6px 0', fontSize: '0.95rem', fontWeight: 700, color: '#0f172a' }}>
                    Offert och rådgivning
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: '#64748b', lineHeight: 1.5 }}>
                    Vi går igenom era underlag och återkommer så snart som möjligt med ett specificerat prisförslag anpassat för ert projekt.
                  </p>
                </div>
                <div>
                  <h4 style={{ margin: '0 0 6px 0', fontSize: '0.95rem', fontWeight: 700, color: '#0f172a' }}>
                    Tydliga fasta priser
                  </h4>
                  <p style={{ margin: 0, fontSize: '0.88rem', color: '#64748b', lineHeight: 1.5 }}>
                    Inga dolda kostnader. Ni får en specificerad offert baserad på era exakta förutsättningar.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── 4. VEM VI HJÄLPER (B2B MÅLGRUPPER) ────────────────── */}
      <section style={{ padding: 'clamp(70px, 8vw, 100px) 0', background: '#ffffff' }}>
        <div style={container}>
          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 48px auto' }}>
            <ScrollReveal animation="fade-up">
              <h2 style={{ fontSize: 'clamp(1.8rem, 2.8vw, 2.4rem)', fontWeight: 700, margin: '0 0 12px 0', color: '#0f172a' }}>
                Vem passar tjänsten för?
              </h2>
              <p style={{ color: '#64748b', fontSize: '1rem', lineHeight: 1.6, margin: 0 }}>
                Vi anpassar utförandet efter verksamhetens krav, trafikmängd och slitagenivå.
              </p>
            </ScrollReveal>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '24px',
            }}
          >
            {[
              {
                icon: <Building2 size={24} color="#0f172a" />,
                title: 'BRF och Fastighetsbolag',
                desc: 'Tydliga p-rutor, gästplatser och laddzoner som skapar ordning och trygghet för de boende.',
              },
              {
                icon: <Truck size={24} color="#0f172a" />,
                title: 'Logistik och Industri',
                desc: 'Slitstarka golvmarkeringar, gångstråk och säkerhetszoner som minimerar olycksrisker.',
              },
              {
                icon: <MapPin size={24} color="#0f172a" />,
                title: 'Kommuner och Samfälligheter',
                desc: 'Väg- och linjemålning enligt Trafikverkets föreskrifter för allmänna och enskilda vägar.',
              },
              {
                icon: <ShieldCheck size={24} color="#0f172a" />,
                title: 'Bygg och Anläggning',
                desc: 'Pålitlig underentreprenör med modern utrustning för nyetableringar och ombyggnationer.',
              },
            ].map((persona, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                <div
                  style={{
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '16px',
                    padding: '28px 24px',
                    height: '100%',
                    boxSizing: 'border-box',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px)';
                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(15, 23, 42, 0.08)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: '#ffffff',
                      border: '1px solid #e2e8f0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '16px',
                    }}
                  >
                    {persona.icon}
                  </div>
                  <h3 style={{ margin: '0 0 8px 0', fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>
                    {persona.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: '0.92rem', color: '#475569', lineHeight: 1.6 }}>
                    {persona.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. VANLIGA FRÅGOR (FAQ) ────────────────────────────── */}
      {service.faq && service.faq.length > 0 && (
        <section
          style={{
            padding: 'clamp(60px, 8vw, 90px) 0',
            background: '#f8fafc',
            borderTop: '1px solid #e2e8f0',
          }}
        >
          <div style={container}>
            <div style={{ maxWidth: '760px', margin: '0 auto' }}>
              <div style={{ textAlign: 'center', marginBottom: '36px' }}>
                <span
                  style={{
                    background: '#e2e8f0',
                    color: '#0f172a',
                    fontWeight: 700,
                    fontSize: '0.78rem',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    padding: '4px 12px',
                    borderRadius: '999px',
                    display: 'inline-block',
                    marginBottom: '12px',
                  }}
                >
                  Frågor och svar
                </span>
                <h2 style={{ fontSize: 'clamp(1.7rem, 2.5vw, 2.2rem)', margin: 0, color: '#0f172a', fontWeight: 700 }}>
                  Vanliga frågor om {service.title.toLowerCase()}
                </h2>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {service.faq.map((item, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      style={{
                        background: '#ffffff',
                        border: '1px solid #e2e8f0',
                        borderRadius: '14px',
                        overflow: 'hidden',
                        transition: 'border-color 0.2s ease',
                      }}
                    >
                      <button
                        onClick={() => toggleFaq(idx)}
                        aria-expanded={isOpen}
                        style={{
                          width: '100%',
                          textAlign: 'left',
                          padding: '18px 22px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          gap: '14px',
                        }}
                      >
                        <span style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>
                          {item.question}
                        </span>
                        <ChevronDown
                          size={18}
                          color="#64748b"
                          style={{
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.2s ease',
                            flexShrink: 0,
                          }}
                        />
                      </button>
                      {isOpen && (
                        <div
                          style={{
                            padding: '0 22px 18px 22px',
                            color: '#475569',
                            fontSize: '0.95rem',
                            lineHeight: 1.65,
                            borderTop: '1px solid #f1f5f9',
                            paddingTop: '12px',
                          }}
                        >
                          {item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 6. UTFORSKA FLER TJÄNSTER ─────────────────────────── */}
      <section style={{ padding: 'clamp(60px, 8vw, 90px) 0', background: '#ffffff', borderTop: '1px solid #e2e8f0' }}>
        <div style={container}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Fler lösningar
              </span>
              <h2 style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', margin: '4px 0 0 0', color: '#0f172a', fontWeight: 700 }}>
                Andra tjänster vi erbjuder
              </h2>
            </div>
            <Link
              to="/tjanster"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                color: '#0f172a',
                fontWeight: 700,
                fontSize: '0.95rem',
                textDecoration: 'none',
              }}
            >
              Visa alla 8 tjänster <ArrowRight size={16} />
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
            }}
          >
            {relatedServices.map((rel) => (
              <Link
                key={rel.slug}
                to={`/tjanster/${rel.slug}`}
                style={{
                  display: 'block',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(15, 23, 42, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{ height: '180px', overflow: 'hidden', background: '#0f172a' }}>
                  <img
                    src={rel.image}
                    alt={`${rel.title} - TMT Vägmarkeringar AB`}
                    loading="lazy"
                    decoding="async"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                </div>
                <div style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                    <ServiceIcon type={rel.slug} size={22} color="#0f172a" />
                    <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>
                      {rel.title}
                    </h3>
                  </div>
                  <p style={{ margin: '0 0 14px 0', fontSize: '0.88rem', color: '#64748b', lineHeight: 1.5 }}>
                    {rel.shortDescription}
                  </p>
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    Läs mer <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. CTA BANNER ────────────────────────────────────── */}
      <CTABanner />

    </main>
  );
}
