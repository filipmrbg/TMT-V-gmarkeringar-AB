import { useState } from 'react';
import { Phone, MapPin, Mail, ShieldCheck } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import FAQAccordion from '../components/FAQAccordion';
import CTABanner from '../components/CTABanner';
import { usePageTitle } from '../hooks/usePageTitle';

const container: React.CSSProperties = {
  maxWidth: 'var(--container-max)',
  margin: '0 auto',
  padding: '0 clamp(20px, 5vw, 40px)',
};

const faqItems = [
  {
    question: 'Arbetar ni med ROT avdrag?',
    answer: 'Ja! Som privatperson får du 30 % avdrag på arbetskostnaden direkt på fakturan upp till 50 000 kr per person och år. Vi sköter all administration mot Skatteverket.',
  },
  {
    question: 'Hur lång tid tar det att få ett prisförslag?',
    answer: 'Vi återkopplar vanligtvis inom 24 timmar och lämnar en tydlig, specificerad offert inom 1–2 arbetsdagar efter genomgång eller platsbesök.',
  },
  {
    question: 'Vilka områden är ert huvudsakliga upptagningsområde?',
    answer: 'Vi har vår bas i Åhus och utför uppdrag i Åhus, Kristianstad, Yngsjö, Degeberga, Bromölla och närområdet.',
  },
  {
    question: 'Kan jag boka ett kostnadsfritt platsbesök?',
    answer: 'Självklart! Kontakta oss via formuläret eller ring 076-889 97 16 så bokar vi in en tid som passar dig.',
  },
];

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 16px',
  border: '1px solid #e5e7eb',
  borderRadius: '12px',
  background: '#fafafa',
  fontSize: '0.95rem',
  fontFamily: 'var(--font-family)',
  color: 'var(--color-text-dark)',
  outline: 'none',
  boxSizing: 'border-box',
  marginBottom: '16px',
  transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  display: 'block',
};

function focusInput(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
  e.currentTarget.style.borderColor = 'var(--color-primary)';
  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(194, 132, 71, 0.15)';
}
function blurInput(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
  e.currentTarget.style.borderColor = '#e5e7eb';
  e.currentTarget.style.boxShadow = 'none';
}

