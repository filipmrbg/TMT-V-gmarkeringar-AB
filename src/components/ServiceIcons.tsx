import React from 'react';

interface IconProps {
  color?: string;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * 1. Parkeringsplatser - Parkeringsruta med P-symbol och biluppställningslinjer
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
 * 2. Laddplatser & symboler - Elbilsladdning, kontakt, blixt och parkeringsruta
 */
export function EVChargingIcon({
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
      {/* Parkeringsruta / laddzon */}
      <path
        d="M8 40V14h18"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="24"
        y="12"
        width="18"
        height="24"
        rx="4"
        stroke={color}
        strokeWidth="2"
        fill={color}
        fillOpacity="0.08"
      />
      {/* Laddstolpe kontaktstift */}
      <line x1="30" y1="8" x2="30" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="36" y1="8" x2="36" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round" />
      {/* Blixt / energisymbol */}
      <path
        d="M34 17l-4 7h4l-3 7"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Laddkabel med slinga */}
      <path
        d="M24 30c-4 0-8 2-8 6s4 4 8 4h4"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.7"
      />
    </svg>
  );
}

/**
 * 3. Övergångsställen - Ikonisk gående figur (Herr Gårman) på tydliga zebralinjer
 */
export function PedestrianCrossingIcon({
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
      {/* Bakre diskret vägkontur / skyltaccent */}
      <path
        d="M24 5L42 36H6L24 5z"
        stroke={color}
        strokeWidth="1.2"
        strokeDasharray="2 3"
        opacity="0.2"
        fill={color}
        fillOpacity="0.04"
      />

      {/* Vägmarkering / vägbas */}
      <line x1="4" y1="42" x2="44" y2="42" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.4" />

      {/* 4 tydliga zebralinjer (övergångsställets vita fält) */}
      <rect x="7" y="34.5" width="6.5" height="4.5" rx="1.5" fill={color} />
      <rect x="17" y="34.5" width="6.5" height="4.5" rx="1.5" fill={color} />
      <rect x="27" y="34.5" width="6.5" height="4.5" rx="1.5" fill={color} />
      <rect x="37" y="34.5" width="6.5" height="4.5" rx="1.5" fill={color} />

      {/* Gående figur i rörelse (övergångsställe) */}
      {/* Huvud */}
      <circle cx="21.5" cy="11" r="3.2" fill={color} />

      {/* Överkropp / bål i framåtlutad gångrörelse */}
      <path
        d="M22 15.5l2 9"
        stroke={color}
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      {/* Armar i naturligt gångsteg */}
      <path
        d="M15 22.5l7-4 7.5 3.5"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Främre ben som kliver ner mot zebrastrecket */}
      <path
        d="M24 24.5l5.5 8.5v4"
        stroke={color}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Bakre ben i aktivt frånskjut */}
      <path
        d="M24 24.5l-6.5 7-2 5.5"
        stroke={color}
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 * 4. Fräsning / borttagning av gamla linjer - Roterande frästrumma och linjeavverkning
 */
export function MillingIcon({
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
      {/* Asfaltsunderlag */}
      <line x1="6" y1="38" x2="42" y2="38" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      {/* Gammal linje som fräses bort (streckad / halvt borttagen) */}
      <path
        d="M6 34h12"
        stroke={color}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <line x1="28" y1="34" x2="42" y2="34" stroke={color} strokeWidth="1.5" strokeDasharray="2 3" opacity="0.4" />
      {/* Frästrumma / skärhuvud */}
      <circle
        cx="22"
        cy="22"
        r="11"
        stroke={color}
        strokeWidth="2.2"
        fill={color}
        fillOpacity="0.08"
      />
      <circle cx="22" cy="22" r="3.5" stroke={color} strokeWidth="2" fill={color} />
      {/* Fräskuggar / tänder */}
      <line x1="22" y1="7" x2="22" y2="11" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="22" y1="33" x2="22" y2="37" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="7" y1="22" x2="11" y2="22" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="33" y1="22" x2="37" y2="22" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="11" y1="11" x2="14" y2="14" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="30" y1="30" x2="33" y2="33" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      {/* Roterande rörelsepil */}
      <path
        d="M36 12a14 14 0 0 1 4 10m0 0l-3-3m3 3l3-3"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.8"
      />
    </svg>
  );
}

/**
 * 5. Industri målning - Truckgång, skyddszon och diagonala varningslinjer
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
 * 6. Snöröjning - Plogbil i full aktion med kraftigt snöplogblad, upplogad snövall, snösprut, saftblandare och en stor vintersnöflinga
 */
