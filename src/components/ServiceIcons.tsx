import React from 'react';

interface IconProps {
  color?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * 1. Invändigt Måleri - Färgroller med färgvåd och ergonomiskt hantverkshandtag
 */
export function PaintRollerIcon({
  color = 'var(--color-primary, #c28447)',
  size = 42,
  className,
  style,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block', overflow: 'visible', ...style }}
    >
      {/* Subtil färgrand på väggen */}
      <path
        d="M8 13h22c2.2 0 4 1.8 4 4v2c0 1.5-1 2.5-2.5 2.5H14c-2 0-3.5 1-3.5 2.5v2"
        stroke={color}
        strokeWidth="1.8"
        strokeDasharray="3 2"
        opacity="0.45"
      />
      {/* Små färgdroppar för autentisk målarkänsla */}
      <circle cx="34" cy="25" r="1.4" fill={color} />
      <circle cx="16" cy="30" r="1.1" fill={color} />

      {/* Själva rollern (cylinder) */}
      <rect
        x="6"
        y="6"
        width="26"
        height="10"
        rx="3"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.12"
      />
      {/* Rollerns spår/struktur */}
      <line x1="13" y1="6" x2="13" y2="16" stroke={color} strokeWidth="1.5" opacity="0.35" />
      <line x1="22" y1="6" x2="22" y2="16" stroke={color} strokeWidth="1.5" opacity="0.35" />

      {/* Ändknoppar / axelfäste */}
      <line x1="4" y1="11" x2="6" y2="11" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="32" y1="11" x2="35" y2="11" stroke={color} strokeWidth="2.2" strokeLinecap="round" />

      {/* Svivelstålarm */}
      <path
        d="M35 11h3a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H21a2 2 0 0 0-2 2v6"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Ergonomiskt målarskaft */}
      <rect
        x="16"
        y="28"
        width="6"
        height="15"
        rx="2"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.18"
      />
      {/* Greppspår på handtaget */}
      <line x1="16" y1="33" x2="22" y2="33" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16" y1="38" x2="22" y2="38" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/**
 * 2. Fasadmålning - Klassisk svensk trävilla med sadeltak och panel
 */
export function FacadeIcon({
  color = 'var(--color-primary, #c28447)',
  size = 42,
  className,
  style,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block', overflow: 'visible', ...style }}
    >
      {/* Marklinje */}
      <line x1="4" y1="42" x2="44" y2="42" stroke={color} strokeWidth="2" strokeLinecap="round" />

      {/* Skorsten med huv */}
      <path d="M32 13V8h5v7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="31" y1="8" x2="38" y2="8" stroke={color} strokeWidth="1.8" strokeLinecap="round" />

      {/* Sadeltak med taksprång */}
      <path
        d="M6 20L24 6L42 20"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Takkonstruktion / takstolsdetalj */}
      <line x1="24" y1="6" x2="24" y2="20" stroke={color} strokeWidth="1.6" opacity="0.4" strokeLinecap="round" />
      <line x1="14" y1="20" x2="24" y2="13" stroke={color} strokeWidth="1.4" opacity="0.4" strokeLinecap="round" />
      <line x1="34" y1="20" x2="24" y2="13" stroke={color} strokeWidth="1.4" opacity="0.4" strokeLinecap="round" />

      {/* Fasadkropp */}
      <rect
        x="10"
        y="20"
        width="28"
        height="22"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.08"
      />

      {/* Liggande träpanel / fasadlinjer */}
      <line x1="10" y1="26" x2="38" y2="26" stroke={color} strokeWidth="1.2" opacity="0.35" />
      <line x1="10" y1="31" x2="38" y2="31" stroke={color} strokeWidth="1.2" opacity="0.35" />
      <line x1="10" y1="36" x2="38" y2="36" stroke={color} strokeWidth="1.2" opacity="0.35" />

      {/* Entrédörr */}
      <path
        d="M25 42V31h8v11"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#ffffff"
      />
      <circle cx="31" cy="37" r="0.75" fill={color} />

      {/* Spröjsat fönster */}
      <rect
        x="14"
        y="28"
        width="7"
        height="8"
        rx="0.5"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#ffffff"
      />
      <line x1="17.5" y1="28" x2="17.5" y2="36" stroke={color} strokeWidth="1.2" />
      <line x1="14" y1="32" x2="21" y2="32" stroke={color} strokeWidth="1.2" />
    </svg>
  );
}

/**
 * 3. Tapetsering och spackling - Elegant tapetrulle med mönstrad våd och spackelspade
 */
export function WallpaperIcon({
  color = 'var(--color-primary, #c28447)',
  size = 42,
  className,
  style,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block', overflow: 'visible', ...style }}
    >
      {/* Tapetrulle upptill */}
      <rect
        x="8"
        y="6"
        width="24"
        height="7"
        rx="3.5"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.15"
      />
      <ellipse cx="11.5" cy="9.5" rx="2" ry="2.5" stroke={color} strokeWidth="1.5" />

      {/* Nedrullad tapetvåd */}
      <path
        d="M10 13v25c0 1.5 2 2.5 4 2h16c1.5 0 2.5-1 2.5-2.5V13"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.06"
      />

      {/* Stiliserat tapetmönster (diamant/harlekin) */}
      <path
        d="M21 18l3.5 3.5L21 25l-3.5-3.5L21 18z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.2"
      />
      <path
        d="M21 28l3.5 3.5L21 35l-3.5-3.5L21 28z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.2"
      />

      {/* Spackelspade / glättare */}
      <path
        d="M32 30l7.5-3.5 2.5 5.5-7.5 3.5z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#ffffff"
      />
      <path d="M40 33.5l3.5 6.5" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/**
 * 4. Totalentreprenad - Modulär fasadställning och projektledningschecklista
 */
export function TotalentreprenadIcon({
  color = 'var(--color-primary, #c28447)',
  size = 42,
  className,
  style,
}: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{ display: 'block', overflow: 'visible', ...style }}
    >
      {/* Fasadställning (spiror / standards) */}
      <line x1="8" y1="6" x2="8" y2="42" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="26" y1="6" x2="26" y2="42" stroke={color} strokeWidth="2.2" strokeLinecap="round" />

      {/* Bottenskruvar / fötter */}
      <line x1="5" y1="42" x2="11" y2="42" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="23" y1="42" x2="29" y2="42" stroke={color} strokeWidth="2.5" strokeLinecap="round" />

      {/* Horisontella ställningsplan / bommar */}
      <line x1="8" y1="15" x2="26" y2="15" stroke={color} strokeWidth="2" />
      <line x1="8" y1="28" x2="26" y2="28" stroke={color} strokeWidth="2" />

      {/* Kryss-stag (diagonaler) */}
      <line x1="8" y1="15" x2="26" y2="28" stroke={color} strokeWidth="1.6" opacity="0.5" />
      <line x1="26" y1="15" x2="8" y2="28" stroke={color} strokeWidth="1.6" opacity="0.5" />

      {/* Räcke upptill */}
      <line x1="8" y1="10" x2="26" y2="10" stroke={color} strokeWidth="1.4" strokeDasharray="3 2" opacity="0.6" />

      {/* Projektlednings-checklista / helhetsansvar */}
      <rect
        x="29"
        y="14"
        width="15"
        height="24"
        rx="2"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="#ffffff"
      />
      {/* Klämma upptill */}
      <path
        d="M33 14v-2c0-.6.4-1 1-1h5c.6 0 1 .4 1 1v2"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.2"
      />

      {/* Bockar på checklistan */}
      <path d="M32 20.5l1.5 1.5 3.5-3" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 26.5l1.5 1.5 3.5-3" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M32 32.5l1.5 1.5 3.5-3" stroke={color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ServiceIcon({
  type,
  color = 'var(--color-primary, #c28447)',
  size = 42,
  className,
  style,
}: {
  type: string;
  color?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  switch (type) {
    case 'invandigt-maleri':
    case 'renovering':
      return <PaintRollerIcon color={color} size={size} className={className} style={style} />;
    case 'fasadmalning':
    case 'nybyggnation':
      return <FacadeIcon color={color} size={size} className={className} style={style} />;
    case 'tapetsering':
    case 'tillbyggnad':
    case 'ombyggnation':
      return <WallpaperIcon color={color} size={size} className={className} style={style} />;
    case 'totalentreprenad':
    case 'stallningsuthyrning':
      return <TotalentreprenadIcon color={color} size={size} className={className} style={style} />;
    default:
      return <PaintRollerIcon color={color} size={size} className={className} style={style} />;
  }
}

export default ServiceIcon;
