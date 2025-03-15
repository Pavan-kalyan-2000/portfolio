
import React, { useEffect, useRef } from "react";
import AnimatedText from "./ui/AnimatedText";
import GlowingButton from "./ui/GlowingButton";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      heroRef.current.style.setProperty("--mouse-x", `${x}`);
      heroRef.current.style.setProperty("--mouse-y", `${y}`);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center pt-16"
      style={{
        background: "radial-gradient(circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), rgba(255, 0, 128, 0.15), transparent 40%)",
      }}
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIvPjwvZz48L3N2Zz4=')] opacity-10" />
      
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-muted backdrop-blur-sm border border-pink-500/20">
            <p className="text-sm font-medium uppercase tracking-wider">
              <span className="text-pink-400">SENIOR SYSTEMS ENGINEER</span> AT INFOSYS LIMITED
            </p>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight uppercase tracking-wide">
            <AnimatedText
              text="PAVAN KALYAN JILLUDIMUDI"
              animation="reveal"
              className="block mb-2"
            />
            <span className="text-2xl md:text-3xl text-pink-400 uppercase tracking-wide block">FRONTEND DEVELOPER</span>
          </h1>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-8 opacity-0 animate-fade-in-up uppercase tracking-wide" style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}>
            I SPECIALIZE IN BUILDING MODERN, RESPONSIVE INTERFACES WITH ANGULAR, HTML, AND CSS, TURNING DESIGN CONCEPTS INTO PIXEL-PERFECT WEBSITES.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}>
            <GlowingButton size="lg" onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}>
              VIEW MY WORK
            </GlowingButton>
            <GlowingButton size="lg" variant="outline" onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}>
              GET IN TOUCH
            </GlowingButton>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
    </section>
  );
};

export default Hero;
