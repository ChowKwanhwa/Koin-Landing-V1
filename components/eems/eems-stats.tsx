"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { TrendingUp, Leaf, Route, Users } from "lucide-react"

const stats = [
  {
    value: 330,
    suffix: "M",
    label: "Total Project Area (hectares)",
    icon: Leaf,
    color: "#4CAF50",
  },
  {
    value: 10500,
    suffix: "+",
    label: "Corridor Length (km)",
    icon: Route,
    color: "#1E90FF",
  },
  {
    value: 12,
    suffix: "+",
    label: "Participating Nations",
    icon: Users,
    color: "#FFC107",
  },
  {
    value: 500,
    suffix: "M",
    label: "Carbon Reduction (tons)",
    icon: TrendingUp,
    color: "#9C27B0",
  },
]

export default function EemsStats() {
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
    <section ref={ref} className="py-24 relative bg-[#0A1A0F]/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Statistics</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">The scale and impact of the EEMS initiative across Africa.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 text-center"
            >
              <div
                className="inline-flex h-16 w-16 items-center justify-center rounded-full mb-4"
                style={{ backgroundColor: `${stat.color}20` }}
              >
                <stat.icon className="h-8 w-8" style={{ color: stat.color }} />
              </div>

              <div className="text-4xl font-bold mb-2" style={{ color: stat.color }}>
                {counts[index].toLocaleString()}
                {stat.suffix}
              </div>

              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

