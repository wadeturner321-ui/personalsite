"use client"

import { useState, useEffect, useRef } from "react"

const projects = [
  {
    title: "Arterial",
    subtitle: "AI-Powered Municipal Infrastructure Platform",
    description:
      "Co-founded Arterial to automate road hazard detection for cities. Built AI-powered dash cameras that identify, map, and prioritize roadway issues. Led B2G sales, partnerships, and operations to achieve 30+ cities in pipeline within a year of founding.",
    achievements: ["6 Pending IP", "30+ Cities", "Paid Pilots", "Strategic Partnerships"],
    color: "from-red-400/20 to-red-500/20",
  },
  {
    title: "Grafted",
    subtitle: "Direct-to-Consumer Clothing Brand",
    description:
      "Co-founded and scaled a clothing brand from concept to market. Managed design, production, and direct sales. Sold the business to Dean Withers to focus on Arterial.",
    achievements: ["Product Design", "Operations", "Direct Sales", "Brand Building"],
    color: "from-red-400/20 to-red-500/20",
  },
  {
    title: "Digital Legacy Clinic",
    subtitle: "Strategic Partnership & Growth Initiative",
    description:
      "Led business development efforts for a non-profit clinic. Facilitated the organization's first strategic partnership, enabling scaled service delivery. Created repeatable processes for partnership management.",
    achievements: ["Partnership Facilitation", "Process Design", "Client Scaling", "Operations"],
    color: "from-red-400/20 to-red-500/20",
  },
]

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">Projects</h2>

        <div ref={ref} className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-lg border border-border/60 bg-card/50 hover:bg-card/80 hover:border-red-400/30 hover:shadow-lg hover:shadow-red-400/10 transition-all duration-500 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative p-8">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-red-400 font-medium mb-4">{project.subtitle}</p>
                <p className="text-foreground/80 mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.achievements.map((achievement, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-xs font-medium text-accent"
                    >
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
