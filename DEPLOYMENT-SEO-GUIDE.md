# SEO a Google Search Console - Návod k nasazení

## 📋 Přehled implementace

Váš web je nyní plně připraven pro SEO a Google indexování. Implementované prvky zahrnují:

### ✅ Hotové SEO prvky

1. **Meta tagy** - automaticky nastaveny v `<head>` sekci:
   - Title, Description, Keywords
   - Open Graph (Facebook)
   - Twitter Card
   - Robots meta
   - Canonical URL
   - Language tag (cs)

2. **Strukturovaná data (JSON-LD)** - Schema.org markup pro:
   - LegalService
   - Dvě kanceláře (Kladno a Praha)
   - Kontaktní informace
   - Otevírací hodiny
   - Oblasti služeb

3. **Soubory pro roboty**:
   - `/public/robots.txt` - povoluje indexování
   - `/public/sitemap.xml` - mapa webu
   - Soubory jsou připraveny k nasazení

4. **SEO-friendly URL**: Kotvy (anchors) pro navigaci:
   - `#uvod` - Homepage/Hero
   - `#sluzby` - Služby
   - `#kancelare` - Kanceláře
   - `#kontakt` - Kontaktní formulář

5. **Alt texty** - všechny obrázky mají popisné alt texty

---

## 🚀 Nasazení na GitHub Pages

### Krok 1: Příprava repozitáře

```bash
# Inicializace Git repozitáře (pokud ještě nemáte)
git init
git add .
git commit -m "Initial commit - Law office website"

# Připojení k GitHub repozitáři
git remote add origin https://github.com/VASE-JMENO/NAZEV-REPO.git
git branch -M main
git push -u origin main
```

### Krok 2: Nastavení GitHub Pages

1. Přejděte na GitHub: `Settings` → `Pages`
2. V sekci **Source** vyberte:
   - Branch: `main`
   - Folder: `/` (root)
3. Klikněte na `Save`
4. Počkejte pár minut - váš web bude dostupný na: `https://vase-jmeno.github.io/nazev-repo/`

### Krok 3: Aktualizace URL v kódu

Po nasazení **MUSÍTE** aktualizovat URL v následujících souborech:

#### 1. `/src/app/components/seo-head.tsx`
```typescript
// Změňte tuto řádku:
url = "https://protivova.cz/"

// Na vaši GitHub Pages URL nebo vlastní doménu:
url = "https://vase-jmeno.github.io/nazev-repo/"
// NEBO pokud máte vlastní doménu:
url = "https://protivova.cz/"
```

#### 2. `/public/robots.txt`
```
# Změňte:
Sitemap: https://protivova.cz/sitemap.xml

# Na:
Sitemap: https://vase-jmeno.github.io/nazev-repo/sitemap.xml
```

#### 3. `/public/sitemap.xml`
Změňte všechny URL z `https://protivova.cz/` na vaši skutečnou URL.

### Krok 4: Vlastní doména (volitelné)

Pokud chcete použít vlastní doménu (např. `protivova.cz`):

1. V GitHub Settings → Pages → Custom domain zadejte: `protivova.cz`
2. U registrátora domény nastavte DNS:
   ```
   A záznam: 185.199.108.153
   A záznam: 185.199.109.153
   A záznam: 185.199.110.153
   A záznam: 185.199.111.153
   
   NEBO CNAME záznam: vase-jmeno.github.io
   ```
3. Vytvořte soubor `/public/CNAME` s obsahem: `protivova.cz`

---

## 🔍 Google Search Console - Nastavení

### Krok 1: Přidání webu

1. Přejděte na: https://search.google.com/search-console
2. Klikněte na `Add property`
3. Zadejte vaši URL (např. `https://protivova.cz`)

### Krok 2: Ověření vlastnictví

**Metoda A: HTML soubor (doporučeno)**
1. Stáhněte ověřovací soubor od Google
2. Umístěte ho do `/public/` složky
3. Znovu nasaďte web
4. Klikněte na `Verify` v Search Console

**Metoda B: Meta tag**
1. Google vám poskytne meta tag
2. Přidejte ho do `/src/app/components/seo-head.tsx`:
```typescript
setMetaTag('google-site-verification', 'VÁŠ_KÓD_OD_GOOGLE');
```

