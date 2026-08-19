import { useState } from 'react';
import { FaFileDownload, FaEye, FaTimes } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import { educationData } from '../data/education';
import { skillsData } from '../data/skills';
import { projectsData } from '../data/projects';
import ScrollReveal from '../components/ScrollReveal';
import '../styles/resume.css';

export default function Resume() {
  const { personal } = portfolioData;
  const [showViewModal, setShowViewModal] = useState(false);

  // Build dynamic resume string from actual data files
  const generateResumeText = () => {
    const eduText = educationData.map((e, idx) => 
      `${idx + 1}. ${e.degree} (${e.year})\n   Institution: ${e.institution} (${e.university})\n   ${e.description}`
    ).join('\n\n');

    const frontendSkills = skillsData.frontend.map(s => s.name).join(', ');
    const progSkills = skillsData.programming.map(s => s.name).join(', ');
    const dbSkills = skillsData.database.map(s => s.name).join(', ');
    const toolSkills = skillsData.tools.map(s => s.name).join(', ');

    const projText = projectsData.map(p => 
      `- ${p.title} (${p.category}): ${p.shortDescription}`
    ).join('\n');

    return `=========================================
          HARSH VAGHELA - RESUME         
=========================================
BCA Student & Frontend Developer
Email: ${personal.email}
Phone: ${personal.phone}
Location: ${personal.location}
GitHub: ${personal.githubUrl}
LinkedIn: ${personal.linkedinUrl}

-----------------------------------------
PROFESSIONAL SUMMARY
-----------------------------------------
I build modern, responsive, and interactive web experiences
using modern frontend technologies. Passionate about clean UI/UX,
web application development, and software engineering.

-----------------------------------------
EDUCATION
-----------------------------------------
${eduText}

-----------------------------------------
TECHNICAL SKILLS
-----------------------------------------
- Frontend: ${frontendSkills}
- Languages: ${progSkills}
- Database: ${dbSkills}
- Tools & Utilities: ${toolSkills}

-----------------------------------------
PROJECTS HIGHLIGHTS
-----------------------------------------
${projText}

=========================================
Generated dynamically from Portfolio.
=========================================`;
  };

  const handleDownload = () => {
    const textContent = generateResumeText();
    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'harsh_vaghela_resume.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <div className="resume-grid">
          
          {/* Left Column: CTA Text Details */}
          <div className="resume-content">
            <ScrollReveal animation="fade-down" duration={600}>
              <h2 className="resume-heading">
                Want to know more <span className="gradient-text">about me?</span>
              </h2>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={150} duration={600}>
              <p className="resume-desc">
                Download my resume to explore my education journey, full list of skills, 
                technical projects, and programming capabilities. You can download a text-based copy 
                or view the formatted overview on screen.
              </p>
            </ScrollReveal>
            
            <ScrollReveal animation="fade-up" delay={300} duration={600}>
              <div className="resume-btn-row">
                <button onClick={handleDownload} className="btn-primary">
                  Download Resume <FaFileDownload />
                </button>
                <button onClick={() => setShowViewModal(true)} className="btn-secondary">
                  View Resume <FaEye />
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: 3D Holographic Document Drawing */}
          <div className="resume-3d-col" onClick={() => setShowViewModal(true)}>
            <ScrollReveal animation="zoom-in" delay={250} duration={800}>
              <div className="resume-doc-card">
                {/* Header HUD */}
                <div className="doc-mock-header">
                  <div className="doc-mock-avatar">HV</div>
                  <div className="doc-mock-header-lines">
                    <div className="doc-mock-line cyan" />
                    <div className="doc-mock-line medium" />
                  </div>
                </div>

                {/* Body lines mimicking layout */}
                <div className="doc-mock-body">
                  <div className="doc-mock-section">
                    <div className="doc-mock-section-title" />
                    <div className="doc-mock-line medium" />
                    <div className="doc-mock-line" />
                    <div className="doc-mock-line short" />
                  </div>

                  <div className="doc-mock-section">
                    <div className="doc-mock-section-title" style={{ width: '45%', background: '#8b5cf6' }} />
                    <div className="doc-mock-line purple" />
                    <div className="doc-mock-line medium" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>

      {/* Screen View Modal */}
      {showViewModal && (
        <div className="modal-overlay" onClick={() => setShowViewModal(false)}>
          <div 
            className="modal-content-card" 
            style={{ maxWidth: '750px', maxHeight: '85vh', background: '#F7F3ED', color: '#241A16' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div style={{ padding: '20px 25px', background: '#EFE9E1', borderBottom: '1px solid rgba(111, 78, 55, 0.15)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.25rem', color: '#111111', fontFamily: 'var(--font-heading)' }}>
                  📄 Harsh Vaghela — Resume Preview
                </h3>
                <span style={{ fontSize: '0.85rem', color: '#6F4E37' }}>{personal.email} | {personal.phone}</span>
              </div>
              <button 
                onClick={() => setShowViewModal(false)}
                style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer', color: '#111111', padding: '5px' }}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
            </div>

            {/* Modal Body: Rich Formatted Resume */}
            <div style={{ padding: '25px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Header Info */}
              <div style={{ background: '#FFFFFF', padding: '18px', borderRadius: '8px', border: '1px solid rgba(111, 78, 55, 0.15)' }}>
                <h2 style={{ margin: '0 0 5px 0', fontSize: '1.5rem', color: '#111111', fontFamily: 'var(--font-heading)' }}>{personal.name}</h2>
                <p style={{ margin: '0 0 10px 0', color: '#C8965A', fontWeight: 600 }}>{personal.title}</p>
                <div style={{ fontSize: '0.9rem', color: '#3A2A1A', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                  <span>📍 {personal.location}</span>
                  <span>📧 {personal.email}</span>
                  <span>🔗 <a href={personal.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#6F4E37' }}>GitHub</a></span>
                </div>
              </div>

              {/* Education Section */}
              <div>
                <h4 style={{ margin: '0 0 10px 0', fontSize: '1.1rem', color: '#111111', borderBottom: '2px solid #C8965A', paddingBottom: '4px', fontFamily: 'var(--font-heading)' }}>
                  🎓 Education
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {educationData.map((item, idx) => (
                    <div key={idx} style={{ background: '#FFFFFF', padding: '14px', borderRadius: '8px', border: '1px solid rgba(111, 78, 55, 0.1)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '5px' }}>
                        <strong style={{ color: '#111111', fontSize: '1rem' }}>{item.degree}</strong>
                        <span style={{ color: '#C8965A', fontWeight: 600, fontSize: '0.85rem' }}>{item.year}</span>
                      </div>
                      <div style={{ fontSize: '0.9rem', color: '#6F4E37', margin: '3px 0' }}>{item.institution} ({item.university})</div>
                      <p style={{ margin: '6px 0 0 0', fontSize: '0.85rem', color: '#4A3B32', lineHeight: '1.4' }}>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Skills Section */}
              <div>
                <h4 style={{ margin: '0 0 10px 0', fontSize: '1.1rem', color: '#111111', borderBottom: '2px solid #C8965A', paddingBottom: '4px', fontFamily: 'var(--font-heading)' }}>
                  💻 Technical Skills
                </h4>
                <div style={{ background: '#FFFFFF', padding: '14px', borderRadius: '8px', border: '1px solid rgba(111, 78, 55, 0.1)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <div>
                    <strong style={{ color: '#111111', fontSize: '0.9rem' }}>Frontend: </strong>
                    <span style={{ color: '#4A3B32', fontSize: '0.9rem' }}>{skillsData.frontend.map(s => `${s.name} (${s.level}%)`).join(', ')}</span>
                  </div>
                  <div>
                    <strong style={{ color: '#111111', fontSize: '0.9rem' }}>Programming: </strong>
                    <span style={{ color: '#4A3B32', fontSize: '0.9rem' }}>{skillsData.programming.map(s => `${s.name} (${s.level}%)`).join(', ')}</span>
                  </div>
                  <div>
                    <strong style={{ color: '#111111', fontSize: '0.9rem' }}>Database: </strong>
                    <span style={{ color: '#4A3B32', fontSize: '0.9rem' }}>{skillsData.database.map(s => `${s.name} (${s.level}%)`).join(', ')}</span>
                  </div>
                  <div>
                    <strong style={{ color: '#111111', fontSize: '0.9rem' }}>Tools: </strong>
                    <span style={{ color: '#4A3B32', fontSize: '0.9rem' }}>{skillsData.tools.map(s => `${s.name} (${s.level}%)`).join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Projects Section */}
              <div>
                <h4 style={{ margin: '0 0 10px 0', fontSize: '1.1rem', color: '#111111', borderBottom: '2px solid #C8965A', paddingBottom: '4px', fontFamily: 'var(--font-heading)' }}>
                  🚀 Projects
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {projectsData.map((proj, idx) => (
                    <div key={idx} style={{ background: '#FFFFFF', padding: '12px 14px', borderRadius: '8px', border: '1px solid rgba(111, 78, 55, 0.1)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <strong style={{ color: '#111111', fontSize: '0.95rem' }}>{proj.title}</strong>
                        <span style={{ background: '#C8965A', color: '#FFFFFF', padding: '2px 8px', borderRadius: '12px', fontSize: '0.75rem', textTransform: 'uppercase' }}>{proj.category}</span>
                      </div>
                      <p style={{ margin: '4px 0 0 0', fontSize: '0.85rem', color: '#4A3B32' }}>{proj.shortDescription}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Download Action */}
              <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
                <button onClick={handleDownload} className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Download Text Copy <FaFileDownload />
                </button>
              </div>

            </div>

          </div>
        </div>
      )}
    </section>
  );
}
