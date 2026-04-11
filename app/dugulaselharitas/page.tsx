import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { 
  Phone, 
  Clock, 
  CheckCircle,
  ChevronRight,
  Wrench,
  ShowerHead,
  Bath,
  Home,
  Building,
  Sparkles
} from "lucide-react"
import { CTASection } from "@/components/cta-section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { PhoneLink } from "@/components/phone-link"

export const metadata: Metadata = {
  title: "Duguláselhárítás Budapest - WC, Lefolyó, Csatorna 0-24",
  description: "Duguláselhárítás Budapesten és környékén. WC dugulás, lefolyó dugulás, csatorna tisztítás - gyorsan és tisztán. Hívjon: +36 30 598 8450",
  keywords: ["duguláselhárítás", "wc dugulás", "lefolyó dugulás", "csatorna tisztítás", "Budapest", "azonnal"],
}

const PHONE_NUMBER = "+36305988450"
const PHONE_DISPLAY = "+36 30 598 8450"

const blockageTypes = [
  {
    icon: Bath,
    title: "WC dugulás",
    description: "A leggyakoribb és legkellemetlenebb dugulás. Gyorsan és higiénikusan oldjuk meg, modern eszközökkel.",
    situations: ["Nem folyik le a víz", "Visszajön a víz", "Rossz szag", "Lassan folyik le"]
  },
  {
    icon: ShowerHead,
    title: "Fürdőszoba dugulás",
    description: "Kád, zuhanytálca, mosdó dugulások elhárítása. A haj és szappan okozta dugulások specialistái.",
    situations: ["Zuhanytálca dugulás", "Mosdó dugulás", "Kád nem folyik le", "Lassú lefolyás"]
  },
  {
    icon: Home,
    title: "Konyhai dugulás",
    description: "Mosogató, mosogatógép lefolyó tisztítása. Zsír és ételmaradék okozta dugulások kezelése.",
    situations: ["Mosogató dugulás", "Mosogatógép dugulás", "Zsíros lefolyó", "Rossz szag"]
  },
  {
    icon: Building,
    title: "Csatorna dugulás",
    description: "Házi és utcai csatornák tisztítása, duguláselhárítása professzionális gépi technológiával.",
    situations: ["Házi csatorna", "Esővíz elvezető", "Szennyvíz csatorna", "Átemelő tisztítás"]
  }
]

const methods = [
  {
    title: "Mechanikus tisztítás",
    description: "Spirálos készülékekkel távolítjuk el a dugulást. Hatékony WC és lefolyó dugulások esetén."
  },
  {
    title: "Nagynyomású vízsugár",
    description: "Speciális nagynyomású vízsugárral mossuk át a csöveket. Ideális zsíros és csatorna dugulásokhoz."
  },
  {
    title: "Kamerás csővizsgálat",
    description: "Bonyolult esetekben kamerával vizsgáljuk át a csőrendszert a probléma pontos megállapításához."
  },
  {
    title: "Környezetbarát megoldások",
    description: "Ahol lehetséges, környezetbarát módszereket alkalmazunk a csövek védelme érdekében."
  }
]

const advantages = [
  "Gyors, gyakran 30 percen belüli megoldás",
  "Tiszta, higiénikus munkavégzés",
  "Modern, professzionális eszközök",
  "0-24 órás elérhetőség",
  "Fix, előre közölt árak",
  "Garancia a munkára",
  "Nincs extra költség hétvégén",
  "Tapasztalt, képzett szakemberek"
]

const faqs = [
  {
    question: "Mennyibe kerül a duguláselhárítás?",
    answer: "Az ár függ a dugulás típusától és súlyosságától. Egy egyszerű WC dugulás más árkategória, mint egy csatorna dugulás. Telefonon tájékoztatjuk az árról, meglepetés nem éri."
  },
  {
    question: "Mennyi idő alatt oldják meg?",
    answer: "A legtöbb háztartási dugulást (WC, mosdó, mosogató) 30-60 perc alatt megoldjuk. Bonyolultabb csatorna dugulások több időt vehetnek igénybe."
  },
  {
    question: "Tisztán dolgoznak?",
    answer: "Igen, a higiénikus munkavégzés alapelvünk. Védőfelszerelést használunk és a munka után mindent rendben hagyunk."
  },
  {
    question: "Van garancia a munkára?",
    answer: "Igen, a duguláselhárításra garanciát vállalunk. Ha a dugulás rövid időn belül visszatér, ingyen kijövünk újra."
  },
  {
    question: "Hétvégén is jönnek?",
    answer: "Igen, 0-24 órában dolgozunk, beleértve a hétvégéket és ünnepnapokat is. A hétvégi kiszállásért nincs extra felár."
  },
  {
    question: "Társasházban is vállalnak munkát?",
    answer: "Igen, társasházakban, lakótelepeken, irodaházakban egyaránt dolgozunk. Cégek és társasházak részére számlát adunk."
  }
]

