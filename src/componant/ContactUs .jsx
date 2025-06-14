import React, { useState } from 'react';
import "./ContactUs.css"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="contact-container">
      
      <div className="contact-content">
        <h1>Contact Us</h1>
        
        <div className="contact-info">
          <h2>Address</h2>
          <p>
            Government Polytechnic, Kolhapur (An Autonomous Institute of<br />
            Government of Maharashtra)<br />
            University Road, Vidyanagar, Kolhapur - 416004 (Maharashtra) India.
          </p>
          
          {/* Google Map */}
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.7730866628426!2d74.25501067491821!3d16.688234684084648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc1002e3f732899%3A0xbd46c7b4413d3652!2z4KS24KS-4KS44KSV4KWA4KSvIOCkpOCkguCkpOCljeCksOCkqOCkv-CkleClh-CkpOCkqCDgpJXgpYvgpLLgpY3gpLngpL7gpKrgpYLgpLA!5e0!3m2!1smr!2sin!4v1749193373801!5m2!1smr!2sin" 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="College Location Map"
            ></iframe>
          </div>
          
          <h2>Phone</h2>
          <p>Telephone No.: 0231 - 2521038</p>
          
          <h2>Email</h2>
          <p>E-mail: gpkolhapur@yahoo.com</p>
        </div>

        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">Name <span className="required">*</span></label>
              <div className="name-fields">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First"
                  required
                />
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email <span className="required">*</span></label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Comment or Message <span className="required">*</span></label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              />
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;