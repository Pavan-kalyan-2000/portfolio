
import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GlowingButtonProps {
  children: React.ReactNode;
  className?: string;
  glowClassName?: string;
  onClick?: () => void;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  [key: string]: any;
}

const GlowingButton: React.FC<GlowingButtonProps> = ({
  children,
  className,
  glowClassName,
  onClick,
  variant = "default",
  size = "default",
  ...props
}) => {
  return (
    <div className="relative group">
      <div 
        className={cn(
          "absolute -inset-0.5 bg-pink-500 rounded-lg blur opacity-60 group-hover:opacity-100 transition-opacity duration-300",
          glowClassName
        )}
      />
      <Button
        variant={variant}
        size={size}
        onClick={onClick}
        className={cn(
          "relative bg-background hover:bg-black text-white font-medium",
          className
        )}
        {...props}
      >
        {children}
      </Button>
    </div>
  );
};

export default GlowingButton;
