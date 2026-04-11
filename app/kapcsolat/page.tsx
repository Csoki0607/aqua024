import type { Metadata } from "next"
import Link from "next/link"
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  ChevronRight,
  CheckCircle,
  MessageSquare
} from "lucide-react"
import { CTASection } from "@/components/cta-section"
import { PhoneLink } from "@/components/phone-link"

export const metadata: Metadata = {
  title: "Kapcsolat - Aqua024 Vízszerelő Budapest",
  description: "Lépjen kapcsolatba velünk! Vízszerelő szolgáltatás Budapesten és 60 km-es körzetben. Telefon: +36 30 598 8450. 0-24 órás elérhetőség.",
}

const PHONE_NUMBER = "+36305988450"
const PHONE_DISPLAY = "+36 30 598 8450"
const EMAIL = "aqva.info@gmail.com"

const contactMethods = [
  {
    icon: Phone,
    title: "Telefon",
    description: "A leggyorsabb módja, hogy elérjen minket. 0-24 órában fogadjuk hívását.",
    action: `tel:${PHONE_NUMBER}`,
    actionText: PHONE_DISPLAY,
    primary: true
  },
  {
    icon: MessageSquare,
    title: "SMS",
    description: "Ha nem tud telefonálni, küldjön SMS-t és visszahívjuk.",
    action: `sms:${PHONE_NUMBER}`,
    actionText: "SMS küldése",
    primary: false
  },
  {
    icon: Mail,
    title: "E-mail",
    description: "Nem sürgős kérdésekre e-mailben is válaszolunk.",
    action: `mailto:${EMAIL}`,
    actionText: EMAIL,
    primary: false
  }
]

const serviceAreas = [
  {
    region: "Budapest",
    areas: [
      "I. kerület (Várnegyed)",
      "II. kerület (Rózsadomb)",
      "III. kerület (Óbuda)",
      "IV. kerület (Újpest)",
      "V. kerület (Belváros)",
      "VI. kerület (Terézváros)",
      "VII. kerület (Erzsébetváros)",
      "VIII. kerület (Józsefváros)",
      "IX. kerület (Ferencváros)",
      "X. kerület (Kőbánya)",
      "XI. kerület (Újbuda)",
      "XII. kerület (Hegyvidék)",
      "XIII. kerület (Angyalföld)",
      "XIV. kerület (Zugló)",
      "XV. kerület (Rákospalota)",
      "XVI. kerület (Árpádföld)",
      "XVII. kerület (Rákosmente)",
      "XVIII. kerület (Pestszentlőrinc)",
      "XIX. kerület (Kispest)",
      "XX. kerület (Pesterzsébet)",
      "XXI. kerület (Csepel)",
      "XXII. kerület (Budafok)",
      "XXIII. kerület (Soroksár)"
    ]
  },
  {
    region: "Pest megye",
    areas: [
      "Budaörs",
      "Érd",
      "Törökbálint",
      "Budakeszi",
      "Szentendre",
      "Dunakeszi",
      "Fót",
      "Göd",
      "Vác",
      "Gödöllő",
      "Vecsés",
      "Gyál",
      "Szigetszentmiklós",
      "Százhalombatta",
      "Dunaharaszti",
      "Taksony"
    ]
  }
]

