import React, { useState } from 'react';
import { ShieldCheck, Clock, Award, Send } from 'lucide-react';
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
    question: 'Kostar offerten något?',
    answer: 'Nej, offert och rådgivning är alltid helt kostnadsfritt. Vi går igenom era ritningar, ytor och förutsättningar och tar fram ett tydligt prisförslag helt utan förbindelser.',
  },
  {
    question: 'Hur snabbt kan ni påbörja markeringsarbetet?',
    answer: 'Det beror på projektets omfattning och plats. Vi har stor flexibilitet och snabb etablering, och kan ofta utföra mindre uppdrag med kort varsel.',
  },
  {
    question: 'Utför ni arbeten åt både privatpersoner, BRF och företag?',
    answer: 'Ja! Vi hjälper företag, kommuner, bostadsrättsföreningar, fastighetsbolag och vägsamfälligheter över hela Sverige.',
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

function focusInput(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = '#0F172A';
  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(15, 23, 42, 0.1)';
}
function blurInput(e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = '#e5e7eb';
  e.currentTarget.style.boxShadow = 'none';
}

export default function Quote() {
  usePageTitle(
    'Begär offert | TMT Vägmarkeringar',
    'Beskriv ert projekt och begär en kostnadsfri offert för vägmarkering, linjemålning, parkeringsrutor eller industrimålning i hela Sverige.'
  );
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [phone, setPhone]     = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  return (
    <main style={{ fontFamily: 'var(--font-family)' }}>

      {/* ── SECTION A: HERO ───────────────────────────────────── */}
      <section style={{
        position: 'relative',
        backgroundImage: 'url(/about.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 45%',
        paddingTop: '140px',
        paddingBottom: '60px',
        textAlign: 'center',
      }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(15, 23, 42, 0.78)' }} />
        <div style={{ ...container, position: 'relative', zIndex: 1 }}>
          <div>
            <ScrollReveal animation="blur-in">
              <h1 style={{
                color: 'var(--color-white)',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                margin: '0 0 16px 0',
                lineHeight: 1.15,
              }}>
                Begär kostnadsfri offert
              </h1>
            </ScrollReveal>
            <ScrollReveal animation="scale-x-center" delay={150} duration={0.6}>
              <span style={{ display: 'block', width: '60px', height: '2px', background: 'rgba(255, 255, 255, 0.7)', borderRadius: '2px', margin: '14px auto 0' }} />
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={200}>
              <p style={{
                color: 'rgba(255,255,255,0.88)',
                fontSize: '1.05rem',
                maxWidth: '640px',
                margin: '20px auto 0',
                lineHeight: 1.6,
              }}>
                Fyll i formuläret nedan och beskriv vad ni behöver hjälp med så återkommer vi med en specificerad offert inom 24 timmar.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── SECTION B: FORM & TRUST CARDS ─────────────────────── */}
      <section style={{ background: 'var(--color-light)', padding: '80px 0' }}>
        <div style={container}>
          <div className="quote-grid" style={{
            display: 'grid',
            gridTemplateColumns: '55% 45%',
            gap: '50px',
            alignItems: 'start',
          }}>

            {/* Left: Form */}
            <ScrollReveal animation="fade-right" duration={0.8}>
              <div style={{
                background: 'var(--color-white)',
                borderRadius: 'var(--border-radius-lg)',
                padding: '40px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
                border: '1px solid #f0ede8',
              }}>
                <h2 style={{
                  color: 'var(--color-text-dark)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.4rem, 2.2vw, 1.8rem)',
                  margin: '0 0 8px 0',
                }}>
                  Beskriv ert markeringsprojekt
                </h2>
                <p style={{ color: 'var(--color-gray-600)', fontSize: '0.92rem', margin: '0 0 28px 0', lineHeight: 1.6 }}>
                  Vi återkopplar vanligtvis samma eller nästkommande arbetsdag.
                </p>

                <form onSubmit={(e) => { e.preventDefault(); alert('Tack för din förfrågan! Vi kontaktar dig inom 24 timmar.'); }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="quote-form-row">
                    <div>
                      <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '6px' }}>
                        Ditt namn / Kontaktperson *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="För- och efternamn"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={inputStyle}
                        onFocus={focusInput}
                        onBlur={blurInput}
                      />
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '6px' }}>
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
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '6px' }}>
                      E-postadress *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="din.epost@foretag.se"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={inputStyle}
                      onFocus={focusInput}
                      onBlur={blurInput}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '6px' }}>
                      Typ av tjänst *
                    </label>
                    <select
                      required
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={focusInput}
                      onBlur={blurInput}
                    >
                      <option value="">Välj tjänst...</option>
                      <option value="vagmarkering">Vägmarkering & Trafik</option>
                      <option value="parkeringsmarkering">Parkeringsmarkering & Laddplatser</option>
                      <option value="industrimalning">Industrimålning & Lagerlinjer</option>
                      <option value="symbolmalning">Symbolmålning & Specialmarkering</option>
                      <option value="annat">Annat markeringsarbete</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, color: 'var(--color-text-dark)', marginBottom: '6px' }}>
                      Projektbeskrivning *
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Berätta om ytan, antal p-platser, vägsträcka, plats/ort och önskad tidsram..."
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
                      background: '#0F172A',
                      color: '#ffffff',
                      border: 'none',
                      padding: '16px 36px',
                      borderRadius: 'var(--border-radius-pill)',
                      fontSize: '1rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      width: '100%',
                      fontFamily: 'var(--font-family)',
                      boxShadow: '0 4px 16px rgba(15, 23, 42, 0.2)',
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = '#1E293B';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = '#0F172A';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <Send size={18} />
                    Skicka offertförfrågan
                  </button>
                </form>
              </div>
            </ScrollReveal>

            {/* Right: Trust Points */}
            <ScrollReveal animation="fade-left" duration={0.8} delay={150}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div>
                  <h3 style={{
                    color: 'var(--color-text-dark)',
                    fontWeight: 700,
                    fontSize: '1.4rem',
                    margin: '0 0 16px 0',
                  }}>
                    Varför välja TMT Vägmarkeringar?
                  </h3>
                  <p style={{ color: 'var(--color-gray-600)', fontSize: '0.96rem', lineHeight: 1.7, margin: 0 }}>
                    Vi kombinerar gedigen branscherfarenhet med moderna appliceringsmetoder, slitstarka material och högsta precision.
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {[
                    {
                      icon: ShieldCheck,
                      title: 'Certifierad kvalitet',
                      desc: 'Full överensstämmelse med gällande krav och standarder för vägmarkering och trafiksäkerhet.',
                    },
                    {
                      icon: Clock,
                      title: 'Snabba besked & tidsplan',
                      desc: 'Specificerad offert inom 24 timmar och punktlig leverans enligt överenskommelse med minimal trafikstörning.',
                    },
                    {
                      icon: Award,
                      title: 'Över 30 års erfarenhet',
                      desc: 'Omfattande kompetens inom allt från allmänna vägar till logistikanläggningar och bostadsrättsföreningar.',
                    },
                  ].map(({ icon: Icon, title, desc }, i) => (
                    <div
                      key={i}
                      style={{
                        background: 'var(--color-white)',
                        borderRadius: '16px',
                        padding: '22px 24px',
                        border: '1px solid #e5e7eb',
                        display: 'flex',
                        gap: '16px',
                        alignItems: 'flex-start',
                      }}
                    >
                      <div style={{
                        width: '44px',
                        height: '44px',
                        minWidth: '44px',
                        borderRadius: '12px',
                        background: '#0F172A',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(15, 23, 42, 0.12)',
                      }}>
                        <Icon size={22} color="#ffffff" />
                      </div>
                      <div>
                        <h4 style={{ margin: '0 0 4px 0', fontWeight: 700, fontSize: '1rem', color: 'var(--color-text-dark)' }}>
                          {title}
                        </h4>
                        <p style={{ margin: 0, color: 'var(--color-gray-600)', fontSize: '0.9rem', lineHeight: 1.55 }}>
                          {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
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
            title="Vanliga frågor om offerten"
            subtitle="Här hittar du svar på de vanligaste frågorna inför ert vägmarkeringsprojekt."
          />
        </div>
      </section>

      {/* ── SECTION D: CTA BANNER ──────────────────────────────── */}
      <CTABanner />

      <style>{`
        @media (max-width: 900px) {
          .quote-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .quote-form-row {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
        }
      `}</style>
    </main>
  );
}
