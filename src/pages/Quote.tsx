import React from 'react';
import { ShieldCheck, Clock, Award } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import FAQAccordion from '../components/FAQAccordion';
import CTABanner from '../components/CTABanner';
import QuoteForm from '../components/QuoteForm';
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

export default function Quote() {
  usePageTitle(
    'Begär offert | TMT Vägmarkeringar',
    'Beskriv ert projekt och begär en kostnadsfri offert för vägmarkering, linjemålning, parkeringsrutor eller industrimålning i hela Sverige.'
  );

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
                <QuoteForm
                  title="Beskriv ert projekt"
                  subtitle="Vi återkopplar vanligtvis samma eller nästkommande arbetsdag."
                  buttonText="Skicka offertförfrågan"
                />
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
        }
      `}</style>
    </main>
  );
}
