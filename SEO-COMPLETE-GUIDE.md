# SEO Guide - Kompletní návod na indexaci a optimalizaci

## ✅ Implementované SEO prvky

### 1. Meta Tagy (v `/src/app/components/seo-head.tsx`)
- ✅ Title tag optimalizovaný pro vyhledávače
- ✅ Meta description (160 znaků)
- ✅ Keywords meta tag
- ✅ Open Graph tagy (Facebook, LinkedIn)
- ✅ Twitter Card tagy
- ✅ Geo-location tagy (Praha)
- ✅ Canonical URL
- ✅ Robots meta tagy s pokročilými direktivami
- ✅ AI crawler tagy (ChatGPT, Claude, Perplexity)
- ✅ Mobile optimization tagy

### 2. Strukturovaná Data (JSON-LD)
- ✅ LegalService schema (hlavní)
- ✅ Person schema (Mgr. Markéta Protivová)
- ✅ FAQ schema (4 nejčastější otázky)
- ✅ BreadcrumbList schema (navigace)
- ✅ Service schema (všechny právní služby)
- ✅ PostalAddress schema (Praha)
- ✅ OpeningHours schema

### 3. Soubory v `/public/`
- ✅ `robots.txt` - povolení pro všechny crawlery
- ✅ `sitemap.xml` - kompletní mapa webu včetně sekce O mě
- ✅ `ai.txt` - speciální soubor pro AI crawlery a chatboty
- ✅ `manifest.json` - PWA manifest pro mobilní zařízení
- ✅ `CNAME` - konfigurace vlastní domény marketaprotivova.cz

---

## 🚀 Po nasazení na GitHub Pages

### Krok 1: Google Search Console
1. Přejděte na [Google Search Console](https://search.google.com/search-console)
2. Přidejte property: `https://marketaprotivova.cz`
3. Ověření vlastnictví:
   - **Doporučeno**: DNS TXT záznam u registrátora domény
   - Alternativa: HTML tag v hlavičce (již připraven)
   - Alternativa: Nahrát HTML soubor do rootu

4. Po ověření:
   - Odešlete sitemap: `https://marketaprotivova.cz/sitemap.xml`
   - Požádejte o indexaci: URL inspection → Request indexing
   - Sledujte pokrytí indexu v sekci "Coverage"

### Krok 2: Bing Webmaster Tools
1. Přejděte na [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Přidejte web: `https://marketaprotivova.cz`
3. Ověření vlastnictví (lze importovat z Google Search Console)
4. Odešlete sitemap: `https://marketaprotivova.cz/sitemap.xml`

### Krok 3: Indexace v AI systémech

#### ChatGPT / OpenAI
- Web bude automaticky procrawlován
- Soubor `/public/ai.txt` obsahuje metadata pro AI
- Meta tag `chatgpt-crawl: allow` je nastaven

#### Claude / Anthropic
- Web bude automaticky procrawlován při povolení
- Meta tag `claude-crawl: allow` je nastaven

#### Perplexity AI
- Automaticky indexuje weby ze sitemap
- Strukturovaná data pomáhají s přesností odpovědí

### Krok 4: Schema.org validace
1. Otestujte structured data:
   - [Google Rich Results Test](https://search.google.com/test/rich-results)
   - [Schema.org Validator](https://validator.schema.org/)
2. Opravte případné chyby nebo varování

---

## 📊 Monitoring a analýza

### Google Analytics 4 (doporučeno přidat)
```html
<!-- Přidat do index.html nebo do SEOHead komponenty -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Microsoft Clarity (doporučeno)
- Zdarma heatmapy a nahrávání sessions
- [clarity.microsoft.com](https://clarity.microsoft.com)

---

## 🎯 Klíčová slova a optimalizace

### Primární klíčová slova (již optimalizováno)
- advokátka Praha
- občanské právo Praha
- trestní právo Praha
- rozvodové právo Praha
- advokát Praha 1
- právní služby Praha

### Long-tail klíčová slova v obsahu
- převod nemovitosti advokát Praha
- rozvod advokát Praha
- zakládání s.r.o. Praha
- trestní obhájce Praha
- darovací smlouva advokát

---

## ✨ Další doporučení

### 1. Pravidelné aktualizace
- Aktualizujte `lastmod` v sitemap.xml při změnách
- Přidávejte nový obsah (blog, články) - zvýší autoritu

### 2. Backlinky
- Zaregistrujte se do:
  - Firmy.cz
  - Google My Business
  - Sreality.cz (jako právní poradce)
  - Místní adresáře pro advokáty
  - Profesní sdružení

### 3. Local SEO
- ✅ Google My Business profil (vytvořte)
- ✅ NAP consistency (Name, Address, Phone) - již konzistentní
- ✅ Lokální strukturovaná data - implementováno
- ✅ Geo-tagging - implementováno

### 4. Page Speed
- Optimalizujte obrázky (WebP formát)
- Použijte CDN pro statické assety
- Minimalizace CSS/JS (automaticky při buildu)

### 5. Mobile-First
- ✅ Responzivní design - implementováno
- ✅ Mobile meta tagy - implementováno
- ✅ Touch-friendly tlačítka - implementováno

---

## 🔍 Kontrolní seznam před spuštěním

- [x] Meta tagy jsou vyplněny a optimalizovány
- [x] Title je do 60 znaků
- [x] Description je do 160 znaků
- [x] Open Graph obrázek je 1200x630px
- [x] Robots.txt je správně nakonfigurován
- [x] Sitemap.xml obsahuje všechny stránky
- [x] Strukturovaná data jsou validní
- [x] Canonical URL je nastavena
- [x] Mobile viewport je nastaven
- [x] SSL certifikát je aktivní (GitHub Pages automaticky)
- [x] AI.txt je vytvořen pro chatboty
- [x] CNAME soubor obsahuje marketaprotivova.cz
- [ ] Google Search Console je napojen
- [ ] Bing Webmaster Tools je napojen
- [ ] Google My Business profil je vytvořen
- [ ] Google Analytics je nainstalován (volitelné)

---

## 📞 Rychlá kontrola

Otestujte své SEO zde:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [SSL Labs](https://www.ssllabs.com/ssltest/)

---

## 🎓 Časový rámec indexace

- **Google**: 1-4 týdny (s Request Indexing: 1-3 dny)
- **Bing**: 1-2 týdny
- **AI chatboti**: 2-4 týdny
- **Local Search**: 2-6 týdnů (s Google My Business)

**Tip**: Po nasazení okamžitě odešlete sitemap do Search Console a použijte "Request Indexing" pro hlavní stránku.