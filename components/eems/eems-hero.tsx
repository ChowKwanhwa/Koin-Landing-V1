"use client"

import { motion } from "framer-motion"
import { Leaf, TrendingUp } from "lucide-react"

export default function EemsHero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-[#2C5530]/20 blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-[#1E90FF]/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#2C5530]/20 text-[#4CAF50] text-sm font-medium">
              <Leaf className="h-4 w-4" />
              <span>African Economic & Ecological Modernization Sphere</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="block">Africa's Future Through</span>
              <span className="bg-gradient-to-r from-[#4CAF50] to-[#1E90FF] bg-clip-text text-transparent">
                Economic & Ecological Modernization
              </span>
            </h1>

            <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0">
              A transformative initiative combining sustainable development with economic growth to create a prosperous
              and environmentally balanced future for Africa.
            </p>

            {/* Buttons removed as requested */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2C5530] to-[#1E90FF] opacity-20 blur-2xl" />
              <div className="absolute inset-10 rounded-full border-4 border-[#4CAF50]/30 animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-bold text-[#4CAF50]">330M</div>
                  <div className="text-xl text-gray-300 mt-2">Hectares</div>
                  <div className="mt-4 text-sm text-gray-400">Total Project Area</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-10 -right-10 p-6 rounded-2xl bg-black/30 backdrop-blur-lg border border-white/10">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-[#1E90FF]/20 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-[#1E90FF]" />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Participating Nations</div>
                  <div className="text-xl font-bold">12+ Countries</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

