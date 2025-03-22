"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Leaf, Droplets, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const initiatives = [
  {
    id: "emission-zero",
    name: "The Emission Zero Global",
    description:
      "A transformative project spanning multiple countries in Southern Africa, focusing on biomass power generation and carbon sequestration with a 50-year concession period.",
    features: [
      "Sustainable resource management",
      "Energy forestry integration",
      "Ecosystem restoration",
      "Technology innovation",
      "Biomass energy solutions",
    ],
    details:
      "The Southern Corridor spans 3,500 km across multiple African nations, creating a sustainable development zone focused on carbon sequestration and biomass energy production.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/H.E.%20Alpha%20Conde%2C%20President%20of%20the%20Republic%20of%20Guinea%20and%20President%20of%20the%20African%20Union%2C%20together%20with%20Chanatnan%2C%20announced%20the%20first%20African%20EMS%20project%20at%20the%20COP23%20Climate%20Change%20Conference%20in%20Bonn2.jpg-gERep1QxiZchKTOBrokC06P2Is3YrW.jpeg",
    icon: Leaf,
    color: "#FFFFFF", // Changed from #1B4D3E to #FFFFFF for better contrast
    link: "/eems",
  },
  {
    id: "oasis-project",
    name: "The Oasis Project",
    description:
      "An ambitious desert transformation initiative across Northern Africa, creating oases and sustainable development zones with a 99-year concession period.",
    features: [
      "Desert transformation",
      "Oasis development",
      "Water management",
      "Renewable energy",
      "Sustainable agriculture",
    ],
    details:
      "The Northern Corridor extends 7,000 km, focusing on transforming arid regions into productive, sustainable ecosystems through innovative water management and renewable energy.",
    image: "/placeholder.svg?height=400&width=600",
    icon: Droplets,
    color: "#009EDB",
    link: "/eems",
  },
  {
    id: "african-eems",
    name: "African EEMS (SMEEA)",
    description:
      "The African Economic & Ecological Modernization Sphere is a visionary initiative designed to transform Africa's landscape while driving sustainable economic development.",
    features: [
      "330 million hectare project scope",
      "Cross-border economic corridors",
      "Ecosystem restoration",
      "Sustainable development",
      "International cooperation",
    ],
    details:
      "Participating countries include Democratic Republic of Congo, Republic of Guinea, Chad, Burundi, Mozambique, Uganda, Gabon, Niger, and soon Central African Republic as headquarters.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20press%20conference%20on%20The%20Emission%20Zero%20Global%20Project%20was%20held%20in%20collaboration%20with%20the%20President%20of%20the%20African%20Union%20at%20the%20COP23%20Climate%20Summit%20in%20Bonn1.jpg-OD0eBQIiIom05ROVUrM3A5dXrUuYFc.jpeg",
    icon: Leaf,
    color: "#8B4513",
    link: "/eems",
  },
  {
    id: "music-world-cup",
    name: "Music World Cup",
    description:
      "A revolutionary platform connecting artists from every corner of the world, creating the world's largest music competition with life-changing opportunities.",
    features: [
      "Thailand 2025 showcase",
      "50th Anniversary Thailand-China relations",
      "Global artist platform",
      "Cultural exchange",
      "Entertainment innovation",
    ],
    details:
      "The 2025 event in Thailand will coincide with the 50th anniversary of Thailand-China relations, creating a significant cultural and economic impact through global entertainment.",
    image: "/placeholder.svg?height=400&width=600",
    icon: Music,
    color: "#FFD700",
    link: "/mwc",
  },
]

export default function FounderInitiatives() {
  const [activeInitiative, setActiveInitiative] = useState(initiatives[0].id)
  const currentInitiative = initiatives.find((i) => i.id === activeInitiative) || initiatives[0]

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Major Initiatives</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            As of March 2025, these visionary projects are transforming industries, communities, and environments around
            the world.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {initiatives.map((initiative) => (
            <Button
              key={initiative.id}
              variant={activeInitiative === initiative.id ? "default" : "outline"}
              className={`text-sm md:text-base ${
                activeInitiative === initiative.id
                  ? `bg-[${initiative.color}] hover:bg-[${initiative.color}]/90`
                  : `border-[${initiative.color}] text-[${initiative.color}] hover:bg-[${initiative.color}]/10`
              }`}
              style={{
                backgroundColor: activeInitiative === initiative.id ? initiative.color : "transparent",
                borderColor: initiative.color,
                color:
                  activeInitiative === initiative.id
                    ? initiative.id === "emission-zero"
                      ? "black"
                      : "white"
                    : initiative.color,
              }}
              onClick={() => setActiveInitiative(initiative.id)}
            >
              <initiative.icon className="mr-2 h-4 w-4" />
              {initiative.name}
            </Button>
          ))}
        </div>

        <motion.div
          key={activeInitiative}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative rounded-2xl overflow-hidden h-[300px] md:h-[400px]">
            <Image
              src={currentInitiative.image || "/placeholder.svg"}
              alt={currentInitiative.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div
                className="inline-block px-4 py-2 rounded-full font-bold text-white"
                style={{ backgroundColor: currentInitiative.color === "#FFFFFF" ? "#1B4D3E" : currentInitiative.color }}
              >
                {currentInitiative.name}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3
                className="text-3xl font-bold mb-3 font-serif"
                style={{ color: currentInitiative.color === "#FFFFFF" ? "#FFD700" : currentInitiative.color }}
              >
                {currentInitiative.name}
              </h3>
              <p className="text-xl text-white/80">{currentInitiative.description}</p>
            </div>

            <div className="space-y-4 mt-6">
              <h4 className="font-semibold">Key Features:</h4>
              <ul className="grid sm:grid-cols-2 gap-3">
                {currentInitiative.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div
                      className="h-6 w-6 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: `${currentInitiative.color === "#FFFFFF" ? "#1B4D3E" : currentInitiative.color}20`,
                      }}
                    >
                      <currentInitiative.icon
                        className="h-3 w-3"
                        style={{ color: currentInitiative.color === "#FFFFFF" ? "#FFD700" : currentInitiative.color }}
                      />
                    </div>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <p className="text-white/80">{currentInitiative.details}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

