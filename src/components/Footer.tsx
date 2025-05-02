
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-background border-t border-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center md:justify-start">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Steven Lee. All rights reserved.
          </p>
        </div>
      </div>
      
      {/* Fixed position button in the bottom right corner */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 rounded-full bg-secondary hover:bg-secondary/80 shadow-md transition-colors z-10"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;
