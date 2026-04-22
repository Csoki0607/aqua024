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
  ChevronRight,
  MapPin,
  Toolbox,
  Search,
  Hammer,
  ThumbsUp,
  Award
} from "lucide-react"
import { CTASection } from "@/components/cta-section"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { PhoneLink } from "@/components/phone-link"

export const metadata: Metadata = {
  title: "SOS Vízszerelő 0-24 Budapest - Csőtörés Javítás és Vízszerelés Azonnal",
  description: "Non-stop SOS vízszerelő szolgáltatás Budapesten és Pest megyében. Csőtörés 0-24, duguláselhárítás, vízvezeték szerelés és csaptelep csere. Hívjon azonnal!",
  keywords: ["sos vízszerelő", "vízszerelés", "vízszerelés 0-24", "csőtörés", "csőtörés 0-24", "vízszerelő", "vízszerelő 0-24", "nonstop vízszerelő", "vízszerelő azonnal", "Budapest", "csaptelep csere"],
}

const PHONE_NUMBER = "+36305988450"
const PHONE_DISPLAY = "+36 30 598 8450"

const mainServices = [
  {
    icon: Clock,
    title: "Vízszerelő 0-24 sürgősségi szolgáltatás",
    description: "Éjjel-nappal elérhető gyorsszolgálatunk garantálja, hogy a vízszerelés 0-24 órában zavartalanul működjön. Bármikor hívhat minket."
  },
  {
    icon: AlertTriangle,
    title: "Csőtörés javítás azonnal",
    description: "A csőtörés nem várhat. Kiszállunk a legrövidebb idő alatt, hogy a vízfolyást megszüntessük és a károkat minimalizáljuk."
  },
  {
    icon: Hammer,
    title: "Csőtörés földmunkával",
    description: "Kültéri csőtörés esetén a feltárást és a földmunkát is elvégezzük, majd szakszerűen helyreállítjuk a környezetet."
  },
  {
    icon: Wrench,
    title: "Csaptelep csere gyorsan",
    description: "Csöpögő, vízköves vagy elöregedett csaptelepek szakszerű és gyors cseréje fürdőszobában és konyhában egyaránt."
  },
  {
    icon: Toolbox,
    title: "Vízvezeték szerelés és javítás",
    description: "Komplett vízvezeték hálózatok kiépítése, felújítása, régi vezetékek cseréje és karbantartása professzionális szinten."
  },
  {
    icon: Waves,
    title: "Duguláselhárítás",
    description: "Makacs dugulások megszüntetése bontás nélkül, modern spirálos és magasnyomású gépekkel."
  },
  {
    icon: Search,
    title: "Szivárgás keresés és javítás",
    description: "Rejtett csőtörések és szivárgások műszeres bemérése, falbontás minimalizálásával történő javítása."
  },
  {
    icon: Zap,
    title: "Csőrepedés javítás",
    description: "Fagyás vagy anyagfáradás okozta csőrepedések azonnali, tartós javítása a legmodernebb technológiákkal."
  },
  {
    icon: Droplets,
    title: "Vízvezeték csere",
    description: "Elavult, rozsdás ólom vagy vas csövek cseréje modern, megbízható és hosszú élettartamú műanyag vagy réz vezetékekre."
  },
  {
    icon: Shield,
    title: "Vízóra utáni javítás",
    description: "A vízóra utáni hálózat teljes körű karbantartása, csövek és szerelvények javítása vagy cseréje."
  }
]

const processSteps = [
  {
    step: 1,
    title: "Telefonhívás",
    description: "Hívjon minket a nap 24 órájában. Diszpécserünk azonnal fogadja hívását."
  },
  {
    step: 2,
    title: "Helyszín egyeztetés",
    description: "Pontosítjuk a hiba jellegét és felvesszük a címet a leggyorsabb kiszállás érdekében."
  },
  {
    step: 3,
    title: "Gyors kiszállás",
    description: "Sürgős csőtörés esetén 30-60 percen belül indulunk a helyszínre."
  },
  {
    step: 4,
    title: "Hiba felmérés",
    description: "Szakemberünk a helyszínen pontosan diagnosztizálja a problémát."
  },
  {
    step: 5,
    title: "Javítás",
    description: "Megkezdjük a szakszerű vízszerelést és csőtörés elhárítást professzionális eszközökkel."
  },
  {
    step: 6,
    title: "Ellenőrzés",
    description: "A munka befejeztével alaposan leteszteljük a rendszert és garanciát vállalunk."
  }
]

