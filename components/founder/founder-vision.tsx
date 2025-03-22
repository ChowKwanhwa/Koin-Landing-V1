"use client"

import { motion } from "framer-motion"
import { Leaf, Globe, Users, Lightbulb } from "lucide-react"

const visionItems = [
  {
    icon: Leaf,
    title: "Environmental Restoration",
    description: "Creating sustainable ecosystems through innovative land management and carbon sequestration.",
    color: "#4CAF50", // Brighter green for better visibility
  },
  {
    icon: Globe,
    title: "Global Cooperation",
    description: "Building international partnerships to address shared challenges and create collective solutions.",
    color: "#009EDB",
  },
  {
    icon: Users,
    title: "Community Empowerment",
    description: "Developing local capacity and providing opportunities for sustainable economic growth.",
    color: "#8B4513",
  },
  {
    icon: Lightbulb,
    title: "Innovation & Technology",
    description:
      "Leveraging cutting-edge solutions to accelerate sustainable development and environmental protection.",
    color: "#FFD700",
  },
]

export default function FounderVision() {
  return (
    <section className="py-24 relative bg-[#0F2A22]/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Personal Philosophy</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Chanasnun Kajornphuwapong's forward-looking approach combines environmental stewardship with economic
            innovation to create a sustainable future based on peace and harmony.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visionItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col">
                {/* Fixed height container for icon */}
                <div className="h-20 flex items-center justify-center mb-6">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}30` }}
                  >
                    <item.icon className="h-8 w-8" style={{ color: item.color }} />
                  </div>
                </div>

                {/* Title with fixed height container */}
                <div className="h-14 flex items-start mb-3">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>

                {/* Description with consistent height */}
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 p-6 rounded-2xl bg-gradient-to-r from-[#1B4D3E]/30 to-[#FFD700]/30 backdrop-blur-sm text-center"
        >
          <h3 className="text-xl font-semibold mb-3 font-serif">Vision for Global Peace</h3>
          <p className="text-gray-300 max-w-3xl mx-auto italic">
            "All the hard work I have been diligently done for the whole period of my life. This brilliant work is to
            make the earth peaceful."
          </p>
          <div className="mt-3 text-right text-white/60">- Chanasnun Kajornphuwapong, March 2025</div>
        </motion.div>
      </div>
    </section>
  )
}

