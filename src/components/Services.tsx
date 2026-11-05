import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import cardbg from "../assets/service bg 2.png";

const services = [
  {
    number: "01",
    title: "Quality Assurance & Testing",
    description: "Delivering thorough manual, regression, and automation testing strategies to ensure software reliability, performance, and exceptional user satisfaction across all platforms.",
    style: "dark",
  },
  {
    number: "02",
    title: "Test Automation & Strategy",
    description: "Implementing automated testing frameworks and comprehensive test strategies to accelerate release cycles while maintaining high quality standards and reducing defects.",
    style: "blue",
    featured: true,
  },
  {
    number: "03",
    title: "Web & Mobile Development",
    description: "Building modern, responsive applications with React, Node.js, Kotlin, and Android Studio—combining development skills with a quality-first mindset for robust solutions.",
    style: "dark",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40 
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1] as const,
    },
  },
};

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section className="relative py-20 md:py-32 px-6 md:px-20 bg-[#0a0a0a] overflow-hidden">
      {/* Optional starfield/dot pattern background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.05) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative max-w-[1400px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-sm font-light tracking-[3px] uppercase text-[#4679E0] mb-4"
          >
            WHAT I OFFER
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-[56px] font-bold text-white tracking-tight mb-5"
          >
            Services & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-lg font-light leading-[1.6] max-w-[800px] mx-auto"
          >
            Comprehensive development and design solutions tailored to bring your digital vision to life with cutting-edge technologies and user-centered approaches.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              className={`
                group relative overflow-hidden rounded-3xl md:rounded-[32px] border transition-all duration-500 ease-out
                md:hover:scale-[1.02] md:hover:-translate-y-3 md:hover:shadow-[0_24px_64px_rgba(0,0,0,0.4)]
                w-full aspect-square
                ${service.style === 'dark' 
                  ? 'bg-[rgba(26,26,26,0.6)] border-[rgba(255,255,255,0.1)] md:hover:border-[rgba(255,255,255,0.2)]' 
                  : 'border-[rgba(255,255,255,0.1)] md:hover:border-[rgba(255,255,255,0.2)]'}
              `}
              style={{
                backdropFilter: 'blur(20px) saturate(180%)',
                ...(service.style === 'blue' && {
                  background: 'linear-gradient(180deg, #4679E0 0%, #3461C4 40%, #1a1a1a 100%)',
                }),
                ...(index === 1 && {
                  backgroundImage: `url(${cardbg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }),
              }}
            >
              {/* Glow effect for blue card */}
              {service.featured && (
                <div 
                  className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-[150%] h-[150%] pointer-events-none opacity-60 md:group-hover:opacity-80 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle, rgba(70, 121, 224, 0.3) 0%, transparent 70%)',
                    filter: 'blur(60px)',
                    zIndex: 0,
                  }}
                />
              )}

              {/* Dark gradient overlay for dark cards */}
              {service.style === 'dark' && (
                <div 
                  className="absolute inset-0 pointer-events-none rounded-3xl md:rounded-[32px]"
                  style={{
                    background: 'linear-gradient(180deg, rgba(26, 26, 26, 0.4) 0%, rgba(10, 10, 10, 0.8) 100%)',
                    zIndex: 1,
                  }}
                />
              )}

              {/* Content Container */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10 flex flex-col gap-3 md:gap-4 lg:gap-5 z-10">
                {/* Service Number */}
                <p className="text-sm font-light tracking-[2px] text-[rgba(255,255,255,0.5)]">
                  {service.number}
                </p>

                {/* Service Title */}
                <h3 className={`text-2xl md:text-3xl lg:text-4xl font-bold leading-tight tracking-tight ${service.title === 'Mobile Application Development' || service.title === 'UX/UI Design' ? 'text-[#4679E0]' : 'text-white'}`}>
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm md:text-base font-light text-[rgba(255,255,255,0.8)] leading-relaxed tracking-wide">
                  {service.description}
                </p>
              </div>

              {/* Glassmorphism inner glow */}
              <div 
                className="absolute inset-0 pointer-events-none rounded-3xl md:rounded-[32px]"
                style={{
                  boxShadow: 'inset 0 0 60px rgba(0, 0, 0, 0.25)',
                  zIndex: 2,
                }}
              />
            </motion.article>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}