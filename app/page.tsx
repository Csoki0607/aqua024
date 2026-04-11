import Image from "next/image"
import Link from "next/link"
import {
  Phone,
  Clock,
  Shield,
  Zap,
  Wrench,
  Droplets,
  AlertTriangle,
  CheckCircle,
  MapPin,
  Star
} from "lucide-react"
import { CTASection } from "@/components/cta-section"

import { PhoneLink } from "@/components/phone-link"

const PHONE_NUMBER = "+36305988450"
const PHONE_DISPLAY = "+36 30 598 8450"

const trustFeatures = [
  {
    icon: Clock,
    title: "0-24 Elérhetőség",
    description: "Éjjel-nappal, hétvégén és ünnepnapokon is azonnal indulunk, ha baj van."
  },
  {
    icon: Zap,
    title: "1-2 Óra Kiszállás",
    description: "Budapest és 60 km-es körzetében garantáljuk a gyors megérkezést."
  },
  {
    icon: Shield,
    title: "Garanciális Munkavégzés",
    description: "Minden elvégzett munkánkra hosszú távú, megbízható garanciát vállalunk."
  },
  {
    icon: Wrench,
    title: "15+ Év Tapasztalat",
    description: "Profi szakemberek, akik a legmodern technológiákkal dolgoznak."
  }
]

const services = [
  {
    title: "Vízszerelő 0-24",
    description: "Sürgős esetek azonnali kezelése és tervezett munkálatok precíz kivitelezése.",
    href: "/vizszerelo-0-24",
    icon: Droplets
  },
  {
    title: "Csőtörés elhárítás",
    description: "Azonnali beavatkozás vízszivárgás esetén. Műszeres, roncsolásmentes bemérés.",
    href: "/csotores-elharitas",
    icon: AlertTriangle
  },
  {
    title: "Duguláselhárítás",
    description: "Elmulasztjuk a dugulást WC-ben, mosogatóban professzionális spirálgépekkel.",
    href: "/dugulaselharitas",
    icon: Wrench
  }
]

const problemSituations = [
  {
    title: "Elázott a lakás?",
    description: "Csőtörés, szivárgás esetén azonnal indulunk. Minimalizáljuk a vízkárt modern eszközökkel.",
    image: "/images/water-damage.jpg"
  },
  {
    title: "Nem folyik le a víz?",
    description: "Dugulások gyors elhárítása falbontás nélkül, tisztán és hatékonyan.",
    image: "/images/drain-cleaning.jpg"
  },
  {
    title: "Nincs meleg víz?",
    description: "Bojler, kazán hibák javítása, gyors cseréje szakszerűen és biztonságosan.",
    image: "/images/pipe-burst.jpg"
  }
]

const testimonials = [
  {
    name: "Kovács Péter",
    location: "Budapest, XIII. kerület",
    text: "Éjjel 2-kor csőtörés volt nálunk. 1 órán belül itt voltak és gyorsan megoldották. Rendkívül profi és tiszta munka!",
    rating: 5
  },
  {
    name: "Nagy Éva",
    location: "Budaörs",
    text: "A WC dugulást 30 perc alatt maradéktalanul megoldották. Kedvesek és precízek voltak. Jó szívvel ajánlom őket!",
    rating: 5
  },
  {
    name: "Szabó András",
    location: "Budapest, II. kerület",
    text: "Több céget hívtam már, de ők a legmegbízhatóbbak. Pontosan érkeznek és korrekt, fix áron dolgoznak.",
    rating: 5
  }
]

