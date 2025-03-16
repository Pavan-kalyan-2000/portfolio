
import React from "react";
import { Progress } from "@/components/ui/progress";
import AnimatedText from "./ui/AnimatedText";

const Skills: React.FC = () => {
  const mainSkills = [
    { name: "HTML5", level: 95 },
    { name: "CSS3/SCSS", level: 90 },
    { name: "ANGULAR", level: 85 },
    { name: "JAVASCRIPT", level: 85 },
    { name: "RESPONSIVE DESIGN", level: 90 },
    { name: "UI/UX PRINCIPLES", level: 80 },
  ];

  const otherSkills = [
    "VERSION CONTROL (GIT)", "PERFORMANCE OPTIMIZATION", "CROSS-BROWSER COMPATIBILITY", 
    "AGILE METHODOLOGY", "JIRA", "TYPESCRIPT",
    "CODE-SPLITTING", "LAZY LOADING", "WIREFRAMES & PROTOTYPES"
  ];

  return (
    <section id="skills" className="py-24 bg-black/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl font-bold relative mb-3 uppercase tracking-wide">
            <span className="text-gradient">MY SKILLS</span>
            <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto uppercase tracking-wide">
            I'M PROFICIENT IN A VARIETY OF FRONTEND TECHNOLOGIES, SPECIALIZING IN ANGULAR DEVELOPMENT.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-8 uppercase tracking-wide">
              <AnimatedText text="TECHNICAL PROFICIENCY" animation="fade" />
            </h3>
            
            <div className="space-y-6">
              {mainSkills.map((skill, index) => (
                <div key={index} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${index * 0.1 + 0.3}s`, animationFillMode: "forwards" }}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-pink-400">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2 bg-muted">
                    <div className="h-full bg-gradient-to-r from-pink-400 to-pink-600 rounded-full" style={{ width: `${skill.level}%` }}></div>
                  </Progress>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-8 uppercase tracking-wide">
              <AnimatedText text="ADDITIONAL SKILLS & TOOLS" animation="fade" />
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {otherSkills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-secondary rounded-full border border-muted text-sm opacity-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.05 + 0.5}s`, animationFillMode: "forwards" }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
