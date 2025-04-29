import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SmileIcon as Tooth, Smile, Sparkles, Stethoscope, Clock } from "lucide-react"
import AppointmentBanner from "@/components/appointment-banner"

export default function DienstenPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[300px] w-full">
        <Image src="/images/hero-bg.jpg" alt="Tandheelkundige diensten" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-primary/70">
          <div className="container h-full flex flex-col justify-center">
            <div className="max-w-lg space-y-4 text-white">
              <h1 className="text-3xl md:text-4xl font-bold">Onze Diensten</h1>
              <p className="text-lg">
                Bij Tandarts Swaelens bieden we een breed scala aan tandheelkundige behandelingen om uw mondgezondheid
                te behouden en te verbeteren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid gap-12">
            {/* Service 1 */}
            <div id="preventie" className="grid md:grid-cols-2 gap-8 items-center scroll-mt-20">
              <div className="order-2 md:order-1">
                <Card>
                  <CardHeader>
                    <Tooth className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Preventie</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Preventieve tandheelkunde is gericht op het voorkomen van tandheelkundige problemen voordat ze
                      ontstaan. Bij Tandarts Swaelens leggen we grote nadruk op preventie als basis voor een gezond
                      gebit.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Regelmatige controles en professionele reinigingen</li>
                      <li>Tandplak- en tandsteenverwijdering</li>
                      <li>Fluoridebehandelingen</li>
                      <li>Advies over mondhygiëne thuis</li>
                      <li>Preventieve verzegeling van groeven (fissuurverzegeling)</li>
                    </ul>
                    <p>
                      Door regelmatige preventieve zorg kunnen we veel tandheelkundige problemen voorkomen en uw
                      natuurlijke tanden zo lang mogelijk behouden.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden order-1 md:order-2">
                <Image src="/images/intro1.png" alt="Preventieve tandheelkunde" fill className="object-cover" />
              </div>
            </div>

            {/* Service 2 */}
            <div id="vullingen" className="grid md:grid-cols-2 gap-8 items-center scroll-mt-20">
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image src="/images/intro2.png" alt="Vullingen" fill className="object-cover" />
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <Smile className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Vullingen</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Wanneer een tand beschadigd is door tandbederf (cariës), kan een vulling nodig zijn om de tand te
                      herstellen. Bij Tandarts Swaelens gebruiken we hoogwaardige materialen voor duurzame en
                      esthetische vullingen.
                    </p>
                    <p>Onze vullingen omvatten:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Composietvullingen (tandkleurig materiaal)</li>
                      <li>Inlays en onlays voor grotere restauraties</li>
                      <li>Vervanging van oude amalgaamvullingen</li>
                      <li>Behandeling van gevoelige tanden</li>
                    </ul>
                    <p>
                      We streven ernaar om vullingen zo onopvallend mogelijk te maken, zodat uw glimlach natuurlijk
                      blijft.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Service 3 */}
            <div id="kindertandheelkunde" className="grid md:grid-cols-2 gap-8 items-center scroll-mt-20">
              <div className="order-2 md:order-1">
                <Card>
                  <CardHeader>
                    <Sparkles className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Kindertandheelkunde</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Bij Tandarts Swaelens besteden we speciale aandacht aan de tandheelkundige zorg voor kinderen. We
                      maken van tandartsbezoeken een positieve ervaring en leggen de basis voor een levenslange goede
                      mondgezondheid.
                    </p>
                    <p>Onze kindertandheelkunde omvat:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Kindvriendelijke eerste bezoeken en gewenning</li>
                      <li>Preventieve behandelingen zoals fissuurverzegeling</li>
                      <li>Fluoridebehandelingen</li>
                      <li>Behandeling van melktanden</li>
                      <li>Educatie over goede mondhygiëne voor kinderen en ouders</li>
                    </ul>
                    <p>We creëren een veilige en comfortabele omgeving waar kinderen zich op hun gemak voelen.</p>
                  </CardContent>
                </Card>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden order-1 md:order-2">
                <Image src="/images/intro3.jpg" alt="Kindertandheelkunde" fill className="object-cover" />
              </div>
            </div>

            {/* Service 4 */}
            <div id="orthodontie" className="grid md:grid-cols-2 gap-8 items-center scroll-mt-20">
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image src="/images/intro4.jpg" alt="Orthodontie" fill className="object-cover" />
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <Stethoscope className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Orthodontie</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Orthodontische behandelingen helpen bij het corrigeren van scheve tanden en kaakproblemen, wat
                      niet alleen de esthetiek verbetert maar ook de mondgezondheid.
                    </p>
                    <p>Onze orthodontische diensten omvatten:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Uitgebreide orthodontische evaluatie</li>
                      <li>Traditionele beugels</li>
                      <li>Transparante aligners</li>
                      <li>Retainers na de behandeling</li>
                      <li>Behandeling voor zowel kinderen als volwassenen</li>
                    </ul>
                    <p>
                      We werken samen met u om de beste orthodontische oplossing te vinden die past bij uw behoeften en
                      levensstijl.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Service 5 */}
            <div id="esthetische-tandheelkunde" className="grid md:grid-cols-2 gap-8 items-center scroll-mt-20">
              <div className="order-2 md:order-1">
                <Card>
                  <CardHeader>
                    <Sparkles className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Esthetische tandheelkunde</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Esthetische tandheelkunde richt zich op het verbeteren van het uiterlijk van uw glimlach. Bij
                      Tandarts Swaelens bieden we verschillende behandelingen om uw glimlach mooier te maken.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Professioneel tanden bleken</li>
                      <li>Facings en veneers</li>
                      <li>Esthetische vullingen</li>
                      <li>Vormcorrecties</li>
                      <li>Glimlachontwerp</li>
                    </ul>
                    <p>
                      We helpen u de stralende glimlach te krijgen die u verdient, met behoud van een natuurlijke
                      uitstraling.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden order-1 md:order-2">
                <Image src="/images/intro5.jpg" alt="Esthetische tandheelkunde" fill className="object-cover" />
              </div>
            </div>

            {/* Service 6 */}
            <div id="kroon-en-brugwerk" className="grid md:grid-cols-2 gap-8 items-center scroll-mt-20">
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image src="/images/intro6.jpg" alt="Kroon- en brugwerk" fill className="object-cover" />
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <Smile className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Kroon- en brugwerk</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Kronen en bruggen zijn restauratieve behandelingen die beschadigde tanden herstellen of
                      ontbrekende tanden vervangen. Deze behandelingen verbeteren zowel de functie als het uiterlijk van
                      uw gebit.
                    </p>
                    <p>Ons kroon- en brugwerk omvat:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Porseleinen kronen voor beschadigde tanden</li>
                      <li>Bruggen om ontbrekende tanden te vervangen</li>
                      <li>Inlays en onlays voor gedeeltelijke restauraties</li>
                      <li>CAD/CAM technologie voor precisie en pasvorm</li>
                    </ul>
                    <p>We gebruiken hoogwaardige materialen die duurzaam zijn en er natuurlijk uitzien.</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Service 7 */}
            <div id="implantaten" className="grid md:grid-cols-2 gap-8 items-center scroll-mt-20">
              <div className="order-2 md:order-1">
                <Card>
                  <CardHeader>
                    <Sparkles className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Implantaten</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Tandimplantaten zijn een permanente oplossing voor ontbrekende tanden. Ze zien eruit en
                      functioneren als natuurlijke tanden, waardoor ze een uitstekende optie zijn voor tandvervanging.
                    </p>
                    <p>Onze implantaatbehandelingen omvatten:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Consultatie en planning met 3D-beeldvorming</li>
                      <li>Plaatsing van implantaten</li>
                      <li>Kronen op implantaten</li>
                      <li>Implantaatgedragen bruggen</li>
                      <li>Implantaatgedragen prothesen</li>
                    </ul>
                    <p>
                      Implantaten bieden een langdurige oplossing die uw kaakbot gezond houdt en uw gezichtsvorm
                      bewaart.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden order-1 md:order-2">
                <Image src="/images/intro7.jpg" alt="Implantaten" fill className="object-cover" />
              </div>
            </div>

            {/* Service 8 */}
            <div id="uitneembare-prothese" className="grid md:grid-cols-2 gap-8 items-center scroll-mt-20">
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <Image src="/images/intro8.jpg" alt="Uitneembare prothese" fill className="object-cover" />
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <Smile className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Uitneembare prothese</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Uitneembare prothesen zijn een oplossing voor patiënten die meerdere of alle tanden missen. Bij
                      Tandarts Swaelens bieden we verschillende soorten prothesen aan om aan uw behoeften te voldoen.
                    </p>
                    <p>Onze prothesediensten omvatten:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Volledige prothesen (kunstgebit)</li>
                      <li>Gedeeltelijke prothesen</li>
                      <li>Immediaat prothesen (direct na extractie)</li>
                      <li>Prothesen op implantaten</li>
                      <li>Reparatie en aanpassing van bestaande prothesen</li>
                    </ul>
                    <p>We zorgen ervoor dat uw prothese comfortabel zit, er natuurlijk uitziet en goed functioneert.</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Service 9 */}
            <div id="parodontologie" className="grid md:grid-cols-2 gap-8 items-center scroll-mt-20">
              <div className="order-2 md:order-1">
                <Card>
                  <CardHeader>
                    <Clock className="h-8 w-8 text-primary mb-2" />
                    <CardTitle>Parodontologie</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>
                      Parodontologie richt zich op de behandeling van tandvleesaandoeningen en het behoud van gezond
                      tandvlees. Gezond tandvlees is essentieel voor het behoud van uw tanden en uw algehele gezondheid.
                    </p>
                    <p>Onze parodontale behandelingen omvatten:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Diagnose van tandvleesaandoeningen</li>
                      <li>Professionele tandvleesreiniging (scaling en root planing)</li>
                      <li>Behandeling van tandvleesontsteking en -infectie</li>
                      <li>Chirurgische behandelingen indien nodig</li>
                      <li>Onderhoudsprogramma's voor parodontale gezondheid</li>
                    </ul>
                    <p>
                      We helpen u uw tandvlees gezond te houden om tandverlies te voorkomen en uw algehele gezondheid te
                      ondersteunen.
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="relative h-[300px] rounded-lg overflow-hidden order-1 md:order-2">
                <Image src="/images/intro9.jpg" alt="Parodontologie" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Section */}
      <section className="py-16 bg-primary/5">
        <div className="container">
          <div className="max-w-lg mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary">Maak een afspraak</h2>
              <p className="mt-2">
                Heeft u vragen over onze diensten of wilt u een afspraak maken? Neem contact met ons op.
              </p>
            </div>
            <AppointmentBanner />
          </div>
        </div>
      </section>
    </div>
  )
}
