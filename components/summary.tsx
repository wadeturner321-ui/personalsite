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
                I'm Wade Turner, a fourth-year student at CU Boulder studying Data Science. My journey spans building
                multiple businesses—from a clothing brand to system integration contracting—but my true passion lies in
                business development and strategic growth.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                At Arterial, my co-founder and I built an AI-powered platform that helps cities detect and prioritize
                roadway issues. In our first year, we secured paid pilots with major cities, expanded to 30+
                municipalities in our pipeline, and grew from bootstrap to a $10M valuation.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-lg border border-border/30 bg-card/50 hover:bg-card/80 transition-colors">
                <h3 className="font-semibold text-cyan-500 mb-2">What I do</h3>
                <p className="text-foreground/70 text-sm">
                  B2G sales, strategic partnerships, revenue cycle management, and scaling operations from zero to
                  market.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border/30 bg-card/50 hover:bg-card/80 transition-colors">
                <h3 className="font-semibold text-blue-500 mb-2">What I love</h3>
                <p className="text-foreground/70 text-sm">
                  Cars, design, building systems that work, cats, nature, and the intersection of creativity and
                  strategy.
                </p>
              </div>

              <div className="p-6 rounded-lg border border-border/30 bg-card/50 hover:bg-card/80 transition-colors">
                <h3 className="font-semibold text-violet-500 mb-2">Current focus</h3>
                <p className="text-foreground/70 text-sm">
                  Navigating Arterial toward product-market fit, consulting on smart city initiatives, and advising on
                  organizational growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
