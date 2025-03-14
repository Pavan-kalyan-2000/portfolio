
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import GlowingButton from "@/components/ui/GlowingButton";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIvPjwvZz48L3N2Zz4=')] opacity-10" />
      
      <div 
        className="relative z-10 text-center p-8 max-w-lg"
        style={{
          background: "radial-gradient(circle at center, rgba(255, 0, 128, 0.15), transparent 70%)",
        }}
      >
        <h1 className="text-8xl font-bold mb-4 text-gradient">404</h1>
        <div className="h-px w-full bg-gradient-to-r from-transparent via-pink-500 to-transparent mb-6"></div>
        <p className="text-2xl text-white mb-4">Oops! Page not found</p>
        <p className="text-muted-foreground mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link to="/">
          <GlowingButton className="mx-auto">
            <ArrowLeft size={16} className="mr-2" />
            Return to Home
          </GlowingButton>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
