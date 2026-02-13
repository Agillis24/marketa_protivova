# 🚀 Nasazení na GitHub Pages - Kompletní průvodce

Tento web je připraven pro nasazení na GitHub Pages. Následujte tyto kroky:

## 📋 Předpoklady

- GitHub účet
- Git nainstalovaný na vašem počítači
- Doménové jméno protivova.cz (volitelné, ale doporučené)

## 🔧 Krok 1: Příprava GitHub repozitáře

1. **Vytvořte nový repozitář na GitHubu**
   - Přejděte na https://github.com/new
   - Název: např. `advokat-web` nebo `protivova-web`
   - Nastavte jako **Public** (nutné pro GitHub Pages zdarma)
   - Nevytvářejte README, .gitignore ani licenci (už je v projektu)

2. **Inicializujte Git v projektu** (pokud ještě není)
   ```bash
   git init
   git add .
   git commit -m "Initial commit - advokátní web"
   ```

3. **Připojte repozitář a nahrajte kód**
   ```bash
   git remote add origin https://github.com/VASE-UZIVATELSKE-JMENO/NAZEV-REPOZITARE.git
   git branch -M main
   git push -u origin main
   ```

## ⚙️ Krok 2: Aktivace GitHub Pages

1. **Jděte do nastavení repozitáře**
   - V repozitáři klikněte na **Settings**
   - V levém menu najděte **Pages**

2. **Nastavte Source**
   - Source: **GitHub Actions** (NE "Deploy from a branch")
   - Tímto aktivujete automatické nasazení přes workflow

3. **Počkejte na build**
   - Přejděte na **Actions** tab
   - Měli byste vidět běžící workflow "Deploy to GitHub Pages"
   - První build trvá 2-5 minut

## 🌐 Krok 3: Nastavení vlastní domény (protivova.cz)

### A. U vašeho doménového registrátora

Přidejte tyto DNS záznamy:

**Pro apex doménu (protivova.cz):**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

**Pro www subdoménu (volitelné):**
```
Type: CNAME
Name: www
Value: VASE-UZIVATELSKE-JMENO.github.io
```

### B. V GitHub Pages nastavení

1. V **Settings > Pages**
2. V sekci **Custom domain** zadejte: `protivova.cz`
3. Klikněte **Save**
4. Počkejte na DNS check (může trvat až 24 hodin, obvykle 10-60 minut)
5. Po úspěšném ověření zaškrtněte **Enforce HTTPS**

## 📧 Krok 4: Připojení kontaktního formuláře

Web je připraven pro Formspree nebo Netlify Forms. Doporučuji Formspree:

### Formspree (Doporučeno)

1. **Registrace**
   - Jděte na https://formspree.io
   - Vytvořte účet (zdarma až 50 submissí/měsíc)

2. **Vytvoření formuláře**
   - Klikněte na "New Form"
   - Zadejte název: "Kontaktní formulář - Advokát"
   - Email pro příjem: `protivova@volny.cz`
   - Zkopírujte **Form ID** (např. `xyzabc123`)

3. **Úprava kódu**
   
   Otevřete `/src/app/components/contact-form.tsx` a najděte řádek:
   ```tsx
   <form onSubmit={handleSubmit} className="space-y-6">
   ```
   
   Změňte na:
   ```tsx
   <form 
     action="https://formspree.io/f/VÁŠE_FORM_ID"
     method="POST"
     className="space-y-6"
   >
   ```
   
   Odstraňte nebo zakomentujte funkci `handleSubmit` a všechny `onChange` handlery.

4. **Commitněte a pushněte změny**
   ```bash
   git add .
   git commit -m "Připojení Formspree formuláře"
   git push
   ```

5. **Otestujte**
   - Počkejte na automatický build (1-2 minuty)
   - Otevřete web a otestujte formulář
   - Zkontrolujte email

## ✅ Krok 5: Ověření funkcionality

Zkontrolujte:

- ✅ Web se načítá na https://protivova.cz
- ✅ SSL certifikát funguje (zelený zámek v prohlížeči)
- ✅ Všechny sekce se zobrazují správně
- ✅ Navigace funguje (hladké scrollování)
- ✅ Google Maps se zobrazují
- ✅ Kontaktní formulář odesílá zprávy
- ✅ Odkazy na telefon a email fungují
- ✅ Cookie consent se zobrazuje
- ✅ Mobilní verze vypadá dobře
- ✅ "Právní informace" a "Zásady ochrany osobních údajů" se otevírají

## 🔄 Aktualizace webu

Kdykoli chcete změnit web:

```bash
# 1. Upravte soubory
# 2. Uložte změny do Gitu
git add .
git commit -m "Popis změn"
git push

# GitHub Actions automaticky postaví a nasadí novou verzi (2-5 minut)
```

## 📊 Google Analytics (Volitelné)

Pokud chcete sledovat návštěvnost:

1. Vytvořte Google Analytics účet
2. Získejte Measurement ID (např. `G-XXXXXXXXXX`)
3. Přidejte do `/src/app/App.tsx` nebo vytvořte novou komponentu
4. Commitněte a pushněte

## 🔍 SEO Optimalizace

Web již obsahuje:
- ✅ Meta tagy (title, description)
- ✅ Open Graph tagy (Facebook, LinkedIn)
- ✅ Strukturovaná data (JSON-LD)
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Sémantický HTML

### Google Search Console

1. Jděte na https://search.google.com/search-console
2. Přidejte vlastnost pro `protivova.cz`
3. Ověřte vlastnictví (DNS TXT záznam nebo HTML tag)
4. Odešlete sitemap: `https://protivova.cz/sitemap.xml`

## 🐛 Řešení problémů

### Web se nezobrazuje
- Zkontrolujte Actions tab - build musí být zelený ✅
- Počkejte 5 minut po prvním push
- Zkuste vymazat cache prohlížeče (Ctrl+F5)

### Vlastní doména nefunguje
- DNS změny trvají až 24 hodin
- Ověřte DNS záznamy pomocí https://dnschecker.org
- Zkontrolujte, že CNAME soubor obsahuje `protivova.cz`

### Formulář neodesílá
- Ověřte, že máte správné Formspree Form ID
- Zkontrolujte JavaScript konzoli v prohlížeči (F12)
- Otestujte přímo na formspree.io

### 404 chyba po obnovení stránky
- Běžné u SPA (Single Page App)
- GitHub Pages automaticky přesměruje na index.html
- Pokud problém přetrvává, zkontrolujte vite.config.ts

## 📱 Kontakt

Pro technickou podporu ohledně webu:
- Email: protivova@volny.cz
- Telefon: +420 602 662 167

## 📚 Soubory pro referenci

- `/vite.config.ts` - konfigurace buildu
- `/.github/workflows/deploy.yml` - automatizace nasazení
- `/public/sitemap.xml` - mapa stránek pro vyhledávače
- `/public/robots.txt` - pravidla pro vyhledávače
- `/public/CNAME` - konfigurace vlastní domény
- `/public/.nojekyll` - vypnutí Jekyll procesování

---

✨ **Web je připraven k nasazení! Stačí pushnou na GitHub a za pár minut bude živý.**
