import React, { useState, useEffect } from 'react';
import './footer.css';


const Footer = () => {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div>


    <footer className="footer">

      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Quick Links Section */}
          <div className="footer-section">
            <h3 className="footer-title">Quick Links</h3>
            <div className="footer-links">
              <a href="#" className="footer-link">Home</a>
              <a href="#" className="footer-link">About</a>
              <a href="#" className="footer-link">Admission</a>
              <a href="#" className="footer-link">Departments</a>
              <a href="#" className="footer-link">Facilities</a>
            </div>
          </div>

          {/* Student Resources Section */}
          <div className="footer-section">
            <h3 className="footer-title">Student Resources</h3>
            <div className="footer-links">
              <a href="#" className="footer-link">Student Corner</a>
              <a href="#" className="footer-link">TPO</a>
              <a href="#" className="footer-link">CDC</a>
              <a href="#" className="footer-link">GPK MIS</a>
              <a href="#" className="footer-link">Alumni</a>
            </div>
          </div>

          {/* Information Section */}
          <div className="footer-section">
            <h3 className="footer-title">Information</h3>
            <div className="footer-links">
              <a href="#" className="footer-link">eNewsletter</a>
              <a href="#" className="footer-link">Gallery</a>
              <a href="#" className="footer-link">Online Grievance</a>
              <a href="#" className="footer-link">Contact Us</a>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="footer-section">
            <h3 className="footer-title">Get In Touch</h3>
            <div className="contact-info">
              <p className="contact-item">
                <span className="contact-icon">📧</span>
                info@college.edu
              </p>
              <p className="contact-item">
                <span className="contact-icon">📞</span>
                +91 12345 67890
              </p>
              <p className="contact-item">
                <span className="contact-icon">📍</span>
                College Address, City, State
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {new Date().getFullYear()} College Name. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
  className={`back-to-top ${isTop ? 'hidden' : ''}`} 
  onClick={scrollToTop}
  aria-label="Back to top"
>
  <span className="back-to-top-icon">↑</span>
</button>

    </footer>
    </div>
  );
};

export default Footer;