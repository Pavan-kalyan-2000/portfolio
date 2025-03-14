
import React from "react";
import { Code, Users, Monitor } from "lucide-react";
import AnimatedText from "./ui/AnimatedText";

const About: React.FC = () => {
  const stats = [
    { value: "3+", label: "Years Experience" },
    { value: "20+", label: "Projects Completed" },
    { value: "15+", label: "Happy Clients" },
  ];

  const services = [
    {
      icon: <Monitor size={24} className="text-pink-400" />,
      title: "Frontend Development",
      description: "Building responsive and performant user interfaces with Angular, HTML, and CSS.",
    },
    {
      icon: <Code size={24} className="text-pink-400" />,
      title: "UI/UX Implementation",
      description: "Transforming design mockups into functional and visually appealing web applications.",
    },
    {
      icon: <Users size={24} className="text-pink-400" />,
      title: "Team Collaboration",
      description: "Working effectively with designers, backend developers, and stakeholders.",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl font-bold relative mb-3">
            <span className="text-gradient">About Me</span>
            <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm a passionate frontend developer with expertise in creating modern web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl font-semibold mb-4">
              <AnimatedText text="Frontend Developer with a passion for creating exceptional user experiences" animation="fade" />
            </h3>
            
            <div className="space-y-4 mb-6">
              <p className="text-muted-foreground">
                With over 3 years of experience in frontend development, I specialize in building modern, responsive, and performant web applications using Angular, HTML, and CSS.
              </p>
              <p className="text-muted-foreground">
                I enjoy transforming complex problems into simple, beautiful, and intuitive designs. My goal is to create software that not only functions efficiently but also provides pixel-perfect user experiences.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="gradient-border p-4 w-32">
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative rounded-lg overflow-hidden glow-card">
              <div className="aspect-w-4 aspect-h-5 bg-gradient-to-br from-secondary to-black p-1">
                <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center rounded-lg">
                  <div className="w-full h-full bg-black/30 backdrop-blur-sm"></div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-xl font-semibold mb-1">Alex Johnson</h4>
                <p className="text-pink-400 text-sm">Frontend Developer</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-24">
          <h3 className="text-2xl font-semibold text-center mb-12">
            <AnimatedText text="What I Do" animation="fade" className="inline-block" />
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
