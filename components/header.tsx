"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Phone, Menu, X, Droplets } from "lucide-react"
import { useState, useEffect, useRef } from "react"

const PHONE_NUMBER = "+36305988450"
const PHONE_DISPLAY = "+36 30 598 8450"

const navigation = [
  { name: "Főoldal", href: "/" },
  { name: "Vízszerelő 0-24", href: "/vizszerelo-0-24" },
  { name: "Csőtörés", href: "/csotores-elharitas" },
  { name: "Duguláselhárítás", href: "/dugulaselharitas" },
  { name: "Rólunk", href: "/rolunk" },
  { name: "Kapcsolat", href: "/kapcsolat" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)

  // Górgetés figyelése fejléc animációhoz
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Kattintás a menün kívül a mobilmenü bezárásához
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [mobileMenuOpen])

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 text-primary-foreground transition-all duration-300 ${
        isScrolled ? "bg-primary shadow-lg" : "bg-primary/95 shadow-none"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? "h-16 lg:h-16" : "h-16 lg:h-20"}`}>
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Droplets className="h-8 w-8 text-secondary" />
            <span className="text-xl font-bold tracking-tight lg:text-2xl">
              Aqua<span className="text-secondary"> 0-24</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:gap-6">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary-foreground ${
                    isActive
                      ? "text-primary-foreground font-bold border-b-2 border-secondary pb-1"
                      : "text-primary-foreground/90"
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Phone CTA */}
          <div className="flex items-center gap-4">
            <a
              href={`tel:${PHONE_NUMBER}`}
              onClick={(e) => {
                e.preventDefault();
                if (typeof window.gtag_report_conversion === 'function') {
                  window.gtag_report_conversion(`tel:${PHONE_NUMBER}`);
                } else {
                  window.location.href = `tel:${PHONE_NUMBER}`;
                }
              }}
              className="hidden items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-bold text-accent-foreground transition-transform hover:scale-105 sm:flex lg:px-6 lg:py-3 lg:text-base"
            >
              <Phone className="h-4 w-4 lg:h-5 lg:w-5" />
              <span className="hidden md:inline">{PHONE_DISPLAY}</span>
              <span className="md:hidden">Hívás</span>
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Menü bezárása" : "Menü megnyitása"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`grid transition-all duration-300 ease-in-out lg:hidden ${
            mobileMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <nav className="overflow-hidden">
            <div className="flex flex-col gap-2 border-t border-primary-foreground/20 py-4">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? "bg-secondary text-secondary-foreground"
                        : "hover:bg-primary-foreground/10 text-primary-foreground/90"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <a
                href={`tel:${PHONE_NUMBER}`}
                onClick={(e) => {
                  e.preventDefault();
                  if (typeof window.gtag_report_conversion === 'function') {
                    window.gtag_report_conversion(`tel:${PHONE_NUMBER}`);
                  } else {
                    window.location.href = `tel:${PHONE_NUMBER}`;
                  }
                }}
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3 text-base font-bold text-accent-foreground"
              >
                <Phone className="h-5 w-5" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
