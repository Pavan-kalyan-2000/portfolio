
import React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  projectUrl: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  imageUrl,
  projectUrl,
  className,
}) => {
  return (
    <div 
      className={cn(
        "glow-card rounded-lg overflow-hidden bg-secondary group transition-all duration-300 h-full flex flex-col",
        className
      )}
    >
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
        <div className="h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
          />
        </div>
        <a 
          href={projectUrl} 
          className="absolute top-4 right-4 bg-black/60 text-white p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity z-20"
          target="_blank"
          rel="noopener noreferrer"
        >
          <ArrowUpRight size={20} />
        </a>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-xs font-medium bg-muted px-2 py-1 rounded-full text-pink-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">{description}</p>
        <a 
          href={projectUrl} 
          className="mt-auto text-pink-400 font-medium flex items-center text-sm hover:text-pink-300 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
          <ArrowUpRight size={16} className="ml-1" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
