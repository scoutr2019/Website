const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")
const archiver = require("archiver")

// Kleuren voor console output
const colors = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
}

console.log(`${colors.bright}${colors.cyan}=== Tandarts Swaelens Website - cPanel Build Script ===${colors.reset}\n`)

// Stap 1: Installeer dependencies
console.log(`${colors.yellow}Stap 1: Installeren van dependencies...${colors.reset}`)
try {
  execSync("npm install", { stdio: "inherit" })
  console.log(`${colors.green}✓ Dependencies succesvol geïnstalleerd${colors.reset}\n`)
} catch (error) {
  console.error(`Fout bij het installeren van dependencies: ${error.message}`)
  process.exit(1)
}

// Stap 2: Bouw de website
console.log(`${colors.yellow}Stap 2: Bouwen van de website...${colors.reset}`)
try {
  execSync("npm run build", { stdio: "inherit" })
  console.log(`${colors.green}✓ Website succesvol gebouwd${colors.reset}\n`)
} catch (error) {
  console.error(`Fout bij het bouwen van de website: ${error.message}`)
  process.exit(1)
}

// Stap 3: Maak een .htaccess bestand voor cPanel
console.log(`${colors.yellow}Stap 3: Aanmaken van .htaccess bestand...${colors.reset}`)
const htaccessContent = `
# Herschrijf regels voor mooie URLs
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Redirect naar HTTPS (optioneel, verwijder indien niet gewenst)
  # RewriteCond %{HTTPS} off
  # RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
  
  # Voorkom directory browsing
  Options -Indexes
  
  # Verwerk 404 errors met de custom 404 pagina
  ErrorDocument 404 /404.html
  
  # Caching regels voor statische bestanden
  <IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/gif "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType application/pdf "access plus 1 month"
    ExpiresByType application/x-font-woff "access plus 1 year"
  </IfModule>
</IfModule>
`

try {
  fs.writeFileSync(path.join("out", ".htaccess"), htaccessContent)
  console.log(`${colors.green}✓ .htaccess bestand succesvol aangemaakt${colors.reset}\n`)
} catch (error) {
  console.error(`Fout bij het aanmaken van .htaccess bestand: ${error.message}`)
  process.exit(1)
}

// Stap 4: Maak een ZIP bestand van de 'out' directory
console.log(`${colors.yellow}Stap 4: Maken van ZIP bestand...${colors.reset}`)
const output = fs.createWriteStream("tandarts-swaelens-website.zip")
const archive = archiver("zip", {
  zlib: { level: 9 }, // Maximum compressie
})

output.on("close", () => {
  console.log(
    `${colors.green}✓ ZIP bestand succesvol aangemaakt (${(archive.pointer() / 1024 / 1024).toFixed(2)} MB)${colors.reset}\n`,
  )
  console.log(`${colors.bright}${colors.magenta}=== Website is klaar voor cPanel! ===${colors.reset}`)
  console.log(
    `${colors.cyan}Upload 'tandarts-swaelens-website.zip' naar je cPanel en pak het uit in de public_html map.${colors.reset}`,
  )
})

archive.on("error", (err) => {
  console.error(`Fout bij het maken van ZIP bestand: ${err.message}`)
  process.exit(1)
})

archive.pipe(output)
archive.directory("out/", false)
archive.finalize()
