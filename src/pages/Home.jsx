import { 
  FaFolderOpen, 
  FaFileDownload, 
  FaPaperPlane, 
  FaGithub, 
  FaLinkedin,
  FaReact,
  FaJs,
  FaNodeJs,
  FaPython,
  FaCode
} from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';
import { portfolioData } from '../data/portfolioData';
import ScrollReveal from '../components/ScrollReveal';
import '../styles/home.css';

export default function Home() {
  const { personal } = portfolioData;

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const isScrolled = window.scrollY > 40;
      const navbarHeight = isScrolled ? 65 : 80;
      const offsetPosition = element.offsetTop - navbarHeight + 5;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const techPills = [
    { name: 'React.js', icon: <FaReact /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'C & C++', icon: <FaCode /> }
  ];

  return (
    <section id="home" className="hero-minimal-section">
      {/* Background ambient glow shapes */}
      <div className="hero-ambient-glow glow-1" />
      <div className="hero-ambient-glow glow-2" />
      <div className="hero-ambient-glow glow-3" />

      <div className="container hero-minimal-container">
        {/* Status Badge */}
        <ScrollReveal animation="fade-down" delay={100} duration={700}>
          <div className="hero-status-pill">
            <span className="status-dot-pulse" />
            <span className="status-text">Available for Projects & Opportunities</span>
          </div>
        </ScrollReveal>

        {/* Big Bold Headline */}
        <ScrollReveal animation="fade-up" delay={200} duration={800}>
          <h1 className="hero-minimal-name">
            Hello, I'm <span className="hero-name-highlight">{personal.name}</span>
          </h1>
        </ScrollReveal>

        {/* Role Subtitle */}
        <ScrollReveal animation="fade-up" delay={300} duration={800}>
          <h2 className="hero-minimal-title">
            {personal.title} <span className="hero-location-tag">📍 Surat, Gujarat</span>
          </h2>
        </ScrollReveal>

        {/* Description Tagline */}
        <ScrollReveal animation="fade-up" delay={400} duration={800}>
          <p className="hero-minimal-desc">
            {personal.description} Focused on building scalable web applications, clean user interfaces, and robust backend systems.
          </p>
        </ScrollReveal>

        {/* Interactive Tech Stack Pills */}
        <ScrollReveal animation="fade-up" delay={480} duration={800}>
          <div className="hero-tech-pills-row">
            <span className="tech-pills-label">Core Stack:</span>
            <div className="tech-pills-list">
              {techPills.map((tech, idx) => (
                <div key={idx} className="tech-pill-badge">
                  <span className="tech-pill-icon">{tech.icon}</span>
                  <span className="tech-pill-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Action Button Group */}
        <ScrollReveal animation="fade-up" delay={550} duration={800}>
          <div className="hero-minimal-actions">
            <button 
              onClick={() => handleScrollTo('projects')} 
              className="btn-primary"
            >
              View My Projects <FaFolderOpen />
            </button>
            <button 
              onClick={() => handleScrollTo('resume')} 
              className="btn-secondary"
            >
              Download Resume <FaFileDownload />
            </button>
            <button 
              onClick={() => handleScrollTo('contact')} 
              className="btn-secondary"
            >
              Contact Me <FaPaperPlane />
            </button>
          </div>
        </ScrollReveal>

        {/* Quick Social Links Bar */}
        <ScrollReveal animation="fade-up" delay={650} duration={800}>
          <div className="hero-social-strip">
            <a 
              href={personal.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-strip-btn"
              title="GitHub Profile"
            >
              <FaGithub /> GitHub
            </a>
            <span className="social-strip-divider">•</span>
            <a 
              href={personal.linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-strip-btn"
              title="LinkedIn Profile"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <span className="social-strip-divider">•</span>
            <a 
              href={`mailto:${personal.email}`} 
              className="social-strip-btn"
              title="Send Email"
            >
              ✉️ {personal.email}
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