### Krok 3: Odeslání sitemap

1. V Google Search Console přejděte na `Sitemaps`
2. Zadejte URL: `https://protivova.cz/sitemap.xml`
3. Klikněte na `Submit`

---

## 📊 Monitoring a údržba

### Co sledovat v Google Search Console

1. **Coverage** - zda jsou všechny stránky indexovány
2. **Performance** - kliknutí, zobrazení, pozice
3. **Core Web Vitals** - rychlost načítání
4. **Mobile Usability** - mobilní kompatibilita

### Pravidelná údržba

1. **Aktualizace sitemap.xml** - při změnách obsahu upravte datum:
   ```xml
   <lastmod>2026-02-13</lastmod>
   ```

2. **Kontrola strukturovaných dat**:
   - Použijte: https://search.google.com/test/rich-results
   - Otestujte URL vašeho webu

3. **Kontrola meta tagů**:
   - Použijte: https://www.opengraph.xyz/
   - Zkontrolujte, jak web vypadá při sdílení

---

## 🎯 Další optimalizace

### 1. Vytvořit Open Graph obrázek
Vytvořte obrázek 1200x630px s logem/názvem kanceláře a uložte jako:
- `/public/og-image.jpg`

### 2. Favicon
Vytvořte favicony a přidejte do `/public/`:
- `favicon.ico`
- `favicon-32x32.png`
- `favicon-16x16.png`
- `apple-touch-icon.png`

Pak přidejte do `seo-head.tsx`:
```typescript
// V useEffect:
const setFavicon = (href: string, sizes?: string, type = 'image/png') => {
  let link = document.querySelector(`link[rel="icon"][sizes="${sizes}"]`);
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'icon');
    if (sizes) link.setAttribute('sizes', sizes);
    link.setAttribute('type', type);
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
};

setFavicon('/favicon-32x32.png', '32x32');
setFavicon('/favicon-16x16.png', '16x16');
```

### 3. Analytics (volitelné)
Pro sledování návštěvnosti přidejte Google Analytics:
```typescript
// V seo-head.tsx useEffect
const gaScript = document.createElement('script');
gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
gaScript.async = true;
document.head.appendChild(gaScript);

const gaConfig = document.createElement('script');
gaConfig.innerHTML = `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
`;
document.head.appendChild(gaConfig);
```

---

## ✅ Checklist před spuštěním

- [ ] URL aktualizována v `seo-head.tsx`
- [ ] URL aktualizována v `robots.txt`
- [ ] URL aktualizována v `sitemap.xml`
- [ ] Web nasazen na GitHub Pages
- [ ] Google Search Console nastavena
- [ ] Sitemap odeslána do Google
- [ ] Strukturovaná data otestována
- [ ] Meta tagy zkontrolovány
- [ ] Favicon přidán (volitelné)
- [ ] OG image vytvořen (volitelné)
- [ ] Google Analytics nastaven (volitelné)

---

## 🆘 Řešení problémů

### Web se neindexuje
1. Zkontrolujte `robots.txt` - musí obsahovat `Allow: /`
2. Ověřte, že sitemap.xml je dostupná
3. Zkontrolujte Google Search Console → Coverage

### Strukturovaná data nefungují
1. Použijte Rich Results Test: https://search.google.com/test/rich-results
2. Zkontrolujte konzoli prohlížeče (F12) - neměly by být chyby
3. Ověřte JSON-LD syntax

### Meta tagy se nezobrazují
1. Otevřete View Source (Ctrl+U)
2. Zkontrolujte `<head>` sekci
3. Meta tagy se přidávají dynamicky přes JavaScript

---

## 📞 Užitečné odkazy

- **Google Search Console**: https://search.google.com/search-console
- **Rich Results Test**: https://search.google.com/test/rich-results
- **Meta Tags Tester**: https://metatags.io/
- **Schema.org Docs**: https://schema.org/LegalService
- **GitHub Pages Docs**: https://docs.github.com/en/pages

---

**Poznámka**: Po nasazení může trvat několik dní, než Google začne indexovat váš web. Buďte trpěliví a pravidelně kontrolujte Google Search Console.
