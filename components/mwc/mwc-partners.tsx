"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const partners = [
  {
    name: "Wasserman",
    logo: "/images/wasserman-logo.png",
  },
  {
    name: "Oracle",
    logo: "/images/oracle-logo.png",
  },
  {
    name: "Infront",
    logo: "/images/infront-logo.png",
  },
  {
    name: "Berklee",
    logo: "/images/berklee-logo.png",
  },
  {
    name: "NTT Docomo",
    logo: "/images/ntt-docomo-logo.svg",
  },
]

export default function MwcPartners() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-[#FFD700]">Partners</span>
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Music World Cup® collaborates with leading global brands to deliver an unparalleled music experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 flex items-center justify-center hover:border-[#FFD700]/50 transition-colors h-24"
            >
              <div className="relative h-12 w-full">
                <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

