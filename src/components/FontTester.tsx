import { useState } from 'react';
import { Sparkles, Check, Copy, RotateCcw, ChevronDown, ChevronUp } from 'lucide-react';

export interface FontOption {
  id: string;
  name: string;
  family: string;
  defaultWeight: number;
  defaultSpacing: string;
  category: string;
  description: string;
}

export const fontOptions: FontOption[] = [
  // ── Direkta matchningar med logotypen
  {
    id: 'cinzel-bold',
    name: '1. Cinzel (900 Black) ⭐',
    family: "'Cinzel', serif",
    defaultWeight: 900,
    defaultSpacing: '0.04em',
    category: 'Exakt Logotypmatch',
    description: 'Närmast er logotyp! Mejslad, skarp och klassiskt hantverk',
  },
  {
    id: 'cinzel-800',
    name: '2. Cinzel (800 ExtraBold)',
    family: "'Cinzel', serif",
    defaultWeight: 800,
    defaultSpacing: '0.05em',
    category: 'Exakt Logotypmatch',
    description: 'Något luftigare mejslad stil som i loggan',
  },
  {
    id: 'marcellus',
    name: '3. Marcellus SC',
    family: "'Marcellus SC', serif",
    defaultWeight: 400,
    defaultSpacing: '0.06em',
    category: 'Exakt Logotypmatch',
    description: 'Skurna seriffer som matchar bokstäverna i loggan',
  },
  {
    id: 'castoro',
    name: '4. Castoro Titling',
    family: "'Castoro Titling', serif",
    defaultWeight: 400,
    defaultSpacing: '0.04em',
    category: 'Exakt Logotypmatch',
    description: 'Traditionellt mästersnickeri och stenhuggeri',
  },

  // ── Rejäla hantverkartypografier
  {
    id: 'barlow-condensed',
    name: '5. Barlow Condensed (900)',
    family: "'Barlow Condensed', sans-serif",
    defaultWeight: 900,
    defaultSpacing: '0.02em',
    category: 'Tung & Industriell',
    description: 'Rå, teknisk byggarbetsplats-precision',
  },
  {
    id: 'oswald',
    name: '6. Oswald (800)',
    family: "'Oswald', sans-serif",
    defaultWeight: 800,
    defaultSpacing: '0.01em',
    category: 'Tung & Industriell',
    description: 'Rejäl verkstadstradition med massiv tyngd',
  },
  {
    id: 'saira-condensed',
    name: '7. Saira Condensed (900)',
    family: "'Saira Condensed', sans-serif",
    defaultWeight: 900,
    defaultSpacing: '0.02em',
    category: 'Tung & Industriell',
    description: 'Kompakt, stenhård och bestämd',
  },
  {
    id: 'chivo',
    name: '8. Chivo Black (900)',
    family: "'Chivo', sans-serif",
    defaultWeight: 900,
    defaultSpacing: '-0.02em',
    category: 'Tung & Industriell',
    description: 'Tung industriell slagkraft',
  },
  {
    id: 'anton',
    name: '9. Anton',
    family: "'Anton', sans-serif",
    defaultWeight: 400,
    defaultSpacing: '0.01em',
    category: 'Tung & Industriell',
    description: 'Rå maximal muskelkraft',
  },
  {
    id: 'russo-one',
    name: '10. Russo One',
    family: "'Russo One', sans-serif",
    defaultWeight: 400,
    defaultSpacing: '0em',
    category: 'Tung & Industriell',
    description: 'Skottsäker orubblig byggblocks-look',
  },
  {
    id: 'league-spartan',
    name: '11. League Spartan (900)',
    family: "'League Spartan', sans-serif",
    defaultWeight: 900,
    defaultSpacing: '-0.02em',
    category: 'Tung & Industriell',
    description: 'Tjock, massiv och extremt självsäker',
  },
];

interface FontTesterProps {
  currentFont: FontOption;
  onFontChange: (font: FontOption) => void;
  fontWeight: number;
  onFontWeightChange: (weight: number) => void;
  letterSpacing: string;
  onLetterSpacingChange: (spacing: string) => void;
  textTransform: 'uppercase' | 'none';
  onTextTransformChange: (transform: 'uppercase' | 'none') => void;
}

