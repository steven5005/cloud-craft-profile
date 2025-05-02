
import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = ["all", "web", "mobile", "backend", "devops"];

  const projects = [
    {
      title: "AI-Driven Healthcare Analytics Platform",
      description: "Real-time patient data insights with scalable backend APIs.",
      technologies: ["Angular", ".NET Core", "Azure", "PostgreSQL", "Docker"],
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=600&auto=format&fit=crop",
      category: "web",
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "E-commerce with Real-Time Personalization",
      description: "Personalized shopping experience with live product updates.",
      technologies: ["React", "Next.js", "Tailwind", "C#", "Azure"],
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=600&auto=format&fit=crop",
      category: "web",
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Cloud-Native Fintech Dashboard",
      description: "Fast, low-latency portfolio analytics with serverless backend.",
      technologies: ["Angular", "AWS Lambda", "Terraform"],
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
      category: "web",
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Mobile Banking App",
      description: "Secure banking application with biometric authentication.",
      technologies: ["React Native", "TypeScript", "Firebase", "Redux"],
      imageUrl: "https://images.unsplash.com/photo-1529236183275-4fdcf2bc987e?q=80&w=600&auto=format&fit=crop",
      category: "mobile",
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Inventory Management System",
      description: "Enterprise solution for tracking and managing inventory across multiple locations.",
      technologies: ["C#", ".NET Core", "SQL Server", "Azure"],
      imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop",
      category: "backend",
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "CI/CD Pipeline Automation",
      description: "Automated deployment pipeline for microservices architecture.",
      technologies: ["Jenkins", "Docker", "Kubernetes", "Terraform"],
      imageUrl: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=600&auto=format&fit=crop", 
      category: "devops",
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Frontend Development Environment",
      description: "A comprehensive image showing a modern frontend development setup with code and browser.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
      imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop",
      category: "web",
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "API Gateway Implementation",
      description: "High-performance API gateway for microservices architecture.",
      technologies: ["Node.js", "Express", "Redis", "MongoDB"],
      imageUrl: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=600&auto=format&fit=crop",
      category: "backend",
      links: {
        demo: "#",
        github: "#",
      },
    },
  ];

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Check for saved theme on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-24">
          <div className="section-container">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">All Projects</h1>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
              Explore my complete portfolio of projects across various domains and technologies.
            </p>

            {/* Category filters */}
            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map(category => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveCategory(category)}
                  className="capitalize"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Projects grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={`${project.title}-${index}`}
                  className="glass-panel overflow-hidden rounded-2xl card-hover transition-all duration-300"
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
                          key={`${project.title}-${tech}`}
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
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
