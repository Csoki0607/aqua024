import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Droplets } from "lucide-react"

const PHONE_NUMBER = "+36305988450"
const PHONE_DISPLAY = "+36 30 598 8450"
const EMAIL = "aqva.info@gmail.com"

const services = [
  { name: "Vízszerelő 0-24", href: "/vizszerelo-0-24" },
  { name: "Csőtörés elhárítás", href: "/csotores-elharitas" },
  { name: "Duguláselhárítás", href: "/dugulaselharitas" },
]

const company = [
  { name: "Rólunk", href: "/rolunk" },
  { name: "Kapcsolat", href: "/kapcsolat" },
]

const serviceAreas = [
  "Budapest (minden kerület)",
  "Budaörs",
  "Érd",
  "Törökbálint",
  "Szentendre",
  "Dunakeszi",
  "Gödöllő",
  "Vecsés",
  "Gyál",
  "Szigetszentmiklós",
]

export function Footer() {
  return (
    <footer className="bg-primary pb-24 text-primary-foreground md:pb-8">
      {/* CTA Section */}
      <div className="bg-secondary py-8">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-secondary-foreground lg:text-3xl">
            Vészhelyzet van? Hívjon most!
          </h2>
          <p className="mb-6 text-secondary-foreground/90">
            0-24 órában, az év minden napján rendelkezésre állunk.
          </p>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-lg font-bold text-accent-foreground transition-transform hover:scale-105"
          >
            <Phone className="h-6 w-6" />
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>

      {/* Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="mb-4 flex items-center gap-2">
              <Droplets className="h-8 w-8 text-secondary" />
              <span className="text-xl font-bold">
                aqua<span className="text-secondary">024</span>.hu
              </span>
            </Link>
            <p className="mb-4 text-sm text-primary-foreground/80">
              Non-stop vízszerelő szolgáltatás Budapest és környékén.
              Gyors, megbízható, professzionális.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-2 hover:text-secondary">
                <Phone className="h-4 w-4" />
                {PHONE_DISPLAY}
              </a>
              <a href={`mailto:${EMAIL}`} className="flex items-center gap-2 hover:text-secondary">
                <Mail className="h-4 w-4" />
                {EMAIL}
              </a>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>0-24, Hétfő - Vasárnap</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Szolgáltatások</h3>
            <ul className="flex flex-col gap-2">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-secondary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Cégünk</h3>
            <ul className="flex flex-col gap-2">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-secondary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold">
              <MapPin className="h-5 w-5" />
              Szolgáltatási terület
            </h3>
            <ul className="flex flex-col gap-1 text-sm text-primary-foreground/80">
              {serviceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-primary-foreground/20 pt-8 sm:flex-row">
          <p className="text-center text-sm text-primary-foreground/60 sm:text-left">
            &copy; {new Date().getFullYear()} Aqua024. Minden jog fenntartva.
          </p>
          <a 
            href="https://www.meriondigital.hu" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-2 px-4 py-1.5 rounded-full bg-background/5 hover:bg-background/10 border border-transparent hover:border-background/10 transition-all duration-300"
          >
            <span className="text-xs text-background/40 group-hover:text-background/60 transition-colors">
              Weboldal készítés:
            </span>
            <div className="flex flex-col -space-y-[2px]">
              <span className="font-bold tracking-tight text-sm text-background/70 group-hover:text-background transition-colors">
                Merion
              </span>
              <span className="text-[10px] font-black tracking-[0.2em] text-secondary/80 group-hover:text-secondary transition-colors">
                DIGITAL
              </span>
            </div>
          </a>
        </div>
      </div>
    </footer>
  )
}
