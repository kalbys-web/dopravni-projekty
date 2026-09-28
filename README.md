# Dopravní projekty – statický web

Web je připravený pro GitHub Pages, Cloudflare Pages nebo běžný webhosting.

## Obsah
- `index.html` – hlavní stránka
- `fotogalerie.html` – galerie s lightboxem
- `assets/style.css` – vzhled
- `assets/main.js` – mobilní menu a galerie
- `assets/images/` – lokální fotografie a ikony
- `404.html` – chybová stránka

## GitHub Pages
1. Vytvořte veřejný repozitář, např. `dopravni-projekty`.
2. Nahrajte obsah tohoto adresáře do kořene repozitáře.
3. V GitHubu otevřete Settings → Pages.
4. Source: Deploy from a branch, branch `main`, folder `/ (root)`.
5. Po zveřejnění nastavte Custom domain `dopravni-projekty.cz`.
6. U FORPSI upravte DNS podle dokumentace GitHub Pages.
7. Po ověření DNS v GitHub Pages zapněte Enforce HTTPS.

Před změnou DNS ponechte případné MX/TXT záznamy pro e-mail beze změny.
