"use client"

import { useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown } from "lucide-react"

const MotionDiv = motion.create("div")

export default function VideoBanner() {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  
  useEffect(() => {
    // 确保视频加载完成后播放
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error)
      })
    }
  }, [])

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {/* Video background */}
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/video1.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center">
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center"
          >
            <h2 className="relative mb-8 text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
              <motion.span 
                className="absolute -inset-1 block blur-2xl bg-gradient-to-r from-[#FFD700]/20 via-[#FDB931]/20 to-[#FFD700]/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5, delay: 0.2 }}
                aria-hidden="true"
              ></motion.span>
              <motion.span 
                className="relative block bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFD700] bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                The Future of
              </motion.span>
              <motion.span 
                className="relative mt-1 block bg-gradient-to-r from-[#FFD700] via-[#FDB931] to-[#FFD700] bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                African Finance
              </motion.span>
            </h2>
            <div className="relative">
              <motion.span 
                className="absolute -inset-1 block blur-md bg-[#FFD700]/10"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.8 }}
                aria-hidden="true"
              ></motion.span>
              <motion.p 
                className="relative text-lg font-medium tracking-widest uppercase text-[#FFD700]/80"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
              >
                Experience the KOIN Revolution
              </motion.p>
            </div>
          </MotionDiv>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <ChevronDown className="h-8 w-8 text-white/80" />
        </motion.div>
      </div>
    </div>
  )
}
