"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Building2, Music2, Leaf, Globe, ArrowRight } from "lucide-react"
import Link from "next/link"

const ecosystemItems = [
  {
    icon: Music2,
    title: "Music World Cup",
    description: "Revolutionary entertainment platform connecting artists and fans globally.",
    gradient: "from-purple-600/20 via-purple-400/20 to-purple-600/20",
    iconGradient: "from-purple-600 to-purple-400",
    delay: 0.1,
    showLearnMore: true,
    href: "/mwc"
  },
  {
    icon: Leaf,
    title: "EEMS Projects",
    description: "Sustainable development initiatives protecting our environment.",
    gradient: "from-green-600/20 via-green-400/20 to-green-600/20",
    iconGradient: "from-green-600 to-green-400",
    delay: 0.2,
    showLearnMore: true,
    href: "/eems"
  },
  {
    icon: Globe,
    title: "Sri Araya Layer 1 Chain",
    description: "Next-generation blockchain infrastructure for the future of finance.",
    gradient: "from-cyan-600/20 via-cyan-400/20 to-cyan-600/20",
    iconGradient: "from-cyan-600 to-cyan-400",
    delay: 0.3,
    showLearnMore: false,
    comingSoon: true,
    href: "/say-token"
  },
  {
    icon: Building2,
    title: "PEACE Alliance",
    description: "Leading the transformation of African nations through digital innovation.",
    gradient: "from-blue-600/20 via-blue-400/20 to-blue-600/20",
    iconGradient: "from-blue-600 to-blue-400",
    delay: 0.4,
    showLearnMore: false,
    comingSoon: true,
    href: "/peace-alliance"
  },
]

const BackgroundLines = () => (
  <div className="absolute inset-0 overflow-hidden">
    <svg className="absolute h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <motion.path
        d="M25,50 L75,50"
        stroke="url(#line-gradient)"
        strokeWidth="0.1"
        strokeDasharray="1 3"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <motion.path
        d="M25,30 Q50,50 75,70"
        stroke="url(#line-gradient)"
        strokeWidth="0.1"
        strokeDasharray="1 3"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.3 }}
        transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
      />
      <defs>
        <linearGradient id="line-gradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(59, 130, 246, 0)" />
          <stop offset="50%" stopColor="rgba(59, 130, 246, 0.5)" />
          <stop offset="100%" stopColor="rgba(59, 130, 246, 0)" />
        </linearGradient>
      </defs>
    </svg>
  </div>
)

export default function Ecosystem() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])

  return (
    <section className="relative py-24">
      <BackgroundLines />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="relative mb-4 text-4xl font-bold">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">KOIN</span>{" "}
            Ecosystem
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Discover how KOIN connects and powers various initiatives across our ecosystem.
          </p>
        </motion.div>

        <div className="mb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {ecosystemItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.delay }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card with animated border */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 p-[1px] transition-all duration-300 group-hover:p-[1.5px]">
                <div className="h-full w-full rounded-2xl bg-gray-900/90 backdrop-blur-xl" />
              </div>

              {/* Animated gradient background */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100`}
              />

              {/* Content */}
              <div className="relative space-y-4 p-6">
                <div className={`relative inline-flex rounded-xl bg-gradient-to-r ${item.iconGradient} p-3`}>
                  <item.icon className="h-6 w-6 text-white" />
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-white/20 to-transparent opacity-0 blur transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>

                {item.comingSoon && (
                  <div className="flex items-center">
                    <span className="text-sm text-gray-500 italic">Coming Soon</span>
                  </div>
                )}

                {item.showLearnMore && (
                  <Link href={item.href}>
                    <motion.button
                      whileHover={{ x: 5 }}
                      className="flex items-center text-sm text-blue-400 transition-colors hover:text-blue-300"
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </motion.button>
                  </Link>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500">
            <motion.div
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent_70%)]"
              style={{ y }}
            />
          </div>

          <div className="relative px-8 py-12 text-center">
            <h3 className="mb-4 text-2xl font-bold text-white">Ready to Join the Future?</h3>
            <p className="mb-6 text-lg text-white/90">Be part of Africa's digital transformation with KOIN.</p>
            <Button
              size="lg"
              className="relative overflow-hidden bg-white text-blue-600 transition-all hover:scale-105 hover:bg-white/90"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100 to-transparent"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 1.5,
                  ease: "linear",
                }}
              />
              <span className="relative">Get Started Now</span>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
