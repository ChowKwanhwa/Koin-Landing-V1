"use client"

import { motion } from "framer-motion"
import { Milestone } from "lucide-react"

const phases = [
  {
    title: "Phase 1 - Official Launch",
    period: "2025 Q1",
    items: [
      "Launch of KOIN on MUSIC WORLD CUP@ and African EEMS platforms",
      "Implementation of KOIN as primary currency for MUSIC WORLD CUP@ & Metaverse",
      "Fair Launch on pump.fun",
      "Listing on major exchanges (CEX and DEX)",
      "African Nations' Digital Currency Implementation",
      "Initiation of pilot projects in selected markets",
      "Community Building and Ecosystem Development",
    ],
  },
  {
    title: "Phase 2 - Integration",
    period: "2025 Q2-Q3",
    items: [
      "Launch of Sri Araya Tokenomic (SAY Token) Testnet",
      "Testing of RWA and Smart Contract functionalities",
      "Integration of African EEMS and MUSIC WORLD CUP@ with SAY Blockchain",
      "Strategic partnerships with governments, central banks, and international organizations",
      "Integration with National Payment Systems",
      "Music World Cup Global Tour Kickoff",
      "Initiation of Ambassador Program and Community Incentives",
      "EEMS Project Integration",
    ],
  },
  {
    title: "Phase 3 - Development",
    period: "2025 Q4-2026",
    items: [
      "SAY Token Mainnet Launch",
      "Integration of KOIN into Sri Araya Layer 1 Chain",
      "Full Metaverse Ecosystem Launch",
      "Pan-African Digital Currency Expansion",
      "Initiation of Tokenized Real Estate and Asset-Backed Token projects",
      "Enhanced EEMS Utility Integration",
      "Expansion of Metaverse Marketplace and NFT Economy",
    ],
  },
]

export default function Roadmap() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold">Development Roadmap</h2>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 h-full w-px bg-blue-600/20 md:left-1/2" />

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative grid gap-8 md:grid-cols-2"
              >
                {/* Timeline dot - Adjusted positioning for mobile */}
                <div className="absolute left-8 top-0 z-10 -translate-x-1/2 md:top-8 md:left-1/2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
                    <Milestone className="h-4 w-4 text-white" />
                  </div>
                </div>

                {/* Content - Adjusted padding for mobile */}
                <div
                  className={`relative rounded-2xl bg-white/5 p-6 pl-12 md:pl-6 ${
                    index % 2 ? "md:ml-0 md:order-first md:mr-auto" : "md:ml-auto"
                  } md:w-[90%]`}
                >
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-blue-400">{phase.title}</h3>
                    <div className="mt-1 text-sm text-gray-400">{phase.period}</div>
                  </div>
                  <ul className="ml-4 list-disc space-y-2 text-gray-300">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Empty column for layout */}
                <div className={index % 2 ? "" : "md:order-first"} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
