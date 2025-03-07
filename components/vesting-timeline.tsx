"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

type TimelinePoint = {
  month: number
  label: string
  release: number | string
  cumulative: number | string
}

type VestingTimelineProps = {
  timeline: TimelinePoint[]
  color: string
}

export default function VestingTimeline({ timeline, color }: VestingTimelineProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const maxMonth = timeline[timeline.length - 1].month || 1
  const isDynamic = timeline.some((point) => point.cumulative === "Dynamic")

  return (
    <div className="mt-6 sm:mt-8">
      <h4 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold">Vesting Timeline</h4>
      <div className="relative h-32 sm:h-28 mb-6 sm:mb-0">
        {/* Timeline base */}
        <div className="absolute left-0 top-12 h-1 w-full bg-gray-700" />

        {/* Timeline points */}
        {timeline.map((point, index) => (
          <div
            key={index}
            className="absolute flex flex-col items-center"
            style={{
              left: `${(point.month / maxMonth) * 100}%`,
              transform: "translateX(-50%)",
            }}
          >
            <div
              className={`mb-2 whitespace-nowrap text-[10px] sm:text-xs text-gray-400 ${
                index % 2 === 0 ? "-translate-y-2" : "translate-y-2"
              }`}
            >
              {isMobile && point.label.length > 10 ? point.label.substring(0, 10) + "..." : point.label}
              {point.label === "Lock End" && (
                <div className="mt-1 text-[8px] sm:text-[10px]">
                  <motion.span
                    className="font-medium"
                    style={{
                      color: color,
                    }}
                    animate={{
                      textShadow: [`0 0 4px ${color}50`, `0 0 8px ${color}80`, `0 0 4px ${color}50`],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    Month {point.month}
                  </motion.span>
                </div>
              )}
              {isDynamic && point.label.includes("CEX") && (
                <div className="mt-1 text-[8px] sm:text-[10px] text-gray-500">Based on listing</div>
              )}
            </div>
            <div
              className={`z-10 h-2 w-2 sm:h-3 sm:w-3 rounded-full ${
                point.cumulative === "Dynamic" ? "animate-pulse" : ""
              }`}
              style={{ backgroundColor: color }}
            />
            <div
              className={`mt-6 whitespace-nowrap text-[10px] sm:text-xs font-medium ${
                index % 2 === 0 ? "translate-y-2" : "-translate-y-2"
              }`}
            >
              {typeof point.cumulative === "number"
                ? `${point.cumulative}%`
                : point.cumulative === "Dynamic"
                  ? "Based on CEX"
                  : point.cumulative}
            </div>
          </div>
        ))}

        {/* Progress indicator */}
        {!isDynamic && (
          <div
            className="absolute left-0 top-12 h-1"
            style={{
              width: `${typeof timeline[0].cumulative === "number" ? timeline[0].cumulative : 0}%`,
              backgroundColor: color,
            }}
          />
        )}

        {/* Dynamic release indicator */}
        {isDynamic && (
          <motion.div
            className="absolute left-0 top-12 h-1"
            style={{
              width: timeline[0].cumulative === 0 ? "0%" : "2%",
              backgroundColor: color,
            }}
          >
            <motion.div
              className="absolute right-0 h-full w-full"
              style={{
                background: `linear-gradient(to right, ${color}, transparent)`,
                opacity: 0.3,
              }}
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        )}

        {/* Dynamic timeline note */}
        {isDynamic && (
          <div className="absolute -bottom-6 left-0 right-0 text-center text-[10px] sm:text-xs text-gray-400">
            Release schedule is dynamic and based on{" "}
            {timeline[0].label.includes("CEX") ? "CEX listing requirements" : "market needs"}
          </div>
        )}
      </div>
    </div>
  )
}