export default function DugulasPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/drain-cleaning.jpg"
            alt="Duguláselhárítás"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <nav className="mb-6 flex items-center gap-2 text-sm text-primary-foreground/70">
            <Link href="/" className="hover:text-primary-foreground">Főoldal</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Duguláselhárítás</span>
          </nav>
          
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-bold text-accent-foreground">
              <Clock className="h-4 w-4" />
              Gyors Megoldás - 0-24
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-5xl">
              Duguláselhárítás<br />
              <span className="text-secondary">gyorsan és tisztán</span>
            </h1>
            <p className="mb-8 text-xl text-primary-foreground/90">
              WC, mosogató, lefolyó, csatorna dugulás? Mi megoldjuk! 
              Modern eszközökkel, higiénikusan, garanciával.
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
               <PhoneLink
                 href={`tel:${PHONE_NUMBER}`}
                 className="inline-flex items-center justify-center gap-3 rounded-xl bg-accent px-8 py-4 text-xl font-bold text-accent-foreground transition-transform hover:scale-105"
               >
                 <Phone className="h-6 w-6" />
                 {PHONE_DISPLAY}
               </PhoneLink>
              <span className="text-lg text-primary-foreground/80">
                Budapest és 60 km-es körzet
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Blockage Types */}
      <section className="bg-card py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
              Minden típusú dugulást elhárítunk
            </h2>
            <p className="text-lg text-muted-foreground">
              WC-től a csatornáig - teljes körű megoldás
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {blockageTypes.map((type) => (
              <div
                key={type.title}
                className="rounded-xl border border-border bg-background p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                    <type.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{type.title}</h3>
                </div>
                <p className="mb-4 text-muted-foreground">{type.description}</p>
                <div className="flex flex-wrap gap-2">
                  {type.situations.map((situation) => (
                    <span
                      key={situation}
                      className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground"
                    >
                      {situation}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="Dugulás? Mi megoldjuk!"
        subtitle="Hívjon most és akár 30 percen belül megoldjuk a problémát."
        variant="urgent"
      />

      {/* Methods */}
      <section className="bg-background py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
              Hogyan dolgozunk?
            </h2>
            <p className="text-lg text-muted-foreground">
              Modern technológiák a hatékony megoldásért
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {methods.map((method) => (
              <div
                key={method.title}
                className="rounded-xl border border-border bg-card p-6"
              >
                <Wrench className="mb-4 h-8 w-8 text-secondary" />
                <h3 className="mb-2 text-lg font-bold text-card-foreground">{method.title}</h3>
                <p className="text-sm text-muted-foreground">{method.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-secondary py-12 text-secondary-foreground lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
                Miért minket válasszon?
              </h2>
              <p className="mb-8 text-lg text-secondary-foreground/90">
                A duguláselhárítás kellemetlen dolog, de mi mindent megteszünk, 
                hogy a lehető leggyorsabban és legkevesebb kellemetlenséggel oldjuk meg.
              </p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {advantages.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 shrink-0 text-card" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-80 overflow-hidden rounded-xl lg:h-96">
              <Image
                src="/images/drain-cleaning.jpg"
                alt="Professzionális duguláselhárítás"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Clean Work Promise */}
      <section className="bg-card py-12 lg:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Sparkles className="mx-auto mb-4 h-12 w-12 text-secondary" />
          <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
            Tiszta munkavégzés - garantáltan
          </h2>
          <p className="mb-6 text-lg text-muted-foreground">
            Tudjuk, hogy a duguláselhárítás nem a legkellemesebb téma. Ezért különösen 
            figyelünk a higiéniára: védőfelszerelést használunk, óvatosan dolgozunk, 
            és a munka után mindent tisztán hagyunk. Nem kell tartania a rendetlenségtől!
          </p>
           <PhoneLink
             href={`tel:${PHONE_NUMBER}`}
             className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-4 text-lg font-bold text-accent-foreground transition-transform hover:scale-105"
           >
             <Phone className="h-5 w-5" />
             Hívás most
           </PhoneLink>
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
                Duguláselhárítás Budapesten - Teljeskörű Megoldás
              </h2>
              <div className="mx-auto h-1 w-20 rounded-full bg-secondary" />
            </div>
            
            <div className="space-y-8 text-lg font-light leading-relaxed text-muted-foreground">
              <p className="mx-auto max-w-2xl text-center">
                A <strong>duguláselhárítás</strong> egyike a leggyakoribb feladatoknak. Szinte minden háztartásban előfordul, hogy a WC, a mosogató vagy a lefolyó eldugul. Az <strong className="font-bold text-primary">Aqua024</strong> csapata pontosan ezekre a helyzetekre specializálódott.
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-shadow hover:shadow-md">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-foreground">
                    WC dugulás
                  </h3>
                  <p className="text-sm">
                    Nemcsak kellemetlen, de sürgős is – <strong>nincs idő hétfőig várni!</strong> Ezért vagyunk elérhetőek 0-24 órában. 
                  </p>
                  <ul className="mt-4 space-y-1 pl-5 text-sm list-disc">
                    <li>Túl sok WC-papír</li>
                    <li>Idegen tárgyak</li>
                    <li>Lerakódások</li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-shadow hover:shadow-md">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-foreground">
                    Mosogató & Lefolyó
                  </h3>
                  <p className="text-sm">
                    A fürdőszobai vagy konyhai dugulások leggyakrabban zsír, haj és szappan felgyülemléséből erednek. 
                  </p>
                  <p className="mt-4 text-sm">
                    <strong className="text-primary">Modern gépeinkkel</strong> azonnal feloldjuk a makacs zsírtömböket is.
                  </p>
                </div>

                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-shadow hover:shadow-md">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-foreground">
                    Csatorna tisztítás
                  </h3>
                  <p className="text-sm">
                    Komolyabb beavatkozást igényel. <strong>Professzionális gépi technológiával</strong> és nagynyomású vízsugárral dolgozunk a biztonságos áramlásért.
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-6 text-center">
                <p className="text-base">
                  Kapcsolódó szolgáltatásaink: <Link href="/vizszerelo-0-24" className="font-bold text-secondary transition-colors hover:text-primary hover:underline">Vízszerelő 0-24</Link> | 
                  <Link href="/csotores-elharitas" className="ml-2 font-bold text-secondary transition-colors hover:text-primary hover:underline">Csőtörés elhárítás</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection 
        title="Dugulás? Ne szenvedjen vele!"
        subtitle="Hívjon most és gyorsan, tisztán megoldjuk."
        variant="secondary"
      />
    </>
  )
}
