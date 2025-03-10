"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown } from "lucide-react"

const MotionDiv = motion.div

export default function VideoBanner() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const { scrollY } = useScroll()
  
  const opacity = useTransform(scrollY, [0, 300], [1, 0])
  const scale = useTransform(scrollY, [0, 300], [1, 1.2])
  
  return (
    <MotionDiv 
      ref={containerRef}
      style={{ opacity }}
      className="relative h-screen w-full overflow-hidden"
    >
      <MotionDiv 
        className="absolute inset-0"
        style={{ scale }}
      >
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto"
          className="absolute left-1/2 top-1/2 h-full w-auto min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src="/video1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </MotionDiv>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/30 via-transparent to-black/30" />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h2 className="relative mb-8 text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
            <MotionDiv 
              className="absolute -inset-1 block blur-2xl bg-gradient-to-r from-[#FFD700]/20 via-[#FDB931]/20 to-[#FFD700]/20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.2 }}
              aria-hidden="true"
            />
            <MotionDiv 
              className="relative block bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFD700] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              The Future of
            </MotionDiv>
            <MotionDiv 
              className="relative mt-1 block bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFD700] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              African Finance
            </MotionDiv>
          </h2>
          <div className="relative">
            <MotionDiv 
              className="absolute -inset-1 block blur-md bg-[#FFD700]/10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              aria-hidden="true"
            />
            <MotionDiv 
              className="relative text-lg font-medium tracking-widest uppercase text-[#FFD700]/80"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Experience the KOIN Revolution
            </MotionDiv>
          </div>
        </MotionDiv>
      </div>
      
      {/* Scroll indicator */}
      <MotionDiv 
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-8 w-8 text-white/80" />
      </MotionDiv>
    </MotionDiv>
  )
}
