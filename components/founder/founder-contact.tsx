"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Send, Twitter, Instagram } from "lucide-react"

export default function FounderContact() {
  return (
    <section className="py-24 relative bg-[#0F2A22]/50" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Get in Touch</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Connect with Chanasnun Kajornphuwapong's team for inquiries, partnerships, or speaking engagements.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>

              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <select className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent">
                    <option>General Inquiry</option>
                    <option>Partnership Opportunity</option>
                    <option>Speaking Engagement</option>
                    <option>Media Request</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#FFD700] focus:border-transparent"
                  ></textarea>
                </div>

                <Button className="w-full bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#1B4D3E] font-bold">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 h-full">
              <h3 className="text-xl font-bold mb-6">Connect on Social Media</h3>

              <div className="space-y-8">
                {/* Founder's Social Media */}
                <div className="mb-8">
                  <h4 className="font-medium mb-4 text-[#FFD700] border-b border-white/10 pb-2">
                    Chanasnun Kajornphuwapong
                  </h4>
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="https://x.com/Kajornphuwapong"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="h-12 w-12 rounded-full bg-[#1DA1F2]/20 flex items-center justify-center">
                        <Twitter className="h-6 w-6 text-[#1DA1F2]" />
                      </div>
                      <span className="text-sm text-white/70">Twitter</span>
                    </a>

                    <a
                      href="https://www.instagram.com/chanasnun_kajornphuwapong"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="h-12 w-12 rounded-full bg-[#E1306C]/20 flex items-center justify-center">
                        <Instagram className="h-6 w-6 text-[#E1306C]" />
                      </div>
                      <span className="text-sm text-white/70">Instagram</span>
                    </a>
                  </div>
                </div>

                {/* KOIN Social Media */}
                <div>
                  <h4 className="font-medium mb-4 text-[#FFD700] border-b border-white/10 pb-2">KOIN Official</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="https://x.com/TheKoinOp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="h-12 w-12 rounded-full bg-[#1DA1F2]/20 flex items-center justify-center">
                        <Twitter className="h-6 w-6 text-[#1DA1F2]" />
                      </div>
                      <span className="text-sm text-white/70">Twitter</span>
                    </a>

                    <a
                      href="https://www.instagram.com/thekoinop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center gap-2 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="h-12 w-12 rounded-full bg-[#E1306C]/20 flex items-center justify-center">
                        <Instagram className="h-6 w-6 text-[#E1306C]" />
                      </div>
                      <span className="text-sm text-white/70">Instagram</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

