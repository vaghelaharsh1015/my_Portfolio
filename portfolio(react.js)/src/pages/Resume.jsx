import { useState } from 'react';
import { FaFileDownload, FaEye, FaTimes } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import ScrollReveal from '../components/ScrollReveal';
import '../styles/resume.css';

export default function Resume() {
  const { personal } = portfolioData;
  const [showViewModal, setShowViewModal] = useState(false);

  // Dynamic Resume generator & downloader
  const handleDownload = () => {
    const textContent = `
=========================================
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
using modern frontend technologies. Passionate about 3D Web,
clean UI/UX, and performance optimization.

-----------------------------------------
EDUCATION
-----------------------------------------
1. Bachelor of Computer Applications (BCA) (2024 - Present)
   V.S. Patel College of Arts & Science
   Veer Narmad South Gujarat University (VNSGU)
   Relevant Subjects: C & C++ Programming, DBMS, Web Dev

2. Higher Secondary Certificate (HSC) - Science (2022 - 2024)
   Shree Vasishtha Vidyalaya, GSEB Board
   Relevant Subjects: Physics, Chemistry, Math, Computer Science

-----------------------------------------
TECHNICAL SKILLS
-----------------------------------------
- Frontend: HTML5, CSS3, JavaScript (ES6+), React.js
- Languages: C, C++, JavaScript
- Database: SQL, PL/SQL
- Tools: Git, GitHub, VS Code

-----------------------------------------
PROJECTS HIGHLIGHTS
-----------------------------------------
- DevHub Developer Community (React.js, CSS3, Storage)
- Crypto Dashboard & Tracker (React.js, Fetch API, Canvas)
- Kanban Task Board (JavaScript, CSS Grid, Storage)
- Retro Brick Breaker Game (JavaScript, Canvas API)

=========================================
Generated dynamically from Portfolio.
=========================================
`;
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
            style={{ maxWidth: '600px', maxHeight: '80vh' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="modal-header-image" style={{ height: '70px', background: 'var(--bg-secondary)', borderBottom: '1px solid rgba(0, 245, 255, 0.15)' }}>
              <button className="modal-close-btn" style={{ top: '15px', right: '15px' }} onClick={() => setShowViewModal(false)}>
                <FaTimes size={16} />
              </button>
              <div style={{ padding: '20px', fontFamily: 'var(--font-heading)', color: 'var(--accent-cyan)', fontWeight: 600 }}>
                📄 HARSH_VAGHELA_RESUME.TXT
              </div>
            </div>

            {/* Modal Body containing plain-text layout */}
            <div className="modal-body" style={{ padding: '25px', overflowY: 'auto', background: '#05070c' }}>
              <pre style={{ 
                fontFamily: 'monospace', 
                color: 'var(--text-secondary)', 
                whiteSpace: 'pre-wrap', 
                fontSize: '0.9rem',
                lineHeight: '1.45' 
              }}>
                {`=========================================
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
using modern frontend technologies. Passionate about 3D Web,
clean UI/UX, and performance optimization.

-----------------------------------------
EDUCATION
-----------------------------------------
1. Bachelor of Computer Applications (BCA) (2024 - Present)
   V.S. Patel College of Arts & Science
   Veer Narmad South Gujarat University (VNSGU)
   Relevant Subjects: C & C++ Programming, DBMS, Web Dev

2. Higher Secondary Certificate (HSC) - Science (2022 - 2024)
   Shree Vasishtha Vidyalaya, GSEB Board
   Relevant Subjects: Physics, Chemistry, Math, Computer Science

-----------------------------------------
TECHNICAL SKILLS
-----------------------------------------
- Frontend: HTML5, CSS3, JavaScript (ES6+), React.js
- Languages: C, C++, JavaScript
- Database: SQL, PL/SQL
- Tools: Git, GitHub, VS Code

-----------------------------------------
PROJECTS HIGHLIGHTS
-----------------------------------------
- DevHub Developer Community (React.js, CSS3, Storage)
- Crypto Dashboard & Tracker (React.js, Fetch API, Canvas)
- Kanban Task Board (JavaScript, CSS Grid, Storage)
- Retro Brick Breaker Game (JavaScript, Canvas API)`}
              </pre>

              <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
                <button onClick={handleDownload} className="btn-primary" style={{ width: '100%' }}>
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
