import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import images from '../data/images';
import services from '../data/services';

const socialIcons = [
  { Icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/tmt.vagmarkeringar/' },
];

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  function handleLogoClick(e: React.MouseEvent) {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }

  return (
    <footer style={{ background: 'var(--color-white)', fontFamily: 'var(--font-family)' }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '80px clamp(20px, 5vw, 40px) 0' }}>
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '40px',
        }}>
          <div>
            <div style={{ marginBottom: '24px' }}>
              <Link to="/" onClick={handleLogoClick} style={{ textDecoration: 'none', display: 'inline-block', cursor: 'pointer' }}>
                <div style={{
                  display: 'inline-block',
                }}>
                  <img
                    src={images.logoDark?.url || '/tmt-logo-dark.png?v=2'}
                    alt={images.logoDark?.alt || images.logo.alt}
                    style={{
                      height: '70px',
                      width: 'auto',
                      display: 'block',
                      objectFit: 'contain',
                      borderRadius: '6px',
                    }}
                  />
                </div>
              </Link>
            </div>
            <p style={{ color: 'var(--color-gray-600)', fontSize: '0.9rem', lineHeight: 1.7, margin: '0 0 20px 0' }}>
              TMT Vägmarkeringar AB är specialister på vägmarkering, linjemålning, parkeringsmarkering och industrimålning för företag, kommuner och bostadsrättsföreningar i hela Sverige.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {socialIcons.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    border: '1px solid #e5e7eb',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-gray-600)',
                    transition: 'color 0.2s ease, border-color 0.2s ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--color-primary)';
                    (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-primary)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.color = 'var(--color-gray-600)';
                    (e.currentTarget as HTMLElement).style.borderColor = '#e5e7eb';
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Tjänster */}
          <div>
            <h3 style={{ fontWeight: 700, color: 'var(--color-text-dark)', fontSize: '1rem', margin: '0 0 20px 0' }}>
              Tjänster
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {services.map(svc => (
                <li key={svc.slug}>
                  <Link
                    to={svc.href}
                    style={{
                      color: 'var(--color-gray-600)',
                      textDecoration: 'none',
                      lineHeight: '2.2',
                      fontSize: '0.95rem',
                      display: 'inline-block',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-gray-600)')}
                  >
                    {svc.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 style={{ fontWeight: 700, color: 'var(--color-text-dark)', fontSize: '1rem', margin: '0 0 20px 0' }}>
              Kontaktuppgifter
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.95rem' }}>

              <a
                href="mailto:info@tmtab.com"
                className="footer-contact-item"
              >
                <div className="footer-contact-icon">
                  <Mail size={16} strokeWidth={2} />
                </div>
                <span>info@tmtab.com</span>
              </a>

              <a
                href="tel:0737718617"
                className="footer-contact-item"
              >
                <div className="footer-contact-icon">
                  <Phone size={16} strokeWidth={2} />
                </div>
                <span>073-771 86 17</span>
              </a>

              <div
                className="footer-contact-static"
              >
                <div className="footer-contact-icon">
                  <MapPin size={16} strokeWidth={2} />
                </div>
                <span>Hela Sverige</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="footer-bottom"
          style={{
            borderTop: '1px solid #e5e7eb',
            paddingTop: '20px',
            marginTop: '40px',
            paddingBottom: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', color: 'var(--color-gray-600)', fontSize: '0.875rem', flexWrap: 'wrap' }}>
            <span>© 2026 - TMT Vägmarkeringar AB</span>
            <span>Org.nr: 559221-0099</span>
            <span>Godkänd för F-skatt</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <a
              href="https://www.uc.se/"
              target="_blank"
              rel="noopener noreferrer"
              title="UC Sigill - Kreditvärdigt företag (TMT Vägmarkeringar AB)"
              aria-label="UC Sigill Kreditvärdighet för TMT Vägmarkeringar AB"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                textDecoration: 'none',
                transition: 'transform 0.2s ease, opacity 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.opacity = '0.9';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.opacity = '1';
              }}
            >
              <img
                src="https://www.uc.se/ucsigill2/sigill?org=5592210099&language=swe&product=lsa&type=svg"
                alt="UC Sigill - Hög kreditvärdighet"
                style={{
                  height: 'clamp(52px, 5vw, 62px)',
                  width: 'auto',
                  display: 'block',
                }}
                loading="lazy"
              />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .footer-contact-item {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--color-gray-600) !important;
          text-decoration: none;
          transition: all 0.2s ease;
          padding: 2px 0;
          cursor: pointer;
        }
        .footer-contact-item:hover {
          color: var(--color-primary) !important;
          transform: translate3d(3px, 0, 0);
        }
        .footer-contact-icon {
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .footer-contact-static {
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--color-gray-600);
          padding: 2px 0;
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; text-align: center; }
          .footer-grid > div:first-child > div { justify-content: center; }
          .footer-bottom { flex-direction: column; align-items: center !important; text-align: center; }
          .footer-contact-static, .footer-contact-item {
            justify-content: center;
          }
          .footer-contact-item:hover {
            transform: none;
          }
        }
      `}</style>
    </footer>
  );
}
