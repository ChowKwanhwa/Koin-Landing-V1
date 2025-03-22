"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Globe, Users, Building, Award } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "UN ECOSOC Connection",
    description: "Officially recognized and supported by the United Nations Economic and Social Council",
    color: "#1E90FF",
  },
  {
    icon: Users,
    title: "PEACE Alliance Partnership",
    description: "Working with the Pan-African Economic Alliance for Cooperative Empowerment",
    color: "#4CAF50",
  },
  {
    icon: Building,
    title: "Regional Integration",
    description: "Creating economic corridors that connect multiple African nations",
    color: "#FFC107",
  },
  {
    icon: Award,
    title: "Sustainable Development",
    description: "Balancing economic growth with environmental protection and restoration",
    color: "#9C27B0",
  },
]

export default function EemsAbout() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About EEMS</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            The African Economic & Ecological Modernization Sphere is a visionary initiative designed to transform
            Africa's landscape while driving sustainable economic development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image src="/images/mr-nine-agriculture.png" alt="EEMS Vision" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end">
                <div className="p-6">
                  <div className="text-sm text-[#4CAF50] font-medium mb-2">Leadership</div>
                  <h3 className="text-2xl font-bold mb-2">Chanasnun Kajornphuwapong</h3>
                  <p className="text-gray-300">Visionary leader of the EEMS initiative</p>
                </div>
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
            <h3 className="text-2xl font-bold">Our Mission</h3>
            <p className="text-gray-300">
              To create a sustainable, prosperous future for Africa through the harmonious integration of economic
              development and ecological preservation, establishing a model for global sustainable development.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-4 rounded-xl bg-white/5 backdrop-blur-sm"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    <feature.icon className="h-5 w-5" style={{ color: feature.color }} />
                  </div>
                  <h4 className="font-semibold mb-1">{feature.title}</h4>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
