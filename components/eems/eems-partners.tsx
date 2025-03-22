"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Handshake } from "lucide-react"

export default function EemsPartners() {
  return (
    <section className="py-24 relative bg-[#0A1A0F]/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Partner With Us</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Join the African Renaissance through the EEMS initiative and be part of this transformative journey.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden"
          >
            <div className="p-1 bg-gradient-to-r from-[#4CAF50] via-[#1E90FF] to-[#FFC107]">
              <div className="bg-[#0A1A0F] rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Become a Strategic Partner</h3>
                <p className="text-gray-300 mb-6">
                  We invite governments, organizations, businesses, and individuals to join us in this historic
                  initiative to transform Africa's landscape and economy.
                </p>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                    <h4 className="font-semibold mb-2">Governments</h4>
                    <p className="text-sm text-gray-400">Policy support and infrastructure development</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                    <h4 className="font-semibold mb-2">Businesses</h4>
                    <p className="text-sm text-gray-400">Investment and technical expertise</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm">
                    <h4 className="font-semibold mb-2">Organizations</h4>
                    <p className="text-sm text-gray-400">Research and implementation support</p>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#4CAF50] to-[#1E90FF] hover:from-[#3B8F3E] hover:to-[#1A7AD9] text-white"
                  onClick={() => {
                    const contactForm = document.getElementById("contact-form")
                    if (contactForm) {
                      contactForm.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                >
                  <Handshake className="mr-2 h-5 w-5" />
                  Partner With EEMS
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

