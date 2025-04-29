import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Frown, Home, ArrowLeft, Phone } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] py-16 px-4 text-center">
      <div className="max-w-md mx-auto">
        {/* Animatie voor de 404 */}
        <div className="relative mb-8">
          <div className="text-9xl font-bold text-primary/20 select-none">404</div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce">
            <Frown className="h-24 w-24 text-primary" />
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-4 text-primary">Oeps! Pagina niet gevonden</h1>

        <p className="mb-8 text-lg">
          Het lijkt erop dat u een verkeerde afslag heeft genomen. De pagina die u zoekt bestaat niet of is verplaatst.
        </p>

        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="group">
              <Link href="/" className="flex items-center">
                <Home className="mr-2 h-4 w-4" />
                Terug naar homepage
              </Link>
            </Button>

            <Button asChild variant="outline">
              <Link href="/contact" className="flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                Contact opnemen
              </Link>
            </Button>
          </div>

          <Button asChild variant="link" className="text-primary">
            <Link href="javascript:history.back()" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Ga terug naar vorige pagina
            </Link>
          </Button>
        </div>

        <div className="mt-12 p-6 bg-primary/5 rounded-lg border border-primary/10">
          <h2 className="text-lg font-medium mb-2">Misschien bent u op zoek naar:</h2>
          <ul className="space-y-2">
            <li>
              <Link href="/diensten" className="text-primary hover:underline">
                Onze tandheelkundige diensten
              </Link>
            </li>
            <li>
              <Link href="/team" className="text-primary hover:underline">
                Ons team
              </Link>
            </li>
            <li>
              <Link href="/afspraak" className="text-primary hover:underline">
                Een afspraak maken
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-primary hover:underline">
                Contactgegevens
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
