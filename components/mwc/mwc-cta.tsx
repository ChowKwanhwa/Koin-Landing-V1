"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Music, Vote, Users } from "lucide-react"

export default function MwcCta() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#4B0082]/50 via-[#00FFFF]/10 to-[#FFD700]/20" />

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join the <span className="text-[#FFD700]">Music Revolution</span>
          </h2>
          <p className="text-xl text-white/80 mb-12">
            Whether you're an artist ready to showcase your talent or a fan eager to discover new music, Music World
            Cup® welcomes you to be part of this global movement.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                icon: Music,
                title: "Artists",
                description: "Submit your music and reach a global audience",
                color: "#FFD700",
                button: "Submit Now",
              },
              {
                icon: Vote,
                title: "Fans",
                description: "Vote for your favorite artists and help them win",
                color: "#00FFFF",
                button: "Coming Soon",
                disabled: true,
              },
              {
                icon: Users,
                title: "Partners",
                description: "Join our global network of industry partners",
                color: "#4B0082",
                button: "Coming Soon",
                disabled: true,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center"
              >
                <div
                  className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <item.icon className="h-8 w-8" style={{ color: item.color }} />
                </div>

                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/70 mb-4">{item.description}</p>

                <Button
                  className={`w-full ${item.disabled ? "opacity-60 cursor-not-allowed" : ""}`}
                  style={{
                    backgroundColor: item.disabled ? "#666" : item.color,
                    color: item.color === "#4B0082" ? "white" : "#4B0082",
                  }}
                  disabled={item.disabled}
                >
                  {item.button}
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <div className="text-sm text-white/60 mb-2">#MusicWorldCup #GlobalMusic #MusicRevolution</div>
            <div className="flex justify-center gap-4">
              {["facebook", "twitter", "instagram", "youtube", "tiktok"].map((platform, index) => (
                <a
                  key={index}
                  href="#"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#FFD700] transition-colors"
                >
                  <span className="sr-only">{platform}</span>
                  <div className="h-5 w-5 bg-white rounded-full"></div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

