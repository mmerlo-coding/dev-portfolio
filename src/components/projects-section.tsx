"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, X, Folder, FolderOpen, ChevronRight, FileCode, Terminal } from "lucide-react"

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      title: "E-Commerce Platform",
      fileName: "e-commerce.tsx",
      description: "A full-featured online store with Stripe integration, user authentication, and product management.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "Supabase", "Stripe", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AI Content Generator",
      fileName: "ai-generator.tsx",
      description:
        "An application that leverages AI to generate marketing content, blog posts, and social media captions.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Node.js", "OpenAI", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Real Estate Dashboard",
      fileName: "real-estate.tsx",
      description: "A comprehensive dashboard for real estate agents to manage listings, clients, and analytics.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "Sanity CMS", "ShadCN", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Health & Fitness App",
      fileName: "fitness-app.tsx",
      description: "A mobile-responsive application for tracking workouts, nutrition, and health metrics.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "Supabase", "Chart.js", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  // Simulated folder structure for the file explorer
  const folders = [
    {
      name: "projects",
      isOpen: true,
      files: projects.map((p) => p.fileName),
    },
    {
      name: "components",
      isOpen: false,
      files: ["header.tsx", "footer.tsx", "button.tsx"],
    },
    {
      name: "lib",
      isOpen: false,
      files: ["supabase.ts", "sanity.ts", "utils.ts"],
    },
  ]

  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center text-center mb-12 md:mb-20"
        >
          <div className="space-y-4 max-w-[800px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-3 py-1 rounded-full border text-sm font-medium mb-2"
            >
              <span>My Work</span>
            </motion.div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Featured Projects</h2>
            <p className="text-muted-foreground text-lg">
              A selection of my recent work showcasing my skills and expertise
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="border rounded-lg overflow-hidden shadow-xl bg-card"
        >
          {/* Code Editor Header */}
          <div className="bg-muted/80 border-b flex items-center justify-between px-4 py-2">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
            </div>
            <div className="text-sm font-medium text-muted-foreground">Portfolio Projects</div>
            <div className="w-16"></div> {/* Spacer for alignment */}
          </div>

          {/* Project Content */}
          <div className="flex h-[600px] md:h-[700px]">
            {/* File Explorer (Hidden on mobile) */}
            <div className="hidden md:block w-64 border-r bg-muted/30 overflow-y-auto">
              <div className="p-2 text-sm font-medium text-muted-foreground">EXPLORER</div>
              <div className="mt-2">
                {folders.map((folder, folderIndex) => (
                  <div key={folderIndex} className="mb-1">
                    <div
                      className="flex items-center px-2 py-1 hover:bg-muted/50 cursor-pointer"
                      onClick={() => {
                        // Toggle folder open/closed logic would go here
                      }}
                    >
                      <ChevronRight
                        size={16}
                        className={`mr-1 transition-transform ${folder.isOpen ? "rotate-90" : ""}`}
                      />
                      {folder.isOpen ? (
                        <FolderOpen size={16} className="mr-2 text-gray-700 dark:text-gray-300" />
                      ) : (
                        <Folder size={16} className="mr-2 text-gray-700 dark:text-gray-300" />
                      )}
                      <span>{folder.name}</span>
                    </div>

                    {folder.isOpen && (
                      <div className="ml-4">
                        {folder.files.map((file, fileIndex) => (
                          <div
                            key={fileIndex}
                            className={`flex items-center px-2 py-1 hover:bg-muted/50 cursor-pointer ${
                              projects.findIndex((p) => p.fileName === file) === activeProject
                                ? "bg-muted/70 text-primary"
                                : ""
                            }`}
                            onClick={() => {
                              const projectIndex = projects.findIndex((p) => p.fileName === file)
                              if (projectIndex !== -1) {
                                setActiveProject(projectIndex)
                              }
                            }}
                          >
                            <FileCode size={16} className="mr-2 text-gray-600 dark:text-gray-400" />
                            <span>{file}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Project Content */}
            <div className="flex-1 flex flex-col">
              {/* Tabs */}
              <div className="flex overflow-x-auto bg-muted/50 border-b">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center px-4 py-2 border-r cursor-pointer ${
                      activeProject === index ? "bg-card text-foreground" : "bg-muted/30 text-muted-foreground"
                    }`}
                    onClick={() => setActiveProject(index)}
                    whileHover={{ backgroundColor: activeProject === index ? "" : "rgba(0,0,0,0.05)" }}
                  >
                    <FileCode size={16} className="mr-2 text-blue-500" />
                    <span className="truncate max-w-[120px]">{project.fileName}</span>
                    {activeProject === index && (
                      <button
                        className="ml-2 opacity-50 hover:opacity-100"
                        onClick={(e) => {
                          e.stopPropagation()
                          setActiveProject((activeProject + 1) % projects.length)
                        }}
                      >
                        <X size={14} />
                      </button>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Project Details */}
              <div className="flex-1 overflow-auto p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProject}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col"
                  >
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold mb-2">{projects[activeProject].title}</h3>
                      <p className="text-muted-foreground mb-4">{projects[activeProject].description}</p>
                    </div>

                    {/* Project Image */}
                    <div className="relative flex-1 mb-6 bg-muted/20 rounded-lg border overflow-hidden">
                      <div className="relative h-full">
                        <Image
                          src={projects[activeProject].image || "/placeholder.svg"}
                          alt={`${projects[activeProject].title} screenshot`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Project Info Footer */}
                    <div className="mt-auto">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {projects[activeProject].tags.map((tag, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.05 }}
                            whileHover={{ scale: 1.1, y: -2 }}
                          >
                            <Badge variant="secondary">{tag}</Badge>
                          </motion.div>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        <Button asChild size="sm">
                          <Link href={projects[activeProject].liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </Link>
                        </Button>
                        <Button asChild variant="outline" size="sm">
                          <Link href={projects[activeProject].githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            View Code
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Terminal */}
              <div className="border-t bg-muted/80 p-2 text-xs font-mono">
                <div className="flex items-center text-muted-foreground">
                  <Terminal size={14} className="mr-2" />
                  <span>
                    Portfolio &gt; Viewing project {activeProject + 1} of {projects.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
