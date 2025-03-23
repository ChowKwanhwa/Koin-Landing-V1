"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Leaf, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"
import AfricaMapSimplified from "./africa-map-simplified"

const projects = [
  {
    id: "southern",
    name: "Sri Araya Southern Corridor",
    area: "30 million hectares",
    description:
      "A transformative project spanning multiple countries in Southern Africa, focusing on biomass power generation and carbon sequestration. Also known as 'The Emission Zero Global' with a 50-year concession period.",
    features: [
      "Biomass power generation",
      "Carbon sequestration",
      "Sustainable agriculture",
      "Biodiversity conservation",
    ],
    countries: ["Zambia", "Zimbabwe", "Mozambique", "Botswana"],
    icon: Leaf,
    color: "#4CAF50",
  },
  {
    id: "northern",
    name: "Sri Araya Northern Corridor",
    area: "300 million hectares",
    description:
      "An ambitious desert transformation initiative across Northern Africa, creating oases and sustainable development zones. Also known as 'The Oasis Project' with a 99-year concession period.",
    features: ["Desert transformation", "Oasis development", "Water management", "Renewable energy"],
    countries: ["Egypt", "Sudan", "Chad", "Niger", "Mali", "Mauritania"],
    icon: Droplets,
    color: "#1E90FF",
  },
]

export default function EemsProjects() {
  const [activeProject, setActiveProject] = useState(projects[0].id)

  const currentProject = projects.find((p) => p.id === activeProject) || projects[0]

  return (
    <section className="py-24 relative bg-[#0A1A0F]/50">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Components</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            EEMS consists of two major ecological corridors spanning across Africa, designed to transform landscapes
            while driving economic development.
          </p>
        </motion.div>

        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {projects.map((project) => (
            <Button
              key={project.id}
              variant={activeProject === project.id ? "default" : "outline"}
              className={`text-sm md:text-base ${
                activeProject === project.id
                  ? `bg-[${project.color}] hover:bg-[${project.color}]/90`
                  : `border-[${project.color}] text-[${project.color}] hover:bg-[${project.color}]/10`
              }`}
              style={{
                backgroundColor: activeProject === project.id ? project.color : "transparent",
                borderColor: project.color,
                color: activeProject === project.id ? "white" : project.color,
              }}
              onClick={() => setActiveProject(project.id)}
            >
              <project.icon className="mr-2 h-4 w-4" />
              {project.name}
            </Button>
          ))}
        </div>

        <motion.div
          key={activeProject}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative rounded-2xl overflow-hidden bg-[#0A1A0F]/80 backdrop-blur-sm border border-white/10 h-[400px]">
            <AfricaMapSimplified
              highlightNorthern={activeProject === "northern"}
              highlightSouthern={activeProject === "southern"}
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">{currentProject.name}</h3>

            {activeProject === "southern" && (
              <div className="inline-block px-4 py-2 rounded-lg bg-[#FFC107]/10 text-[#FFC107] text-sm font-medium">
                The Emission Zero Global (Concession 50 years)
              </div>
            )}

            {activeProject === "northern" && (
              <div className="inline-block px-4 py-2 rounded-lg bg-[#FFC107]/10 text-[#FFC107] text-sm font-medium">
                The Oasis Project (Concession 99 years)
              </div>
            )}

            <p className="text-gray-300">{currentProject.description}</p>

            <div className="space-y-4 mt-6">
              <h4 className="font-semibold">Key Features:</h4>
              <ul className="grid sm:grid-cols-2 gap-3">
                {currentProject.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div
                      className="h-6 w-6 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: `${currentProject.color}20` }}
                    >
                      <currentProject.icon className="h-3 w-3" style={{ color: currentProject.color }} />
                    </div>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-white/10 mt-6">
              <h4 className="font-semibold mb-3">Participating Countries:</h4>
              <div className="flex flex-wrap gap-2">
                {currentProject.countries.map((country, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 backdrop-blur-sm"
                  >
                    {country}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
