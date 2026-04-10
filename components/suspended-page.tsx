"use client"

import { AlertTriangle, ExternalLink, LogIn, Mail, Clock, Shield } from "lucide-react"
import Link from "next/link"

export function SuspendedPage() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12"
      style={{
        backgroundColor: "#0a0a0b",
        color: "#fafafa",
        backgroundImage: "radial-gradient(ellipse at top, rgba(77, 181, 164, 0.08) 0%, transparent 50%), radial-gradient(ellipse at bottom, rgba(202, 138, 4, 0.05) 0%, transparent 50%)"
      }}
    >
      {/* Floating particles effect */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl animate-pulse"
          style={{ backgroundColor: "rgba(77, 181, 164, 0.03)" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{ backgroundColor: "rgba(202, 138, 4, 0.03)", animationDelay: "1s" }}
        />
      </div>

      <div className="w-full max-w-xl relative z-10">
        {/* Warning Icon */}
        <div className="flex justify-center mb-8">
          <div
            className="rounded-2xl p-4"
            style={{
              backgroundColor: "rgba(234, 179, 8, 0.1)",
              border: "1px solid rgba(234, 179, 8, 0.2)"
            }}
          >
            <AlertTriangle
              className="h-12 w-12"
              style={{ color: "#eab308" }}
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* Status Badge */}
        <div className="flex justify-center mb-6">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider"
            style={{
              backgroundColor: "rgba(239, 68, 68, 0.1)",
              color: "#f87171",
              border: "1px solid rgba(239, 68, 68, 0.25)"
            }}
          >
            <Clock className="h-3.5 w-3.5" />
            Fizetési határidő lejárt
          </div>
        </div>

        {/* Title */}
        <h1
          className="text-3xl md:text-4xl font-bold text-center mb-4"
          style={{
            color: "#fafafa",
            textWrap: "balance",
            letterSpacing: "-0.025em"
          }}
        >
          A weboldal ideiglenesen szünetel
        </h1>

        {/* Description */}
        <p
          className="text-center mb-10 text-base md:text-lg leading-relaxed"
          style={{
            color: "#a1a1aa",
            textWrap: "balance"
          }}
        >
          Ez a weboldal jelenleg nem elérhető fizetési elmaradás miatt.
          A szolgáltatás helyreállításához kérjük, rendezze a függő számláját.
        </p>

        {/* Main Card */}
        <div
          className="rounded-2xl p-8 mb-8"
          style={{
            backgroundColor: "rgba(24, 24, 27, 0.6)",
            border: "1px solid rgba(63, 63, 70, 0.5)",
            backdropFilter: "blur(12px)",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
          }}
        >
          {/* Action Buttons */}
          <div className="flex flex-col gap-3 mb-8">
            <Link
              href="https://www.meriondigital.hu/ugyfel"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-base font-semibold transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #4db5a4 0%, #3d9488 100%)",
                color: "#0a0a0b",
                boxShadow: "0 4px 20px rgba(77, 181, 164, 0.3)"
              }}
            >
              <LogIn className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
              Belépés az Ügyfélkapuba
              <ExternalLink className="h-4 w-4 opacity-60" />
            </Link>
            <Link
              href="mailto:hello@meriondigital.hu"
              className="group inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-base font-medium transition-all duration-300"
              style={{
                backgroundColor: "rgba(39, 39, 42, 0.8)",
                color: "#fafafa",
                border: "1px solid rgba(63, 63, 70, 0.8)"
              }}
            >
              <Mail className="h-5 w-5 transition-transform group-hover:scale-110" style={{ color: "#4db5a4" }} />
              hello@meriondigital.hu
            </Link>
          </div>

          {/* Divider */}
          <div
            className="h-px w-full mb-6"
            style={{ background: "linear-gradient(90deg, transparent, rgba(63, 63, 70, 0.8), transparent)" }}
          />

          {/* Info Box */}
          <div className="flex items-start gap-4">
            <div
              className="rounded-lg p-2.5 shrink-0"
              style={{ backgroundColor: "rgba(77, 181, 164, 0.1)" }}
            >
              <Shield className="h-5 w-5" style={{ color: "#4db5a4" }} />
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-sm" style={{ color: "#fafafa" }}>
                Hogyan állíthatom vissza a weboldalam?
              </h3>
              <ol className="text-sm space-y-1.5" style={{ color: "#71717a" }}>
                <li className="flex items-start gap-2">
                  <span className="font-medium" style={{ color: "#4db5a4" }}>1.</span>
                  Lépjen be az Ügyfélkapuba
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium" style={{ color: "#4db5a4" }}>2.</span>
                  Tekintse meg és rendezze a függő számláit
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium" style={{ color: "#4db5a4" }}>3.</span>
                  A fizetés után a weboldal automatikusan helyreáll
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <Link
            href="https://www.meriondigital.hu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300"
            style={{ color: "#71717a" }}
          >
            <span>Szolgáltató:</span>
            <span style={{ color: "#a1a1aa" }}>Merion Digital</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
