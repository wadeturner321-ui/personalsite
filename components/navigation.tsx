"use client"

interface NavigationProps {
  scrollProgress: number
}

export default function Navigation({ scrollProgress }: NavigationProps) {
  const navItems = ["About", "Experience", "Work", "Timeline", "Contact"]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/20 bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold tracking-tighter">Wade Turner</div>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
      {/* Progress bar */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-red-400 via-red-500 to-red-400 transition-all duration-300"
        style={{ width: `${scrollProgress * 100}%` }}
      />
    </nav>
  )
}
