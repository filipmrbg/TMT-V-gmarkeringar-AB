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
    url: '/logo.png',
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
    'vagmarkering': {
      url: '/gallery/gallery-2.jpg',
      alt: 'Vägmarkering och linjemålning i hela Sverige',
    },
    'parkeringsmarkering': {
      url: '/gallery/gallery-1.jpg',
      alt: 'Parkeringsmarkering och laddplatser',
    },
    'industrimalning': {
      url: '/gallery/gallery-4.jpg',
      alt: 'Industrimålning och truckgångar i lagerlokaler',
    },
    'symbolmalning': {
      url: '/gallery/gallery-3.jpg',
      alt: 'Symbolmålning, pilar och övergångsställen',
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
      url: '/cta-mid-section.webp',
      alt: 'TMT Vägmarkeringar linjemålning',
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
        url: '/gallery/gallery-1.jpg',
        alt: 'Parkeringsmarkering och linjemålning för företag och BRF',
      },
      title: 'Parkeringsmarkering & Linjer',
      category: 'Parkeringsplatser',
    },
    {
      image: {
        url: '/gallery/gallery-2.jpg',
        alt: 'Vägmarkering och övergångsställe för kommun och samfällighet',
      },
      title: 'Vägmarkering & Övergångsställe',
      category: 'Vägmarkering',
    },
    {
      image: {
        url: '/gallery/gallery-3.jpg',
        alt: 'Laddplatsmarkering och elbilssymboler',
      },
      title: 'Laddplatser & Symboler',
      category: 'Laddplatsmarkering',
    },
    {
      image: {
        url: '/gallery/gallery-4.jpg',
        alt: 'Industrimarkering av truckgångar och skyddszoner i lager',
      },
      title: 'Industrilinjer & Truckgångar',
      category: 'Industrimarkering',
    },
    {
      image: {
        url: '/gallery/gallery-5.jpg',
        alt: 'Linjemålning för ökad trafiksäkerhet',
      },
      title: 'Linjemålning & Trafiksäkerhet',
      category: 'Vägmarkering',
    },
    {
      image: {
        url: '/gallery/gallery-6.jpg',
        alt: 'Symboler, pilar och stopplinjer med termoplast',
      },
      title: 'Symboler, Pilar & Stopplinjer',
      category: 'Specialmarkering',
    },
  ],
};

export default images;
