import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Linkedin, Github, Twitter, Instagram } from "lucide-react";
import heroPortrait from "@/assets/profile-hero.png";
import cvPdf from "@/assets/cv/Madora_Weerasinghe.pdf";
import uniBg from "@/assets/SLIIT.jpg";
import vscodeIcon from "@/assets/vscode-icon.svg";
import intellijIcon from "@/assets/intellij-icon.svg";
import playwrightIcon from "@/assets/playwright-icon.png";
import jiraIcon from "@/assets/jira-logo.png";
import seleniumIcon from "@/assets/selenimun-icon.png";
import testRailIcon from "@/assets/testtrail-icon2.png";

export const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = ["QA Engineer", "Web Developer", "IT Undergraduate"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-[#1a1a1a] relative overflow-hidden pt-20 md:pt-32 pb-8 md:pb-16 flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 w-full"
    >
      <div className="w-full max-w-[1600px] bg-[#1a1a1a] rounded-[20px] p-3 sm:p-5 shadow-[0_4px_10px_rgba(0,0,0,0.3)]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 lg:grid-rows-2 gap-3 sm:gap-4 w-full overflow-hidden">
          
          {/* Portrait Box - Grid Position: 1/3, 1/3 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="lg:col-span-2 lg:row-span-2 rounded-[20px] overflow-hidden min-h-[250px] transition-all duration-300"
          >
            <img
              src={heroPortrait}
              alt="Akash De Alwis Portrait"
              className="w-full h-full object-cover rounded-[20px]"
            />
          </motion.div>

          {/* Intro Box - Grid Position: 3/5, 1/2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 lg:col-start-3 lg:row-start-1 bg-[#3a3a3a] rounded-[20px] p-4 sm:p-6 min-h-[200px] sm:min-h-[250px] shadow-[0_4px_15px_rgba(0,0,0,0.18)] transition-all duration-300"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-3"
              style={{ fontFamily: "Helvetica Neue, system-ui, -apple-system, sans-serif" }}
            >
              Hi, I'm <span className="text-[#4679E0]" style={{ textShadow: "0 2px 5px rgba(70, 121, 224, 0.3)" }}>Madora Weerasinghe</span>
            </motion.h1>

            {/* Role Switcher */}
            <div className="flex flex-wrap items-center gap-2 mb-4 sm:mb-6">
              <span className="text-[#dddddd] text-sm sm:text-base" style={{ fontFamily: "Helvetica Neue, system-ui" }}>
                I'm a
              </span>
              <div className="relative h-6 overflow-hidden min-w-[150px] sm:min-w-[180px]">
                {roles.map((role, index) => (
                  <motion.span
                    key={role}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: currentRoleIndex === index ? 1 : 0,
                      y: currentRoleIndex === index ? 0 : currentRoleIndex > index ? -20 : 20,
                    }}
                    transition={{ duration: 0.5 }}
                    className="absolute left-0 text-[#4679E0] text-sm sm:text-base font-bold"
                    style={{ fontFamily: "Helvetica Neue, system-ui" }}
                  >
                    {role}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <motion.a
              href={cvPdf}
              download="Madora_w.pdf"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-br from-[#4679E0] to-[#2E5BB8] text-white px-4 sm:px-5 py-2.5 sm:py-3 rounded-[20px] shadow-[0_4px_15px_rgba(70,121,224,0.3)] hover:from-[#5689F0] hover:to-[#4679E0] hover:-translate-y-1 hover:shadow-[0_6px_20px_rgba(70,121,224,0.5)] transition-all duration-300 group"
              style={{ fontFamily: "Helvetica Neue, system-ui" }}
            >
              <span className="text-xs sm:text-sm font-medium">Download CV</span>
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white flex items-center justify-center group-hover:bg-[#4679E0] transition-colors">
                <ArrowRight className="w-3.5 h-3.5 text-[#1a1a1a] -rotate-45" />
              </div>
            </motion.a>
          </motion.div>

          {/* University & Tools Container - Grid Position: 5/6, 1/2 */}
          <div className="lg:col-start-5 lg:row-start-1 flex flex-col gap-4">
            {/* University Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative bg-[#111] bg-cover bg-center rounded-[20px] overflow-hidden min-h-[145px] flex-1 shadow-[0_4px_15px_rgba(0,0,0,0.2)] transition-all duration-300"
              style={{ backgroundImage: `url(${uniBg})` }}
              aria-label="SLIIT university card"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#4679E0]/30 to-[#1a1a1a]/70 z-10" />
              <span className="absolute top-4 left-5 z-20 text-white text-xl font-bold tracking-wide" style={{ fontFamily: "Helvetica Neue, system-ui" }}>
                SLIIT
              </span>
              <a
                href="https://www.sliit.lk/graduate-studies/programms/msc-programmes/?utm_campaign=&utm_adgroup=&gad_campaignid=23297490840"
                download
                title="Download Result Sheet"
                className="absolute top-3.5 right-4 z-20 w-8 h-8 rounded-full bg-white hover:bg-[#4679E0] flex items-center justify-center transition-colors group"
              >
                <ArrowDown className="w-4 h-4 text-[#1a1a1a] group-hover:text-white" />
              </a>
              <div className="absolute left-5 bottom-11 z-20 flex gap-1">
                {[true, true, true, true, true, true, false, false].map((filled, i) => (
                  <div
                    key={i}
                    className={`w-[18px] h-2.5 rounded-sm ${filled ? "bg-[#4679E0]" : "bg-white"}`}
                  />
                ))}
              </div>
              <span className="absolute left-5 bottom-4 z-20 text-white text-sm opacity-85" style={{ fontFamily: "Helvetica Neue, system-ui" }}>
                my university journey
              </span>
            </motion.div>

            {/* Tools Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-[#4679E0] rounded-[20px] min-h-[100px] flex-1 p-3 sm:p-4 shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:transform hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(70,121,224,0.18)] transition-all duration-300 flex items-center justify-center"
            >
              <div className="flex gap-2 sm:gap-3 justify-center items-center flex-wrap">
                {[
                  { name: "Playwright", icon: playwrightIcon },
                  { name: "vscode", icon: vscodeIcon },
                  { name: "intelij", icon: intellijIcon },
                  { name: "TestRail", icon: testRailIcon }
                ].map((tool, i) => (
                  <div
                    key={i}
                    title={tool.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white shadow-[0_2px_8px_rgba(0,0,0,0.15)] flex items-center justify-center hover:scale-110 hover:shadow-[0_4px_12px_rgba(0,0,0,0.25)] transition-all cursor-pointer p-2"
                  >
                    <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Location Map - Grid Position: 5/6, 2/3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.5 }}
            className="lg:col-start-5 lg:row-start-2 bg-[#3a3a3a] rounded-[20px] overflow-hidden min-h-[150px] hover:transform hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(70,121,224,0.18)] transition-all duration-300"
          >
            <iframe
              src="https://www.google.com/maps?q=6.7691,79.9406&z=15&output=embed"
              title="Location: Panadura, Sri Lanka"
              className="w-full h-full min-h-[120px] border-0 rounded-2xl"
              loading="lazy"
            />
          </motion.div>

          {/* Bio Box - Grid Position: 3/4, 2/3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3 }}
            className="lg:col-start-3 lg:row-start-2 bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] border border-[#4679E0] rounded-[20px] min-h-[150px] p-4 shadow-[0_0_10px_rgba(70,121,224,0.2)] flex items-center justify-center hover:transform hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(70,121,224,0.18)] transition-all duration-300"
          >
             <p className="text-[#dddddd] text-sm leading-relaxed text-center font-light" style={{ fontFamily: "Helvetica Neue, system-ui" }}>
              I'm an <span className="text-[#4679E0] font-semibold">Quality Engineer</span> I’m passionate about ensuring software quality and user satisfaction. <span className="text-[#4679E0] font-semibold">With hands-on experience in manual, regression, and automation testing</span>, ’m eager to keep growing in the field of quality engineering while contributing to innovative and impactful software projects.
            </p>
          </motion.div>

          {/* Tech Stack and Social Container - Grid Position: 4/5, 2/3 */}
          <div className="lg:col-start-4 lg:row-start-2 flex flex-col gap-4">
            {/* Favorite Testing Tools */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="bg-[#3a3a3a] rounded-[15px] p-3 sm:p-4 flex-1 shadow-[0_2px_10px_rgba(0,0,0,0.3)] text-center hover:transform hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(70,121,224,0.18)] transition-all duration-300"
            >
              <h3 className="text-white text-xs sm:text-sm font-medium mb-2 sm:mb-3" style={{ fontFamily: "Helvetica Neue, system-ui" }}>
                Testing Tools
              </h3>
              <div className="flex gap-1.5 sm:gap-2 justify-center flex-wrap">
                {[
                  { name: "Playwright", icon: playwrightIcon },
                  { name: "Jira", icon: jiraIcon },
                  { name: "Selenium", icon: seleniumIcon },
                  { name: "TestRail", icon: testRailIcon }
                ].map((tool, i) => (
                  <div
                    key={i}
                    title={tool.name}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-white shadow-[0_2px_8px_rgba(0,0,0,0.15)] flex items-center justify-center hover:scale-110 hover:shadow-[0_4px_12px_rgba(0,0,0,0.25)] transition-all cursor-pointer p-2"
                  >
                    <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social Connect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 0.7 }}
              className="bg-[#4679E0] rounded-[15px] p-3 sm:p-4 flex-1 shadow-[0_2px_10px_rgba(0,0,0,0.3)] flex items-center justify-center hover:transform hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(70,121,224,0.18)] transition-all duration-300"
            >
              <div className="flex gap-1.5 sm:gap-2.5 justify-center flex-wrap">
                {[
                  { Icon: Linkedin, url: "https://www.linkedin.com/in/madora-weerasinghe?utm_source=share_via&utm_content=profile&utm_medium=member_ios", title: "LinkedIn" },
                    { Icon: Github, url: "https://github.com/it22054722", title: "GitHub" },
                    { Icon: Twitter, url: "https://x.com/madora2001?s=11", title: "X" },
                    { Icon: Instagram, url: "https://www.instagram.com/_m_a_d_o_r_a_?igsh=MXJodDJneDNoaGoxYQ==&utm_source=ig_contact_invite", title: "Instagram" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={social.title}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#1a1a1a] text-white shadow-[0_2px_8px_rgba(0,0,0,0.3)] flex items-center justify-center hover:bg-white hover:text-[#4679E0] hover:scale-105 hover:shadow-[0_4px_12px_rgba(70,121,224,0.3)] transition-all flex-shrink-0"
                  >
                    <social.Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};