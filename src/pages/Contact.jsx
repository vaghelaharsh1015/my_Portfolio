import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';
import ContactForm from '../components/ContactForm';
import ScrollReveal from '../components/ScrollReveal';
import '../styles/contact.css';

export default function Contact() {
  const { personal } = portfolioData;

  return (
    <section id="contact" className="section">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <ScrollReveal animation="fade-down" duration={600}>
            <h2>Get In Touch</h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={100} duration={600}>
            <p>Feel free to reach out for collaborations or inquiries</p>
          </ScrollReveal>
        </div>

        {/* Contact Layout Grid */}
        <div className="contact-grid">
          
          {/* Left Column: Contact details */}
          <div className="contact-info-col">
            <ScrollReveal animation="slide-right" delay={150} duration={800}>
              <div className="contact-header-text">
                <h3>Let's Build Something Amazing Together</h3>
                <p>
                  I'm currently seeking frontend developer opportunities and open source collaborations. 
                  Have an exciting project idea, or just want to say hi? Drop me a line!
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={250} duration={800} className="contact-details-list">
              {/* Email Card */}
              <div className="contact-detail-card">
                <div className="contact-detail-icon">
                  <FaEnvelope />
                </div>
                <div className="contact-detail-text">
                  <h4>Email Address</h4>
                  <a href={`mailto:${personal.email}`}>
                    {personal.email}
                  </a>
                </div>
              </div>

              {/* Phone Card */}
              <div className="contact-detail-card">
                <div className="contact-detail-icon">
                  <FaPhone />
                </div>
                <div className="contact-detail-text">
                  <h4>Phone Call</h4>
                  <p>{personal.phone}</p>
                </div>
              </div>

              {/* Location Card */}
              <div className="contact-detail-card">
                <div className="contact-detail-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="contact-detail-text">
                  <h4>Current Location</h4>
                  <p>{personal.location}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Contact form */}
          <div>
            <ScrollReveal animation="slide-left" delay={200} duration={800}>
              <ContactForm />
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
