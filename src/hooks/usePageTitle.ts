import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const LOGO_ABSOLUTE_URL = 'https://raw.githubusercontent.com/filipmrbg/J-M-leri-hus/main/public/og-image.png';

export function usePageTitle(title: string, description?: string) {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // 2. Update Description
    const defaultDesc = "J Måleri Åhus utför allt inom invändigt och utvändigt måleri, tapetsering, spackling och fasadmålning i Åhus/Kristianstad med omnejd för privatpersoner och företag. Kontakta oss för fri offert!";
    const activeDesc = description || defaultDesc;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', activeDesc);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', activeDesc);
      document.head.appendChild(metaDescription);
    }

    // 3. Update Open Graph Title & Description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', activeDesc);

    // 4. Update Twitter Title & Description
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title);

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) twitterDescription.setAttribute('content', activeDesc);

    // 5. Update Canonical Link & Absolute URL
    const origin = typeof window !== 'undefined' && window.location.origin.startsWith('http')
      ? window.location.origin
      : 'https://jmaleri.se';
    const absoluteUrl = `${origin}${pathname === '/' ? '' : pathname}`;
    const absoluteOgImage = LOGO_ABSOLUTE_URL;

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', absoluteUrl);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', absoluteUrl);
      document.head.appendChild(canonical);
    }

    // 6. Update Open Graph URL & Image
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', absoluteUrl);

    let ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', absoluteOgImage);
    } else {
      ogImage = document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      ogImage.setAttribute('content', absoluteOgImage);
      document.head.appendChild(ogImage);
    }
    let twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', absoluteOgImage);
    }

  }, [title, description, pathname]);
}
