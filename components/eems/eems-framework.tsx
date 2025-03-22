"use client"

import { motion } from "framer-motion"
import { Leaf, Zap, Factory, Building2 } from "lucide-react"

const frameworkItems = [
  {
    icon: Leaf,
    title: "Carbon Sink",
    description: "Creating vast carbon sinks through reforestation and sustainable land management practices.",
    color: "#4CAF50",
  },
  {
    icon: Zap,
    title: "Eco-Energy",
    description: "Developing renewable energy sources including solar, wind, and biomass power generation.",
    color: "#FFC107",
  },
  {
    icon: Factory,
    title: "Eco-Industrial",
    description: "Establishing environmentally friendly industrial zones with minimal ecological footprint.",
    color: "#1E90FF",
  },
  {
    icon: Building2,
    title: "Eco-City",
    description: "Building sustainable urban centers with green infrastructure and smart city technologies.",
    color: "#9C27B0",
  },
]

export default function EemsFramework() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">4FFCC Framework</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Our comprehensive approach integrates four key components to ensure balanced ecological and economic
            development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {frameworkItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(135deg, ${item.color}20, ${item.color}05)` }}
              />

              <div className="relative h-full p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <item.icon className="h-6 w-6" style={{ color: item.color }} />
                </div>

                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm flex-grow">{item.description}</p>

                <div className="mt-4 pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Implementation</span>
                    <div className="w-24 h-2 rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${(index + 1) * 20}%`,
                          backgroundColor: item.color,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-[#2C5530]/30 to-[#1E90FF]/30 backdrop-blur-sm text-center"
        >
          <h3 className="text-xl font-semibold mb-3">Integrated Approach</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">
            The 4FFCC Framework ensures that all development activities within the EEMS project are balanced,
            sustainable, and contribute to both ecological restoration and economic growth.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

