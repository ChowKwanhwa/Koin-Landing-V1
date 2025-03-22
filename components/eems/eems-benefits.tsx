"use client"

import { motion } from "framer-motion"
import { Leaf, TrendingUp, Users, Globe } from "lucide-react"

const benefits = [
  {
    icon: Leaf,
    title: "Environmental Impact",
    description:
      "Restoration of degraded lands, carbon sequestration, biodiversity conservation, and climate change mitigation.",
    color: "#4CAF50",
    items: [
      "330M hectares of land restoration",
      "Significant carbon sequestration",
      "Biodiversity protection",
      "Climate change resilience",
    ],
  },
  {
    icon: TrendingUp,
    title: "Economic Development",
    description: "Job creation, sustainable industries, agricultural productivity, and new market opportunities.",
    color: "#1E90FF",
    items: [
      "Millions of new jobs",
      "Sustainable industrial zones",
      "Agricultural modernization",
      "New market development",
    ],
  },
  {
    icon: Users,
    title: "Social Progress",
    description: "Improved livelihoods, food security, access to clean energy, and enhanced community resilience.",
    color: "#FFC107",
    items: ["Enhanced food security", "Clean energy access", "Improved healthcare", "Educational opportunities"],
  },
  {
    icon: Globe,
    title: "Regional Integration",
    description:
      "Cross-border cooperation, shared infrastructure, policy harmonization, and collective resource management.",
    color: "#9C27B0",
    items: [
      "Cross-border cooperation",
      "Shared infrastructure",
      "Policy harmonization",
      "Collective resource management",
    ],
  },
]

export default function EemsBenefits() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Benefits</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            The EEMS initiative delivers comprehensive benefits across environmental, economic, social, and regional
            dimensions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden"
            >
              <div
                className="p-1"
                style={{ background: `linear-gradient(135deg, ${benefit.color}50, ${benefit.color}10)` }}
              >
                <div className="bg-[#0A1A0F] rounded-2xl p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="h-12 w-12 rounded-lg flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${benefit.color}20` }}
                    >
                      <benefit.icon className="h-6 w-6" style={{ color: benefit.color }} />
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2" style={{ color: benefit.color }}>
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-gray-400">{benefit.description}</p>
                    </div>
                  </div>

                  <div className="mt-6 pl-16">
                    <ul className="space-y-2">
                      {benefit.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-center gap-2">
                          <div className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: benefit.color }} />
                          <span className="text-sm text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

