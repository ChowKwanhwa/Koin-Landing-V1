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

  return (
    <div className="mt-4 sm:mt-8">
      <h4 className="mb-3 sm:mb-4 text-base sm:text-lg font-semibold">Vesting Timeline</h4>
      <div className="relative h-32 sm:h-28 mb-6 sm:mb-0">
        {/* Timeline base */}
        <div className="absolute left-0 top-12 h-1 w-[95%] bg-gray-700" />

        {/* Timeline points */}
        {timeline.map((point, index) => (
          <div
            key={index}
            className="absolute flex flex-col items-center"
            style={{
              left: `${(point.month / maxMonth) * 95}%`,
              transform: "translateX(-50%)",
            }}
          >
            <div
              className={`mb-2 whitespace-nowrap text-[10px] sm:text-xs text-gray-400 flex flex-col items-center justify-end h-6`}
            >
              {point.label.includes("CEX Listing") ? (
                <div className="flex flex-col items-center gap-0.5">
                  <div>CEX {point.month}</div>
                  <div className="text-[8px] text-gray-500">Based on listing</div>
                </div>
              ) : point.label === "TGE" ? (
                "TGE"
              ) : point.label === "Lock End" ? (
                <div className="relative -translate-y-2">
                  <div>Lock End</div>
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 text-[8px] sm:text-[10px] font-medium mt-0.5"
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
                  </motion.div>
                </div>
              ) : (
                point.label
              )}
            </div>
            <div
              className={`z-10 h-2 w-2 sm:h-3 sm:w-3 rounded-full`}
              style={{ backgroundColor: color }}
            />
            <div
              className={`mt-6 whitespace-nowrap text-[10px] sm:text-xs font-medium`}
            >
              {typeof point.cumulative === "number"
                ? `${point.cumulative}%`
                : point.cumulative}
            </div>
          </div>
        ))}

        {/* Progress indicator */}
        <div
          className="absolute left-0 top-12 h-1"
          style={{
            width: `${typeof timeline[0].cumulative === "number" ? (timeline[0].cumulative * 0.95) : 0}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  )
}
