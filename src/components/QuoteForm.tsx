import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Send, CheckCircle2 } from 'lucide-react';
import services from '../data/services';

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

export interface QuoteFormProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  defaultService?: string;
}

export default function QuoteForm({
  title = 'Beskriv ert projekt',
  subtitle = 'Vi återkopplar vanligtvis samma eller nästkommande arbetsdag.',
  buttonText = 'Skicka offertförfrågan',
  defaultService,
}: QuoteFormProps) {
  const [searchParams] = useSearchParams();
  const initialService = defaultService || searchParams.get('service') || '';

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(initialService);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        style={{
          textAlign: 'center',
          padding: '40px 20px',
          background: '#ffffff',
          borderRadius: '16px',
        }}
      >
        <div
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: '#f0fdf4',
            border: '2px solid #bbf7d0',
            color: '#16a34a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
          }}
        >
          <CheckCircle2 size={36} />
        </div>
        <h3
          style={{
            color: 'var(--color-text-dark)',
            fontSize: '1.45rem',
            fontWeight: 700,
            margin: '0 0 10px 0',
          }}
        >
          Tack för din förfrågan!
        </h3>
        <p
          style={{
            color: 'var(--color-gray-600)',
            fontSize: '0.96rem',
            lineHeight: 1.6,
            maxWidth: '460px',
            margin: '0 auto 28px',
          }}
        >
          Vi har tagit emot era uppgifter och återkommer med rådgivning och en kostnadsfri offert inom 24 timmar.
        </p>
        <button
          type="button"
          className="quote-submit-btn"
          onClick={() => {
            setSubmitted(false);
            setName('');
            setPhone('');
            setEmail('');
            setService('');
            setMessage('');
          }}
          style={{
            background: '#0F172A',
            color: '#ffffff',
            border: 'none',
            padding: '12px 28px',
            borderRadius: 'var(--border-radius-pill)',
            fontSize: '0.92rem',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'background 0.2s ease',
            textTransform: 'none',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = '#1E293B')}
          onMouseLeave={(e) => (e.currentTarget.style.background = '#0F172A')}
        >
          Skicka en ny förfrågan
        </button>
      </div>
    );
  }

  return (
    <div>
      {title && (
        <h2
          className="quote-form-title"
          style={{
            color: 'var(--color-text-dark)',
            fontWeight: 700,
            fontSize: 'clamp(1.4rem, 2.2vw, 1.8rem)',
            margin: '0 0 8px 0',
            textTransform: 'none',
            letterSpacing: 'normal',
          }}
        >
          {title}
        </h2>
      )}
      {subtitle && (
        <p
          style={{
            color: 'var(--color-gray-600)',
            fontSize: '0.92rem',
            margin: '0 0 28px 0',
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}
          className="quote-form-row"
        >
          <div>
            <label
              style={{
                display: 'block',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: 'var(--color-text-dark)',
                marginBottom: '6px',
              }}
            >
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
            <label
              style={{
                display: 'block',
                fontSize: '0.88rem',
                fontWeight: 600,
                color: 'var(--color-text-dark)',
                marginBottom: '6px',
              }}
            >
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
          <label
            style={{
              display: 'block',
              fontSize: '0.88rem',
              fontWeight: 600,
              color: 'var(--color-text-dark)',
              marginBottom: '6px',
            }}
          >
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
          <label
            style={{
              display: 'block',
              fontSize: '0.88rem',
              fontWeight: 600,
              color: 'var(--color-text-dark)',
              marginBottom: '6px',
            }}
          >
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
            {services.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.title}
              </option>
            ))}
            <option value="annat">Annat markerings- eller entreprenadarbete</option>
          </select>
        </div>

        <div>
          <label
            style={{
              display: 'block',
              fontSize: '0.88rem',
              fontWeight: 600,
              color: 'var(--color-text-dark)',
              marginBottom: '6px',
            }}
          >
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
          className="quote-submit-btn"
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
            textTransform: 'none',
            letterSpacing: 'normal',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#1E293B';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#0F172A';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          <Send size={18} />
          {buttonText}
        </button>
      </form>

      <style>{`
        .quote-form-title {
          text-transform: none !important;
          letter-spacing: normal !important;
        }
        .quote-submit-btn {
          text-transform: none !important;
          letter-spacing: normal !important;
        }
        @media (max-width: 640px) {
          .quote-form-row {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
        }
      `}</style>
    </div>
  );
}