const openingHours = [
  { day: "Hétfő - Péntek", hours: "0-24" },
  { day: "Szombat", hours: "0-24" },
  { day: "Vasárnap", hours: "0-24" },
  { day: "Ünnepnapok", hours: "0-24" }
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex min-h-screen items-center bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 flex items-center gap-2 text-sm text-primary-foreground/70">
            <Link href="/" className="hover:text-primary-foreground">Főoldal</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Kapcsolat</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-5xl">
              Lépjen velünk<br />
              <span className="text-secondary">kapcsolatba</span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Vízszerelési problémája van? Hívjon minket bármikor - 0-24 órában
              rendelkezésre állunk Budapesten és 60 km-es körzetében.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="bg-card py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
              Hogyan érhet el minket?
            </h2>
            <p className="text-lg text-muted-foreground">
              Válassza az Önnek legmegfelelőbb kapcsolatfelvételi módot
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {contactMethods.map((method) => (
              <div
                key={method.title}
                className={`rounded-xl border p-6 ${method.primary
                  ? "border-accent bg-accent/5"
                  : "border-border bg-background"
                  }`}
              >
                <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-full ${method.primary ? "bg-accent" : "bg-secondary/10"
                  }`}>
                  <method.icon className={`h-7 w-7 ${method.primary ? "text-accent-foreground" : "text-secondary"
                    }`} />
                </div>
                <h3 className="mb-2 text-xl font-bold text-foreground">{method.title}</h3>
                <p className="mb-4 text-muted-foreground">{method.description}</p>
                <PhoneLink
                  href={method.action}
                  className={`inline-flex items-center gap-2 rounded-lg px-6 py-3 font-bold transition-transform hover:scale-105 ${method.primary
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-secondary-foreground"
                    }`}
                >
                  {method.actionText}
                </PhoneLink>
                {method.primary && (
                  <p className="mt-3 text-sm text-secondary font-medium">
                    Sürgős esetben ez a leggyorsabb!
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opening Hours */}
      <section className="bg-background py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 flex items-center gap-2 text-3xl font-bold text-foreground lg:text-4xl">
                <Clock className="h-8 w-8 text-secondary" />
                Nyitvatartás
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                0-24 órában elérhetőek vagyunk, az év minden napján.
                Nincs ügyelet, nincs várakozás - azonnal felvesszük a telefont.
              </p>
              <div className="rounded-xl border border-border bg-card">
                {openingHours.map((item, index) => (
                  <div
                    key={item.day}
                    className={`flex items-center justify-between p-4 ${index !== openingHours.length - 1 ? "border-b border-border" : ""
                      }`}
                  >
                    <span className="font-medium text-card-foreground">{item.day}</span>
                    <span className="rounded-full bg-secondary/10 px-4 py-1 font-bold text-secondary">
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground lg:text-4xl">
                Fontos tudnivalók
              </h2>
              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3 rounded-lg bg-muted p-4">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <strong className="text-foreground">Telefonos árajánlat</strong>
                    <p className="text-sm text-muted-foreground">
                      Már telefonon is adunk előzetes tájékoztatást az árakról.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg bg-muted p-4">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <strong className="text-foreground">Nincs kiszállási díj meglepetés</strong>
                    <p className="text-sm text-muted-foreground">
                      A kiszállási díjat előre közöljük, nem éri meglepetés.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg bg-muted p-4">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <strong className="text-foreground">Fix árak</strong>
                    <p className="text-sm text-muted-foreground">
                      Munkadíjaink fixek, nincsenek rejtett költségek.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg bg-muted p-4">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <strong className="text-foreground">Számla</strong>
                    <p className="text-sm text-muted-foreground">
                      Minden munkáról számlát adunk, kérésre ÁFÁ-s számlát is.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="bg-muted py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-4 flex items-center justify-center gap-2 text-3xl font-bold text-foreground lg:text-4xl">
              <MapPin className="h-8 w-8 text-secondary" />
              Szolgáltatási terület
            </h2>
            <p className="text-lg text-muted-foreground">
              Budapest és 60 km-es körzet
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {serviceAreas.map((region) => (
              <div key={region.region} className="rounded-xl bg-card p-6 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-card-foreground">{region.region}</h3>
                <div className="grid grid-cols-2 gap-2">
                  {region.areas.map((area) => (
                    <div key={area} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="h-4 w-4 shrink-0 text-secondary" />
                      <span className="text-muted-foreground">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 text-center text-muted-foreground">
            Nem találja a települését? Hívjon minket és egyeztetünk!
            A 60 km-es körzetből is szívesen kiszállunk.
          </p>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="bg-background py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-xl border border-border bg-muted">
            <div className="flex h-80 items-center justify-center">
              <div className="text-center">
                <MapPin className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                <p className="text-lg font-medium text-muted-foreground">
                  Budapest és 60 km-es körzet
                </p>
                <p className="text-sm text-muted-foreground">
                  Gyors kiszállással a főváros egész területén
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Hívjon most!"
        subtitle="0-24 órában elérhetőek vagyunk. Azonnal segítünk!"
        variant="urgent"
      />
    </>
  )
}
