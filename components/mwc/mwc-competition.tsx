"use client"

import { motion } from "framer-motion"
import { Upload, Vote, Star, Award, Music, Users, Trophy, Mic } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const stages = [
  {
    id: "submission",
    icon: Upload,
    title: "Submission",
    description: "Artists submit their original music through our platform",
    color: "#FFD700",
    active: true,
    details: {
      duration: "3 months",
      requirements: "Original music only",
      process: "Upload tracks through our platform",
      benefits: "Global exposure to industry professionals",
    },
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "voting",
    icon: Vote,
    title: "Voting",
    description: "Global audience votes for their favorite artists",
    color: "#00FFFF",
    active: false,
    details: {
      duration: "2 months",
      requirements: "Public voting + Expert panel",
      process: "Fans vote daily for their favorites",
      benefits: "Build your global fanbase",
    },
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "semifinals",
    icon: Star,
    title: "Semi-Finals",
    description: "Top artists from each country compete in semi-finals",
    color: "#4B0082",
    active: false,
    details: {
      duration: "1 month",
      requirements: "Top 5 artists from each country",
      process: "Regional competitions and showcases",
      benefits: "Media coverage and industry networking",
    },
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: "finals",
    icon: Award,
    title: "World Finals",
    description: "Finalists perform live in the host city for the grand prize",
    color: "#FFD700",
    active: false,
    details: {
      duration: "1 week",
      requirements: "Top 20 global artists",
      process: "Live performances in Dubai",
      benefits: "$1M prize + global record deal",
    },
    image: "/placeholder.svg?height=400&width=600",
  },
]

const features = [
  {
    icon: Music,
    title: "194+ Countries",
    description: "Artists from around the world",
    color: "#FFD700",
  },
  {
    icon: Users,
    title: "Global Audience",
    description: "Millions of fans voting",
    color: "#00FFFF",
  },
  {
    icon: Trophy,
    title: "$1M Prize",
    description: "Life-changing opportunity",
    color: "#4B0082",
  },
  {
    icon: Mic,
    title: "Industry Exposure",
    description: "Connect with top labels",
    color: "#FF4081",
  },
]

export default function MwcCompetition() {
  const [activeStage, setActiveStage] = useState("submission")
  const currentStage = stages.find((stage) => stage.id === activeStage) || stages[0]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#0D0118]/90">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#FFD700]/10 blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#00FFFF]/10 blur-[100px]" />
      </div>

      {/* Sound wave decoration */}
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-32 opacity-10">
        <svg viewBox="0 0 1200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path d="M0,100 Q300,180 600,100 T1200,100" stroke="url(#gradient)" strokeWidth="2" />
          <path d="M0,100 Q300,20 600,100 T1200,100" stroke="url(#gradient)" strokeWidth="2" />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FFD700" />
              <stop offset="50%" stopColor="#00FFFF" />
              <stop offset="100%" stopColor="#4B0082" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Competition <span className="text-[#FFD700]">Structure</span>
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Our unique competition format takes artists from initial submission to global stardom through a series of
            carefully designed stages.
          </p>
        </motion.div>

        {/* Key features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center border border-white/10"
            >
              <div
                className="w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-3"
                style={{ backgroundColor: `${feature.color}20` }}
              >
                <feature.icon className="h-6 w-6" style={{ color: feature.color }} />
              </div>
              <h3 className="font-bold mb-1">{feature.title}</h3>
              <p className="text-sm text-white/70">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stage selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {stages.map((stage, index) => (
            <motion.button
              key={stage.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
                activeStage === stage.id
                  ? `bg-[${stage.color}] text-black font-bold`
                  : "bg-white/5 text-white/80 hover:bg-white/10"
              }`}
              style={{
                backgroundColor: activeStage === stage.id ? stage.color : undefined,
                color: activeStage === stage.id ? (stage.color === "#4B0082" ? "white" : "black") : undefined,
              }}
              onClick={() => setActiveStage(stage.id)}
            >
              <stage.icon className="h-4 w-4" />
              <span>{stage.title}</span>
              {stage.active && activeStage !== stage.id && (
                <span className="w-2 h-2 rounded-full bg-[#00FFFF] animate-pulse"></span>
              )}
            </motion.button>
          ))}
        </div>

        {/* Stage details */}
        <motion.div
          key={activeStage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-8 items-center"
        >
          {/* Stage image */}
          <div className="relative rounded-2xl overflow-hidden h-[300px] md:h-[400px] order-2 md:order-1">
            <Image
              src={currentStage.image || "/placeholder.svg"}
              alt={currentStage.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

            {/* Stage indicator */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div
                className="inline-block px-4 py-2 rounded-full font-bold"
                style={{
                  backgroundColor: currentStage.color,
                  color: currentStage.color === "#4B0082" ? "white" : "black",
                }}
              >
                {currentStage.title} Stage
              </div>
              {currentStage.active && (
                <div className="mt-3 flex items-center gap-2 text-white">
                  <span className="w-3 h-3 rounded-full bg-[#00FFFF] animate-pulse"></span>
                  <span>Current Stage</span>
                </div>
              )}
            </div>
          </div>

          {/* Stage content */}
          <div className="space-y-6 order-1 md:order-2">
            <div>
              <h3 className="text-3xl font-bold mb-3" style={{ color: currentStage.color }}>
                {currentStage.title}
              </h3>
              <p className="text-xl text-white/80">{currentStage.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {Object.entries(currentStage.details).map(([key, value], index) => (
                <div key={key} className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                  <div className="text-sm text-white/60 capitalize mb-1">{key}</div>
                  <div className="font-medium">{value}</div>
                </div>
              ))}
            </div>

            {/* Progress indicator */}
            <div className="pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-white/60">Competition Progress</span>
                <span className="text-sm font-bold" style={{ color: currentStage.color }}>
                  Stage {stages.findIndex((s) => s.id === activeStage) + 1} of {stages.length}
                </span>
              </div>
              <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${((stages.findIndex((s) => s.id === activeStage) + 1) / stages.length) * 100}%`,
                    background: `linear-gradient(to right, #FFD700, ${currentStage.color})`,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline visualization */}
        <div className="mt-16 relative">
          <div className="absolute left-0 right-0 top-1/2 h-1 bg-white/10 -translate-y-1/2"></div>
          <div className="flex justify-between">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <button
                  className={`w-8 h-8 rounded-full flex items-center justify-center relative z-10 ${
                    activeStage === stage.id ? "ring-2 ring-white" : ""
                  }`}
                  style={{ backgroundColor: stage.color }}
                  onClick={() => setActiveStage(stage.id)}
                >
                  <stage.icon className="h-4 w-4 text-black" />
                </button>
                <div
                  className="absolute left-0 h-1 top-1/2 -translate-y-1/2"
                  style={{
                    width: index === 0 ? "0" : "100%",
                    background:
                      index === 0
                        ? "transparent"
                        : `linear-gradient(to right, ${stages[index - 1].color}, ${stage.color})`,
                    right: index === 0 ? "auto" : "50%",
                  }}
                ></div>
                <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium">
                  {stage.title}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