const faqs = [
  {
    question: "Mennyi idő alatt ér ki a vízszerelő?",
    answer: "Általában 1 órán belül a helyszínre érkezünk. Budapest területén 30-60 perc, Pest megyében a forgalomtól és távolságtól függően 60-90 perc a jellemző kiszállási időnk sürgős csőtörés esetén."
  },
  {
    question: "Hétvégén is dolgoznak?",
    answer: "Igen, a vízszerelő 0-24 szolgáltatás folyamatosan elérhető. Hétvégén, éjszaka és ünnepnapokon is ugyanúgy állunk rendelkezésére, hiszen egy csőtörés nem ismeri a munkaidőt."
  },
  {
    question: "Van garancia az elvégzett vízszerelésre?",
    answer: "Igen, minden munkára garanciát vállalunk. Számunkra a minőség és a megbízhatóság az első, így a beépített anyagokra és az elvégzett vízszerelésre is hivatalos garancia vonatkozik."
  },
  {
    question: "Csőtörés esetén mit tegyek, mielőtt kiér a szakember?",
    answer: "A legfontosabb: azonnal zárja el a főcsapot! Ezzel megállítja a vízömlést és csökkenti a károkat. Ezt követően áramtalanítsa az érintett helyiségeket, és hívjon vízszerelőt a 0-24-es ügyeleti számunkon."
  },
  {
    question: "Mennyibe kerül a vízszerelés?",
    answer: "Az árak a hiba típusától, a szükséges anyagoktól és a helyszíntől függenek. Pontos és korrekt árat már a telefonos egyeztetés során, a probléma ismertetése után tudunk adni, így nem érik meglepetések."
  }
]

const budapestDistricts = [
  "I. kerület", "II. kerület", "III. kerület", "IV. kerület", "V. kerület", 
  "VI. kerület", "VII. kerület", "VIII. kerület", "IX. kerület", "X. kerület", 
  "XI. kerület", "XII. kerület", "XIII. kerület", "XIV. kerület", "XV. kerület", 
  "XVI. kerület", "XVII. kerület", "XVIII. kerület", "XIX. kerület", "XX. kerület", 
  "XXI. kerület", "XXII. kerület", "XXIII. kerület"
]

const pestCountyTowns = [
  "Érd", "Dunakeszi", "Szigetszentmiklós", "Gyál", "Vecsés", "Halásztelek", "Tököl", 
  "Szigethalom", "Dunaharaszti", "Taksony", "Alsónémedi", "Ócsa", "Fót", "Göd", 
  "Veresegyház", "Mogyoród", "Pécel", "Maglód", "Üllő", "Monor", "Gyömrő", "Nagykáta", 
  "Cegléd", "Nagykőrös", "Abony", "Dabas", "Albertirsa", "Aszód", "Bag", "Isaszeg", 
  "Gödöllő", "Szada", "Kistarcsa", "Kerepes", "Csömör", "Pomáz", "Szentendre", 
  "Budakalász", "Solymár", "Pilisvörösvár", "Biatorbágy", "Budaörs", "Törökbálint"
]

