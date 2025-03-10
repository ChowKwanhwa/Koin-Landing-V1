"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { PieChart, Cell, Pie, ResponsiveContainer, Sector } from "recharts"
import { Button } from "@/components/ui/button"
import { Lock, Clock, Calendar, DollarSign, BarChart3, Percent } from "lucide-react"
import VestingTimeline from "./vesting-timeline"

const metrics = [
  { number: "27B", label: "Total Supply" },
  { number: "4+", label: "African Nation Partners" },
  { number: "2025", label: "Launch Year" },
]

const allocation = [
  { name: "Team and Reserve Fund", value: 30, color: "#60A5FA" }, // Blue
  { name: "African Development EEMS", value: 20, color: "#4ADE80" }, // Green
  { name: "Marketing and Promotion", value: 20, color: "#C084FC" }, // Purple
  { name: "Ecosystem Development", value: 10, color: "#FB7185" }, // Red
  { name: "Seed Round", value: 2, color: "#38BDF8" }, // Light Blue
  { name: "Series A", value: 3, color: "#FB923C" }, // Orange
  { name: "Liquidity", value: 5, color: "#FACC15" }, // Yellow
  { name: "Launchpool", value: 5, color: "#22D3EE" }, // Cyan
  { name: "Business Partnerships", value: 5, color: "#818CF8" }, // Indigo
]

// Active shape component for hover effect
const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props

  // 计算文本的最大宽度
  const maxWidth = innerRadius * 1.8

  // 如果文本太长，分成两行显示
  const name = payload.name
  const words = name.split(' ')
  const firstLine = words.length > 2 ? words.slice(0, 2).join(' ') : name
  const secondLine = words.length > 2 ? words.slice(2).join(' ') : ''

  return (
    <g>
      {secondLine ? (
        <>
          <text x={cx} y={cy - 25} dy={8} textAnchor="middle" fill="#fff" fontSize={16} fontWeight="bold">
            {firstLine}
          </text>
          <text x={cx} y={cy - 5} dy={8} textAnchor="middle" fill="#fff" fontSize={16} fontWeight="bold">
            {secondLine}
          </text>
          <text x={cx} y={cy + 20} dy={8} textAnchor="middle" fill="#fff" fontSize={20} fontWeight="bold">
            {`${value}%`}
          </text>
        </>
      ) : (
        <>
          <text x={cx} y={cy - 20} dy={8} textAnchor="middle" fill="#fff" fontSize={16} fontWeight="bold">
            {name}
          </text>
          <text x={cx} y={cy + 20} dy={8} textAnchor="middle" fill="#fff" fontSize={20} fontWeight="bold">
            {`${value}%`}
          </text>
        </>
      )}
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 10}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        opacity={0.8}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={innerRadius - 5}
        outerRadius={innerRadius - 2}
        fill={fill}
      />
    </g>
  )
}

