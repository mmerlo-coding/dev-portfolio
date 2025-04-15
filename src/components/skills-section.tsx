"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  // Define skill categories with their respective skills
  const skillCategories = [
    {
      id: "frontend",
      name: "Front-end",
      description: "Building beautiful, responsive user interfaces with modern frameworks and libraries.",
      skills: [
        {
          name: "React",
          level: "Advanced",
          years: 4,
          logo: "/placeholder.svg?height=80&width=80",
          description: "Component-based UI development with React hooks and context API.",
        },
        {
          name: "Next.js",
          level: "Advanced",
          years: 3,
          logo: "/placeholder.svg?height=80&width=80",
          description: "Server-side rendering, static site generation, and API routes.",
        },
        {
          name: "ShadCN",
          level: "Intermediate",
          years: 2,
          logo: "/placeholder.svg?height=80&width=80",
          description: "Beautifully designed components built with Radix UI and Tailwind CSS.",
        },
        {
          name: "Framer Motion",
          level: "Intermediate",
          years: 2,
          logo: "/placeholder.svg?height=80&width=80",
          description: "Production-ready animations for React applications.",
        },
      ],
    },
    {
      id: "backend",
      name: "Back-end",
      description: "Creating robust server-side applications and APIs with modern technologies.",
      skills: [
        {
          name: "Node.js",
          level: "Advanced",
          years: 4,
          logo: "/placeholder.svg?height=80&width=80",
          description: "Server-side JavaScript runtime for building scalable network applications.",
        },
        {
          name: "Supabase",
          level: "Advanced",
          years: 2,
          logo: "/placeholder.svg?height=80&width=80",
          description: "Open source Firebase alternative with authentication, database, and storage.",
        },
        {
          name: "PostgreSQL",
          level: "Intermediate",
          years: 3,
          logo: "/placeholder.svg?height=80&width=80",
          description: "Powerful, open source object-relational database system.",
        },
        {
          name: "Stripe",
          level: "Intermediate",
          years: 2,
          logo: "/placeholder.svg?height=80&width=80",
          description: "Payment processing platform for online businesses.",
        },
      ],
    },
    {
      id: "ai",
      name: "AI Development",
      description: "Integrating artificial intelligence capabilities into web applications.",
      skills: [
        {
          name: "OpenAI",
          level: "Intermediate",
          years: 1,
          logo: "/placeholder.svg?height=80&width=80",
          description: "Integrating GPT models for natural language processing and generation.",
        },
        {
          name: "AI SDK",
          level: "Intermediate",
          years: 1,
          logo: "/placeholder.svg?height=80&width=80",
          description: "Building AI-powered applications with the Vercel AI SDK.",
        },
        {
          name: "LangChain",
          level: "Beginner",
          years: 1,
          logo: "/placeholder.svg?height=80&width=80",
          description: "Framework for developing applications powered by language models.",
        },
      ],
    },
    {
      id: "other",
      name: "Other Skills",
      description: "Additional expertise in design, CMS, and development tools.",
      skills: [
        {
          name: "Sanity CMS",
          level: "Intermediate",
          years: 2,
          logo: "/placeholder.svg?height=80&width=80",
          description: "Headless CMS for structured content with real-time collaboration.",
        },
        {
          name: "GOHIGHLEVEL",
          level: "Intermediate",
          years: 1,
          logo: "/placeholder.svg?height=80&width=80",
          description: "All-in-one marketing platform for agencies and businesses.",
        },
        {
          name: "Figma to HTML",
          level: "Advanced",
          years: 3,
          logo: "/placeholder.svg?height=80&width=80",
          description: "Converting Figma designs into responsive HTML/CSS layouts.",
        },
        {
          name: "PSD to HTML",
          level: "Advanced",
          years: 4,
          logo: "/placeholder.svg?height=80&width=80",
          description: "Transforming Photoshop designs into responsive web pages.",
        },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center text-center mb-12 md:mb-16"
        >
          <div className="space-y-4 max-w-[800px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-3 py-1 rounded-full border text-sm font-medium mb-2"
            >
              <span>My Expertise</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Technical Skills</h2>
            <p className="text-muted-foreground text-lg">
              A comprehensive overview of my technical expertise and proficiencies
            </p>
          </div>
        </motion.div>

        <div ref={ref} className="space-y-16">
          {/* Skill Categories */}
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="relative"
            >
              {/* Category Header */}
              <div className="mb-6 relative">
                <div className="absolute left-0 top-1/2 w-full h-px bg-border -z-10" />
                <h3 className="text-2xl font-bold inline-block bg-background pr-4">{category.name}</h3>
              </div>

              <p className="text-muted-foreground mb-8 max-w-3xl">{category.description}</p>

              {/* Skills Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="group relative bg-background border rounded-lg p-6 hover:border-primary/50 transition-colors"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-12 h-12 flex-shrink-0 bg-muted/50 rounded-md overflow-hidden">
                        <Image
                          src={skill.logo || "/placeholder.svg"}
                          alt={skill.name}
                          fill
                          className="object-contain p-2 group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold">{skill.name}</h4>
                        <div className="flex items-center gap-2">
                          <Badge
                            variant="outline"
                            className={`text-xs font-normal ${
                              skill.level === "Advanced"
                                ? "border-gray-800 text-gray-800 dark:border-gray-200 dark:text-gray-200"
                                : skill.level === "Intermediate"
                                  ? "border-gray-600 text-gray-600 dark:border-gray-400 dark:text-gray-400"
                                  : "border-gray-500 text-gray-500 dark:border-gray-500 dark:text-gray-500"
                            }`}
                          >
                            {skill.level}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {skill.years} {skill.years === 1 ? "year" : "years"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Additional Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 text-center"
          >
            <h3 className="text-xl font-bold mb-6">Additional Skills & Tools</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                "TypeScript",
                "Tailwind CSS",
                "Git",
                "GitHub",
                "Vercel",
                "Netlify",
                "Jest",
                "Cypress",
                "Webpack",
                "Vite",
                "GraphQL",
                "REST API",
                "Docker",
                "AWS",
                "Firebase",
                "MongoDB",
              ].map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: 0.6 + i * 0.03 }}
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <Badge variant="secondary" className="px-3 py-1 text-sm">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
