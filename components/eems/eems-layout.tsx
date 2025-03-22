"use client"

import type { ReactNode } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import EemsParticleBackground from "./eems-particle-background"

export default function EemsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#1A3320] to-[#0A1A0F] text-white">
        <EemsParticleBackground />
        {children}
        <Footer />
      </main>
    </>
  )
}

