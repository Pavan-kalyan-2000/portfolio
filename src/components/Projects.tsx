
import React from "react";
import ProjectCard from "./ui/ProjectCard";
import GlowingButton from "./ui/GlowingButton";
import AnimatedText from "./ui/AnimatedText";

const Projects: React.FC = () => {
  const featuredProjects = [
    {
      title: "TalkTalk Telecom",
      description: "A telecom project that provides broadband and TV services. I worked there for about 2 years, updating new features as per the designs.",
      tags: ["HTML", "CSS", "AngularJS", "Responsive Design"],
      imageUrl: "/lovable-uploads/5e0f542d-2ea4-409e-9ffa-7bc6d38828e1.png",
      projectUrl: "https://www.talktalk.co.uk/",
    },
    {
      title: "Openreach HUD",
      description: "Heads-Up Display (HUD) is the system simplifies customer service at BT Openreach. I implemented the whole new UI that improved user experience and optimized performance.",
      tags: ["Angular", "TypeScript", "CSS3", "Responsive UI"],
      imageUrl: "/lovable-uploads/ea38824f-63ac-4c86-afe2-54848f029b7d.png",
      projectUrl: "https://www.infosys.com/industries/communication-services/case-studies/customer-service-bt-openreach.html",
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
