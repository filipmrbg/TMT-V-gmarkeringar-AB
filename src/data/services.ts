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
    title: 'Vägmarkering & Trafik',
    shortDescription: 'Kompletta vägmarkeringssystem, kantlinjer, mittlinjer och övergångsställen med slitstark termoplast och moderna appliceringsmetoder.',
    heroText: 'Hållbara vägmarkeringar som skapar säkra och tydliga trafikmiljöer över hela Sverige.',
    detailedDescription: `TMT Vägmarkeringar AB är specialister på alla typer av vägmarkeringar för allmänna vägar, enskilda vägar, samfälligheter och kommunala gator. Med över 30 års samlad erfarenhet utför vi allt från nymålning till underhåll av befintliga väglinjer med högsta precision och slitstyrka.

Vi använder moderna metoder och godkända material som uppfyller Trafikverkets krav och standarder. Oavsett om det gäller motorvägar, tätortsgator eller samfällighetsvägar säkerställer vi tydlig vägledning och ökad trafiksäkerhet för alla trafikanter.`,
    heroImage: '/gallery/gallery-2.jpg',
    image: '/gallery/gallery-2.jpg',
    href: '/tjanster#vagmarkering',
    tag: 'Vägmarkering',
    badge: 'Trafiksäkerhet',
    highlights: [
      'Kantlinjer, mittlinjer och varningslinjer',
      'Övergångsställen och farthindermarkering',
      'Termoplast med hög friktion och reflexförmåga',
      'Snabb applicering med minimal trafikstörning',
    ],
    faq: [
      {
        question: 'Vilket material använder ni vid vägmarkering?',
        answer: 'Vi använder främst godkänd termoplast och slitstark vägmarkeringsfärg med inblandade glaspärlor för optimal reflexförmåga och synbarhet i mörker och regn.',
      },
      {
        question: 'Utför ni arbeten på natten för att undvika trafikstörningar?',
        answer: 'Ja, vi anpassar arbetstiderna efter trafikflödet och utför ofta uppdrag under kvällar och nätter när trafiken är som lägst.',
      },
    ],
  },
  {
    slug: 'parkeringsmarkering',
    title: 'Parkeringsmarkering',
    shortDescription: 'Tydliga parkeringsrutor, handikapplatser, elbilsladdplatser och numrering för bostadsrättsföreningar, köpcentrum och företag.',
    heroText: 'Optimera parkeringsytan och skapa en ordnad, välkomnande miljö med professionell linjemålning.',
    detailedDescription: `En genomtänkt parkeringsmarkering maximerar antalet platser, minskar risken för parkeringsskador och skapar ett prydligt och organiserat intryck. TMT Vägmarkeringar AB hjälper bostadsrättsföreningar, fastighetsbolag och handelsplatser över hela Sverige att linjera parkeringsytor, laddplatser, MC-platser och tillgänglighetsanpassade rutor enligt gällande regler.

Vi hjälper er även med optimering av flöden och linjelayouter så att fordon enkelt och säkert kan manövrera på området.`,
    heroImage: '/gallery/gallery-1.jpg',
    image: '/gallery/gallery-1.jpg',
    href: '/tjanster#parkeringsmarkering',
    tag: 'Parkeringslinjer',
    badge: 'Optimerad Layout',
    highlights: [
      'Målning och uppmätning av parkeringsrutor',
      'Laddplatsmarkering med gröna fält och elbilssymboler',
      'Handikapplatser enligt tillgänglighetskrav',
      'P-numrering, pilar och reserverade platser',
    ],
    faq: [
      {
        question: 'Hur snabbt kan bilarna parkera efter att linjerna målats?',
        answer: 'Beroende på material och temperatur torkar moderna markeringsfärger och termoplast oftast på 15–30 minuter, vilket minimerar avstängningstiden.',
      },
      {
        question: 'Kan ni hjälpa till att mäta upp och optimera parkeringsytan?',
        answer: 'Absolut! Vi har lång erfarenhet av layoutplanering och hjälper er att disponera ytan så att ni får maximalt antal säkra och bekväma platser.',
      },
    ],
  },
  {
    slug: 'industrimalning',
    title: 'Industrimålning & Lager',
    shortDescription: 'Tydliga truckgångar, säkra gångstråk, pallplatser och skyddszoner för lagerlokaler, logistikcenter och tillverkningsindustri.',
    heroText: 'Öka säkerheten och logistikflödet i lokalen med slitstarka industrimarkeringar och zonavgränsningar.',
    detailedDescription: `I industri- och lagermiljöer är tydlig uppmärkning avgörande för säkerheten. Genom att separera gående från trucktrafik och tydligt markera nödutgångar, brandsläckare och pallplatser minskar risken för arbetsplatsolyckor samtidigt som logistiken löper smidigare.

TMT Vägmarkeringar AB använder slitstarka tvåkomponentsfärger och termoplast anpassade för tufft industrislitage och frekvent trucktrafik på betong- och asfaltsgolv.`,
    heroImage: '/gallery/gallery-4.jpg',
    image: '/gallery/gallery-4.jpg',
    href: '/tjanster#industrimalning',
    tag: 'Industrimarkering',
    badge: 'Arbetsmiljö & Säkerhet',
    highlights: [
      'Truckgångar och avskilda gångstråk för gående',
      'Pallplatsrutor och numrerade lagerytor',
      'Skyddszoner runt elcentraler och nödutgångar',
      'Slitstarka 2K-färger för betonggolv och hårt slitage',
    ],
    faq: [
      {
        question: 'Klarar färgen tung trucktrafik och industritvätt?',
        answer: 'Ja, vi använder industriklassade system och 2K-färger speciellt utvecklade för högt mekaniskt slitage, truckkörning och maskinell städning.',
      },
      {
        question: 'Krävs det förbehandling av betonggolvet?',
        answer: 'Vi utför vid behov noggrann rengöring, avfettning eller lätt slipning av underlaget för att garantera optimal vidhäftning och livslängd.',
      },
    ],
  },
  {
    slug: 'symbolmalning',
    title: 'Symboler & Specialmarkering',
    shortDescription: 'Pilar, cykel- och gångsymboler, stopplinjer, textmarkeringar och lekplatsmålning med högsta precision och slitstyrka.',
    heroText: 'Tydliga symboler och specialmarkeringar som leder trafiken rätt och skapar trygghet.',
    detailedDescription: `Symboler och specialtecken är viktiga verktyg för att styra trafik och informera trafikanter. TMT Vägmarkeringar AB utför alla typer av symbolmålning med prefabricerad termoplast eller schabloner.

Från riktningspilar och hastighetsbegränsningar till cykelsymboler, skolzoner och dekorativa lekplatsmönster levererar vi distinkta och slitstarka markeringar som tål det svenska klimatet.`,
    heroImage: '/gallery/gallery-3.jpg',
    image: '/gallery/gallery-3.jpg',
    href: '/tjanster#symbolmalning',
    tag: 'Specialmarkering',
    badge: 'Hög Precision',
    highlights: [
      'Körfältspilar och stopplinjer',
      'Gång- och cykelsymboler samt väjningsmarkering',
      'Schablonmålning med siffror, bokstäver och texter',
      'Skolgårdsmålning och aktivitetsbanor',
    ],
    faq: [
      {
        question: 'Kan ni ta fram specialanpassade symboler och logotyper?',
        answer: 'Ja, med modern prefabricerad termoplast kan vi applicera företagslogotyper, unika mönster och specialdesignade markeringar direkt på underlaget.',
      },
      {
        question: 'Hur lång är livslängden på termoplastiska symboler?',
        answer: 'Prefabricerad termoplast smälts fast i asfalten och håller normalt upp till 6–8 gånger längre än traditionell färg.',
      },
    ],
  },
];

export default services;
