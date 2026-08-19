import { educationData } from '../data/education';
import ScrollReveal from '../components/ScrollReveal';
import '../styles/education.css';

export default function Education() {
  const education = educationData;

  return (
    <section id="education" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <ScrollReveal animation="fade-down" duration={600}>
            <h2>Education Timeline</h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={100} duration={600}>
            <p>My academic path, institutions, and core study subjects</p>
          </ScrollReveal>
        </div>

        {/* Timeline Wrapper */}
        <div className="timeline-wrapper">
          {/* Vertical Track Line */}
          <div className="timeline-line" />

          {/* Timeline Items */}
          {education.map((item, index) => {
            const isLeft = index % 2 === 0;
            const directionClass = isLeft ? 'left' : 'right';
            const slideAnimation = isLeft ? 'slide-right' : 'slide-left';

            return (
              <div key={index} className={`timeline-item ${directionClass}`}>
                {/* Timeline Pulsing Node */}
                <div className="timeline-node" />

                {/* Animated Timeline Card */}
                <ScrollReveal 
                  animation={slideAnimation} 
                  delay={150} 
                  duration={800}
                  className="timeline-card glass-card"
                >
                  <span className="timeline-year">{item.year}</span>
                  <h3 className="timeline-degree">{item.degree}</h3>
                  <h4 className="timeline-inst">
                    {item.institution} <span style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 300 }}>| {item.university}</span>
                  </h4>
                  <p className="timeline-desc">{item.description}</p>
                  
                  <div className="timeline-subjects">
                    {item.subjects.map((sub, idx) => (
                      <span key={idx} className="timeline-sub-tag">
                        {sub}
                      </span>
                    ))}
                  </div>
                </ScrollReveal>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
