"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Menu, X } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/#about" },
  { name: "Skills", path: "/#skills" },
  { name: "Projects", path: "/#projects" },
  { name: "Contact", path: "/#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isMobile = useMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.3,
      },
    }),
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const mobileNavItemVariants = {
    closed: { opacity: 0, x: 50 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className={cn("fixed top-0 w-full z-50 transition-all duration-300", isScrolled ? "bg-background/50 backdrop-blur-md" : "bg-transparent")}
    >
      <div className="flex items-center justify-between px-4 md:px-10 h-16">
        <Link href="/">
          <motion.div className="text-xl font-bold" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <span className="text-primary">Dev</span>Portfolio
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item, i) => (
            <motion.div key={item.name} custom={i} variants={navItemVariants} initial="hidden" animate="visible">
              <Link
                href={item.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative group",
                  pathname === item.path ? "text-primary" : "text-muted-foreground"
                )}
              >
                {item.name}
                <motion.span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary" whileHover={{ width: "100%" }} transition={{ duration: 0.3 }} />
              </Link>
            </motion.div>
          ))}
        </nav>
        <ModeToggle />

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2 z-50">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}>
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div className="fixed inset-0 bg-secondary z-40 pt-16" variants={mobileMenuVariants} initial="closed" animate="open" exit="closed">
              <nav className="flex flex-col items-center gap-6 p-8 bg-secondary">
                {navItems.map((item, i) => (
                  <motion.div key={item.name} variants={mobileNavItemVariants} className="w-full">
                    <Link
                      href={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "text-lg font-medium transition-colors hover:text-primary flex justify-center py-3 w-full",
                        pathname === item.path ? "text-primary" : "text-muted-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.header>
  );
}
