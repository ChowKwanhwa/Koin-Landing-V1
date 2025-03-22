"use client"

import type { ReactNode } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import MwcParticleBackground from "./mwc-particle-background"

export default function MwcLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#2D0845] to-[#0D0118] text-white">
        <MwcParticleBackground />
        {children}
        <Footer />
      </main>
    </>
  )
}

