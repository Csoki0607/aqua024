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

const PHONE_NUMBER = "+36209624606"
const PHONE_DISPLAY = "+36 20 962 4606"

const mainServices = [
  {
    icon: Clock,
    title: "Vízszerelő szolgáltatások",
    description: "vízszerelő 0-24, vízszerelés gyorsszolgálat, azonnali kiszállás, helyszíni javítás"
  },
  {
    icon: AlertTriangle,
    title: "Csőtörés elhárítás",
    description: "csőtörés 0-24, csőtörés elhárítás, vízszivárgás keresés, csőjavítás"
  },
  {
    icon: Wrench,
    title: "Általános szerelés",
    description: "csapcsere, WC javítás, lefolyó tisztítás, vízvezeték karbantartás"
  },
  {
    icon: Shield,
    title: "Megbízható Megoldás",
    description: "Egy jó vízszerelő nem csak gyors, hanem pontos és megbízható is."
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
      <section className="relative flex min-h-[95vh] items-center overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/premium-hero-plumber.png"
            alt="SOS Vízszerelő 0-24 szolgáltatás"
            fill
            className="object-cover opacity-40 scale-105 animate-in fade-in zoom-in duration-1000"
            priority
            quality={90}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/50 to-primary" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        </div>
        
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold tracking-wide text-secondary shadow-2xl backdrop-blur-xl animate-in slide-in-from-top-4 duration-700">
              <span className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-secondary"></span>
              </span>
              NONSTOP SOS VÍZSZERELŐ: BUDAPEST & PEST MEGYE
            </div>
            
            <h1 className="mb-6 text-4xl font-black leading-[1.1] tracking-tighter sm:text-7xl lg:text-8xl animate-in slide-in-from-left-8 duration-1000">
              Vízszerelő 0-24 – <br />
              <span className="bg-gradient-to-r from-secondary via-secondary/80 to-secondary/50 bg-clip-text text-transparent drop-shadow-sm">
                Vízszerelés gyorsszolgálat Budapesten
              </span>
            </h1>
            
            <p className="mb-10 max-w-2xl text-xl font-medium leading-relaxed text-primary-foreground/80 drop-shadow-sm sm:text-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              Ha csőtöréssel, vízszivárgással vagy bármilyen sürgős vízvezeték hibával szembesül, az idő a legfontosabb tényező. Egy elrepedt cső vagy hirtelen elfolyó víz percek alatt komoly anyagi kárt okozhat.
            </p>
            
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              <PhoneLink
                href={`tel:${PHONE_NUMBER}`}
                className="group relative flex items-center justify-center gap-4 overflow-hidden rounded-2xl bg-secondary px-6 py-5 text-xl font-black text-secondary-foreground shadow-[0_20px_50px_rgba(var(--secondary),0.3)] transition-all hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(var(--secondary),0.4)] active:scale-95 sm:px-10 sm:py-6 sm:text-2xl"
              >
                <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
                <Phone className="h-6 w-6 animate-bounce sm:h-8 sm:w-8" />
                <span>HÍVJON MOST: {PHONE_DISPLAY}</span>
              </PhoneLink>
              
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500/20 text-green-400">
                  <CheckCircle className="h-7 w-7" />
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-widest text-white/60">Státusz</div>
                  <div className="text-lg font-bold text-green-400">Ügyelet Elérhető</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro / Why Important */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-bold text-secondary">
                <Shield className="h-4 w-4" />
                BIZTONSÁG ÉS SZAKÉRTELEM
              </div>
              <h2 className="mb-8 text-4xl font-black tracking-tight text-foreground lg:text-5xl uppercase">
                Vízszerelő 0-24 gyorsszolgálat <br />
                <span className="text-secondary">Budapesten</span>
              </h2>
              <p className="mb-6 text-xl font-medium text-foreground/80 leading-relaxed">
                Ezért működik 0-24 vízszerelő gyorsszolgálatunk Budapesten, amely azonnali reakcióval segít, ha vízszerelésre, csőtörés elhárításra vagy sürgősségi beavatkozásra van szükség.
              </p>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Célunk egyszerű: gyorsan a helyszínre érni, megállítani a hibát, és tartós megoldást adni. Szolgáltatásunk lefedi:
                </p>
              </div>
              
              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {[
                  "vízszerelő 0-24 igényeket",
                  "vízszerelés gyorsszolgálat eseteket",
                  "csőtörés 0-24 hibákat",
                  "sürgősségi vízszerelést",
                  "azonnali kiszállást Budapesten"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-slate-50 p-4 transition-colors hover:bg-slate-100">
                    <CheckCircle className="h-6 w-6 text-secondary shrink-0" />
                    <span className="font-bold text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 rounded-[3rem] bg-secondary/5 blur-3xl" />
              <div className="relative h-[400px] overflow-hidden rounded-[2.5rem] shadow-2xl sm:h-[600px]">
                <Image
                  src="/images/premium-hero-plumber.png"
                  alt="Azonnali vízszerelés és csőtörés elhárítás"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="flex items-center gap-5 rounded-3xl bg-white/10 p-6 backdrop-blur-xl border border-white/20">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground shadow-lg shadow-secondary/20">
                      <Clock className="h-8 w-8" />
                    </div>
                    <div>
                      <div className="text-2xl font-black text-white">0-24 ÜGYELET</div>
                      <div className="text-white/70 font-medium tracking-wide">Hétvégén és ünnepnapokon is!</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Main Services Grid */}
      <section className="relative bg-background py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20 flex flex-col items-center text-center">
            <div className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-secondary">
              Szakterületeink
            </div>
            <h2 className="mb-6 text-4xl font-black tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Miben tudunk segíteni?
            </h2>
            <div className="h-2 w-24 rounded-full bg-gradient-to-r from-secondary to-transparent" />
            <p className="mt-8 max-w-2xl text-xl font-medium text-muted-foreground">
              Komplex vízszerelési megoldások a nap 24 órájában, a legmodernebb technológiával.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-start overflow-hidden rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-2 hover:border-secondary/50 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]"
              >
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-secondary/5 transition-transform group-hover:scale-150" />
                
                <div className="relative mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary transition-all group-hover:bg-secondary group-hover:text-secondary-foreground">
                  <service.icon className="h-8 w-8" />
                </div>
                
                <h3 className="relative mb-4 text-xl font-bold leading-tight text-card-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="relative text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                
                <div className="mt-auto pt-8">
                   <div className="flex items-center gap-2 text-sm font-bold text-secondary opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-2">
                     Részletek <ChevronRight className="h-4 w-4" />
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Blocks - Pro Version Content */}
      <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-secondary/10 blur-[100px]" />
          <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-primary/5 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
          
          {/* Csőtörés elhárítás 0-24 */}
          <div className="group rounded-[2.5rem] bg-white p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] sm:p-16 border border-slate-100 transition-all hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)]">
            <h2 className="mb-8 text-3xl font-black tracking-tight text-foreground lg:text-5xl uppercase sm:text-4xl">
              Csőtörés elhárítás 0-24 – <span className="text-secondary">azonnali kiszállással Budapesten</span>
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground font-medium leading-relaxed space-y-6">
              <p>
                A csőtörés az egyik legsúlyosabb vízvezeték probléma, mert a víz láthatatlanul is komoly károkat okozhat falakban, padlóban és szerkezetekben.
              </p>
              <div className="rounded-3xl bg-red-50/50 p-8 border border-red-100 my-8">
                <h4 className="text-xl font-bold text-red-900 mb-4 uppercase tracking-tight">Egy tipikus csőtörés esetén:</h4>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {[
                    "gyorsan terjed a víz",
                    "átnedvesedik a fal",
                    "megnő a vízszámla",
                    "penészesedés indulhat",
                    "statikai károk is kialakulhatnak"
                  ].map(item => (
                    <li key={item} className="flex items-center gap-3 text-red-800">
                      <AlertTriangle className="h-5 w-5 text-red-500 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p>
                Ezért a csőtörés elhárítás 0-24 rendszerben működik, hogy azonnal reagáljunk.
              </p>
              <h3 className="text-2xl font-black text-foreground uppercase tracking-tight pt-8">Mit csinálunk csőtörés esetén?</h3>
              <p>A folyamat minden esetben gyors és strukturált:</p>
              
              <div className="grid gap-4 mt-8 sm:gap-8">
                {[
                  { step: 1, title: "Azonnali telefonos egyeztetés", desc: "A probléma leírása után azonnal indul a szerelő." },
                  { step: 2, title: "Helyszíni felmérés", desc: "Modern eszközökkel beazonosítjuk a hibát." },
                  { step: 3, title: "Víz elzárása / károk csökkentése", desc: "Elsődleges cél a további vízfolyás megállítása." },
                  { step: 4, title: "Javítás", desc: "Ideiglenes vagy végleges csőjavítás." },
                  { step: 5, title: "Ellenőrzés", desc: "Megnézzük, nincs-e további szivárgás." }
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4 bg-slate-50 p-5 rounded-[2rem] border border-slate-100 sm:gap-6 sm:p-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground text-lg font-black sm:h-12 sm:w-12 sm:text-xl">
                      {item.step}
                    </div>
                    <div>
                      <strong className="block text-xl font-bold text-foreground mb-1 uppercase tracking-tight">{item.title}</strong>
                      <span className="text-base">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sürgősségi vízszerelés */}
          <div className="group rounded-[2.5rem] bg-white p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] sm:p-16 border border-slate-100 transition-all hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)]">
            <h2 className="mb-8 text-3xl font-black tracking-tight text-foreground lg:text-5xl uppercase sm:text-4xl">
              Sürgősségi vízszerelés Budapesten – <span className="text-secondary">amikor minden perc számít</span>
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground font-medium leading-relaxed space-y-6">
              <p>A sürgősségi vízszerelés akkor szükséges, amikor nem lehet várni. Ilyen esetek:</p>
              <ul className="grid gap-4 sm:grid-cols-2 list-none p-0">
                {["hirtelen csőtörés", "nagy vízszivárgás", "teljes elzáródás", "csap vagy vezeték hiba"].map(item => (
                  <li key={item} className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <Zap className="h-6 w-6 text-secondary" />
                    <span className="font-bold text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-primary text-white p-6 rounded-[2.5rem] shadow-xl mt-12 sm:p-10">
                 <h4 className="text-xl font-black mb-6 uppercase tracking-tight text-center sm:text-2xl">A sürgősségi szolgáltatás lényege:</h4>
                 <div className="grid gap-6 sm:grid-cols-3">
                   {["azonnali reakció", "gyors kiszállás", "azonnali hibaelhárítás"].map(item => (
                     <div key={item} className="text-center">
                        <div className="mb-3 flex justify-center text-secondary"><CheckCircle className="h-6 w-6 sm:h-8 sm:w-8" /></div>
                        <div className="text-base font-black uppercase tracking-tight sm:text-lg">👉 {item}</div>
                     </div>
                   ))}
                 </div>
                 <p className="mt-8 text-center text-lg font-bold text-white/80 italic sm:text-xl">
                   "Nem időpontra dolgozunk, hanem azonnali helyzetekre."
                 </p>
              </div>
            </div>
          </div>

          {/* Vízszerelő gyorsszolgálat – hogyan működik? */}
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="group rounded-[2.5rem] bg-white p-10 shadow-sm border border-slate-100 transition-all hover:shadow-xl">
              <h2 className="mb-8 text-3xl font-black text-foreground uppercase tracking-tight">
                Vízszerelő gyorsszolgálat – <span className="text-secondary">hogyan működik?</span>
              </h2>
              <div className="space-y-6 text-muted-foreground font-medium">
                <p>A vízszerelő gyorsszolgálat egy folyamatos készenléti rendszer. Ez azt jelenti:</p>
                <ul className="space-y-3">
                  {["nem kell napokat várni", "nem kell külön időpont", "sürgős esetben indul a szerelő"].map(item => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-secondary" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="pt-4 font-bold text-foreground uppercase">Ez különösen fontos:</p>
                <ul className="grid grid-cols-2 gap-3">
                   {["csőtörés 0-24 esetén", "vízszivárgásnál", "lakás elázásnál", "ipari hibáknál"].map(item => (
                     <li key={item} className="text-sm font-black p-3 bg-slate-50 rounded-xl border border-slate-100">{item}</li>
                   ))}
                </ul>
              </div>
            </div>

            <div className="group rounded-[2.5rem] bg-white p-10 shadow-sm border border-slate-100 transition-all hover:shadow-xl">
              <h2 className="mb-8 text-3xl font-black text-foreground uppercase tracking-tight">
                Vízszerelő 0-24 Budapest – <span className="text-secondary">éjjel és nappal</span>
              </h2>
              <div className="space-y-6 text-muted-foreground font-medium">
                <p>A vízvezeték hibák nem várják meg a munkaidőt. Ezért szolgáltatásunk:</p>
                <div className="grid gap-4">
                  {[
                    { icon: Clock, text: "0-24 elérhető" },
                    { icon: Waves, text: "hétvégén is működik" },
                    { icon: Shield, text: "ünnepnapokon is hívható" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 bg-slate-50 p-4 rounded-2xl">
                       <item.icon className="h-6 w-6 text-secondary" />
                       <span className="font-bold">{item.text}</span>
                    </div>
                  ))}
                </div>
                <p className="pt-4 text-center text-lg font-bold text-primary">
                  A cél, hogy ne maradj segítség nélkül, amikor a legnagyobb a baj.
                </p>
              </div>
            </div>
          </div>

          {/* Kerület kiemelt gyors kiszállás */}
          <div className="group rounded-[2.5rem] bg-primary p-6 sm:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 blur-[100px] rounded-full" />
            <div className="relative z-10">
              <h2 className="mb-8 text-3xl font-black uppercase tracking-tight text-center sm:text-4xl">
                <span className="text-secondary">11., 13. és 14. kerület</span> <br /> kiemelt gyors kiszállás
              </h2>
              <div className="grid gap-12 lg:grid-cols-2">
                <div className="space-y-6">
                  <p className="text-lg text-white/80 font-medium sm:text-xl">Budapesten belül kiemelten gyors kiszállást biztosítunk:</p>
                  <div className="flex flex-wrap gap-3 sm:gap-4">
                     {["11. kerület", "13. kerület", "14. kerület"].map(k => (
                       <div key={k} className="bg-white/10 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/20 font-black text-lg sm:px-6 sm:py-4 sm:text-xl">{k}</div>
                     ))}
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-[2rem] border border-white/10 sm:p-8">
                  <h4 className="text-xl font-bold mb-6 uppercase tracking-tight text-secondary">Ezekben a kerületekben gyakoriak:</h4>
                  <ul className="space-y-4">
                     {["társasházi csőtörések", "régi vezeték hibák", "vízszivárgások"].map(item => (
                       <li key={item} className="flex items-center gap-4 text-lg font-medium">
                         <Zap className="h-5 w-5 text-secondary" />
                         {item}
                       </li>
                     ))}
                  </ul>
                  <p className="mt-8 text-secondary font-black text-center uppercase tracking-widest">A gyors reakció itt különösen fontos.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Milyen hibákat javít & Miért fontos az azonnali vízszerelés? */}
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="group rounded-[2.5rem] bg-white p-10 shadow-sm border border-slate-100 transition-all hover:shadow-xl">
               <h2 className="mb-8 text-3xl font-black text-foreground uppercase tracking-tight">
                 Milyen hibákat javít a <span className="text-secondary">vízszerelő szolgálat?</span>
               </h2>
               <div className="space-y-6 text-muted-foreground font-medium">
                 <p>Szolgáltatásunk nem csak csőtörésre korlátozódik. Gyakoribb hibák:</p>
                 <div className="grid grid-cols-2 gap-3">
                    {[
                      "csőtörés", "csőrepedés", "vízszivárgás falban", "eldugult lefolyó",
                      "WC tartály hiba", "csaptelep meghibásodás", "bojler problémák", "nyomásesés"
                    ].map(item => (
                      <div key={item} className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-sm font-black flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-secondary" /> {item}
                      </div>
                    ))}
                 </div>
               </div>
            </div>

            <div className="group rounded-[2.5rem] bg-white p-10 shadow-sm border border-slate-100 transition-all hover:shadow-xl">
               <h2 className="mb-8 text-3xl font-black text-foreground uppercase tracking-tight">
                 Miért fontos az <span className="text-secondary">azonnali vízszerelés?</span>
               </h2>
               <div className="space-y-6 text-muted-foreground font-medium">
                 <p>A víz az egyik leggyorsabban kárt okozó elem. Ha késlekedés történik:</p>
                 <ul className="space-y-4">
                    {[
                      { t: "nő a javítási költség", i: AlertTriangle },
                      { t: "szerkezeti károk alakulhatnak ki", i: AlertTriangle },
                      { t: "penész jelenhet meg", i: AlertTriangle },
                      { t: "lakhatatlanná válhat egy helyiség", i: AlertTriangle }
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-4 text-red-600 font-black">
                         <item.i className="h-6 w-6 shrink-0" />
                         {item.t}
                      </li>
                    ))}
                 </ul>
                 <p className="pt-4 text-center font-black text-primary uppercase">
                   Ezért az azonnali kiszállás nem kényelmi, hanem kármegelőzési kérdés.
                 </p>
               </div>
            </div>
          </div>

          {/* Miért minket hívnak csőtörés esetén? */}
          <div className="group rounded-[2.5rem] bg-white p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] sm:p-16 border border-slate-100 transition-all hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.08)]">
             <h2 className="mb-8 text-3xl font-black tracking-tight text-foreground lg:text-6xl uppercase text-center sm:text-4xl">
               Miért minket hívnak <span className="text-secondary">csőtörés esetén?</span>
             </h2>
             <p className="text-center text-lg text-muted-foreground mb-12 font-medium sm:text-xl">Ügyfeleink azért választanak minket, mert:</p>
             <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
                {[
                  "0-24 vízszerelő szolgáltatást nyújtunk",
                  "gyors kiszállást biztosítunk",
                  "tapasztalt szakemberek dolgoznak",
                  "modern hibafeltárást használunk",
                  "tartós megoldást adunk"
                ].map(item => (
                  <div key={item} className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 text-center flex flex-col items-center gap-4 transition-all hover:bg-secondary/5 hover:border-secondary/30 sm:p-8">
                     <div className="h-10 w-10 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary sm:h-12 sm:w-12">
                        <ThumbsUp className="h-5 w-5 sm:h-6 sm:w-6" />
                     </div>
                     <span className="text-base font-black text-foreground uppercase tracking-tight sm:text-lg">{item}</span>
                  </div>
                ))}
                <div className="bg-primary text-white p-6 rounded-[2rem] flex items-center justify-center text-center font-black text-lg uppercase tracking-tight sm:p-8 sm:text-xl">
                  Nem csak elzárjuk a vizet, hanem megszüntetjük a problémát.
                </div>
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
      <section className="relative bg-background py-24 lg:py-32 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-20 lg:grid-cols-2 lg:items-center">
            
            {/* Why Choose Us */}
            <div className="relative">
              <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-secondary/10 px-4 py-2 text-sm font-black uppercase tracking-widest text-secondary border border-secondary/20">
                Miért válasszon minket?
              </div>
              <h2 className="mb-8 text-3xl font-black tracking-tight text-foreground lg:text-6xl uppercase sm:text-4xl">
                A megbízhatóság <br />
                <span className="text-secondary">alapköve</span>
              </h2>
              <p className="mb-12 text-lg text-muted-foreground leading-relaxed sm:text-xl">
                Egy szakszerűtlenül elvégzett javítás hatalmas extra költségeket okozhat. Mi a legmagasabb szakmai színvonalat garantáljuk.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                <div className="space-y-6">
                  <h4 className="font-black text-2xl text-primary uppercase tracking-tight">Így dolgozunk:</h4>
                  <ul className="space-y-4">
                    {[
                      "Gyorsan és precízen",
                      "Pontosan, határidőre",
                      "Tiszta munkaterület",
                      "100% garanciavállalás"
                    ].map(item => (
                      <li key={item} className="flex items-center gap-3 text-lg font-bold text-foreground/80">
                        <div className="rounded-full bg-secondary/10 p-1.5"><CheckCircle className="h-5 w-5 text-secondary" /></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <h4 className="font-black text-2xl text-primary uppercase tracking-tight">Amit kap:</h4>
                  <ul className="space-y-4">
                    {[
                      "Azonnali kiszállás",
                      "Korrekt, fix árak",
                      "Hivatalos számla",
                      "Profi célszerszámok"
                    ].map(item => (
                      <li key={item} className="flex items-center gap-3 text-lg font-bold text-foreground/80">
                        <div className="rounded-full bg-green-500/10 p-1.5"><Zap className="h-5 w-5 text-green-500" /></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary to-slate-900 p-10 text-white shadow-2xl">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-secondary/20 blur-3xl" />
                <div className="flex items-center gap-5 mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary shadow-lg shadow-secondary/20">
                    <Award className="h-10 w-10 text-secondary-foreground" />
                  </div>
                  <h3 className="text-3xl font-black uppercase tracking-tight text-white">BIZALOM</h3>
                </div>
                <p className="text-xl text-white/80 leading-relaxed font-medium mb-6">
                  Egy jó vízszerelő nem csak gyors, hanem pontos és megbízható is. A cél minden esetben:
                </p>
                <ul className="space-y-3 text-lg font-bold">
                  {[
                    "a hiba megszüntetése",
                    "a további károk elkerülése",
                    "hosszú távú megoldás"
                  ].map(item => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-secondary" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Time & Price Info Blocks */}
            <div className="space-y-8">
              <div className="group rounded-[2.5rem] border border-slate-100 bg-slate-50 p-10 shadow-sm transition-all hover:shadow-xl hover:bg-white">
                <h3 className="mb-8 flex items-center gap-4 text-3xl font-black text-foreground uppercase tracking-tight">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Clock className="h-7 w-7" />
                  </div>
                  Kiszállási Idő
                </h3>
                <div className="grid gap-4">
                  <div className="flex justify-between items-center bg-white p-6 rounded-3xl border border-slate-100 group-hover:border-secondary/30 transition-colors">
                    <span className="font-bold text-xl text-foreground/70">Budapest:</span>
                    <span className="text-3xl font-black text-secondary">30–60p</span>
                  </div>
                  <div className="flex justify-between items-center bg-white p-6 rounded-3xl border border-slate-100 group-hover:border-secondary/30 transition-colors">
                    <span className="font-bold text-xl text-foreground/70">Pest megye:</span>
                    <span className="text-3xl font-black text-secondary">60–90p</span>
                  </div>
                </div>
              </div>

              <div className="group rounded-[2.5rem] border border-slate-100 bg-slate-50 p-10 shadow-sm transition-all hover:shadow-xl hover:bg-white">
                <h3 className="mb-8 flex items-center gap-4 text-3xl font-black text-foreground uppercase tracking-tight">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Zap className="h-7 w-7" />
                  </div>
                  Árazás
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Fix, transzparens árak. Nincsenek rejtett költségek és meglepetések a munka végén.
                </p>
                <div className="bg-secondary/10 text-secondary p-8 rounded-[2rem] font-black text-2xl text-center border border-secondary/20 shadow-inner">
                  Hívjon a pontos árért!
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Process Steps Visual */}
      <section className="relative overflow-hidden bg-primary py-24 lg:py-32">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <div className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-secondary">
              Munkamenetünk
            </div>
            <h2 className="mb-6 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl uppercase">
              Hogyan <span className="text-secondary">dolgozunk?</span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl font-medium text-white/80">
              Egyszerű, gyors és transzparens folyamat a hívástól a garanciavállalásig.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.step} className="group relative rounded-[2.5rem] bg-white/5 p-10 backdrop-blur-xl border border-white/10 transition-all hover:bg-white/10 hover:border-white/20">
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary text-2xl font-black text-secondary-foreground shadow-lg shadow-secondary/20 transition-transform group-hover:scale-110 group-hover:rotate-3">
                  {step.step}
                </div>
                <h3 className="mb-4 text-2xl font-black text-white uppercase tracking-tight">{step.title}</h3>
                <p className="text-lg font-medium leading-relaxed text-white/70">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-24 text-center">
             <div className="inline-flex flex-col items-center gap-8">
                <p className="text-3xl font-black text-white uppercase tracking-tighter sm:text-4xl">
                   GYORS és <span className="text-secondary">TARTÓS</span> megoldás.
                </p>
               <PhoneLink
                 href={`tel:${PHONE_NUMBER}`}
                 className="group relative flex items-center justify-center gap-6 overflow-hidden rounded-2xl bg-secondary px-12 py-8 text-3xl font-black text-secondary-foreground shadow-[0_20px_50px_rgba(var(--secondary),0.3)] transition-all hover:scale-105 active:scale-95"
               >
                 <Phone className="h-10 w-10 animate-bounce" />
                 <span>{PHONE_DISPLAY}</span>
               </PhoneLink>
             </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <div className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-secondary">
              Segítség
            </div>
            <h2 className="mb-6 text-4xl font-black tracking-tight text-foreground sm:text-5xl uppercase">
              Gyakori <span className="text-secondary">kérdések</span>
            </h2>
            <p className="text-xl font-medium text-muted-foreground">
              Minden, amit a vízszerelési folyamatról tudni érdemes.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="rounded-3xl border border-slate-100 bg-slate-50 px-8 py-2 shadow-sm transition-all hover:bg-white hover:shadow-xl data-[state=open]:border-secondary/30 data-[state=open]:bg-white data-[state=open]:shadow-xl"
              >
                <AccordionTrigger className="group py-6 text-left text-xl font-black text-foreground hover:text-secondary hover:no-underline">
                  <span>{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-8 text-lg font-medium leading-relaxed text-muted-foreground/90">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Comprehensive SEO & Internal Linking Section */}
      <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32 border-t border-slate-200">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <div className="mb-4 text-sm font-black uppercase tracking-[0.3em] text-primary/60">
              Szakmai Útmutató
            </div>
            <h2 className="mb-6 text-4xl font-black tracking-tight text-foreground sm:text-5xl uppercase">
              Átfogó <span className="text-primary">Vízszerelési</span> Tudástár
            </h2>
            <p className="mx-auto max-w-3xl text-xl font-medium text-muted-foreground leading-relaxed">
              A megelőzéstől a sürgősségi elhárításig: ismerje meg mélyrehatóbban szakterületeinket és a modern vízszerelés folyamatait.
            </p>
          </div>

          <div className="space-y-16">
            {/* Vízszerelés Block */}
            <div className="group rounded-[2.5rem] bg-white p-10 shadow-sm border border-slate-100 transition-all hover:shadow-2xl">
              <h3 className="mb-6 text-3xl font-black text-primary uppercase tracking-tight">
                Professzionális Vízszerelés <span className="text-secondary">0-24</span>
              </h3>
              <div className="prose prose-lg max-w-none text-muted-foreground font-medium leading-relaxed">
                <p>
                  Egy ingatlan vízvezeték-hálózatának állapota alapvetően meghatározza az ott élők komfortérzetét és biztonságát. A <strong>vízszerelés</strong> nem csupán a látható csaptelepek cseréjéből áll, hanem egy összetett rendszer karbantartását és javítását jelenti. Sokan hajlamosak halogatni a kisebbnek tűnő problémák javítását, de a tapasztalat azt mutatja, hogy a <strong>vízszerelés 0-24</strong> órás rendelkezésre állása azért elengedhetetlen, mert ezek a hibák váratlanul drasztikus méreteket ölthetnek.
                </p>
                <p>
                  Amikor a víznyomás lecsökken, vagy megmagyarázhatatlan nedvesedés jelenik meg a falon, azonnali szakértői beavatkozásra van szükség. Csapatunk a nap 24 órájában felkészülten várja hívását. A legmodernebb diagnosztikai eszközökkel dolgozunk, hogy a hiba forrását a lehető legkisebb rombolással tárjuk fel.
                </p>
                <div className="mt-8 rounded-2xl bg-slate-50 p-6 border border-slate-100 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                  <div className="font-black text-lg mb-0 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-secondary" />
                    Tudjon meg többet: <Link href="/sos-vizszerelo-0-24" className="underline decoration-secondary decoration-4 underline-offset-4 hover:text-secondary transition-colors">Vízszerelő 0-24 részletes tájékoztató &rarr;</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Csőtörés Block */}
            <div className="group rounded-[2.5rem] bg-white p-10 shadow-sm border border-slate-100 transition-all hover:shadow-2xl">
              <h3 className="mb-6 text-3xl font-black text-red-700 flex items-center gap-4 uppercase tracking-tight">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-100 text-red-600">
                  <AlertTriangle className="h-7 w-7" />
                </div>
                Csőtörés Elhárítás
              </h3>
              <div className="prose prose-lg max-w-none text-muted-foreground font-medium leading-relaxed">
                <p>
                  A vízszerelési vészhelyzetek közül a <strong>csőtörés</strong> a legveszélyesebb. Egy komolyabb csőtörés során percenként akár több tíz liter víz is a falakba vagy az aljzatba áramolhat, tönkretéve a burkolatokat és veszélyeztetve az elektromos hálózatot.
                </p>
                <p>
                  A <strong>csőtörés 0-24</strong> órás elhárítása cégünk egyik legfontosabb profilja. Gyorsreagálású rendszerünk garantálja, hogy Budapesten és vonzáskörzetében a legrövidebb idő alatt a helyszínre érjünk. Modern technológiákkal – szükség esetén célzott bontással vagy akár földmunkával – szüntetjük meg a szivárgást.
                </p>
                <div className="mt-8 rounded-2xl bg-red-50 p-6 border border-red-100 group-hover:bg-red-600 group-hover:text-white transition-colors duration-500">
                  <div className="font-black text-lg mb-0 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-white" />
                    Technológiáink: <Link href="/csotores-elharitas" className="underline decoration-red-400 decoration-4 underline-offset-4 hover:text-red-200 transition-colors">Csőtörés elhárítás és műszeres bemérést &rarr;</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Duguláselhárítás Block */}
            <div className="group rounded-[2.5rem] bg-white p-10 shadow-sm border border-slate-100 transition-all hover:shadow-2xl">
              <h3 className="mb-6 text-3xl font-black text-primary flex items-center gap-4 uppercase tracking-tight">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Waves className="h-7 w-7" />
                </div>
                Duguláselhárítás
              </h3>
              <div className="prose prose-lg max-w-none text-muted-foreground font-medium leading-relaxed">
                <p>
                  A lefolyók elzáródása legalább olyan gyakori probléma, mint a vízszivárgás. A szakszerű <strong>duguláselhárítás</strong> lényege a mechanikai tisztítás nagy teljesítményű gépekkel, amelyek a cső teljes keresztmetszetét megtisztítják.
                </p>
                <div className="mt-8 rounded-2xl bg-slate-50 p-6 border border-slate-100 group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors duration-500">
                  <div className="font-black text-lg mb-0 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                    Megoldásunk: <Link href="/dugulaselharitas" className="underline decoration-primary decoration-4 underline-offset-4 hover:text-primary transition-colors">Duguláselhárítás szolgáltatásunk &rarr;</Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Summary / Internal linking CTA */}
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-primary p-12 text-center text-white shadow-2xl">
              <div className="absolute top-0 right-0 h-32 w-32 bg-secondary/20 blur-3xl rounded-full" />
              <h4 className="relative z-10 text-3xl font-black uppercase tracking-tight mb-6">Minden problémára egyetlen megoldás: <span className="text-secondary">Aqua024</span></h4>
              <p className="relative z-10 text-xl font-medium text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
                Legyen szó tervezett felújításról vagy éjszakai csőtörésről, csapatunk a legmagasabb szakmai színvonalon áll az Ön rendelkezésére.
              </p>
              <div className="relative z-10 flex flex-wrap justify-center gap-6">
                <Link href="/rolunk" className="rounded-2xl bg-white/10 px-8 py-4 font-black uppercase tracking-wide border border-white/20 transition-all hover:bg-white hover:text-primary">Rólunk</Link>
                <Link href="/kapcsolat" className="rounded-2xl bg-secondary px-8 py-4 font-black uppercase tracking-wide text-secondary-foreground transition-all hover:scale-105">Kapcsolat</Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service Areas - SEO Powerhouse */}
      <section className="relative overflow-hidden bg-white py-24 lg:py-32 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <div className="mb-4 flex justify-center">
               <div className="rounded-2xl bg-secondary/10 p-4 text-secondary shadow-inner">
                  <MapPin className="h-10 w-10" />
               </div>
            </div>
            <h2 className="mb-6 text-4xl font-black tracking-tight text-foreground sm:text-5xl uppercase">
              Szolgáltatási <span className="text-secondary">területünk</span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl font-medium text-muted-foreground">
              Vízszerelő 0-24 szolgáltatásunk Budapest minden kerületében és Pest megye számos településén elérhető.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-[2.5rem] bg-slate-50 p-10 border border-slate-100 shadow-sm transition-all hover:bg-white hover:shadow-xl">
              <h3 className="mb-8 text-2xl font-black text-primary flex items-center gap-4 uppercase tracking-tight">
                 <div className="h-3 w-3 rounded-full bg-secondary" />
                 Budapest kerületei
              </h3>
              <div className="flex flex-wrap gap-2">
                {budapestDistricts.map(district => (
                  <span key={district} className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-xl text-sm font-bold hover:border-secondary hover:text-secondary hover:scale-105 transition-all cursor-default">
                    {district}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="rounded-[2.5rem] bg-slate-50 p-10 border border-slate-100 shadow-sm transition-all hover:bg-white hover:shadow-xl">
              <h3 className="mb-8 text-2xl font-black text-primary flex items-center gap-4 uppercase tracking-tight">
                 <div className="h-3 w-3 rounded-full bg-secondary" />
                 Pest megye települések
              </h3>
              <div className="flex flex-wrap gap-2">
                {pestCountyTowns.map(town => (
                  <span key={town} className="bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-xl text-sm font-bold hover:border-secondary hover:text-secondary hover:scale-105 transition-all cursor-default">
                    {town}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Urgency CTA */}
      <section className="relative overflow-hidden bg-slate-900 py-32 text-center text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/premium-hero-plumber.png"
            alt="Háttér"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm" />
        </div>
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AlertTriangle className="mx-auto h-20 w-20 text-secondary mb-8 animate-pulse" />
          <h2 className="mb-8 text-3xl font-black lg:text-7xl tracking-tighter uppercase text-white sm:text-5xl">
            🚨 Azonnali <br /> <span className="text-secondary">vízszerelőre van szüksége?</span>
          </h2>
          <p className="mb-12 text-xl font-medium text-white/90 leading-relaxed sm:text-2xl">
            Ne várjon, amíg a kár nagyobb lesz! 📞 Hívjon most – 0-24 vízszerelő gyorsszolgálat
          </p>
          
          <div className="flex flex-col items-center justify-center gap-10">
            <PhoneLink
              href={`tel:${PHONE_NUMBER}`}
              className="group relative inline-flex items-center justify-center gap-4 overflow-hidden rounded-[2rem] bg-secondary px-8 py-7 text-2xl font-black text-secondary-foreground shadow-[0_0_80px_rgba(var(--secondary),0.4)] transition-all hover:scale-105 active:scale-95 sm:gap-6 sm:px-12 sm:py-10 sm:text-4xl"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
              <Phone className="h-8 w-8 animate-bounce sm:h-12 sm:w-12" />
              <span>{PHONE_DISPLAY}</span>
            </PhoneLink>
            
            <div className="flex flex-wrap justify-center gap-6 opacity-80">
              {["⚡ Azonnali kiszállás Budapesten", "🔧 Csőtörés és vízszivárgás gyors elhárítása"].map(label => (
                <div key={label} className="flex items-center gap-3 text-lg font-bold text-white">
                  <CheckCircle className="h-6 w-6 text-secondary" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
