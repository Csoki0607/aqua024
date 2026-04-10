import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { 
  Phone, 
  Clock, 
  Shield, 
  Zap, 
  CheckCircle,
  Wrench,
  Droplets,
  AlertTriangle,
  ThermometerSun,
  Waves,
  ChevronRight
} from "lucide-react"
import { CTASection } from "@/components/cta-section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata: Metadata = {
  title: "Vízszerelő 0-24 Budapest - Non-stop Vízszerelő Azonnal",
  description: "Non-stop vízszerelő szolgáltatás Budapesten és környékén. 0-24 órában, hétvégén is. Csőtörés, dugulás, vízszivárgás - 1-2 órán belül ott vagyunk! Hívjon: +36 30 598 8450",
  keywords: ["vízszerelő", "vízszerelő 0-24", "nonstop vízszerelő", "vízszerelő azonnal", "Budapest", "éjjeli vízszerelő"],
}

const PHONE_NUMBER = "+36305988450"
const PHONE_DISPLAY = "+36 30 598 8450"

const services = [
  {
    icon: AlertTriangle,
    title: "Csőtörés javítás",
    description: "Azonnali beavatkozás csőtörés esetén, a további károk megelőzése érdekében."
  },
  {
    icon: Waves,
    title: "Duguláselhárítás",
    description: "WC, mosogató, lefolyó és csatorna dugulások gyors megszüntetése."
  },
  {
    icon: Droplets,
    title: "Vízszivárgás javítás",
    description: "Rejtett szivárgások felderítése és szakszerű javítása."
  },
  {
    icon: ThermometerSun,
    title: "Bojler és kazán javítás",
    description: "Melegvíz-szolgáltató berendezések szerelése, karbantartása."
  },
  {
    icon: Wrench,
    title: "Csaptelep szerelés",
    description: "Csaptelepek javítása, cseréje, új szerelvények beszerelése."
  },
  {
    icon: Shield,
    title: "Vízóra csere",
    description: "Vízórák cseréje, mellékvízmérők beszerelése."
  }
]

const emergencySituations = [
  {
    title: "Éjszaka eltört egy cső",
    description: "Hajnali 3-kor tört el a cső? Nem baj - 0-24 órában elérhetőek vagyunk és 1-2 órán belül a helyszínen leszünk, hogy megakadályozzuk a további károkat."
  },
  {
    title: "Hétvégén dugulás",
    description: "Szombaton vagy vasárnap dugult el a WC? Ne várjon hétfőig! Hétvégén is teljes kapacitással dolgozunk, hogy Ön ne maradjon probléma nélkül."
  },
  {
    title: "Ünnepnap alatt vízszivárgás",
    description: "Karácsonykor, húsvétkor sem marad egyedül. Ünnepnapokon is elérhetőek vagyunk, mert tudjuk, hogy a vízszerelési problémák nem várnak."
  },
  {
    title: "Nincs meleg víz reggel",
    description: "Épp zuhanyozna, de nincs meleg víz? Hívjon minket! Gyorsan diagnosztizáljuk és megoldjuk a bojler vagy kazán problémát."
  }
]

const processSteps = [
  {
    step: 1,
    title: "Hívás",
    description: "Hívja a +36 30 598 8450 számot és írja le a problémát."
  },
  {
    step: 2,
    title: "Egyeztetés",
    description: "Felmérjük a helyzetet és egyeztetjük a kiszállás időpontját."
  },
  {
    step: 3,
    title: "Kiszállás",
    description: "1-2 órán belül a helyszínen vagyunk a szükséges eszközökkel."
  },
  {
    step: 4,
    title: "Javítás",
    description: "Gyors, szakszerű javítás, garanciával."
  }
]

const whyChooseUs = [
  "15+ év szakmai tapasztalat",
  "0-24 órás elérhetőség, hétvégén is",
  "1-2 órás kiszállási idő Budapesten",
  "Fix, előre közölt árak",
  "Garancia minden munkára",
  "Modern eszközök és technológiák",
  "Tiszta, precíz munkavégzés",
  "Barátságos, segítőkész szerelők"
]

