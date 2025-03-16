
import React from "react";
import AnimatedText from "./ui/AnimatedText";
import { Award, Trophy, Star, CheckCircle2 } from "lucide-react";

const Certifications: React.FC = () => {
  const certifications = [
    {
      title: "INFOSYS GLOBAL AGILE DEVELOPER CERTIFICATION",
      description: "CERTIFIED IN AGILE DEVELOPMENT METHODOLOGIES AND PRACTICES",
      icon: <Award className="text-pink-400" size={24} />,
      date: "2022"
    },
    {
      title: "INFOSYS CERTIFIED FRONT END WEB DEVELOPER",
      description: "PROFICIENT IN HTML, CSS, JAVASCRIPT, AND MODERN WEB FRAMEWORKS",
      icon: <Trophy className="text-pink-400" size={24} />,
      date: "2021"
    },
    {
      title: "INFOSYS CERTIFIED ANGULAR DEVELOPER",
      description: "EXPERTISE IN DEVELOPING SINGLE PAGE APPLICATIONS USING ANGULAR",
      icon: <Star className="text-pink-400" size={24} />,
      date: "2021" 
    }
  ];

  const achievements = [
    {
      title: "APPRECIATION FROM RISE GRACIOUS",
      description: "RECOGNIZED FOR EXCEPTIONAL CONTRIBUTION TO PROJECT DELIVERY",
      year: "2022"
    },
    {
      title: "NOMINATED FOR EXCELLENCE IN CODING SKILLS",
      description: "ACKNOWLEDGED FOR OUTSTANDING TECHNICAL CAPABILITIES",
      year: "2023"
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-black/50 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl font-bold relative mb-3 uppercase tracking-wide">
            <span className="text-gradient">CERTIFICATIONS & ACCOMPLISHMENTS</span>
            <span className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"></span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto uppercase tracking-wide">
            PROFESSIONAL RECOGNITIONS AND QUALIFICATIONS THAT VALIDATE MY EXPERTISE
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 uppercase tracking-wide">
              <AnimatedText text="CERTIFICATIONS" animation="fade" />
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="gradient-border p-6 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1 + 0.3}s`, animationFillMode: "forwards" }}
                >
                  <div className="flex gap-4">
                    <div className="mt-1">{cert.icon}</div>
                    <div>
                      <h4 className="text-lg font-medium mb-2">{cert.title}</h4>
                      <p className="text-muted-foreground text-sm mb-2">{cert.description}</p>
                      <span className="text-xs text-pink-400">{cert.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Accomplishments */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 uppercase tracking-wide">
              <AnimatedText text="RECOGNITIONS" animation="fade" />
            </h3>
            
            <div className="p-6 gradient-border rounded-lg">
              <ul className="space-y-6">
                {achievements.map((achievement, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-3 opacity-0 animate-fade-in-up"
                    style={{ animationDelay: `${index * 0.1 + 0.5}s`, animationFillMode: "forwards" }}
                  >
                    <CheckCircle2 size={20} className="text-pink-400 mt-1 shrink-0" />
                    <div>
                      <h4 className="font-medium">{achievement.title}</h4>
                      <p className="text-muted-foreground text-sm mt-1">{achievement.description}</p>
                      <span className="text-xs text-pink-400 mt-1 block">{achievement.year}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-8 p-6 bg-secondary/50 rounded-lg border border-muted">
              <h4 className="text-lg font-medium mb-4">CONTINUING EDUCATION</h4>
              <p className="text-muted-foreground text-sm">
                I'M COMMITTED TO CONTINUOUS LEARNING AND STAYING UPDATED WITH THE LATEST FRONTEND TECHNOLOGIES AND BEST PRACTICES THROUGH ONLINE COURSES AND INDUSTRY CONFERENCES.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
