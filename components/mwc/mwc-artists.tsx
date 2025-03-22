"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Play, Heart } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

const artists = [
  {
    name: "Elena Rodriguez",
    country: "Spain",
    genre: "Pop/Electronic",
    image: "/placeholder.svg?height=500&width=500",
    votes: "1.2M",
  },
  {
    name: "Kwame Johnson",
    country: "Ghana",
    genre: "Afrobeat",
    image: "/placeholder.svg?height=500&width=500",
    votes: "980K",
  },
  {
    name: "Yuki Tanaka",
    country: "Japan",
    genre: "J-Pop/Rock",
    image: "/placeholder.svg?height=500&width=500",
    votes: "1.5M",
  },
  {
    name: "Alejandro Vega",
    country: "Mexico",
    genre: "Latin Urban",
    image: "/placeholder.svg?height=500&width=500",
    votes: "1.1M",
  },
]

export default function MwcArtists() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextArtist = () => {
    setActiveIndex((prev) => (prev === artists.length - 1 ? 0 : prev + 1))
  }

  const prevArtist = () => {
    setActiveIndex((prev) => (prev === 0 ? artists.length - 1 : prev - 1))
  }

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-[#FFD700]">Artists</span>
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Discover incredible talent from around the world competing in Music World Cup®.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Navigation buttons */}
          <button
            onClick={prevArtist}
            className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 h-12 w-12 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-[#FFD700] transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={nextArtist}
            className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 h-12 w-12 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-[#FFD700] transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Artist showcase */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8 items-center"
          >
            <div className="relative aspect-square max-w-md mx-auto md:mx-0">
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <Image
                  src={artists[activeIndex].image || "/placeholder.svg"}
                  alt={artists[activeIndex].name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4B0082]/70 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm text-[#FFD700]">{artists[activeIndex].country}</div>
                    <div className="text-2xl font-bold">{artists[activeIndex].name}</div>
                    <div className="text-sm text-white/70">{artists[activeIndex].genre}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-[#FFD700] flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                      <Play className="h-5 w-5 text-[#4B0082] ml-1" />
                    </div>
                    <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center cursor-pointer hover:bg-[#FF4081]/20 transition-colors">
                      <Heart className="h-5 w-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold">{artists[activeIndex].name}</h3>
              <p className="text-white/80">
                One of the most exciting talents in this year's Music World Cup®. Representing{" "}
                {artists[activeIndex].country} with a unique blend of {artists[activeIndex].genre} that has captivated
                audiences worldwide.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="text-sm text-white/70">Votes</div>
                  <div className="text-2xl font-bold text-[#FFD700]">{artists[activeIndex].votes}</div>
                </div>
                <div className="bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="text-sm text-white/70">Global Rank</div>
                  <div className="text-2xl font-bold text-[#00FFFF]">#{activeIndex + 1}</div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="flex justify-between items-center">
                  <div className="text-sm text-white/70">Submission Phase</div>
                  <div className="text-sm font-bold text-[#FFD700]">Active</div>
                </div>
                <div className="mt-2 h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#FFD700] to-[#FFD700] rounded-full"
                    style={{ width: "25%" }}
                  ></div>
                </div>
                <div className="mt-1 flex justify-between text-xs text-white/50">
                  <span>Submission</span>
                  <span>Voting</span>
                  <span>Semi-Finals</span>
                  <span>Finals</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

