
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
        <div className={`max-w-4xl mx-auto transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="glass-panel p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3 flex-shrink-0">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop&crop=face" 
                  alt="Steven Lee profile" 
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3">
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
      </div>
    </section>
  );
};

export default AboutSection;
