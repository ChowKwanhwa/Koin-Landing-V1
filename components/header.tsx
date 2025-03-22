"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronRight } from "lucide-react"

const navigation = [
  { name: "About Kajornphuwapong", href: "/founder" },
  { name: "MWC", href: "/mwc" },
  { name: "EEMS", href: "/eems" },
]

const MotionLink = motion.create(Link)

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav
        className={`relative transition-all duration-300 ${
          scrolled ? "border-b border-white/10 bg-black/80 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4"
        >
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <Link href="/" className="block">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/G-6-wOqU0MpcgT2vcnP3rwBesVjmz3klgE.svg"
                  alt="KOIN Logo"
                  width={120}
                  height={120}
                  priority={true}
                  className="h-12 w-auto transition-transform duration-300 hover:scale-105"
                />
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden items-center space-x-1 md:flex">
              {navigation.map((item, index) => (
                <MotionLink
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative px-4 py-2"
                >
                  <span className="relative z-10 text-sm font-bold bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFD700] bg-clip-text text-transparent transition-colors group-hover:from-white group-hover:via-white group-hover:to-white">
                    {item.name}
                  </span>
                  <motion.div
                    className="absolute inset-0 rounded-lg bg-white/0 transition-colors duration-300 group-hover:bg-[#FFD700]/5"
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFD700] transition-all duration-300 group-hover:w-full"
                  />
                </MotionLink>
              ))}
            </div>

            {/* Buy Button */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden md:block"
            >
              <Button
                size="lg"
                className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                data-buy-koin
              >
                <motion.span
                  className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)]"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 1.5,
                    ease: "linear",
                  }}
                />
                <span className="relative">Buy KOIN</span>
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </motion.div>

            {/* Mobile menu button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex md:hidden"
            >
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center rounded-lg p-2 transition-all hover:bg-white/10 hover:text-[#FFD700] focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                <motion.div 
                  animate={{ rotate: isOpen ? 90 : 0 }} 
                  transition={{ duration: 0.2 }}
                  className="text-[#FFD700]"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </motion.div>
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-b border-white/10 bg-gradient-to-b from-black/80 to-black/60 backdrop-blur-xl md:hidden"
            >
              <div className="container mx-auto space-y-1 px-4 pb-4 pt-2">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block rounded-lg px-4 py-2 text-base font-medium text-gray-300 transition-all hover:bg-white/10 hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="mt-4 px-3"
                >
                  <Button
                    size="lg"
                    className="relative w-full overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white"
                    data-buy-koin
                  >
                    <motion.span
                      className="absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent)]"
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 1.5,
                        ease: "linear",
                      }}
                    />
                    <span className="relative">Buy KOIN</span>
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Background gradient for scroll effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-transparent pointer-events-none"
      />
    </header>
  )
}
