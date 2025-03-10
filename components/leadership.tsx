"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const profiles = [
  {
    name: "Chanasnun Kajornphuwapong",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mr%20Nine%20%285%29.jpg-mxgTFk84pzDGnnPpvsRUyGA7i4aPF8.jpeg",
    titles: [
      "Founder President of the PEACE Alliance (Special Consultative Status to UN ECOSOC)",
      "Founder of the African EEMS",
      "Co-founder of Music World Cup"
    ],
    quote: "Transforming Africa through digital innovation and sustainable development",
    theme: "from-blue-600/20 to-blue-400/20",
  },
  {
    name: "Global Partnership",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mr%20Nine%20%2837%29.jpg-QhEAkrdw0F8yZi9OIJvcimkEMnu2Lc.jpeg",
    titles: ["African Government Officials", "International Business Partners", "Strategic Development Team"],
    quote: "Bridging Africa with Global Innovation and Development",
    theme: "from-purple-600/20 to-purple-400/20",
  },
  {
    name: "Committed to Sustainable Future",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mr%20Nine%20%2828%29.jpg-wASnQd2JQqlzt3lgHpeTqvDvKO38z6.jpeg",
    titles: ["UN Climate Change Partnership", "EEMS Sustainable Development", "Green Technology Innovation"],
    quote: "Leading Africa's transition to a sustainable digital economy",
    theme: "from-green-600/20 to-green-400/20",
  },
  {
    name: "From Vision to Reality",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Mr%20Nine%20%282%29.jpg-iI9lfwAKR3CuBz7MxaeBbHFdsEeYBC.jpeg",
    titles: ["Local Community Engagement", "Infrastructure Development", "Resource Management"],
    quote: "Building sustainable foundations for Africa's digital future",
    theme: "from-orange-600/20 to-orange-400/20",
  },
]

export default function Leadership() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? profiles.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === profiles.length - 1 ? 0 : prev + 1))
  }

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
          <h2 className="mb-4 text-4xl font-bold">Led by Global Vision</h2>
        </motion.div>

        <div className="relative mx-auto max-w-6xl">
          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute -left-16 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/5 text-white hover:bg-white/10"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="absolute -right-16 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/5 text-white hover:bg-white/10"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Carousel */}
          <div className="overflow-hidden rounded-2xl bg-white/5 backdrop-blur-lg">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="grid gap-8 p-8 md:grid-cols-2"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={profiles[currentIndex].image || "/placeholder.svg"}
                    alt={profiles[currentIndex].name}
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="flex flex-col justify-center space-y-6">
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="whitespace-nowrap text-xl sm:text-2xl md:text-3xl font-bold text-white"
                  >
                    {profiles[currentIndex].name}
                  </motion.h3>
                  <div className="space-y-3">
                    {profiles[currentIndex].titles.map((title, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        className="relative overflow-hidden rounded-full bg-gradient-to-r px-4 py-2"
                        style={{
                          backgroundImage: `linear-gradient(to right, ${profiles[currentIndex].theme})`,
                        }}
                      >
                        <span className="relative z-10 text-white">{title}</span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0"
                          animate={{
                            x: ["-100%", "100%"],
                          }}
                          transition={{
                            repeat: Number.POSITIVE_INFINITY,
                            duration: 2,
                            ease: "linear",
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                  <blockquote className="relative">
                    <div className="absolute -left-4 -top-4 text-4xl text-white/20">"</div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="relative z-10 pl-6 italic text-gray-300"
                    >
                      {profiles[currentIndex].quote}
                    </motion.p>
                  </blockquote>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 border-t border-white/10 p-4">
              {profiles.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-gradient-to-r from-blue-500 to-blue-400"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
