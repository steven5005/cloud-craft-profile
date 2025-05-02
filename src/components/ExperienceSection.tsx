
import { useState, useEffect, useRef } from "react";

const ExperienceSection = () => {
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

  const experiences = [
    {
      company: "Vilnius",
      position: "Senior Software Engineer",
      period: "2022 – 2025",
      description:
        "Modernized Java/PHP into .NET microservices, built real-time dashboards, supported 1M+ MAUs",
    },
    {
      company: "Vakoms",
      position: "Software Engineer",
      period: "2018 – 2021",
      description:
        "Migrated monoliths, built Blazor/Angular apps, implemented real-time tools",
    },
    {
      company: "Dataplugs",
      position: "Frontend Developer",
      period: "2014 – 2018",
      description:
        "Developed Angular dashboards, improved CI/CD pipeline, implemented monitoring",
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-24" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={exp.company}
              className={`relative pl-8 pb-12 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              {/* Timeline line */}
              <div className="absolute left-0 top-2 bottom-0 w-px bg-border"></div>
              
              {/* Timeline dot */}
              <div className="absolute left-[-5px] top-2 w-[10px] h-[10px] rounded-full bg-primary"></div>
              
              <div className="glass-panel p-6">
                <div className="flex flex-wrap justify-between mb-2">
                  <h3 className="text-xl font-bold">{exp.company}</h3>
                  <span className="text-muted-foreground">{exp.period}</span>
                </div>
                <h4 className="text-lg font-medium text-primary mb-3">{exp.position}</h4>
                <p className="text-muted-foreground">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
