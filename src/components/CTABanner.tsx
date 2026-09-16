import { CheckCircle } from 'lucide-react';
import Button from './Button';
import ScrollReveal from './ScrollReveal';
import images from '../data/images';

interface Props {
  heading?: string;
  checkItems?: string[];
}

const defaultHeading = 'Begär en kostnadsfri offert';
const defaultCheckItems = [
  'Kostnadsfri rådgivning och offert',
  'Snabb återkoppling inom 24 timmar',
  'Rikstäckande service i hela Sverige',
];

export default function CTABanner({ heading = defaultHeading, checkItems = defaultCheckItems }: Props) {
  const bgImage = images.cta?.banner?.url || '/cta-banner-bg.jpg';

  return (
    <section style={{ 
      position: 'relative', 
      background: 'var(--color-dark)', 
      overflow: 'hidden',
      padding: 'clamp(70px, 9vw, 95px) 0',
    }}>
      {/* Background Image: TMT Scania road marking truck */}
      <img
        src={bgImage}
        alt="TMT Vägmarkeringar lastbil och utrustning"
        loading="lazy"
        decoding="async"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 45%',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Dark Fading Overlay tailored to highlight truck on left and text on right */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(270deg, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0.85) 45%, rgba(15, 23, 42, 0.35) 75%, rgba(15, 23, 42, 0.15) 100%)',
          zIndex: 1,
        }}
        className="cta-overlay"
      />

      {/* Subtle Dot grid overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        pointerEvents: 'none',
        zIndex: 2,
      }} />

      <div style={{
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 clamp(20px, 5vw, 40px)',
        position: 'relative',
        zIndex: 3,
      }}>
        <div className="cta-grid" style={{
          display: 'grid',
          gridTemplateColumns: '42% 58%',
          gap: '40px',
          alignItems: 'center',
        }}>
          {/* Left: Truck focus space allowing Scania truck to be clearly visible */}
          <div className="cta-truck-focus-space" aria-hidden="true" />

          {/* Right: Text Content */}
          <ScrollReveal animation="fade-left" duration={0.8}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <span style={{
                color: 'rgba(255, 255, 255, 0.85)',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '14px',
                display: 'inline-block',
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '4px 14px',
                borderRadius: '999px',
                border: '1px solid rgba(255, 255, 255, 0.15)',
              }}>
                Vi hjälper er!
              </span>

              <h2 style={{
                color: 'var(--color-white)',
                fontWeight: 700,
                fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)',
                lineHeight: 1.2,
                margin: '0 0 24px 0',
              }}>
                {heading}
              </h2>

              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: '0 0 36px 0',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}>
                {checkItems.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <CheckCircle size={20} style={{ color: '#ffffff', flexShrink: 0 }} />
                    <span style={{
                      color: 'rgba(255, 255, 255, 0.88)',
                      fontSize: '1rem',
                      fontWeight: 500,
                      lineHeight: 1.5,
                    }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="cta-btn-wrap" style={{ display: 'inline-block' }}>
                <Button variant="white" size="lg" href="/offert">
                  Kom igång
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        .cta-btn-wrap {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
        .cta-btn-wrap:hover {
          transform: scale(1.05);
        }
        @media (max-width: 991px) {
          .cta-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          .cta-truck-focus-space {
            display: none !important;
          }
          .cta-overlay {
            background: rgba(15, 23, 42, 0.88) !important;
          }
        }
      `}</style>
    </section>
  );
}
