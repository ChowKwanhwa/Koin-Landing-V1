"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"
import Image from "next/image"

export default function FounderHero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#1B4D3E]">
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="flex items-center gap-2 mb-6">
              <Award className="h-5 w-5 text-[#FFD700]" />
              <span className="text-[#FFD700] text-sm font-medium">
                Visionary Leader, Global Innovator, Change-Maker
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block text-white">Chanasnun</span>
              <span className="text-[#FFD700]">Kajornphuwapong</span>
            </h1>

            <p className="text-lg text-gray-300 mb-10 max-w-xl italic">
              "All the hard work I have been diligently done for the whole period of my life. This brilliant work is to
              make the earth peaceful."
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-end"
          >
            <div className="relative w-[300px] h-[300px] rounded-full overflow-hidden mb-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mr%20Nine%20%2815%29.jpg-MTcH4wA3c5oSgvyhkToFXFkL3juXpu.jpeg"
                alt="Chanasnun Kajornphuwapong"
                fill
                className="object-cover"
              />
            </div>

            {/* Titles with gold dots */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FFD700]"></div>
                <span className="text-white">President of PEACE Alliance</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FFD700]"></div>
                <span className="text-white">Founder of African EEMS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FFD700]"></div>
                <span className="text-white">Co-founder of Music World Cup</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#FFD700]"></div>
                <span className="text-white">Visionary Leader in African Development</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

