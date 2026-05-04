"use client"

import { AlertTriangle, ExternalLink, LogIn, Mail, Clock, Shield } from "lucide-react"
import Link from "next/link"
import Logo from "./Logo"
import { motion } from "framer-motion"
import { useEffect } from "react"

export function SuspendedPage() {
  useEffect(() => {
    // Add overflow hidden to body when suspended
    document.body.style.overflow = 'hidden'
    document.documentElement.style.overflow = 'hidden'
    
    return () => {
      // Restore overflow when leaving suspended state
      document.body.style.overflow = ''
      document.documentElement.style.overflow = ''
    }
  }, [])

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center px-4 py-6 relative overflow-hidden bg-transparent select-none touch-none">
      {/* Fix háttér réteg a szüneteltetett oldalhoz */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#020617]">
        <div className="w-full h-full opacity-40">
          <svg width="100%" height="100%" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <style>{`
              @keyframes pulse {
                0%, 100% { opacity: 0.1; }
                50% { opacity: 0.3; }
              }
              @keyframes float {
                0% { transform: translateY(0) rotate(0deg); }
                50% { transform: translateY(-20px) rotate(5deg); }
                100% { transform: translateY(0) rotate(0deg); }
              }
              @keyframes glitch-x {
                0% { transform: translate(960px, 540px); }
                2% { transform: translate(962px, 538px); }
                4% { transform: translate(958px, 542px); }
                6% { transform: translate(960px, 540px); }
                100% { transform: translate(960px, 540px); }
              }
              .pulse { animation: pulse 4s infinite; }
              .float { animation: float 6s ease-in-out infinite; }
              .glitch-x { animation: glitch-x 3s infinite; }
            `}</style>
            <defs>
              <radialGradient id="grad" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" style={{ stopColor: '#0f172a', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: '#020617', stopOpacity: 1 }} />
              </radialGradient>
              <pattern id="dots" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="rgba(56, 189, 248, 0.15)" />
              </pattern>
              <symbol id="merion-m" viewBox="0 0 100 100">
                <path d="M20 80V20L50 50L80 20V80" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </symbol>
            </defs>
            <rect width="1920" height="1080" fill="url(#grad)" />
            <rect width="1920" height="1080" fill="url(#dots)" />
            <g className="glitch-x" opacity="0.4">
              <circle r="300" stroke="#38bdf8" strokeWidth="1" fill="none" />
              <circle r="350" stroke="#38bdf8" strokeWidth="0.5" fill="none" strokeDasharray="10 20" />
              <path d="M-200,-200 L200,200 M200,-200 L-200,200" stroke="#ef4444" strokeWidth="40" strokeLinecap="round" />
            </g>
            <g color="#38bdf8">
              <use href="#merion-m" x="100" y="200" width="120" height="120" opacity="0.03" className="float" style={{ animationDelay: '0s' }}/>
              <use href="#merion-m" x="1600" y="150" width="150" height="150" opacity="0.02" className="float" style={{ animationDelay: '1s' }}/>
              <use href="#merion-m" x="400" y="700" width="100" height="100" opacity="0.03" className="float" style={{ animationDelay: '2s' }}/>
              <use href="#merion-m" x="1400" y="800" width="180" height="180" opacity="0.02" className="float" style={{ animationDelay: '3s' }}/>
              <use href="#merion-m" x="900" y="100" width="80" height="80" opacity="0.04" className="float" style={{ animationDelay: '4s' }}/>
            </g>
            <g fontFamily="monospace" fontSize="12" fill="#38bdf8" opacity="0.4">
              <text x="50" y="50" className="pulse">CRITICAL_SYSTEM_SUSPENSION...</text>
              <text x="50" y="70">AUTH_STATUS: DENIED</text>
              <text x="1700" y="1000">LINK_CHECK: FAILED</text>
              <text x="1700" y="1020" className="pulse">REASON: UNPAID_INVOICE</text>
              <text x="100" y="500" opacity="0.1" fontSize="80" fontWeight="bold">SUSPENDED</text>
              <text x="1350" y="600" opacity="0.1" fontSize="80" fontWeight="bold">402_REQUIRED</text>
            </g>
            <g opacity="0.05">
              <rect x="0" y="150" width="1920" height="1" fill="#ef4444">
                <animate attributeName="y" values="150;160;150" dur="0.1s" repeatCount="indefinite" />
              </rect>
              <rect x="0" y="850" width="1920" height="1" fill="#38bdf8">
                <animate attributeName="y" values="850;840;850" dur="0.15s" repeatCount="indefinite" />
              </rect>
            </g>
          </svg>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#38bdf8]/5 to-transparent animate-scan" />
      </div>

      <div className="w-full max-w-xl relative z-10">
        {/* Main Card */}
        <div className="glass-card rounded-2xl p-8 mb-8">
          {/* Warning Icon */}
          <div className="flex justify-center mb-6">
            <motion.div
              animate={{ 
                x: [0, -2, 2, -2, 2, 0],
                rotate: [0, -1, 1, -1, 1, 0] 
              }}
              transition={{ 
                duration: 0.5, 
                repeat: Infinity, 
                repeatDelay: 3,
                ease: "easeInOut"
              }}
            >
              <AlertTriangle 
                className="h-16 w-16 text-primary drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]" 
                strokeWidth={1.2} 
              />
            </motion.div>
          </div>

          {/* Status Badge */}
          <div className="flex justify-center mb-6">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-destructive/10 text-destructive border border-destructive/20"
            >
              <Clock className="h-3.5 w-3.5" />
              Fizetési határidő lejárt
            </div>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white tracking-tight balance">
            A weboldal ideiglenesen szünetel
          </h1>

          {/* Description */}
          <p className="text-center mb-8 text-sm md:text-base leading-relaxed text-slate-400 balance">
            Ez a weboldal jelenleg nem elérhető fizetési elmaradás miatt. 
            A szolgáltatás helyreállításához kérjük, rendezze a függő számláját.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 mb-8">
            <Link 
              href="https://ugyfelkapu.meriondigital.hu" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-base font-semibold transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)]"
              style={{ 
                background: "linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%)",
                color: "#0a0a0b",
              }}
            >
              <LogIn className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
              Belépés az Ügyfélkapuba
              <ExternalLink className="h-4 w-4 opacity-60" />
            </Link>
            <Link 
              href="mailto:hello@meriondigital.hu"
              className="group inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl text-base font-medium transition-all duration-300 border border-white/10 hover:border-white/20 hover:bg-white/5"
              style={{ 
                color: "#fafafa",
              }}
            >
              <Mail className="h-5 w-5 transition-transform group-hover:scale-110 text-primary" />
              hello@meriondigital.hu
            </Link>
          </div>

          {/* Divider */}
          <div 
            className="h-px w-full mb-6"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent)" }}
          />

          {/* Info Box */}
          <div className="pt-6 mt-6 border-t border-white/5">
            <div className="bg-primary/5 border border-primary/10 rounded-2xl p-6 relative overflow-hidden group/info">
              <div className="absolute top-0 right-0 p-3 opacity-20">
                <Shield className="h-12 w-12 text-primary rotate-12" />
              </div>
              
              <h3 className="font-bold mb-4 text-base text-white flex items-center gap-2">
                <div className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Hogyan állíthatom vissza a weboldalam?
              </h3>
              
              <ol className="grid gap-3 relative z-10">
                {[
                  "Lépjen be az Ügyfélkapuba",
                  "Tekintse meg és rendezze a függő számláit",
                  "A fizetés után a weboldal automatikusan helyreáll"
                ].map((step, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-300 group/item hover:text-white transition-colors">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-[10px] font-bold text-primary group-hover/item:bg-primary group-hover/item:text-black transition-all">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 pt-6 border-t border-white/5">
          <Link 
            href="https://www.meriondigital.hu" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block transition-all duration-300 hover:scale-105"
          >
            <Logo />
          </Link>
        </div>
      </div>
    </div>
  )
}