// Vesting schedule data
const vestingData = [
  {
    id: "team",
    name: "Team & Reserve",
    percentage: "30%",
    tokenAmount: "8.1B KOIN",
    tgeRelease: "0%",
    initialReleaseAmount: "0 KOIN",
    lockPeriod: "12 months",
    vestingDuration: "24 months",
    monthlyRelease: "4.17%",
    initialCirculation: "0 KOIN",
    valueAtTge: "$0",
    color: "#60A5FA",
    timeline: [
      { month: 0, label: "TGE", release: 0, cumulative: 0 },
      { month: 12, label: "Lock End", release: 0, cumulative: 0 },
      { month: 24, label: "Month 24", release: 4.17, cumulative: 50 },
      { month: 36, label: "Month 36", release: 4.17, cumulative: 100 },
    ],
  },
  {
    id: "african",
    name: "African EEMS",
    percentage: "20%",
    tokenAmount: "5.4B KOIN",
    tgeRelease: "0%",
    initialReleaseAmount: "0 KOIN",
    lockPeriod: "6 months",
    vestingDuration: "18 months",
    monthlyRelease: "5.56%",
    initialCirculation: "0 KOIN",
    valueAtTge: "$0",
    color: "#4ADE80",
    timeline: [
      { month: 0, label: "TGE", release: 0, cumulative: 0 },
      { month: 6, label: "Lock End", release: 0, cumulative: 0 },
      { month: 12, label: "Month 12", release: 5.56, cumulative: 33.36 },
      { month: 18, label: "Month 18", release: 5.56, cumulative: 66.72 },
      { month: 24, label: "Month 24", release: 5.56, cumulative: 100 },
    ],
  },
  {
    id: "ecosystem",
    name: "Ecosystem Development",
    percentage: "10%",
    tokenAmount: "2.7B KOIN",
    tgeRelease: "0%",
    initialReleaseAmount: "0 KOIN",
    lockPeriod: "3 months",
    vestingDuration: "12 months",
    monthlyRelease: "8.33%",
    initialCirculation: "0 KOIN",
    valueAtTge: "$0",
    color: "#FB7185",
    timeline: [
      { month: 0, label: "TGE", release: 0, cumulative: 0 },
      { month: 3, label: "Lock End", release: 0, cumulative: 0 },
      { month: 7, label: "Month 7", release: 8.33, cumulative: 33.32 },
      { month: 11, label: "Month 11", release: 8.33, cumulative: 66.64 },
      { month: 15, label: "Month 15", release: 8.33, cumulative: 100 },
    ],
  },
  {
    id: "marketing",
    name: "Marketing and Promotion",
    percentage: "20%",
    tokenAmount: "5.4B KOIN",
    tgeRelease: "5%",
    initialReleaseAmount: "270M KOIN",
    lockPeriod: "0 months",
    vestingDuration: "24 months",
    monthlyRelease: "3.96%",
    initialCirculation: "270M KOIN",
    valueAtTge: "$135M",
    color: "#C084FC",
    timeline: [
      { month: 0, label: "TGE", release: 5, cumulative: 5 },
      { month: 6, label: "Month 6", release: 3.96, cumulative: 28.76 },
      { month: 12, label: "Month 12", release: 3.96, cumulative: 52.52 },
      { month: 18, label: "Month 18", release: 3.96, cumulative: 76.28 },
      { month: 24, label: "Month 24", release: 3.96, cumulative: 100 },
    ],
  },
  {
    id: "seed",
    name: "Seed Round",
    percentage: "2%",
    tokenAmount: "540M KOIN",
    tgeRelease: "10%",
    initialReleaseAmount: "54M KOIN",
    lockPeriod: "0 months",
    vestingDuration: "24 months",
    monthlyRelease: "3.75%",
    initialCirculation: "54M KOIN",
    valueAtTge: "$27M",
    color: "#38BDF8",
    timeline: [
      { month: 0, label: "TGE", release: 10, cumulative: 10 },
      { month: 6, label: "Month 6", release: 3.75, cumulative: 32.5 },
      { month: 12, label: "Month 12", release: 3.75, cumulative: 55 },
      { month: 18, label: "Month 18", release: 3.75, cumulative: 77.5 },
      { month: 24, label: "Month 24", release: 3.75, cumulative: 100 },
    ],
  },
  {
    id: "series-a",
    name: "Series A",
    percentage: "3%",
    tokenAmount: "810M KOIN",
    tgeRelease: "15%",
    initialReleaseAmount: "121.5M KOIN",
    lockPeriod: "0 months",
    vestingDuration: "18 months",
    monthlyRelease: "4.72%",
    initialCirculation: "121.5M KOIN",
    valueAtTge: "$60.75M",
    color: "#FB923C",
    timeline: [
      { month: 0, label: "TGE", release: 15, cumulative: 15 },
      { month: 4, label: "Month 4", release: 4.72, cumulative: 33.88 },
      { month: 9, label: "Month 9", release: 4.72, cumulative: 57.48 },
      { month: 14, label: "Month 14", release: 4.72, cumulative: 81.08 },
      { month: 18, label: "Month 18", release: 4.72, cumulative: 100 },
    ],
  },
  {
    id: "liquidity",
    name: "Liquidity",
    percentage: "5%",
    tokenAmount: "1.35B KOIN",
    tgeRelease: "2%",
    initialReleaseAmount: "27M KOIN",
    lockPeriod: "0 months",
    vestingDuration: "Dynamic",
    monthlyRelease: "Based on market needs",
    initialCirculation: "27M KOIN + $2.7M USDT",
    valueAtTge: "$13.5M",
    color: "#FACC15",
    timeline: [
      { month: 0, label: "TGE", release: 2, cumulative: 2 },
      { month: 6, label: "Dynamic Release", release: "Market-based", cumulative: "Dynamic" },
      { month: 12, label: "Dynamic Release", release: "Market-based", cumulative: "Dynamic" },
      { month: 18, label: "Dynamic Release", release: "Market-based", cumulative: "Dynamic" },
      { month: 24, label: "Dynamic Release", release: "Market-based", cumulative: "Dynamic" },
    ],
  },
  {
    id: "launchpool",
    name: "Launchpool",
    percentage: "5%",
    tokenAmount: "1.35B KOIN",
    tgeRelease: "0%",
    initialReleaseAmount: "0 KOIN",
    lockPeriod: "Based on CEX",
    vestingDuration: "Based on CEX listings",
    monthlyRelease: "Dynamic per CEX",
    initialCirculation: "0 KOIN",
    valueAtTge: "$0",
    color: "#22D3EE",
    timeline: [
      { month: 0, label: "TGE", release: 0, cumulative: 0 },
      { month: 3, label: "CEX Listing 1", release: "Dynamic", cumulative: "Dynamic" },
      { month: 6, label: "CEX Listing 2", release: "Dynamic", cumulative: "Dynamic" },
      { month: 12, label: "CEX Listing 3", release: "Dynamic", cumulative: "Dynamic" },
      { month: 18, label: "CEX Listing 4", release: "Dynamic", cumulative: "Dynamic" },
    ],
  },
  {
    id: "partnerships",
    name: "Business Partnerships",
    percentage: "5%",
    tokenAmount: "1.35B KOIN",
    tgeRelease: "10%",
    initialReleaseAmount: "135M KOIN",
    lockPeriod: "0 months",
    vestingDuration: "18 months",
    monthlyRelease: "5%",
    initialCirculation: "135M KOIN",
    valueAtTge: "$67.5M",
    color: "#818CF8",
    timeline: [
      { month: 0, label: "TGE", release: 10, cumulative: 10 },
      { month: 4, label: "Month 4", release: 5, cumulative: 30 },
      { month: 9, label: "Month 9", release: 5, cumulative: 55 },
      { month: 14, label: "Month 14", release: 5, cumulative: 80 },
      { month: 18, label: "Month 18", release: 5, cumulative: 100 },
    ],
  },
]

