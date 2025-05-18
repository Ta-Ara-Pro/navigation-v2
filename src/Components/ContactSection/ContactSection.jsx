import React from 'react';
import './ContactSection.css';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="contact-section">
      <h2 className="contact-title">Get in touch</h2>
      <div className="contact-box">
        <div className="contact-form">
          <h3>Drop me a message</h3>
          <p>I will get back to you as soon as possible.</p>
          <form>
            <div className="form-row">
              <input type="text" placeholder="Full Name" />
              <input type="text" placeholder="Company Name" />
            </div>
            <input type="email" placeholder="Work Email" />
            <input type="text" placeholder="Subject" />
            <textarea rows="4" placeholder="Message" />
            <button type="submit">Send</button>
          </form>
        </div>

        <div className="contact-info">
          <div className="info-item">
            {/* <FaPhoneAlt className="info-icon" /> */}
            <img src='/phone.svg' />

            <div>
              <p className="info-bold">+43 664 3810344</p>
              <p className="info-detail">Support</p>
            </div>
          </div>
          <div className="info-item">
            {/* <FaEnvelope className="info-icon" /> */}
            <img src='/mail.svg' />
            <div>
              <p className="info-bold">office@thebrandnavigation.com</p>
              <p className="info-detail">Booking Enquiry</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
