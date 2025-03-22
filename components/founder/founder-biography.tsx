"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { Leaf, Globe, Building, Award, Calendar, FileText } from "lucide-react"

const timelineEvents = [
  {
    year: "Early Years",
    title: "Agricultural Roots",
    description:
      "Born into a family with deep agricultural ties in Thailand, Chanasnun developed an early appreciation for sustainable land management and environmental stewardship. He pioneered the development of fast-growing tree species for sustainable forestry.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Experts%20from%20the%20Ministry%20of%20Agriculture%20and%20a%20representative%20of%20President%20Joseph%20Kabila%20of%20the%20Democratic%20Republic%20of%20the%20Congo%20met%20with%20Chanasnan%20in%20Thailand%20to%20discuss%20the%20launch%20of%20The%20African%20EMS%20Project%20i.jpg-EHUyXUVA5KjHrMv0QYl6uhkLJDE21A.jpeg",
    icon: Leaf,
    color: "#8B4513",
  },
  {
    year: "2017",
    title: "Guinea Agreement",
    description:
      "Signed the first African pilot project agreement with the Republic of Guinea, marking the beginning of the African EEMS initiative and establishing a foundation for sustainable development across the continent.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20press%20conference%20on%20The%20Emission%20Zero%20Global%20Project%20was%20held%20in%20collaboration%20with%20the%20President%20of%20the%20African%20Union%20at%20the%20COP23%20Climate%20Summit%20in%20Bonn1.jpg-OD0eBQIiIom05ROVUrM3A5dXrUuYFc.jpeg",
    icon: FileText,
    color: "#8B4513",
  },
  {
    year: "2018",
    title: "UN COP-23 Presentation",
    description:
      "Presented the African EEMS project at the UN Climate Change Conference (COP-23) in Bonn, Germany, alongside H.E. Alpha Conde, President of the Republic of Guinea and President of the African Union.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/H.E.%20Alpha%20Conde%2C%20President%20of%20the%20Republic%20of%20Guinea%20and%20President%20of%20the%20African%20Union%2C%20together%20with%20Chanatnan%2C%20announced%20the%20first%20African%20EMS%20project%20at%20the%20COP23%20Climate%20Change%20Conference%20in%20Bonn1.jpg-jBFPdh3liKQKgKlyUNbKybJFXzLigp.jpeg",
    icon: Globe,
    color: "#009EDB",
  },
  {
    year: "2019",
    title: "DRC Project Launch",
    description:
      "Secured a 99-year concession for a 20-million-hectare project in the Democratic Republic of Congo, one of the largest environmental restoration initiatives in Africa.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20representative%20of%20President%20Joseph%20Kabila%20held%20the%20first%20meeting%20with%20Chanasnun%20at%20the%20office%20in%20Thailand%20in%202018%20to%20discuss%20the%20establishment%20of%20The%20African%20EMS%20Project%20in%20the%20Democratic%20Republic%20of%20the%20Cong.jpg-wde5mLcBN89Cud1pR2exueD36QLszX.jpeg",
    icon: Building,
    color: "#FFD700", // Changed from #1B4D3E to #FFD700 to improve contrast
  },
  {
    year: "2019",
    title: "African Nations Conference",
    description:
      "Participated in the African Nations Conference in Beijing, China, expanding the EEMS vision to additional African nations and strengthening international partnerships.",
    image: "/placeholder.svg?height=400&width=600", // Changed to placeholder since we don't have the correct image
    icon: Globe,
    color: "#009EDB",
  },
  {
    year: "2021",
    title: "Music World Cup Appointment",
    description:
      "Appointed as Special Envoy for the Music World Cup, expanding his vision for cultural exchange and economic development through global entertainment initiatives.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E8%AF%81%E4%B9%A6.jpg-dn9BnLdVlVeTcbY7VO6RSOSp8uwmat.jpeg",
    icon: Award,
    color: "#FFD700",
  },
  {
    year: "2022",
    title: "UN ECOSOC Status",
    description:
      "The PEACE Alliance was granted Special Consultative Status with the United Nations Economic and Social Council (ECOSOC), recognizing its significant contributions to sustainable development.",
    image: "/placeholder.svg?height=400&width=600",
    icon: Award,
    color: "#009EDB",
  },
  {
    year: "2024-2025",
    title: "Future Initiatives",
    description:
      "Became a major stakeholder in Music World Cup and secured Thailand as the host for the 2025 event, coinciding with the 50th anniversary of Thailand-China relations. Plans are underway for signing with the Central African Republic to establish EEMS headquarters.",
    image: "/placeholder.svg?height=400&width=600",
    icon: Calendar,
    color: "#FFD700",
  },
]

