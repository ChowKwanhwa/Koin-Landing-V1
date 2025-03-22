"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Music } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function MwcHero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 91,
    hours: 23,
    minutes: 59,
    seconds: 45,
  })

  // Set countdown to a date 3 months from now
  useEffect(() => {
    const targetDate = new Date()
    targetDate.setMonth(targetDate.getMonth() + 3)

    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(interval)
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimeLeft({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image - Updated to use bg.png */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bg-d0S9Ezm3mx1TfgSNo5rTRWjR4FsmUD.png"
          alt="Music World Cup Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-[#4B0082]/30" /> {/* Light purple overlay to maintain brand colors */}
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="text-[#FFD700]">MUSIC WORLD CUP®</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 mb-8">The Global Stage for Musical Talent</p>

            {/* Competition Phase Indicator */}
            <div className="inline-block px-4 py-2 rounded-full bg-[#4B0082] text-white mb-8">
              <span className="flex items-center">
                <span className="h-3 w-3 rounded-full bg-[#00FFFF] mr-2 animate-pulse"></span>
                Current Phase: Submissions Open
              </span>
            </div>

            {/* Countdown Timer */}
            <div className="grid grid-cols-4 gap-4 max-w-2xl mx-auto mb-12">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item, index) => (
                <div key={index} className="bg-[#4B0082]/80 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl md:text-4xl font-bold text-[#FFD700]">{item.value}</div>
                  <div className="text-sm text-white/70">{item.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Button
                size="lg"
                className="bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#4B0082] text-lg font-bold px-8 h-14"
              >
                <Music className="mr-2 h-5 w-5" />
                SUBMIT YOUR MUSIC
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

