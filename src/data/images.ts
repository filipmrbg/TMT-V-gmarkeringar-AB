/**
 * CENTRALIZED IMAGE CONFIGURATION - TMT VÄGMARKERINGAR AB
 *
 * All images used across the site are defined here.
 */

export interface ImageSlot {
  url: string;
  alt: string;
}

export interface SiteImages {
  logo: ImageSlot;
  logoDark?: ImageSlot;
  ogImage?: ImageSlot;
  hero: {
    background: ImageSlot;
    videoUrl?: string;
  };
  services: {
    [key: string]: ImageSlot | undefined;
  };
  gallery: ImageSlot[];
  cta: {
    banner: ImageSlot;
    midSection: ImageSlot;
  };
  about: {
    hero: ImageSlot;
    teamMember?: ImageSlot;
  };
  whyChooseUs: ImageSlot;
  ideaToResult: ImageSlot;
  portfolio: {
    image: ImageSlot;
    title: string;
    category: string;
  }[];
}

const images: SiteImages = {
  logo: {
    url: '/logo-white.png?v=20260924',
    alt: 'TMT Vägmarkeringar - Professionell vägmarkering och linjemålning i hela Sverige',
  },
  logoDark: {
    url: '/logo-dark.png',
    alt: 'TMT Vägmarkeringar AB',
  },
  ogImage: {
    url: '/og-image.png',
    alt: 'TMT Vägmarkeringar Logotyp',
  },

  hero: {
    background: {
      url: '/hero-main.webp',
      alt: 'TMT Vägmarkeringar professionell vägmarkering och linjemålning',
    },
    videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_3G5LlmMYORSdAk8SxzXrK2S0Is5/hf_20260916_120304_b6e22521-4e42-4364-9c14-ebed64144e92.mp4',
  },

  services: {
    // Rad 1: Markering, linjer och vägmiljö
    'vagmarkering': {
      url: '/services/vagmarkering.jpg',
      alt: 'Vägmarkering och linjemålning med termoplast på motorväg och landsväg',
    },
    'parkeringsplatser': {
      url: '/services/parkeringsplatser.jpg',
      alt: 'Parkeringsmarkering, uppmätning och linjemålning av p-rutor i garage och utomhus',
    },
    'laddplatser-symboler': {
      url: '/services/laddplatser-symboler.jpg',
      alt: 'Laddplatsmarkering med laddsymboler vid elbilsladdstationer',
    },
    'overgangsstallen': {
      url: '/services/overgangsstallen.jpg',
      alt: 'Övergångsställen, zebralinjer och gångpassager',
    },

    // Rad 2: Underhåll, industri och säsongsentreprenad
    'frasning-borttagning': {
      url: '/services/frasning-borttagning.jpg',
      alt: 'Linjefräsning och borttagning av gamla väglinjer och symboler',
    },
    'industrimalning': {
      url: '/services/industrimalning.webp',
      alt: 'Industrimålning och varningszoner i verkstad och lagerlokaler',
    },
    'snorojning-snoplogning': {
      url: '/services/snorojning-snoplogning.webp',
      alt: 'Snöröjning, snöplogning och vinterväghållning med hjullastare och vikplog',
    },
    'tma-vagsakerhet': {
      url: '/about.jpg',
      alt: 'TMA-körning, påkörningsskydd och vägsäkerhet vid vägarbete',
    },

    // Bakåtkompatibla alias
    'parkeringsmarkering': {
      url: '/services/parkeringsplatser.jpg',
      alt: 'Parkeringsmarkering och linjer',
    },
    'symbolmalning': {
      url: '/services/laddplatser-symboler.jpg',
      alt: 'Symbolmålning och specialmarkeringar',
    },
  },

  gallery: [
    {
      url: '/gallery/gallery-1.jpg',
      alt: 'TMT Vägmarkeringar parkeringsmarkering och linjemålning',
    },
    {
      url: '/gallery/gallery-2.jpg',
      alt: 'TMT Vägmarkeringar vägmarkering och övergångsställe',
    },
    {
      url: '/gallery/gallery-3.jpg',
      alt: 'TMT Vägmarkeringar laddplats och symbolmarkering',
    },
    {
      url: '/gallery/gallery-4.jpg',
      alt: 'TMT Vägmarkeringar industrimålning och truckgångar',
    },
    {
      url: '/gallery/gallery-5.jpg',
      alt: 'TMT Vägmarkeringar linjemålning och trafiksäkerhet',
    },
    {
      url: '/gallery/gallery-6.jpg',
      alt: 'TMT Vägmarkeringar symboler och stopplinjer',
    },
  ],

  cta: {
    banner: {
      url: '/cta-banner-bg.jpg',
      alt: 'TMT Vägmarkeringar lastbil och vägmarkeringsutrustning',
    },
    midSection: {
      url: '/services/vagmarkering.jpg',
      alt: 'TMT Vägmarkeringar professionell vägmarkering och linjemålning',
    },
  },

  about: {
    hero: {
      url: '/about.jpg',
      alt: 'TMT Vägmarkeringar AB verksamhet och expertis i hela Sverige',
    },
  },

  whyChooseUs: {
    url: '/why-choose-us.webp',
    alt: 'Professionell vägmarkering med högsta precision - TMT Vägmarkeringar AB',
  },

  ideaToResult: {
    url: '/idea-to-result.webp',
    alt: 'Från planering till färdig vägmarkering i hela Sverige',
  },

  portfolio: [
    {
      image: {
        url: '/services/vagmarkering.jpg',
        alt: 'Professionell vägmarkering och linjemålning på motorväg med termoplast',
      },
      title: 'Vägmarkering och Motorvägslinjer',
      category: 'Vägmarkering',
    },
    {
      image: {
        url: '/services/parkeringsplatser.jpg',
        alt: 'Parkeringsmarkering och uppmätning i garage och p-hus',
      },
      title: 'Parkeringsplatser och P-hus',
      category: 'Parkeringsplatser',
    },
    {
      image: {
        url: '/services/laddplatser-symboler.jpg',
        alt: 'Laddplatsmarkering med blixtsymboler vid snabbladdningshubb',
      },
      title: 'Laddplatser och Elbilssymboler',
      category: 'Laddplatsmarkering',
    },
    {
      image: {
        url: '/services/overgangsstallen.jpg',
        alt: 'Övergångsställe och zebraränder med hög retroreflektion',
      },
      title: 'Övergångsställen och Gångpassager',
      category: 'Övergångsställen',
    },
    {
      image: {
        url: '/services/frasning-borttagning.jpg',
        alt: 'Mekanisk linjefräsning av gamla vägmarkeringar och pilar',
      },
      title: 'Linjefräsning och Demarkering',
      category: 'Linjeborttagning',
    },
    {
      image: {
        url: '/services/industrimalning.webp',
        alt: 'Industrimålning av varningszoner och säkerhetsfält på verkstadsgolv',
      },
      title: 'Industrimålning och Skyddszoner',
      category: 'Industrimarkering',
    },
  ],
};

export default images;