export default function SosVizszereloPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-plumber.avif"
            alt="SOS Vízszerelő 0-24 szolgáltatás"
            fill
            className="object-cover opacity-25 mix-blend-overlay"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary/40" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-accent bg-accent/10 px-5 py-2.5 text-sm font-bold text-accent shadow-lg backdrop-blur-sm">
              <Clock className="h-5 w-5 animate-pulse" />
              NONSTOP SOS VÍZSZERELŐ BUDAPEST ÉS PEST MEGYE
            </div>
            <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight lg:text-7xl">
              Vízszerelő 0-24 <br />
              <span className="text-secondary drop-shadow-md">Azonnali Segítség</span>
            </h1>
            <p className="mb-8 text-2xl font-medium leading-relaxed text-primary-foreground/90 drop-shadow">
              Csőtörés, dugulás és csaptelep csere esetén azonnali reagálás. 
              A legtöbb esetben 1 órán belül a helyszínen vagyunk!
            </p>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <PhoneLink
                href={`tel:${PHONE_NUMBER}`}
                className="group relative inline-flex items-center justify-center gap-4 overflow-hidden rounded-2xl bg-accent px-8 py-5 text-2xl font-black text-accent-foreground shadow-[0_0_40px_rgba(var(--accent),0.4)] transition-all hover:scale-105 hover:shadow-[0_0_60px_rgba(var(--accent),0.6)]"
              >
                <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
                <Phone className="h-8 w-8 animate-bounce" />
                <span>HÍVJON MOST: {PHONE_DISPLAY}</span>
              </PhoneLink>
              <div className="flex items-center gap-2 text-sm font-bold text-green-400">
                <CheckCircle className="h-5 w-5" />
                Azonnali Kiszállás
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / Why Important */}
      <section className="bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="prose prose-lg max-w-none">
              <h2 className="mb-6 text-3xl font-extrabold text-foreground lg:text-4xl">
                MIÉRT FONTOS AZ AZONNALI VÍZSZERELŐ?
              </h2>
              <p className="text-xl font-medium text-foreground/80">
                Egy váratlan csőtörés vagy intenzív vízszivárgás percek alatt rémálommá válhat. Ilyenkor a másodpercek is számítanak.
              </p>
              <p className="text-muted-foreground">
                A víz hatalmas pusztítást képes végezni rövid idő alatt. A falak átnedvesednek, a drága burkolatok felválnak, az alsó szomszéd beázik, és az elektromos hálózat is komoly veszélybe kerülhet. Egy kezeletlen vízszivárgás ezen felül a vízszámlát is brutálisan megnövelheti. 
              </p>
              <p className="text-muted-foreground">
                Ezért kiemelten fontos, hogy <strong>csőtörés esetén azonnal vízszerelőt hívjon</strong>. A szakszerű és gyors beavatkozás nem csupán opció, hanem létszükséglet. Ne várjon órákat vagy napokat a javítással!
              </p>
              
              <div className="mt-8 rounded-2xl bg-primary/5 p-6 border border-primary/10">
                <h3 className="mb-4 text-xl font-bold text-foreground">A gyors reagálás garantálja:</h3>
                <ul className="grid gap-3 sm:grid-cols-2">
                  <li className="flex items-center gap-3 font-medium text-foreground/80">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    Csökkenti az anyagi károkat
                  </li>
                  <li className="flex items-center gap-3 font-medium text-foreground/80">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    Megelőzi a penészedést
                  </li>
                  <li className="flex items-center gap-3 font-medium text-foreground/80">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    Minimalizálja a javítás költségét
                  </li>
                  <li className="flex items-center gap-3 font-medium text-foreground/80">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    Biztonságosabbá teszi az ingatlant
                  </li>
                </ul>
              </div>
              <p className="mt-6 text-lg font-bold text-primary">
                A mi Vízszerelő 0-24 szolgáltatásunk pontosan erre az azonnali, vészhelyzeti reagálásra lett kialakítva.
              </p>
            </div>
            <div className="relative h-[500px] overflow-hidden rounded-3xl shadow-2xl">
              <Image
                src="/images/hero-plumber.avif"
                alt="Azonnali vízszerelés és csőtörés elhárítás"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8">
                <div className="flex items-center gap-4 text-white">
                  <Clock className="h-10 w-10 text-accent" />
                  <div>
                    <div className="text-2xl font-bold">0-24 Ügyelet</div>
                    <div className="text-white/80">Hétvégén és ünnepnapokon is!</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-extrabold text-foreground lg:text-5xl">
              Fő szolgáltatások
            </h2>
            <div className="mx-auto h-1.5 w-24 rounded-full bg-secondary" />
            <p className="mt-6 text-xl text-muted-foreground">
              Komplex vízszerelés 0-24 órában, professzionális eszközökkel.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl hover:border-secondary/30"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-secondary group-hover:text-secondary-foreground">
                  <service.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-card-foreground group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dives - The Core Content */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-20">
          
          {/* Csőtörés 0-24 */}
          <div className="rounded-3xl bg-white p-8 shadow-lg sm:p-12 border border-slate-100">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-1.5 text-sm font-bold text-red-700">
              <AlertTriangle className="h-4 w-4" />
              Sürgősségi Elhárítás
            </div>
            <h2 className="mb-6 text-3xl font-extrabold text-foreground lg:text-4xl">
              CSŐTÖRÉS JAVÍTÁS 0-24
            </h2>
            <h3 className="mb-8 text-xl font-medium text-muted-foreground">
              Gyors csőtörés elhárítás Budapest és Pest megye területén
            </h3>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                A <strong>csőtörés</strong> az egyik leggyakoribb és legveszélyesebb vízszerelési hiba, amellyel egy ingatlantulajdonos találkozhat. A vízvezeték rendszer meghibásodása sajnos teljesen kiszámíthatatlan: bármikor megtörténhet, nappal vagy az éjszaka közepén, hétköznap vagy épp egy hosszú hétvégén. Ezért elengedhetetlen a <strong>csőtörés 0-24</strong> órában történő elhárításának biztosítása.
              </p>
              
              <div className="my-8 grid sm:grid-cols-2 gap-8">
                <div className="rounded-2xl bg-slate-50 p-6 border border-slate-100">
                  <h4 className="mb-4 text-lg font-bold text-foreground">A leggyakoribb csőtörés okok:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary" /> elöregedett vízvezeték hálózat</li>
                    <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary" /> fagyás miatti térfogatnövekedés</li>
                    <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary" /> mechanikai sérülés a falban</li>
                    <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary" /> rossz, szakszerűtlen kivitelezés</li>
                    <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary" /> erős korrózió (főleg vascsöveknél)</li>
                    <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 rounded-full bg-primary" /> extrém nyomásingadozás a hálózatban</li>
                  </ul>
                </div>
                <div className="rounded-2xl bg-red-50 p-6 border border-red-100">
                  <h4 className="mb-4 text-lg font-bold text-red-900">A csőtörés figyelmeztető jelei:</h4>
                  <ul className="space-y-2 text-sm text-red-800">
                    <li className="flex items-center gap-2"><AlertTriangle className="h-4 w-4" /> folyamatos vízfolyás hangja</li>
                    <li className="flex items-center gap-2"><AlertTriangle className="h-4 w-4" /> nedves, felhólyagosodott fal</li>
                    <li className="flex items-center gap-2"><AlertTriangle className="h-4 w-4" /> hirtelen penész megjelenése</li>
                    <li className="flex items-center gap-2"><AlertTriangle className="h-4 w-4" /> sötét vízfolt a mennyezeten</li>
                    <li className="flex items-center gap-2"><AlertTriangle className="h-4 w-4" /> indokolatlanul magas vízszámla</li>
                    <li className="flex items-center gap-2"><AlertTriangle className="h-4 w-4" /> csöpögő vagy spriccelő cső</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-primary text-primary-foreground rounded-2xl p-6 text-center shadow-lg">
                <p className="font-bold text-lg mb-0">
                  Ha a fenti jelek bármelyikét tapasztalja, azonnal zárja el a főcsapot, majd hívjon profi vízszerelőt! Csőtörés esetén azonnali kiszállást, gyors javítást és tartós megoldást nyújtunk.
                </p>
              </div>
            </div>
          </div>

          {/* Csőtörés Földmunkával */}
          <div className="rounded-3xl bg-white p-8 shadow-lg sm:p-12 border border-slate-100">
             <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-1.5 text-sm font-bold text-amber-700">
              <Hammer className="h-4 w-4" />
              Kültéri Munkálatok
            </div>
            <h2 className="mb-6 text-3xl font-extrabold text-foreground lg:text-4xl">
              CSŐTÖRÉS FÖLDMUNKÁVAL
            </h2>
            <h3 className="mb-8 text-xl font-medium text-muted-foreground">
              Kültéri csőtörés javítás, feltárás és teljes helyreállítás
            </h3>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                A kültéri csőtörések különösen alattomosak tudnak lenni, hiszen a probléma gyakran rejtve marad a föld alatt. Ha a vízszivárgás vagy a csőtörés a föld alatt történt, akkor sok esetben szakszerű földmunka szükséges a hiba feltárásához és javításához.
              </p>
              
              <p className="font-bold text-foreground">Ez leggyakrabban a következő helyeken fordul elő:</p>
              <div className="flex flex-wrap gap-3 mb-8">
                {["Kertben", "Udvaron", "Kocsibeállón", "Vízóra utáni szakaszon", "Kerti csapnál", "Föld alatt futó gerincvezetékeknél"].map(place => (
                  <span key={place} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">{place}</span>
                ))}
              </div>

              <div className="rounded-2xl bg-slate-50 p-8 border border-slate-200 mb-8">
                <h4 className="mb-6 text-xl font-bold text-foreground">Mit tartalmaz a komplex szolgáltatás?</h4>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground font-bold">1</div>
                    <div>
                      <strong className="block text-foreground">Csőtörés bemérése</strong>
                      <span className="text-sm">Műszeres vizsgálattal pontosan behatároljuk a szivárgás helyét.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground font-bold">2</div>
                    <div>
                      <strong className="block text-foreground">Feltárás földmunkával</strong>
                      <span className="text-sm">Szakszerű ásás és bontás a sérült szakaszhoz való hozzáféréshez.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground font-bold">3</div>
                    <div>
                      <strong className="block text-foreground">Hibás cső cseréje</strong>
                      <span className="text-sm">A sérült vezeték kiváltása modern, strapabíró anyagokkal.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary text-secondary-foreground font-bold">4</div>
                    <div>
                      <strong className="block text-foreground">Visszatöltés & Ellenőrzés</strong>
                      <span className="text-sm">Nyomáspróba után a föld visszatöltése és a terep rendezése.</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-xl font-bold text-primary text-center">
                Csőtörés földmunkával – komplett megoldás egy kézben.
              </p>
              <p className="text-center">
                Nem kell külön vállalkozót keresnie a gépi vagy kézi ásáshoz. Minden munkát elvégzünk: bontás, javítás, helyreállítás. Ez felgyorsítja a folyamatot és csökkenti az Ön terheit.
              </p>
            </div>
          </div>

          {/* Csaptelep Csere */}
          <div className="rounded-3xl bg-white p-8 shadow-lg sm:p-12 border border-slate-100">
             <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-bold text-blue-700">
              <Droplets className="h-4 w-4" />
              Szerelvényezés
            </div>
            <h2 className="mb-6 text-3xl font-extrabold text-foreground lg:text-4xl">
              CSAPTELEP CSERE GYORSAN
            </h2>
            <h3 className="mb-8 text-xl font-medium text-muted-foreground">
              Professzionális csaptelep csere vízszerelővel, garanciával
            </h3>
            
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                A <strong>csaptelep csere</strong> az egyik leggyakoribb, mindennapos vízszerelési feladat. Sokszor azt gondolják, házilag is megoldható, ám a nem megfelelő tömítés vagy egy túlhúzott menet komoly vízszivárgáshoz, beázáshoz vezethet.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-8 my-8">
                <div className="flex-1">
                  <h4 className="text-lg font-bold text-foreground mb-4">Mikor érdemes lecserélni? Egy régi vagy hibás csaptelep:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-secondary" /> folyamatosan csöpög, pazarolva a vizet</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-secondary" /> nehezen zárható vagy szorul</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-secondary" /> erősen vízköves, tisztíthatatlan</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-secondary" /> belső kerámiabetétje elromlott</li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-secondary" /> esztétikailag elavult, nem illik a fürdőbe</li>
                  </ul>
                </div>
                <div className="flex-1 rounded-2xl bg-slate-50 p-6 border border-slate-200">
                  <h4 className="text-lg font-bold text-foreground mb-4">Csaptelep csere típusok:</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm font-medium">
                     <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">Mosdó csaptelep</div>
                     <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">Konyhai mosogató</div>
                     <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">Kádtöltő csap</div>
                     <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">Zuhany csaptelep</div>
                     <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">Termosztátos csap</div>
                     <div className="bg-white p-3 rounded-lg shadow-sm border border-slate-100">Falba épített rendszerek</div>
                  </div>
                </div>
              </div>

              <p className="text-center font-bold text-xl text-primary mt-8">
                Bízza szakemberre! A csaptelep csere gyorsan és tisztán elvégezhető, ha mi csináljuk. Hívjon, és a cserét akár aznap lebonyolítjuk!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Break */}
      <CTASection 
        title="Dugulás vagy csőtörés nehezíti meg a napját?"
        subtitle="Vízszerelő 0-24 szolgáltatásunk azonnal segít. Ne engedje, hogy a víz tovább pusztítson!"
        variant="urgent"
      />

      {/* Trust & Process Section */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            
            {/* Why Choose Us */}
            <div>
              <h2 className="mb-6 text-3xl font-extrabold text-foreground lg:text-4xl">
                MIÉRT VÁLASSZON MINKET?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                A megfelelő vízszerelő kiválasztása fontos és felelősségteljes döntés. Egy szakszerűtlenül, rosszul elvégzett javítás újabb, sokkal súlyosabb hibákat és hatalmas extra költségeket okozhat a jövőben. 
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="space-y-4">
                  <h4 className="font-bold text-xl text-primary">Így dolgozunk:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3"><div className="rounded-full bg-secondary/20 p-1"><Zap className="h-4 w-4 text-secondary" /></div> Gyorsan és precízen</li>
                    <li className="flex items-center gap-3"><div className="rounded-full bg-secondary/20 p-1"><Toolbox className="h-4 w-4 text-secondary" /></div> Pontosan, határidőre</li>
                    <li className="flex items-center gap-3"><div className="rounded-full bg-secondary/20 p-1"><CheckCircle className="h-4 w-4 text-secondary" /></div> A helyszínt tisztán hagyva</li>
                    <li className="flex items-center gap-3"><div className="rounded-full bg-secondary/20 p-1"><Shield className="h-4 w-4 text-secondary" /></div> 100% garanciával</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-xl text-primary">Amit biztosítunk:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-foreground/80"><CheckCircle className="h-5 w-5 text-green-500" /> Gyors kiszállás</li>
                    <li className="flex items-center gap-3 text-foreground/80"><CheckCircle className="h-5 w-5 text-green-500" /> Korrekt, fix árak</li>
                    <li className="flex items-center gap-3 text-foreground/80"><CheckCircle className="h-5 w-5 text-green-500" /> Évtizedes szakmai tapasztalat</li>
                    <li className="flex items-center gap-3 text-foreground/80"><CheckCircle className="h-5 w-5 text-green-500" /> Modern műszerek, eszközök</li>
                    <li className="flex items-center gap-3 text-foreground/80"><CheckCircle className="h-5 w-5 text-green-500" /> Hivatalos, számlás munka</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-2xl bg-primary text-primary-foreground p-8 shadow-xl">
                <div className="flex items-center gap-4 mb-4">
                  <Award className="h-10 w-10 text-secondary" />
                  <h3 className="text-2xl font-bold">GARANCIA MINDEN MUNKÁRA</h3>
                </div>
                <p className="text-primary-foreground/90 leading-relaxed">
                  Minden általunk elvégzett munkára teljes körű garanciát vállalunk. Számunkra ez jelenti a biztonságot, a megbízhatóságot és a prémium minőséget. A garancia kiterjed a <strong>csőtörés javítás</strong>, a <strong>csaptelep csere</strong>, az új <strong>vízvezeték szerelés</strong> és a komplett <strong>csőcsere</strong> folyamataira is. Megbízható vízszerelő – hosszú távú megoldások.
                </p>
              </div>
            </div>

            {/* Time & Price & Process */}
            <div className="space-y-10">
              
              <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8 shadow-sm">
                <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-foreground">
                  <Clock className="h-6 w-6 text-primary" />
                  Mennyi idő alatt érkezik ki a vízszerelő?
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-100">
                    <span className="font-bold text-lg">Budapest területén:</span>
                    <span className="text-xl font-black text-secondary">30–60 perc</span>
                  </div>
                  <div className="flex justify-between items-center bg-white p-4 rounded-xl border border-slate-100">
                    <span className="font-bold text-lg">Pest megyében:</span>
                    <span className="text-xl font-black text-secondary">60–90 perc</span>
                  </div>
                </div>
                <p className="mt-4 text-sm text-muted-foreground text-center italic">
                  Sürgős csőtörés esetén a lehető leggyorsabban, azonnal indulunk a helyszínre!
                </p>
              </div>

              <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8 shadow-sm">
                <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-foreground">
                  <Zap className="h-6 w-6 text-primary" />
                  Mennyibe kerül a vízszerelés?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Nincsenek rejtett költségek. Az ár minden esetben függ a <strong>hiba típusától</strong>, a <strong>helyszíntől</strong>, a beépítésre kerülő <strong>anyagoktól</strong> és a <strong>munka időtartamától</strong>.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-white px-3 py-1 text-sm rounded-full border border-slate-200">Csaptelep csere</span>
                  <span className="bg-white px-3 py-1 text-sm rounded-full border border-slate-200">Csőtörés javítás</span>
                  <span className="bg-white px-3 py-1 text-sm rounded-full border border-slate-200">Szivárgás megszüntetés</span>
                  <span className="bg-white px-3 py-1 text-sm rounded-full border border-slate-200">Csőcsere</span>
                </div>
                <div className="bg-primary/10 text-primary p-4 rounded-xl font-bold text-center border border-primary/20">
                  Pontos, korrekt árat telefonos egyeztetés során tudunk mondani! Hívjon minket!
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Process Steps Visual */}
      <section className="bg-primary py-16 text-primary-foreground lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-extrabold lg:text-5xl">
              HOGYAN DOLGOZUNK?
            </h2>
            <p className="text-xl text-primary-foreground/80">
              Egyszerű, gyors és transzparens folyamat a hívástól a garanciáig.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.step} className="relative rounded-2xl bg-white/10 p-6 backdrop-blur-md border border-white/10 text-center hover:bg-white/20 transition-colors">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent text-2xl font-black text-accent-foreground shadow-[0_0_20px_rgba(var(--accent),0.5)]">
                  {step.step}
                </div>
                <h3 className="mb-3 text-2xl font-bold">{step.title}</h3>
                <p className="text-primary-foreground/80 leading-relaxed text-lg">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
             <p className="text-3xl font-black text-white mb-8 drop-shadow-md">
                A cél mindig ugyanaz: GYORS és TARTÓS megoldás.
             </p>
            <PhoneLink
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center gap-4 rounded-full bg-accent px-10 py-5 text-2xl font-bold text-accent-foreground shadow-2xl transition-transform hover:scale-105"
            >
              <Phone className="h-8 w-8 animate-bounce" />
              {PHONE_DISPLAY}
            </PhoneLink>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-extrabold text-foreground lg:text-4xl">
              Gyakori Kérdések
            </h2>
            <div className="mx-auto h-1.5 w-24 rounded-full bg-secondary" />
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="rounded-2xl border border-slate-200 bg-white px-6 py-2 shadow-sm transition-all hover:shadow-md data-[state=open]:border-secondary/30 data-[state=open]:shadow-md"
              >
                <AccordionTrigger className="group py-5 text-left text-lg font-bold text-foreground hover:text-secondary hover:no-underline">
                  <span>{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Comprehensive SEO & Internal Linking Section */}
      <section className="bg-slate-50 py-16 lg:py-24 border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-extrabold text-foreground lg:text-4xl">
              Átfogó Vízszerelési Szolgáltatásaink – Szakmai Útmutató
            </h2>
            <div className="mx-auto h-1.5 w-24 rounded-full bg-secondary" />
            <p className="mt-6 text-xl text-muted-foreground">
              A megelőzéstől a sürgősségi elhárításig: ismerje meg mélyrehatóbban szakterületeinket.
            </p>
          </div>

          <div className="space-y-12">
            {/* Vízszerelés Block */}
            <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-100 transition-all hover:shadow-md">
              <h3 className="mb-4 text-2xl font-bold text-primary">
                Professzionális Vízszerelés 0-24
              </h3>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  Egy ingatlan vízvezeték-hálózatának állapota alapvetően meghatározza az ott élők komfortérzetét és biztonságát. A <strong>vízszerelés</strong> nem csupán a látható csaptelepek cseréjéből áll, hanem egy rendkívül összetett, falakon és padlózaton belül futó rendszer karbantartását és javítását jelenti. Sokan hajlamosak halogatni a kisebbnek tűnő problémák, például egy lassan lefolyó mosogató vagy egy enyhén csöpögő csap javítását, mondván, hogy ráér. A tapasztalat azonban azt mutatja, hogy a <strong>vízszerelés 0-24</strong> órás rendelkezésre állása pontosan azért elengedhetetlen, mert ezek a "kisebb" hibák váratlanul drasztikus méreteket ölthetnek.
                </p>
                <p>
                  Amikor a víznyomás hirtelen lecsökken, vagy megmagyarázhatatlan nedvesedés jelenik meg a falon, azonnali szakértői beavatkozásra van szükség. Csapatunk a nap 24 órájában, a hét minden napján felkészülten várja hívását. A legmodernebb diagnosztikai eszközökkel – köztük nedvességmérőkkel és hőkamerákkal – dolgozunk, hogy a hiba forrását a lehető legkisebb rombolással tárjuk fel. A szakszerű vízszerelés hosszú távú befektetés az ingatlana értékének megóvásába. Rendszeres karbantartással megelőzhetők a milliós károkat okozó vészhelyzetek.
                </p>
                <p className="font-bold text-foreground mt-6">
                  Tudjon meg többet teljes körű szolgáltatásainkról: <Link href="/vizszerelo-0-24" className="text-secondary hover:underline transition-colors">Vízszerelő 0-24 részletes tájékoztató &rarr;</Link>
                </p>
              </div>
            </div>

            {/* Csőtörés Block */}
            <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-100 transition-all hover:shadow-md">
              <h3 className="mb-4 text-2xl font-bold text-red-700 flex items-center gap-2">
                <AlertTriangle className="h-6 w-6" />
                Csőtörés Elhárítás – A Legkritikusabb Vészhelyzet
              </h3>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  A vízszerelési rémálmok listáját egyértelműen a <strong>csőtörés</strong> vezeti. Ez a jelenség nem csupán bosszúság, hanem azonnali veszélyforrás. Egy komolyabb csőtörés során percenként akár több tíz liter víz is a falakba, a födémbe vagy az aljzatba áramolhat. A víz hihetetlenül gyorsan terjed, tönkreteszi a burkolatokat, a bútorokat, extrém esetekben pedig az épület statikáját is meggyengítheti, nem beszélve az elektromos hálózat zárlatának életveszélyes kockázatáról.
                </p>
                <p>
                  A <strong>csőtörés 0-24</strong> órás elhárítása cégünk egyik legfontosabb profilja. Tisztában vagyunk azzal, hogy egy ilyen helyzetben a pánik a legnagyobb ellenség. Ezért alkottuk meg azt a gyorsreagálású rendszert, amely garantálja, hogy Budapesten és vonzáskörzetében a legrövidebb idő alatt a helyszínre érjünk. A hiba lokalizálása után modern technológiákkal – szükség esetén célzott bontással vagy akár földmunkával – szüntetjük meg a szivárgást. Fontos kiemelni, hogy a modern nyomócsövek cseréje ma már sokkal tartósabb anyagokkal (pl. ötrétegű műanyag csövekkel) történik, így a javított szakasz élettartama drasztikusan megnő.
                </p>
                <p className="font-bold text-foreground mt-6">
                  Olvassa el, hogyan végezzük a roncsolásmentes műszeres bemérést: <Link href="/csotores-elharitas" className="text-secondary hover:underline transition-colors">Csőtörés elhárítás technológiák &rarr;</Link>
                </p>
              </div>
            </div>

            {/* Duguláselhárítás Block */}
            <div className="rounded-3xl bg-white p-8 shadow-sm border border-slate-100 transition-all hover:shadow-md">
              <h3 className="mb-4 text-2xl font-bold text-primary flex items-center gap-2">
                <Waves className="h-6 w-6" />
                Duguláselhárítás Bontás Nélkül
              </h3>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>
                  A lefolyók elzáródása, azaz a dugulás, legalább olyan gyakori probléma, mint a vízszivárgás. A konyhai mosogatókban felgyülemlő zsiradék, a fürdőszobai lefolyókban összegyűlő hajszálak és szappanlerakódások idővel áthatolhatatlan dugót képeznek a csövekben. Sokan első körben agresszív, maró hatású lefolyótisztító vegyszerekkel próbálkoznak. Ezek azonban nemcsak a környezetet károsítják rendkívüli mértékben, hanem a régebbi, elöregedett PVC vagy ólom csövek falát is megmarhatják, ami végső soron szivárgáshoz vezet.
                </p>
                <p>
                  A professzionális <strong>duguláselhárítás</strong> lényege a mechanikai tisztítás. Speciális, nagy teljesítményű csőgörényeket (spirálozógépeket) és magasnyomású (womás) csatornamosó berendezéseket használunk, amelyek képesek a legkeményebb lerakódásokat is eltávolítani a csövek faláról, anélkül, hogy kárt tennének magában a vezetékben. A szakszerű duguláselhárítás nem csupán ideiglenes megoldás; a megfelelő eszközökkel a cső teljes keresztmetszete megtisztul, így hosszú időre elfelejtheti a lassan lefolyó víz problémáját. Szolgáltatásunk része a csatornakamerázás is, mellyel pontosan feltérképezhető a hálózat állapota.
                </p>
                <p className="font-bold text-foreground mt-6">
                  Ismerje meg a vegyszermentes, gépi tisztítás előnyeit: <Link href="/dugulaselharitas" className="text-secondary hover:underline transition-colors">Duguláselhárítás szolgáltatásunk &rarr;</Link>
                </p>
              </div>
            </div>
            
            {/* Summary / Internal linking CTA */}
            <div className="rounded-2xl bg-secondary/10 p-8 border border-secondary/20 text-center">
              <h4 className="text-xl font-bold text-foreground mb-4">Minden vízszerelési problémára egyetlen megoldás: Aqua024</h4>
              <p className="text-muted-foreground mb-6">
                Legyen szó tervezett felújításról, egy csaptelep cseréjéről, vagy egy éjszaka közepén bekövetkező katasztrofális csőtörésről, csapatunk a legmagasabb szakmai színvonalon áll az Ön rendelkezésére. Kérjük, tájékozódjon <Link href="/rolunk" className="text-secondary font-bold hover:underline">Rólunk</Link> és cégünk múltjáról, vagy lépjen velünk <Link href="/kapcsolat" className="text-secondary font-bold hover:underline">Kapcsolatba</Link> azonnali segítségért!
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Service Areas - SEO Powerhouse */}
      <section className="bg-background py-16 lg:py-24 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <MapPin className="mx-auto h-12 w-12 text-secondary mb-4" />
            <h2 className="mb-4 text-3xl font-extrabold text-foreground lg:text-4xl">
              Szolgáltatási Területünk
            </h2>
            <p className="text-xl text-muted-foreground">
              Vízszerelő 0-24 szolgáltatásunk az alábbi területeken érhető el azonnali kiszállással.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-3xl bg-slate-50 p-8 border border-slate-100">
              <h3 className="mb-6 text-2xl font-bold text-primary flex items-center gap-2">
                 <div className="h-3 w-3 rounded-full bg-secondary" />
                 Budapest kerületei
              </h3>
              <div className="flex flex-wrap gap-2">
                {budapestDistricts.map(district => (
                  <span key={district} className="bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg text-sm font-medium hover:border-secondary hover:text-secondary transition-colors cursor-default">
                    {district}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="rounded-3xl bg-slate-50 p-8 border border-slate-100">
              <h3 className="mb-6 text-2xl font-bold text-primary flex items-center gap-2">
                 <div className="h-3 w-3 rounded-full bg-secondary" />
                 Pest megye települések
              </h3>
              <div className="flex flex-wrap gap-2">
                {pestCountyTowns.map(town => (
                  <span key={town} className="bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-lg text-sm font-medium hover:border-secondary hover:text-secondary transition-colors cursor-default">
                    {town}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Urgency CTA */}
      <section className="bg-gradient-to-br from-primary via-primary to-slate-900 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AlertTriangle className="mx-auto h-16 w-16 text-accent mb-6 animate-pulse" />
          <h2 className="mb-6 text-4xl font-extrabold lg:text-6xl tracking-tight">
            Vízszerelő 0-24 – Hívjon Most!
          </h2>
          <p className="mb-10 text-2xl font-medium text-white/90 leading-relaxed">
            Ha csőtörés történt, folyik a víz vagy sürgős csaptelep csere szükséges, ne várjon egy percet sem. A gyors reagálás csökkenti a károkat és a költségeket!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
             <span className="bg-white/10 backdrop-blur border border-white/20 px-5 py-2 rounded-full text-lg font-bold">Vízszerelő 0-24</span>
             <span className="bg-white/10 backdrop-blur border border-white/20 px-5 py-2 rounded-full text-lg font-bold">Csőtörés javítás</span>
             <span className="bg-white/10 backdrop-blur border border-white/20 px-5 py-2 rounded-full text-lg font-bold">Sürgős vízszerelő</span>
          </div>

          <div className="flex flex-col items-center justify-center gap-6">
            <p className="text-xl font-bold text-accent">Nonstop vízszerelő szolgáltatás – gyors, megbízható, azonnali megoldás.</p>
            <PhoneLink
              href={`tel:${PHONE_NUMBER}`}
              className="group relative inline-flex items-center justify-center gap-4 overflow-hidden rounded-2xl bg-accent px-10 py-6 text-3xl font-black text-accent-foreground shadow-[0_0_50px_rgba(var(--accent),0.5)] transition-all hover:scale-105"
            >
              <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
              <Phone className="h-10 w-10 animate-bounce" />
              <span>{PHONE_DISPLAY}</span>
            </PhoneLink>
          </div>
        </div>
      </section>
    </>
  )
}
