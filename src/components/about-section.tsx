"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Database, Palette, Sparkles, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function AboutSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });
  const [activeFeature, setActiveFeature] = useState(0);

  type Feature = {
    icon: React.ReactNode;
    title: string;
    description: string;
    skills: string[];
    proficiency: string;
  };

  const features: Feature[] = [
    {
      icon: <Code className="h-8 w-8 text-gray-800 dark:text-gray-200" />,
      title: "Front-End Development",
      description:
        "Creating responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks. I focus on building seamless user experiences with attention to performance and accessibility.",
      skills: ["React", "Next.js", "ShadCN", "Framer Motion", "Responsive Design"],
      proficiency: "Advanced",
    },
    {
      icon: <Database className="h-8 w-8 text-gray-800 dark:text-gray-200" />,
      title: "Back-End Solutions",
      description:
        "Building robust server-side applications with Node.js, Supabase, and PostgreSQL. I develop secure, scalable APIs and database solutions that power modern web applications.",
      skills: ["Node.js", "Supabase", "PostgreSQL", "API Development", "Stripe Integration"],
      proficiency: "Intermediate",
    },
    {
      icon: <Sparkles className="h-8 w-8 text-gray-800 dark:text-gray-200" />,
      title: "AI Integration",
      description:
        "Implementing AI technologies to create intelligent and adaptive web applications. I leverage cutting-edge AI tools to enhance functionality and create unique user experiences.",
      skills: ["AI Development", "OpenAI Integration", "LLM Implementation", "Chatbot Development"],
      proficiency: "Intermediate",
    },
    {
      icon: <Palette className="h-8 w-8 text-gray-800 dark:text-gray-200" />,
      title: "UI/UX Design",
      description:
        "Transforming designs from PSD and Figma into beautiful, functional websites. I bridge the gap between design and development to create visually stunning interfaces.",
      skills: ["Figma to HTML", "PSD Conversion", "UI Animation", "Design Systems", "GOHIGHLEVEL"],
      proficiency: "Advanced",
    },
  ];

  return (
    <section id="about" className="p-5 md:p-20 bg-secondary flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col items-center text-center mb-16"
      >
        <div className="space-y-4 max-w-[800px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-3 py-1 rounded-full border text-sm font-medium mb-2"
          >
            <span>About Me</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">
            Passionate about creating <span className="text-primary">exceptional</span> digital experiences
          </h2>
          <p className="text-muted-foreground text-lg">
            Some of my skills and tools that I use to create exceptional digital experiences.
          </p>
        </div>
      </motion.div>

      <div ref={containerRef} className="relative">
        {/* Interactive Feature Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Feature Navigation */}
          <div className="lg:col-span-2 space-y-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <button
                  onClick={() => setActiveFeature(index)}
                  className={`w-full cursor-pointer text-left p-4 rounded-lg transition-all duration-300 flex items-start gap-4 ${
                    activeFeature === index
                      ? "bg-gray-100 dark:bg-card border-l-2 border-gray-800 dark:border-border"
                      : "bg-secondary hover:bg-card border-l-2 border-transparent"
                  }`}
                >
                  <div className={`p-2 rounded-full ${activeFeature === index ? "bg-gray-200 dark:bg-gray-700" : "bg-muted"} transition-colors duration-300`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-bold text-lg mb-1 ${activeFeature === index ? "text-gray-800 dark:text-gray-200" : "text-foreground"}`}>
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">{feature.description}</p>
                  </div>
                  <ChevronRight
                    size={20}
                    className={`self-center transition-transform duration-300 ${
                      activeFeature === index ? "rotate-90 text-gray-800 dark:text-gray-200" : "text-muted-foreground"
                    }`}
                  />
                </button>
              </motion.div>
            ))}
          </div>

          {/* Feature Details */}
          <div className="lg:col-span-3 relative">
            <div className="bg-card rounded-lg shadow-lg p-6 md:p-8 h-full">
              <AnimatedFeatureContent feature={features[activeFeature]} index={activeFeature} />
            </div>
          </div>
        </div>
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
                <Badge className="px-3 py-1 text-sm rounded-full">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Animated content for the feature details panel
function AnimatedFeatureContent({ feature, index }: { feature: any; index: number }) {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="h-full flex flex-col gap-4"
    >
      <div className="flex items-center gap-3">
        <h3 className="text-2xl font-bold">{feature.title}</h3>
        <Badge
          variant="outline"
          className={`mt-1 ${
            feature.proficiency === "Advanced"
              ? "border-gray-800 text-gray-800 dark:border-primary dark:text-secondary-foreground"
              : feature.proficiency === "Intermediate"
              ? "border-gray-600 text-gray-600 dark:border-gray-400 dark:text-secondary-foreground"
              : "border-gray-500 text-gray-500 dark:border-gray-500 dark:text-gray-500"
          }`}
        >
          {feature.proficiency}
        </Badge>
      </div>

      <p className="text-muted-foreground">{feature.description}</p>
      <div className="flex flex-wrap gap-2">
        {feature.skills.map((skill: string, i: number) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            className="px-3 py-1 border border-border rounded-full text-sm"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}
