import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="flex items-start">
        <MapPin className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
        <div>
          <h3 className="font-medium">Adres</h3>
          <p>Kortrijksesteenweg 215, 9000 Gent</p>
        </div>
      </div>

      <div className="flex items-start">
        <Phone className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
        <div>
          <h3 className="font-medium">Telefoon</h3>
          <a href="tel:092221213" className="hover:underline">
            09 222 12 13
          </a>
        </div>
      </div>

      <div className="flex items-start">
        <Mail className="h-5 w-5 mr-3 text-primary shrink-0 mt-0.5" />
        <div>
          <h3 className="font-medium">E-mail</h3>
          <a href="mailto:info@tandartsswaelens.be" className="hover:underline">
            info@tandartsswaelens.be
          </a>
        </div>
      </div>

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
  )
}
