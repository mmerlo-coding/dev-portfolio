"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { Briefcase, Building, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

// Define the structure for experience data
interface ExperienceItem {
  company: string;
  title: string;
  duration: string;
  year: string; // Explicit year for the timeline marker
  descriptionPoints: string[];
  icon?: React.ReactNode; // Optional custom icon
}

// Sample experience data - replace with your actual experience
const experienceData: ExperienceItem[] = [
  {
    company: "Stripe Payments",
    title: "Implementation Consultant / Payments Architect",
    duration: "2019 - 2022",
    year: "2019",
    descriptionPoints: [
      "Led a team of 5-10 colleagues by providing guidance and support to them in order to implement Stripe's payment solutions for clients and understanding better each business needs.",
      "Conducted training sessions for clients to help them understand the new payment solutions and Stripe's features.",
      "Provided technical support to clients to help them troubleshoot issues with the payment solutions and makre sure they were not stuck during integration.",
      "Grew the program from 10 clients to over 100 clients in 3 years. And expanded the operations to EMEA and LATAM regions.",
      "Helped over 100 new Stripe users to integrate their payment solutions and setup their accounts. This included subscriptions and multi-party payments as well.",
    ],
    icon: <Building className="h-5 w-5" />,
  },
  {
    company: "ArchitekHealth Inc.",
    title: "Software Engineer",
    duration: "Sept 2022 - Sept 2023",
    year: "2022",
    descriptionPoints: [
      "Developed and maintained responsive web applications using React Next.js, Tailwind CSS, and ShadCN.",
      "Complete re-do of a 2 year old application in 3-6 months time. This included a complete overhaul of the codebase, as well as the introduction of new features and improvements to the overall user experience.",
      "Worked closely with backend developers to integrate APIs, AWS and DynamoDB setup.",
      "Created 3 full-stack applications which were used by the company's clients, providers and brands.",
      "Launched over 5 new clients to thousands of their visitors in our first year after completing the apps.",
    ],
    icon: <Building className="h-5 w-5" />,
  },
  {
    company: "Linsenrechner",
    title: "Full Stack Development",
    duration: "Sep 2023 - Present",
    year: "2023",
    descriptionPoints: [
      "Currently working on a full stack application for the company using React, Next.js, Tailwind CSS, and ShadCN. As a single developer for the company I'm responsible for the full development process.",
      "Created a full backend and API routes for securing the business logic and data of the company.",
      "Revamped an existing website for the company to improve the user experience and SEO by using Next.js, as well as improved responsiveness and overall functionality.",
      "Helped improving company's guidelines and procedures for adding code to the existing codebase.",
    ],
    icon: <Building className="h-5 w-5" />,
  },
];

// New component for individual timeline items
interface ExperienceTimelineItemProps {
  item: ExperienceItem;
  isLeftMd: boolean;
  variants: Variants;
}

const ExperienceTimelineItem: React.FC<ExperienceTimelineItemProps> = ({ item, isLeftMd, variants }) => {
  // Hooks are now at the top level of this component
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, amount: 0.3 });

  return (
    <div ref={itemRef} className="relative mb-12 md:mb-16 md:flex md:justify-center">
      {/* Year Marker */}
      <div className="absolute left-1 top-0 md:left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <span className="flex h-10 w-16 items-center justify-center rounded-full bg-primary border-4 border-secondary text-sm font-semibold text-primary-foreground">
          {item.year}
        </span>
      </div>

      {/* Timeline Content Card Container */}
      <motion.div
        className={`w-full pl-4 pt-10 md:pl-0 md:w-[calc(50%-2rem)] lg:w-[calc(50%-4rem)] ${
          isLeftMd ? "md:mr-auto md:pr-4 lg:md:pr-8" : "md:ml-auto md:pl-4 lg:md:pl-8"
        }`}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variants} // Use passed variants
        viewport={{ once: true, amount: 0.3 }}
      >
        <Card className="shadow-sm hover:border-primary/30 hover:shadow-md transition-all duration-300">
          <CardHeader>
            <div className="flex justify-between items-start mb-1 gap-2">
              <div>
                <CardTitle className="text-lg md:text-xl font-semibold">{item.title}</CardTitle>
                <CardDescription className="text-md font-medium text-primary">{item.company}</CardDescription>
              </div>
              <div className="flex items-center text-xs text-muted-foreground mt-1 whitespace-nowrap shrink-0">
                <Calendar className="h-3.5 w-3.5 mr-1.5" />
                {item.duration}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <ul className="list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
              {item.descriptionPoints.map((point, pointIndex) => (
                <li key={pointIndex}>{point}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

// Main Experience Section Component
const ExperienceSection = () => {
  const sectionRef = useRef(null);

  // Variants defined in the parent
  const variantsLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };
  const variantsRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <section id="experience" ref={sectionRef} className="p-5 md:p-20 bg-secondary flex flex-col items-center overflow-hidden">
      {/* Section Header */}
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
            <Briefcase className="h-4 w-4 mr-2" />
            <span>My Journey</span>
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Work Experience</h2>
          <p className="text-muted-foreground text-lg">A timeline of my professional career and key roles.</p>
        </div>
      </motion.div>

      {/* Timeline Container */}
      <div className="relative w-full max-w-full md:max-w-4xl lg:max-w-5xl px-4 md:px-0">
        {/* Vertical Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-border md:-ml-px" aria-hidden="true"></div>

        {/* Map now renders the new component */}
        {experienceData.map((item, index) => {
          const isLeftMd = index % 2 === 0;
          return <ExperienceTimelineItem key={index} item={item} isLeftMd={isLeftMd} variants={isLeftMd ? variantsLeft : variantsRight} />;
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;
