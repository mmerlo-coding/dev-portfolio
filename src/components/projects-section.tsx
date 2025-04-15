"use client";

import { useState, useRef, useMemo } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Folder, FolderOpen, ChevronRight, FileCode, Terminal, Code } from "lucide-react";
import { tagIcons, projects } from "@/lib/constants";

// Component to render a tag with its icon
function TechTag({ tagName }: { tagName: string }) {
  const IconComponent = tagIcons[tagName] || Code; // Default to Code icon
  return (
    <Badge
      variant="secondary"
      className="inline-flex items-center gap-1.5 py-1 px-2 whitespace-nowrap border border-transparent hover:border-border transition-colors duration-200"
    >
      <IconComponent className="h-3.5 w-3.5" />
      <span className="text-xs">{tagName}</span>
    </Badge>
  );
}

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

  const activeProject = useMemo(() => projects.find((p) => p.title === activeProjectTitle), [activeProjectTitle]);
  const activeProjectIndex = useMemo(() => projects.findIndex((p) => p.title === activeProjectTitle), [activeProjectTitle]);

  // State to manage the currently displayed large image for the active project
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Update currentImageIndex when active project changes
  useMemo(() => {
    setCurrentImageIndex(0);
  }, [activeProjectTitle]);

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

          {/* Project Content Container */}
          <div className="flex h-[800px] md:h-[1000px]">
            {/* File Explorer */}
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

            {/* Project Content Area */}
            <div className="flex-1 flex flex-col">
              {/* Tabs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 overflow-x-auto bg-secondary border-b">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    className={`flex items-center px-4 py-2 border-r cursor-pointer w-full ${
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
                    <span className="truncate max-w-[300px]">{project.fileName}</span>
                  </motion.div>
                ))}
              </div>

              {/* Project Details */}
              <div className="flex-1 overflow-auto p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeProjectTitle} // Keyed by title for transitions
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="h-full flex flex-col" // Ensure it takes full height
                  >
                    {/* Check if activeProject exists before rendering */}
                    {activeProject ? (
                      <>
                        {/* Main Content: Title, Description, Images */}
                        <div className="flex-grow mb-6 flex flex-col">
                          <h3 className="text-2xl font-bold mb-2 shrink-0">{activeProject.title}</h3>
                          <p className="text-muted-foreground mb-4 text-sm shrink-0">{activeProject.description}</p>
                          {/* Tags with Icons */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {activeProject.tags.map((tag) => (
                              <TechTag key={tag} tagName={tag} />
                            ))}
                          </div>

                          {/* Image Viewer Area */}
                          <div className="flex-grow flex flex-col min-h-[400px]">
                            {" "}
                            {/* Ensure image area can grow */}
                            {/* Main Image Display */}
                            <div className="relative flex-1 mb-3 bg-secondary rounded-md overflow-hidden">
                              <Image
                                src={activeProject.images[currentImageIndex]}
                                alt={`${activeProject.title} screenshot ${currentImageIndex + 1}`}
                                fill
                                className="object-contain w-[1200px] h-[500px]" // Use contain to see whole image
                                priority={true} // Prioritize the main image
                                key={activeProjectTitle + currentImageIndex} // Re-render on image change
                              />
                            </div>
                            {/* Thumbnails Row (if more than 1 image) */}
                            <p className="text-muted-foreground mb-4">More images from the project:</p>
                            {activeProject.images.length > 1 && (
                              <div className="grid grid-cols-2 md:grid-cols-6 gap-2 mt-auto shrink-0">
                                {/* Prevent thumbnails shrinking */}
                                {activeProject.images.map((imgSrc, imgIndex) => (
                                  <button
                                    key={imgIndex}
                                    onClick={() => setCurrentImageIndex(imgIndex)}
                                    className={`relative w-32 h-18 rounded-sm overflow-hidden border ${
                                      currentImageIndex === imgIndex ? "border-primary" : "border-transparent hover:border-muted-foreground/50"
                                    }`}
                                  >
                                    <Image src={imgSrc} alt={`${activeProject.title} thumbnail ${imgIndex + 1}`} fill className="object-cover" loading="lazy" />
                                  </button>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Footer Area: Tags and Buttons */}
                        <div className="mt-auto pt-2">
                          {/* Action Buttons */}
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
                      // Fallback if activeProject is not found
                      <div className="flex items-center justify-center h-full text-muted-foreground">Select a project to view details.</div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Terminal */}
              <div className="border-t bg-secondary p-2 text-xs font-mono mt-2">
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
