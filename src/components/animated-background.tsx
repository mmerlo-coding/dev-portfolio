"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"

// Particles Background
export function ParticlesBackground({ className = "", particleColor = "hsl(var(--primary)/30)", count = 40 }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            backgroundColor: particleColor,
            width: Math.random() * 4 + 1 + "px",
            height: Math.random() * 4 + 1 + "px",
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: Math.random() * 0.3 + 0.1,
          }}
          animate={{
            x: [
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
            ],
            y: [
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
              `${Math.random() * 100}%`,
            ],
          }}
          transition={{
            duration: Math.random() * 20 + 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

// Gradient Orbs Background
export function GradientOrbsBackground({ className = "" }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/10 blur-[100px]"
        animate={{
          x: ["0%", "50%", "10%", "70%", "0%"],
          y: ["0%", "30%", "60%", "40%", "0%"],
        }}
        transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        style={{ top: "-250px", left: "-250px" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-secondary/20 blur-[100px]"
        animate={{
          x: ["100%", "50%", "80%", "30%", "100%"],
          y: ["100%", "70%", "40%", "60%", "100%"],
        }}
        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        style={{ bottom: "-200px", right: "-200px" }}
      />
    </div>
  )
}

// Grid Lines Background
export function GridLinesBackground({ className = "" }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.15]"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  )
}

// Wave Background
export function WaveBackground({ className = "", color = "currentColor" }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-[20vh]"
          initial={{ backgroundPosition: "0% 0%" }}
          animate={{ backgroundPosition: "100% 0%" }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 20, ease: "linear" }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' opacity='.25' fill='%23${color.replace(
              "#",
              "",
            )}'%3E%3C/path%3E%3Cpath d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z' opacity='.5' fill='%23${color.replace(
              "#",
              "",
            )}'%3E%3C/path%3E%3Cpath d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z' fill='%23${color.replace(
              "#",
              "",
            )}'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundSize: "1200px 100%",
          }}
        />
      </div>
    </div>
  )
}

// Animated Dots Background
export function AnimatedDotsBackground({ className = "" }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      if (!canvas) return
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create dots
    const dots: {
      x: number
      y: number
      radius: number
      vx: number
      vy: number
      color: string
    }[] = []

    const colors = ["rgba(var(--primary), 0.3)", "rgba(var(--secondary), 0.3)", "rgba(var(--muted), 0.3)"]

    for (let i = 0; i < 50; i++) {
      const x = Math.random() * canvas.offsetWidth
      const y = Math.random() * canvas.offsetHeight
      const radius = Math.random() * 2 + 1
      const vx = (Math.random() - 0.5) * 0.5
      const vy = (Math.random() - 0.5) * 0.5
      const color = colors[Math.floor(Math.random() * colors.length)]

      dots.push({ x, y, radius, vx, vy, color })
    }

    // Animation loop
    const animate = () => {
      if (!canvas || !ctx) return
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight)

      // Update and draw dots
      dots.forEach((dot) => {
        dot.x += dot.vx
        dot.y += dot.vy

        // Bounce off edges
        if (dot.x < 0 || dot.x > canvas.offsetWidth) dot.vx *= -1
        if (dot.y < 0 || dot.y > canvas.offsetHeight) dot.vy *= -1

        // Draw dot
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2)
        ctx.fillStyle = dot.color
        ctx.fill()
      })

      // Draw connections
      ctx.strokeStyle = "rgba(var(--muted-foreground), 0.1)"
      ctx.lineWidth = 0.5

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x
          const dy = dots[i].y - dots[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(dots[i].x, dots[i].y)
            ctx.lineTo(dots[j].x, dots[j].y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <canvas ref={canvasRef} className="w-full h-full opacity-50" />
    </div>
  )
}
