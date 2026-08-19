import { useEffect } from 'react';
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
  useEffect(() => {
    // scroll / intersection observer logic can go here
  }, []);

  return (
    <div className="app-layout">

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
