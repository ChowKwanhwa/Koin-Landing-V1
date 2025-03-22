"use client"

import { motion } from "framer-motion"
import { Music, Trophy, Globe, Users } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Music,
    title: "Global Platform",
    description: "A revolutionary platform connecting artists from every corner of the world",
    color: "#FFD700",
  },
  {
    icon: Trophy,
    title: "Prestigious Competition",
    description: "The world's largest music competition with life-changing opportunities",
    color: "#00FFFF",
  },
  {
    icon: Globe,
    title: "International Audience",
    description: "Reach millions of fans across the globe through our platform",
    color: "#4B0082",
  },
  {
    icon: Users,
    title: "Fan Engagement",
    description: "Direct connection between artists and fans through voting and interaction",
    color: "#FFD700",
  },
]

export default function MwcAbout() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Updated to use wz1.png instead of the placeholder */}
            <div className="relative aspect-video rounded-2xl overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wz1-EsX0YfzWqQrwDeoHpvEHwEo4YM91K7.png"
                alt="Music World Cup Concert"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4B0082]/30 to-transparent" />
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full border-2 border-[#FFD700]/20 -z-10" />
            <div className="absolute -top-8 -right-8 h-24 w-24 rounded-full border-2 border-[#00FFFF]/20 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold">
              About <span className="text-[#FFD700]">Music World Cup®</span>
            </h2>

            <p className="text-lg text-white/80">
              Music World Cup® is the world's largest music competition platform, designed to discover, promote, and
              celebrate musical talent from across the globe. Our revolutionary approach combines cutting-edge
              technology with the universal language of music.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    <feature.icon className="h-6 w-6" style={{ color: feature.color }} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

