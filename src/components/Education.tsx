import { useState } from "react";
import { motion } from "framer-motion";

interface TimelineItem {
  step: string;
  title: string;
  institution: string;
  date: string;
  description: string;
  tags: string[];
  badge?: {
    text: string;
  };
}

const educationData: TimelineItem[] = [
  {
    step: "2012 - 2020",
    title: "Advanced Level - Biology Stream",
    institution: "Holy Family Convent Marawila",
    date: "2012 - 2020",
    description: "Successfully completed Advanced Level studies in the Biology stream, building a strong foundation in scientific thinking and analytical skills.",
    tags: ["Biology", "Chemistry", "Physics"],
  },
  {
    step: "2022",
    title: "Certificate in English",
    institution: "British Council Sri Lanka",
    date: "2022",
    description: "Gained practical English skills for the real world and the confidence to use them in professional settings.",
    tags: ["Communication", "Professional English", "Language Skills"],
  },
  {
    step: "2022 - 2026",
    title: "BSc (Hons) in Information Technology",
    institution: "Sri Lanka Institute of Information Technology",
    date: "2022 - 2026",
    description: "Specializing in Information Technology, gaining expertise in software development, quality assurance, and system architecture.",
    tags: ["Programming", "Software Quality", "System Design"],
    // badge: { text: "Current" },
  },
  // {
  //   step: "2025",
  //   title: "ISTQB Certified Tester Foundation Level",
  //   institution: "SLSTB",
  //   date: "2025",
  //   description: "Completed ISTQB Foundation Level exam with a strong grasp of software testing fundamentals, methodologies, and best practices.",
  //   tags: ["Software Testing", "QA Principles", "Test Management"],
  // },
];

const experienceData: TimelineItem[] = [
  {
    "step": "2025 - 2026",
    "title": "Intern - Quality Engineer",
    "institution": "Wiley Global Technology (PVT) LTD",
    "date": "February 2025 - Present",
    "description": "Performing comprehensive quality assurance activities including manual testing, regression testing, and test automation. Collaborating with development teams to identify, document, and track software defects while ensuring adherence to quality standards and best practices.",
    "tags": ["Manual Testing", "Regression Testing", "Test Automation", "Bug Tracking", "Test Case Design", "Jira"],
    "badge": { "text": "Current" }
  },
  {
    "step": "2024 - 2025",
    "title": "Quality Assurance - Academic Projects",
    "institution": "SLIIT University Projects",
    "date": "2024 - 2025",
    "description": "Conducted testing and quality assurance for academic software projects, including mobile applications and web systems. Developed test plans, executed test cases, and reported defects to ensure project deliverables met quality standards.",
    "tags": ["Test Planning", "Manual Testing", "Mobile Testing", "Documentation", "Team Collaboration"]
  },
  {
    "step": "2022 - 2024",
    "title": "Building Foundations",
    "institution": "Personal Development",
    "date": "2022 - 2024",
    "description": "Built foundational skills in programming, web development, and software testing through coursework and self-directed learning projects. Explored various technologies and testing methodologies.",
    "tags": ["Web Development", "Mobile Apps", "Testing Basics", "UI/UX Design"]
  },
  {
    "step": "Future",
    "title": "Career Goals",
    "institution": "Professional Aspirations",
    "date": "Upcoming",
    "description": "Seeking to grow as a Quality Engineer, expand automation testing expertise, and contribute to building high-quality, reliable software products that deliver exceptional user experiences.",
    "tags": ["Automation Excellence", "QA Leadership", "Continuous Learning", "Innovation"]
  }
];

