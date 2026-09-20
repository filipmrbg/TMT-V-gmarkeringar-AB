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
  // ── RAD 1: MARKERING, LINJER OCH VÄG (KÄRNVERKSAMHET) ──
  {
    slug: 'vagmarkering',
    title: 'Vägmarkering',
    shortDescription: 'Kantlinjer, mittlinjer, varningslinjer och cykelbanor med slitstark termoplast för allmänna och enskilda vägar.',
    heroText: 'Hållbara vägmarkeringar som skapar säkra och tydliga trafikmiljöer över hela Sverige.',
    detailedDescription: `TMT Vägmarkeringar AB är specialister på alla former av vägmarkering för kommuner, samfälligheter, enskilda vägar och entreprenader. Med modern maskinpark och godkända material applicerar vi kantlinjer, mittlinjer, spärrområden och cykelbanor med högsta precision och slitstyrka.

Alla våra vägmarkeringar uppfyller Trafikverkets krav på friktion och retroreflektion, vilket säkerställer maximal synbarhet i både mörker och nederbörd.`,
    heroImage: '/services-hero.jpg',
    image: '/services-hero.jpg',
    href: '/tjanster/vagmarkering',
    tag: 'Vägmarkering',
    badge: 'Trafikverket-standard',
    highlights: [
      'Kantlinjer, mittlinjer och varningslinjer',
      'Cykelbanor och prioriterade körfält',
      'Termoplast med inblandade glaspärlor för reflex',
      'Snabb etablering med minimal trafikpåverkan',
    ],
    faq: [
      {
        question: 'Vilket material lämpar sig bäst för väglinjer?',
        answer: 'Termoplast är standarden för nordiska vägar tack vare dess extrema slitstyrka, goda friktion och tålighet mot snöröjning och dubbdäck.',
      },
      {
        question: 'Hjälper ni även privata samfälligheter och byvägar?',
        answer: 'Ja, vi åtar oss uppdrag för både stora vägprojekt, kommunala gator och privata vägföreningar och samfälligheter.',
      },
      {
        question: 'Hur beräknas priset för vägmarkering?',
        answer: 'Priset baseras på antal löpmeter, linjebredd, linjetyp och val av material. Vi erbjuder kostnadsfria offerter med specificerad kalkyl.',
      },
    ],
    seoTitle: 'Vägmarkering och Linjemålning i Hela Sverige | TMT AB',
    seoDescription: 'Professionell vägmarkering med slitstark termoplast enligt Trafikverkets standard. Snabb mobil etablering för kommuner, samfälligheter och företag. Få fri offert!',
  },
  {
    slug: 'parkeringsplatser',
    title: 'Parkeringsplatser',
    shortDescription: 'Målning och uppmätning av p-rutor, handikapplatser, numrering och pilar för BRF, köpcentrum och företag.',
    heroText: 'Optimera parkeringsytan och skapa en ordnad, trafiksäker miljö med professionell linjemålning.',
    detailedDescription: `En genomtänkt parkeringsmarkering maximerar antalet platser, minskar risken för parkeringsskador och skapar ett prydligt och välorganiserat intryck för boende och besökare. TMT Vägmarkeringar AB hjälper bostadsrättsföreningar, fastighetsbolag och handelsplatser över hela Sverige att linjera parkeringsytor, handikapplatser, MC-platser och reserverade zoner enligt gällande standarder.

Vi bistår även med rådgivning kring flödesoptimering och linjelayout så att fordon och fotgängare kan röra sig smidigt och säkert på området.`,
    heroImage: '/gallery/gallery-1.jpg',
    image: '/gallery/gallery-1.jpg',
    href: '/tjanster/parkeringsplatser',
    tag: 'Parkeringslinjer',
    badge: 'Optimerad layout',
    highlights: [
      'Målning och exakt uppmätning av parkeringsrutor',
      'Handikapplatser enligt tillgänglighetskrav',
      'P-numrering, körfältspilar och reserverade platser',
      'Slitstark termoplast och vägmarkeringsfärg',
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
      {
        question: 'Vad kostar det att måla parkeringsrutor för BRF eller företag?',
        answer: 'Priset avgörs främst av antalet p-platser, om det är nymålning eller ommålning på befintliga linjer, samt eventuella symboler som handikapprutor och pilar. Kontakta oss för ett fast prisförslag och fri offert.',
      },
    ],
    seoTitle: 'Parkeringsmålning och P-rutor för BRF och Företag | TMT',
    seoDescription: 'Målning och uppmätning av parkeringsplatser, handikapplatser och linjer med slitstark termoplast. Hållbara resultat i hela Sverige. Begär kostnadsfri offert!',
  },
  {
    slug: 'laddplatser-symboler',
    title: 'Laddplatser och symboler',
    shortDescription: 'Tydliga elbilsladdplatser med grön bakgrund, laddsymboler, specialschabloner och riktningsmarkeringar.',
    heroText: 'Distinkta laddplatsmarkeringar och symboler som guidar elbilsförare rätt och förtydligar trafikregler.',
    detailedDescription: `I takt med att elfordon ökar ställs högre krav på tydligt utmärkta laddplatser. Vi målar elbilssymboler, laddstolpszoner och kontrastrika gröna bakgrunder som gör det kristallklart vilka platser som är reserverade för laddning.

Dessutom utför vi alla typer av specialsymboler med prefabricerad termoplast och schabloner – inklusive cykelbanor, gångstråk, hastighetsbegränsningar och skräddarsydda mönster.`,
    heroImage: '/gallery/gallery-3.jpg',
    image: '/gallery/gallery-3.jpg',
    href: '/tjanster/laddplatser-symboler',
    tag: 'Laddplatser',
    badge: 'Elbilsmarkering',
    highlights: [
      'Gröna kontrastfält och tydliga elbilssymboler',
      'Schablonmålning med pilar, siffror och texter',
      'Gång- och cykelsymboler för tryggare stråk',
      'Hög slitstyrka med prefabricerad termoplast',
    ],
    faq: [
      {
        question: 'Vilken typ av färg används för gröna laddplatser?',
        answer: 'Vi använder slitstarka tvåkomponentsfärger eller termoplast speciellt anpassade för utomhusmiljöer med hög UV-beständighet och utmärkt halkskydd.',
      },
      {
        question: 'Kan ni måla kundanpassade symboler och logotyper?',
        answer: 'Ja, med prefabricerad termoplast kan vi applicera företagslogotyper, unika dekorer och kundanpassade pilar direkt på underlaget.',
      },
      {
        question: 'Vad kostar målning av elbilsladdplatser?',
        answer: 'Kostnaden beror på ytans storlek, om grön kontrastbotten önskas och antal laddsymboler. Vi lämnar alltid en tydlig offert anpassad för er parkering.',
      },
    ],
    seoTitle: 'Målning av Laddplatser och Vägsymboler | TMT Vägmarkeringar',
    seoDescription: 'Tydlig uppmärkning av elbilsladdplatser med gröna kontrastfält, laddsymboler, pilar och texter med prefabricerad termoplast över hela Sverige. Fri offert!',
  },
  {
    slug: 'overgangsstallen',
    title: 'Övergångsställen',
    shortDescription: 'Zebralinjer, överfarter och gångpassager med termoplast och glaspärlor för maximal reflex och friktion.',
    heroText: 'Säkra och synliga övergångsställen som skyddar oskyddade trafikanter dygnet runt.',
    detailedDescription: `Övergångsställen och gångpassager ställer de allra högsta kraven på synbarhet, friktion och slitstyrka. Vi applicerar zebralinjer och varningsmarkeringar med godkänd termoplast och glaspärlor för optimal retroreflektion i regn och mörker.

Oavsett om det rör sig om kommunala gator, skolområden, köpcentrum eller samfällighetsvägar säkerställer vi att markeringarna uppfyller alla gällande standarder och ger fotgängare trygg passage.`,
    heroImage: '/gallery/gallery-2.jpg',
    image: '/gallery/gallery-2.jpg',
    href: '/tjanster/overgangsstallen',
    tag: 'Trafiksäkerhet',
    badge: 'Hög reflexförmåga',
    highlights: [
      'Klassiska zebralinjer och cykelöverfarter',
      'Termoplast med hög friktion och inblandade glaspärlor',
      'Varningsmarkeringar vid farthinder och skolor',
      'Godkända enligt Trafikverkets krav och standarder',
    ],
    faq: [
      {
        question: 'Hur håller termoplastiska övergångsställen jämfört med vanlig färg?',
        answer: 'Termoplast smälts fast i underlaget och håller upp till 6–8 gånger längre än traditionell färg, särskilt vid tung trafik och vinterväghållning.',
      },
      {
        question: 'Utför ni arbete under lågtrafiktider?',
        answer: 'Ja, för att minimera störningar i trafiken utför vi ofta arbeten kvällar, nätter eller helger efter överenskommelse.',
      },
      {
        question: 'Vad kostar ett termoplastiskt övergångsställe?',
        answer: 'Kostnaden beror på vägens bredd och antalet zebralinjer. Termoplast med inblandade glaspärlor ger marknadens lägsta livscykelkostnad tack vare sin extrema hållbarhet.',
      },
    ],
    seoTitle: 'Övergångsställen och Zebralinjer med Hög Reflex | TMT',
    seoDescription: 'Applicering av zebralinjer och överfarter med termoplast och reflekterande glaspärlor. Säkerhet och friktion enligt Trafikverkets krav i hela Sverige.',
  },

  // ── RAD 2: UNDERHÅLL, INDUSTRI OCH SÄSONGSENTREPRENAD ──
  {
    slug: 'frasning-borttagning',
    title: 'Linjefräsning',
    shortDescription: 'Skonsam och effektiv fräsning och borttagning av gamla, slitna eller felaktiga linjer på asfalt och betong.',
    heroText: 'Få bort gamla linjer och termoplast utan att skada underlaget i onödan inför ommålning.',
    detailedDescription: `Vid omdisponering av parkeringsytor, ändrade trafikflöden eller felmålade linjer krävs professionell borttagning. Med moderna linjefräsar och mekanisk utrustning avlägsnar vi gammal termoplast och vägmarkeringsfärg effektivt.

Vi anpassar fräsdjup och metod efter underlaget – vare sig det gäller slät betong i parkeringshus eller grov asfalt utomhus – så att ytan blir ren och redo för ny applicering utan onödig påverkan.`,
    heroImage: '/gallery/gallery-5.jpg',
    image: '/gallery/gallery-5.jpg',
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
    slug: 'industrimalning',
    title: 'Industrimålning',
    shortDescription: 'Truckgångar, skyddszoner, pallplatser och gångstråk för lagerlokaler, logistikcenter och fabriker.',
    heroText: 'Höj säkerheten och optimera logistiken med slitstarka industrimarkeringar och zonavgränsningar.',
    detailedDescription: `I industri- och lagermiljöer är tydlig uppmärkning avgörande för en säker arbetsmiljö. Genom att separera gående från trucktrafik och tydligt markera nödutgångar, brandutrustning och pallplatser minskar risken för arbetsplatsolyckor samtidigt som logistiken löper smidigare.

TMT Vägmarkeringar AB använder slitstarka tvåkomponentsfärger och specialtermoplast anpassade för hårt slitage, frekvent truckkörning och maskinell städning på betong- och asfaltsgolv.`,
    heroImage: '/gallery/gallery-4.jpg',
    image: '/gallery/gallery-4.jpg',
    href: '/tjanster/industrimalning',
    tag: 'Industrimarkering',
    badge: 'Arbetsmiljö och säkerhet',
    highlights: [
      'Truckgångar och avskilda gångstråk för personal',
      'Pallplatsrutor och numrerade lagersystem',
      'Skyddszoner runt elcentraler, maskiner och nödutgångar',
      'Slitstarka 2K-epoxi- och polyuretanfärger för industrigolv',
    ],
    faq: [
      {
        question: 'Klarar färgen tung trucktrafik och maskinell rengöring?',
        answer: 'Ja, vi använder industriklassade 2K-system speciellt utvecklade för högt mekaniskt slitage, dubbdäck, truckar och starka rengöringsmedel.',
      },
      {
        question: 'Krävs förbehandling av betonggolvet?',
        answer: 'Vi utför vid behov noggrann rengöring, avfettning och lätt slipning för att säkerställa perfekt vidhäftning och lång livslängd.',
      },
      {
        question: 'Vad kostar industrimålning och linjedragning i lager?',
        answer: 'Priset baseras på golvytans skick, behov av förbehandling (som slipning) och typ av färg (2K-epoxi eller slitstark polyuretan). Vi bistår med kostnadsfri rådgivning och offert.',
      },
    ],
    seoTitle: 'Industrimålning och Golvmarkering för Lager och Fabrik | TMT',
    seoDescription: 'Målning av truckgångar, 5S-gångstråk och skyddszoner för industri och lagerlokaler med slitstarka 2K-färger. Höj säkerheten på arbetsplatsen – få offert!',
  },
  {
    slug: 'snorojning-snoplogning',
    title: 'Snöröjning',
    shortDescription: 'Vinterväghållning, snöröjning, snöplogning och halkbekämpning för företag, samfälligheter och fastigheter.',
    heroText: 'Pålitlig vinterväghållning som håller vägar, parkeringar och infarter säkra och framkomliga.',
    detailedDescription: `När vintern slår till är snabb och pålitlig snöröjning avgörande för att hålla verksamheter rullande och minimera halkolyckor. Vi erbjuder snöröjning, snöplogning, sandning och saltning för kommersiella fastigheter, industriområden, bostadsrättsföreningar och samfälligheter.

Med flexibel maskinpark och hög beredskap rycker vi ut vid snöfall för att säkerställa trygg framkomlighet för både bilar och fotgängare.`,
    heroImage: '/gallery/gallery-6.jpg',
    image: '/gallery/gallery-6.jpg',
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