export function SnowPlowIcon({
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
      {/* Vägunderlag / asfalt */}
      <line x1="2" y1="41" x2="46" y2="41" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.4" />

      {/* Stor, distinkt och krispig vintersnöflinga uppe till vänster */}
      <line x1="12" y1="3.5" x2="12" y2="15.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="6" y1="9.5" x2="18" y2="9.5" stroke={color} strokeWidth="1.8" strokeLinecap="round" />
      <line x1="7.8" y1="5.3" x2="16.2" y2="13.7" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="16.2" y1="5.3" x2="7.8" y2="13.7" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      {/* Grenspetsar / kristaller på snöflingan */}
      <path d="M10.2 5.5L12 3.8l1.8 1.7" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.2 13.5L12 15.2l1.8-1.7" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 7.7L6.3 9.5l1.7 1.8" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 7.7l1.7 1.8-1.7 1.8" stroke={color} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="9.5" r="1.3" fill={color} />

      {/* Fallande snökristaller i luften */}
      <circle cx="4" cy="7.5" r="0.9" fill={color} opacity="0.6" />
      <circle cx="20" cy="5" r="1" fill={color} opacity="0.6" />
      <circle cx="7" cy="18" r="0.8" fill={color} opacity="0.5" />

      {/* Plogbilens flak / sandspridarbalja baktill */}
      <path
        d="M5 25h14l1 11H5V25z"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.08"
      />
      <line x1="4.5" y1="25" x2="19.5" y2="25" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="12" y1="25" x2="12.5" y2="36" stroke={color} strokeWidth="1.4" opacity="0.4" />

      {/* Plogbilens förarhytt */}
      <path
        d="M19 36V18h9.5l4 7.5V36H19z"
        stroke={color}
        strokeWidth="2.2"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.08"
      />

      {/* Vindruta och sidoruta */}
      <path
        d="M26.5 20.5l3 5.5H22v-5.5h4.5z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.16"
      />

      {/* Roterande varningsfyr (orange saftblandare) på hyttaket */}
      <rect
        x="23"
        y="14"
        width="5"
        height="4"
        rx="1"
        stroke={color}
        strokeWidth="1.6"
        fill={color}
        fillOpacity="0.35"
      />
      {/* Varningsljusstrålar */}
      <line x1="25.5" y1="11" x2="25.5" y2="13" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="22" y1="12" x2="23" y2="13" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <line x1="29" y1="12" x2="28" y2="13" stroke={color} strokeWidth="1.5" strokeLinecap="round" />

      {/* Hjul med fälgar */}
      <circle cx="12.5" cy="37.5" r="3.5" stroke={color} strokeWidth="2.2" fill={color} fillOpacity="0.2" />
      <circle cx="12.5" cy="37.5" r="1.2" fill={color} />
      <circle cx="26.5" cy="37.5" r="3.5" stroke={color} strokeWidth="2.2" fill={color} fillOpacity="0.2" />
      <circle cx="26.5" cy="37.5" r="1.2" fill={color} />
      <line x1="16" y1="37.5" x2="23" y2="37.5" stroke={color} strokeWidth="2" />

      {/* Hydrauliskt plogfäste framtill */}
      <line x1="32.5" y1="31" x2="36.5" y2="31" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <line x1="32.5" y1="35.5" x2="36.5" y2="35.5" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="36.5" cy="33.5" r="1.2" fill={color} />

      {/* Det kraftiga snöplogbladet (svängt stålskär) */}
      <path
        d="M36 21c3.5 5.5 5.5 12.5 7.5 20H36c-2-6-3.8-12-6.5-16.5l6.5-3.5z"
        stroke={color}
        strokeWidth="2.2"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.2"
      />
      {/* Skrapstål i underkant mot asfalten */}
      <line x1="35" y1="41" x2="44" y2="41" stroke={color} strokeWidth="3.2" strokeLinecap="round" />

      {/* Upplogad snövall framför bladet */}
      <path
        d="M43.5 41c3-3 4-7.5 1.5-11.5c-1-1.6-2.8-2-3.8-0.5"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        fill={color}
        fillOpacity="0.15"
      />

      {/* Snösprut / snörök som flyger upp i luften */}
      <circle cx="47" cy="27" r="1.3" fill={color} />
      <circle cx="44.5" cy="22" r="1.1" fill={color} />
      <circle cx="47" cy="18" r="0.9" fill={color} />
      <path
        d="M44 26c1.5-2.5 3.5-3.5 3-6.5"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeDasharray="1 2.5"
        opacity="0.8"
      />
    </svg>
  );
}

/**
 * 7. TMA-körning - Skyddsfordon med krockdämpare och belyst LED-piltavla
 */