export const Education = () => {
  const [activeTab, setActiveTab] = useState<"education" | "experience">("education");
  
  const currentData = activeTab === "education" ? educationData : experienceData;

  return (
    <section className="bg-[#0a0a0a] py-20 md:py-32 px-6 md:px-20" id="education">
      <div className="max-w-[1200px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            className="text-[#4679E0] text-[14px] font-medium uppercase tracking-[2px] mb-4"
          >
            MY JOURNEY
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.1 }}
            className="text-white text-4xl md:text-[52px] font-bold leading-[1.2] mb-5"
            style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
          >
            Education & Experience
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.2 }}
            className="text-white/70 text-lg font-light leading-[1.6] max-w-[800px] mx-auto mb-20"
            style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
          >
            A chronological journey through my academic and professional development, showcasing my growth and expertise in the field of technology and design.
          </motion.p>

          {/* Tab Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.3 }}
            className="flex justify-center"
          >
            <div className="inline-flex bg-white/5 rounded-[50px] p-1.5">
              <button
                onClick={() => setActiveTab("education")}
                className={`px-8 py-3 rounded-[50px] text-base font-medium transition-all duration-300 ${
                  activeTab === "education"
                    ? "bg-[#4679E0] text-white shadow-[0_4px_16px_rgba(70,121,224,0.3)]"
                    : "bg-transparent text-white/60 hover:text-white/80"
                }`}
                style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
              >
                Education
              </button>
              <button
                onClick={() => setActiveTab("experience")}
                className={`px-8 py-3 rounded-[50px] text-base font-medium transition-all duration-300 ${
                  activeTab === "experience"
                    ? "bg-[#4679E0] text-white shadow-[0_4px_16px_rgba(70,121,224,0.3)]"
                    : "bg-transparent text-white/60 hover:text-white/80"
                }`}
                style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
              >
                Experience
              </button>
            </div>
          </motion.div>
        </div>

        {/* Desktop Timeline Grid */}
        <div className="relative min-h-[500px] hidden lg:block">
          {/* Vertical Separators */}
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
            <div className="absolute h-full w-px bg-[rgba(70,121,224,0.1)]" style={{ left: '25%' }} />
            <div className="absolute h-full w-px bg-[rgba(70,121,224,0.1)]" style={{ left: '50%' }} />
            <div className="absolute h-full w-px bg-[rgba(70,121,224,0.1)]" style={{ left: '75%' }} />
          </div>

          {/* Timeline Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.3,
                },
              },
            }}
            className="relative grid grid-cols-4 gap-0"
            style={{ zIndex: 3 }}
          >
            {currentData.map((item, index) => (
              <motion.article
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
                className="group relative p-10 px-7 flex flex-col items-start cursor-pointer transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] bg-transparent border-l-[3px] border-l-transparent hover:bg-gradient-to-br hover:from-[rgba(70,121,224,0.08)] hover:to-[rgba(52,97,196,0.08)] hover:border-l-[#4679E0] hover:backdrop-blur-sm hover:shadow-[inset_0_0_60px_rgba(70,121,224,0.1)] hover:translate-x-1"
              >
                {item.badge && (
                  <div className="absolute top-8 right-6 bg-[#4679E0] text-white text-[10px] font-semibold uppercase px-3 py-1.5 rounded-xl shadow-[0_2px_8px_rgba(70,121,224,0.4)] animate-pulse">
                    {item.badge.text}
                  </div>
                )}

                <p
                  className="text-white text-lg font-bold mb-4 tracking-wide transition-colors duration-300 group-hover:text-[#4679E0]"
                  style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
                >
                  {item.step}
                </p>

                <h3
                  className="text-white text-[22px] font-bold leading-[1.3] mb-4 transition-colors duration-300 group-hover:text-[#5A8DF5]"
                  style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-white/70 text-[14px] font-light leading-[1.6] mb-5 transition-colors duration-300 group-hover:text-white/85"
                  style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
                >
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1.5 text-[11px] font-medium rounded-[14px] whitespace-nowrap bg-[rgba(70,121,224,0.12)] border border-[rgba(70,121,224,0.25)] text-[#5A8DF5] transition-all duration-300 hover:bg-[rgba(70,121,224,0.2)] hover:border-[rgba(70,121,224,0.5)] hover:text-[#4679E0] hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(70,121,224,0.2)]"
                      style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        {/* Tablet Timeline (2x2 Grid) */}
        <div className="relative min-h-[500px] hidden md:block lg:hidden">
          {/* Center separator for tablet */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute h-full w-px bg-[rgba(70,121,224,0.1)]" style={{ left: '50%' }} />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15,
                  delayChildren: 0.3,
                },
              },
            }}
            className="relative grid grid-cols-2 gap-0"
            style={{ zIndex: 3 }}
          >
            {currentData.map((item, index) => (
              <motion.article
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeOut" },
                  },
                }}
                className="group relative p-8 px-5 flex flex-col cursor-pointer transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] bg-transparent border-l-[3px] border-l-transparent hover:bg-gradient-to-br hover:from-[rgba(70,121,224,0.08)] hover:to-[rgba(52,97,196,0.08)] hover:border-l-[#4679E0] hover:translate-x-1"
              >
                {item.badge && (
                  <div className="absolute top-4 right-4 bg-[#4679E0] text-white text-[10px] font-semibold uppercase px-3 py-1.5 rounded-xl shadow-[0_2px_8px_rgba(70,121,224,0.4)] animate-pulse">
                    {item.badge.text}
                  </div>
                )}

                <p className="text-white text-base font-bold mb-3 transition-colors duration-300 group-hover:text-[#4679E0]">{item.step}</p>
                <h3 className="text-white text-xl font-bold leading-[1.3] mb-3 transition-colors duration-300 group-hover:text-[#5A8DF5]">{item.title}</h3>
                <p className="text-white/70 text-sm font-light leading-[1.6] mb-4 transition-colors duration-300 group-hover:text-white/85">{item.description}</p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium rounded-2xl whitespace-nowrap bg-[rgba(70,121,224,0.12)] border border-[rgba(70,121,224,0.25)] text-[#5A8DF5] transition-all duration-300 hover:bg-[rgba(70,121,224,0.2)] hover:border-[rgba(70,121,224,0.5)] hover:text-[#4679E0]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>

        {/* Mobile Vertical Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
              },
            },
          }}
          className="md:hidden space-y-0 relative"
        >
          {currentData.map((item, index) => (
            <motion.article
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className="group relative p-6 px-4 flex flex-col cursor-pointer transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] bg-transparent border-l-[3px] border-l-transparent active:bg-gradient-to-br active:from-[rgba(70,121,224,0.08)] active:to-[rgba(52,97,196,0.08)] active:border-l-[#4679E0]"
            >
              {item.badge && (
                <div className="inline-block bg-[#4679E0] text-white text-[10px] font-semibold uppercase px-3 py-1.5 rounded-xl mb-3 shadow-[0_2px_8px_rgba(70,121,224,0.4)] animate-pulse self-start">
                  {item.badge.text}
                </div>
              )}

              <p className="text-white text-base font-bold mb-3">{item.step}</p>
              <h3 className="text-white text-xl font-bold leading-[1.3] mb-2">{item.title}</h3>
              <p className="text-white/70 text-sm font-light leading-[1.6] mb-4">{item.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {item.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 text-xs font-medium rounded-2xl bg-[rgba(70,121,224,0.12)] border border-[rgba(70,121,224,0.25)] text-[#5A8DF5]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Conclusion Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          className="mt-20 pt-20 border-t border-[rgba(70,121,224,0.15)]"
        >
          <p
            className="text-[#4679E0] text-base font-medium uppercase tracking-[2px] mb-5"
            style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
          >
            Beyond the Timeline
          </p>

          <p
            className="text-white/70 text-lg font-light leading-[1.6] max-w-[900px]"
            style={{ fontFamily: 'Helvetica Neue, Arial, sans-serif' }}
          >
            Through continuous learning and hands-on experience, I've developed a comprehensive skill set in full-stack development and UI/UX design. Each step of my journey has contributed to my ability to create meaningful digital solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};