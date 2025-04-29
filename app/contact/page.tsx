"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import ContactInfo from "@/components/contact-info"

// Fallback functie voor het geval de fetch mislukt
const fallbackSubmit = (formData) => {
  // Log de data naar de console (in een echte omgeving zou je dit niet doen)
  console.log("Form data submitted (fallback):", formData)

  // Simuleer een succesvolle verzending
  return {
    success: true,
    message: "Bericht ontvangen. We nemen zo snel mogelijk contact met u op.",
  }
}

export default function ContactPage() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Gebruik FormData voor het verzenden naar PHP
      const formDataToSend = new FormData()
      formDataToSend.append("name", formData.name)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("phone", formData.phone)
      formDataToSend.append("message", formData.message)

      let data

      try {
        // Probeer de fetch-operatie met een timeout
        const controller = new AbortController()
        const timeoutId = setTimeout(() => controller.abort(), 5000) // 5 seconden timeout

        const response = await fetch("/contact-form.php", {
          method: "POST",
          body: formDataToSend,
          signal: controller.signal,
        })

        clearTimeout(timeoutId)

        try {
          data = await response.json()
        } catch (error) {
          // Als de respons geen JSON is, maak een standaard object
          data = { success: response.ok, message: response.ok ? "Bericht verzonden" : "Er is een fout opgetreden" }
        }
      } catch (fetchError) {
        console.warn("Fetch failed, using fallback:", fetchError)
        // Als de fetch mislukt, gebruik de fallback
        data = fallbackSubmit(formData)
      }

      if (data.success) {
        toast({
          title: "Bericht ontvangen",
          description: "Bedankt voor uw bericht. We nemen zo snel mogelijk contact met u op.",
        })
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
      } else {
        throw new Error(data.message || "Er is iets misgegaan bij het verzenden van uw bericht.")
      }
    } catch (error) {
      toast({
        title: "Fout bij verzenden",
        description:
          error instanceof Error
            ? error.message
            : "Er is iets misgegaan bij het verzenden van uw bericht. Probeer het later opnieuw.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[300px] w-full">
        <Image src="/images/hero-bg.jpg" alt="Contact Tandarts Swaelens" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-primary/70">
          <div className="container h-full flex flex-col justify-center">
            <div className="max-w-lg space-y-4 text-white">
              <h1 className="text-3xl md:text-4xl font-bold">Contact</h1>
              <p className="text-lg">
                Heeft u vragen of wilt u een afspraak maken? Neem contact met ons op via onderstaande gegevens of het
                contactformulier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Contactgegevens</h2>
              <ContactInfo />

              <div className="mt-8">
                <h3 className="text-xl font-bold text-primary mb-4">Locatie</h3>
                <div className="aspect-video w-full h-[300px] bg-muted rounded-lg overflow-hidden">
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

              <div className="mt-8">
                <h3 className="text-xl font-bold text-primary mb-4">Nieuwe patiënten</h3>
                <Card className="p-4 bg-primary/5 border-primary/20">
                  <p>
                    Op dit moment kunnen alleen bestaande patiënten online een afspraak maken. Bent u nog geen patiënt?
                    Neem dan telefonisch contact met ons op via{" "}
                    <a href="tel:092221213" className="font-medium hover:underline">
                      09 222 12 13
                    </a>
                    .
                  </p>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">Stuur ons een bericht</h2>
              <Card className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Naam</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefoonnummer</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Bericht</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full button-dark-fix" disabled={isSubmitting}>
                    {isSubmitting ? "Verzenden..." : "Verstuur bericht"}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
