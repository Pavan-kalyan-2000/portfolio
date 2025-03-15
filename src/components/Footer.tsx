
import React from "react";
import { Github, Linkedin, MessageSquare, Instagram } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/pavan-kalyan-jilludimudi" },
    { icon: <MessageSquare size={20} />, href: "https://wa.me/918897878975" },
    { icon: <Instagram size={20} />, href: "https://instagram.com" },
  ];

  const footerLinks = [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Projects", href: "#projects" },
    { text: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-black py-12 relative">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold tracking-tight">
              <span className="text-white">Dev</span>
              <span className="text-pink-500">Folio</span>
            </a>
            <p className="text-muted-foreground mt-2 max-w-md">
              A frontend developer creating beautiful, responsive websites and web applications.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center border border-muted transition-colors hover:bg-muted"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-muted pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © {currentYear} DevFolio. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              {footerLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-white transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
