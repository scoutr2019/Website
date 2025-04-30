
# reset-project.ps1

Write-Host "📦 Verwijderen van node_modules en package-lock.json..."
Remove-Item -Recurse -Force node_modules -ErrorAction SilentlyContinue
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue

Write-Host "📥 Installeren van packages (maakt nieuwe package-lock.json)..."
npm install

Write-Host "✅ Nieuwe package-lock.json gegenereerd."

Write-Host "🔧 Toevoegen aan Git..."
git add package.json package-lock.json

Write-Host "📝 Commit aanmaken..."
git commit -m "Fix: package-lock.json opnieuw gesynchroniseerd met package.json"

Write-Host "🚀 Pushen naar GitHub..."
git push

Write-Host "✅ Klaar! Je project is gesynchroniseerd en gepusht."
