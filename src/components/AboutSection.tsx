
import { useState, useEffect, useRef } from "react";

const AboutSection = () => {
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

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30" ref={sectionRef}>
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className={`max-w-3xl mx-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="glass-panel p-8 md:p-10">
            <p className="text-lg mb-4 leading-relaxed">
              I'm a senior full-stack developer with over 8 years of experience building scalable enterprise software using ASP.NET Core, Angular, React, and cloud platforms like Azure and AWS.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              From real-time healthcare analytics to global e-commerce systems, I focus on clean architecture, high performance, and maintainable code.
            </p>
            <p className="text-lg mb-4 leading-relaxed">
              I thrive in Agile teams and enjoy mentoring developers and refining DevOps workflows.
            </p>
            <p className="text-lg leading-relaxed">
              My passion lies in creating intuitive, accessible experiences that solve real user problems while maintaining technical excellence behind the scenes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
