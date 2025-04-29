// Error handler script voor Tandarts Swaelens website
;(() => {
  // Controleer of er v0-gerelateerde errors zijn
  window.addEventListener("error", (event) => {
    if (event.message && event.message.includes("v0")) {
      console.warn("v0 initialization error detected, redirecting to fallback")
      // Redirect naar de fallback pagina als er een v0-gerelateerde error is
      // Maar alleen als we niet al op de fallback pagina zijn
      if (!window.location.href.includes("fallback.html")) {
        window.location.href = "/fallback.html"
      }
    }
  })

  // Voeg een timeout toe om te controleren of alles correct is geladen
  setTimeout(() => {
    // Als er een v0 object zou moeten zijn maar niet is geïnitialiseerd
    if (typeof window.v0 === "undefined" && document.querySelector("[data-v0-required]")) {
      console.warn("v0 not initialized after timeout, redirecting to fallback")
      if (!window.location.href.includes("fallback.html")) {
        window.location.href = "/fallback.html"
      }
    }
  }, 5000) // 5 seconden timeout
})()
