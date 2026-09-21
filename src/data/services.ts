export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  shortDescription: string;
  heroText: string;
  detailedDescription: string;
  heroImage: string;
  image: string;
  href: string;
  tag?: string;
  badge?: string;
  highlights?: string[];
  sections?: Array<{
    heading?: string;
    text?: string;
    image?: string;
    bullets?: string[];
    subsections?: Array<{
      subheading: string;
      text: string;
    }>;
  }>;
  faq?: FAQItem[];
  iconName?: string;
  features?: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export const services: ServiceItem[] = [
  {
    slug: 'vagmarkering',
    title: 'Vägmarkeringar',
    shortDescription: 'Väglinjer, parkeringsplatser, elbilsladdplatser, övergångsställen och industrimarkering med slitstark termoplast och färg.',
    heroText: 'Hållbara vägmarkeringar och komplett linjemålning som skapar säkra och tydliga miljöer över hela Sverige.',
    detailedDescription: `TMT Vägmarkeringar AB är specialister på alla former av professionell vägmarkering och linjemålning för Trafikverket, kommuner, samfälligheter, fastighetsbolag, BRF och industrier över hela Sverige. Med modern maskinpark och godkända material levererar vi slitstarka lösningar med högsta precision, friktion och retroreflektion.

Vårt erbjudande inom vägmarkeringar omfattar bland annat:
• Vägar och gator: Kantlinjer, mittlinjer, varningslinjer, spärrområden och cykelbanor enligt Trafikverkets standarder.
• Parkeringsplatser & garage: Uppmätning och linjemålning av p-rutor, handikapplatser, MC-platser och pilar för BRF, köpcentrum och företag.
• Laddplatser & symboler: Tydliga elbilsladdplatser med gröna kontrastfält, laddsymboler, numrering och specialschabloner.
• Övergångsställen & passager: Högreflekterande zebralinjer och varningsmarkeringar med termoplast och glaspärlor för trygg passage dygnet runt.
• Industrimålning & lager: Truckgångar, gångstråk, 5S-zoner och pallplatsrutor med slitstarka 2K-färger för maximal säkerhet i logistikmiljöer.`,
    heroImage: '/services/vagmarkering.jpg',
    image: '/services/vagmarkering.jpg',
    href: '/tjanster/vagmarkering',
    tag: 'Vägmarkering & Linjer',
    badge: 'Trafikverket-standard',
    highlights: [
      'Kantlinjer, mittlinjer & cykelbanor enligt Trafikverkets krav',
      'Målning och uppmätning av p-rutor och handikapplatser',
      'Gröna laddplatser och kundanpassade vägsymboler',
      'Övergångsställen med hög retroreflektion och friktion',
      'Industrimålning av truckgångar och skyddszoner i lager',
      'Slitstark termoplast och godkända färg- och 2K-system',
    ],
    faq: [
      {
        question: 'Vilket material lämpar sig bäst för väglinjer och utomhusmarkering?',
        answer: 'Termoplast är standarden för nordiska vägar och parkeringsytor tack vare dess extrema slitstyrka, goda friktion och tålighet mot snöröjning och dubbdäck. För inomhusgolv och industri används slitstarka 2K-system.',
      },
      {
        question: 'Hjälper ni även BRF, företag och samfälligheter med parkeringsytor?',
        answer: 'Ja, vi åtar oss allt från stora vägprojekt till mindre parkeringsytor för BRF:er, handelsplatser och företag. Vi hjälper gärna till med layout och uppmätning för att optimera antalet platser.',
      },
      {
        question: 'Utför ni även industrimålning och truckgångar inomhus?',
        answer: 'Ja, vi använder industriklassade 2K-epoxi- och polyuretanfärger speciellt anpassade för hårt mekaniskt slitage, tung trucktrafik och maskinell städning i lager och verkstäder.',
      },
      {
        question: 'Hur snabbt kan fordon och trafik släppas på efter målning?',
        answer: 'Termoplast och moderna markeringsfärger torkar oftast på 15–30 minuter, vilket minimerar avstängningstiden och störningen för trafik och verksamhet.',
      },
      {
        question: 'Hur beräknas priset för vägmarkering och linjemålning?',
        answer: 'Priset baseras på antal löpmeter, linjetyp, underlag och materialval. Vi erbjuder specificerade offerter med tydlig kalkyl.',
      },
    ],
    seoTitle: 'Vägmarkeringar och Linjemålning i Hela Sverige | TMT AB',
    seoDescription: 'Professionella vägmarkeringar, parkeringslinjer, laddplatser och industrimålning med slitstark termoplast. Snabb mobil etablering i hela landet. Begär offert!',
  },
  {
    slug: 'frasning-borttagning',
    title: 'Linjefräsning',
    shortDescription: 'Skonsam och effektiv fräsning och borttagning av gamla, slitna eller felaktiga linjer på asfalt och betong.',
    heroText: 'Få bort gamla linjer och termoplast utan att skada underlaget i onödan inför ommålning.',
    detailedDescription: `Vid omdisponering av parkeringsytor, ändrade trafikflöden eller felmålade linjer krävs professionell borttagning. Med moderna linjefräsar och mekanisk utrustning avlägsnar vi gammal termoplast och vägmarkeringsfärg effektivt.

Vi anpassar fräsdjup och metod efter underlaget – vare sig det gäller slät betong i parkeringshus eller grov asfalt utomhus – så att ytan blir ren och redo för ny applicering utan onödig påverkan.`,
    heroImage: '/services/frasning-borttagning.jpg',
    image: '/services/frasning-borttagning.jpg',
    href: '/tjanster/frasning-borttagning',
    tag: 'Linjeborttagning',
    badge: 'Skonsam metod',
    highlights: [
      'Mekanisk fräsning av gammal termoplast och färg',
      'Effektiv borttagning på både asfalt och industrigolv',
      'Skapar ren yta inför ny linjedragning och layout',
      'Minimerar skador och spårbildning i underlaget',
    ],
    faq: [
      {
        question: 'Blir det märken i asfalten efter linjefräsning?',
        answer: 'Våra moderna precisionsfräsar avverkar endast linjeskiktet och minimerar spår i underlaget. Vid behov kan vi även lägga ett diskret täckskikt för jämn finish.',
      },
      {
        question: 'Kan man fräsa bort linjer inomhus på betonggolv?',
        answer: 'Ja, vi anpassar verktygen för betong och använder dammreducerande metoder lämpliga för lagerlokaler och parkeringsgarage.',
      },
      {
        question: 'Hur sätts priset för linjefräsning?',
        answer: 'Priset beräknas per löpmeter eller kvadratmeter beroende på linjernas tjocklek och underlag. Kontakta oss för en snabb kalkyl och offert.',
      },
    ],
    seoTitle: 'Linjefräsning och Borttagning av Väglinjer | TMT',
    seoDescription: 'Skonsam mekanisk fräsning och borttagning av gammal termoplast och linjefärg på asfalt och betong inför ommålning. Mobil utrustning i hela landet.',
  },
  {
    slug: 'snorojning-snoplogning',
    title: 'Snöröjning',
    shortDescription: 'Vinterväghållning, snöröjning, snöplogning och halkbekämpning för företag, samfälligheter och fastigheter.',
    heroText: 'Pålitlig vinterväghållning som håller vägar, parkeringar och infarter säkra och framkomliga.',
    detailedDescription: `När vintern slår till är snabb och pålitlig snöröjning avgörande för att hålla verksamheter rullande och minimera halkolyckor. Vi erbjuder snöröjning, snöplogning, sandning och saltning för kommersiella fastigheter, industriområden, bostadsrättsföreningar och samfälligheter.

Med flexibel maskinpark och hög beredskap rycker vi ut vid snöfall för att säkerställa trygg framkomlighet för både bilar och fotgängare.`,
    heroImage: '/services/snorojning-snoplogning.webp',
    image: '/services/snorojning-snoplogning.webp',
    href: '/tjanster/snorojning-snoplogning',
    tag: 'Vinterväghållning',
    badge: 'Beredskap dygnet runt',
    highlights: [
      'Snöplogning och snöröjning av parkeringar och vägar',
      'Halkbekämpning med sandning och saltning',
      'Jour och beredskap under hela vintersäsongen',
      'Anpassad maskinpark för både stora ytor och trånga passager',
    ],
    faq: [
      {
        question: 'Erbjuder ni säsongsavtal för snöröjning?',
        answer: 'Ja, vi upprättar flexibla avtal anpassade efter era behov, antingen med fast beredskap per säsong eller på löpande räkning vid snöfall.',
      },
      {
        question: 'Ingår halkbekämpning vid snöröjningen?',
        answer: 'Ja, vi kombinerar plogning med sandning eller saltning för att förhindra halkolyckor på gångytor och körytor.',
      },
      {
        question: 'Vad kostar snöröjning och vinterväghållning?',
        answer: 'Vi erbjuder både fasta säsongsavtal med beredskap och avtal på löpande räkning vid snöfall. Priset sätts efter ytans storlek och behov av halkbekämpning med sand eller salt.',
      },
    ],
    seoTitle: 'Snöröjning och Vinterväghållning för Företag och BRF | TMT',
    seoDescription: 'Pålitlig snöröjning, snöplogning och halkbekämpning med sandning och saltning för kommersiella fastigheter och samfälligheter under hela vintersäsongen.',
  },
  {
    slug: 'tma-vagsakerhet',
    title: 'TMA-körning',
    shortDescription: 'Godkända TMA-fordon med energiabsorberande påkörningsskydd och varningsskyltning för säkra vägarbeten.',
    heroText: 'Maximal vägsäkerhet och skydd för personal och trafikanter vid alla typer av vägarbeten.',
    detailedDescription: `Säkerheten vid arbete på väg är av högsta prioritet. TMT Vägmarkeringar AB tillhandahåller fullt utrustade TMA-bilar (Trafik- och Miljöanpassade fordon) med godkända energiabsorberande påkörningsskydd, LED-ljustavlor och pilsignaler.

Våra förare har giltiga certifikat för Arbete på Väg (APV 1+2) och lång erfarenhet av att leda och skydda trafik vid både rörliga och fasta entreprenader, linjemålning och underhållsarbeten.`,
    heroImage: '/cta-banner-bg.jpg',
    image: '/cta-banner-bg.jpg',
    href: '/tjanster/tma-vagsakerhet',
    tag: 'Vägsäkerhet',
    badge: 'Certifierad APV',
    highlights: [
      'Godkända TMA-bilar med energiabsorberande påkörningsskydd',
      'Certifierade förare med Arbete på Väg (APV 1+2)',
      'Kraftfull LED-varningsbelysning och piltavlor',
      'Skydd för både personal och medtrafikanter',
    ],
    faq: [
      {
        question: 'Vilka behörigheter har era TMA-förare?',
        answer: 'Vår personal innehar alla nödvändiga certifieringar från Trafikverket för Arbete på Väg samt ID06-legitimation.',
      },
      {
        question: 'Kan man boka TMA-bil för korta uppdrag eller akuta arbeten?',
        answer: 'Ja, vi åtar oss både kortare dagsinsatser och längre entreprenader med flexibel tillgänglighet över hela regionen.',
      },
      {
        question: 'Vad kostar det att hyra en TMA-bil med chaufför?',
        answer: 'Priset baseras oftast på timtaxa eller fast dygnspris beroende på uppdragets längd och arbetstid (dag, kväll eller natt). Godkänt fordon och certifierad förare ingår alltid.',
      },
    ],
    seoTitle: 'Hyra TMA-bil med Certifierad Chaufför (APV) | TMT',
    seoDescription: 'Godkända TMA-fordon med krockdämpare och LED-piltavlor för säkra vägarbeten. Certifierade förare för Arbete på Väg i hela Sverige. Boka snabbt och tryggt!',
  },
];

export default services;
