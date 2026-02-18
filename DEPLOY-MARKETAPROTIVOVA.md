# Nasazení na GitHub Pages - Doména marketaprotivova.cz

## ✅ Krok 1: Vytvoření GitHub repozitáře

1. Přihlaste se na [GitHub.com](https://github.com)
2. Klikněte na **"New repository"** (zelené tlačítko)
3. Vyplňte:
   - **Repository name**: `marketaprotivova` (nebo jakýkoliv název)
   - **Description**: "Webová stránka advokátky Markéty Protivové"
   - **Public** (musí být veřejný pro GitHub Pages zdarma)
4. Klikněte **"Create repository"**

---

## ✅ Krok 2: Nahrání kódu na GitHub

### Varianta A: Přes GitHub Desktop (nejjednodušší)
1. Stáhněte [GitHub Desktop](https://desktop.github.com/)
2. V GitHub Desktop: **File → Add Local Repository**
3. Vyberte složku s projektem
4. Klikněte **"Publish repository"**
5. Potvrďte a počkejte na nahrání

### Varianta B: Přes příkazovou řádku (Git)
```bash
# V terminálu ve složce projektu:
git init
git add .
git commit -m "Initial commit - advokátka website"
git branch -M main
git remote add origin https://github.com/VAS-UZIVATELSKE-JMENO/marketaprotivova.git
git push -u origin main
```

---

## ✅ Krok 3: Aktivace GitHub Pages

1. Na GitHubu otevřete svůj repozitář
2. Klikněte na **Settings** (Nastavení)
3. V levém menu najděte **Pages**
4. V sekci **"Source"**:
   - **Branch**: `gh-pages` (vytvoří se automaticky po prvním deploy)
   - **Folder**: `/ (root)`
5. Klikněte **Save**

---

## ✅ Krok 4: Automatické nasazení (GitHub Actions)

Váš projekt obsahuje soubor `.github/workflows/deploy.yml`, který automaticky:
1. Buildí projekt při každém push do `main` branch
2. Nasadí web na GitHub Pages

**Po prvním push:**
1. Jděte do **Actions** tab na GitHubu
2. Sledujte běh workflow (první nasazení trvá 2-3 minuty)
3. Po dokončení bude web dostupný na:
   ```
   https://VAS-UZIVATELSKE-JMENO.github.io/marketaprotivova/
   ```

---

## ✅ Krok 5: Připojení vlastní domény marketaprotivova.cz

### A) Nastavení DNS u registrátora domény

Přihlaste se k registrátorovi domény (např. Wedos, Forpsi, GoDaddy) a přidejte tyto DNS záznamy:

#### Pro APEX doménu (marketaprotivova.cz):
```
Typ: A
Název: @
Hodnota: 185.199.108.153
TTL: 3600

Typ: A
Název: @
Hodnota: 185.199.109.153
TTL: 3600

Typ: A
Název: @
Hodnota: 185.199.110.153
TTL: 3600

Typ: A
Název: @
Hodnota: 185.199.111.153
TTL: 3600
```

#### Pro WWW subdoménu (www.marketaprotivova.cz):
```
Typ: CNAME
Název: www
Hodnota: VAS-UZIVATELSKE-JMENO.github.io
TTL: 3600
```

### B) Nastavení domény na GitHubu

1. V repozitáři jděte do **Settings → Pages**
2. V sekci **"Custom domain"** zadejte:
   ```
   marketaprotivova.cz
   ```
3. Klikněte **Save**
4. Zaškrtněte **"Enforce HTTPS"** (po propagaci DNS, cca za 10-60 minut)

### C) Ověření CNAME souboru

Váš projekt již obsahuje soubor `/public/CNAME` s obsahem:
```
marketaprotivova.cz
```

✅ Tento soubor zajistí, že se doména zachová i po každém redeploy.

---

## ✅ Krok 6: Ověření funkčnosti

### Okamžitě po nasazení:
1. Otevřete: `https://VAS-UZIVATELSKE-JMENO.github.io/marketaprotivova/`
2. Web by měl být viditelný (bez vlastní domény)

### Po propagaci DNS (10-60 minut):
1. Otevřete: `https://marketaprotivova.cz`
2. Web by měl fungovat na vlastní doméně
3. HTTPS certifikát se aktivuje automaticky za 24 hodin

### Kontrola DNS propagace:
- [whatsmydns.net](https://www.whatsmydns.net/#A/marketaprotivova.cz)
- Zadejte: `marketaprotivova.cz`
- Zkontrolujte, zda se zobrazují IP adresy GitHubu

---

## ✅ Krok 7: Po nasazení - SEO

### Google Search Console
1. Přejděte na [search.google.com/search-console](https://search.google.com/search-console)
2. Přidejte property: `https://marketaprotivova.cz`
3. Ověřte vlastnictví (doporučeno DNS TXT záznam)
4. Odešlete sitemap: `https://marketaprotivova.cz/sitemap.xml`

### Bing Webmaster Tools
1. Přejděte na [bing.com/webmasters](https://www.bing.com/webmasters)
2. Přidejte web: `https://marketaprotivova.cz`
3. Odešlete sitemap: `https://marketaprotivova.cz/sitemap.xml`

---

## 🔧 Řešení problémů

### Web nefunguje na vlastní doméně
- Počkejte 10-60 minut na propagaci DNS
- Zkontrolujte DNS záznamy u registrátora
- Vymažte cache prohlížeče (Ctrl+Shift+Del)

### 404 chyba po obnovení stránky
- ✅ Již vyřešeno v projektu pomocí 404.html

### HTTPS nefunguje
- Počkejte 24 hodin od aktivace vlastní domény
- GitHub automaticky získá Let's Encrypt certifikát

### Změny se nezobrazují
```bash
# Proveďte commit a push změn:
git add .
git commit -m "Aktualizace webu"
git push origin main
```
- GitHub Actions automaticky nasadí změny za 2-3 minuty

---

## 📱 Rychlá referenční karta

| Co                       | URL                                  |
|--------------------------|--------------------------------------|
| Živý web                 | https://marketaprotivova.cz          |
| GitHub repozitář         | https://github.com/USERNAME/REPO     |
| GitHub Actions           | https://github.com/USERNAME/REPO/actions |
| Sitemap                  | https://marketaprotivova.cz/sitemap.xml |
| Robots.txt              | https://marketaprotivova.cz/robots.txt |
| AI.txt                  | https://marketaprotivova.cz/ai.txt   |

---

## 🎯 Kontrolní seznam

- [ ] Repozitář vytvořen na GitHubu
- [ ] Kód nahrán (git push)
- [ ] GitHub Pages aktivován
- [ ] První deploy dokončen (Actions)
- [ ] DNS A záznamy nastaveny u registrátora
- [ ] DNS CNAME záznam pro www nastaven
- [ ] Vlastní doména přidána v GitHub Pages Settings
- [ ] DNS propagace dokončena (test na whatsmydns.net)
- [ ] HTTPS funguje (24h po aktivaci)
- [ ] Sitemap odeslána do Google Search Console
- [ ] Sitemap odeslána do Bing Webmaster Tools
- [ ] Google My Business profil vytvořen (volitelné)

---

## 📞 Další kroky

1. **Google My Business**: Vytvořte profil pro místní SEO
2. **Google Analytics**: Přidejte tracking kód pro statistiky
3. **Facebook Pixel**: Přidejte pro remarketing (volitelné)
4. **Blog**: Zvažte přidání blog sekce pro lepší SEO

**Hotovo!** Váš web je nyní live na `marketaprotivova.cz` 🎉
