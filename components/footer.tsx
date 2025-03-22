"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Twitter, TextIcon as Telegram, Globe, FileText, Instagram } from "lucide-react"

const links = {
  ecosystem: [
    { label: "Music World Cup", href: "/mwc" },
    { label: "EEMS Projects", href: "/eems" },
    { label: "Sri Araya Layer1 Chain", href: "#" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "Press Kit", href: "#" },
    { label: "Partners", href: "#" },
  ],
}

// Social media links
const socialLinks = [
  {
    icon: Globe,
    href: "#",
    label: "Website",
    hoverColor: "hover:text-blue-400",
  },
  {
    icon: Twitter,
    href: "https://x.com/TheKoinOp",
    label: "KOIN Twitter",
    hoverColor: "hover:text-blue-400",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/thekoinop",
    label: "KOIN Instagram",
    hoverColor: "hover:text-pink-500",
  },
  {
    icon: Telegram,
    href: "#",
    label: "Telegram",
    hoverColor: "hover:text-blue-400",
  },
  {
    icon: FileText,
    href: "#",
    label: "Whitepaper",
    hoverColor: "hover:text-gray-300",
  },
]

// Team social links
const teamSocialLinks = [
  {
    icon: Twitter,
    href: "https://x.com/Kajornphuwapong",
    label: "Chairman Twitter",
    hoverColor: "hover:text-blue-400",
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/chanasnun_kajornphuwapong",
    label: "Chairman Instagram",
    hoverColor: "hover:text-pink-500",
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black/50 py-16 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="mb-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold">KOIN</h3>
            <p className="text-gray-400">The Currency of African Renaissance</p>

            {/* Project Social Links */}
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 transition-colors ${link.hoverColor} group relative`}
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black/80 px-2 py-1 text-xs opacity-0 transition-opacity group-hover:opacity-100">
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>

            {/* Team Social Links */}
            <div className="pt-2">
              <h4 className="mb-2 text-sm font-medium text-gray-300">Chairman's Profiles:</h4>
              <div className="flex gap-4">
                {teamSocialLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 transition-colors ${link.hoverColor} group relative`}
                    aria-label={link.label}
                  >
                    <link.icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black/80 px-2 py-1 text-xs opacity-0 transition-opacity group-hover:opacity-100">
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>

          {Object.entries(links).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="mb-4 text-lg font-semibold capitalize">{category}</h4>
              <ul className="space-y-2">
                {items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link href={item.href} className="text-gray-400 transition-colors hover:text-blue-400">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between space-y-4 border-t border-white/10 pt-8 text-sm text-gray-400 md:flex-row md:space-y-0">
          <div> 2025 KOIN. All rights reserved.</div>
          <div>A Chanasnun Kajornphuwapong Initiative</div>
        </div>
      </div>
    </footer>
  )
}
