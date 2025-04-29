"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "next-themes"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme } = useTheme()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="Tandarts Swaelens Logo"
              width={160}
              height={50}
              className={cn("h-auto w-auto", theme === "dark" ? "brightness-0 invert" : "")}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/diensten" className="text-sm font-medium transition-colors hover:text-primary">
            Diensten
          </Link>
          <Link href="/team" className="text-sm font-medium transition-colors hover:text-primary">
            Team
          </Link>
          <Link href="/contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
          <ThemeToggle />
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/afspraak">Maak een afspraak</Link>
          </Button>
        </nav>

        {/* Mobile Call Button */}
        <div className="flex md:hidden items-center gap-4">
          <ThemeToggle />
          <a href="tel:092221213" className="flex items-center text-primary">
            <Phone className="h-5 w-5 mr-2" />
            <span className="font-medium">09 222 12 13</span>
          </a>
          <Button variant="outline" size="icon" onClick={toggleMenu}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in md:hidden bg-background",
            isMenuOpen ? "slide-in-from-top-0" : "hidden",
          )}
        >
          <div className="relative z-20 grid gap-6 rounded-md bg-background p-4">
            <Button variant="outline" size="icon" className="absolute right-4 top-4" onClick={toggleMenu}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
            <nav className="grid grid-flow-row auto-rows-max text-sm">
              <Link
                href="/"
                className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/diensten"
                className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                onClick={toggleMenu}
              >
                Diensten
              </Link>
              <Link
                href="/team"
                className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                onClick={toggleMenu}
              >
                Team
              </Link>
              <Link
                href="/contact"
                className="flex w-full items-center rounded-md p-2 text-sm font-medium hover:underline"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Button asChild className="mt-4 bg-primary hover:bg-primary/90">
                <Link href="/afspraak" onClick={toggleMenu}>
                  Maak een afspraak
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
