
import React from "react";
import { Code, Users, Monitor } from "lucide-react";
import AnimatedText from "./ui/AnimatedText";

const About: React.FC = () => {
  const stats = [
    { value: "3+", label: "YEARS EXPERIENCE" },
    { value: "30%", label: "IMPROVED USER ENGAGEMENT" },
    { value: "20%", label: "REDUCED LOAD TIMES" },
  ];

  const services = [
    {
      icon: <Monitor size={24} className="text-pink-400" />,
      title: "FRONTEND DEVELOPMENT",
      description: "BUILDING RESPONSIVE AND USER-FRIENDLY WEB APPLICATIONS WITH ANGULAR, HTML, AND CSS.",
    },
    {
      icon: <Code size={24} className="text-pink-400" />,
      title: "PERFORMANCE OPTIMIZATION",
      description: "IMPLEMENTING CODE-SPLITTING AND LAZY LOADING TECHNIQUES TO IMPROVE PAGE LOAD TIMES.",
    },
    {
      icon: <Users size={24} className="text-pink-400" />,
      title: "COLLABORATION",
      description: "WORKING EFFECTIVELY WITH DESIGNERS, BACKEND DEVELOPERS, AND STAKEHOLDERS USING AGILE METHODOLOGY.",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl font-bold relative mb-3">
            <span className="text-gradient">ABOUT ME</span>
            <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto uppercase tracking-wide">
            PASSIONATE FRONTEND DEVELOPER WITH EXPERTISE IN CREATING MODERN WEB APPLICATIONS
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-4 uppercase tracking-wide">
              <AnimatedText text="SENIOR SYSTEMS ENGINEER WITH A PASSION FOR CREATING EXCEPTIONAL USER EXPERIENCES" animation="fade" />
            </h3>
            
            <div className="space-y-4 mb-6">
              <p className="text-muted-foreground uppercase tracking-wide">
                WITH OVER 3 YEARS OF EXPERIENCE IN FRONTEND DEVELOPMENT AT INFOSYS LIMITED, I SPECIALIZE IN BUILDING RESPONSIVE, USER-FRIENDLY WEB APPLICATIONS USING ANGULAR, HTML, AND CSS.
              </p>
              <p className="text-muted-foreground uppercase tracking-wide">
                I HAVE IMPLEMENTED CODE-SPLITTING AND LAZY LOADING TECHNIQUES TO IMPROVE PAGE LOAD TIMES, RESULTING IN A 30% REDUCTION IN BOUNCE RATES AND 20% REDUCTION IN LOAD TIMES.
              </p>
              <p className="text-muted-foreground uppercase tracking-wide">
                MY EDUCATION IN ELECTRICAL AND ELECTRONICS ENGINEERING AND CERTIFICATIONS IN AGILE DEVELOPMENT AND ANGULAR COMPLEMENT MY PROFESSIONAL EXPERIENCE.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="gradient-border p-4 w-36">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative rounded-lg overflow-hidden glow-card">
              <div className="aspect-w-4 aspect-h-5 bg-gradient-to-br from-secondary to-black p-1">
                <img 
                  src="/lovable-uploads/d70fa21d-7e55-4b69-b0c7-3e03435264f8.png" 
                  alt="Pavan Kalyan Jilludimudi" 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-xl font-semibold mb-1 uppercase">PAVAN KALYAN JILLUDIMUDI</h4>
                <p className="text-pink-400 text-sm uppercase">SENIOR SYSTEMS ENGINEER</p>
                <div className="mt-2 text-xs text-muted-foreground">
                  <p>+918897878975 | PAVANKALYAN3771@GMAIL.COM</p>
                  <p>HYDERABAD, INDIA 500088</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24">
          <h3 className="text-2xl font-semibold text-center mb-12 uppercase tracking-wide">
            <AnimatedText text="WHAT I DO" animation="fade" className="inline-block" />
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-secondary rounded-lg p-6 border border-muted transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="mb-4 bg-muted w-12 h-12 rounded-lg flex items-center justify-center">
                  {service.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
