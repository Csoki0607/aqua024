import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { 
  Phone, 
  Clock, 
  AlertTriangle,
  CheckCircle,
  ChevronRight,
  ShieldAlert,
  Droplets,
  Home,
  Zap
} from "lucide-react"
import { CTASection } from "@/components/cta-section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { PhoneLink } from "@/components/phone-link"

export const metadata: Metadata = {
  title: "Csőtörés Elhárítás 0-24 Budapest - Azonnali Segítség",
  description: "Csőtörés elhárítás Budapesten 0-24 órában. Azonnali kiszállás, vízkár megelőzés. Ne várjon - hívjon most: +36 20 962 4606. 1-2 órán belül ott vagyunk!",
  keywords: ["csőtörés", "csőtörés elhárítás", "csőtörés 0-24", "vízszivárgás", "Budapest", "sürgős"],
}

const PHONE_NUMBER = "+36209624606"
const PHONE_DISPLAY = "+36 20 962 4606"

const emergencySteps = [
  {
    step: 1,
    title: "Zárja el a főcsapot!",
    description: "Első lépésként azonnal zárja el a lakás vagy ház főcsapját a további vízkár megelőzése érdekében.",
  },
  {
    step: 2,
    title: "Hívjon minket!",
    description: "Tárcsázza a +36 20 962 4606 számot. 0-24 órában elérhetőek vagyunk, azonnal reagálunk.",
  },
  {
    step: 3,
    title: "Mentse a vagyontárgyakat!",
    description: "Ha lehetséges, távolítsa el az értékeket a víz útjából, amíg megérkezünk.",
  },
  {
    step: 4,
    title: "Mi megoldjuk!",
    description: "1-2 órán belül a helyszínen vagyunk és szakszerűen elhárítjuk a csőtörést.",
  }
]

const damageTypes = [
  {
    title: "Elázott falak és mennyezet",
    description: "A víz beivódik a vakolatba, a szigetelésbe. Ha nem avatkozunk be időben, penészedés és szerkezeti károk keletkezhetnek."
  },
  {
    title: "Tönkrement padló",
    description: "A laminált padló, parketta megduzzad a víztől. Minél tovább áll a víz, annál nagyobb a kár."
  },
  {
    title: "Bútorok, elektronika",
    description: "A víz pillanatok alatt tönkreteheti a bútorokat és az elektronikai eszközöket."
  },
  {
    title: "Szomszédok kára",
    description: "Társasházban a víz lefolyhat az alsó szomszédokhoz is, ami további kártérítési kötelezettséget jelenthet."
  }
]

const pipeTypes = [
  {
    title: "Rézcső törés",
    description: "A régi rézcsövek idővel korrodálódhatnak. Szakszerűen javítjuk vagy cseréljük a sérült szakaszt."
  },
  {
    title: "Műanyag cső sérülés",
    description: "A PPR és PVC csövek is sérülhetnek mechanikai hatásra vagy öregedés miatt."
  },
  {
    title: "Acélcső probléma",
    description: "A régi acélcsövek rozsdásodnak. Gyakran teljes csere szükséges a tartós megoldáshoz."
  },
  {
    title: "Flexibilis csőtörés",
    description: "A bojlerek, mosogatók flexibilis csövei különösen sérülékenyek, gyors cserét igényelnek."
  }
]

const faqs = [
  {
    question: "Mit tegyek csőtörés esetén?",
    answer: "Azonnal zárja el a főcsapot a vízóránál, majd hívjon minket. Ha nem találja a főcsapot, hívjon és telefonon segítünk megtalálni."
  },
  {
    question: "Mennyibe kerül a csőtörés elhárítása?",
    answer: "Az ár függ a hiba jellegétől és a szükséges munkától. Telefonon előzetes tájékoztatást adunk, a helyszínen pedig pontos árajánlatot készítünk a javítás előtt."
  },
  {
    question: "Éjjel is kijönnek csőtöréshez?",
    answer: "Igen, 0-24 órában dolgozunk. Csőtörés nem vár reggelig - mi sem várunk. Éjjel-nappal, hétvégén, ünnepnapokon is elérhetőek vagyunk."
  },
  {
    question: "Csak a csőtörést javítják vagy a vízkárt is?",
    answer: "Mi a vízszerelési munkát végezzük: a csőtörés javítását, cserét. A vízkár helyreállításához (festés, burkolat) más szakembert javaslunk, de segítünk a koordinációban."
  }
]

