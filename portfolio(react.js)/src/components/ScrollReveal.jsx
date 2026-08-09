import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ 
  children, 
  animation = 'fade-up', 
  delay = 0, 
  duration = 800,
  threshold = 0.1,
  className = ''
}) {
  const ref = useRef(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion settings
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setHasRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHasRevealed(true);
        observer.unobserve(entry.target); // Trigger only once
      }
    }, {
      threshold,
      rootMargin: '0px 0px -50px 0px' // Trigger slightly before it fully rolls into viewport
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  // Determine transition styles based on active state and props
  const getAnimationStyles = () => {
    let transformValue = '';
    
    if (!hasRevealed) {
      switch (animation) {
        case 'fade-up':
          transformValue = 'translateY(30px)';
          break;
        case 'fade-down':
          transformValue = 'translateY(-30px)';
          break;
        case 'slide-left':
          transformValue = 'translateX(40px)';
          break;
        case 'slide-right':
          transformValue = 'translateX(-40px)';
          break;
        case 'zoom-in':
          transformValue = 'scale(0.95)';
          break;
        default:
          transformValue = 'none';
      }
    } else {
      transformValue = 'none';
    }

    return {
      opacity: hasRevealed ? 1 : 0,
      transform: transformValue,
      transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
    };
  };

  return (
    <div 
      ref={ref} 
      className={`scroll-reveal-container ${className}`} 
      style={getAnimationStyles()}
    >
      {children}
    </div>
  );
}
