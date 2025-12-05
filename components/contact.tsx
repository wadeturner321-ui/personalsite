"use client"

import { useRef, useState, useEffect } from "react"

export default function Contact() {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

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
    <section id="contact" className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div
          ref={ref}
          className={`transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's work together</h2>

          <p className="text-lg text-foreground/80 mb-12 leading-relaxed">
            Interested in partnerships, collaboration, or just want to chat about business development, startups, or
            cars? I'd love to connect.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://www.arterial.us/book/wade"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-red-500/30"
            >
              Book a call
            </a>
            <a
              href="mailto:Wade@arterial.us"
              className="px-8 py-4 border border-border/50 hover:bg-accent/10 font-semibold rounded-lg transition-colors duration-300"
            >
              Send an email
            </a>
          </div>

          <div className="flex gap-6 justify-center text-sm">
            <a
              href="https://www.linkedin.com/in/wadeturner1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              LinkedIn
            </a>
            <span className="text-border">/</span>
            <a
              href="https://www.arterial.us/book/wade"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Calendar
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-border/20 text-center text-sm text-muted-foreground">
        <p>© 2025 Wade Turner. Crafted with intention.</p>
      </div>
    </section>
  )
}
