# Tandarts Swaelens Website

## cPanel Installatie Instructies

### Optie 1: Gebruik het voorgebouwde ZIP bestand (aanbevolen)

1. Upload `tandarts-swaelens-website.zip` naar je cPanel
2. Ga naar File Manager in cPanel
3. Navigeer naar de `public_html` map (of de map waar je de website wilt installeren)
4. Klik met de rechtermuisknop op het ZIP bestand en kies "Extract"
5. Zorg ervoor dat alle bestanden direct in de root map komen (niet in een submap)
6. De website zou nu moeten werken!

### Optie 2: Zelf bouwen

Als je wijzigingen wilt maken aan de website, kun je deze zelf bouwen:

1. Zorg ervoor dat Node.js (v16 of hoger) is geïnstalleerd
2. Open een terminal en navigeer naar de projectmap
3. Voer het volgende commando uit:
   \`\`\`
   npm install
   npm run cpanel-build
   \`\`\`
4. Dit zal een nieuw ZIP bestand genereren dat je kunt uploaden naar cPanel

## Onderhoud

### Afbeeldingen toevoegen/wijzigen
- Plaats nieuwe afbeeldingen in de `public/images` map
- Verwijs naar afbeeldingen in de code met `/images/bestandsnaam.jpg`

### Teksten wijzigen
- De meeste teksten kunnen worden gewijzigd in de bestanden in de `app` map
- Pagina's bevinden zich in `app/pagina-naam/page.tsx`

## Contact

Voor vragen of ondersteuning, neem contact op met de ontwikkelaar.
\`\`\`

Laten we ook een eenvoudige PHP-bestand maken om te controleren of de server correct is geconfigureerd:
