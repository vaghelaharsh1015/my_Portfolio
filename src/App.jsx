import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './components/Footer';

// Load CSS styles
import './styles/global.css';

export default function App() {
  const cursorDotRef = useRef(null);
  const cursorFollowerRef = useRef(null);

  useEffect(() => {
    const dot = cursorDotRef.current;
    const follower = cursorFollowerRef.current;
    if (!dot || !follower) return;

    // Check if user is on a touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      dot.style.display = 'none';
      follower.style.display = 'none';
      return;
    }

    const onMouseMove = (e) => {
      // Direct positioning
      dot.style.left = `${e.clientX}px`;
      dot.style.top = `${e.clientY}px`;
      
      // Follower follows with CSS transitions
      follower.style.left = `${e.clientX}px`;
      follower.style.top = `${e.clientY}px`;
    };

    const onMouseOver = (e) => {
      // Expand follower on interactive links / cards / buttons
      const isHoverable = e.target.closest('a') || 
                          e.target.closest('button') || 
                          e.target.closest('.project-card') || 
                          e.target.closest('.skill-card') || 
                          e.target.closest('.timeline-card') || 
                          e.target.closest('.footer-social-btn');
      
      if (isHoverable) {
        follower.style.width = '48px';
        follower.style.height = '48px';
        follower.style.borderColor = 'var(--accent-primary)';
        follower.style.boxShadow = '0 0 15px rgba(99, 102, 241, 0.35)';
        follower.style.backgroundColor = 'rgba(99, 102, 241, 0.05)';
        dot.style.backgroundColor = 'var(--accent-secondary)';
        dot.style.boxShadow = '0 0 10px rgba(236, 72, 153, 0.8)';
      } else {
        follower.style.width = '32px';
        follower.style.height = '32px';
        follower.style.borderColor = 'rgba(99, 102, 241, 0.3)';
        follower.style.boxShadow = 'none';
        follower.style.backgroundColor = 'transparent';
        dot.style.backgroundColor = 'var(--text-primary)';
        dot.style.boxShadow = 'none';
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
    };
  }, []);

  return (
    <div className="app-layout">
      {/* Custom Neon Cursor */}
      <div ref={cursorDotRef} className="custom-cursor" />
      <div ref={cursorFollowerRef} className="custom-cursor-follower" />

      {/* Global Background Grid & Gradient Blobs */}
      <div className="bg-grid" />
      <div className="bg-blobs">
        <div className="bg-blob bg-blob-1" />
        <div className="bg-blob bg-blob-2" />
        <div className="bg-blob bg-blob-3" />
      </div>

      {/* Sticky Header */}
      <Navbar />

      {/* Page Sections */}
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Resume />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
