"use client"

import { useState, useEffect } from "react"
import { ExternalLink } from "lucide-react"

export default function GoogleReviewsEmbed() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Simuleer laadtijd voor de embed
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="relative overflow-hidden rounded-lg shadow-md bg-white dark:bg-gray-800 min-h-[400px]">
        {!isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        <div className={`transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
          <iframe
            src="https://widgets.sociablekit.com/google-reviews/iframe/138499"
            className="w-full h-[500px] border-0"
            title="Google Reviews van Tandarts Swaelens"
          ></iframe>
        </div>
      </div>

      <div className="text-center">
        <a
          href="https://maps.app.goo.gl/w8mHTcgKfS5gQvN48"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-primary hover:underline font-medium transition-all duration-300 hover:text-primary/80"
        >
          Bekijk alle reviews op Google
          <ExternalLink className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  )
}
