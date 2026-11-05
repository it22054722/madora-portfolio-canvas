import { useState, useEffect } from "react";
import { Menu, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Resume", href: "#resume" },
  { name: "Projects", href: "#projects" },
  // { name: "Blog", href: "#blog" },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      const sections = [...navLinks.map((link) => link.href.slice(1)), "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    // Immediately mark the clicked section as active so buttons reflect state
    setActiveSection(href.replace(/^#/, ""));

    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="container mx-auto px-4">
          <div
            className={`glass-dark rounded-full px-4 md:px-6 py-3 flex items-center justify-between max-w-6xl mx-auto transition-all duration-300 ${
              isScrolled ? "shadow-2xl" : "shadow-xl"
            }`}
          >
            {/* Logo */}
            <div className="flex items-center gap-2">
              {!logoError ? (
                <img
                  src={logo}
                  alt="Akash logo"
                  className="w-8 h-8 rounded-full object-cover"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <div className="w-2 h-2 bg-[#4679E0] rounded-full animate-pulse" />
              )}
              <span className="font-bold text-lg">Madora Weerasinghe</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 relative">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-4 py-2 rounded-full transition-colors duration-200 text-sm ${
                    activeSection === link.href.slice(1)
                      ? "text-[#4679E0] font-medium"
                      : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {activeSection === link.href.slice(1) && (
                    <motion.div
                      layoutId="navPill"
                      className="absolute inset-0 bg-[#4679E0]/10 rounded-full border border-[#4679E0]/20"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </button>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="hero"
                size="sm"
                className={`gap-2 group ${
                  activeSection === "contact"
                    ? "bg-[#4679E0] text-white shadow-lg"
                    : ""
                }`}
                onClick={() => handleNavClick("#contact")}
              >
                Contact
                <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-foreground/8 rounded-full transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 md:hidden bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Bottom Sheet */}
            <motion.div
              className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ 
                type: "spring",
                damping: 30,
                stiffness: 300
              }}
            >
              <div className="bg-background/95 backdrop-blur-2xl rounded-t-[32px] shadow-2xl border-t border-foreground/10 pb-safe">
                {/* Handle Bar */}
                <div className="flex justify-center pt-3 pb-4">
                  <div className="w-10 h-1 bg-foreground/20 rounded-full" />
                </div>

                {/* Menu Items */}
                <div className="px-6 pb-8 space-y-2">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.name}
                      onClick={() => handleNavClick(link.href)}
                      className={`w-full text-left px-5 py-4 rounded-2xl transition-all duration-200 ${
                        activeSection === link.href.slice(1)
                          ? "bg-[#4679E0]/12 text-[#4679E0] font-semibold"
                          : "bg-foreground/5 text-foreground/80 hover:bg-foreground/10 active:scale-[0.98]"
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <span className="text-lg">{link.name}</span>
                    </motion.button>
                  ))}
                  
                  {/* Contact Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navLinks.length * 0.05 }}
                    className="pt-4"
                  >
                    <Button 
                      variant="default"
                      size="lg" 
                      className="w-full gap-2 py-6 rounded-2xl bg-[#4679E0] text-white shadow-lg active:scale-[0.98] transition-transform"
                      onClick={() => handleNavClick("#contact")}
                    >
                      <Send className="w-5 h-5" />
                      Contact Me
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};