"use client";

import { useState, useRef, useMemo } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, X, Folder, FolderOpen, ChevronRight, FileCode, Terminal } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    fileName: "e-commerce.tsx",
    description: "A full-featured online store with Stripe integration, user authentication, and product management.",
    image: "/ahco-hero-image.png?height=600&width=800",
    tags: ["Next.js", "Supabase", "Stripe", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Content Generator",
    fileName: "ai-generator.tsx",
    description: "An application that leverages AI to generate marketing content, blog posts, and social media captions.",
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
];

const folders = [
  {
    name: "projects",
    isOpen: true,
    files: projects.map((p) => p.fileName),
  },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeProjectTitle, setActiveProjectTitle] = useState(projects[0].title);

  // Derived state for easier access
  const activeProject = useMemo(() => projects.find((p) => p.title === activeProjectTitle), [activeProjectTitle]);
  const activeProjectIndex = useMemo(() => projects.findIndex((p) => p.title === activeProjectTitle), [activeProjectTitle]);

  return (
    <section id="projects" className="p-5 md:p-20 bg-background flex flex-col justify-center items-center">
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
            <p className="text-muted-foreground text-lg">A selection of my recent work showcasing my skills and expertise</p>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="border rounded-lg overflow-hidden shadow-xl bg-secondary"
        >
          {/* Code Editor Header */}
          <div className="bg-secondary border-b flex items-center justify-between px-4 py-2">
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
            <div className="hidden md:block w-64 border-r bg-secondary overflow-y-auto">
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
                      <ChevronRight size={16} className={`mr-1 transition-transform ${folder.isOpen ? "rotate-90" : ""}`} />
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
                              projects.findIndex((p) => p.fileName === file) === activeProjectIndex ? "bg-muted/70 text-primary" : ""
                            }`}
                            onClick={() => {
                              const project = projects.find((p) => p.fileName === file);
                              if (project) {
                                setActiveProjectTitle(project.title);
                              }
                            }}
                          >
                            <FileCode size={16} className="mr-2 text-blue-500" />
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
              <div className="flex overflow-x-auto bg-secondary border-b">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center px-4 py-2 border-r cursor-pointer ${
                      activeProjectTitle === project.title ? "bg-card text-foreground" : "bg-muted/30 text-muted-foreground"
                    }`}
                    onClick={() => {
                      const selectedProject = projects.find((p) => p.fileName === project.fileName);
                      if (selectedProject) {
                        setActiveProjectTitle(selectedProject.title);
                      }
                    }}
                  >
                    <FileCode size={16} className="mr-2 text-blue-500" />
                    <span className="truncate max-w-[120px]">{project.fileName}</span>
                  </motion.div>
                ))}
              </div>

              {/* Project Details */}
              <div className="flex-1 overflow-auto p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProjectTitle}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col"
                  >
                    {activeProject ? (
                      <>
                        <div className="mb-6 w-1/3">
                          <h3 className="text-2xl font-bold mb-2">{activeProject.title}</h3>
                          <p className="text-muted-foreground mb-4">{activeProject.description}</p>
                        </div>

                        {/* Project Image */}
                        <div className="relative flex-1 mb-6 bg-secondary rounded-sm overflow-hidden w-[700px] h-[500px]">
                          <Image src={activeProject.image || "/placeholder.svg"} alt={`${activeProject.title} screenshot`} fill className="object-cover" />
                        </div>

                        {/* Project Info Footer */}
                        <div className="mt-auto">
                          <div className="flex flex-wrap gap-2 mb-4">
                            {activeProject.tags.map((tag, i) => (
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
                              <Link href={activeProject.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Live Demo
                              </Link>
                            </Button>
                            <Button asChild variant="outline" size="sm">
                              <Link href={activeProject.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                View Code
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="flex items-center justify-center h-full text-muted-foreground">Select a project to view details.</div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Terminal */}
              <div className="border-t bg-secondary p-2 text-xs font-mono">
                <div className="flex items-center text-muted-foreground">
                  <Terminal size={14} className="mr-2" />
                  <span>
                    Portfolio &gt; Viewing project {activeProjectIndex + 1} of {projects.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