export default function TokenMetrics() {
  // 使用 useEffect 来设置初始状态，避免 SSR 不匹配
  const [activeIndex, setActiveIndex] = useState<number | undefined>(undefined)
  const [selectedVesting, setSelectedVesting] = useState("ecosystem")

  useEffect(() => {
    // 在客户端设置默认值
    setActiveIndex(3) // Ecosystem Development index
  }, [])

  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index)
  }

  const onPieLeave = () => {
    setActiveIndex(3) // Reset to Ecosystem Development when mouse leaves
  }

  const selectedVestingData = vestingData.find((item) => item.id === selectedVesting) || vestingData[0]

  return (
    <section className="relative py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl sm:text-4xl font-bold">Token Overview</h2>
        </motion.div>

        <div className="mb-12 sm:mb-16 grid gap-6 sm:gap-8 md:grid-cols-3">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-blue-400">{metric.number}</div>
              <div className="text-sm sm:text-base text-gray-400">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-6 sm:mb-8 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold">Token Allocation</h2>
        </motion.div>

        <div className="mb-16 sm:mb-24 flex flex-col items-center justify-center lg:flex-row lg:items-start lg:space-x-20">
          {/* Chart Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="w-full h-[500px] flex items-center justify-center rounded-2xl bg-black/40 p-6 backdrop-blur-lg">
              <ResponsiveContainer width="100%" height="100%" className="mx-auto">
                <PieChart>
                  <Pie
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                    data={allocation}
                    cx="50%"
                    cy="50%"
                    innerRadius={100}
                    outerRadius={140}
                    dataKey="value"
                    onMouseEnter={onPieEnter}
                    onMouseLeave={onPieLeave}
                  >
                    {allocation.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Allocation List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="w-full h-[500px] rounded-2xl bg-black/40 p-6 backdrop-blur-lg overflow-auto">
              <div className="space-y-4">
                {allocation.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between rounded-lg p-2 sm:p-3 transition-all duration-200 hover:bg-white/5"
                    whileHover={{ x: 5 }}
                    onMouseEnter={() => setActiveIndex(index)}
                    onMouseLeave={() => setActiveIndex(undefined)}
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="h-3 w-3 sm:h-4 sm:w-4 rounded" style={{ backgroundColor: item.color }} />
                      <span className="text-sm sm:text-base font-medium text-white">{item.name}</span>
                    </div>
                    <span className="text-sm sm:text-base font-bold text-white">{item.value}%</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Initial Token Circulation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-6 sm:mb-8 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold">Initial Token Circulation</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-4 grid gap-4 sm:gap-6 md:grid-cols-3"
        >
          {[
            { value: "583.2M KOIN", label: "Initial Circulating Supply" },
            { value: "$0.5", label: "TGE Price" },
            { value: "$291.6M", label: "Initial Market Cap" },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center rounded-xl bg-black/40 p-4 sm:p-6 backdrop-blur-lg"
            >
              <div className="mb-1 sm:mb-2 text-xl sm:text-2xl font-bold text-blue-400">{item.value}</div>
              <div className="text-xs sm:text-sm text-gray-400">{item.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16 text-center text-base sm:text-lg text-gray-400"
        >
          2.16% of Total Supply
        </motion.div>

        {/* Vesting Schedule */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-4 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold">Vesting Schedule</h2>
          <p className="mt-2 text-sm sm:text-base text-gray-400">
            Select allocation to view detailed vesting information
          </p>
        </motion.div>

        {/* Selection Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-6 sm:mb-8 flex flex-wrap justify-center gap-2 px-1 sm:gap-3 sm:px-0"
        >
          {vestingData.map((item) => (
            <Button
              key={item.id}
              variant={selectedVesting === item.id ? "default" : "outline"}
              size="sm"
              className={`text-xs sm:text-sm transition-all ${selectedVesting === item.id ? "bg-" + item.color : "border-gray-700 hover:border-" + item.color}`}
              style={{
                backgroundColor: selectedVesting === item.id ? item.color : "transparent",
                borderColor: selectedVesting === item.id ? item.color : undefined,
              }}
              onClick={() => setSelectedVesting(item.id)}
            >
              {item.name} ({item.percentage})
            </Button>
          ))}
        </motion.div>

        {/* Dynamic Display Area */}
        <motion.div
          key={selectedVesting}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-xl bg-black/40 p-4 sm:p-6 backdrop-blur-lg"
        >
          <div className="mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
            <div
              className="h-4 w-4 sm:h-5 sm:w-5 rounded-full"
              style={{ backgroundColor: selectedVestingData.color }}
            />
            <h3 className="text-xl sm:text-2xl font-bold">{selectedVestingData.name}</h3>
          </div>

          <div className="mb-6 sm:mb-8 grid gap-4 sm:gap-6 grid-cols-2 md:grid-cols-4">
            <div className="space-y-1">
              <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-400">
                <Percent className="h-3 w-3 sm:h-4 sm:w-4" /> Initial Release
              </div>
              <div className="text-sm sm:text-base font-semibold">
                {selectedVestingData.tgeRelease} ({selectedVestingData.initialReleaseAmount})
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-400">
                <Percent className="h-3 w-3 sm:h-4 sm:w-4" /> Total Allocation
              </div>
              <div className="text-sm sm:text-base font-semibold">
                {selectedVestingData.percentage} ({selectedVestingData.tokenAmount})
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-400">
                <Lock className="h-3 w-3 sm:h-4 sm:w-4" /> Lock Period
              </div>
              <div className="text-sm sm:text-base font-semibold">{selectedVestingData.lockPeriod}</div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-400">
                <Clock className="h-3 w-3 sm:h-4 sm:w-4" /> Vesting Duration
              </div>
              <div className="text-sm sm:text-base font-semibold">{selectedVestingData.vestingDuration}</div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-400">
                <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4" /> Monthly Release
              </div>
              <div className="text-sm sm:text-base font-semibold">{selectedVestingData.monthlyRelease}</div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-400">
                <Calendar className="h-3 w-3 sm:h-4 sm:w-4" /> Initial Circulation
              </div>
              <div className="text-sm sm:text-base font-semibold">{selectedVestingData.initialCirculation}</div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm text-gray-400">
                <DollarSign className="h-3 w-3 sm:h-4 sm:w-4" /> Value at TGE
              </div>
              <div className="text-sm sm:text-base font-semibold">{selectedVestingData.valueAtTge}</div>
            </div>
          </div>

          {/* Visual Timeline - Now using the separate component */}
          <VestingTimeline timeline={selectedVestingData.timeline} color={selectedVestingData.color} />
        </motion.div>
      </div>
    </section>
  )
}
