import { useState } from 'react';
import { FaPaperPlane, FaWhatsapp } from 'react-icons/fa';
import '../styles/contact.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Please fill in all fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      // Web3Forms API endpoint - Sends real-time email directly to harshvaghela4277@gmail.com
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '1a20a569-2fec-45b4-a807-a26252bebe70';
      
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', accessKey);
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('subject', formData.subject || 'Portfolio Inquiry');
      formDataToSend.append('message', formData.message);
      formDataToSend.append('from_name', `${formData.name} (Portfolio)`);

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setStatus('error');
        setErrorMessage(data.message || 'Submission failed. Please try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
      setErrorMessage('Network error. Please try again or reach out on WhatsApp.');
    }
  };

  const handleWhatsAppSend = () => {
    if (!formData.name.trim() && !formData.message.trim()) {
      const defaultText = encodeURIComponent("Hi Harsh, I saw your portfolio and would like to connect with you!");
      window.open(`https://wa.me/916355704701?text=${defaultText}`, '_blank');
      return;
    }

    const text = encodeURIComponent(
      `Hi Harsh!\n*Name:* ${formData.name || 'Visitor'}\n*Email:* ${formData.email || 'N/A'}\n*Subject:* ${formData.subject || 'Portfolio Inquiry'}\n*Message:* ${formData.message || 'I would like to get in touch!'}`
    );
    window.open(`https://wa.me/916355704701?text=${text}`, '_blank');
  };

  return (
    <div className="contact-form-card">
      <div className="form-card-header">
        <h3 className="form-title">Send a Message</h3>
        <p className="form-subtitle">Messages are sent directly to Harsh's inbox in real-time.</p>
      </div>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              disabled={status === 'loading'}
              required
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              disabled={status === 'loading'}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Project Inquiry / Job Opportunity"
            disabled={status === 'loading'}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            disabled={status === 'loading'}
            required
          />
        </div>

        <div className="form-actions-group">
          <button 
            type="submit" 
            className="form-submit-btn"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? (
              <span>Sending Email...</span>
            ) : (
              <>
                Send Email <FaPaperPlane size={14} />
              </>
            )}
          </button>

          <button 
            type="button" 
            onClick={handleWhatsAppSend}
            className="form-whatsapp-btn"
            title="Chat instantly on WhatsApp"
          >
            <FaWhatsapp size={18} /> Chat on WhatsApp
          </button>
        </div>

        {status === 'success' && (
          <div className="form-status success">
            🎉 <strong>Message Sent!</strong> Thank you for reaching out. Harsh will respond to your email/phone shortly!
          </div>
        )}

        {status === 'error' && (
          <div className="form-status error">
            ⚠️ {errorMessage || 'An error occurred. Please try again or reach out on WhatsApp.'}
          </div>
        )}
      </form>
    </div>
  );
}

