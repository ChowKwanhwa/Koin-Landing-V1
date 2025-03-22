"use client"

import type { ReactNode } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FounderParticleBackground from "./founder-particle-background"

export default function FounderLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#1B4D3E] to-[#0F2A22] text-white">
        <FounderParticleBackground />
        {children}
        <Footer />
      </main>
    </>
  )
}

