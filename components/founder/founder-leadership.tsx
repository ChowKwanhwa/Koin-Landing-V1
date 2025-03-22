"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Globe, Users, Briefcase } from "lucide-react"

const recognitions = [
  {
    title: "Founder & President of PEACE Alliance",
    description: "Leading the Pan-African Economic Alliance for Cooperative Empowerment.",
    icon: Users,
    color: "#4CAF50",
  },
  {
    title: "UN ECOSOC Special Consultative Status",
    description:
      "Recognized by the United Nations Economic and Social Council for expertise in sustainable development (2022).",
    icon: Globe,
    color: "#009EDB",
  },
  {
    title: "UN Decade on Ecosystem Restoration",
    description: "Active member of the UN Decade on Ecosystem Restoration Taskforce (2021-2030).",
    icon: Award,
    color: "#8B4513",
  },
  {
    title: "Music World Cup Special Envoy",
    description: "Appointed as Special Envoy for the global music competition platform.",
    icon: Briefcase,
    color: "#FFD700",
  },
]

export default function FounderLeadership() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Leadership & Recognition</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Chanasnun Kajornphuwapong's visionary leadership has earned international recognition and established him as
            a global change-maker.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative rounded-2xl overflow-hidden" style={{ maxHeight: "600px" }}>
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mr%20Nine%20%2815%29.jpg-MTcH4wA3c5oSgvyhkToFXFkL3juXpu.jpeg"
                alt="Chanasnun Kajornphuwapong Leadership"
                width={500}
                height={700}
                className="w-full h-auto object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-block px-4 py-2 rounded-full bg-[#FFD700] text-[#1B4D3E] font-bold mb-2">
                  Global Leadership
                </div>
                <h3 className="text-2xl font-bold">International Recognition</h3>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="grid gap-4">
              {recognitions.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div
                      className="h-14 w-14 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${item.color}40` }}
                    >
                      <item.icon className="h-7 w-7" style={{ color: item.color }} />
                    </div>
                    <div className="font-semibold text-lg">{item.title}</div>
                  </div>
                  <p className="text-white/70 pl-16">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-[#FFD700]/10 backdrop-blur-sm rounded-lg p-5 border border-[#FFD700]/20">
              <h4 className="text-lg font-semibold mb-3 text-[#FFD700]">Leadership Philosophy</h4>
              <p className="text-white/80">
                "True leadership is about creating sustainable solutions that benefit both people and the planet. By
                combining innovation with compassion, we can address the world's most pressing challenges."
              </p>
              <div className="mt-3 text-right italic text-white/60">- Chanasnun Kajornphuwapong</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

