
import React from "react";
import ProjectCard from "./ui/ProjectCard";
import GlowingButton from "./ui/GlowingButton";
import AnimatedText from "./ui/AnimatedText";

const Projects: React.FC = () => {
  const featuredProjects = [
    {
      title: "E-commerce Dashboard",
      description: "An Angular-based admin dashboard for an e-commerce platform with real-time analytics, inventory management, and order processing features.",
      tags: ["Angular", "RxJS", "NgRx", "Chart.js"],
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
      projectUrl: "#project-1",
    },
    {
      title: "Travel Booking Platform",
      description: "A responsive travel booking website with advanced filtering, payment integration, and personalized user experiences.",
      tags: ["Angular", "TypeScript", "SCSS", "RESTful APIs"],
      imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2421&auto=format&fit=crop",
      projectUrl: "#project-2",
    },
    {
      title: "Prompting Is All You Need",
      description: "A modern web application showcasing advanced prompting techniques for AI systems and language models.",
      tags: ["React", "Next.js", "TypeScript", "AI Tools"],
      imageUrl: "/lovable-uploads/e88fc2dd-9340-4e90-bd84-86cb6ab37502.png",
      projectUrl: "https://v0-prompting-is-all-you-need-black.vercel.app/",
    },
    {
      title: "JB Personal Training Gym",
      description: "A responsive website designed for a gym showcasing their customers' transformation images and videos with testimonials and service offerings.",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      imageUrl: "/lovable-uploads/38bc79a5-b495-4732-8708-ac4ea1d14b65.png",
      projectUrl: "https://jbpersonaltraininggym.com",
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl font-bold relative mb-3">
            <span className="text-gradient">Featured Projects</span>
            <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work. Each project showcases different skills and challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <div 
              key={index} 
              className="opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1 + 0.3}s`, animationFillMode: "forwards" }}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <AnimatedText 
            text="Interested in seeing more of my work?"
            className="text-xl mb-6 block"
            animation="fade"
          />
          <GlowingButton 
            onClick={() => window.open("https://github.com", "_blank")}
            className="mx-auto"
          >
            View All Projects
          </GlowingButton>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
    </section>
  );
};

export default Projects;
