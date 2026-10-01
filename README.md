# Web advokátky Mgr. Markéty Protivové

Jednostránkový web advokátní kanceláře (Praha, Kladno). Běží na GitHub Pages na doméně **marketaprotivova.cz**.

## Technologie

- Vite 6, React 18, TypeScript
- Tailwind CSS 4, několik komponent shadcn/ui (Radix)
- Ikony lucide-react, fonty Inter a Playfair Display hostované lokálně (@fontsource-variable)
- Kontaktní formulář přes [FormSubmit](https://formsubmit.co) (endpoint `/ajax/`) na adresu protivova@volny.cz
- Mapa Google se načítá až po kliknutí návštěvníka, do té doby web nekontaktuje žádnou cizí službu

## Předrenderování

`npm run build` po běžném buildu vyrenderuje stránku i na serveru (`src/entry-server.tsx`) a skript `scripts/prerender.mjs` vloží hotové HTML do `dist/index.html`. Text webu tak vidí i vyhledávače a roboti, kteří nespouštějí JavaScript (Seznam, AI crawlery), a v prohlížeči se zobrazí dřív. React pak stránku jen „oživí" (hydratace).

Při úpravách komponent proto platí jediné pravidlo: první vykreslení nesmí záviset na `window`, `document` ani `localStorage`. Takový kód patří do `useEffect`.

## Vývoj

```bash
npm ci
npm run dev
```

Produkční build a jeho náhled:

```bash
npm run build
npm run preview
```

## Nasazení

Každý push do větve `main` spustí workflow `.github/workflows/deploy.yml`, které sestaví web a nahraje složku `dist` na GitHub Pages. Vlastní doména je v souboru `public/CNAME`. DNS musí mířit na GitHub Pages (A záznamy 185.199.108.153 až 185.199.111.153, CNAME pro `www` na `agillis24.github.io`).

## Kde co upravit

| Co | Soubor |
| --- | --- |
| Texty úvodu, služeb, kanceláří, formuláře | `src/app/components/hero.tsx`, `services.tsx`, `offices.tsx`, `contact-form.tsx` |
| Meta tagy, Open Graph, strukturovaná data (JSON-LD) | `index.html` |
| Barvy | `src/styles/theme.css` (`--primary`, `--accent`) |
| Hlavní fotka | `public/images/hero-*.webp` (3 velikosti) |
| Náhled při sdílení | `public/og-image.jpg` (1200 x 630) |
| Sitemap, robots, security.txt | `public/sitemap.xml`, `public/robots.txt`, `public/.well-known/security.txt` (pole Expires obnovit do 28. 9. 2027) |

Po změně kontaktů je uveďte na třech místech: v komponentách, v JSON-LD v `index.html` a v `public/ai.txt`.
