"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function HeroSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "relative" : "fixed";
  });

  // Social links
  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "https://twitter.com", label: "Twitter" },
  ];

  // Code blocks content
  const codeBlocks = [
    {
      id: 1,
      content: `// Full-stack developer
const developer = {
  name: 'DevPortfolio',
  skills: ['React', 'Next.js', 'Supabase'],
  passion: 'Building amazing web experiences',
  services: [
    'Front-end Development',
    'Back-end Solutions',
    'AI Integration',
    'UI/UX Implementation'
  ],
  contact: 'Get in touch to start a project'
}`,
      position: { top: "20%", left: "15%" },
      rotation: -5,
      delay: 0.2,
    },
    {
      id: 2,
      content: `function startProject(idea) {
  return "Let's build something amazing together!";
}

// Expertise areas
const expertise = [
  'Web Applications',
  'E-commerce Solutions',
  'API Development',
  'Responsive Design'
];`,
      position: { top: "20%", right: "15%" },
      rotation: 5,
      delay: 0.3,
    },
    {
      id: 3,
      content: `// Technologies I work with
const technologies = {
  frontend: ['React', 'Next.js', 'Tailwind CSS'],
  backend: ['Node.js', 'Express', 'Supabase'],
  tools: ['Git', 'VS Code', 'Figma', 'Vercel'],
  databases: ['PostgreSQL', 'MongoDB', 'Firebase']
};`,
      position: { bottom: "10%", left: "15%" },
      rotation: -5,
      delay: 0.4,
    },
    {
      id: 4,
      content: `// My development process
const process = [
  'Understand requirements',
  'Create wireframes',
  'Develop MVP',
  'Test & refine',
  'Deploy & maintain'
];

// Always learning new things
const currentlyLearning = 'AI Integration';`,
      position: { bottom: "16%", right: "15%" },
      rotation: 5,
      delay: 0.5,
    },
  ];

  return (
    <section ref={targetRef} className="relative h-[800px] flex items-center justify-center bg-background">
      {/* Floating code blocks */}
      {codeBlocks.map((block) => (
        <motion.div
          key={block.id}
          className="absolute hidden md:block z-20"
          style={{
            ...block.position,
            maxWidth: "320px",
          }}
          initial={{ opacity: 0, y: 20, rotate: block.rotation }}
          animate={{ opacity: 0.9, y: 0, rotate: block.rotation }}
          transition={{ duration: 0.8, delay: block.delay }}
          whileHover={{
            scale: 1.05,
            rotate: 0,
            zIndex: 30,
            opacity: 1,
            transition: { duration: 0.3 },
          }}
        >
          <div className="bg-[#1e1e1e] rounded-lg shadow-2xl overflow-hidden border border-gray-800">
            {/* Editor header */}
            <div className="h-6 bg-[#323233] flex items-center px-3">
              <div className="flex space-x-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              </div>
            </div>
            {/* Code content */}
            <div className="p-4 font-mono text-xs text-gray-300 overflow-hidden">
              <pre className="whitespace-pre-wrap">{block.content}</pre>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div className="container px-4 md:px-6 z-20 relative flex flex-col items-center text-center" style={{ opacity, scale, position }}>
        <div className="max-w-xl mx-auto space-y-4 bg-card p-8 rounded-xl shadow-lg">
          {/* Name and Location */}
          <div className="flex flex-col items-center gap-4">
            <Avatar className="w-20 h-20">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <motion.h1
              className="text-4xl md:text-6xl font-bold tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hi, I'm Miguel
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-center text-muted-foreground"
            >
              <span>Living in Bogota, Colombia.</span>
            </motion.div>

            <motion.p
              className="text-xl text-muted-foreground max-w-[600px] mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              I'm a full-stack developer specializing in Next.js and React applications that scale and serve thousands of users.
            </motion.p>
            
            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 p-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Button asChild size="lg" className="group">
                <Link href="#projects">
                  View My Work
                  <motion.span className="ml-2" animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
                    →
                  </motion.span>
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contact">Get In Touch</Link>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center justify-center gap-4 p-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {socialLinks.map((link, i) => (
                <motion.div key={i} whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className=""
                  >
                    {link.icon}
                    <span className="sr-only">{link.label}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator - moved further down */}
        <motion.div
          className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
            <ArrowDown size={20} className="text-primary" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