const serviceAreas = [
  "Budapest (I-XXIII. kerület)",
  "Budaörs",
  "Érd",
  "Törökbálint",
  "Szentendre",
  "Dunakeszi",
  "Vác",
  "Gödöllő",
  "Vecsés",
  "Gyál",
  "Szigetszentmiklós",
  "Százhalombatta"
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Premium Glassmorphism */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-primary">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-plumber.avif"
            alt="Vízszerelő munka közben"
            fill
            className="object-cover opacity-30"
            priority
          />
          {/* Gradient Overlay for premium feel */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-2xl rounded-3xl border border-white/10 bg-background/5 p-8 shadow-2xl backdrop-blur-md sm:p-12">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-2 text-xs font-bold uppercase tracking-widest text-secondary sm:text-sm">
              <Clock className="h-4 w-4" />
              Megbízható 0-24 Szolgáltatás
            </div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-white lg:text-6xl leading-tight text-balance">
              Vízszerelés<br />
              Szakértelemmel,<br />
              <span className="text-secondary">Kompromisszumok Nélkül.</span>
            </h1>
            <p className="mb-10 text-lg font-light leading-relaxed text-white/90 sm:text-xl">
              Professzionális segítségnyújtás 1-2 órán belül Budapest és környékén.
              <br />
              <strong className="font-semibold text-white">Éjjel-nappal, hétvégén és ünnepnapokon is!</strong>
            </p>

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <PhoneLink
                href={`tel:${PHONE_NUMBER}`}
                className="animate-pulse-glow inline-flex items-center justify-center gap-3 rounded-2xl bg-secondary px-8 py-4 text-xl font-bold text-primary transition-all hover:-translate-y-1 hover:bg-white hover:text-primary hover:shadow-[0_0_30px_rgba(14,165,233,0.5)]"
              >
                <Phone className="h-6 w-6" />
                {PHONE_DISPLAY}
              </PhoneLink>
              <span className="text-base font-medium text-white/80">
                Hívjon bátran - Ingyenes tanácsadás
              </span>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm font-medium text-white/90">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span>Fix, korrekt árak</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span>Gyors kiszállás</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <span>Falbontás nélkül</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Features - Floating Cards */}
      <section className="relative bg-slate-50 py-20 lg:py-28">
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="relative z-10 mx-auto -mt-36 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trustFeatures.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-3xl border border-slate-100 bg-card p-8 text-center shadow-xl shadow-primary/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 transition-colors group-hover:bg-secondary/10">
                  <feature.icon className="h-8 w-8 text-primary transition-transform group-hover:scale-110 group-hover:text-secondary" />
                </div>
                <h3 className="mb-3 text-xl font-bold text-foreground">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview - Modern List */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-secondary">Mit Kínálunk?</span>
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-foreground lg:text-5xl">
              Prémium Vízszerelési Szolgáltatások
            </h2>
            <p className="text-lg font-light leading-relaxed text-muted-foreground">
              Komplett megoldások modern eszközökkel, a leggyorsabb kiszállással és teljeskörű garanciával. Nem ismerünk lehetetlent.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-100 bg-card p-8 transition-all hover:-translate-y-1 hover:border-secondary/30 hover:shadow-2xl"
              >
                <div className="absolute right-0 top-0 p-8 opacity-5">
                  <service.icon className="h-32 w-32 rotate-12 text-primary transition-transform group-hover:rotate-0 group-hover:scale-110" />
                </div>
                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-foreground transition-colors group-hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="mb-8 font-light leading-relaxed text-muted-foreground">{service.description}</p>
                </div>
                <div className="relative z-10 mt-auto">
                  <span className="inline-flex items-center text-sm font-bold uppercase tracking-wider text-secondary transition-colors group-hover:text-primary">
                    Részletek &rarr;
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Situations - Immersive Grid */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-secondary">Gyakori Vészhelyzetek</span>
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-foreground lg:text-5xl">
              Ezekkel a problémákkal küzd?
            </h2>
            <p className="text-lg font-light leading-relaxed text-muted-foreground">
              Ne várjon, a víz nagy úr! Hívjon minket azonnal, és szakszerűen megoldjuk a bajt.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {problemSituations.map((situation) => (
              <div
                key={situation.title}
                className="group flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-card shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={situation.image}
                    alt={situation.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/10 transition-opacity group-hover:opacity-0" />
                </div>
                <div className="flex flex-grow flex-col p-8">
                  <h3 className="mb-3 text-xl font-bold text-foreground">
                    {situation.title}
                  </h3>
                  <p className="mb-6 flex-grow font-light text-muted-foreground">{situation.description}</p>
                  <PhoneLink
                    href={`tel:${PHONE_NUMBER}`}
                    className="inline-flex items-center gap-2 font-bold text-secondary transition-colors hover:text-primary"
                  >
                    <Phone className="h-5 w-5" />
                    Azonnali Segítség Kérése
                  </PhoneLink>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Primary CTA */}
      <CTASection
        title="Gyors beavatkozásra van szükség?"
        subtitle="Szakembereink azonnal indulnak Budapesten és vonzáskörzetében."
        variant="urgent"
      />

      {/* SEO / Content Section - Clean & Modern Cards */}
      <section className="bg-background py-20 lg:py-28 relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-12 lg:p-16">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-6 text-balance text-3xl font-extrabold tracking-tight text-foreground lg:text-4xl">
                Vízszerelés felsőfokon - Kompromisszumok nélkül
              </h2>
              <div className="mx-auto h-1 w-20 rounded-full bg-secondary" />
            </div>

            <div className="space-y-6 text-lg font-light leading-relaxed text-muted-foreground">
              <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
                <p className="mb-4">
                  Amikor a vízvezetékhálózat cserbenhagyja, egy profi és megbízható <strong>vízszerelőre</strong> van szüksége. Az <strong className="font-bold text-primary">Aqua024</strong> csapata pontosan ezt nyújtja: gyors, precíz és tiszta munkavégzést, 0-24 órás elérhetőséggel.
                </p>
                <p>
                  Számunkra nincs túl kicsi vagy túl nagy probléma – a csapcsöpögéstől kezdve a komplett hálózatcseréig mindent magas szinten látunk el. Számoljon le a váratlan meglepetésekkel!
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-foreground">
                    <Wrench className="h-6 w-6 text-secondary" />
                    Modern Diagnosztika
                  </h3>
                  <p>
                    Rendelkezünk a legkorszerűbb diagnosztikai eszközökkel, mint a <strong>kamerás csővizsgálat</strong> és a bontás nélküli <strong>csőtörés bemérés</strong> technológia.
                  </p>
                  <p className="mt-5">
                    Ezzel a megoldással jelentős <strong className="rounded bg-secondary/10 px-2 py-1 text-primary">időt és felesleges költséget</strong> takarítunk meg Önnek.
                  </p>
                </div>

                <div className="flex flex-col justify-center rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-foreground">
                    <Shield className="h-6 w-6 text-secondary" />
                    Prémium Minőség
                  </h3>
                  <p className="mb-6">
                    Válassza a biztonságot és a tartós eredményt! Szakértelmünk garantálja a tökéletesen működő otthont.
                  </p>
                  <div className="mt-auto flex flex-col gap-3 sm:flex-row">
                    <Link href="/vizszerelo-0-24" className="inline-flex items-center text-sm font-bold text-secondary transition-colors hover:text-primary hover:underline">
                      &rarr; Non-stop vízszerelő
                    </Link>
                    <Link href="/dugulaselharitas" className="inline-flex items-center text-sm font-bold text-secondary transition-colors hover:text-primary hover:underline">
                      &rarr; Duguláselhárítás
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Areas */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex flex-col items-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10">
              <MapPin className="h-8 w-8 text-secondary" />
            </div>
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground lg:text-5xl">
              Hol szolgáltatunk?
            </h2>
            <p className="mx-auto max-w-2xl text-lg font-light text-muted-foreground">
              Budapest egész területén és 60 km-es vonzáskörzetében azonnal állunk rendelkezésére.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {serviceAreas.map((area) => (
              <div
                key={area}
                className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-card p-5 shadow-sm transition-colors hover:border-secondary/30 hover:shadow-md"
              >
                <CheckCircle className="h-6 w-6 shrink-0 text-secondary" />
                <span className="font-semibold text-foreground">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Elevated */}
      <section className="relative overflow-hidden bg-background py-20 lg:py-28">
        <div className="pointer-events-none absolute right-0 top-0 h-[600px] w-1/3 translate-x-1/3 -translate-y-1/2 rounded-full bg-secondary/5 blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="mb-3 block text-sm font-bold uppercase tracking-widest text-secondary">Kiválóság</span>
            <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-foreground lg:text-5xl">
              Ügyfeleink véleménye
            </h2>
            <p className="text-lg font-light text-muted-foreground">
              Büszkék vagyunk az elvégzett munkáinkra és az elégedett megrendelőinkre.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="relative rounded-3xl border border-slate-100 bg-card p-8 shadow-lg transition-transform hover:-translate-y-1"
              >
                <div className="mb-6 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="mb-8 font-light italic leading-relaxed text-foreground">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-xl font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Soft CTA */}
      <CTASection
        title="Beszéljük meg a részleteket!"
        subtitle="Ingyenes első konzultáció biztosítása telefonon."
        variant="secondary"
      />
    </>
  )
}
