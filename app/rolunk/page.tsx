import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { 
  Phone, 
  Clock, 
  Shield, 
  CheckCircle,
  ChevronRight,
  Users,
  Award,
  Target,
  Wrench
} from "lucide-react"
import { CTASection } from "@/components/cta-section"

export const metadata: Metadata = {
  title: "Rólunk - Aqua024 Vízszerelő Szolgáltatás",
  description: "Ismerje meg az Aqua024 csapatát! 15+ év tapasztalat, 0-24 órás elérhetőség, megbízható vízszerelő szolgáltatás Budapesten és környékén.",
}

const PHONE_NUMBER = "+36209624606"
const PHONE_DISPLAY = "+36 20 962 4606"

const stats = [
  { value: "15+", label: "Év tapasztalat" },
  { value: "5000+", label: "Elégedett ügyfél" },
  { value: "0-24", label: "Órás elérhetőség" },
  { value: "60 km", label: "Szolgáltatási körzet" }
]

const values = [
  {
    icon: Clock,
    title: "Gyorsaság",
    description: "Tudjuk, hogy a vízszerelési problémák sürgősek. Ezért 1-2 órán belül a helyszínen vagyunk - éjjel-nappal."
  },
  {
    icon: Shield,
    title: "Megbízhatóság",
    description: "Amit mondunk, azt tartjuk. Fix árak, pontos érkezés, garancia minden munkára."
  },
  {
    icon: Award,
    title: "Szakértelem",
    description: "Folyamatosan képezzük magunkat, hogy a legmodernebb technikákkal dolgozhassunk."
  },
  {
    icon: Users,
    title: "Ügyfélközpontúság",
    description: "Az Ön elégedettsége a legfontosabb. Tisztán, precízen dolgozunk, és mindig segítőkészek vagyunk."
  }
]

const teamFeatures = [
  "Minden szerelőnk képzett szakember",
  "Rendszeres továbbképzések",
  "Modern eszközökkel felszerelt autók",
  "Tiszta, kulturált megjelenés",
  "Segítőkész, barátságos hozzáállás",
  "Magyar nyelvű kommunikáció"
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex min-h-screen items-center bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-6 flex items-center gap-2 text-sm text-primary-foreground/70">
            <Link href="/" className="hover:text-primary-foreground">Főoldal</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Rólunk</span>
          </nav>
          
          <div className="max-w-3xl">
            <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-5xl">
              Ismerje meg az<br />
              <span className="text-secondary">Aqua024 csapatát</span>
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Több mint 15 éve állunk ügyfeleink rendelkezésére Budapesten és környékén. 
              Célunk egyszerű: gyors, megbízható és szakszerű vízszerelő szolgáltatást 
              nyújtani - bármikor, amikor szüksége van ránk.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-card py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl font-bold text-secondary lg:text-5xl">{stat.value}</div>
                <div className="mt-2 text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-background py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground lg:text-4xl">
                Történetünk
              </h2>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Az Aqua024-et azzal a céllal hoztuk létre, hogy megoldjuk azt a problémát, 
                  amit mindannyian ismerünk: <strong>amikor baj van, nincs kit hívni</strong>. 
                  Hányszor fordult már elő, hogy hétvégén, ünnepnapon vagy éjszaka volt 
                  szüksége vízszerelőre, de senkit sem ért el?
                </p>
                <p>
                  Mi ezt akartuk megváltoztatni. 15 évvel ezelőtt elindítottuk a 
                  <strong> non-stop vízszerelő szolgáltatásunkat</strong>, és azóta is 
                  azon dolgozunk, hogy ügyfeleink sosem maradjanak egyedül a problémáikkal.
                </p>
                <p>
                  Ma már egy tapasztalt, jól összeszokott csapattal dolgozunk, akik 
                  elkötelezettek a minőségi munkavégzés iránt. Büszkék vagyunk arra, 
                  hogy ügyfeleink újra és újra minket választanak, és ajánlanak másoknak is.
                </p>
              </div>
            </div>
            <div className="relative h-80 overflow-hidden rounded-xl lg:h-96">
              <Image
                src="/images/hero-plumber.avif"
                alt="Az Aqua024 csapata"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
              Értékeink
            </h2>
            <p className="text-lg text-muted-foreground">
              Ezek az elvek vezérelnek minket minden nap
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-xl bg-card p-6 shadow-sm"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                  <value.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-card-foreground">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-background py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <div className="relative h-80 overflow-hidden rounded-xl lg:h-96">
                <Image
                  src="/images/drain-cleaning.jpg"
                  alt="Szakembereink munkában"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-6 text-3xl font-bold text-foreground lg:text-4xl">
                Csapatunk
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                A csapatunk gerincét tapasztalt vízszerelő szakemberek alkotják, 
                akik nem csak a szakmájukat értik, de az ügyfelekkel is tudnak 
                kommunikálni. Számunkra fontos, hogy ne csak a problémát oldjuk meg, 
                hanem az egész élmény pozitív legyen.
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {teamFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 shrink-0 text-secondary" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-secondary py-12 text-secondary-foreground lg:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Target className="mx-auto mb-4 h-12 w-12" />
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
            Küldetésünk
          </h2>
          <p className="text-lg text-secondary-foreground/90">
            Célunk, hogy Budapest és környékének legmegbízhatóbb vízszerelő szolgáltatása 
            legyünk. Azt akarjuk, hogy bármikor, amikor vízszerelési problémája adódik, 
            tudja: van kit hívni. Mi itt vagyunk - 0-24 órában, az év minden napján.
          </p>
        </div>
      </section>

      {/* Services Summary */}
      <section className="bg-card py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
              Szolgáltatásaink
            </h2>
            <p className="text-lg text-muted-foreground">
              Teljes körű vízszerelés, minden helyzetben
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Link
              href="/vizszerelo-0-24"
              className="group rounded-xl border border-border bg-background p-6 transition-all hover:border-secondary hover:shadow-md"
            >
              <Wrench className="mb-4 h-8 w-8 text-secondary" />
              <h3 className="mb-2 text-xl font-bold text-foreground group-hover:text-secondary">
                Vízszerelő 0-24
              </h3>
              <p className="text-muted-foreground">
                Non-stop vízszerelő szolgáltatás minden típusú feladatra.
              </p>
            </Link>
            <Link
              href="/csotores-elharitas"
              className="group rounded-xl border border-border bg-background p-6 transition-all hover:border-secondary hover:shadow-md"
            >
              <Wrench className="mb-4 h-8 w-8 text-secondary" />
              <h3 className="mb-2 text-xl font-bold text-foreground group-hover:text-secondary">
                Csőtörés elhárítás
              </h3>
              <p className="text-muted-foreground">
                Azonnali beavatkozás csőtörés és vízszivárgás esetén.
              </p>
            </Link>
            <Link
              href="/dugulaselharitas"
              className="group rounded-xl border border-border bg-background p-6 transition-all hover:border-secondary hover:shadow-md"
            >
              <Wrench className="mb-4 h-8 w-8 text-secondary" />
              <h3 className="mb-2 text-xl font-bold text-foreground group-hover:text-secondary">
                Duguláselhárítás
              </h3>
              <p className="text-muted-foreground">
                WC, lefolyó, csatorna dugulások gyors megszüntetése.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="Kérdése van? Hívjon minket!"
        subtitle="Szívesen válaszolunk bármilyen kérdésre."
        variant="primary"
      />
    </>
  )
}
