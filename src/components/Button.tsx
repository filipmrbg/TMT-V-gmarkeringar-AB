import { ReactNode, MouseEventHandler, CSSProperties } from 'react';
import { Link } from 'react-router-dom';

type Variant = 'primary' | 'white' | 'outline' | 'dark' | 'secondary';
type Size = 'sm' | 'md' | 'lg';

interface Props {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  href?: string;
  onClick?: MouseEventHandler;
}

const sizeStyles: Record<Size, CSSProperties> = {
  sm: { padding: '10px 24px', fontSize: '0.85rem' },
  md: { padding: '14px 32px', fontSize: '0.95rem' },
  lg: { padding: '16px 40px', fontSize: '1.05rem' },
};

const variantStyles: Record<Variant, CSSProperties> = {
  primary: {
    background: '#0F172A',
    color: '#ffffff',
    fontWeight: 700,
    border: '2px solid #0F172A',
  },
  white: {
    background: '#ffffff',
    color: '#0F172A',
    fontWeight: 700,
    border: '2px solid #ffffff',
  },
  outline: {
    background: 'transparent',
    color: '#ffffff',
    border: '2px solid rgba(255, 255, 255, 0.85)',
  },
  dark: {
    background: '#0F172A',
    color: '#ffffff',
    border: '2px solid #0F172A',
  },
  secondary: {
    background: '#ffffff',
    color: '#0F172A',
    border: '1.5px solid #cbd5e1',
    fontWeight: 600,
  },
};

const base: CSSProperties = {
  borderRadius: '9999px',
  cursor: 'pointer',
  fontFamily: 'var(--font-family)',
  fontWeight: 700,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  lineHeight: 1.2,
};

function handleMouseEnter(e: React.MouseEvent<HTMLElement>, variant: Variant) {
  const el = e.currentTarget as HTMLElement;
  el.style.transform = 'translateY(-2px)';
  if (variant === 'white') {
    el.style.background = '#f1f5f9';
    el.style.borderColor = '#f1f5f9';
    el.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.25)';
  } else if (variant === 'primary' || variant === 'dark') {
    el.style.background = '#1E293B';
    el.style.borderColor = '#1E293B';
    el.style.boxShadow = '0 8px 25px rgba(15, 23, 42, 0.25)';
  } else if (variant === 'secondary') {
    el.style.background = '#f8fafc';
    el.style.borderColor = '#0F172A';
    el.style.color = '#0F172A';
    el.style.boxShadow = '0 8px 25px rgba(15, 23, 42, 0.08)';
  } else {
    el.style.background = 'rgba(255, 255, 255, 0.1)';
    el.style.boxShadow = '0 8px 25px rgba(255, 255, 255, 0.12)';
  }
}

function handleMouseLeave(e: React.MouseEvent<HTMLElement>, variant: Variant) {
  const el = e.currentTarget as HTMLElement;
  el.style.transform = 'translateY(0)';
  el.style.boxShadow = 'none';
  if (variant === 'white') {
    el.style.background = '#ffffff';
    el.style.borderColor = '#ffffff';
  } else if (variant === 'primary' || variant === 'dark') {
    el.style.background = '#0F172A';
    el.style.borderColor = '#0F172A';
  } else if (variant === 'secondary') {
    el.style.background = '#ffffff';
    el.style.borderColor = '#cbd5e1';
    el.style.color = '#0F172A';
  } else {
    el.style.background = 'transparent';
  }
}

export default function Button({ variant = 'primary', size = 'md', children, href, onClick }: Props) {
  const style: CSSProperties = {
    ...base,
    ...variantStyles[variant],
    ...sizeStyles[size],
  };

  // Internal route
  if (href && !href.startsWith('http') && !href.startsWith('mailto') && !href.startsWith('tel')) {
    return (
      <Link
        to={href}
        style={style}
        onMouseEnter={(e) => handleMouseEnter(e, variant)}
        onMouseLeave={(e) => handleMouseLeave(e, variant)}
      >
        {children}
      </Link>
    );
  }

  // Anchor
  if (href) {
    return (
      <a
        href={href}
        style={style}
        onMouseEnter={(e) => handleMouseEnter(e, variant)}
        onMouseLeave={(e) => handleMouseLeave(e, variant)}
      >
        {children}
      </a>
    );
  }

  // Regular button
  return (
    <button
      style={style}
      onClick={onClick}
      onMouseEnter={(e) => handleMouseEnter(e, variant)}
      onMouseLeave={(e) => handleMouseLeave(e, variant)}
    >
      {children}
    </button>
  );
}
