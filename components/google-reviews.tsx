"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

// Deze component toont Google Reviews van de tandartspraktijk
// In een echte implementatie zou je een API gebruiken om de reviews op te halen
// Voor nu gebruiken we statische data die lijkt op 5-sterren Google Reviews

const googleReviews = [
  {
    id: 1,
    author: "Sofie D.",
    rating: 5,
    text: "Zeer vriendelijke tandarts en assistente. Ze nemen de tijd voor je en leggen alles goed uit. Ik ben erg tevreden!",
    date: "2 maanden geleden",
    profilePhoto: "S",
  },
  {
    id: 2,
    author: "Jan V.",
    rating: 5,
    text: "Uitstekende service en zeer professioneel. Dr. Swaelens heeft me geholpen met een moeilijke wortelkanaalbehandeling en het was vrijwel pijnloos. Sterk aanbevolen!",
    date: "3 maanden geleden",
    profilePhoto: "J",
  },
  {
    id: 3,
    author: "Marieke L.",
    rating: 5,
    text: "Ik was altijd bang voor de tandarts, maar hier voel ik me echt op mijn gemak. Ze zijn geduldig en begripvol. Eindelijk een tandarts waar ik graag naartoe ga!",
    date: "1 maand geleden",
    profilePhoto: "M",
  },
  {
    id: 4,
    author: "Thomas B.",
    rating: 5,
    text: "Mijn kinderen waren eerst bang voor de tandarts, maar Dr. Swaelens en zijn team hebben daar verandering in gebracht. Nu kijken ze uit naar hun afspraken!",
    date: "2 weken geleden",
    profilePhoto: "T",
  },
  {
    id: 5,
    author: "Elise V.",
    rating: 5,
    text: "Zeer tevreden over de behandeling en de vriendelijke benadering. Alles wordt duidelijk uitgelegd en er wordt goed geluisterd naar je wensen en zorgen.",
    date: "1 maand geleden",
    profilePhoto: "E",
  },
]

export default function GoogleReviews() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const visibleReviews = 3 // Aantal zichtbare reviews op desktop

  // Automatisch scrollen door reviews
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        setIsAnimating(true)
        setTimeout(() => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % (googleReviews.length - visibleReviews + 1))
          setIsAnimating(false)
        }, 500)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [isAnimating])

  // Handmatig navigeren
  const goToReview = (index: number) => {
    if (!isAnimating && index >= 0 && index <= googleReviews.length - visibleReviews) {
      setIsAnimating(true)
      setTimeout(() => {
        setActiveIndex(index)
        setIsAnimating(false)
      }, 500)
    }
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center justify-center mb-4">
        <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            alt="Google"
            className="h-6 mr-2"
          />
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <span className="ml-2 font-medium">5.0</span>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          className={`flex transition-transform duration-500 ease-in-out`}
          style={{ transform: `translateX(-${activeIndex * (100 / visibleReviews)}%)` }}
        >
          {googleReviews.map((review) => (
            <div
              key={review.id}
              className="w-full md:w-1/3 flex-shrink-0 px-3"
              style={{ minWidth: `${100 / visibleReviews}%` }}
            >
              <Card className="h-full hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold mr-3">
                      {review.profilePhoto}
                    </div>
                    <div>
                      <p className="font-medium">{review.author}</p>
                      <p className="text-sm text-muted-foreground">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="italic">{review.text}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Navigatie dots */}
        <div className="flex justify-center mt-6">
          {[...Array(googleReviews.length - visibleReviews + 1)].map((_, i) => (
            <button
              key={i}
              onClick={() => goToReview(i)}
              className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                i === activeIndex ? "bg-primary scale-125" : "bg-primary/30"
              }`}
              aria-label={`Ga naar review ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="text-center mt-4">
        <a
          href="https://maps.app.goo.gl/w8mHTcgKfS5gQvN48"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline inline-flex items-center font-medium transition-all duration-300 hover:text-primary/80"
        >
          Bekijk alle Google Reviews
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}
