import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress, 
  SiKotlin,
  SiSpringboot,
  SiFigma,
  SiGit,
  SiGithub,
  SiJavascript,
  SiTypescript,
  SiTailwindcss
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const technologies = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Express", Icon: SiExpress, color: "#FFFFFF" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "Kotlin", Icon: SiKotlin, color: "#7F52FF" },
  { name: "Java", Icon: FaJava, color: "#007396" },
  { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "#181717" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
];

export const TrustIndicators = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-sm font-medium uppercase tracking-wider text-[#4679E0] mb-4">
            TECH STACK
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
            Technologies & Tools
          </h2>
          <p className="text-foreground/70 text-base md:text-lg leading-relaxed font-light max-w-[700px] mx-auto">
            A curated selection of industry-standard technologies and tools I use to build robust, scalable, and innovative digital solutions.
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex gap-8 animate-scroll">
            {/* Render technologies 3 times for seamless infinite scroll */}
            {[...technologies, ...technologies, ...technologies].map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex-shrink-0 flex flex-col items-center gap-3 group cursor-pointer"
              >
                <div className="w-20 h-20 rounded-2xl bg-card flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/10 border border-border group-hover:border-primary/30">
                  <tech.Icon 
                    className="w-12 h-12" 
                    style={{ color: tech.color }}
                  />
                </div>
                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: max-content;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};