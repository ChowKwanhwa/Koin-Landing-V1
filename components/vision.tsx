"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Globe2, Music2, Leaf, Layers } from "lucide-react"
import { useRef } from "react"

const features = [
  {
    icon: Globe2,
    title: "Legal Tender in Africa",
    description: "Nationally recognized digital currency across multiple African nations",
    gradient: "from-blue-500 to-cyan-500",
    delay: 0.1,
  },
  {
    icon: Music2,
    title: "Music World Cup Integration",
    description: "Official token of the global entertainment revolution",
    gradient: "from-purple-500 to-pink-500",
    delay: 0.2,
  },
  {
    icon: Leaf,
    title: "EEMS Foundation",
    description: "Powering African Economic & Ecological Modernization",
    gradient: "from-green-500 to-emerald-500",
    delay: 0.3,
  },
  {
    icon: Layers,
    title: "Sri Araya Layer 1 Chain Future",
    description: "Upcoming Layer 1 blockchain for Real World Assets",
    gradient: "from-orange-500 to-yellow-500",
    delay: 0.4,
  },
]

const BackgroundPattern = () => (
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute -top-[40%] left-[20%] h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
    <div className="absolute -bottom-[40%] right-[20%] h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
    <svg className="absolute left-0 top-0 h-full w-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
      <motion.path
        d="M0,50 Q25,45 50,50 T100,50 V100 H0 Z"
        fill="none"
        stroke="url(#grid-gradient)"
        strokeWidth="0.1"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
      <defs>
        <linearGradient id="grid-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="rgba(59, 130, 246, 0.2)" />
          <stop offset="50%" stopColor="rgba(147, 51, 234, 0.2)" />
          <stop offset="100%" stopColor="rgba(59, 130, 246, 0.2)" />
        </linearGradient>
      </defs>
    </svg>
  </div>
)

export default function Vision() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section ref={containerRef} className="relative py-24">
      <BackgroundPattern />

      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative mb-16 text-center"
        >
          <motion.div
            style={{ y }}
            className="pointer-events-none absolute -left-4 -top-4 h-24 w-24 rounded-xl border border-blue-500/20 bg-blue-500/5"
          />
          <motion.div
            style={{ y: useTransform(y, (v) => -v) }}
            className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-xl border border-purple-500/20 bg-purple-500/5"
          />

          <h2 className="relative mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Bridging Entertainment & Economic Development
          </h2>
          <p className="relative mx-auto max-w-3xl text-lg text-gray-400/90">
            <span className="text-blue-400">$KOIN</span> (Kajornphuwapong Omni-Inclusive Network) represents a
            groundbreaking fusion of visionary leadership, global entertainment, and sustainable development in the
            digital age.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: feature.delay }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card Background with animated border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 p-[1px]">
                <div className="h-full w-full rounded-2xl bg-gray-900/90 backdrop-blur-xl" />
              </div>

              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Content */}
              <div className="relative space-y-4 p-6">
                <div className={`inline-flex rounded-xl bg-gradient-to-r ${feature.gradient} p-3 shadow-lg`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

