"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const mediaItems = [
  {
    id: 1,
    category: "photos",
    title: "UN COP-23 Conference",
    description: "Chanasnun Kajornphuwapong at the United Nations Climate Change Conference in Bonn.",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/H.E.%20Alpha%20Conde%2C%20President%20of%20the%20Republic%20of%20Guinea%20and%20President%20of%20the%20African%20Union%2C%20together%20with%20Chanatnan%2C%20announced%20the%20first%20African%20EMS%20project%20at%20the%20COP23%20Climate%20Change%20Conference%20in%20Bonn3.jpg-26Q7m17ggOTnQN6b7uDQ7GFQJilGIN.jpeg",
  },
  {
    id: 2,
    category: "photos",
    title: "Land Title Deed Ceremony",
    description: "Receiving the land title deed for the project from the Minister of Forestry of the Republic of Guinea during a press conference at the 23rd Global Warming Conference in Bonn, Germany.",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/H.E.%20Alpha%20Conde%2C%20President%20of%20the%20Republic%20of%20Guinea%20and%20President%20of%20the%20African%20Union%2C%20together%20with%20Chanatnan%2C%20announced%20the%20first%20African%20EMS%20project%20at%20the%20COP23%20Climate%20Change%20Conference%20in%20Bonn1.jpg-jBFPdh3liKQKgKlyUNbKybJFXzLigp.jpeg",
  },
  {
    id: 3,
    category: "photos",
    title: "DRC Delegation Visit",
    description: "Representatives from President Joseph Kabila of the Democratic Republic of the Congo visited Thailand to discuss the establishment of projects in the Congo DRC.",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20representative%20of%20President%20Joseph%20Kabila%20held%20the%20first%20meeting%20with%20Chanasnun%20at%20the%20office%20in%20Thailand%20in%202018%20to%20discuss%20the%20establishment%20of%20The%20African%20EMS%20Project%20in%20the%20Democratic%20Republic%20of%20the%20Cong.jpg-wde5mLcBN89Cud1pR2exueD36QLszX.jpeg",
  },
  {
    id: 4,
    category: "photos",
    title: "Agricultural Innovation",
    description: "Demonstrating fast-growing tree species in Africa.",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Experts%20from%20the%20Ministry%20of%20Agriculture%20and%20a%20representative%20of%20President%20Joseph%20Kabila%20of%20the%20Democratic%20Republic%20of%20the%20Congo%20met%20with%20Chanasnan%20in%20Thailand%20to%20discuss%20the%20launch%20of%20The%20African%20EMS%20Project%20i.jpg-EHUyXUVA5KjHrMv0QYl6uhkLJDE21A.jpeg",
  },
  {
    id: 5,
    category: "photos",
    title: "Press Conference",
    description: "Media briefing on The Emission Zero Global Project.",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/A%20press%20conference%20on%20The%20Emission%20Zero%20Global%20Project%20was%20held%20in%20collaboration%20with%20the%20President%20of%20the%20African%20Union%20at%20the%20COP23%20Climate%20Summit%20in%20Bonn1.jpg-OD0eBQIiIom05ROVUrM3A5dXrUuYFc.jpeg",
  },
  {
    id: 6,
    category: "videos",
    title: "Vision for Sustainable Future",
    description: "Keynote address on environmental innovation and global cooperation.",
    thumbnail:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20250301022541.jpg-xYcHCkY1zsJRUTuPFyqDJ4d8wLNuMQ.jpeg",
  },
  {
    id: 7,
    category: "videos",
    title: "PEACE Alliance Formation",
    description: "Documentary on the creation of the Pan-African Economic Alliance.",
    thumbnail: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 8,
    category: "documents",
    title: "Official Biography",
    description: "Comprehensive profile of Chanasnun Kajornphuwapong's life and achievements.",
    thumbnail: "/placeholder.svg?height=300&width=400",
  },
  {
    id: 9,
    category: "documents",
    title: "Vision Statement",
    description: "Detailed outline of future initiatives and global vision.",
    thumbnail: "/placeholder.svg?height=300&width=400",
  },
]

export default function FounderMedia() {
  // 显示所有媒体项，不再需要分类过滤
  const allMedia = mediaItems.slice(0, 6) // 只显示前6个项目

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">Media Center</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Explore photos, videos, and documents showcasing Chanasnun Kajornphuwapong's global impact and vision.
          </p>
        </motion.div>

        {/* 移除分类按钮 */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {allMedia.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative rounded-xl overflow-hidden"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={item.thumbnail || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1B4D3E]/90 via-transparent to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                <p className="text-sm text-white/70">{item.description}</p>
                {/* 移除查看按钮 */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
