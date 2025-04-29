import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container grid gap-8 md:grid-cols-3">
        <div className="space-y-4">
          <h3 className="text-lg font-bold">Tandarts Swaelens</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 mr-2 text-primary shrink-0" />
              <a
                href="https://maps.google.com/?q=Kortrijksesteenweg+215,+9000+Gent"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Kortrijksesteenweg 215, 9000 Gent
              </a>
            </div>
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2 text-primary shrink-0" />
              <a href="tel:092221213" className="hover:underline">
                09 222 12 13
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2 text-primary shrink-0" />
              <a href="mailto:info@tandartsswaelens.be" className="hover:underline">
                info@tandartsswaelens.be
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold">Telefonische Openingsuren</h3>
          <div className="space-y-2 text-sm">
            <div className="flex items-start">
              <Clock className="h-5 w-5 mr-2 text-primary shrink-0" />
              <div>
                <p className="font-medium">Open:</p>
                <p>Maandag, woensdag & vrijdag</p>
                <p>09:00–13:00 & 14:00–18:00</p>
              </div>
            </div>
            <div className="flex items-start pt-2">
              <div className="h-5 w-5 mr-2 shrink-0"></div>
              <div>
                <p className="font-medium">Gesloten:</p>
                <p>Dinsdag, donderdag, zaterdag, zondag</p>
                <p>en feestdagen</p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold">Snelle Links</h3>
          <nav className="flex flex-col space-y-2 text-sm">
            <Link href="/" className="hover:underline hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/diensten" className="hover:underline hover:text-primary transition-colors">
              Diensten
            </Link>
            <Link href="/team" className="hover:underline hover:text-primary transition-colors">
              Team
            </Link>
            <Link href="/contact" className="hover:underline hover:text-primary transition-colors">
              Contact
            </Link>
            <Link href="/afspraak" className="hover:underline hover:text-primary transition-colors">
              Maak een afspraak
            </Link>
          </nav>
        </div>
      </div>

      <div className="container mt-8 pt-8 border-t">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Tandarts Swaelens. Alle rechten voorbehouden.
        </p>
      </div>
    </footer>
  )
}
