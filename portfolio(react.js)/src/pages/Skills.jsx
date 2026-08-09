import { useState, useEffect, useRef } from 'react';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaCode, 
  FaDatabase, 
  FaGitAlt, 
  FaGithub 
} from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import ScrollReveal from '../components/ScrollReveal';
import '../styles/skills.css';

// Subcomponent: Circular Skill Progress Ring
function SkillProgressRing({ percentage }) {
  const [offset, setOffset] = useState(150.8); // Circumference for r=24
  const elementRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const circumference = 150.8;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = elementRef.current;
    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  useEffect(() => {
    if (!visible) return;
    const targetOffset = circumference - (percentage / 100) * circumference;

    // Animate stroke dashoffset
    let start = circumference;
    const step = (circumference - targetOffset) / 40;
    
    const timer = setInterval(() => {
      start -= step;
      if (start <= targetOffset) {
        clearInterval(timer);
        setOffset(targetOffset);
      } else {
        setOffset(start);
      }
    }, 15);

    return () => clearInterval(timer);
  }, [visible, percentage]);

  return (
    <div ref={elementRef} className="skill-ring-container">
      <svg>
        <circle 
          className="skill-ring-bg" 
          cx="32.5" 
          cy="32.5" 
          r="24" 
          strokeWidth="4" 
          fill="transparent" 
        />
        <circle 
          className="skill-ring-progress" 
          cx="32.5" 
          cy="32.5" 
          r="24" 
          strokeWidth="4" 
          fill="transparent" 
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform="rotate(-90 32.5 32.5)"
        />
      </svg>
      <span className="skill-ring-text">{percentage}%</span>
    </div>
  );
}

export default function Skills() {
  const { skills } = portfolioData;

  const getSkillIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'html5':
        return <FaHtml5 className="skill-icon" />;
      case 'css3':
        return <FaCss3Alt className="skill-icon" />;
      case 'javascript':
        return <FaJs className="skill-icon" />;
      case 'react.js':
        return <FaReact className="skill-icon" />;
      case 'git':
        return <FaGitAlt className="skill-icon" />;
      case 'github':
        return <FaGithub className="skill-icon" />;
      case 'sql':
      case 'pl/sql':
        return <FaDatabase className="skill-icon" />;
      default:
        return <FaCode className="skill-icon" />;
    }
  };

  return (
    <section id="skills" className="section">
      {/* Shared Gradient stroke definition for the progress rings */}
      <svg className="svg-gradient-def">
        <defs>
          <linearGradient id="ring-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f5ff" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <ScrollReveal animation="fade-down" duration={600}>
            <h2>My Skills</h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={100} duration={600}>
            <p>Categorized layout of technical abilities and tools</p>
          </ScrollReveal>
        </div>

        {/* Skills Layout Groups */}
        <div className="skills-groups-grid">
          
          {/* Frontend Section */}
          <ScrollReveal animation="slide-right" delay={200} duration={800}>
            <div className="skills-group-block glass-card">
              <h3 className="skills-group-title">
                Frontend Technologies
              </h3>
              <div className="skills-list">
                {skills.frontend.map((skill, idx) => (
                  <div key={idx} className="skill-card">
                    <div className="skill-info">
                      {getSkillIcon(skill.name)}
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <SkillProgressRing percentage={skill.level} />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Programming Languages */}
          <ScrollReveal animation="slide-left" delay={300} duration={800}>
            <div className="skills-group-block glass-card">
              <h3 className="skills-group-title">
                Programming Foundations
              </h3>
              <div className="skills-list">
                {skills.programming.map((skill, idx) => (
                  <div key={idx} className="skill-card">
                    <div className="skill-info">
                      {getSkillIcon(skill.name)}
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <SkillProgressRing percentage={skill.level} />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Databases */}
          <ScrollReveal animation="slide-right" delay={400} duration={800}>
            <div className="skills-group-block glass-card">
              <h3 className="skills-group-title">
                Database Systems
              </h3>
              <div className="skills-list">
                {skills.database.map((skill, idx) => (
                  <div key={idx} className="skill-card">
                    <div className="skill-info">
                      {getSkillIcon(skill.name)}
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <SkillProgressRing percentage={skill.level} />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Tools & Environment */}
          <ScrollReveal animation="slide-left" delay={500} duration={800}>
            <div className="skills-group-block glass-card">
              <h3 className="skills-group-title">
                Tools & Utilities
              </h3>
              <div className="skills-list">
                {skills.tools.map((skill, idx) => (
                  <div key={idx} className="skill-card">
                    <div className="skill-info">
                      {getSkillIcon(skill.name)}
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    <SkillProgressRing percentage={skill.level} />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