const faqs = [
  {
    question: "Mennyibe kerül a kiszállás?",
    answer: "A kiszállási díj Budapest területén egységes, és már tartalmazza az alapvető diagnosztikát is. Pontos árat telefonon egyeztetünk, hogy ne érjék meglepetések."
  },
  {
    question: "Tényleg 0-24 órában elérhetőek?",
    answer: "Igen, valóban éjjel-nappal dolgozunk. Hajnalban, hétvégén, ünnepnapokon is hívhat minket sürgős esetekben."
  },
  {
    question: "Milyen gyorsan tudnak jönni?",
    answer: "Budapesten és környékén általában 1-2 órán belül a helyszínen vagyunk. Sürgős esetekben mindent megteszünk a leggyorsabb érkezésért."
  },
  {
    question: "Van garancia a munkára?",
    answer: "Igen, minden elvégzett munkánkra garanciát vállalunk. A garancia pontos időtartama a munka jellegétől függ."
  },
  {
    question: "Milyen fizetési módokat fogadnak el?",
    answer: "Készpénzt és bankkártyát is elfogadunk. Céges ügyfelek részére számlát állítunk ki."
  },
  {
    question: "Budapest melyik részein dolgoznak?",
    answer: "Budapest minden kerületében és a főváros 60 km-es körzetében vállalunk munkát, beleértve Budaörs, Érd, Szentendre, Dunakeszi és más környező településeket."
  }
]

