import { useState, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/projects.css';

export default function ProjectCard({ project, onCardClick }) {
  const [tiltStyle, setTiltStyle] = useState({});
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    
    // Calculate normalized mouse positions inside the card
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Set max tilt in degrees
    const maxTilt = 8; 
    
    // Calculate degrees
    const tiltX = -(y / (rect.height / 2)) * maxTilt;
    const tiltY = (x / (rect.width / 2)) * maxTilt;
    
    setTiltStyle({
      transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`,
      transition: 'transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)'
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)'
    });
  };

  // Helper to get custom background graphic depending on project category
  const renderCategoryGraphic = (category) => {
    switch (category) {
      case 'React':
        return (
          <div className="project-visual-placeholder" style={{ background: 'radial-gradient(circle at center, #1e1b4b 0%, #030712 100%)' }}>
            <span className="project-graphic-icon animate-spin-slow" style={{ color: '#6366f1' }}>⚛</span>
            <span className="project-graphic-tag">React Component</span>
          </div>
        );
      case 'JavaScript':
        return (
          <div className="project-visual-placeholder" style={{ background: 'radial-gradient(circle at center, #311c08 0%, #030712 100%)' }}>
            <span className="project-graphic-icon" style={{ color: '#f59e0b' }}>JS</span>
            <span className="project-graphic-tag">JavaScript Module</span>
          </div>
        );
      default: // HTML & CSS
        return (
          <div className="project-visual-placeholder" style={{ background: 'radial-gradient(circle at center, #2e1065 0%, #030712 100%)' }}>
            <span className="project-graphic-icon" style={{ color: '#ec4899' }}>&lt;/&gt;</span>
            <span className="project-graphic-tag">HTML & CSS Styles</span>
          </div>
        );
    }
  };

  return (
    <div className="project-card-wrapper" onClick={() => onCardClick(project)}>
      <div 
        ref={cardRef}
        className="project-card"
        style={tiltStyle}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Project Thumbnail with Code Graphic */}
        <div className="project-thumbnail">
          {renderCategoryGraphic(project.category)}
          <span className="project-category-badge">{project.category}</span>
        </div>

        {/* Card Content Details */}
        <div className="project-content">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-desc">{project.shortDescription}</p>
          
          <div className="project-tags">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span key={index} className="project-tag">{tech}</span>
            ))}
            {project.technologies.length > 3 && (
              <span className="project-tag">+{project.technologies.length - 3} more</span>
            )}
          </div>

          <div className="project-footer">
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="card-link-btn primary"
              onClick={(e) => e.stopPropagation()} // Prevent card modal opening
            >
              Demo <FaExternalLinkAlt size={11} />
            </a>
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="card-link-btn secondary"
              onClick={(e) => e.stopPropagation()} // Prevent card modal opening
            >
              GitHub <FaGithub size={13} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
