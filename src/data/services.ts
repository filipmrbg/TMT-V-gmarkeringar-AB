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
    slug: 'invandigt-maleri',
    title: 'Invändigt Måleri',
    shortDescription: 'Noggrann målning av väggar, tak, lister och snickerier samt grundligt underarbete med spackling, bredspackling och slipning för en perfekt och slät yta.',
    heroText: 'Skapa trivsel och nytt liv i hemmet med professionellt inomhusmåleri i Åhus/Kristianstad med omnejd.',
    detailedDescription: `Vill du förnya vardagsrummet, sovrummet eller hela bostaden med nya kulörer? J Måleri Åhus utför alla typer av invändiga måleriarbeten med stor noggrannhet och yrkesstolthet för både privatpersoner och företag.

Vi lägger största vikt vid ett gediget underarbete med spackling, bredspackling, slipning och grundmålning, vilket är hemligheten bakom en jämn och hållbar slutfinish. Som privatperson nyttjar du 30 % ROT-avdrag direkt på fakturan.`,
    heroImage: '/gallery/gallery-2.jpg',
    image: '/gallery/gallery-2.jpg',
    href: '/tjanster#invandigt-maleri',
    tag: 'Invändigt Måleri',
    badge: 'ROT-avdrag 30%',
    highlights: [
      'Målning av väggar, tak och snickerier',
      'Bredspackling, skarvspackling och slipning',
      'Målning av lister, dörrfoder och fönster',
      'Färgrådgivning och personliga kulörval',
    ],
    faq: [
      {
        question: 'Hur lång tid tar ett invändigt måleriprojekt?',
        answer: 'Ett enskilt rum tar oftast 2–4 arbetsdagar inklusive torktider för spackel och färg. Vid målning av en hel villa eller lägenhet gör vi en tydlig tidsplan tillsammans.',
      },
      {
        question: 'Flyttar och täcker ni möbler innan målning?',
        answer: 'Ja, vi skyddar golv och möbler noggrant med täckpapp och plast innan arbetet påbörjas för att säkerställa ett rent och skadefritt resultat.',
      },
    ],
  },
  {
    slug: 'fasadmalning',
    title: 'Fasadmålning',
    shortDescription: 'Hållbar fasadmålning, fönstermålning och trävård som skyddar din fastighet mot väder och vind i många år framöver.',
    heroText: 'Ge huset ett långvarigt skydd och ett vackert lyft med professionell fasadmålning i Åhus/Kristianstad med omnejd.',
    detailedDescription: `En väl underhållen fasad skyddar fastigheten mot fukt, röta och väderpåverkan. J Måleri Åhus utför kompletta utvändiga måleriarbeten på villor, fritidshus, garage och fastigheter i Åhus och Kristianstad med omnejd.

Vi börjar alltid med noggrann fasadtvätt, skrapning av lös färg och grundoljning innan fasaden färdigstryks med premiumfärg anpassad för vårt klimat.`,
    heroImage: '/fasadmalning.png',
    image: '/fasadmalning.png',
    href: '/tjanster#fasadmalning',
    tag: 'Utvändigt Måleri',
    badge: 'Kvalitetsfärg',
    highlights: [
      'Fasadmålning av träfasad och puts',
      'Fönstermålning och renovering av vindskivor',
      'Fasadtvätt, algbehandling och skrapning',
      'Målning av garage, attefallshus och staket',
    ],
    faq: [
      {
        question: 'När på året är det bäst att måla fasaden utomhus?',
        answer: 'Den bästa perioden för fasadmålning i Sverige är från maj till september när dygnet är torrt och temperaturen är över 8–10 grader.',
      },
      {
        question: 'Hur ofta behöver en träfasad målas om?',
        answer: 'Beroende på husets läge, väderstreck och färgtyp håller en fackmannamässigt målad fasad vanligtvis mellan 10 och 15 år.',
      },
    ],
  },
  {
    slug: 'tapetsering',
    title: 'Tapetsering',
    shortDescription: 'Skickligt hantverk med perfekt mönsterpassning, skarvfria väggar och armeringsduk för både klassiska och moderna designtapeter.',
    heroText: 'Sätt personlig prägel på dina rum med exakt tapetsering och högklassig finish i Åhus/Kristianstad med omnejd.',
    detailedDescription: `Att tapetsera kräver noggrannhet och rätt teknik för att skarvar och mönster ska stämma perfekt. J Måleri Åhus har lång erfarenhet av att sätta upp allt från mönstrade designtapeter och fototapeter till armeringsduk och renoveringstapeter.

Vi säkerställer att underlaget är fullständigt slätt och grundbehandlat innan tapetsering så att slutresultatet blir helt felfritt.`,
    heroImage: 'https://i.imgur.com/omZyW82.png',
    image: 'https://i.imgur.com/omZyW82.png',
    href: '/tjanster#tapetsering',
    tag: 'Tapetsering',
    badge: 'Hög Precision',
    highlights: [
      'Mönsterpassad tapetsering och fondväggar',
      'Uppsättning av designtapeter och fototapeter',
      'Uppsättning av armeringsduk och easy cover',
      'Rådgivning kring materialval och limtyp',
    ],
    faq: [
      {
        question: 'Måste gamla tapeter tas bort före omtapetsering?',
        answer: 'Om den gamla tapeten sitter fast ordentligt räcker det oftast med att skära bort lösa skarvar och spackla slätt. Sitter den löst rekommenderar vi att riva eller bredspackla med armeringsduk.',
      },
    ],
  },
];

export default services;
