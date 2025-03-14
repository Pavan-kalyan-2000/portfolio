
import React from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  charClassName?: string;
  once?: boolean;
  animation?: "fade" | "slide" | "reveal";
  uppercase?: boolean;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className,
  wordClassName,
  charClassName,
  once = true,
  animation = "fade",
  uppercase = true,
}) => {
  const splitText = text.split(" ");
  const formattedText = uppercase ? text.toUpperCase() : text;
  const splitFormattedText = formattedText.split(" ");
  
  return (
    <span className={cn("inline-block", className)}>
      {splitFormattedText.map((word, wordIndex) => (
        <span 
          key={wordIndex} 
          className={cn(
            "inline-block mr-2",
            {
              "opacity-0": animation === "fade",
              "animate-fade-in": animation === "fade",
            },
            uppercase && "uppercase tracking-wide",
            wordClassName
          )}
          style={{ 
            animationDelay: `${wordIndex * 0.1}s`,
            animationFillMode: "forwards"
          }}
        >
          {animation === "reveal" ? (
            <span
              className={cn(
                "inline-block overflow-hidden",
                charClassName
              )}
            >
              <span 
                className="inline-block animate-text-reveal"
                style={{ 
                  animationDelay: `${wordIndex * 0.1}s`,
                  animationFillMode: "forwards"
                }}
              >
                {word}
              </span>
            </span>
          ) : (
            word
          )}
        </span>
      ))}
    </span>
  );
};

export default AnimatedText;
