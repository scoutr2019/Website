import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle, Calendar, Phone, Clock, MapPin, Mail } from "lucide-react"

export default function AfspraakPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[300px] w-full">
        <Image src="/images/hero-bg.jpg" alt="Maak een afspraak" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-primary/70">
          <div className="container h-full flex flex-col justify-center">
            <div className="max-w-lg space-y-4 text-white">
              <h1 className="text-3xl md:text-4xl font-bold animate-fade-in">Maak een afspraak</h1>
              <p className="text-lg animate-fade-in animation-delay-100">
                Plan uw volgende bezoek aan Tandarts Swaelens eenvoudig online of telefonisch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <Alert className="mb-8 border-primary/20 bg-primary/5 animate-fade-in animation-delay-200">
              <AlertCircle className="h-4 w-4 text-primary" />
              <AlertTitle>Belangrijk</AlertTitle>
              <AlertDescription>
                Op dit moment kunnen alleen bestaande patiënten online een afspraak maken. Bent u nog geen patiënt? Neem
                dan telefonisch contact met ons op via{" "}
                <a href="tel:092221213" className="font-medium hover:underline">
                  09 222 12 13
                </a>
                .
              </AlertDescription>
            </Alert>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="h-full flex flex-col animate-fade-in animation-delay-300 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Calendar className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Online afspraak maken</CardTitle>
                  <CardDescription>Voor bestaande patiënten</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 flex-grow">
                  <p>
                    Als u al patiënt bent bij Tandarts Swaelens, kunt u eenvoudig online een afspraak maken via ons
                    online boekingssysteem.
                  </p>
                  <div className="w-full overflow-hidden rounded-md border">
                    <iframe
                      src="https://agenda.clickdocdentist.be/short/mgeqrWZ8KAm93jV5"
                      width="100%"
                      height="660"
                      scrolling="true"
                      frameBorder="1"
                      allowTransparency={true}
                      allow="encrypted-media"
                    ></iframe>
                  </div>
                </CardContent>
              </Card>

              <Card className="h-full flex flex-col animate-fade-in animation-delay-400 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <Phone className="h-8 w-8 text-primary mb-2" />
                  <CardTitle>Telefonisch afspraak maken</CardTitle>
                  <CardDescription>Voor alle patiënten</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p>
                    U kunt ook telefonisch een afspraak maken tijdens onze openingsuren. Dit is de aangewezen methode
                    voor nieuwe patiënten.
                  </p>
                  <div className="flex items-center gap-4">
                    <Phone className="h-10 w-10 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Bel ons op</p>
                      <a href="tel:092221213" className="text-xl font-bold hover:underline">
                        09 222 12 13
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Telefonische Openingsuren:</p>
                      <p>Maandag, woensdag & vrijdag: 09:00–13:00 & 14:00–18:00</p>
                    </div>
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="w-full hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <a href="tel:092221213">Bel nu</a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 space-y-8 animate-fade-in animation-delay-500">
              <h2 className="text-2xl font-bold text-primary">Veelgestelde vragen over afspraken</h2>

              <div className="space-y-6">
                <div className="space-y-2 p-4 rounded-lg hover:bg-primary/5 transition-all duration-300">
                  <h3 className="text-lg font-medium">Wat moet ik meenemen naar mijn eerste afspraak?</h3>
                  <p>
                    Bij uw eerste bezoek vragen we u om uw identiteitskaart, verzekeringsinformatie en een lijst van
                    eventuele medicijnen die u gebruikt. Ook is het handig om uw tandheelkundige voorgeschiedenis mee te
                    nemen.
                  </p>
                </div>

                <div className="space-y-2 p-4 rounded-lg hover:bg-primary/5 transition-all duration-300">
                  <h3 className="text-lg font-medium">Hoe lang van tevoren moet ik een afspraak maken?</h3>
                  <p>
                    Voor reguliere controles raden we aan om 2-3 weken van tevoren te boeken. Voor spoedgevallen
                    proberen we u zo snel mogelijk te helpen, vaak nog dezelfde dag.
                  </p>
                </div>

                <div className="space-y-2 p-4 rounded-lg hover:bg-primary/5 transition-all duration-300">
                  <h3 className="text-lg font-medium">Wat is het annuleringsbeleid?</h3>
                  <p>
                    We vragen u om minimaal 24 uur van tevoren te annuleren of te wijzigen, zodat we de tijd kunnen
                    aanbieden aan andere patiënten. Bij herhaaldelijk niet nakomen van afspraken zonder tijdige
                    annulering kunnen kosten in rekening worden gebracht.
                  </p>
                </div>

                <div className="space-y-2 p-4 rounded-lg hover:bg-primary/5 transition-all duration-300">
                  <h3 className="text-lg font-medium">Hoe vaak moet ik voor controle komen?</h3>
                  <p>
                    Voor de meeste patiënten raden we een halfjaarlijkse controle aan. Afhankelijk van uw specifieke
                    mondgezondheid kan Dr. Swaelens een ander schema adviseren.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-primary mb-8 text-center animate-fade-in">Contactgegevens</h2>
            <div className="bg-background p-8 rounded-lg shadow animate-fade-in animation-delay-100 hover:shadow-lg transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Adres</h3>
                      <a
                        href="https://maps.google.com/?q=Kortrijksesteenweg+215,+9000+Gent"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline hover:text-primary transition-colors"
                      >
                        Kortrijksesteenweg 215, 9000 Gent
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Telefoon</h3>
                      <a href="tel:092221213" className="hover:underline hover:text-primary transition-colors">
                        09 222 12 13
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">E-mail</h3>
                      <a
                        href="mailto:info@tandartsswaelens.be"
                        className="hover:underline hover:text-primary transition-colors"
                      >
                        info@tandartsswaelens.be
                      </a>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Telefonische Openingsuren</h3>
                      <div className="mt-2 space-y-1">
                        <div className="grid grid-cols-2 gap-2">
                          <span>Maandag:</span>
                          <span>09:00–13:00 & 14:00–18:00</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <span>Dinsdag:</span>
                          <span className="text-muted-foreground">Gesloten</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <span>Woensdag:</span>
                          <span>09:00–13:00 & 14:00–18:00</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <span>Donderdag:</span>
                          <span className="text-muted-foreground">Gesloten</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <span>Vrijdag:</span>
                          <span>09:00–13:00 & 14:00–18:00</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <span>Zaterdag:</span>
                          <span className="text-muted-foreground">Gesloten</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <span>Zondag:</span>
                          <span className="text-muted-foreground">Gesloten</span>
                        </div>
                        <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t">
                          <span>Feestdagen:</span>
                          <span className="text-muted-foreground">Gesloten</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="aspect-video w-full h-[300px] bg-muted rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2508.0576666669!2d3.7224863!3d51.0367903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3715a7a9a0e25%3A0x5b1e0f6a2e9c0b9!2sKortrijksesteenweg%20215%2C%209000%20Gent!5e0!3m2!1snl!2sbe!4v1650000000000!5m2!1snl!2sbe"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
