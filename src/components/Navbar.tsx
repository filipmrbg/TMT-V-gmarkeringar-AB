import { useEffect, useState, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Phone, Menu, X, ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';
import images from '../data/images';
import services from '../data/services';

const navLinks = [
  { label: 'Hem', href: '/' },
  { label: 'Tjänster', href: '/tjanster', hasDropdown: true },
  { label: 'Projekt', href: '/#projekt' },
  { label: 'Om oss', href: '/om-oss' },
  { label: 'Kontakt', href: '/kontakt' },
];

function isActive(href: string, pathname: string, activeSection: string | null): boolean {
  if (href.startsWith('/#')) {
    const id = href.slice(2);
    return activeSection === id;
  }
  if (href === '/') return pathname === '/' && activeSection === null;
  return pathname.startsWith(href);
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      if (location.pathname !== '/') {
        setActiveSection(null);
        return;
      }

      // Check each hash-linked section
      const sections = navLinks
        .filter(l => l.href.startsWith('/#'))
        .map(l => l.href.slice(2));

      let found: string | null = null;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom > 120) {
          found = id;
          break;
        }
      }
      setActiveSection(found);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // Close mobile menu & dropdown on route change
  useEffect(() => {
    setMobileOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 150);
  };

  function handleLogoClick(e: React.MouseEvent) {
    setMobileOpen(false);
    setIsServicesOpen(false);
    document.body.style.overflow = '';
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }

  function handleNavClick(href: string) {
    setMobileOpen(false);
    setIsServicesOpen(false);
    document.body.style.overflow = '';

    if (href.includes('#')) {
      const [path, hashId] = href.split('#');
      const targetPath = path || '/';

      if (location.pathname === targetPath) {
        const el = document.getElementById(hashId);
        if (el) {
          const y = el.getBoundingClientRect().top + window.pageYOffset - 90;
          window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
          window.history.pushState(null, '', `#${hashId}`);
        }
      } else {
        navigate(`${targetPath}#${hashId}`, { state: { scrollTo: hashId } });
      }
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }

  const isHome = location.pathname === '/';
  const showNavbarLogo = !isHome || scrolled;

  return (
    <>
      <nav
        className={`navbar-el ${scrolled ? 'scrolled' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          minHeight: scrolled ? '78px' : '72px',
          padding: scrolled
            ? '8px clamp(16px, 3.5vw, 36px)'
            : '14px clamp(16px, 3.5vw, 36px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: scrolled
            ? 'rgba(15, 23, 42, 0.95)'
            : 'linear-gradient(180deg, rgba(15, 23, 42, 0.65) 0%, rgba(15, 23, 42, 0.12) 70%, transparent 100%)',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.3)' : 'none',
          transition: 'background 0.35s ease, padding 0.35s ease, min-height 0.35s ease, backdrop-filter 0.35s ease, box-shadow 0.35s ease',
        }}
      >
        {/* Logo — hidden at the very top of startsidan, smoothly fades in on scroll */}
        <Link
          to="/"
          onClick={handleLogoClick}
          className="nav-logo-link"
          style={{
            textDecoration: 'none',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            opacity: showNavbarLogo ? 1 : 0,
            pointerEvents: showNavbarLogo ? 'auto' : 'none',
            transform: showNavbarLogo ? 'scale(1) translateY(0)' : 'scale(0.85) translateY(-4px)',
            transformOrigin: 'left center',
            transition: 'opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1), transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <img
            src={images.logo.url}
            alt={images.logo.alt}
            className={`nav-logo ${scrolled ? 'scrolled' : ''}`}
          />
        </Link>

        {/* Center nav pill — hidden on mobile */}
        <div className="nav-pill" style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: 'var(--border-radius-pill)',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.08)',
          padding: '5px 6px',
          display: 'flex',
          alignItems: 'center',
          gap: '2px',
        }}>
          {navLinks.map(link => {
            const active = isActive(link.href, location.pathname, activeSection);

            if (link.hasDropdown) {
              return (
                <div
                  key={link.href}
                  className="nav-dropdown-wrapper"
                  style={{ position: 'relative' }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    style={{
                      background: active || isServicesOpen ? 'rgba(255,255,255,0.1)' : 'none',
                      border: 'none',
                      cursor: 'pointer',
                      color: active || isServicesOpen ? '#ffffff' : 'rgba(255, 255, 255, 0.85)',
                      fontFamily: 'var(--font-family)',
                      fontSize: '0.82rem',
                      fontWeight: 600,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      padding: '10px 18px',
                      borderRadius: 'var(--border-radius-pill)',
                      transition: 'background 0.2s ease, color 0.2s ease',
                      whiteSpace: 'nowrap',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                    }}
                  >
                    <span>{link.label}</span>
                    <ChevronDown
                      size={13}
                      style={{
                        transform: isServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.2s ease',
                        opacity: 0.8,
                      }}
                    />
                  </button>

                  {/* Clean Dropdown */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 10px)',
                      left: '50%',
                      transform: isServicesOpen
                        ? 'translateX(-50%) translateY(0)'
                        : 'translateX(-50%) translateY(-6px)',
                      opacity: isServicesOpen ? 1 : 0,
                      pointerEvents: isServicesOpen ? 'auto' : 'none',
                      transition: 'opacity 0.18s ease, transform 0.18s ease',
                      zIndex: 1100,
                      minWidth: '180px',
                      background: 'rgba(24, 29, 42, 0.96)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '14px',
                      boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4)',
                      padding: '6px',
                    }}
                  >
                    {services.map(svc => (
                      <button
                        key={svc.slug}
                        onClick={() => handleNavClick(svc.href)}
                        style={{
                          width: '100%',
                          display: 'block',
                          textAlign: 'left',
                          padding: '9px 14px',
                          borderRadius: '8px',
                          background: 'none',
                          border: 'none',
                          color: '#ffffff',
                          fontFamily: 'var(--font-family)',
                          fontSize: '0.88rem',
                          fontWeight: 500,
                          cursor: 'pointer',
                          transition: 'background 0.15s ease, color 0.15s ease',
                          whiteSpace: 'nowrap',
                        }}
                        onMouseEnter={e => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.background = 'rgba(255, 255, 255, 0.12)';
                          el.style.color = '#ffffff';
                        }}
                        onMouseLeave={e => {
                          const el = e.currentTarget as HTMLElement;
                          el.style.background = 'none';
                          el.style.color = '#ffffff';
                        }}
                      >
                        {svc.title}
                      </button>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                style={{
                  background: active ? '#ffffff' : 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: active ? '#0F172A' : '#ffffff',
                  fontFamily: 'var(--font-family)',
                  fontSize: '0.82rem',
                  fontWeight: active ? 700 : 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '9px 20px',
                  borderRadius: 'var(--border-radius-pill)',
                  boxShadow: active ? '0 2px 12px rgba(0, 0, 0, 0.25)' : 'none',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  if (!active) {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(255, 255, 255, 0.12)';
                    (e.currentTarget as HTMLElement).style.color = '#ffffff';
                  }
                }}
                onMouseLeave={e => {
                  if (!active) {
                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                    (e.currentTarget as HTMLElement).style.color = '#ffffff';
                  }
                }}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              margin: '0 4px',
              paddingLeft: '12px',
              borderLeft: '1px solid rgba(255, 255, 255, 0.15)',
            }}
          >
            <a
              href="tel:0737718617"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--color-white)',
                textDecoration: 'none',
                fontFamily: 'var(--font-family)',
                fontSize: '0.85rem',
                fontWeight: 600,
                transition: 'opacity 0.2s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.75')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              <Phone size={14} color="#ffffff" />
              <span>073-771 86 17</span>
            </a>
          </div>

          <Link
            to="/offert"
            className="offert-btn"
            style={{
              background: '#ffffff',
              color: '#0F172A',
              fontFamily: 'var(--font-family)',
              fontWeight: 700,
              borderRadius: 'var(--border-radius-pill)',
              padding: '12px 26px',
              textDecoration: 'none',
              fontSize: '0.9rem',
              transition: 'all 0.3s ease',
              display: 'inline-block',
              cursor: 'pointer',
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.25)',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = '#f1f5f9';
              el.style.transform = 'translateY(-2px)';
              el.style.boxShadow = '0 8px 24px rgba(255, 255, 255, 0.25)';
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = '#ffffff';
              el.style.transform = 'translateY(0)';
              el.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.25)';
            }}
          >
            <span className="offert-full">Begär offert</span>
            <span className="offert-short">Offert</span>
          </Link>

          {/* Hamburger — modern frosted pill button with animated lines */}
          <button
            className="hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Stäng meny' : 'Öppna meny'}
            aria-expanded={mobileOpen}
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '8px',
              background: mobileOpen ? 'rgba(255, 255, 255, 0.18)' : 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '999px',
              padding: '7px 14px',
              cursor: 'pointer',
              color: '#ffffff',
              boxShadow: '0 2px 10px rgba(0, 0, 0, 0.25)',
              transition: 'all 0.25s ease',
            }}
          >
            <span style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              {mobileOpen ? 'Stäng' : 'Meny'}
            </span>
            <div
              style={{
                width: '16px',
                height: '12px',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <span
                style={{
                  display: 'block',
                  height: '2px',
                  width: '100%',
                  background: '#ffffff',
                  borderRadius: '2px',
                  transformOrigin: 'center',
                  transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: mobileOpen ? 'translateY(5px) rotate(45deg)' : 'none',
                }}
              />
              <span
                style={{
                  display: 'block',
                  height: '2px',
                  width: mobileOpen ? '100%' : '75%',
                  marginLeft: 'auto',
                  background: '#ffffff',
                  borderRadius: '2px',
                  transition: 'opacity 0.2s ease, transform 0.2s ease',
                  opacity: mobileOpen ? 0 : 1,
                  transform: mobileOpen ? 'scaleX(0)' : 'none',
                }}
              />
              <span
                style={{
                  display: 'block',
                  height: '2px',
                  width: '100%',
                  background: '#ffffff',
                  borderRadius: '2px',
                  transformOrigin: 'center',
                  transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: mobileOpen ? 'translateY(-5px) rotate(-45deg)' : 'none',
                }}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Backdrop Overlay */}
      <div
        onClick={() => setMobileOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 2000,
          background: 'rgba(2, 6, 23, 0.72)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'all' : 'none',
          transition: 'opacity 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />

      {/* Mobile Slide-Over Drawer */}
      <aside
        aria-label="Mobilmeny"
        style={{
          position: 'fixed',
          top: 0,
          bottom: 0,
          right: 0,
          width: 'min(380px, 86vw)',
          zIndex: 2001,
          background: 'linear-gradient(180deg, #0f172a 0%, #090d16 100%)',
          borderLeft: '1px solid rgba(255, 255, 255, 0.12)',
          boxShadow: '-10px 0 45px rgba(0, 0, 0, 0.65)',
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.38s cubic-bezier(0.16, 1, 0.3, 1)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          padding: '24px 20px 28px',
          boxSizing: 'border-box',
        }}
      >
        {/* Drawer Top Header: Logo + Close Pill */}
        <div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingBottom: '20px',
              marginBottom: '16px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <Link to="/" onClick={handleLogoClick} style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={images.logo.url}
                alt={images.logo.alt}
                style={{
                  height: '42px',
                  maxWidth: '150px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5))',
                }}
              />
            </Link>

            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Stäng meny"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.16)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <X size={20} />
            </button>
          </div>

          {/* Drawer Nav Links */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {navLinks.map((link) => {
              const active = isActive(link.href, location.pathname, activeSection);

              if (link.hasDropdown) {
                return (
                  <div key={link.href} style={{ borderRadius: '14px', overflow: 'hidden' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: active ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        borderRadius: '12px',
                        padding: '4px 6px 4px 14px',
                      }}
                    >
                      <button
                        onClick={() => handleNavClick('/tjanster')}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: active ? '#ffffff' : 'rgba(255, 255, 255, 0.9)',
                          fontFamily: 'var(--font-family)',
                          fontSize: '1.05rem',
                          fontWeight: 700,
                          cursor: 'pointer',
                          padding: '8px 0',
                          textAlign: 'left',
                          flex: 1,
                        }}
                      >
                        {link.label}
                      </button>
                      <button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        aria-label="Visa alla tjänster"
                        style={{
                          background: mobileServicesOpen ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                          border: 'none',
                          borderRadius: '8px',
                          width: '36px',
                          height: '36px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#ffffff',
                          cursor: 'pointer',
                          transition: 'transform 0.25s ease, background 0.2s ease',
                        }}
                      >
                        <ChevronDown
                          size={18}
                          style={{
                            transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                            transition: 'transform 0.25s ease',
                          }}
                        />
                      </button>
                    </div>

                    {/* Collapsible Services List */}
                    {mobileServicesOpen && (
                      <div
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '4px',
                          padding: '8px 0 8px 12px',
                          marginTop: '4px',
                          borderLeft: '2px solid rgba(255, 255, 255, 0.15)',
                          marginLeft: '8px',
                        }}
                      >
                        {services.map((srv) => (
                          <Link
                            key={srv.slug}
                            to={srv.href}
                            onClick={() => {
                              setMobileOpen(false);
                              setMobileServicesOpen(false);
                            }}
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              padding: '8px 12px',
                              borderRadius: '8px',
                              color: location.pathname === srv.href ? '#ffffff' : 'rgba(255, 255, 255, 0.72)',
                              background: location.pathname === srv.href ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                              textDecoration: 'none',
                              fontSize: '0.88rem',
                              fontWeight: location.pathname === srv.href ? 700 : 500,
                              transition: 'all 0.2s ease',
                            }}
                          >
                            <span>{srv.title}</span>
                            <ChevronRight size={14} color="rgba(255, 255, 255, 0.4)" />
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  style={{
                    background: active ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                    border: '1px solid',
                    borderColor: active ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    color: active ? '#ffffff' : 'rgba(255, 255, 255, 0.85)',
                    fontFamily: 'var(--font-family)',
                    fontSize: '1.05rem',
                    fontWeight: active ? 700 : 600,
                    padding: '12px 14px',
                    textAlign: 'left',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!active) e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                  }}
                  onMouseLeave={(e) => {
                    if (!active) e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <span>{link.label}</span>
                  <ArrowRight size={15} color="rgba(255, 255, 255, 0.35)" />
                </button>
              );
            })}
          </nav>
        </div>

        {/* Drawer Bottom Actions */}
        <div
          style={{
            marginTop: '28px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {/* CTA Quote Button */}
          <Link
            to="/offert"
            onClick={() => setMobileOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              background: '#ffffff',
              color: '#0F172A',
              fontFamily: 'var(--font-heading)',
              fontWeight: 700,
              fontSize: '0.95rem',
              letterSpacing: '0.04em',
              borderRadius: '999px',
              padding: '14px 20px',
              textDecoration: 'none',
              boxShadow: '0 4px 18px rgba(0, 0, 0, 0.3)',
              transition: 'transform 0.2s ease, background 0.2s ease',
            }}
          >
            Begär offert <ArrowRight size={16} />
          </Link>

          {/* Direct Phone Action Card */}
          <a
            href="tel:0737718617"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '14px',
              padding: '12px 16px',
              textDecoration: 'none',
              color: '#ffffff',
              transition: 'background 0.2s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: 'rgba(34, 197, 94, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#4ade80',
                }}
              >
                <Phone size={15} />
              </div>
              <div>
                <span
                  style={{
                    display: 'block',
                    fontSize: '0.72rem',
                    color: 'rgba(255, 255, 255, 0.5)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  Ring direkt
                </span>
                <span style={{ fontSize: '0.92rem', fontWeight: 700 }}>073-771 86 17</span>
              </div>
            </div>
            <div
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#22c55e',
                boxShadow: '0 0 8px #22c55e',
              }}
            />
          </a>

          <div style={{ textAlign: 'center', marginTop: '4px' }}>
            <span style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.4)', letterSpacing: '0.02em' }}>
              TMT Vägmarkeringar AB • Hela Sverige
            </span>
          </div>
        </div>
      </aside>

      <style>{`
        .nav-dropdown-wrapper::after {
          content: '';
          position: absolute;
          top: 100%;
          left: -15px;
          right: -15px;
          height: 15px;
        }
        .nav-logo {
          height: 48px;
          max-height: 48px;
          width: auto;
          display: block;
          object-fit: contain;
          background-color: transparent;
          padding: 0;
          border-radius: 0;
          box-shadow: none;
          filter: drop-shadow(0 2px 10px rgba(0, 0, 0, 0.45));
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-logo.scrolled {
          height: 64px;
          max-height: 64px;
          background-color: transparent;
          padding: 0;
          border-radius: 0;
          box-shadow: none;
        }
        @media (max-width: 768px) {
          .nav-pill { display: none !important; }
          .hamburger { display: flex !important; }
          .offert-btn { display: none !important; }
          .phone-link {
            display: flex !important;
            border-left: none !important;
            padding-left: 0 !important;
            margin: 0 !important;
          }
          .phone-link a {
            font-size: 0.82rem !important;
            white-space: nowrap !important;
            gap: 5px !important;
          }
          nav.navbar-el { padding: 10px 16px !important; min-height: 56px !important; }
          nav.navbar-el.scrolled { padding: 7px 16px !important; min-height: 62px !important; }
          .nav-logo {
            height: 38px;
            max-height: 38px;
            padding: 0;
          }
          .nav-logo.scrolled {
            height: 48px;
            max-height: 48px;
            padding: 0;
          }
        }
        @media (min-width: 769px) {
          .offert-short { display: none; }
          .offert-full { display: inline; }
        }
      `}</style>
    </>
  );
}

