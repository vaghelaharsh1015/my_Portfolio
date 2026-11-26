import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../styles/navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 1. Scrolled header background
      setIsScrolled(window.scrollY > 40);

      // 2. Active Section Highlighting
      const scrollPosition = window.scrollY + 140; // offset for navbar height
      
      // Special case for bottom of page (reaches Contact)
      if ((window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight - 50) {
        setActiveItem('contact');
        return;
      }

      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveItem(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = isScrolled ? 65 : 80;
      const offsetPosition = element.offsetTop - navbarHeight + 5;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Logo */}
          <div className="nav-logo" onClick={() => handleLinkClick('home')}>
            <span className="logo-name">harsh</span><span className="logo-dot-dev">.dev</span>
          </div>

          {/* Desktop Links */}
          <ul className="nav-links">
            {navItems.map((item) => (
              <li 
                key={item.id} 
                className={`nav-item ${activeItem === item.id ? 'active' : ''}`}
              >
                <a 
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.id);
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle Button */}
          <button 
            className="mobile-toggle" 
            onClick={toggleMenu} 
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Overlay — outside nav so it covers full screen */}
      <div 
        className={`mobile-nav-overlay ${isOpen ? 'open' : ''}`} 
        onClick={toggleMenu}
      />

      {/* Mobile Drawer Menu — outside nav so it slides over full viewport */}
      <div className={`mobile-nav-menu ${isOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navItems.map((item) => (
            <li 
              key={item.id} 
              className={`mobile-nav-item ${activeItem === item.id ? 'active' : ''}`}
            >
              <a 
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
