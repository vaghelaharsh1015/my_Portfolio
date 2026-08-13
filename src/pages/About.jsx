import { useState, useEffect, useRef } from 'react';
import { portfolioData } from '../data/portfolioData';
import ScrollReveal from '../components/ScrollReveal';
import avatarImg from '../assets/avatar.png';
import '../styles/about.css';

// Subcomponent: Animated Counter
function AnimatedCounter({ value, duration = 1200 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  // Match leading digits vs trailing text (e.g. "10+" -> "10" and "+")
  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const suffix = match ? match[2] : value;

  useEffect(() => {
    // If not a number, skip animation
    if (target === null) {
      setHasStarted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
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
  }, [target]);

  useEffect(() => {
    if (!hasStarted || target === null) return;

    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / target));
    
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= target) {
        clearInterval(timer);
      }
    }, stepTime || 1);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  if (target === null) {
    return <span ref={elementRef}>{value}</span>;
  }

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const { personal, stats } = portfolioData;
  const [cardStyle, setCardStyle] = useState({});
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    const maxTilt = 12; // slightly more tilt for the holographic effect
    const tiltX = -(y / (rect.height / 2)) * maxTilt;
    const tiltY = (x / (rect.width / 2)) * maxTilt;
    
    setCardStyle({
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.03, 1.03, 1.03)`,
      transition: 'transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)'
    });
  };

  const handleMouseLeave = () => {
    setCardStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
    });
  };

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <ScrollReveal animation="fade-down" duration={600}>
            <h2>About Me</h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={100} duration={600}>
            <p>Get to know me, my education, strengths, and goals</p>
          </ScrollReveal>
        </div>

        {/* Section Content */}
        <div className="about-grid">
          
          {/* Left Column: Holographic ID Card */}
          <div className="about-left-col">
            <ScrollReveal animation="slide-right" delay={200} duration={800}>
              <div 
                ref={cardRef}
                className="profile-card-3d"
                style={cardStyle}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                {/* Profile Avatar Image */}
                <div className="profile-img-container">
                  <img src={avatarImg} alt="Harsh Vaghela" className="profile-avatar-img" />
                </div>

                {/* ID Info */}
                <div className="profile-card-details">
                  <h3 className="profile-card-name">{personal.name}</h3>
                  <p className="profile-card-title">{personal.title}</p>
                  
                  <div className="profile-card-meta">
                    <div className="meta-item">
                      <span className="meta-label">Dept</span>
                      <span className="meta-val">BCA</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Location</span>
                      <span className="meta-val">India</span>
                    </div>
                    <div className="meta-item">
                      <span className="meta-label">Status</span>
                      <span className="meta-val">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Descriptions & Statistics */}
          <div className="about-right-col">
            <ScrollReveal animation="slide-left" delay={300} duration={800}>
              <h3 className="about-intro-text gradient-text">
                I am a passionate computer applications student specializing in modern web interface engineering.
              </h3>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={400} duration={800} className="about-paragraphs">
              <p>
                Currently pursuing my **Bachelor of Computer Applications (BCA)** at V.S. Patel College (VNSGU), 
                I focus on translating logic into engaging digital products. I bridge the gap between back-end databases 
                and front-end aesthetics to build solid, accessible systems.
              </p>
              <p>
                My frontend technology stack revolves around **React.js and JavaScript (ES6+)**. I love playing with 
                advanced CSS animations, custom canvas designs, and responsive layouts to craft a premium user feel.
              </p>
              <p>
                As a developer, my strengths lie in fast self-learning, clean coding, and a solid problem-solving mindset 
                nurtured by writing low-level systems in C/C++. My ultimate career goal is to join an engineering 
                powerhouse where I can ship high-end web experiences.
              </p>
            </ScrollReveal>

            {/* Statistics Row Grid */}
            <div className="stats-grid">
              {stats.map((stat, idx) => (
                <ScrollReveal 
                  key={idx} 
                  animation="zoom-in" 
                  delay={500 + idx * 100} 
                  duration={600}
                >
                  <div className="stat-card glass-card">
                    <div className="stat-number gradient-text-purple">
                      <AnimatedCounter value={stat.value} />
                    </div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
