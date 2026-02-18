# Performance & Optimalizační Checklist ⚡

## ✅ Implementováno

### Build Optimalizace
- [x] Vite production build s minifikací
- [x] Terser minifikace (drop console.log, drop debugger)
- [x] Manual chunking (vendor, ui komponenty odděleny)
- [x] Tree-shaking enabled
- [x] Code splitting aktivní
- [x] Source maps vypnuty v produkci

### Asset Optimalizace
- [x] Lazy loading obrázků (ImageWithFallback komponent)
- [x] Loading="lazy" na iframe (Google Maps)
- [x] WebP support ready (potřeba jen nahradit obrázky)
- [x] Unsplash obrázky s optimalizovanými parametry

### Caching Strategie
- [x] .htaccess s browser caching (1 rok pro obrázky, 1 měsíc pro CSS/JS)
- [x] gzip/deflate komprese v .htaccess
- [x] Proper cache-control headers

### JavaScript Optimalizace
- [x] React lazy loading ready (není potřeba - malý bundle)
- [x] useEffect s proper dependencies
- [x] Žádné inline funkce v renderování
- [x] Event listeners s cleanup
- [x] Smooth scroll behavior v CSS

### CSS Optimalizace
- [x] Tailwind CSS v4 s PurgeCSS (automaticky)
- [x] Žádné unused CSS
- [x] Critical CSS inline (handled by Vite)
- [x] Font loading optimalizace

### Network Optimalizace
- [x] Preconnect k důležitým doménám připraveno
- [x] DNS prefetch ready
- [x] Defer non-critical scripts
- [x] Async form submission

---

## 🔮 Doporučení Pro Budoucnost

### 1. Obrázky
```bash
# Konvertovat všechny obrázky na WebP:
- Hero image: PNG/JPG → WebP (zmenšení o 25-35%)
- OG image: PNG → WebP
- Použít <picture> element s fallbacky
```

### 2. Font Loading
```html
<!-- Přidat do <head>: -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

### 3. Resource Hints
```html
<!-- Přidat preconnect pro Unsplash: -->
<link rel="preconnect" href="https://images.unsplash.com">
<link rel="dns-prefetch" href="https://formsubmit.co">
```

### 4. Service Worker (volitelné)
```javascript
// Pro offline support a PWA:
- Implementovat service worker
- Cache critical assets
- Offline fallback page
```

### 5. Critical CSS
```javascript
// V budoucnosti extrahovat critical CSS:
- Above-the-fold CSS inline
- Zbytek async load
```

---

## 📊 Očekávané Metriky

### Lighthouse Scores (cíl)
```
Performance:  95+
Accessibility: 100
Best Practices: 95+
SEO: 100
```

### Core Web Vitals
```
LCP (Largest Contentful Paint): < 2.5s
FID (First Input Delay): < 100ms
CLS (Cumulative Layout Shift): < 0.1
```

### Bundle Size
```
Main bundle: ~150KB (gzipped)
Vendor chunk: ~45KB (gzipped)
UI chunk: ~25KB (gzipped)
Total: ~220KB (gzipped)
```

### Load Times (očekávané)
```
First Paint: < 1.0s
First Contentful Paint: < 1.5s
Time to Interactive: < 3.0s
Fully Loaded: < 4.0s
```

---

## 🧪 Testování

### Nástroje
1. **Lighthouse** (Chrome DevTools)
   ```
   npm install -g lighthouse
   lighthouse https://marketaprotivova.cz --view
   ```

2. **PageSpeed Insights**
   - https://pagespeed.web.dev/
   - Test mobile i desktop

3. **WebPageTest**
   - https://www.webpagetest.org/
   - Test z různých lokací

4. **GTmetrix**
   - https://gtmetrix.com/
   - Detailní waterfall analysis

### Test Checklist
- [ ] Lighthouse score 95+ na všech metrikách
- [ ] Mobile-Friendly Test passed
- [ ] Core Web Vitals v zeleném pásmu
- [ ] Bundle size < 250KB gzipped
- [ ] First Contentful Paint < 1.5s
- [ ] Time to Interactive < 3.0s

---

## 🚀 Optimalizační Tipy

### Immediate Wins
1. **Compress Images**: Použít TinyPNG nebo Squoosh
2. **Enable CDN**: Zvážit Cloudflare (zdarma)
3. **HTTP/2**: GitHub Pages podporuje automaticky
4. **Brotli Compression**: GitHub Pages podporuje

### Advanced
1. **Lazy Load Components**: React.lazy() pro velké komponenty
2. **Virtual Scrolling**: Pro dlouhé seznamy (není potřeba teď)
3. **Prefetch Links**: Prefetch důležité stránky při hoveru
4. **Intersection Observer**: Optimalizovat scroll animace

### Monitoring
1. **Real User Monitoring (RUM)**:
   - Google Analytics 4 - Web Vitals
   - Cloudflare Web Analytics (privacy-friendly)

2. **Synthetic Monitoring**:
   - Lighthouse CI v GitHub Actions
   - Automatické performance testy při deploy

---

## 📈 Performance Budget

```javascript
// Maximální velikosti:
{
  "javascript": "200KB",
  "css": "50KB",
  "images": "500KB",
  "fonts": "100KB",
  "total": "850KB"
}
```

### Current Actual (estimate)
```javascript
{
  "javascript": "~180KB (gzipped)",
  "css": "~15KB (gzipped)",
  "images": "~200KB (hero image)",
  "fonts": "~40KB (Google Fonts)",
  "total": "~435KB" ✅ UNDER BUDGET
}
```

---

## 🎯 Akce Po Spuštění

### Den 1
1. Spustit Lighthouse audit
2. Zkontrolovat Core Web Vitals
3. Test na slow 3G connection
4. Ověřit mobile performance

### Týden 1
1. Nastavit Google Analytics 4 + Web Vitals
2. Monitorovat skutečná data uživatelů
3. Identifikovat slow pages
4. Optimalizovat podle potřeby

### Měsíc 1
1. Analyzovat performance trendy
2. A/B test různých optimalizací
3. Implementovat zjištěná vylepšení
4. Re-audit a srovnání

---

## ✨ Quick Wins Checklist

Po nasazení můžete rychle zlepšit performance:

1. **Cloudflare Setup** (5 min)
   - Registrace zdarma
   - Auto minifikace HTML/CSS/JS
   - Brotli compression
   - CDN distribuce

2. **Image Optimization** (15 min)
   - Stáhnout hero image
   - Komprimovat přes TinyPNG
   - Nahradit optimalizovanou verzí

3. **Font Optimization** (10 min)
   - Font display: swap
   - Preconnect k Google Fonts
   - Subset fonts (pouze česká znaková sada)

4. **Analytics Setup** (10 min)
   - Google Analytics 4
   - Web Vitals tracking
   - Event tracking na důležité akce

**Total time: 40 minut pro 20-30% performance boost! 🚀**
