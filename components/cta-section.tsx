import { Phone, Clock, Shield, Zap } from "lucide-react"

const PHONE_NUMBER = "+36305988450"
const PHONE_DISPLAY = "+36 30 598 8450"

interface CTASectionProps {
  title?: string
  subtitle?: string
  variant?: "primary" | "secondary" | "urgent"
}

export function CTASection({ 
  title = "Azonnal segítünk!",
  subtitle = "Hívjon most és 1-2 órán belül a helyszínen vagyunk.",
  variant = "primary"
}: CTASectionProps) {
  const isUrgent = variant === "urgent";

  const containerClasses = {
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-slate-50 text-foreground border-y border-border",
    urgent: "bg-gradient-to-br from-primary to-primary/95 text-primary-foreground relative overflow-hidden"
  }[variant];

  // A glow effect háttér a vészhelyzeti híváshoz
  const backgroundDecoration = isUrgent && (
    <div className="pointer-events-none absolute inset-0 z-0 opacity-20">
       <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary blur-[120px]" />
    </div>
  );

  return (
    <section className={`py-16 lg:py-24 ${containerClasses}`}>
      {backgroundDecoration}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-4 text-3xl font-bold tracking-tight lg:text-5xl">{title}</h2>
        <p className={`mb-10 text-lg sm:text-xl ${variant === "secondary" ? "text-muted-foreground" : "text-primary-foreground/90"}`}>{subtitle}</p>
        
        <a
          href={`tel:${PHONE_NUMBER}`}
          className={`inline-flex items-center gap-3 rounded-2xl px-10 py-5 text-xl font-bold transition-all sm:text-2xl ${
            isUrgent 
              ? "animate-pulse-glow bg-secondary text-primary hover:-translate-y-1 hover:shadow-xl" 
              : variant === "primary"
                ? "bg-secondary text-primary transition-transform hover:-translate-y-1 hover:shadow-lg"
                : "bg-primary text-primary-foreground shadow-lg hover:-translate-y-1 hover:shadow-xl"
          }`}
        >
          <Phone className={isUrgent ? "h-7 w-7 animate-bounce" : "h-6 w-6"} />
          {PHONE_DISPLAY}
        </a>

        <div className={`mt-10 flex flex-wrap items-center justify-center gap-6 font-medium sm:gap-10 sm:text-base ${variant === "secondary" ? "text-muted-foreground text-sm" : "text-primary-foreground/80 text-sm"}`}>
          <div className="flex items-center gap-2">
            <Clock className={`h-5 w-5 ${variant === "secondary" ? "text-secondary" : "text-secondary"}`} />
            <span>0-24 elérhetőség</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className={`h-5 w-5 ${variant === "secondary" ? "text-secondary" : "text-secondary"}`} />
            <span>1-2 óra kiszállás</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className={`h-5 w-5 ${variant === "secondary" ? "text-secondary" : "text-secondary"}`} />
            <span>Garanciával</span>
          </div>
        </div>
      </div>
    </section>
  )
}
