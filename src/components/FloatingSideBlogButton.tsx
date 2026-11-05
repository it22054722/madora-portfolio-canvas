import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const FloatingSideBlogButton = () => {
  return (
    <motion.a
      href="https://zencode002.hashnode.dev/"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: 1,
        ease: [0.4, 0, 0.2, 1]
      }}
      className="side-blog-button fixed right-0 top-1/2 -translate-y-1/2 z-[999] 
                 w-[32px] h-[110px] md:w-[38px] md:h-[130px] lg:w-[40px] lg:h-[140px]
                 rounded-l-[16px] md:rounded-l-[20px] flex flex-col items-center justify-center gap-1.5 md:gap-2 p-2 md:p-3 px-1 md:px-1.5
                 cursor-pointer transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                 hover:w-[36px] hover:md:w-[46px] hover:lg:w-[48px] 
                 hover:-translate-x-[3px] hover:md:-translate-x-[5px] hover:scale-[1.02]
                 active:translate-x-[1px] active:md:translate-x-[2px] active:scale-[0.98]
                 focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-white focus-visible:outline-offset-2
                 flex"
      style={{
        background: "linear-gradient(180deg, #FF6B35 0%, #FF4820 100%)",
        boxShadow: "-4px 4px 20px rgba(255, 107, 53, 0.4), -2px 2px 8px rgba(0, 0, 0, 0.2)",
      }}
      whileHover={{
        boxShadow: "-6px 6px 28px rgba(255, 107, 53, 0.5), -3px 3px 12px rgba(0, 0, 0, 0.3)",
      }}
      whileTap={{
        boxShadow: "-2px 2px 12px rgba(255, 107, 53, 0.3), -1px 1px 6px rgba(0, 0, 0, 0.2)",
      }}
      aria-label="Visit Blog - Opens in new tab"
      role="link"
      tabIndex={0}
    >
      <span 
        className="button-text text-[#0a0a0a] font-medium text-[11px] md:text-[12px] lg:text-[13px] 
                   tracking-[0.2px] md:tracking-[0.3px] whitespace-nowrap text-center rotate-180 transition-transform duration-300"
        style={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          fontFamily: "'Helvetica Neue', -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif",
        }}
      >
        Visit Blog
      </span>
      <MessageCircle 
        className="button-icon mt-0.5 md:mt-1 relative transition-transform duration-300 w-[16px] h-[16px] md:w-[18px] md:h-[18px]" 
        color="#0a0a0a"
        strokeWidth={2}
      />
    </motion.a>
  );
};
