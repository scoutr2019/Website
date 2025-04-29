import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import AppointmentBanner from "@/components/appointment-banner"
import { Heart, Star, Award, ThumbsUp } from "lucide-react"

export default function TeamPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[300px] w-full">
        <Image src="/images/hero-bg.jpg" alt="Ons team" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-primary/70">
          <div className="container h-full flex flex-col justify-center">
            <div className="max-w-lg space-y-4 text-white">
              <h1 className="text-3xl md:text-4xl font-bold">Ons Team</h1>
              <p className="text-lg">
                Maak kennis met de professionals die elke dag klaarstaan om u de beste tandheelkundige zorg te bieden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-12">
            {/* Team Member 1 */}
            <Card className="overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="grid md:grid-cols-2">
                <div className="relative h-[300px] md:h-auto">
                  <Image
                    src="/images/about1.png"
                    alt="Dr. Christian Swaelens"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="card-content-dark">
                  <CardHeader>
                    <CardTitle className="text-dark-high-contrast">Dr. Christian Swaelens</CardTitle>
                    <CardDescription className="dark:text-gray-300">Tandarts</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="dark:text-gray-200">
                      Dr. Christian Swaelens heeft jarenlange ervaring in de tandheelkunde en heeft een passie voor het
                      bieden van hoogwaardige, persoonlijke zorg aan al zijn patiënten.
                    </p>
                    <p className="dark:text-gray-200">
                      Na het afronden van zijn opleiding tandheelkunde heeft Dr. Swaelens zich voortdurend bijgeschoold
                      om op de hoogte te blijven van de nieuwste technieken en ontwikkelingen in de tandheelkunde.
                    </p>
                    <p className="dark:text-gray-200">
                      Hij staat bekend om zijn rustige en geruststellende benadering, waardoor patiënten zich op hun
                      gemak voelen, zelfs degenen die angstig zijn voor tandheelkundige behandelingen.
                    </p>
                    <div className="flex items-center gap-2 text-primary">
                      <Heart className="h-5 w-5" />
                      <p className="font-medium dark:text-primary">
                        "Een gezonde glimlach is de basis voor een gezond leven"
                      </p>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>

            {/* Team Member 2 */}
            <Card className="overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
              <div className="grid md:grid-cols-2">
                <div className="relative h-[300px] md:h-auto order-1 md:order-2">
                  <Image src="/images/about2.png" alt="Anneleen Moonens" fill className="object-cover object-center" />
                </div>
                <div className="order-2 md:order-1 card-content-dark">
                  <CardHeader>
                    <CardTitle className="text-dark-high-contrast">Anneleen Moonens</CardTitle>
                    <CardDescription className="dark:text-gray-300">Tandartsassistente</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="dark:text-gray-200">
                      Anneleen Moonens is een ervaren tandartsassistente die een essentiële rol speelt in onze praktijk.
                      Ze ondersteunt Dr. Swaelens bij alle behandelingen en zorgt ervoor dat alles soepel verloopt.
                    </p>
                    <p className="dark:text-gray-200">
                      Met haar vriendelijke en zorgzame benadering helpt Anneleen patiënten zich op hun gemak te voelen
                      vanaf het moment dat ze binnenkomen tot het einde van hun behandeling.
                    </p>
                    <p className="dark:text-gray-200">
                      Anneleen is verantwoordelijk voor het voorbereiden van behandelkamers, het assisteren tijdens
                      procedures, en het zorgen voor de follow-up met patiënten na hun afspraken.
                    </p>
                    <div className="flex items-center gap-2 text-primary">
                      <Star className="h-5 w-5" />
                      <p className="font-medium dark:text-primary">"Uw comfort is onze prioriteit"</p>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-muted relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>

        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
              <span className="text-primary font-medium">Onze aanpak</span>
            </div>
            <h2 className="text-3xl font-bold text-primary">Onze Filosofie</h2>
            <p className="text-lg dark:text-gray-200">
              Bij Tandarts Swaelens geloven we in een patiëntgerichte benadering van tandheelkunde. Onze filosofie is
              gebaseerd op de volgende principes:
            </p>
            <div className="grid sm:grid-cols-2 gap-6 text-left pt-4">
              <Card className="border-primary/10 transition-all duration-300 hover:shadow-md hover:border-primary/30 dark:bg-dark-card">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Heart className="h-4 w-4 text-primary" />
                    </div>
                    <CardTitle className="text-lg dark:text-white">Preventieve Zorg</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="dark:text-gray-200">
                    We geloven dat preventie de sleutel is tot een levenslange goede mondgezondheid. We richten ons op
                    educatie en preventieve behandelingen om problemen te voorkomen voordat ze ontstaan.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary/10 transition-all duration-300 hover:shadow-md hover:border-primary/30 dark:bg-dark-card">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <ThumbsUp className="h-4 w-4 text-primary" />
                    </div>
                    <CardTitle className="text-lg dark:text-white">Persoonlijke Aandacht</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="dark:text-gray-200">
                    Elke patiënt is uniek en verdient een gepersonaliseerde benadering. We nemen de tijd om naar uw
                    behoeften te luisteren en een behandelplan op maat te maken.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary/10 transition-all duration-300 hover:shadow-md hover:border-primary/30 dark:bg-dark-card">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Award className="h-4 w-4 text-primary" />
                    </div>
                    <CardTitle className="text-lg dark:text-white">Voortdurende Educatie</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="dark:text-gray-200">
                    We blijven onszelf bijscholen om op de hoogte te blijven van de nieuwste technieken en technologieën
                    in de tandheelkunde, zodat we u de beste zorg kunnen bieden.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-primary/10 transition-all duration-300 hover:shadow-md hover:border-primary/30 dark:bg-dark-card">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Star className="h-4 w-4 text-primary" />
                    </div>
                    <CardTitle className="text-lg dark:text-white">Comfortabele Ervaring</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="dark:text-gray-200">
                    We streven ernaar om elke tandheelkundige ervaring zo comfortabel en stressvrij mogelijk te maken,
                    vooral voor patiënten die angstig zijn voor tandheelkundige behandelingen.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-8">
              <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
                <span className="text-primary font-medium">Klaar om ons te ontmoeten?</span>
              </div>
              <h2 className="text-2xl font-bold text-primary">Maak kennis met ons team</h2>
              <p className="mt-2 dark:text-gray-200">
                Wilt u een afspraak maken met Dr. Swaelens of heeft u vragen? Neem contact met ons op.
              </p>
            </div>
            <AppointmentBanner />
          </div>
        </div>
      </section>
    </div>
  )
}
