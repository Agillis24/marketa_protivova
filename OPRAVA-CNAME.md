# ⚠️ DŮLEŽITÉ: Oprava CNAME souboru

Před nasazením na GitHub Pages je nutné opravit CNAME soubor:

## Problém
Složka `/public/CNAME/` existuje jako adresář místo souboru.

## Řešení

Proveďte tyto kroky v terminálu:

```bash
# 1. Smažte složku CNAME
rm -rf public/CNAME

# 2. Vytvořte soubor CNAME s doménou
echo "protivova.cz" > public/CNAME

# 3. Ověřte, že je to soubor (ne složka)
cat public/CNAME
# Mělo by vypsat: protivova.cz
```

## Ověření

Spusťte:
```bash
ls -la public/
```

Měli byste vidět:
```
-rw-r--r-- 1 user user   12 Feb 13 21:14 CNAME
```

Nikoliv:
```
drwxr-xr-x 2 user user 4096 Feb 13 21:14 CNAME
```

První písmeno musí být `-` (soubor), ne `d` (adresář).

---

Po této opravě můžete pokračovat podle návodu v `GITHUB-PAGES-NAVOD.md`.