export default function FounderBiography() {
  const [activeEvent, setActiveEvent] = useState(0)

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Biography Timeline</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            The life and achievements of Chanasnun Kajornphuwapong reflect a commitment to sustainable development,
            global cooperation, and visionary leadership.
          </p>
        </motion.div>

        {/* Timeline Navigation */}
        <div className="mb-16 relative overflow-x-auto py-8">
          <div className="absolute left-0 right-0 top-1/2 h-1 bg-white/10 -translate-y-1/2"></div>
          <div className="flex justify-between min-w-[900px] px-4">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="relative"
              >
                <button
                  className={`w-12 h-12 rounded-full flex items-center justify-center relative z-10 ${
                    activeEvent === index ? "ring-2 ring-white" : ""
                  }`}
                  style={{ backgroundColor: event.color }}
                  onClick={() => setActiveEvent(index)}
                >
                  <event.icon className="h-6 w-6 text-white" />
                </button>
                <div
                  className="absolute left-0 h-1 top-1/2 -translate-y-1/2"
                  style={{
                    width: index === 0 ? "0" : "100%",
                    background:
                      index === 0
                        ? "transparent"
                        : `linear-gradient(to right, ${timelineEvents[index - 1].color}, ${event.color})`,
                    right: index === 0 ? "auto" : "50%",
                  }}
                ></div>
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium">
                  {event.year}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Content */}
        <motion.div
          key={activeEvent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative rounded-2xl overflow-hidden h-[300px] md:h-[500px]">
            <Image
              src={timelineEvents[activeEvent].image || "/placeholder.svg"}
              alt={timelineEvents[activeEvent].title}
              fill
              className={`${activeEvent === 5 ? "object-contain" : "object-cover"}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div
                className="inline-block px-4 py-2 rounded-full font-bold text-white"
                style={{ backgroundColor: timelineEvents[activeEvent].color }}
              >
                {timelineEvents[activeEvent].year}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-3xl font-bold mb-3 font-serif" style={{ color: "#FFD700" }}>
                {timelineEvents[activeEvent].title}
              </h3>
              <p className="text-xl text-white/80">{timelineEvents[activeEvent].description}</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
              <h4 className="font-bold mb-3">Key Achievements</h4>
              <ul className="space-y-2">
                {activeEvent === 0 && (
                  <>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-[#FFD700]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="h-2 w-2 rounded-full bg-[#FFD700]"></span>
                      </span>
                      <span className="text-white/80">Pioneered fast-growing tree species development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-[#FFD700]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="h-2 w-2 rounded-full bg-[#FFD700]"></span>
                      </span>
                      <span className="text-white/80">Established sustainable agricultural practices</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-[#FFD700]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="h-2 w-2 rounded-full bg-[#FFD700]"></span>
                      </span>
                      <span className="text-white/80">Developed innovative environmental solutions</span>
                    </li>
                  </>
                )}
                {activeEvent === 1 && (
                  <>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-[#FFD700]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="h-2 w-2 rounded-full bg-[#FFD700]"></span>
                      </span>
                      <span className="text-white/80">First international agreement for EEMS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-[#FFD700]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="h-2 w-2 rounded-full bg-[#FFD700]"></span>
                      </span>
                      <span className="text-white/80">Established framework for African development</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-[#FFD700]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="h-2 w-2 rounded-full bg-[#FFD700]"></span>
                      </span>
                      <span className="text-white/80">Created pilot project for sustainable forestry</span>
                    </li>
                  </>
                )}
                {activeEvent === 2 && (
                  <>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-[#FFD700]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="h-2 w-2 rounded-full bg-[#FFD700]"></span>
                      </span>
                      <span className="text-white/80">International recognition at UN climate conference</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-[#FFD700]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="h-2 w-2 rounded-full bg-[#FFD700]"></span>
                      </span>
                      <span className="text-white/80">Collaboration with African Union leadership</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-[#FFD700]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="h-2 w-2 rounded-full bg-[#FFD700]"></span>
                      </span>
                      <span className="text-white/80">Global platform for environmental initiatives</span>
                    </li>
                  </>
                )}
                {activeEvent === 3 && (
                  <>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-[#FFD700]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="h-2 w-2 rounded-full bg-[#FFD700]"></span>
                      </span>
                      <span className="text-white/80">Secured 99-year concession for major project</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-[#FFD700]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="h-2 w-2 rounded-full bg-[#FFD700]"></span>
                      </span>
                      <span className="text-white/80">20-million-hectare environmental restoration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-[#FFD700]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="h-2 w-2 rounded-full bg-[#FFD700]"></span>
                      </span>
                      <span className="text-white/80">Partnership with DRC government</span>
                    </li>
                  </>
                )}
                {activeEvent > 3 && (
                  <>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-[#FFD700]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="h-2 w-2 rounded-full bg-[#FFD700]"></span>
                      </span>
                      <span className="text-white/80">Expanded international partnerships</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-[#FFD700]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="h-2 w-2 rounded-full bg-[#FFD700]"></span>
                      </span>
                      <span className="text-white/80">Advanced sustainable development goals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="h-5 w-5 rounded-full bg-[#FFD700]/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="h-2 w-2 rounded-full bg-[#FFD700]"></span>
                      </span>
                      <span className="text-white/80">Strengthened global environmental leadership</span>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

