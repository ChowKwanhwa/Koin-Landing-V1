"use client"

import { motion } from "framer-motion"
import { Diamond, Award, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"

const tiers = [
  {
    icon: Crown,
    name: "Gold",
    price: "10,000 KOIN",
    features: ["VIP Event Access", "Premium Features", "Community Benefits", "Early Access"],
    color: "from-yellow-400 to-yellow-600",
  },
  {
    icon: Diamond,
    name: "Diamond",
    price: "100,000 KOIN",
    features: ["Private Executive Meetings", "Exclusive Investment Access", "Custom Benefits", "All Gold Benefits"],
    color: "from-blue-400 to-blue-600",
    featured: true,
  },
  {
    icon: Award,
    name: "Platinum",
    price: "50,000 KOIN",
    features: ["Premium Event Access", "Investment Opportunities", "Enhanced Features", "All Gold Benefits"],
    color: "from-gray-300 to-gray-500",
  },
]

export default function Benefits() {
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
          <h2 className="mb-4 text-4xl font-bold">Exclusive Benefits</h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Join our tiered membership program to unlock exclusive benefits and opportunities in the KOIN ecosystem.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl bg-white/5 p-6 backdrop-blur-lg ${
                tier.featured ? "ring-2 ring-blue-500" : ""
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-3 py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="mb-4 text-center">
                <div className={`mx-auto mb-4 inline-block rounded-lg bg-gradient-to-r p-3 ${tier.color}`}>
                  <tier.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-center">{tier.name}</h3>
                <div className="text-lg font-medium text-gray-400 text-center">{tier.price}</div>
              </div>
              <ul className="mb-6 space-y-4">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center md:items-start justify-center md:justify-start">
                    <svg
                      className="mr-2 h-5 w-5 text-blue-400 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-center md:text-left">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  tier.featured ? "bg-blue-600 hover:bg-blue-700" : "bg-white/10 hover:bg-white/20"
                }`}
              >
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

