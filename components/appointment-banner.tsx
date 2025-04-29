import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function AppointmentBanner() {
  return (
    <div className="space-y-4">
      <Alert className="border-primary/20 bg-primary/5">
        <AlertCircle className="h-4 w-4 text-primary" />
        <AlertDescription>
          Op dit moment kunnen alleen bestaande patiënten online een afspraak maken. Bent u nog geen patiënt? Neem dan
          telefonisch contact met ons op via{" "}
          <a href="tel:092221213" className="font-medium hover:underline text-primary">
            09 222 12 13
          </a>
          .
        </AlertDescription>
      </Alert>

      <Button asChild className="w-full button-dark-fix">
        <Link href="/afspraak" className="flex items-center justify-center">
          Maak een afspraak
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </Button>
    </div>
  )
}