export default function CsotoresPage() {
  return (
    <>
      {/* Hero Section - Urgent */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pipe-burst.jpg"
            alt="Csőtörés vészhelyzet"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <nav className="mb-6 flex items-center gap-2 text-sm text-primary-foreground/70">
            <Link href="/" className="hover:text-primary-foreground">Főoldal</Link>
            <ChevronRight className="h-4 w-4" />
            <span>Csőtörés elhárítás</span>
          </nav>
          
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-card px-4 py-2 text-sm font-bold text-card-foreground">
              <AlertTriangle className="h-4 w-4" />
              SÜRGŐS - 0-24 Elérhetőség
            </div>
            <h1 className="mb-6 text-4xl font-bold leading-tight lg:text-5xl">
              Csőtörés elhárítás<br />
              <span className="text-secondary">azonnal, 0-24 órában</span>
            </h1>
            <p className="mb-8 text-xl text-primary-foreground/90">
              <strong>Eltört a cső? Ne várjon!</strong> Minden perc számít a vízkár 
              megelőzésében. 1-2 órán belül a helyszínen vagyunk és megoldjuk a problémát.
            </p>
            
             <PhoneLink
               href={`tel:${PHONE_NUMBER}`}
               className="inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-xl font-bold text-accent-foreground transition-transform hover:scale-105"
             >
               <Phone className="h-6 w-6" />
               HÍVÁS MOST: {PHONE_DISPLAY}
             </PhoneLink>

            <p className="mt-4 text-sm text-primary-foreground/80">
              Éjjel-nappal, hétvégén és ünnepnapokon is!
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Steps */}
      <section className="bg-card py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
              Mit tegyen csőtörés esetén?
            </h2>
            <p className="text-lg text-muted-foreground">
              Kövesse ezeket a lépéseket a kár minimalizálásához
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {emergencySteps.map((step) => (
              <div
                key={step.step}
                className="rounded-xl border border-border bg-background p-6"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary text-xl font-bold text-secondary-foreground">
                    {step.step}
                  </div>
                  
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Urgent CTA */}
      <section className="bg-accent py-8">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="mb-4 text-lg font-bold text-accent-foreground">
            A víz folyik? Minden másodperc számít!
          </p>
           <PhoneLink
             href={`tel:${PHONE_NUMBER}`}
             className="inline-flex items-center gap-3 rounded-xl bg-primary px-8 py-4 text-xl font-bold text-primary-foreground transition-transform hover:scale-105"
           >
             <Phone className="h-6 w-6" />
             {PHONE_DISPLAY}
           </PhoneLink>
        </div>
      </section>

      {/* Damage Prevention */}
      <section className="bg-background py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
              Mire számíthat, ha nem cselekszik gyorsan?
            </h2>
            <p className="text-lg text-muted-foreground">
              A csőtörés okozta károk gyorsan eszkalálódhatnak
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {damageTypes.map((damage) => (
              <div
                key={damage.title}
                className="flex gap-4 rounded-xl border border-secondary/30 bg-secondary/5 p-6"
              >
                <AlertTriangle className="h-6 w-6 shrink-0 text-secondary" />
                <div>
                  <h3 className="mb-2 text-lg font-bold text-foreground">{damage.title}</h3>
                  <p className="text-muted-foreground">{damage.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl bg-secondary/10 p-6 text-center">
            <p className="text-lg font-medium text-foreground">
              <strong>Ne kockáztasson!</strong> Egy gyors telefonhívás megmentheti 
              az otthonát a komoly károktól.
            </p>
          </div>
        </div>
      </section>

      {/* Pipe Types */}
      <section className="bg-muted py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
              Minden típusú csőtörést javítunk
            </h2>
            <p className="text-lg text-muted-foreground">
              Felkészülten érkezünk minden helyzetre
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pipeTypes.map((pipe) => (
              <div
                key={pipe.title}
                className="rounded-xl bg-card p-6 shadow-sm"
              >
                <Droplets className="mb-4 h-8 w-8 text-secondary" />
                <h3 className="mb-2 text-lg font-bold text-card-foreground">{pipe.title}</h3>
                <p className="text-sm text-muted-foreground">{pipe.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-primary py-12 text-primary-foreground lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
                Miért minket hívjon csőtörés esetén?
              </h2>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <strong>0-24 órás készenlét</strong> - Éjjel 2-kor is felvesszük a telefont
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <strong>1-2 óra kiszállás</strong> - Nem órákig vár a segítségre
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <strong>Felszerelt autók</strong> - Minden szükséges eszköz nálunk van
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <strong>Tapasztalt szerelők</strong> - 15+ év szakmai háttér
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-secondary" />
                  <div>
                    <strong>Garancia</strong> - Munkáinkra garanciát vállalunk
                  </div>
                </li>
              </ul>
            </div>
            <div className="relative h-80 overflow-hidden rounded-xl lg:h-96">
              <Image
                src="/images/pipe-burst.jpg"
                alt="Csőtörés javítás"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection 
        title="Csőtörés? Azonnal indulunk!"
        subtitle="Ne hagyja, hogy a víz tönkretegye az otthonát. Hívjon most!"
        variant="urgent"
      />

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
                Csőtörés elhárítás Budapesten - Szakszerű Megoldás
              </h2>
              <div className="mx-auto h-1 w-20 rounded-full bg-secondary" />
            </div>
            
            <div className="space-y-8 text-lg font-light leading-relaxed text-muted-foreground">
              <p className="mx-auto max-w-3xl text-center">
                A <strong>csőtörés</strong> az egyik legstresszesebb vészhelyzet, ami történhet. A víz megállás nélkül folyik, áztatja a falakat, a padlót és a bútorokat. Az <strong className="font-bold text-primary">Aqua024</strong> csapata pontosan erre specializálódott: <strong>0-24 órás csőtörés elhárítást</strong> kínálunk.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-shadow hover:shadow-md">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-foreground">
                    <Droplets className="h-5 w-5 text-secondary" />
                    Beszédes Jelek
                  </h3>
                  <p className="mb-4 text-sm">
                    Csőtörés történhet hirtelen (mechanikai sérülés, fagy) vagy fokozatosan apró szivárgás formájában is. A leggyakoribb jelek:
                  </p>
                  <ul className="space-y-2 pl-5 text-sm list-disc">
                    <li>Látható vízszivárgás vagy vízfoltok</li>
                    <li>Csobogás hangja a falban/padlóban</li>
                    <li>Indokolatlanul magas vízszámla</li>
                    <li>Hirtelen víznyomás csökkenés</li>
                  </ul>
                </div>

                <div className="flex flex-col justify-center rounded-2xl border border-slate-100 bg-slate-50 p-6 transition-shadow hover:shadow-md">
                  <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-foreground">
                    <Clock className="h-5 w-5 text-secondary" />
                    Minden Perc Számít
                  </h3>
                  <p className="text-sm">
                    Minél tovább folyik a víz, annál nagyobb a kár. Ezért dolgozunk <strong>non-stop</strong>. Éjjel-nappal, hétvégén és ünnepnapokon is elérhetőek vagyunk. 
                  </p>
                  <p className="mt-4 text-sm">
                    Hívjon minket és akár <strong className="rounded bg-secondary/10 px-2 py-1 text-primary">1-2 órán belül</strong> a helyszínre érünk Budapesten és környékén (pl. Budaörs, Érd, Dunakeszi).
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-6 text-center">
                <p className="text-base">
                  Kapcsolódó szolgáltatásaink: <Link href="/vizszerelo-0-24" className="font-bold text-secondary transition-colors hover:text-primary hover:underline">Vízszerelő 0-24</Link> | 
                  <Link href="/dugulaselharitas" className="ml-2 font-bold text-secondary transition-colors hover:text-primary hover:underline">Duguláselhárítás</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection 
        title="Ne várjon! Hívjon most!"
        subtitle="0-24 órában, Budapest és 60 km-es körzet"
        variant="secondary"
      />
    </>
  )
}
