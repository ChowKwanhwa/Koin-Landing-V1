"use client"

import { motion } from "framer-motion"

interface AfricaMapProps {
  highlightNorthern?: boolean
  highlightSouthern?: boolean
}

export default function AfricaMapSimplified({ highlightNorthern = false, highlightSouthern = false }: AfricaMapProps) {
  return (
    <div className="relative w-full h-full">
      <svg viewBox="0 0 500 600" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Definitions for gradients */}
        <defs>
          <linearGradient id="globe-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 50, 20, 0.2)" />
            <stop offset="100%" stopColor="rgba(0, 100, 50, 0.1)" />
          </linearGradient>

          <linearGradient id="northern-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#4CAF50" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#4CAF50" stopOpacity="0.4" />
          </linearGradient>

          <linearGradient id="southern-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E90FF" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1E90FF" stopOpacity="0.4" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Background globe effect */}
        <motion.circle
          cx="250"
          cy="300"
          r="280"
          fill="url(#globe-gradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* Africa continent outline - more recognizable shape */}
        <motion.path
          d="M250,100 C270,105 290,110 300,130 C310,150 315,170 320,190 C325,210 330,230 340,250 
             C350,270 360,290 365,310 C370,330 375,350 370,370 C365,390 355,410 345,430 
             C335,450 325,470 310,485 C295,500 280,510 260,515 C240,520 220,525 200,520 
             C180,515 165,505 155,490 C145,475 140,460 135,440 C130,420 125,400 130,380 
             C135,360 145,340 150,320 C155,300 160,280 155,260 C150,240 140,220 145,200 
             C150,180 165,165 180,150 C195,135 210,120 225,110 C240,100 230,95 250,100 Z"
          fill="rgba(255, 255, 255, 0.1)"
          stroke="rgba(255, 255, 255, 0.6)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />

        {/* Madagascar island - properly separated from mainland */}
        <motion.path
          d="M400,420 C405,430 410,440 408,450 C406,460 402,470 395,475 C388,480 380,478 375,470 C370,462 368,450 370,440 C372,430 378,420 385,415 C392,410 395,410 400,420 Z"
          fill="rgba(255, 255, 255, 0.1)"
          stroke="rgba(255, 255, 255, 0.6)"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
        />

        {/* Northern Corridor - horizontal straight line spanning the continent */}
        <motion.path
          d="M120,350 L380,350"
          stroke={highlightNorthern ? "url(#northern-gradient)" : "rgba(76, 175, 80, 0.2)"}
          strokeWidth={highlightNorthern ? "16" : "8"}
          strokeLinecap="round"
          strokeDasharray="1,0"
          filter={highlightNorthern ? "url(#glow)" : "none"}
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            strokeWidth: highlightNorthern ? 16 : 8,
          }}
          transition={{ duration: 1.5, delay: 1 }}
        />

        {/* Southern Corridor - horizontal straight line spanning the continent */}
        <motion.path
          d="M120,200 L380,200"
          stroke={highlightSouthern ? "url(#southern-gradient)" : "rgba(30, 144, 255, 0.2)"}
          strokeWidth={highlightSouthern ? "16" : "8"}
          strokeLinecap="round"
          strokeDasharray="1,0"
          filter={highlightSouthern ? "url(#glow)" : "none"}
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: 1,
            opacity: 1,
            strokeWidth: highlightSouthern ? 16 : 8,
          }}
          transition={{ duration: 1.5, delay: 1.2 }}
        />

        {/* Labels */}
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 2 }}>
          {/* Northern Corridor Label */}
          <motion.rect
            x="390"
            y="340"
            width="120"
            height="30"
            rx="15"
            fill={highlightNorthern ? "rgba(76, 175, 80, 0.2)" : "rgba(0, 0, 0, 0.3)"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.2 }}
          />
          <motion.text x="450" y="360" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
            Southern Corridor
          </motion.text>

          {/* Southern Corridor Label */}
          <motion.rect
            x="390"
            y="190"
            width="120"
            height="30"
            rx="15"
            fill={highlightSouthern ? "rgba(30, 144, 255, 0.2)" : "rgba(0, 0, 0, 0.3)"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 2.2 }}
          />
          <motion.text x="450" y="210" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">
          Northern Corridor
          </motion.text>
        </motion.g>
      </svg>
    </div>
  )
}
