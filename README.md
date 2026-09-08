# Web advokátky Mgr. Markéty Protivové

Jednostránkový web advokátní kanceláře (Praha, Kladno). Běží na GitHub Pages na doméně **marketaprotivova.cz**.

## Technologie

- Vite 6, React 18, TypeScript
- Tailwind CSS 4, několik komponent shadcn/ui (Radix)
- Ikony lucide-react
- Kontaktní formulář přes [FormSubmit](https://formsubmit.co) na adresu protivova@volny.cz

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
| Sitemap, robots | `public/sitemap.xml`, `public/robots.txt` |

Po změně kontaktů je uveďte na třech místech: v komponentách, v JSON-LD v `index.html` a v `public/ai.txt`.