export function TMAIcon({
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
      {/* Vägmarkering / marklinje */}
      <line x1="2" y1="41" x2="46" y2="41" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.4" />

      {/* TMA-fordonets förarhytt */}
      <path
        d="M27 36V22h10l4 6v8H27z"
        stroke={color}
        strokeWidth="2.2"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.08"
      />

      {/* Vindruta */}
      <path
        d="M37 24l2.5 4h-5.5v-4h3z"
        stroke={color}
        strokeWidth="1.8"
        strokeLinejoin="round"
        fill={color}
        fillOpacity="0.12"
      />

      {/* Varningsfyr på hyttaket */}
      <circle cx="30" cy="19" r="1.5" fill={color} />

      {/* Hjul (dynamisk färg, inga hårdkodade vita fält) */}
      <circle cx="34" cy="36" r="3.2" stroke={color} strokeWidth="2.2" fill={color} fillOpacity="0.15" />
      <circle cx="19" cy="36" r="3.2" stroke={color} strokeWidth="2.2" fill={color} fillOpacity="0.15" />

      {/* Flakram och underrede */}
      <line x1="16" y1="34" x2="27" y2="34" stroke={color} strokeWidth="2.2" />

      {/* Fäste mellan bil och dämpare */}
      <line x1="16" y1="27" x2="19" y2="27" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <line x1="16" y1="31" x2="19" y2="31" stroke={color} strokeWidth="2" strokeLinecap="round" />

      {/* Bakre TMA-kollisionsdämpare (kudde / energiabsorberande skydd) */}
      <rect
        x="4"
        y="24"
        width="12"
        height="11"
        rx="2"
        stroke={color}
        strokeWidth="2.2"
        fill={color}
        fillOpacity="0.14"
      />

      {/* Varningspilar / chevrons (<<<) på krockkudden */}
      <path
        d="M12 26.5l-3 3 3 3"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 26.5l-3 3 3 3"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Högmonterad LED-piltavla (ljustavla för omledning) */}
      <rect
        x="13"
        y="7"
        width="16"
        height="13"
        rx="2.5"
        stroke={color}
        strokeWidth="2"
        fill={color}
        fillOpacity="0.1"
      />

      {/* Monteringsstag för ljustavlan */}
      <line x1="17" y1="20" x2="17" y2="28" stroke={color} strokeWidth="1.8" />
      <line x1="25" y1="20" x2="25" y2="28" stroke={color} strokeWidth="1.8" />

      {/* Stor LED-riktningspil inuti tavlan */}
      <path
        d="M17 13.5h8m-3-3l3 3-3 3"
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Blixtrande varningslampor i tavlans övre hörn */}
      <circle cx="16" cy="9.5" r="1" fill={color} />
      <circle cx="26" cy="9.5" r="1" fill={color} />
    </svg>
  );
}

/**
 * Generisk RoadMarkingIcon för vägar
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
      <path
        d="M10 42L18 8h12l8 34"
        stroke={color}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 42L18 8h12l8 34H10z"
        fill={color}
        fillOpacity="0.08"
      />
      <line x1="24" y1="12" x2="24" y2="17" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
      <line x1="24" y1="22" x2="24" y2="28" stroke={color} strokeWidth="2.8" strokeLinecap="round" />
      <line x1="24" y1="33" x2="24" y2="40" stroke={color} strokeWidth="3.2" strokeLinecap="round" />
      <line x1="5" y1="42" x2="43" y2="42" stroke={color} strokeWidth="2" strokeLinecap="round" opacity="0.4" />
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
    case 'parkeringsplatser':
    case 'parkeringsmarkering':
    case 'parkeringslinjer':
      return <ParkingIcon color={color} size={size} className={className} style={style} />;
    case 'laddplatser-symboler':
    case 'laddplatser':
    case 'symbolmalning':
      return <EVChargingIcon color={color} size={size} className={className} style={style} />;
    case 'overgangsstallen':
      return <PedestrianCrossingIcon color={color} size={size} className={className} style={style} />;
    case 'frasning-borttagning':
      return <MillingIcon color={color} size={size} className={className} style={style} />;
    case 'industrimalning':
    case 'industri-malning':
      return <IndustryIcon color={color} size={size} className={className} style={style} />;
    case 'snorojning-snoplogning':
      return <SnowPlowIcon color={color} size={size} className={className} style={style} />;
    case 'tma-vagsakerhet':
    case 'tma':
      return <TMAIcon color={color} size={size} className={className} style={style} />;
    case 'vagmarkering':
    default:
      return <RoadMarkingIcon color={color} size={size} className={className} style={style} />;
  }
}

export default ServiceIcon;
