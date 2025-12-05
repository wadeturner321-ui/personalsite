"use client"

import { useState, useEffect, useRef } from "react"

export default function Summary() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-24 px-6 bg-background/50 border-b border-border/20">
      <div className="max-w-4xl mx-auto">
        <div
          ref={ref}
          className={`transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                My name is Wade Turner, and I'm a fourth-year student at CU Boulder studying Data Science. My journey in entrepreneurship and business development spans building multiple start-ups, from a clothing brand to system integration contracting.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                My current focus is Arterial. We use AI-powered dash cameras to automate the inventory and prioritization of roadway hazards like potholes, helping teams fix up to 15% more potholes with the same budget.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-lg border border-border/60 bg-card/50 hover:bg-card/80 hover:border-red-400/30 hover:shadow-lg hover:shadow-red-400/10 transition-all duration-300">
                <h3 className="font-semibold text-red-400 mb-2">What I do</h3>
                <p className="text-foreground/70 text-sm">
                  B2G sales, strategic partnerships, revenue cycle management, and scaling operations from zero to
                  market.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border/60 bg-card/50 hover:bg-card/80 hover:border-red-400/30 hover:shadow-lg hover:shadow-red-400/10 transition-all duration-300">
                <h3 className="font-semibold text-red-400 mb-2">What I love</h3>
                <p className="text-foreground/70 text-sm">
                  Cars
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border/60 bg-card/50 hover:bg-card/80 hover:border-red-400/30 hover:shadow-lg hover:shadow-red-400/10 transition-all duration-300">
                <h3 className="font-semibold text-red-400 mb-2">Current focus</h3>
                <p className="text-foreground/70 text-sm">
                  Scaling Arterial, consulting on smart city initiatives, and advising on organizational growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
