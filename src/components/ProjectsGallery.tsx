import { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import Button from './Button';
import images from '../data/images';

interface ProjectItem {
  id: string;
  image: string;
  alt: string;
  title: string;
  category: string;
}

const portfolioList: ProjectItem[] = (images.portfolio && images.portfolio.length > 0
  ? images.portfolio
  : images.gallery.map((g, i) => ({
      image: g,
      title: `Måleriprojekt ${i + 1}`,
      category: 'Måleri',
    }))
).map((item, i) => ({
  id: String(i + 1),
  image: typeof item.image === 'string' ? item.image : item.image.url,
  alt: typeof item.image === 'string' ? item.title : item.image.alt,
  title: item.title,
  category: item.category,
}));

export default function ProjectsGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);

  const total = portfolioList.length;

  const handlePrev = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? 0 : (prev - 1 + total) % total));
  }, [total]);

  const handleNext = useCallback(() => {
    setLightboxIndex((prev) => (prev === null ? 0 : (prev + 1) % total));
  }, [total]);

  // Lightbox keyboard navigation & body lock
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    const origOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = origOverflow;
    };
  }, [lightboxIndex, handlePrev, handleNext]);

  // Create tripled list for seamless infinite marquee scroll
  const marqueeItems = [...portfolioList, ...portfolioList, ...portfolioList];

  return (
    <section
      id="projekt"
      style={{
        background: 'radial-gradient(ellipse at 50% 40%, rgba(15, 23, 42, 0.04) 0%, transparent 65%), #f8fafc',
        padding: 'clamp(64px, 8vw, 100px) 0',
        position: 'relative',
        borderTop: '1px solid #e2e8f0',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding: '0 clamp(20px, 5vw, 40px)',
          marginBottom: '36px',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '24px',
          }}
        >
          <div>
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
                Referenser
              </span>
              <h2
                style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 700,
                  fontSize: 'clamp(2rem, 3.6vw, 2.7rem)',
                  margin: 0,
                  lineHeight: 1.18,
                  textTransform: 'uppercase',
                }}
              >
                Projekt i hela Sverige
              </h2>
            </ScrollReveal>
          </div>

          <div style={{ maxWidth: '440px' }}>
            <ScrollReveal animation="fade-left" delay={100}>
              <p
                style={{
                  color: 'var(--color-gray-600)',
                  fontSize: '0.96rem',
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                Här kan du se exempel på våra utförda vägmarkerings- och linjemålningsprojekt över hela Sverige. Hovra över bandet för att pausa eller klicka på en bild för att förstora.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* ── CONTINUOUS SCROLLING TAPE (RULLANDE BAND) ────────────────────── */}
      <div
        className="marquee-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          padding: '16px 0 24px 0',
          cursor: 'grab',
        }}
      >
        {/* Left & Right Soft Fade Gradients */}
        <div className="marquee-fade marquee-fade-left" />
        <div className="marquee-fade marquee-fade-right" />

        <div
          ref={trackRef}
          className={`marquee-track ${isPaused ? 'paused' : ''}`}
        >
          {marqueeItems.map((item, idx) => {
            const originalIndex = idx % total;
            return (
              <div
                key={`${item.id}-${idx}`}
                className="marquee-card"
                onClick={() => setLightboxIndex(originalIndex)}
                role="button"
                tabIndex={0}
                aria-label={`Visa bild ${originalIndex + 1}`}
              >
                <div className="marquee-img-wrapper">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="marquee-card-img"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <div style={{ textAlign: 'center', marginTop: '36px' }}>
        <ScrollReveal animation="fade-up" delay={100}>
          <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
            <Button variant="primary" href="/offert" size="lg">
              Begär offert för ditt projekt
            </Button>
            <span style={{ fontSize: '0.85rem', color: 'var(--color-gray-600)' }}>
              Snabb offert & rådgivning utifrån era underlag
            </span>
          </div>
        </ScrollReveal>
      </div>

      {/* ── LIGHTBOX MODAL ──────────────────────────────────────────────── */}
      {lightboxIndex !== null &&
        createPortal(
          <div
            className="lightbox-overlay"
            onClick={() => setLightboxIndex(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              background: 'rgba(10, 15, 29, 0.94)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
            }}
          >
            {/* Close Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(null);
              }}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                width: '46px',
                height: '46px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                zIndex: 10,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.22)';
                e.currentTarget.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
              aria-label="Stäng fullskärmsläge"
            >
              <X size={22} />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              style={{
                position: 'absolute',
                left: '24px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                zIndex: 10,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              }}
              aria-label="Föregående bild"
            >
              <ChevronLeft size={26} />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              style={{
                position: 'absolute',
                right: '24px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '50%',
                width: '50px',
                height: '50px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                zIndex: 10,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
              }}
              aria-label="Nästa bild"
            >
              <ChevronRight size={26} />
            </button>

            {/* Lightbox Content */}
            <div
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                maxWidth: '90vw',
                maxHeight: '85vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <img
                src={portfolioList[lightboxIndex].image}
                alt={portfolioList[lightboxIndex].alt}
                style={{
                  maxWidth: '100%',
                  maxHeight: '85vh',
                  objectFit: 'contain',
                  borderRadius: '16px',
                  boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                }}
              />
            </div>
          </div>,
          document.body
        )}

      {/* ── STYLES ─────────────────────────────────────────────────────── */}
      <style>{`
        .marquee-track {
          display: flex;
          gap: 24px;
          width: max-content;
          animation: marqueeScroll 36s linear infinite;
          will-change: transform;
        }

        .marquee-track.paused {
          animation-play-state: paused;
        }

        @keyframes marqueeScroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }

        .marquee-card {
          width: 360px;
          height: 270px;
          flex-shrink: 0;
          border-radius: 18px;
          overflow: hidden;
          position: relative;
          background: #0f172a;
          border: 1.5px solid rgba(226, 232, 240, 0.9);
          box-shadow: 0 8px 24px rgba(15, 23, 42, 0.07);
          cursor: pointer;
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.35s ease;
        }

        .marquee-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: #0F172A;
          box-shadow: 0 20px 45px rgba(15, 23, 42, 0.2), 0 0 0 2px rgba(15, 23, 42, 0.12);
        }

        .marquee-img-wrapper {
          width: 100%;
          height: 100%;
          position: relative;
          overflow: hidden;
        }

        .marquee-card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .marquee-card:hover .marquee-card-img {
          transform: scale(1.08);
        }

        .marquee-fade {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 80px;
          pointer-events: none;
          z-index: 5;
        }

        .marquee-fade-left {
          left: 0;
          background: linear-gradient(90deg, #f8fafc 0%, transparent 100%);
        }

        .marquee-fade-right {
          right: 0;
          background: linear-gradient(-90deg, #f8fafc 0%, transparent 100%);
        }

        @media (max-width: 768px) {
          .marquee-track {
            animation-duration: 20s;
            gap: 16px;
          }
          .marquee-card {
            width: 280px;
            height: 210px;
            border-radius: 14px;
          }
          .marquee-fade {
            width: 25px;
          }
        }

        @media (max-width: 480px) {
          .marquee-track {
            animation-duration: 18s;
            gap: 14px;
          }
          .marquee-card {
            width: 260px;
            height: 195px;
          }
        }
      `}</style>
    </section>
  );
}
