"use client"

import { Phone, MessageSquare, Mail } from "lucide-react"

const PHONE_NUMBER = "+36305988450"
const EMAIL = "aqva.info@gmail.com"

export function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card shadow-[0_-4px_12px_rgba(0,0,0,0.15)] md:hidden">
      <div className="grid grid-cols-3">
        {/* Call */}
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="flex flex-col items-center gap-1 bg-accent py-3 text-accent-foreground"
        >
          <Phone className="h-6 w-6" />
          <span className="text-xs font-bold">Hívás</span>
        </a>

        {/* SMS */}
        <a
          href={`sms:${PHONE_NUMBER}`}
          className="flex flex-col items-center gap-1 bg-secondary py-3 text-secondary-foreground"
        >
          <MessageSquare className="h-6 w-6" />
          <span className="text-xs font-bold">SMS</span>
        </a>

        {/* Email */}
        <a
          href={`mailto:${EMAIL}`}
          className="flex flex-col items-center gap-1 bg-primary py-3 text-primary-foreground"
        >
          <Mail className="h-6 w-6" />
          <span className="text-xs font-bold">Email</span>
        </a>
      </div>
    </div>
  )
}
