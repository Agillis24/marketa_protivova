import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
}

export function SEOHead({
  title = "Advokátka Praha – občanské, trestní a rozvodové právo | Mgr. Markéta Protivová",
  description = "Advokátní služby se zaměřením na občanské, trestní, rozvodové a pracovní právo. Zakládání společností. Mgr. Markéta Protivová.",
  keywords = "advokát, advokátka, Kladno, Praha, občanské právo, trestní právo, rozvodové právo, pracovní právo, zakládání společností, advokátní kancelář",
  ogImage = "/og-image.jpg",
  url = "https://www.marketaprotivova.cz/"
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
    setMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    setMetaTag('googlebot', 'index, follow');
    setMetaTag('bingbot', 'index, follow');
    setMetaTag('language', 'Czech');
    setMetaTag('geo.region', 'CZ-PR');
    setMetaTag('geo.placename', 'Praha');
    setMetaTag('geo.position', '50.0755;14.4378');
    setMetaTag('ICBM', '50.0755, 14.4378');
    
    // Open Graph / Facebook
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:url', url, true);
    setMetaTag('og:title', title, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:image', url + ogImage, true);
    setMetaTag('og:image:width', '1200', true);
    setMetaTag('og:image:height', '630', true);
    setMetaTag('og:locale', 'cs_CZ', true);
    setMetaTag('og:site_name', 'Mgr. Markéta Protivová - Advokátka', true);
    
    // Twitter
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:url', url);
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', url + ogImage);
    
    // AI Crawlers and Chatbots
    setMetaTag('ai-content-declaration', 'human-created');
    setMetaTag('chatgpt-crawl', 'allow');
    setMetaTag('claude-crawl', 'allow');
    
    // Mobile optimization
    setMetaTag('viewport', 'width=device-width, initial-scale=1.0');
    setMetaTag('mobile-web-app-capable', 'yes');
    setMetaTag('apple-mobile-web-app-capable', 'yes');
    setMetaTag('apple-mobile-web-app-status-bar-style', 'default');
    setMetaTag('apple-mobile-web-app-title', 'Protivová');
    
    // Set canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
    
    // Add manifest link
    let manifest = document.querySelector('link[rel="manifest"]');
    if (!manifest) {
      manifest = document.createElement('link');
      manifest.setAttribute('rel', 'manifest');
      document.head.appendChild(manifest);
    }
    manifest.setAttribute('href', '/manifest.json');
    
    // Add humans.txt link
    let humans = document.querySelector('link[rel="author"]');
    if (!humans) {
      humans = document.createElement('link');
      humans.setAttribute('rel', 'author');
      humans.setAttribute('type', 'text/plain');
      document.head.appendChild(humans);
    }
    humans.setAttribute('href', '/humans.txt');
    
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
      "url": "https://www.marketaprotivova.cz",
      "telephone": ["+420602662167"],
      "email": "protivova@volny.cz",
      "priceRange": "$$",
      "image": "https://www.marketaprotivova.cz/logo.jpg",
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