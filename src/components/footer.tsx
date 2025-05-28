"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/mmerlo-coding", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/miguelmerlodev/", label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "https://x.com/8ersrk", label: "Twitter" },
  ];

  return (
    <footer className="flex flex-col md:flex-row justify-between items-center gap-6 flex-1 p-5 md:px-10 md:py-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center md:text-left"
      >
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} MiguelDev. All rights reserved.</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex items-center gap-4"
      >
        {socialLinks.map((link, i) => (
          <motion.div key={i} whileHover={{ y: -5, scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <Link href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              {link.icon}
              <span className="sr-only">{link.label}</span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </footer>
  );
}
