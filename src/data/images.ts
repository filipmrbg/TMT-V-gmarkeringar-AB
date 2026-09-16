/**
 * CENTRALIZED IMAGE CONFIGURATION
 *
 * All images used across the template are defined here.
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
    teamMember: ImageSlot;
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
    alt: 'J Måleri Åhus - Måleri i Åhus/Kristianstad med omnejd',
  },
  logoDark: {
    url: '/logo-dark.png',
    alt: 'J Måleri Åhus - Måleri i Åhus/Kristianstad med omnejd',
  },
  ogImage: {
    url: '/og-image.png',
    alt: 'J Måleri Åhus Logotyp',
  },

  hero: {
    background: {
      url: '/hero-main.webp',
      alt: 'J Måleri Åhus måleriarbeten i Åhus/Kristianstad med omnejd',
    },
  },

  services: {
    'invandigt-maleri': {
      url: '/gallery/gallery-2.jpg',
      alt: 'Invändigt måleri och tapetsering i Åhus/Kristianstad med omnejd',
    },
    'fasadmalning': {
      url: '/fasadmalning.png',
      alt: 'Utvändigt måleri och fasadrenovering i Åhus/Kristianstad med omnejd',
    },
    'tapetsering': {
      url: 'https://i.imgur.com/omZyW82.png',
      alt: 'Tapetsering och mönsterpassning i Åhus/Kristianstad med omnejd',
    },
  },

  gallery: [
    {
      url: 'https://i.imgur.com/omZyW82.png',
      alt: 'J Måleri Åhus mönstertapetsering i Åhus/Kristianstad med omnejd',
    },
    {
      url: 'https://i.imgur.com/w7Imch0.png',
      alt: 'J Måleri Åhus invändigt måleriarbete i Åhus/Kristianstad med omnejd',
    },
    {
      url: 'https://i.imgur.com/TCqPMOb.png',
      alt: 'J Måleri Åhus vägg- och takmålning i Åhus/Kristianstad med omnejd',
    },
    {
      url: 'https://i.imgur.com/tsR8qm7.png',
      alt: 'J Måleri Åhus måleriprojekt i Åhus/Kristianstad med omnejd',
    },
    {
      url: 'https://i.imgur.com/jsb4nja.png',
      alt: 'J Måleri Åhus rumsförnyelse och kulörbyte i Åhus/Kristianstad med omnejd',
    },
    {
      url: 'https://i.imgur.com/ZssWOfc.png',
      alt: 'J Måleri Åhus precisionsmåleri i Åhus/Kristianstad med omnejd',
    },
    {
      url: 'https://i.imgur.com/UnQ03uU.png',
      alt: 'J Måleri Åhus noggrant underarbete och finish i Åhus/Kristianstad med omnejd',
    },
    {
      url: '/fasadmalning.png',
      alt: 'J Måleri Åhus fasadmålning och utvändigt måleriarbete i Åhus/Kristianstad med omnejd',
    },
    {
      url: '/gallery/gallery-2.jpg',
      alt: 'J Måleri Åhus invändig målning och väggfinish i Åhus/Kristianstad med omnejd',
    },
    {
      url: '/gallery/gallery-3.jpg',
      alt: 'J Måleri Åhus tak och snickerimålning i Åhus/Kristianstad med omnejd',
    },
    {
      url: '/gallery/gallery-5.jpg',
      alt: 'J Måleri Åhus detaljarbete och snickerifinish i Åhus/Kristianstad med omnejd',
    },
    {
      url: '/gallery/gallery-6.jpg',
      alt: 'J Måleri Åhus färdigställt måleriprojekt i Åhus/Kristianstad med omnejd',
    },
  ],

  cta: {
    banner: {
      url: '/hero-main.webp',
      alt: 'J Måleri Åhus måleriprojekt i Åhus/Kristianstad med omnejd',
    },
    midSection: {
      url: '/hero-main.webp',
      alt: 'J Måleri arbetsplats i Åhus/Kristianstad med omnejd',
    },
  },

  about: {
    hero: {
      url: '/about-us.jpg',
      alt: 'J Måleri Åhus verksamhet och måleriarbete i Åhus/Kristianstad med omnejd',
    },
    teamMember: {
      url: '/logo.png',
      alt: 'Teammedlem J Måleri Åhus',
    },
  },

  whyChooseUs: {
    url: '/why-choose-us.webp',
    alt: 'Noggrant måleriarbete i detalj - J Måleri Åhus',
  },

  ideaToResult: {
    url: '/idea-to-result.webp',
    alt: 'Från planering till perfekt målat resultat i Åhus/Kristianstad med omnejd',
  },

  portfolio: [
    {
      image: {
        url: 'https://i.imgur.com/omZyW82.png',
        alt: 'Mönstertapetsering fondvägg i Åhus/Kristianstad med omnejd',
      },
      title: 'Mönstertapetsering & Fondvägg',
      category: 'Tapetsering',
    },
    {
      image: {
        url: 'https://i.imgur.com/w7Imch0.png',
        alt: 'Invändigt måleri och finish i Åhus/Kristianstad med omnejd',
      },
      title: 'Invändig Målning & Detaljarbete',
      category: 'Inomhusmåleri',
    },
    {
      image: {
        url: 'https://i.imgur.com/TCqPMOb.png',
        alt: 'Tak- och väggmålning i Åhus/Kristianstad med omnejd',
      },
      title: 'Tak- & Väggmålning',
      category: 'Inomhusmåleri',
    },
    {
      image: {
        url: 'https://i.imgur.com/tsR8qm7.png',
        alt: 'Måleriarbete och rumsförnyelse i Åhus/Kristianstad med omnejd',
      },
      title: 'Rumsförnyelse & Kulörbyte',
      category: 'Inomhusmåleri',
    },
    {
      image: {
        url: 'https://i.imgur.com/jsb4nja.png',
        alt: 'Ytbehandling och måleri i Åhus/Kristianstad med omnejd',
      },
      title: 'Ytbehandling & Finish',
      category: 'Inomhusmåleri',
    },
    {
      image: {
        url: 'https://i.imgur.com/ZssWOfc.png',
        alt: 'Precisionsmåleri snickerier i Åhus/Kristianstad med omnejd',
      },
      title: 'Snickeri- & Detaljmålning',
      category: 'Snickerimåleri',
    },
    {
      image: {
        url: 'https://i.imgur.com/UnQ03uU.png',
        alt: 'Slutfinish och måleri i Åhus/Kristianstad med omnejd',
      },
      title: 'Slutfinish & Ytfinish',
      category: 'Måleri',
    },
    {
      image: {
        url: '/fasadmalning.png',
        alt: 'Fasadmålning villa i Åhus/Kristianstad med omnejd',
      },
      title: 'Fasadmålning & Träskydd Villa',
      category: 'Fasadmålning',
    },
    {
      image: {
        url: '/gallery/gallery-2.jpg',
        alt: 'Invändigt måleri och rumsförnyelse i Åhus/Kristianstad med omnejd',
      },
      title: 'Invändig Målning & Kulörval',
      category: 'Inomhusmåleri',
    },
    {
      image: {
        url: '/gallery/gallery-5.jpg',
        alt: 'Snickerimålning och detaljarbete i Åhus/Kristianstad med omnejd',
      },
      title: 'Dörr- & Fönstermålning',
      category: 'Snickerimåleri',
    },
    {
      image: {
        url: '/gallery/gallery-6.jpg',
        alt: 'Invändig målning och renovering i Åhus/Kristianstad med omnejd',
      },
      title: 'Villamålning & Renovering',
      category: 'Inomhusmåleri',
    },
  ],
};

export default images;
