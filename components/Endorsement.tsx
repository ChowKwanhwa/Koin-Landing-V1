"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Ticket, ShoppingBag, Users, Globe2, Coins } from "lucide-react"
import { Button } from "@/components/ui/button"

const endorsementPoints = [
  {
    icon: Ticket,
    title: "Event Tickets",
    description: "Exclusive currency for MUSIC WORLD CUP® event ticket purchases",
  },
  {
    icon: ShoppingBag,
    title: "Official Merchandise",
    description: "All merchandising and official product transactions",
  },
  {
    icon: Users,
    title: "Artist Engagement",
    description: "Exclusive artist engagements and fan experiences",
  },
  {
    icon: Globe2,
    title: "Digital Integration",
    description: "Digital and metaverse integrations",
  },
  {
    icon: Coins,
    title: "Platform Currency",
    description: "All digital transactions within the MUSIC WORLD CUP® ecosystem",
  },
]

export default function Endorsement() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-blue-950/10 to-black/0" />

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold">Official Currency Endorsement</h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            KOIN is proudly recognized as the exclusive official currency of MUSIC WORLD CUP®
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Certificate Display */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="group relative overflow-hidden rounded-2xl">
              {/* Certificate Image */}
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E8%AF%81%E4%B9%A6.jpg-I2VeU0wRePkRuGK7GrdEJcDDuQDo1E.jpeg"
                alt="MUSIC WORLD CUP® Certificate of Official Currency Endorsement"
                width={1000}
                height={1294}
                className="w-full transform transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay with golden gradient border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-[#FFD700]/50" />

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                  <Button
                    variant="outline"
                    className="border-[#FFD700] bg-black/50 text-[#FFD700] backdrop-blur-sm hover:bg-[#FFD700]/10 hover:text-[#FFD700]"
                    onClick={() => window.open('/证书.jpg', '_blank')}
                  >
                    View Full Certificate
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Points */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#FFD700]">Exclusive Authorization</h3>
              <p className="text-gray-300">
                KOIN is officially designated as the sole digital asset for all transactions within the MUSIC WORLD CUP®
                ecosystem.
              </p>
            </div>

            <div className="grid gap-6">
              {endorsementPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 rounded-xl bg-white/5 p-4 backdrop-blur-sm"
                >
                  <div className="rounded-lg bg-gradient-to-br from-[#FFD700] to-[#FFA500] p-2">
                    <point.icon className="h-5 w-5 text-black" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{point.title}</h4>
                    <p className="text-sm text-gray-400">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-2 rounded-xl border border-[#FFD700]/20 bg-black/30 p-4">
              <p className="text-sm text-gray-400">Certification Number: MWC-2025-KOIN-001</p>
              <p className="text-sm text-gray-400">Validity Period: Until 31 December 2029</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
