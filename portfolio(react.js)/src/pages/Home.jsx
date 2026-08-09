import { FaFolderOpen, FaFileDownload, FaPaperPlane } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import ThreeCanvas from '../components/ThreeCanvas';
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

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Title Text */}
          <div className="hero-content">
            <ScrollReveal animation="fade-down" delay={100} duration={800}>
              <span className="hero-greeting">Welcome to my space</span>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={200} duration={800}>
              <h1 className="hero-name">
                Hello, I'm <span className="gradient-text">{personal.name}</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={300} duration={800}>
              <h2 className="hero-title-sub gradient-text-purple">
                {personal.title}
              </h2>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={400} duration={800}>
              <p className="hero-desc">
                {personal.description}
              </p>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={500} duration={800}>
              <div className="hero-btn-group">
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
          </div>

          {/* Right Column: 3D Scene */}
          <div className="hero-canvas-col">
            <ScrollReveal animation="zoom-in" delay={300} duration={1000} className="w-full h-full">
              <ThreeCanvas />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
