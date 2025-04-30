import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import AppointmentBanner from "@/components/appointment-banner"
import {
  SmileIcon as Tooth,
  Calendar,
  Clock,
  ArrowRight,
  Heart,
  Shield,
  Sparkles,
  Stethoscope,
  Smile,
} from "lucide-react"

// Alle beschikbare diensten
const allServices = [
  {
    title: "Preventie",
    description:
      "Regelmatige controles en professionele reinigingen om uw mondgezondheid te monitoren en problemen vroegtijdig op te sporen.",
    icon: Tooth,
    link: "/diensten#preventie",
  },
  {
    title: "Vullingen",
    description:
      "Hoogwaardige vullingen om beschadigde tanden te herstellen met materialen die duurzaam en esthetisch zijn.",
    icon: Smile,
    link: "/diensten#vullingen",
  },
  {
    title: "Kindertandheelkunde",
    description:
      "Speciale aandacht voor de jongste patiënten om een positieve ervaring te creëren en goede mondgewoonten aan te leren.",
    icon: Sparkles,
    link: "/diensten#kindertandheelkunde",
  },
  {
    title: "Orthodontie",
    description: "Correctie van scheve tanden en kaakproblemen voor een mooiere glimlach en betere mondgezondheid.",
    icon: Stethoscope,
    link: "/diensten#orthodontie",
  },
  {
    title: "Esthetische tandheelkunde",
    description: "Verbeter uw glimlach met behandelingen zoals tanden bleken, facings en esthetische vullingen.",
    icon: Heart,
    link: "/diensten#esthetische-tandheelkunde",
  },
  {
    title: "Kroon- en brugwerk",
    description: "Restauratieve behandelingen om beschadigde tanden te herstellen of ontbrekende tanden te vervangen.",
    icon: Shield,
    link: "/diensten#kroon-en-brugwerk",
  },
  {
    title: "Implantaten",
    description:
      "Permanente vervanging van ontbrekende tanden met implantaten die eruitzien en functioneren als natuurlijke tanden.",
    icon: Calendar,
    link: "/diensten#implantaten",
  },
  {
    title: "Uitneembare prothese",
    description: "Comfortabele en natuurlijk uitziende prothesen voor patiënten die meerdere of alle tanden missen.",
    icon: Smile,
    link: "/diensten#uitneembare-prothese",
  },
  {
    title: "Parodontologie",
    description: "Behandeling van tandvleesaandoeningen en behoud van gezond tandvlees voor een betere mondgezondheid.",
    icon: Heart,
    link: "/diensten#parodontologie",
  },
]

// Functie om willekeurige diensten te selecteren
function getRandomServices(count) {
  // Maak een kopie van de array om de originele niet te wijzigen
  const shuffled = [...allServices]

  // Fisher-Yates shuffle algoritme
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  // Neem de eerste 'count' items
  return shuffled.slice(0, count)
}

