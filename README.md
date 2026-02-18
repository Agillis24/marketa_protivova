# Mgr. Markéta Protivová - Advokátka

Moderní, elegantní jednostránková webová stránka pro advokátní kancelář s kancelářemi v Kladně a Praze.

## 🚀 Rychlý start

### Předpoklady
- Node.js 18+ nainstalovaný
- npm nebo pnpm package manager

### Instalace

```bash
# Naklonujte repozitář
git clone https://github.com/vase-jmeno/nazev-repo.git
cd nazev-repo

# Nainstalujte závislosti
npm install

# Spusťte vývojový server
npm run dev
```

Web bude dostupný na `http://localhost:5173`

### Build pro produkci

```bash
npm run build
```

Výsledné soubory budou v složce `dist/`

## 📋 Obsah webu

### Hlavní sekce
- **Hero** - Úvodní sekce s CTA tlačítky
- **Služby** - Přehled právních služeb
- **Kanceláře** - Lokace s Google Maps
- **Kontakt** - Kontaktní formulář

### Právní služby
- Občanské právo
- Trestní právo
- Rozvodové právo
- Pracovní právo
- Zakládání společností a družstev
- Zvláštní oprávnění

### Kanceláře

**Kladno**
- Adresa: Vašatova 1499, 272 01 Kladno
- Telefon: +420 602 662 167

**Praha**
- Adresa: Politických vězňů 1531/9, 110 00 Praha 1 – Nové Město
- Telefon: +420 602 662 167

**Email**: protivova@volny.cz
**Datová schránka**: e9cgijx

## 🎨 Design a technologie

### Tech Stack
- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS v4** - Styling
- **Lucide React** - Ikony
- **Motion** - Animace
- **React Hook Form** - Formuláře

### Design System
- **Barvy**: Tmavě modrá (#0F172A) a zlatá (#D4AF37)
- **Fonty**:
  - Nadpisy: Playfair Display (serif)
  - Text: Inter (sans-serif)
- **Responzivní design**: Mobile-first přístup
- **Sticky mobilní tlačítko**: Rychlé volání na mobilech

## 🔍 SEO & Optimalizace

Web je plně optimalizován pro vyhledávače:

- ✅ Meta tagy (Title, Description, Keywords)
- ✅ Open Graph tags (Facebook)
- ✅ Twitter Card tags
- ✅ Strukturovaná data (JSON-LD Schema.org)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Canonical URLs
- ✅ Alt texty na obrázcích
- ✅ Sémantické HTML5

### Google Search Console

Podrobný návod k nastavení najdete v souboru:
👉 **[DEPLOYMENT-SEO-GUIDE.md](./DEPLOYMENT-SEO-GUIDE.md)**

## 🚀 Nasazení

### GitHub Pages

Web se automaticky nasadí na GitHub Pages při push do `main` větve pomocí GitHub Actions.

**Kroky k nasazení:**

1. Fork nebo naklonujte tento repozitář
2. V GitHub Settings → Pages povolte GitHub Pages
3. Pushněte změny do `main` větve
4. Web bude dostupný na: `https://vase-jmeno.github.io/nazev-repo/`

**Poznámka**: Po nasazení aktualizujte URL v těchto souborech:
- `/src/app/components/seo-head.tsx`
- `/public/robots.txt`
- `/public/sitemap.xml`

### Vlastní doména

Pokud používáte vlastní doménu (např. `protivova.cz`):

1. Nastavte DNS u registrátora domény
2. V GitHub Settings → Pages zadejte vlastní doménu
3. Soubor `/public/CNAME` už obsahuje: `protivova.cz`

Detailní návod viz [DEPLOYMENT-SEO-GUIDE.md](./DEPLOYMENT-SEO-GUIDE.md)

## 📝 Konfigurace formuláře

Kontaktní formulář je připraven pro integraci s externími službami:

### Podporované služby
- **Formspree** (doporučeno)
- **GetForm.io**
- **Web3Forms**
- **FormSubmit.co**

### Nastavení Formspree (nejjednodušší)

1. Zaregistrujte se na https://formspree.io
2. Vytvořte nový formulář
3. Zkopírujte endpoint URL
4. V souboru `/src/app/components/contact-form.tsx` nahraďte:
   ```typescript
   action="VÁŠ_FORMSPREE_ENDPOINT"
   ```

## 🔒 GDPR Compliance

Web obsahuje:
- Cookie consent banner
- Souhlas se zpracováním osobních údajů ve formuláři
- Odkazy na Zásady ochrany osobních údajů

## 📱 Mobilní optimalizace

- Plně responzivní design
- Touch-friendly navigace
- Sticky call button na mobilech
- Optimalizované obrázky
- Fast loading times

## 🛠️ Struktura projektu

```
/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions workflow
├── public/
│   ├── CNAME                   # Vlastní doména
│   ├── robots.txt              # SEO robots
│   └── sitemap.xml             # SEO sitemap
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── contact-form.tsx
│   │   │   ├── cookie-consent.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── hero.tsx
│   │   │   ├── mobile-call-button.tsx
│   │   │   ├── navigation.tsx
│   │   │   ├── offices.tsx
│   │   │   ├── scroll-to-top.tsx
│   │   │   ├── seo-head.tsx    # SEO meta tagy
│   │   │   └── services.tsx
│   │   └── App.tsx
│   └── styles/
│       ├── fonts.css
│       ├── index.css
│       ├── tailwind.css
│       └── theme.css
├── .gitignore
├── DEPLOYMENT-SEO-GUIDE.md      # Návod k nasazení a SEO
├── package.json
├── README.md
└── vite.config.ts
```

## 📞 Kontakt

**Mgr. Markéta Protivová, advokátka**
- Email: protivova@volny.cz
- Telefon: +420 602 662 167
- IČO: 66243831
- Evidenční číslo ČAK: 04874
- Datová schránka: e9cgijx

## 📄 Licence

© 2026 Mgr. Markéta Protivová. Všechna práva vyhrazena.

---

**Vytvořeno s ❤️ pomocí React, Tailwind CSS a moderních webových technologií**
