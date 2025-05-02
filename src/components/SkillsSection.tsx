
import { useState, useEffect, useRef } from "react";
import {
  Code,
  FileCode,
  Typescript,
  Github,
  Database,
  Cloud,
  Terminal,
  Layers,
  Activity,
  Lock,
  Server
} from "lucide-react";

const SkillsSection = () => {
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

  const skillCategories = [
    {
      name: "Frontend",
      skills: [
        { name: "React", icon: <Code className="h-5 w-5" /> },
        { name: "Angular", icon: <Code className="h-5 w-5" /> },
        { name: "Next.js", icon: <FileCode className="h-5 w-5" /> },
        { name: "TypeScript", icon: <Typescript className="h-5 w-5" /> },
        { name: "Tailwind CSS", icon: <FileCode className="h-5 w-5" /> },
      ],
    },
    {
      name: "Backend",
      skills: [
        { name: "ASP.NET Core", icon: <Code className="h-5 w-5" /> },
        { name: "C#", icon: <FileCode className="h-5 w-5" /> },
        { name: "GraphQL", icon: <Activity className="h-5 w-5" /> },
        { name: "SignalR", icon: <Activity className="h-5 w-5" /> },
        { name: "WebSockets", icon: <Activity className="h-5 w-5" /> },
        { name: "OAuth2", icon: <Lock className="h-5 w-5" /> },
      ],
    },
    {
      name: "DevOps & Cloud",
      skills: [
        { name: "Azure", icon: <Cloud className="h-5 w-5" /> },
        { name: "AWS", icon: <Cloud className="h-5 w-5" /> },
        { name: "Docker", icon: <Layers className="h-5 w-5" /> },
        { name: "Kubernetes", icon: <Layers className="h-5 w-5" /> },
        { name: "Terraform", icon: <Terminal className="h-5 w-5" /> },
        { name: "CI/CD", icon: <Github className="h-5 w-5" /> },
      ],
    },
    {
      name: "Database",
      skills: [
        { name: "PostgreSQL", icon: <Database className="h-5 w-5" /> },
        { name: "SQL Server", icon: <Database className="h-5 w-5" /> },
        { name: "MongoDB", icon: <Database className="h-5 w-5" /> },
        { name: "Redis", icon: <Server className="h-5 w-5" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-16 md:py-24" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.name}
              className="glass-panel p-6 card-hover"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center bg-secondary/50 px-3 py-2 rounded-lg text-sm"
                  >
                    <span className="mr-2">{skill.icon}</span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