export default function Home() {
  // Selecteer 3 willekeurige diensten
  const randomServices = getRandomServices(3)

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] w-full">
        <Image src="/images/hero-bg.jpg" alt="Tandarts Swaelens praktijk" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent">
          <div className="container h-full flex flex-col justify-center">
            <div className="max-w-lg space-y-6 text-white">
              <h1 className="text-4xl md:text-5xl font-bold animate-fade-in">Uw glimlach, onze zorg</h1>
              <p className="text-lg md:text-xl animate-fade-in animation-delay-100">
                Welkom bij Tandarts Swaelens, uw tandartspraktijk in Gent voor persoonlijke en professionele
                tandheelkundige zorg.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-200">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 group transition-all duration-300 transform hover:scale-105 hero-button-light"
                >
                  <Link href="/afspraak" className="flex items-center">
                    Maak een afspraak
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white border-white hover:bg-white/10 transition-all duration-300 hero-button-outline"
                >
                  <Link href="/contact">Contacteer ons</Link>
                </Button>
              </div>
              <p className="text-sm animate-fade-in animation-delay-300">* Enkel voor bestaande patiënten</p>
            </div>
          </div>
        </div>

        {/* Subtiele tanden patroon overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-10 mix-blend-overlay">
          <div
            className="absolute inset-0"
            style={{ backgroundImage: "url('/images/teeth-pattern.png')", backgroundSize: "200px" }}
          ></div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <div className="inline-block bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-primary font-medium">Tandheelkunde met een glimlach</span>
              </div>
              <h2 className="text-3xl font-bold text-primary">Welkom bij Tandarts Swaelens</h2>
              <p className="text-lg dark-text">
                Bij Tandarts Swaelens streven we ernaar om hoogwaardige tandheelkundige zorg te bieden in een
                comfortabele en vriendelijke omgeving. Onze praktijk in Gent is uitgerust met moderne technologie om u
                de beste behandeling te geven.
              </p>
              <p className="dark-text">
                Dr. Christian Swaelens en zijn team zetten zich in voor preventieve tandheelkunde en persoonlijke zorg,
                afgestemd op de behoeften van elke patiënt. We nemen de tijd om naar u te luisteren en uw vragen te
                beantwoorden.
              </p>
              <Button asChild variant="outline" className="group transition-all duration-300 button-outline-dark-fix">
                <Link href="/team" className="flex items-center">
                  Leer ons team kennen
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-[1.02] duration-300 animate-slide-in-right">
              <Image
                src="/images/intro1.png"
                alt="Tandarts Swaelens praktijk interieur"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-muted relative overflow-hidden dark-bg">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full translate-y-1/2 -translate-x-1/2 animate-pulse-slow animation-delay-1000"></div>

        {/* Subtiele tanden patroon overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div
            className="absolute inset-0"
            style={{ backgroundImage: "url('/images/teeth-pattern.png')", backgroundSize: "200px" }}
          ></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
              <span className="text-primary font-medium">Wat we voor u kunnen doen</span>
            </div>
            <h2 className="text-3xl font-bold text-primary">Onze Diensten</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto dark-text">
              We bieden een breed scala aan tandheelkundige behandelingen om uw mondgezondheid te behouden en te
              verbeteren.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {randomServices.map((service, index) => (
              <Link href={service.link} key={index} className="block group">
                <Card
                  className="border-primary/10 transition-all duration-300 hover:shadow-md hover:border-primary/30 hover:-translate-y-1 animate-fade-in h-full group-hover:border-primary dark-card"
                  style={{ animationDelay: `${(index + 1) * 100}ms` }}
                >
                  <CardHeader className="pb-2">
                    <service.icon className="h-8 w-8 text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <CardTitle className="dark-text">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="dark-muted-text">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Gecentreerde knop */}
          <div className="flex justify-center mt-8 animate-fade-in animation-delay-400">
            <Button asChild className="group transition-all duration-300 transform hover:scale-105 button-dark-fix">
              <Link href="/diensten" className="flex items-center">
                Bekijk alle diensten
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
              <span className="text-primary font-medium">Wie wij zijn</span>
            </div>
            <h2 className="text-3xl font-bold text-primary">Ons Team</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto dark-text">
              Maak kennis met ons ervaren en vriendelijke team dat klaarstaat om u de beste tandheelkundige zorg te
              bieden.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02] animate-slide-in-left dark-card">
              <div className="relative h-[350px] w-full">
                <Image src="/images/about1.png" alt="Dr. Christian Swaelens" fill className="object-cover object-top" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold dark-text">Dr. Christian Swaelens</h3>
                <p className="text-primary mb-3">Tandarts</p>
                <p className="dark-muted-text">
                  Dr. Swaelens heeft jarenlange ervaring in de tandheelkunde en staat bekend om zijn persoonlijke aanpak
                  en aandacht voor detail. Met zijn vriendelijke benadering zorgt hij ervoor dat elke patiënt zich op
                  zijn gemak voelt.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-[1.02] animate-slide-in-right dark-card">
              <div className="relative h-[350px] w-full">
                <Image src="/images/about2.png" alt="Anneleen Moonens" fill className="object-cover object-top" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold dark-text">Anneleen Moonens</h3>
                <p className="text-primary mb-3">Tandartsassistente</p>
                <p className="dark-muted-text">
                  Anneleen zorgt voor het comfort van onze patiënten en ondersteunt bij alle behandelingen. Ze staat
                  bekend om haar vriendelijke benadering en haar talent om zelfs de meest nerveuze patiënten gerust te
                  stellen.
                </p>
              </div>
            </div>
          </div>

          {/* Hier is de aangepaste link, nu gecentreerd */}
          <div className="flex justify-center mt-8 animate-fade-in">
            <Button asChild variant="outline" className="group transition-all duration-300 button-outline-dark-fix">
              <Link href="/team" className="flex items-center">
                Leer meer over ons team
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-primary/5 relative overflow-hidden dark-bg">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full -translate-y-1/2 -translate-x-1/2 animate-pulse-slow"></div>

        {/* Subtiele tanden patroon overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div
            className="absolute inset-0"
            style={{ backgroundImage: "url('/images/teeth-pattern.png')", backgroundSize: "200px" }}
          ></div>
        </div>

        <div className="container relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
              <span className="text-primary font-medium">Waarom kiezen voor ons?</span>
            </div>
            <h2 className="text-3xl font-bold text-primary">Tandheelkunde met een persoonlijke touch</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto dark-text">
              Bij Tandarts Swaelens combineren we vakmanschap met zorg en aandacht voor elke patiënt.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-fade-in animation-delay-100 dark-card">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                <Heart className="h-6 w-6 text-primary group-hover:text-primary/80 group-hover:animate-pulse" />
              </div>
              <h3 className="text-lg font-bold mb-2 dark-text">Persoonlijke aandacht</h3>
              <p className="dark-muted-text">
                We nemen de tijd om naar uw wensen en zorgen te luisteren en stellen een behandelplan op maat voor u
                samen.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-fade-in animation-delay-200 dark-card">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                <Shield className="h-6 w-6 text-primary group-hover:text-primary/80 group-hover:animate-pulse" />
              </div>
              <h3 className="text-lg font-bold mb-2 dark-text">Moderne technieken</h3>
              <p className="dark-muted-text">
                Onze praktijk is uitgerust met de nieuwste technologieën om u de beste en meest comfortabele
                behandelingen te bieden.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-2 animate-fade-in animation-delay-300 dark-card">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 group transition-all duration-300 hover:bg-primary/20 hover:scale-110">
                <Tooth className="h-6 w-6 text-primary group-hover:text-primary/80 group-hover:animate-pulse" />
              </div>
              <h3 className="text-lg font-bold mb-2 dark-text">Angstvrije ervaring</h3>
              <p className="dark-muted-text">
                We begrijpen dat tandartsbezoeken stressvol kunnen zijn en doen er alles aan om u op uw gemak te
                stellen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-in-left">
              <div className="inline-block bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-primary font-medium">Klaar om een afspraak te maken?</span>
              </div>
              <h2 className="text-3xl font-bold text-primary">Maak een afspraak</h2>
              <p className="text-lg dark-text">
                Bent u een bestaande patiënt? Maak eenvoudig online een afspraak op een moment dat u het beste uitkomt.
              </p>
              <p className="dark-text">
                Nieuwe patiënten kunnen telefonisch contact opnemen via{" "}
                <a href="tel:092221213" className="font-medium hover:underline text-primary">
                  09 222 12 13
                </a>{" "}
                om een eerste afspraak te maken.
              </p>
              <div className="flex items-center gap-4 pt-2">
                <Clock className="h-6 w-6 text-primary" />
                <div>
                  <p className="font-medium dark-text">Telefonische Openingsuren:</p>
                  <p className="dark-muted-text">Maandag, woensdag & vrijdag: 09:00–13:00 & 14:00–18:00</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg animate-slide-in-right dark-card">
              <AppointmentBanner />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
