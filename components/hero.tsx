"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export default function Hero() {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY * 0.5)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(0, 255, 255, 0.1) 0%, transparent 50%)",
          transform: `translateY(${offset * 0.3}px)`,
        }}
      />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)",
          transform: `translateY(${offset * -0.2}px)`,
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Headshot with frame */}
          <div className="relative flex justify-center">
            <div className="relative w-64 h-80 rounded-2xl overflow-hidden border-2 border-border/30 shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-transparent to-violet-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20" />
              <Image src="/images/img-9487.jpeg" alt="Wade Turner" fill className="object-cover" priority />
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/80 to-transparent z-10" />
            </div>
            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
            <div
              className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-violet-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 border border-accent/30">
              <span className="text-sm font-medium text-accent">Business Development</span>
            </div>

            <div>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-4">Wade Turner</h1>
              <p className="text-xl text-muted-foreground">
                Principal at Arterial • Student Founder • Strategic Partnerships
              </p>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed">
              Building scalable businesses through strategic partnerships, smart operations, and relationship-driven
              growth. Currently leading Arterial, solving urban infrastructure challenges with AI.
            </p>

            <div className="flex gap-4 pt-6">
              <a
                href="https://www.arterial.us/book/wade"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Reach out to chat
              </a>
              <a
                href="mailto:Wade@arterial.us"
                className="px-8 py-3 border border-border/50 hover:bg-accent/10 font-medium rounded-lg transition-colors duration-300"
              >
                Email
              </a>
            </div>

            <div className="flex gap-6 pt-8">
              <a
                href="https://www.linkedin.com/in/wadeturner1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
              >
                LinkedIn
              </a>
              <a
                href="https://www.arterial.us/book/wade"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm"
              >
                Calendar
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-foreground to-transparent animate-pulse" />
      </div>
    </section>
  )
}
