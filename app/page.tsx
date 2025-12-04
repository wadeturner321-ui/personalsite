"use client"

import { useState, useEffect } from "react"
import Hero from "@/components/hero"
import Summary from "@/components/summary"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Timeline from "@/components/timeline"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = window.scrollY / totalHeight
      setScrollProgress(scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="bg-background text-foreground">
      <Navigation scrollProgress={scrollProgress} />
      <Hero />
      <Summary />
      <Experience />
      <Projects />
      <Timeline />
      <Contact />
    </main>
  )
}
