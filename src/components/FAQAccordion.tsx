import { useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './Button';

interface FAQItem {
  question: string;
  answer: string;
}

interface Props {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  dark?: boolean;
}

function AccordionItem({
  item,
  open,
  onToggle,
  dark,
}: {
  item: FAQItem;
  open: boolean;
  onToggle: () => void;
  dark: boolean;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      style={{
        background: dark ? (open ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.04)') : 'var(--color-white)',
        borderRadius: '12px',
        padding: '22px 28px',
        marginBottom: '12px',
        cursor: 'pointer',
        border: dark ? '1px solid rgba(255,255,255,0.1)' : '1px solid #e2e8f0',
        borderLeft: open ? '4px solid var(--color-primary)' : (dark ? '1px solid rgba(255,255,255,0.1)' : '4px solid transparent'),
        transform: open ? 'scale(1.01)' : 'scale(1)',
        transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        boxShadow: dark ? (open ? '0 8px 24px rgba(0,0,0,0.3)' : 'none') : '0 2px 8px rgba(0,0,0,0.04)',
      }}
      onClick={onToggle}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '16px',
      }}>
        <span style={{
          fontFamily: 'var(--font-family)',
          fontWeight: 600,
          fontSize: '1rem',
          color: dark ? '#ffffff' : 'var(--color-text-dark)',
          lineHeight: 1.4,
        }}>
          {item.question}
        </span>
        <ArrowRight
          size={18}
          style={{
            color: 'var(--color-primary)',
            flexShrink: 0,
            transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
      </div>

      <div
        style={{
          overflow: 'hidden',
          maxHeight: open ? (contentRef.current?.scrollHeight ?? 500) + 'px' : '0px',
          transition: 'max-height 0.35s ease',
        }}
      >
        <div ref={contentRef} style={{ paddingTop: '14px' }}>
          <p style={{
            margin: 0,
            fontFamily: 'var(--font-family)',
            fontSize: '0.93rem',
            lineHeight: 1.75,
            color: dark ? 'rgba(255, 255, 255, 0.78)' : 'var(--color-gray-600)',
          }}>
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQAccordion({ items, title, subtitle, buttonText, buttonLink, dark = false }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const hasLeftSidebar = Boolean(title || subtitle || buttonText);

  if (!hasLeftSidebar) {
    return (
      <div style={{ width: '100%', fontFamily: 'var(--font-family)' }}>
        {items.map((item, i) => (
          <AccordionItem
            key={i}
            item={item}
            open={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            dark={dark}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '38% 62%',
        gap: '50px',
        alignItems: 'start',
        fontFamily: 'var(--font-family)',
      }}
      className="faq-grid"
    >
      {/* Left */}
      <div>
        {title && (
          <h2 style={{
            color: dark ? '#ffffff' : 'var(--color-text-dark)',
            fontWeight: 800,
            fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            margin: '0 0 12px 0',
          }}>
            {title}
          </h2>
        )}
        <span style={{ display: 'block', width: '50px', height: '3px', background: 'var(--color-primary)', borderRadius: '2px', margin: '0 0 20px' }} />
        {subtitle && (
          <p style={{
            color: dark ? 'rgba(255, 255, 255, 0.75)' : 'var(--color-gray-600)',
            lineHeight: 1.75,
            margin: '0 0 32px 0',
            fontSize: '1rem',
          }}>
            {subtitle}
          </p>
        )}
        {buttonText && (
          <Button variant={dark ? 'primary' : 'dark'} href={buttonLink}>
            {buttonText}
          </Button>
        )}
      </div>

      {/* Right */}
      <div>
        {items.map((item, i) => (
          <AccordionItem
            key={i}
            item={item}
            open={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            dark={dark}
          />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .faq-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
      `}</style>
    </div>
  );
}
