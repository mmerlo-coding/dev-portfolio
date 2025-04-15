"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
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

// Sample experience data - replace with your actual experience, add explicit year
const experienceData: ExperienceItem[] = [
  {
    company: "Tech Solutions Inc.",
    title: "Senior Frontend Developer",
    duration: "Jan 2021 - Present",
    year: "2021",
    descriptionPoints: [
      "Led the development of a new customer portal using Next.js and TypeScript.",
      "Mentored junior developers and conducted code reviews.",
      "Improved application performance by 20% through code optimization and lazy loading.",
      "Collaborated with UI/UX designers to implement complex user interfaces.",
    ],
    icon: <Building className="h-5 w-5" />,
  },
  {
    company: "Web Innovators LLC",
    title: "Frontend Developer",
    duration: "Jun 2018 - Dec 2020",
    year: "2020", // Use end year or most relevant year
    descriptionPoints: [
      "Developed and maintained responsive web applications using React and Redux.",
      "Worked closely with backend developers to integrate APIs.",
      "Contributed to the development of a component library.",
      "Participated in agile development processes.",
    ],
    icon: <Building className="h-5 w-5" />,
  },
  {
    company: "Digital Creations Co.",
    title: "Junior Web Developer",
    duration: "Sep 2016 - May 2018",
    year: "2018", // Use end year or most relevant year
    descriptionPoints: [
      "Assisted senior developers in building website features.",
      "Fixed bugs and performed testing on various projects.",
      "Learned and applied modern frontend technologies.",
    ],
    icon: <Building className="h-5 w-5" />,
  },
];

const ExperienceSection = () => {
  const sectionRef = useRef(null);

  // No need for separate mobile variants, desktop ones will adapt reasonably

  // Variants for desktop (left side)
  const variantsLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  // Variants for desktop (right side)
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

        {experienceData.map((item, index) => {
          const itemRef = useRef(null);
          const isInView = useInView(itemRef, { once: true, amount: 0.3 });
          const isLeftMd = index % 2 === 0;

          return (
            <div key={index} ref={itemRef} className="relative mb-12 md:mb-16 md:flex md:justify-center">
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
                // Apply the correct variant based on desktop alternating position
                variants={isLeftMd ? variantsLeft : variantsRight}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="shadow-sm hover:border-primary/30 hover:shadow-md transition-all duration-300">
                  {/* Card content remains the same */}
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
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;
