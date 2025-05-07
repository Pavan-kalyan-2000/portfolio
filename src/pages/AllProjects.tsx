
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ui/ProjectCard";
import GlowingButton from "@/components/ui/GlowingButton";
import AnimatedText from "@/components/ui/AnimatedText";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AllProjects = () => {
  const allProjects = [
    // Featured projects (same as on home page)
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
    // Additional projects that will be shown in the all projects page
    {
      title: "MIST Official Website",
      description: "Official website for MIST with artist information, music releases, tour dates, and merchandise store.",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      imageUrl: "https://images.squarespace-cdn.com/content/v1/6152dcd28817d06c5e818ec3/cbcde944-44d1-4110-854d-745a95ed07e0/0E9A9235+2.jpg",
      projectUrl: "https://www.mistofficial.com/",
    },
    {
      title: "Alec Benjamin",
      description: "Official website for artist Alec Benjamin featuring music releases, videos, tour dates and merchandise.",
      tags: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      imageUrl: "https://www.alecbenjamin.com/sites/g/files/g2000014161/files/2022-06/alec-benjamin-hub.jpg",
      projectUrl: "https://www.alecbenjamin.com/",
    },
    {
      title: "Lil Eazzyy Official",
      description: "Official website for hip-hop artist Lil Eazzyy featuring music, videos, tour dates, and merchandise.",
      tags: ["HTML5", "CSS3", "JavaScript", "Interactive UI"],
      imageUrl: "https://www.lileazzyyofficial.com/sites/g/files/g2000014506/files/styles/suzuki_is_image_banner_desktop_1x/public/2021-09/eazzyy-d2c-header-mobile.jpg",
      projectUrl: "https://www.lileazzyyofficial.com/",
    },
    {
      title: "Bizzy Banks Official",
      description: "Official website for Brooklyn-based rapper Bizzy Banks with music, videos, tour dates, and merchandise.",
      tags: ["HTML5", "CSS3", "JavaScript", "Visual Design"],
      imageUrl: "https://www.bizzybanksofficial.com/sites/g/files/g2000014101/files/bizzybanksdotcomheader.jpg",
      projectUrl: "https://www.bizzybanksofficial.com/",
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2 className="inline-block text-3xl font-bold relative">
              <span className="text-gradient">All Projects</span>
              <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"></span>
            </h2>
            <Link to="/#projects">
              <GlowingButton className="!px-4 !py-2 text-sm">
                <ArrowLeft size={16} />
                Back to Featured
              </GlowingButton>
            </Link>
          </div>

          <AnimatedText 
            text="My complete portfolio showcasing a diverse range of projects and skills"
            className="text-muted-foreground max-w-2xl mx-auto text-center mb-10"
            animation="fade"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            {allProjects.map((project, index) => (
              <div 
                key={index} 
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1 + 0.2}s`, animationFillMode: "forwards" }}
              >
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AllProjects;
