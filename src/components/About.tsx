import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";

function useTypewriter(words: string[], typingSpeed = 80, deletingSpeed = 40, pause = 1800) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    let timeout: ReturnType<typeof setTimeout>;

    const current = words[index % words.length];

    if (!isDeleting) {
      // typing
      timeout = setTimeout(() => {
        if (!mounted.current) return;
        setDisplay(current.slice(0, display.length + 1));
        if (display.length + 1 === current.length) {
          // pause before deleting
          setTimeout(() => {
            if (!mounted.current) return;
            setIsDeleting(true);
          }, pause);
        }
      }, typingSpeed);
    } else {
      // deleting
      timeout = setTimeout(() => {
        if (!mounted.current) return;
        setDisplay(current.slice(0, display.length - 1));
        if (display.length - 1 === 0) {
          setIsDeleting(false);
          setIndex((i) => (i + 1) % words.length);
        }
      }, deletingSpeed);
    }

    return () => {
      mounted.current = false;
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [display, isDeleting, index, words, typingSpeed, deletingSpeed, pause]);

  return display;
}

export const About = () => {
  const dynamicWords = ["Software", "Quality", "Testing", "Automation"];
  const maxChars = Math.max(...dynamicWords.map((w) => w.length));
  const dynamicWord = useTypewriter(dynamicWords, 80, 40, 1600);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="about" className="py-20 md:py-32 gradient-dark">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-[#4679E0] text-sm md:text-base font-medium uppercase tracking-wider">
              ABOUT ME
            </p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight"
            >
              {/* preserved structure: "Building [dynamicWord] That Make Life Simpler" */}
              <span>Building </span>
              <span className="inline-block text-[#4679E0]">
                <span
                  className="inline-block typewriter-word"
                  style={{ ["--max-ch" as any]: `${maxChars}ch` } as React.CSSProperties}
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {dynamicWord}
                  <span className="typing-cursor" aria-hidden />
                </span>
              </span>
              <span> That Make Life Simpler</span>
            </motion.h2>

          </motion.div>
          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
             <p className="text-foreground/80 text-lg md:text-xl leading-relaxed font-light">
              I'm an IT undergraduate specializing in Information Technology, currently working as an Intern Quality Engineer at Wiley Global Technology. With hands-on experience in manual, regression, and automation testing, I'm passionate about ensuring software quality and user satisfaction. Alongside my QA experience, I have a strong background in UI/UX design, web development, and mobile application development, blending creativity with functionality to deliver efficient and user-friendly solutions.
            </p>
            <div className="space-y-4">
              <p className="text-foreground/60 text-base md:text-lg font-light">
                Let's Build Something Meaningful Together
              </p>
              <Button 
                variant="default" 
                size="lg" 
                className="gap-2 group"
                onClick={scrollToContact}
              >
                Get in touch
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};