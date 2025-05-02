
import { useState, useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: "AI-Driven Healthcare Analytics Platform",
      description: "Real-time patient data insights with scalable backend APIs.",
      technologies: ["Angular", ".NET Core", "Azure", "PostgreSQL", "Docker"],
      imageUrl: "https://placehold.co/600x400/1A1F2C/FFFFFF?text=Healthcare+Analytics",
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "E-commerce with Real-Time Personalization",
      description: "Personalized shopping experience with live product updates.",
      technologies: ["React", "Next.js", "Tailwind", "C#", "Azure"],
      imageUrl: "https://placehold.co/600x400/1A1F2C/FFFFFF?text=E-commerce",
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Cloud-Native Fintech Dashboard",
      description: "Fast, low-latency portfolio analytics with serverless backend.",
      technologies: ["Angular", "AWS Lambda", "Terraform"],
      imageUrl: "https://placehold.co/600x400/1A1F2C/FFFFFF?text=Fintech+Dashboard",
      links: {
        demo: "#",
        github: "#",
      },
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/30" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`glass-panel overflow-hidden rounded-2xl card-hover transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="tech-badge"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                      Live Demo <ArrowUpRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                      Code <ArrowUpRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
