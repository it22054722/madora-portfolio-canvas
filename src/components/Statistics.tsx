import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useInView } from "framer-motion";

interface StatData {
  id: string;
  number: number;
  suffix: string;
  label: string;
  duration: number;
}

const stats: StatData[] = [
  {
    id: "tests",
    number: 150,
    suffix: "+",
    label: "Test Cases Executed",
    duration: 2.5,
  },
  {
    id: "bugs",
    number: 75,
    suffix: "+",
    label: "Bugs Identified & Resolved",
    duration: 2,
  },
  {
    id: "automation",
    number: 85,
    suffix: "%",
    label: "Test Automation Coverage",
    duration: 2,
  },
  {
    id: "experience",
    number: 12,
    suffix: "+",
    label: "Months QA Experience",
    duration: 1.5,
  },
];

const StatCard = ({ stat, index }: { stat: StatData; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });
  const count = useMotionValue(0);
  const rounded = useSpring(count, { duration: stat.duration * 1000 });

  useEffect(() => {
    if (isInView) {
      count.set(stat.number);
    } else {
      // reset to 0 when leaving view so the animation plays again
      // the next time the card enters the viewport
      count.set(0);
    }
  }, [isInView, count, stat.number]);

  useEffect(() => {
    return rounded.on("change", (latest) => {
      if (ref.current) {
        const element = ref.current as HTMLElement;
        const counterElement = element.querySelector(".counter");
        if (counterElement) {
          counterElement.textContent = Math.round(latest).toString();
        }
      }
    });
  }, [rounded]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="flex flex-col items-center justify-center text-center min-w-[280px] h-[160px] p-8 bg-[#1a1a1a] border border-white/[0.08] rounded-[20px] transition-all duration-300 hover:-translate-y-1 hover:border-[#4679E0]/30 hover:shadow-xl hover:bg-[#1f1f1f]"
      aria-label={`${stat.number}${stat.suffix} ${stat.label}`}
    >
      {/* Counter */}
      <div className="text-[56px] font-semibold text-[#4679E0] leading-none mb-4 tracking-tight">
        <span className="counter">0</span>
        <span>{stat.suffix}</span>
      </div>

      {/* Label */}
      <p className="text-[15px] font-medium text-foreground/90 tracking-wide whitespace-nowrap">
        {stat.label}
      </p>
    </motion.div>
  );
};

export const Statistics = () => {
  return (
    <section id="resume" className="relative py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Optional Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-[#4679E0] mb-4">
            BY THE NUMBERS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            My Impact & Growth
          </h2>
          <p className="text-foreground/70 text-base md:text-lg leading-relaxed font-light max-w-[700px] mx-auto">
            Quantifiable achievements and milestones that reflect my journey, dedication, and continuous growth in technology and development.
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-6 max-w-[1400px] mx-auto">
          {stats.map((stat, index) => (
            <StatCard key={stat.id} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};