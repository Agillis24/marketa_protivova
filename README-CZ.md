# 🏛️ Webové stránky Mgr. Markéta Protivová

Moderní, elegantní jednostránkový web pro advokátní kancelář.

## ✨ Hlavní vlastnosti

- **Responzivní design** - perfektní zobrazení na všech zařízeních
- **Moderní typografie** - Playfair Display (nadpisy) + Inter (text)
- **Elegantní barevná paleta** - tmavě modrá + zlatá
- **Animace při scrollování** - jemné odhalování obsahu
- **Sticky navigace** - vždy po ruce
- **Mobilní CTA tlačítko** - snadné volání na mobilu
- **Kontaktní formulář** - připravený pro Formspree/Netlify Forms
- **Google Maps integrace** - obě kanceláře na mapě

## 📂 Struktura stránek

1. **Hero sekce** - úvodní hlavička s CTA tlačítky
2. **Služby** - přehled 5 hlavních právních oblastí
3. **Kanceláře** - informace o pobočkách Kladno a Praha
4. **Mapa** - vizuální lokalizace obou kanceláří
5. **Kontaktní formulář** - pro nezávazné konzultace
6. **Footer** - kompletní kontaktní informace

## 🎨 Přizpůsobení

### Změna barev

Barvy najdete v souboru `/src/styles/theme.css`:

- `--primary` - hlavní tmavá barva (navy)
- `--accent` - zlatá/akcentová barva
- `--background` - barva pozadí

### Změna textů

Všechny texty jsou přímo v komponentech:

- `/src/app/components/hero.tsx` - úvodní sekce
- `/src/app/components/services.tsx` - služby
- `/src/app/components/offices.tsx` - kanceláře
- `/src/app/components/contact-form.tsx` - formulář

### Změna fotografií

Pokud chcete přidat fotografie:
1. Použijte komponentu `ImageWithFallback`
2. Umístěte obrázky do složky `/public/images/`
3. Importujte: `<ImageWithFallback src="/images/your-photo.jpg" alt="Popis" />`

## 📞 Připojení kontaktního formuláře

Viz soubor `/DEPLOYMENT.md` pro detailní instrukce.

## 🚀 Spuštění lokálně

```bash
# Instalace závislostí
npm install

# Spuštění dev serveru
npm run dev

# Build pro produkci
npm run build
```

## 📱 Mobilní optimalizace

Web je plně optimalizován pro mobilní zařízení:
- Sticky call-to-action tlačítko na mobilu
- Responzivní layout všech sekcí
- Hamburger menu pro navigaci
- Velké, snadno klikatelné prvky

## 🔒 GDPR & Soukromí

Kontaktní formulář obsahuje:
- Checkbox pro souhlas se zpracováním osobních údajů
- Informační poznámku o bezpečnosti
- Připravenost pro rozšíření o zásady ochrany osobních údajů

## 💡 Doporučení pro budoucnost

- Přidat blog/články sekci
- Přidat sekci s referencemi/recenzemi
- Přidat FAQ (často kladené otázky)
- Přidat fotogalerii kanceláří
- Přidat online rezervační systém konzultací
- Implementovat live chat

## 📧 Kontakt pro technickou podporu

Pro otázky ohledně webu kontaktujte vývojáře.