export default function Contact() {
  usePageTitle(
    'Kontakta J Måleri Åhus | Åhus & Kristianstad',
    'Kontakta J Måleri Åhus. Vi utför allt inom invändigt och utvändigt måleri, tapetsering, spackling och fasadmålning i Åhus/Kristianstad med omnejd. Ring 076-889 97 16.'
  );
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  return (
    <main style={{ fontFamily: 'var(--font-family)' }}>

      {/* ── SECTION A: HERO ───────────────────────────────────── */}
      <section style={{
        position: 'relative',
        backgroundImage: 'url(https://cdn.midjourney.com/6e079fd3-e098-4621-94e1-2dca52b0df2a/0_0.png)',
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
                Kontakta oss
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={150}>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.08rem', margin: 0, maxWidth: '600px', marginInline: 'auto', lineHeight: 1.6 }}>
                Vi återkopplar vanligtvis inom 24 timmar. Kostnadsfritt platsbesök & färgrådgivning ingår alltid.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION B: CONTACT CONTENT ────────────────────────── */}
      <section style={{ background: 'var(--color-light)', padding: '80px 0' }}>
        <div style={container}>
          <div className="contact-grid" style={{
            display: 'grid',
            gridTemplateColumns: '45% 55%',
            gap: '60px',
            alignItems: 'start',
          }}>

            {/* Left: info */}
            <ScrollReveal animation="fade-right" duration={0.8}>
              <h2 style={{
                color: 'var(--color-text-dark)',
                fontWeight: 800,
                fontSize: 'clamp(1.6rem, 2.5vw, 2rem)',
                margin: '0 0 20px 0',
                lineHeight: 1.2,
              }}>
                Så når du oss
              </h2>
              <p style={{ color: 'var(--color-gray-600)', fontSize: '1rem', lineHeight: 1.8, margin: 0 }}>
                Du kan nå oss via formuläret, telefon eller e-post. Oavsett om det gäller inomhusmålning, tapetsering eller fasadmålning hjälper vi dig gärna.
              </p>

              <div style={{ marginTop: '40px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    minWidth: '48px',
                    background: 'rgba(194, 132, 71, 0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Phone size={22} color="var(--color-primary)" />
                  </div>
                  <div>
                    <p style={{ margin: '0 0 4px 0', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text-dark)' }}>
                      Telefon
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                      <a
                        href="tel:0768899716"
                        style={{ color: 'var(--color-gray-600)', fontSize: '0.95rem', textDecoration: 'none', lineHeight: 1.5, transition: 'color 0.2s ease' }}
                        onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-gray-600)')}
                      >
                        076-889 97 16
                      </a>
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    minWidth: '48px',
                    background: 'rgba(194, 132, 71, 0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <MapPin size={22} color="var(--color-primary)" />
                  </div>
                  <div>
                    <p style={{ margin: '0 0 4px 0', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text-dark)' }}>
                      Plats & Område
                    </p>
                    <p style={{ margin: 0, color: 'var(--color-gray-600)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                      Bas i Åhus • Åhus/Kristianstad med omnejd
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    minWidth: '48px',
                    background: 'rgba(194, 132, 71, 0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Mail size={22} color="var(--color-primary)" />
                  </div>
                  <div>
                    <p style={{ margin: '0 0 4px 0', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text-dark)' }}>
                      E-post
                    </p>
                    <a
                      href="mailto:Info@jmaleri.se"
                      style={{ color: 'var(--color-gray-600)', fontSize: '0.95rem', textDecoration: 'none', lineHeight: 1.5, transition: 'color 0.2s ease' }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-gray-600)')}
                    >
                      Info@jmaleri.se
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    minWidth: '48px',
                    background: 'rgba(194, 132, 71, 0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <ShieldCheck size={22} color="var(--color-primary)" />
                  </div>
                  <div>
                    <p style={{ margin: '0 0 4px 0', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-text-dark)' }}>
                      Företagsinformation
                    </p>
                    <p style={{ margin: 0, color: 'var(--color-gray-600)', fontSize: '0.95rem', lineHeight: 1.5 }}>
                      J Måleri Åhus • Org.nr: 559546-9049 • Godkänd för F-skatt
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: form */}
            <ScrollReveal animation="fade-left" duration={0.8} delay={100}>
              <div style={{
                background: '#ffffff',
                borderRadius: '24px',
                padding: 'clamp(28px, 5vw, 44px)',
                boxShadow: '0 4px 30px rgba(0,0,0,0.06)',
                border: '1px solid #e2e8f0',
              }}>
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 800,
                  fontSize: 'clamp(1.6rem, 2.5vw, 2rem)',
                  margin: '0 0 24px 0',
                }}>
                  Skicka ett meddelande
                </h2>

                <form onSubmit={(e) => {
                  e.preventDefault();
                  alert('Tack för ditt meddelande! Vi återkommer inom kort.');
                }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="contact-form-row">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '8px' }}>
                        Namn *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ditt för- och efternamn"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={inputStyle}
                        onFocus={focusInput}
                        onBlur={blurInput}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '8px' }}>
                        Telefonnummer *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="070-000 00 00"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        style={inputStyle}
                        onFocus={focusInput}
                        onBlur={blurInput}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '8px' }}>
                      E-postadress *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="din.epost@exempel.se"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={inputStyle}
                      onFocus={focusInput}
                      onBlur={blurInput}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '8px' }}>
                      Meddelande *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Beskriv kort vad du önskar hjälp med (t.ex. målning av vardagsrum, fasadmålning villa etc.)..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      style={{ ...inputStyle, resize: 'vertical' }}
                      onFocus={focusInput}
                      onBlur={blurInput}
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      background: 'var(--color-primary)',
                      color: '#ffffff',
                      border: 'none',
                      padding: '16px 36px',
                      borderRadius: 'var(--border-radius-pill)',
                      fontSize: '1rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      width: '100%',
                      fontFamily: 'var(--font-family)',
                      boxShadow: '0 4px 16px rgba(194, 132, 71, 0.35)',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
                  >
                    Skicka meddelande
                  </button>
                </form>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── SECTION C: FAQ ────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '80px 0', borderTop: '1px solid #e2e8f0' }}>
        <div style={container}>
          <FAQAccordion
            items={faqItems}
            title="Frågor & svar inför kontakt"
            subtitle="Här hittar du svar på de vanligaste funderingarna innan du anlitar oss."
          />
        </div>
      </section>

      {/* ── SECTION D: CTA BANNER ──────────────────────────────── */}
      <CTABanner />

      <style>{`
        @media (max-width: 900px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .contact-form-row {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
        }
      `}</style>
    </main>
  );
}
