import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

// Import featured project images
import vehicleService from "@/assets/projects/vehicle-service-center.png";
import quizGame from "@/assets/projects/quiz-game-android.png";
import ecommerce from "@/assets/projects/e-commerce-site.png";
import dataHub from "@/assets/projects/data-hub.png";
import plantShop from "@/assets/projects/plant-shop-iu.png";
import academicScheduler from "@/assets/projects/academic-schedular.png";

const featuredProjects = [
  {
    number: "01",
    title: "Vehicle Service Management System",
    category: "Web Application (Team)",
    tech: ["MongoDB", "Express", "React", "Node"],
    description: "Comprehensive system for streamlining vehicle service records and repair management",
    image: vehicleService,
    liveUrl: "https://example.com/vehicle-service",
    githubUrl: "https://github.com/yourusername/vehicle-service",
  },
  {
    number: "02",
    title: "WordWizz - Word Guessing Game",
    category: "Mobile App (Personal)",
    tech: ["Kotlin", "APIs"],
    description: "Interactive word-guessing mobile app with timer and engaging gameplay",
    image: quizGame,
    githubUrl: "https://github.com/yourusername/wordwizz",
  },
  {
    number: "03",
    title: "E-Commerce Platform",
    category: "Web Application (Personal)",
    tech: ["React", "Node.js", "MongoDB"],
    description: "Modern luxury fashion e-commerce platform with seamless shopping experience",
    image: ecommerce,
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/yourusername/ecommerce",
  },
  {
    number: "04",
    title: "Project DataHub",
    category: "Web Application (Personal)",
    tech: ["React", "OpenWeather API", "GNews API"],
    description: "Real-time weather updates and news aggregator with multiple API integrations",
    image: dataHub,
    liveUrl: "https://example.com/datahub",
    githubUrl: "https://github.com/yourusername/datahub",
  },
  {
    number: "05",
    title: "Plant Shop Application",
    category: "UI/UX Design (Personal)",
    tech: ["Figma", "Canva", "Shadow Plugins"],
    description: "Serene mobile UI with green-themed minimalist design for plant shopping",
    image: plantShop,
    liveUrl: "https://www.figma.com/your-design",
  },
  {
    number: "06",
    title: "Academic Scheduler",
    category: "Web Application (Team)",
    tech: ["React", "Express", "Node", "MongoDB"],
    description: "Personalized academic schedule management with admin panel",
    image: academicScheduler,
    liveUrl: "https://example.com/scheduler",
    githubUrl: "https://github.com/yourusername/scheduler",
  },
];

export const FeaturedProjects = () => {
  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16 text-foreground"
        >
          Featured Work
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.number}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <ProjectCard {...project} featured />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
