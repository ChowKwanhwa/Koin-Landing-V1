"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Globe, Music, Users, Award } from "lucide-react"

const stats = [
  {
    value: 194,
    suffix: "+",
    label: "Participating Countries",
    icon: Globe,
    color: "#FFD700",
  },
  {
    value: 50000,
    suffix: "+",
    label: "Artist Submissions",
    icon: Music,
    color: "#00FFFF",
  },
  {
    value: 100,
    suffix: "M+",
    label: "Global Audience",
    icon: Users,
    color: "#4B0082",
  },
  {
    value: 1,
    suffix: "M",
    label: "USD Prize Pool",
    icon: Award,
    color: "#FFD700",
  },
]

export default function MwcStats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    if (!isInView) return

    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev]
          if (newCounts[index] < stat.value) {
            const increment = Math.ceil(stat.value / 50)
            newCounts[index] = Math.min(newCounts[index] + increment, stat.value)
          }
          return newCounts
        })
      }, 30)
    })

    return () => {
      intervals.forEach((interval) => clearInterval(interval))
    }
  }, [isInView])

  return (
    <section ref={ref} className="py-24 relative">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Global <span className="text-[#FFD700]">Impact</span>
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Music World Cup® is transforming the music industry on a global scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black/30 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"
            >
              <div
                className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: `${stat.color}20` }}
              >
                <stat.icon className="h-8 w-8" style={{ color: stat.color }} />
              </div>

              <div className="text-4xl font-bold mb-2" style={{ color: stat.color }}>
                {counts[index].toLocaleString()}
                {stat.suffix}
              </div>

              <div className="text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

