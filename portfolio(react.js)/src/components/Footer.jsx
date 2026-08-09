import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import '../styles/footer.css';

export default function Footer() {
  const { personal } = portfolioData;

  const handleLinkClick = (id) => {
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
    <footer className="footer">
      {/* Top pulsing neon line */}
      <div className="footer-glow-line" />

      <div className="container">
        <div className="footer-content">
          {/* Brand Column */}
          <div className="footer-info">
            <div className="footer-logo" onClick={() => handleLinkClick('home')}>
              <span className="gradient-text">Harsh</span>Vaghela
            </div>
            <p className="footer-tagline">{personal.tagline}</p>
          </div>

          {/* Quick Links Column */}
          <div className="footer-nav-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a onClick={() => handleLinkClick('home')}>Home</a></li>
              <li><a onClick={() => handleLinkClick('about')}>About</a></li>
              <li><a onClick={() => handleLinkClick('skills')}>Skills</a></li>
              <li><a onClick={() => handleLinkClick('projects')}>Projects</a></li>
              <li><a onClick={() => handleLinkClick('education')}>Education</a></li>
              <li><a onClick={() => handleLinkClick('resume')}>Resume</a></li>
              <li><a onClick={() => handleLinkClick('contact')}>Contact</a></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="footer-social-col">
            <h4 className="footer-col-title">Connect</h4>
            <div className="footer-socials">
              <a 
                href={personal.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>
              <a 
                href={personal.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-social-btn"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin />
              </a>
              <a 
                href={`mailto:${personal.email}`} 
                className="footer-social-btn"
                aria-label="Email Me"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © {new Date().getFullYear()} Harsh Vaghela. All rights reserved.
          </p>
          <p className="footer-dev">
            Built with <span>⚛</span> React & Three.js
          </p>
        </div>
      </div>
    </footer>
  );
}
