"use client"

import { useState, useEffect, useRef } from "react"

const experiences = [
  {
    title: "Principal | Co-Founder",
    company: "Arterial",
    period: "Oct 2024 - Present",
    highlights: [
      "Built AI-powered dash camera platform for municipal road hazard detection",
      "Secured paid pilots with Boulder & Lakewood; upcoming deployments are paid engagements",
      "30+ cities in active pipeline with strong product-market fit indicators",
      "Developed automated system for lead generation leading to 32% success rate for email outreach to demo conversion",
      "Expanded team to 15 employees; won TechStars Startup Weekend AI & Health Sciences",
      "Entering first seed round to scale operations and expand municipal partnerships",
      "Led fundraising, B2G sales, partnerships, operations, and product development",
    ],
  },
  {
    title: "Principal | Co-Founder",
    company: "Grafted (Sold)",
    period: "2022 - 2024",
    highlights: [
      "Built and scaled sustainable clothing company from concept to acquisition",
      "Developed go-to-market strategy and brand positioning",
      "Successfully sold company, demonstrating product-market fit and business viability",
      "Gained experience in full business lifecycle, supply chain management, and customer acquisition",
    ],
  },
  {
    title: "Principal",
    company: "Grafted",
    period: "Oct 2024 - Present",
    highlights: [
      "Strategic advisor for growth-stage ventures",
      "Focus on business development and market expansion",
      "Support partnerships and ecosystem growth initiatives",
    ],
  },
  {
    title: "Business Development Consultant",
    company: "Colorado Smart Cities Alliance",
    period: "Oct 2025 - Present",
    highlights: [
      "Diversify company revenue streams and improve product offerings",
      "Define value propositions for both cities and technology partners",
      "Facilitate strategic partnerships and ecosystem growth",
    ],
  },
  {
    title: "Student Intern",
    company: "Digital Legacy Clinic",
    period: "Jan 2025 - Present",
    highlights: [
      "Led customer discovery, lead generation, and product validation",
      "Facilitated first strategic partnership to scale services",
      "Developed repeatable processes for client acquisition and partnership management",
    ],
  },
  {
    title: "Consultant",
    company: "14FourTech",
    period: "Aug 2023 - Oct 2025",
    highlights: ["Headed Business Development and Client Relations", "Managed client partnerships and pipeline growth"],
  },
]

export default function Experience() {
  const [expandedIndex, setExpandedIndex] = useState(0)
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">Experience</h2>

        <div ref={ref} className="space-y-4">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`transition-all duration-500 transform ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
                className={`w-full text-left p-6 rounded-lg border transition-all duration-300 ${
                  expandedIndex === index
                    ? "border-cyan-500/50 bg-card/80 shadow-lg shadow-cyan-500/10"
                    : "border-border/30 bg-card/50 hover:bg-card/80"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">{exp.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{exp.company}</p>
                    <p className="text-xs text-muted-foreground/60 mt-2">{exp.period}</p>
                  </div>
                  <div className="text-cyan-500 text-xl">{expandedIndex === index ? "−" : "+"}</div>
                </div>

                {expandedIndex === index && (
                  <div className="mt-6 pt-6 border-t border-border/30 space-y-3 animate-in fade-in slide-in-from-top-2">
                    {exp.highlights.map((highlight, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 mt-2 flex-shrink-0" />
                        <p className="text-sm text-foreground/80">{highlight}</p>
                      </div>
                    ))}
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
