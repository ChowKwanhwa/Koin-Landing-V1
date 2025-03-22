"use client"

import { motion } from "framer-motion"
import { MapPin, Calendar, Ticket, Hotel } from "lucide-react"
import Image from "next/image"

export default function MwcHostCity() {
  return (
    <section className="py-24 relative bg-[#0D0118]/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Host <span className="text-[#FFD700]">City</span>
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Experience the magic of Music World Cup® live in our spectacular host city.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hostcity-GxANJJb0uQsEcS0Tn48u4E3CVyAtTd.png"
                alt="Thailand Grand Palace - Music World Cup Host City"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4B0082]/30 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-block px-4 py-2 rounded-full bg-[#FFD700] text-[#4B0082] font-bold mb-2">
                  Thailand 2025
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">Kingdom of Thailand</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Thailand: Where Tradition Meets Innovation</h3>
              <p className="text-white/80">
                Thailand will host the spectacular Music World Cup® Finals in 2025, bringing together the world's most
                talented artists in a celebration of music and culture. Experience unforgettable performances in
                world-class venues across this magnificent country known for its rich cultural heritage and warm
                hospitality.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: MapPin, title: "Venue", description: "Impact Arena, Bangkok" },
                { icon: Calendar, title: "Dates", description: "May 15-20, 2025" },
                { icon: Ticket, title: "Tickets", description: "On sale Dec 2024" },
                { icon: Hotel, title: "Accommodation", description: "Partner hotels available" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-8 w-8 rounded-full bg-[#FFD700]/20 flex items-center justify-center">
                      <item.icon className="h-4 w-4 text-[#FFD700]" />
                    </div>
                    <div className="font-semibold">{item.title}</div>
                  </div>
                  <div className="text-white/70">{item.description}</div>
                </motion.div>
              ))}
            </div>

            <div className="bg-black/30 backdrop-blur-sm rounded-lg p-5 border border-white/10">
              <h4 className="text-lg font-semibold mb-3">Why Thailand?</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-[#FFD700]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="h-2 w-2 rounded-full bg-[#FFD700]"></span>
                  </span>
                  <span className="text-white/80">Rich cultural heritage and world-famous hospitality</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-[#FFD700]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="h-2 w-2 rounded-full bg-[#FFD700]"></span>
                  </span>
                  <span className="text-white/80">State-of-the-art venues and infrastructure</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-5 w-5 rounded-full bg-[#FFD700]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="h-2 w-2 rounded-full bg-[#FFD700]"></span>
                  </span>
                  <span className="text-white/80">Vibrant music scene and entertainment industry</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

