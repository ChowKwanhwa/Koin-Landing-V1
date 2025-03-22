"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Handshake, Globe } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto flex h-full items-center px-4">
        <div className="grid w-full gap-16 lg:grid-cols-2">
          {/* Left side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative aspect-[4/5] w-full max-w-2xl">
              {/* Main Image with Frame */}
              <div className="absolute inset-0 overflow-hidden">
                {/* KOIN Logo at top */}
                <div className="absolute left-4 top-4 z-20">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/G-6-wOqU0MpcgT2vcnP3rwBesVjmz3klgE.svg"
                    alt="KOIN Logo"
                    width={100}
                    height={40}
                    className="h-8 w-auto"
                  />
                </div>

                {/* Portrait Image */}
                <div className="relative h-full w-full">
                  <Image
                    src="/profile.png"
                    alt="Chanasnun Kajornphuwapong"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Ornate Frame Border */}
              <div className="absolute inset-0 rounded-lg border-[3px] border-[#FFD700]">
                <div className="absolute -left-1 -top-1 h-8 w-8 border-l-4 border-t-4 border-[#FFD700]" />
                <div className="absolute -right-1 -top-1 h-8 w-8 border-r-4 border-t-4 border-[#FFD700]" />
                <div className="absolute -bottom-1 -left-1 h-8 w-8 border-b-4 border-l-4 border-[#FFD700]" />
                <div className="absolute -bottom-1 -right-1 h-8 w-8 border-b-4 border-r-4 border-[#FFD700]" />
              </div>
            </div>
          </motion.div>

          {/* Right side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center space-y-12"
          >
            <h1 className="space-y-4 text-6xl font-bold leading-tight tracking-tight sm:text-7xl lg:text-8xl">
              <span className="block bg-gradient-to-r from-white via-[#FFD700] to-[#FFD700] bg-clip-text text-transparent">
                Transforming
                <br />
                Africa's
                <br />
                Future
              </span>
            </h1>
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-2 text-2xl font-medium text-white/90 sm:text-3xl"
              >
                <span className="block text-white/80">Under the Visionary Leadership of</span>
                <br />
                <span
                  className="relative block font-semibold"
                  style={{
                    color: "#FFD700",
                    textShadow:
                      "0 0 10px rgba(255, 215, 0, 0.5), 0 0 20px rgba(255, 215, 0, 0.3), 0 0 30px rgba(255, 215, 0, 0.1)",
                  }}
                >
                  <motion.span
                    animate={{
                      textShadow: [
                        "0 0 10px rgba(255, 215, 0, 0.5), 0 0 20px rgba(255, 215, 0, 0.3), 0 0 30px rgba(255, 215, 0, 0.1)",
                        "0 0 15px rgba(255, 215, 0, 0.7), 0 0 25px rgba(255, 215, 0, 0.5), 0 0 35px rgba(255, 215, 0, 0.3)",
                        "0 0 10px rgba(255, 215, 0, 0.5), 0 0 20px rgba(255, 215, 0, 0.3), 0 0 30px rgba(255, 215, 0, 0.1)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    Chanasnun Kajornphuwapong
                  </motion.span>
                </span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative mt-4 text-lg tracking-wide text-gray-300/90"
              >
                <span className="relative">
                  <span className="absolute -inset-1 block rounded-lg bg-gradient-to-r from-white/5 to-transparent"></span>
                  <span className="relative">
                    Founder President of the{" "}
                    <span className="bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text font-semibold text-transparent">
                      PEACE Alliance
                    </span>
                  </span>
                </span>
                {" "}
                <span className="text-gray-400">
                  (Special Consultative Status to UN ECOSOC)
                </span>
                {" "}&{" "}
                <span className="relative">
                  <span className="absolute -inset-1 block rounded-lg bg-gradient-to-r from-white/5 to-transparent"></span>
                  <span className="relative">
                    Founder of the{" "}
                    <span className="bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text font-semibold text-transparent">
                      African EEMS
                    </span>
                  </span>
                </span>
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
