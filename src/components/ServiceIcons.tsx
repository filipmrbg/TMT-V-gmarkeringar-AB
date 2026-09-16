import React from 'react';

interface IconProps {
  color?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * 1. Vägmarkering & Trafik - Väg med streckad mittlinje, kantlinjer och markeringspistol / bil
 */
export function RoadMarkingIcon({
  color = 'currentColor',
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
      {/* Vägkontur med perspektiv */}
      <path
        d="M10 42L18 8h12l8 34"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Vägunderlag med diskret fill */}
      <path
        d="M10 42L18 8h12l8 34H10z"
        fill={color}
        fillOpacity="0.08"
      />
      {/* Mittlinjer (streckad linjemålning) */}
      <line x1="24" y1="12" x2="24" y2="17" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="24" y1="22" x2="24" y2="28" stroke={color} strokeWidth="2.8" strokeLinecap="round" />
      <line x1="24" y1="33" x2="24" y2="40" stroke={color} strokeWidth="3.2" strokeLinecap="round" />
      {/* Yttre marklinjer / stödlinjer */}
      <line x1="5" y1="42" x2="43" y2="42" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

/**
 * 2. Parkeringsmarkering - Parkeringsruta med P-symbol och biluppställningslinjer
 */
export function ParkingIcon({
  color = 'currentColor',
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
      {/* Parkeringsbås / rutor */}
      <path
        d="M7 38V12h14v26"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 38V12h14v26"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* P-skylt / emblem i centrum */}
      <rect
        x="26"
        y="16"
        width="16"
        height="18"
        rx="4"
        stroke={color}
        strokeWidth="2"
        fill={color}
        fillOpacity="0.08"
      />
      {/* Bokstaven P */}
      <path
        d="M32 30V20h3.5a2.5 2.5 0 0 1 0 5H32"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * 3. Industrimålning & Lager - Skyddszon, truckgång och diagonala varningslinjer
 */
export function IndustryIcon({
  color = 'currentColor',
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
      {/* Yttre säkerhetszon / golvyta */}
      <rect
        x="6"
        y="8"
        width="36"
        height="32"
        rx="3"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.08"
      />
      {/* Diagonala varningsränder (industrimarkering) */}
      <line x1="6" y1="20" x2="18" y2="8" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="12" y1="40" x2="42" y2="10" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="26" y1="40" x2="42" y2="24" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      {/* Mittfälts gångstråk */}
      <rect
        x="16"
        y="18"
        width="16"
        height="12"
        rx="2"
        stroke={color}
        strokeWidth="1.8"
        fill={color}
        fillOpacity="0.12"
      />
      <circle cx="24" cy="24" r="2.5" fill={color} />
    </svg>
  );
}

/**
 * 4. Symbolmålning & Specialmarkering - Riktningspil och schablonmarkering
 */
export function SymbolMarkingIcon({
  color = 'currentColor',
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
      {/* Asfaltsunderlag / cirkel */}
      <circle
        cx="24"
        cy="24"
        r="18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill={color}
        fillOpacity="0.08"
      />
      {/* Riktningspil framåt / höger (klassisk termoplastpil) */}
      <path
        d="M24 12v18M24 12l-5 5M24 12l5 5"
        stroke={color}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 24h6a4 4 0 0 1 4 4v4M34 32l-3-3M34 32l3-3"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Stopplinje nedtill */}
      <line x1="16" y1="36" x2="26" y2="36" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export function ServiceIcon({
  type,
  color = 'currentColor',
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
    case 'vagmarkering':
      return <RoadMarkingIcon color={color} size={size} className={className} style={style} />;
    case 'parkeringsmarkering':
    case 'parkeringslinjer':
      return <ParkingIcon color={color} size={size} className={className} style={style} />;
    case 'industrimalning':
      return <IndustryIcon color={color} size={size} className={className} style={style} />;
    case 'symbolmalning':
      return <SymbolMarkingIcon color={color} size={size} className={className} style={style} />;
    default:
      return <RoadMarkingIcon color={color} size={size} className={className} style={style} />;
  }
}

export default ServiceIcon;
