import { useState } from "react";
import { motion } from "framer-motion";
import { ProjectCard } from "./ProjectCard";

// Import project images - Update these paths according to your project structure
import onlineHelpDesk from "@/assets/projects/student-help-desk.png";
import vehicleService from "@/assets/projects/vehicle-service-center.png";
import movieExplorer from "@/assets/projects/movie-explorer.png";
import foodDietApp from "@/assets/projects/food-diet-app.png";
import petCareApp from "@/assets/projects/et-care-app.png";
import taskManagement from "@/assets/projects/task-management.png";
import clothingShop from "@/assets/projects/clothing-shop.png";

const allProjects = [
  // Web Applications
  {
    number: "01",
    title: "Online Student Help Desk",
    category: "Web Application",
    tech: ["Java", "HTML5", "CSS3", "SQL"],
    description: "Student Profile Management System allowing creating, updating, and managing student profiles efficiently for streamlined support and assistance",
    type: "web",
    projectType: "team" as const,
    image: onlineHelpDesk,
    liveUrl: "https://github.com/it22054722/Online-Help-Desk.git",
    githubUrl: "https://github.com/it22054722/Online-Help-Desk.git",
  },
  {
    number: "02",
    title: "Vehicle Service Management System",
    category: "Web Application",
    tech: ["React", "Express", "Node.js", "MongoDB"],
    description: "Trainee Management System that streamlines trainee onboarding, scheduling, and progress tracking for vehicle repair and service operations",
    type: "web",
    projectType: "team" as const,
    image: vehicleService,
    liveUrl: "https://github.com/it22054722/vehicle-service-system.git",
    githubUrl: "https://github.com/it22054722/vehicle-service-system.git",
  },
  {
    number: "03",
    title: "Movie Explorer",
    category: "Web Application",
    tech: ["React", "Node.js", "TMDb API"],
    description: "Web app for discovering movies with personalized recommendations and favorites, powered by TMDb API for accurate and up-to-date details",
    type: "web",
    projectType: "personal" as const,
    image: movieExplorer,
    liveUrl: "https://github.com/it22054722/Movie-Explorer.git",
    githubUrl: "https://github.com/it22054722/Movie-Explorer.git",
  },
  
  // Mobile Applications
  {
    number: "04",
    title: "Pet Care Application - Paw Hub",
    category: "Mobile App",
    tech: ["Android Studio", "Java/Kotlin"],
    description: "Clean and engaging pet care app helping pet owners manage their pets' needs from health to grooming with easy navigation",
    type: "mobile",
    projectType: "personal" as const,
    image: petCareApp,
    liveUrl: "https://github.com/it22054722/Pet_Mobile_Application.git",
    githubUrl: "https://github.com/it22054722/Pet_Mobile_Application.git",
  },
  {
    number: "05",
    title: "Task Management System - FocusTime",
    category: "Mobile App",
    tech: ["Android Studio", "Shared Preferences"],
    description: "Task management app helping users organize tasks with add, update, delete features and countdown timers to ensure productivity",
    type: "mobile",
    projectType: "personal" as const,
    image: taskManagement,
    liveUrl: "https://github.com/it22054722/ToDoList_Mobile_Application.git",
    githubUrl: "https://github.com/it22054722/ToDoList_Mobile_Application.git",
  },
  
  // UI/UX Designs
  {
    number: "06",
    title: "Food Diet Application",
    category: "UI/UX Design",
    tech: ["Figma"],
    description: "Visually appealing and intuitive interface helping users plan meals, track nutrition, and achieve diet goals with seamless navigation",
    type: "design",
    projectType: "personal" as const,
    image: foodDietApp,
    liveUrl: "https://www.figma.com/proto/KjlAvCzoitPdREN7ZiSG4X/diet-app-prototypes?node-id=122-195&t=CmZ8nGnThvBkVZpE-1",
  },
  {
    number: "07",
    title: "Women Clothing Shop - Couture Avenue",
    category: "UI/UX Design",
    tech: ["Figma"],
    description: "Sleek and stylish interface showcasing women's clothing collections with elegant and user-friendly navigation for seamless shopping",
    type: "design",
    projectType: "personal" as const,
    image: clothingShop,
    liveUrl: "https://www.figma.com/proto/1o9EN0hzzPMnYMSPTLeCyu/Clothing-Shop?node-id=0-1&t=XvNBRNv87fPFj1VN-1",
  },
];

type FilterType = "all" | "web" | "mobile" | "design";

export const AllProjects = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredProjects =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((project) => project.type === activeFilter);

  const filters: { label: string; value: FilterType }[] = [
    { label: "All", value: "all" },
    { label: "Web Apps", value: "web" },
    { label: "Mobile Apps", value: "mobile" },
    { label: "UI/UX Designs", value: "design" },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 gradient-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm md:text-base font-medium uppercase tracking-wider text-[#4679E0] mb-4"
          >
            MY PORTFOLIO
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5"
          >
            All Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-foreground/70 text-base md:text-lg leading-relaxed font-light max-w-[800px] mx-auto"
          >
            A showcase of web applications, mobile apps, and UI/UX designs demonstrating quality engineering expertise and creative problem-solving.
          </motion.p>
        </div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.value
                  ? "bg-[#4679E0] text-white shadow-lg shadow-[#4679E0]/30"
                  : "bg-card text-foreground/70 hover:bg-card/80 hover:text-foreground"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
                ease: [0.4, 0, 0.2, 1]
              }}
              layout
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};