export default function FontTester({
  currentFont,
  onFontChange,
  fontWeight,
  onFontWeightChange,
  letterSpacing,
  onLetterSpacingChange,
  textTransform,
  onTextTransformChange,
}: FontTesterProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const css = `font-family: ${currentFont.family};\nfont-weight: ${fontWeight};\nletter-spacing: ${letterSpacing};\ntext-transform: ${textTransform};`;
    navigator.clipboard.writeText(css);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleReset = () => {
    const defaultOpt = fontOptions[0];
    onFontChange(defaultOpt);
    onFontWeightChange(defaultOpt.defaultWeight);
    onLetterSpacingChange(defaultOpt.defaultSpacing);
    onTextTransformChange('uppercase');
  };

  return (
    <aside
      aria-label="Fonttestare"
      style={{
        position: 'fixed',
        top: '100px',
        right: '20px',
        zIndex: 99999,
        width: '350px',
        maxHeight: 'calc(100vh - 120px)',
        background: 'rgba(15, 23, 42, 0.96)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1.5px solid rgba(194, 132, 71, 0.8)',
        borderRadius: '18px',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.75), 0 0 30px rgba(194, 132, 71, 0.35)',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'var(--font-family)',
        color: '#ffffff',
        overflow: 'hidden',
        transition: 'all 0.25s ease',
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: '14px 16px',
          background: 'rgba(255, 255, 255, 0.04)',
          borderBottom: isCollapsed ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
        }}
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '26px',
            height: '26px',
            borderRadius: '6px',
            background: 'var(--color-primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <Sparkles size={15} color="#ffffff" />
          </div>
          <div>
            <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#ffffff' }}>
              Matcha Logotypens Font
            </div>
            <div style={{ fontSize: '0.72rem', color: '#fb923c', fontWeight: 600 }}>
              Vald: {currentFont.name.split(' ')[1] || currentFont.name}
            </div>
          </div>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsCollapsed(!isCollapsed);
          }}
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            border: 'none',
            color: '#ffffff',
            borderRadius: '6px',
            padding: '4px 6px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {isCollapsed ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
        </button>
      </div>

      {/* Body with Scrollable Font List */}
      {!isCollapsed && (
        <>
          <div
            style={{
              padding: '10px 12px',
              overflowY: 'auto',
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              maxHeight: '380px',
            }}
          >
            {fontOptions.map((font) => {
              const isSelected = currentFont.id === font.id;
              const isLogoMatch = font.category === 'Exakt Logotypmatch';
              return (
                <button
                  key={font.id}
                  onClick={() => {
                    onFontChange(font);
                    onFontWeightChange(font.defaultWeight);
                    onLetterSpacingChange(font.defaultSpacing);
                  }}
                  style={{
                    padding: '9px 12px',
                    borderRadius: '10px',
                    background: isSelected
                      ? 'rgba(194, 132, 71, 0.45)'
                      : isLogoMatch
                        ? 'rgba(194, 132, 71, 0.12)'
                        : 'rgba(255, 255, 255, 0.04)',
                    border: isSelected
                      ? '1.5px solid var(--color-primary)'
                      : isLogoMatch
                        ? '1px solid rgba(194, 132, 71, 0.35)'
                        : '1px solid rgba(255, 255, 255, 0.08)',
                    color: isSelected ? '#fcd34d' : '#ffffff',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.background = isLogoMatch
                        ? 'rgba(194, 132, 71, 0.2)'
                        : 'rgba(255, 255, 255, 0.08)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.background = isLogoMatch
                        ? 'rgba(194, 132, 71, 0.12)'
                        : 'rgba(255, 255, 255, 0.04)';
                    }
                  }}
                >
                  <div>
                    <div style={{
                      fontFamily: font.family,
                      fontSize: '1.05rem',
                      fontWeight: font.defaultWeight,
                      letterSpacing: font.defaultSpacing,
                      textTransform: 'uppercase',
                      lineHeight: 1.2,
                    }}>
                      {font.name}
                    </div>
                    <div style={{ fontSize: '0.68rem', color: isLogoMatch ? '#fed7aa' : '#94a3b8' }}>
                      {font.description}
                    </div>
                  </div>
                  {isSelected && <Check size={14} color="var(--color-primary)" style={{ flexShrink: 0 }} />}
                </button>
              );
            })}
          </div>

          {/* Footer Controls */}
          <div
            style={{
              padding: '10px 14px',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              background: 'rgba(255, 255, 255, 0.02)',
              display: 'flex',
              gap: '8px',
            }}
          >
            <button
              onClick={handleReset}
              style={{
                flex: 1,
                padding: '8px',
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#cbd5e1',
                border: 'none',
                borderRadius: '8px',
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '4px',
              }}
            >
              <RotateCcw size={12} /> Återställ
            </button>

            <button
              onClick={handleCopy}
              style={{
                flex: 1.5,
                padding: '8px',
                background: copied ? '#16a34a' : 'var(--color-primary)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                fontSize: '0.78rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                transition: 'all 0.2s',
              }}
            >
              {copied ? <Check size={13} /> : <Copy size={13} />}
              {copied ? 'Kopierat!' : 'Kopiera'}
            </button>
          </div>
        </>
      )}
    </aside>
  );
}
