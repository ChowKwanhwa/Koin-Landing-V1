import Header from "@/components/header"
import VideoBanner from "@/components/video-banner"
import Hero from "@/components/hero"
import Vision from "@/components/vision"
import Leadership from "@/components/leadership"
import Ecosystem from "@/components/ecosystem"
import TokenMetrics from "@/components/token-metrics"
import Benefits from "@/components/benefits"
import Roadmap from "@/components/roadmap"
import Footer from "@/components/footer"
import ParticleBackground from "@/components/particle-background"

export default function Page() {
  return (
    <>
      <Header />
      <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-black text-white">
        <ParticleBackground />
        <VideoBanner />
        <Hero />
        <Vision />
        <Leadership />
        <Ecosystem />
        <TokenMetrics />
        <Benefits />
        <Roadmap />
        <Footer />
      </main>
    </>
  )
}

