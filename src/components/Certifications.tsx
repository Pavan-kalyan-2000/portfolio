
import React from "react";
import AnimatedText from "./ui/AnimatedText";

const Certifications: React.FC = () => {
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
            
            <div className="p-6 gradient-border rounded-lg space-y-4">
              <div className="p-4 bg-secondary/30 rounded-md border border-muted">
                <h4 className="font-medium mb-1">INFOSYS GLOBAL AGILE DEVELOPER CERTIFICATION</h4>
                <p className="text-sm text-muted-foreground">Comprehensive training in Agile methodologies and development practices</p>
              </div>
              
              <div className="p-4 bg-secondary/30 rounded-md border border-muted">
                <h4 className="font-medium mb-1">INFOSYS CERTIFIED FRONT END WEB DEVELOPER</h4>
                <p className="text-sm text-muted-foreground">Expert-level certification in modern frontend development techniques</p>
              </div>
              
              <div className="p-4 bg-secondary/30 rounded-md border border-muted">
                <h4 className="font-medium mb-1">INFOSYS CERTIFIED ANGULAR DEVELOPER</h4>
                <p className="text-sm text-muted-foreground">Specialized certification in Angular framework and application development</p>
              </div>
            </div>
          </div>
          
          {/* Accomplishments */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 uppercase tracking-wide">
              <AnimatedText text="RECOGNITIONS" animation="fade" />
            </h3>
            
            <div className="p-6 gradient-border rounded-lg space-y-4">
              <div className="p-4 bg-secondary/30 rounded-md border border-muted">
                <h4 className="font-medium mb-1">APPRECIATION FROM RISE GRACIOUS</h4>
                <p className="text-sm text-muted-foreground">Recognition for outstanding contributions to project success</p>
              </div>
              
              <div className="p-4 bg-secondary/30 rounded-md border border-muted">
                <h4 className="font-medium mb-1">NOMINATED FOR EXCELLENCE IN CODING SKILLS</h4>
                <p className="text-sm text-muted-foreground">Nominated by peers and leadership for exceptional coding practices</p>
              </div>
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
