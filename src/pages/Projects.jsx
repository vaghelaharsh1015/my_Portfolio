import { useState, useEffect } from 'react';
import { FaTimes, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';
import ScrollReveal from '../components/ScrollReveal';
import '../styles/projects.css';

export default function Projects() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'React', 'JavaScript', 'HTML & CSS'];

  // Handle closing modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
      // Lock scroll behind modal
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.category.toLowerCase() === activeFilter.toLowerCase();
  });

  // Modal Category mock graphic (large size)
  const renderModalCategoryGraphic = (category) => {
    switch (category) {
      case 'React':
        return (
          <div className="project-visual-placeholder" style={{ background: 'radial-gradient(circle at center, #1e1b4b 0%, #030712 100%)', height: '100%' }}>
            <span className="project-graphic-icon animate-spin-slow" style={{ fontSize: '5rem', color: '#6366f1' }}>⚛</span>
            <span className="project-graphic-tag">React Component</span>
          </div>
        );
      case 'JavaScript':
        return (
          <div className="project-visual-placeholder" style={{ background: 'radial-gradient(circle at center, #311c08 0%, #030712 100%)', height: '100%' }}>
            <span className="project-graphic-icon" style={{ fontSize: '5rem', color: '#f59e0b' }}>JS</span>
            <span className="project-graphic-tag">JavaScript Module</span>
          </div>
        );
      default:
        return (
          <div className="project-visual-placeholder" style={{ background: 'radial-gradient(circle at center, #2e1065 0%, #030712 100%)', height: '100%' }}>
            <span className="project-graphic-icon" style={{ fontSize: '5rem', color: '#ec4899' }}>&lt;/&gt;</span>
            <span className="project-graphic-tag">HTML & CSS Styles</span>
          </div>
        );
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <ScrollReveal animation="fade-down" duration={600}>
            <h2>My Projects</h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={100} duration={600}>
            <p>Showcasing my works organized by core technology stack</p>
          </ScrollReveal>
        </div>

        <div className="projects-container">
          {/* Category Filter bar */}
          <ScrollReveal animation="fade-up" delay={150} duration={600}>
            <div className="projects-filter">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid list of Project Cards */}
          <div className="projects-grid">
            {filteredProjects.map((project, idx) => (
              <ScrollReveal 
                key={project.id} 
                animation="zoom-in" 
                delay={200 + (idx % 3) * 100} 
                duration={700}
              >
                <ProjectCard 
                  project={project} 
                  onCardClick={handleCardClick} 
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Project View Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div 
            className="modal-content-card" 
            onClick={(e) => e.stopPropagation()} // Prevent clicking on content closing it
          >
            {/* Modal Header Thumbnail */}
            <div className="modal-header-image">
              <button className="modal-close-btn" onClick={closeModal} aria-label="Close modal">
                <FaTimes size={16} />
              </button>
              {renderModalCategoryGraphic(selectedProject.category)}
            </div>

            {/* Modal Content */}
            <div className="modal-body">
              <div>
                <span className="modal-subtitle">{selectedProject.category} Project</span>
                <h3 className="modal-title">{selectedProject.title}</h3>
              </div>

              <p className="modal-description">
                {selectedProject.longDescription}
              </p>

              <div className="modal-tags">
                {selectedProject.technologies.map((tech, index) => (
                  <span key={index} className="modal-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="modal-footer">
                <a 
                  href={selectedProject.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="modal-link-btn primary"
                >
                  Live Demo <FaExternalLinkAlt size={13} />
                </a>
                <a 
                  href={selectedProject.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="modal-link-btn secondary"
                >
                  View Code <FaGithub size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
