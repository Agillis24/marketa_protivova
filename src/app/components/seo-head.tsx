import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
}

export function SEOHead({
  title = "Mgr. Markéta Protivová - Advokátka | Kladno & Praha",
  description = "Advokátní služby s důrazem na osobní přístup. Občanské právo, trestní právo, rozvodové právo, pracovní právo, zakládání společností. Kanceláře v Kladně a Praze.",
  keywords = "advokát, advokátka, Kladno, Praha, občanské právo, trestní právo, rozvodové právo, pracovní právo, zakládání společností, advokátní kancelář",
  ogImage = "/og-image.jpg",
  url = "https://protivova.cz/"
}: SEOHeadProps) {
  
  useEffect(() => {
    // Set document title
    document.title = title;
    
    // Helper function to set or update meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };
    
    // Primary Meta Tags
    setMetaTag('description', description);
    setMetaTag('keywords', keywords);
    setMetaTag('author', 'Mgr. Markéta Protivová');
    setMetaTag('robots', 'index, follow');
    setMetaTag('language', 'Czech');
    
    // Open Graph / Facebook
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:url', url, true);
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:image', url + ogImage, true);
    setMetaTag('og:locale', 'cs_CZ', true);
    setMetaTag('og:site_name', 'Mgr. Markéta Protivová - Advokátka', true);
    
    // Twitter
    setMetaTag('twitter:card', 'summary_large_image', true);
    setMetaTag('twitter:url', url, true);
    setMetaTag('twitter:title', title, true);
    setMetaTag('twitter:description', description, true);
    setMetaTag('twitter:image', url + ogImage, true);
    
    // Additional SEO tags
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    
    // Set canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
    
    // Set language
    document.documentElement.lang = 'cs';
    
  }, [title, description, keywords, ogImage, url]);
  
  return null;
}

// Structured Data Component (JSON-LD)
export function StructuredData() {
  useEffect(() => {
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LegalService",
      "name": "Mgr. Markéta Protivová, advokátka",
      "description": "Advokátní služby se zaměřením na občanské, trestní, rozvodové a pracovní právo. Zakládání společností.",
      "url": "https://protivova.cz",
      "telephone": ["+420602662167"],
      "email": "protivova@volny.cz",
      "priceRange": "$$",
      "image": "https://protivova.cz/logo.jpg",
      "address": [
        {
          "@type": "PostalAddress",
          "streetAddress": "Vašatova 1499",
          "addressLocality": "Kladno",
          "postalCode": "272 01",
          "addressCountry": "CZ"
        },
        {
          "@type": "PostalAddress",
          "streetAddress": "Politických vězňů 1531/9",
          "addressLocality": "Praha 1 – Nové Město",
          "postalCode": "110 00",
          "addressCountry": "CZ"
        }
      ],
      "areaServed": [
        {
          "@type": "City",
          "name": "Kladno"
        },
        {
          "@type": "City",
          "name": "Praha"
        },
        {
          "@type": "Country",
          "name": "Česká republika"
        }
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "17:00"
      },
      "sameAs": [
        "https://vyhledavac.cak.cz/Company/Details/f1e2b7c1-5223-e711-80d5-00155d040b0c"
      ],
      "knowsAbout": [
        "Občanské právo",
        "Trestní právo",
        "Rozvodové právo",
        "Pracovní právo",
        "Zakládání společností"
      ]
    };
    
    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
    
  }, []);
  
  return null;
}
