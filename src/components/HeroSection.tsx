
import { ArrowDown, Github, FileText, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-portfolioAccent1/20 animate-float blur-3xl"></div>
        <div className="absolute top-2/3 right-1/4 w-96 h-96 rounded-full bg-portfolioAccent2/20 animate-float blur-3xl" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-portfolioAccent3/20 animate-float blur-3xl" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="section-container">
        <div className="flex flex-col items-center text-center opacity-0 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Steven <span className="animated-gradient-text">Lee</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium mb-6">Senior Software Developer</h2>
          <p className="text-lg max-w-3xl mb-10 text-balance">
            Building modern, scalable, cloud-native applications with clean code and clear impact.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="default" size="lg" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <FileText className="mr-2 h-4 w-4" /> View Resume
              </a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-0 w-full flex justify-center animate-bounce">
          <a href="#about" aria-label="Scroll to About section">
            <ArrowDown className="h-6 w-6 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
