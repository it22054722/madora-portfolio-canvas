import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiPhp,
  DiPython,
  DiMysql,
} from "react-icons/di";

interface Skill {
  name: string;
  percentage: number;
  icon: any;
  category: string;
}

const skills: Skill[] = [
  { name: "HTML", percentage: 90, icon: DiHtml5, category: "Frontend" },
  { name: "CSS", percentage: 70, icon: DiCss3, category: "Frontend" },
  { name: "JavaScript", percentage: 70, icon: DiJavascript1, category: "Language" },
  { name: "React.js", percentage: 80, icon: DiReact, category: "Frontend" },
  { name: "Node.js", percentage: 70, icon: DiNodejsSmall, category: "Backend" },
  { name: "PHP", percentage: 65, icon: DiPhp, category: "Backend" },
  { name: "Python", percentage: 60, icon: DiPython, category: "Backend" },
  { name: "MySQL", percentage: 60, icon: DiMysql, category: "Database" },
];

const SkillItem = ({ skill, index }: { skill: Skill; index: number }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: false, amount: 0.3 });
  const Icon = skill.icon;

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="group flex flex-col gap-3.5"
    >
      <div className="flex items-center justify-between mb-2.5">
        <div className="flex items-center gap-3">
          <Icon className="w-[26px] h-[26px] text-[#4679E0] transition-colors duration-300 group-hover:text-[#4679E0]/80" />
          <span className="text-[17px] font-medium text-foreground tracking-wide transition-colors duration-300 group-hover:text-[#4679E0]/80">
            {skill.name}
          </span>
        </div>
        <span className="text-[17px] font-bold text-[#4679E0] tracking-wider">
          {skill.percentage}%
        </span>
      </div>

      <div className="relative w-full h-1.5 bg-secondary/30 rounded overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.percentage}%` } : { width: 0 }}
          transition={{
            duration: 1.2,
            delay: index * 0.08,
            ease: [0.4, 0, 0.2, 1],
          }}
          className="relative h-full rounded bg-gradient-to-r from-[#4679E0] to-[#5A8DF5] transition-shadow duration-300 group-hover:shadow-[0_0_16px_rgba(70,121,224,0.5)]"
          style={{
            boxShadow: "0 0 10px rgba(70, 121, 224, 0.3)",
          }}
        >
          <div className="absolute right-0 top-0 w-[30px] h-full bg-gradient-to-r from-transparent to-white/25 rounded" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 md:py-32 px-6 md:px-20 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-sm font-light text-[#4679E0] uppercase tracking-[0.2em] mb-4">
            MY EXPERTISE
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-5">
            Skills & Technologies
          </h2>
          <p className="text-foreground/70 text-lg font-light leading-[1.6] max-w-[800px] mx-auto">
            A comprehensive toolkit of programming languages, frameworks, and technologies that power modern web and mobile applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-8 md:gap-y-10">
          {skills.map((skill, index) => (
            <SkillItem key={skill.name} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};