export default function VizszereloPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-plumber.avif"
            alt="Non-stop vízszerelő szolgáltatás"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <nav className="mb-6 flex items-center gap-2 text-sm text-primary-foreground/70">
            <Link href="/" className="hover:text-primary-foreground">Főoldal</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Vízszerelő 0-24</span>
          </nav>
          
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-bold text-accent-foreground">
              <Clock className="h-4 w-4" />
              Non-stop Szolgáltatás
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-5xl">
              Vízszerelő 0-24<br />
              <span className="text-secondary">Budapest és környéke</span>
            </h1>
            <p className="mb-8 text-xl text-primary-foreground/90">
              Azonnali vízszerelő szolgáltatás éjjel-nappal. Csőtörés, dugulás, 
              vízszivárgás esetén 1-2 órán belül a helyszínen vagyunk!
            </p>
            
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-xl font-bold text-accent-foreground transition-transform hover:scale-105"
            >
              <Phone className="h-6 w-6" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Problem-Solution Intro */}
      <section className="bg-card py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-foreground lg:text-3xl">
              Vízszerelési problémája van? Segítünk - azonnal!
            </h2>
            <p className="text-muted-foreground">
              Tudjuk, hogy a vízszerelési problémák mindig rosszkor jönnek. Hajnalban csőtörés, 
              hétvégén dugulás, ünnepnapon vízszivárgás - nincs olyan időpont, amikor ne tudnánk 
              segíteni. Az <strong>Aqua024</strong> csapata 0-24 órában áll rendelkezésére 
              Budapesten és a főváros 60 km-es körzetében.
            </p>
            <p className="text-muted-foreground">
              Tapasztalt <strong>vízszerelő</strong> szakembereink minden típusú vízszerelési 
              feladatot vállalnak: legyen szó sürgős <Link href="/csotores-elharitas" className="text-secondary hover:underline">csőtörés elhárításról</Link>, 
              <Link href="/dugulaselharitas" className="text-secondary hover:underline"> duguláselhárításról</Link>, 
              vagy tervezett szerelési munkáról. Modern eszközeinkkel gyorsan és tisztán dolgozunk.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-background py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
              Vízszerelő szolgáltatásaink
            </h2>
            <p className="text-lg text-muted-foreground">
              Teljes körű vízszerelés, 0-24 órában
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                  <service.icon className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-card-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="Sürgős a probléma?"
        subtitle="Ne várjon tovább! Hívjon most és azonnal segítünk."
        variant="urgent"
      />

      {/* Emergency Situations */}
      <section className="bg-muted py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
              Vészhelyzetek, amikor számíthat ránk
            </h2>
            <p className="text-lg text-muted-foreground">
              Éjjel-nappal, az év minden napján
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {emergencySituations.map((situation) => (
              <div
                key={situation.title}
                className="rounded-xl bg-card p-6 shadow-sm"
              >
                <h3 className="mb-2 text-xl font-bold text-card-foreground">
                  {situation.title}
                </h3>
                <p className="text-muted-foreground">{situation.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-background py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground lg:text-4xl">
                Miért az Aqua024-et válassza?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Több mint 15 éve vagyunk jelen a piacon, és ügyfeleink elégedettsége 
                a legfontosabb számunkra. Ezért választanak minket Budapesten és környékén:
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {whyChooseUs.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 shrink-0 text-secondary" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 overflow-hidden rounded-xl lg:h-96">
              <Image
                src="/images/hero-plumber.avif"
                alt="Professzionális vízszerelő munka"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="bg-primary py-12 text-primary-foreground lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
              Hogyan működik?
            </h2>
            <p className="text-lg text-primary-foreground/80">
              4 egyszerű lépésben megoldjuk a problémát
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            {processSteps.map((step) => (
              <div key={step.step} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-2xl font-bold text-secondary-foreground">
                  {step.step}
                </div>
                <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                <p className="text-primary-foreground/80">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-xl font-bold text-accent-foreground transition-transform hover:scale-105"
            >
              <Phone className="h-6 w-6" />
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ - Modern Accordion */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-balance text-3xl font-extrabold tracking-tight text-foreground lg:text-4xl">
              Gyakran Ismételt Kérdések
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-secondary" />
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="rounded-2xl border border-slate-100 bg-white px-6 py-2 shadow-sm transition-shadow hover:shadow-md data-[state=open]:border-secondary/30 data-[state=open]:bg-slate-50"
              >
                <AccordionTrigger className="group py-4 text-left text-lg font-bold text-foreground hover:text-secondary hover:no-underline">
                  <span>{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* SEO / Content Section - Modern Cards */}
      <section className="relative overflow-hidden bg-slate-50 py-16 lg:py-24">
        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:p-12">
            
            <div className="mx-auto mb-10 max-w-3xl text-center">
              <h2 className="mb-6 text-balance text-3xl font-extrabold tracking-tight text-foreground lg:text-4xl">
                Professzionális Vízszerelő Budapesten
              </h2>
              <div className="mx-auto h-1 w-20 rounded-full bg-secondary" />
            </div>
            
            <div className="space-y-8 text-lg font-light leading-relaxed text-muted-foreground">
              <p className="mx-auto max-w-3xl text-center">
                Egy megbízható <strong>vízszerelő</strong> megtalálása nem könnyű feladat, különösen éjszaka vagy hétvégén. Az <strong className="font-bold text-primary">Aqua024</strong> megoldást kínál: <strong>0-24 órás vízszerelő szolgáltatást</strong> Budapesten és 60 km-es körzetében.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-shadow hover:shadow-md">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-foreground">
                    <Shield className="h-5 w-5 text-secondary" />
                    Átfogó Szakértelem
                  </h3>
                  <p className="mb-4 text-sm">
                    Szakembereink évtizedes tapasztalattal rendelkeznek. Legyen szó csaptelep cseréről, komplett csőhálózat javításról, vagy <strong>csőtörésről</strong> – mi felkészülten érkezünk.
                  </p>
                  <p className="text-sm">
                    Kiszállunk az <strong>összes kerületbe</strong> és az agglomerációba (Budaörs, Érd, Szentendre stb.) is!
                  </p>
                </div>

                <div className="flex flex-col justify-center rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-shadow hover:shadow-md">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-foreground">
                    <AlertTriangle className="h-5 w-5 text-secondary" />
                    Mikor kell azonnal hívni minket?
                  </h3>
                  <p className="text-sm">Egy kis szivárgásból hamar hatalmas vízkár lehet. Ne várjon sokáig!</p>
                  <ul className="mt-4 space-y-1 pl-5 text-sm list-disc">
                    <li>Csőtörés vagy hirtelen vízszivárgás</li>
                    <li>Lefolyó és WC dugulás</li>
                    <li>Nincs meleg víz (bojler, kazán hiba)</li>
                    <li>Kellemetlen zajok a csövekben</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-6 text-center">
                <p className="text-base">
                  <strong>Ne feledje:</strong> az Aqua024 csapatával biztos kezekben lesz otthona!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection 
        title="Készen állunk!"
        subtitle="Hívja a +36 30 598 8450 számot és azonnal segítünk."
        variant="secondary"
      />
    </>
  )
}
