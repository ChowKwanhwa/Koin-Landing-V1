"use client"

import { motion } from "framer-motion"
import { Globe2Icon, MusicIcon, LeafIcon, LayersIcon } from "lucide-react"

const features = [
  {
    icon: Globe2Icon,
    title: "African Economic Transformation",
    description: "Legal tender status across multiple African nations, enabling seamless cross-border transactions.",
  },
  {
    icon: MusicIcon,
    title: "Entertainment Innovation",
    description: "Powering the Music World Cup Metaverse and global concert experiences.",
  },
  {
    icon: LeafIcon,
    title: "EEMS Integration",
    description: "Driving sustainable development and environmental protection projects.",
  },
  {
    icon: LayersIcon,
    title: "Future Technology",
    description: "Built on Solana with future integration into Sri Araya Layer 1 blockchain.",
  },
]

export default function Features() {
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
          <h2 className="mb-4 text-4xl font-bold">Powering the Future</h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            KOIN combines financial innovation with entertainment and sustainable development to create a comprehensive
            ecosystem.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group rounded-2xl bg-white/5 p-6 backdrop-blur-lg transition-all hover:bg-blue-600/10"
            >
              <div className="mb-4 inline-block rounded-lg bg-blue-600/20 p-3">
                <feature.icon className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

