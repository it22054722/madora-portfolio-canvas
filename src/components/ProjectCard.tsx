import { ExternalLink, Github, Users, User } from "lucide-react";

interface ProjectCardProps {
  number: string;
  title: string;
  category: string;
  tech: string[];
  description: string;
  image?: string;
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
  projectType?: "team" | "personal";
}

export const ProjectCard = ({
  number,
  title,
  category,
  tech,
  description,
  image,
  featured = false,
  liveUrl,
  githubUrl,
  projectType = "personal",
}: ProjectCardProps) => {
  return (
    <div
      className={`group bg-card rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-300 md:hover:-translate-y-2 hover:shadow-xl md:hover:shadow-2xl hover:shadow-[#4679E0]/10 md:hover:shadow-[#4679E0]/20 cursor-pointer ${
        featured ? "border border-[#4679E0]/20" : ""
      }`}
    >
      {/* Project Image */}
      <div className="aspect-video bg-gradient-to-br from-[#4679E0]/20 via-[#4679E0]/10 to-muted relative overflow-hidden">
        {image ? (
          <>
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 md:group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
          </>
        ) : (
          <div className="absolute inset-0 opacity-50">
            <div className="absolute top-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-[#4679E0] rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-[#3461C4] rounded-full blur-3xl" />
          </div>
        )}
        <div className="absolute bottom-2 left-2 md:bottom-4 md:left-4 z-10">
          <span className="text-[#4679E0] font-bold text-lg md:text-xl drop-shadow-lg">{number}</span>
        </div>
        
        {/* Team/Personal Badge */}
        <div className="absolute top-2 right-2 md:top-4 md:right-4 z-10">
          <div
            className={`flex items-center gap-1 px-2 md:px-3 py-1 md:py-1.5 rounded-full backdrop-blur-md transition-all duration-300 bg-[#4679E0]/20 border border-[#4679E0]/40 group-hover:bg-[#4679E0]/30`}
          >
            {projectType === "team" ? (
              <>
                <Users size={12} className="md:w-3.5 md:h-3.5 text-[#4679E0]" />
                <span className="text-[10px] md:text-xs font-medium text-[#4679E0]">Team</span>
              </>
            ) : (
              <>
                <User size={12} className="md:w-3.5 md:h-3.5 text-[#4679E0]" />
                <span className="text-[10px] md:text-xs font-medium text-[#4679E0]">Personal</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 space-y-3 md:space-y-4">
        <div>
          <p className="text-muted-foreground text-xs md:text-sm mb-1">{category}</p>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground group-hover:text-[#4679E0] transition-colors line-clamp-2">
            {title}
          </h3>
        </div>

        <div className="flex flex-wrap gap-1.5 md:gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="text-[10px] md:text-xs px-2 md:px-3 py-0.5 md:py-1 rounded-full border border-[#4679E0]/30 text-[#4679E0] bg-[#4679E0]/5"
            >
              {item}
            </span>
          ))}
        </div>

        <p className="text-foreground/70 text-xs md:text-sm leading-relaxed font-light line-clamp-3 md:line-clamp-none">
          {description}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 md:gap-3 mt-3 md:mt-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 bg-[#4679E0]/10 hover:bg-[#4679E0]/20 active:bg-[#4679E0]/25 border border-[#4679E0]/30 hover:border-[#4679E0]/50 rounded-lg text-[#4679E0] text-xs md:text-sm font-medium transition-all duration-300 md:hover:shadow-lg md:hover:shadow-[#4679E0]/20"
            >
              <ExternalLink size={14} className="md:w-4 md:h-4" />
              <span className="hidden sm:inline">Live Demo</span>
              <span className="sm:hidden">Demo</span>
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 bg-foreground/5 hover:bg-foreground/10 active:bg-foreground/15 border border-foreground/20 hover:border-foreground/30 rounded-lg text-foreground text-xs md:text-sm font-medium transition-all duration-300"
            >
              <Github size={14} className="md:w-4 md:h-4" />
              <span className="hidden sm:inline">GitHub Repo</span>
              <span className="sm:hidden">GitHub</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};