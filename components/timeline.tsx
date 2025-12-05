"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Rocket, Bot, TrendingUp, Target } from "lucide-react"

const timelineEvents = [
  {
    year: "2022",
    title: "Move to Colorado",
    description: "Moved from North Carolina to Boulder to study Data Science at CU Boulder.",
    icon: MapPin,
  },
  {
    year: "2023",
    title: "Entrepreneurial Start",
    description: "Started helping at 14Four consultancy and founded clothing brand Grafted.",
    icon: Rocket,
  },
  {
    year: "2024",
    title: "Arterial Launch",
    description: "Sold Grafted and co-founded Arterial, focusing on municipal infrastructure tech.",
    icon: Bot,
  },
  {
    year: "2025",
    title: "Scaling & Consulting",
    description:
      "Expanded roles: Head of BD at Digital Legacy Clinic + Business Development Consultant at Colorado Smart Cities Alliance.",
    icon: TrendingUp,
  },
  {
    year: "2026",
    title: "Market Expansion",
    description: "Arterial deployments scheduled. 30+ cities in pipeline, strategic partnerships, and patents pending.",
    icon: Target,
  },
]

export default function Timeline() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = itemRefs.current.map((el, index) => {
      if (!el) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        },
        { threshold: 0.3 },
      )

      observer.observe(el)
      return observer
    })

    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <section id="timeline" className="py-24 px-6 bg-background/50 border-b border-border/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">Timeline</h2>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-red-400/50 via-red-500/50 to-red-400/50" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                ref={(el) => {
                  itemRefs.current[index] = el
                }}
                className={`group relative transition-all duration-700 transform ${
                  visibleItems.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                {/* Alternating layout */}
                <div className={`flex gap-8 ${index % 2 === 0 ? "" : "flex-row-reverse"}`}>
                  {/* Content */}
                  <div className="flex-1">
                    <div className="p-6 rounded-lg border border-border/60 bg-card/50 group-hover:bg-card/80 transition-all duration-300 group-hover:border-red-400/50 group-hover:shadow-lg group-hover:shadow-red-400/10">
                      <div className="flex items-start justify-between mb-3">
                        <span className="text-sm font-bold text-red-400 tracking-widest">{event.year}</span>
                        <event.icon className="size-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">{event.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="flex justify-center">
                    <div
                      className={`relative w-4 h-4 mt-8 rounded-full bg-gradient-to-r from-red-400 to-red-500 border-4 border-background shadow-lg shadow-red-400/50 transition-all duration-500 ${
                        visibleItems.includes(index) ? "scale-100 shadow-red-400/75" : "scale-0"
                      }`}
                    >
                      <div
                        className={`absolute inset-0 rounded-full bg-red-400/50 animate-pulse ${
                          visibleItems.includes(index) ? "" : "hidden"
                        }`}
                      />
                    </div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
