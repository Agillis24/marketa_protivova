import { useEffect } from 'react';

// Additional structured data for better AI/chatbot indexing
export function EnhancedStructuredData() {
  useEffect(() => {
    // FAQ Schema for common legal questions
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Jaké právní služby poskytuje advokátka Markéta Protivová?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Advokátka Markéta Protivová poskytuje komplexní právní služby v oblasti občanského práva (včetně převodů nemovitostí a darovacích smluv), trestního práva (obhajoba i zastupování poškozených), rozvodového práva (rozvody, vypořádání SJM, úprava styku s dětmi) a zakládání společností včetně převodů členských podílů."
          }
        },
        {
          "@type": "Question",
          "name": "Kde se nachází advokátní kancelář v Praze?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Advokátní kancelář se nachází v centru Prahy na adrese Politických vězňů 1531/9, Praha 1 – Nové Město, 110 00. Osobní schůzka je možná po předchozí domluvě e-mailem na protivova@volny.cz nebo telefonicky na +420 602 662 167."
          }
        },
        {
          "@type": "Question",
          "name": "Jak mohu kontaktovat advokátku Markétu Protivovou?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Můžete zavolat na telefon +420 602 662 167 nebo napsat e-mail na protivova@volny.cz. Pro osobní schůzku je vhodné se předem domluvit."
          }
        },
        {
          "@type": "Question",
          "name": "Poskytuje advokátka konzultace online?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ano, advokátka Markéta Protivová poskytuje konzultace jak osobně v kanceláři v centru Prahy, tak i online podle preference klienta."
          }
        }
      ]
    };

    // Person Schema for the attorney
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Mgr. Markéta Protivová",
      "jobTitle": "Advokátka",
      "description": "Advokátka se zaměřením na občanské, trestní a rodinné právo. Klientům pomáhám hledat praktická a realistická řešení, kterým porozumí i bez složité právničiny.",
      "url": "https://www.marketaprotivova.cz",
      "email": "protivova@volny.cz",
      "telephone": "+420602662167"
    };

    // BreadcrumbList Schema
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Úvod",
          "item": "https://www.marketaprotivova.cz/#uvod"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "O mě",
          "item": "https://www.marketaprotivova.cz/#o-me"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Služby",
          "item": "https://www.marketaprotivova.cz/#sluzby"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Kanceláře",
          "item": "https://www.marketaprotivova.cz/#kancelare"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Kontakt",
          "item": "https://www.marketaprotivova.cz/#kontakt"
        }
      ]
    };

    // Service Schema for each legal service
    const servicesSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Service",
          "name": "Občanské právo",
          "description": "Komplexní právní služby v oblasti občanského práva včetně převodů nemovitostí, kupních a darovacích smluv, smluvního práva a zastupování v občanskoprávních sporech.",
          "provider": {
            "@type": "LegalService",
            "name": "Mgr. Markéta Protivová, advokátka"
          },
          "areaServed": "Česká republika"
        },
        {
          "@type": "Service",
          "name": "Trestní právo",
          "description": "Obhajoba obviněných v trestním řízení i zastupování poškozených. Asistence při výsleších, příprava obhajoby a procesní zastupování u soudu.",
          "provider": {
            "@type": "LegalService",
            "name": "Mgr. Markéta Protivová, advokátka"
          },
          "areaServed": "Česká republika"
        },
        {
          "@type": "Service",
          "name": "Rozvodové právo",
          "description": "Rozvody manželství, vypořádání společného jmění manželů, úprava styku s nezletilými dětmi a výživné. Komplexní právní asistence v rodinných sporech.",
          "provider": {
            "@type": "LegalService",
            "name": "Mgr. Markéta Protivová, advokátka"
          },
          "areaServed": "Česká republika"
        },
        {
          "@type": "Service",
          "name": "Zakládání společností",
          "description": "Zakládání společností s ručením omezeným, akciových společností, převody obchodních podílů a komplexní poradenství v oblasti obchodního práva.",
          "provider": {
            "@type": "LegalService",
            "name": "Mgr. Markéta Protivová, advokátka"
          },
          "areaServed": "Česká republika"
        }
      ]
    };

    // Add all schemas to the page
    const schemas = [faqSchema, personSchema, breadcrumbSchema, servicesSchema];
    
    schemas.forEach((schema, index) => {
      const scriptId = `structured-data-${index}`;
      let script = document.getElementById(scriptId);
      
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('type', 'application/ld+json');
        script.setAttribute('id', scriptId);
        document.head.appendChild(script);
      }
      
      script.textContent = JSON.stringify(schema);
    });
    
  }, []);
  
  return null;
}