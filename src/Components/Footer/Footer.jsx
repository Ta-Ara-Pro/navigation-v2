import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import logo from '../../Assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo-img" />
       
          <p className="footer-description">
            Experience the difference and unlock<br />
            the true potential
          </p>
        </div>

        <div className="footer-right">
          <div className="footer-column">
            <p className="footer-title">Main Pages</p>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Interim CMO<br />& CBO</li>
            </ul>
          </div>
          <div className="footer-column">
            <p className="footer-title">Pages</p>
            <ul>
              <li>Get in Touch</li>
              <li>About</li>
              <li><a href="/experience">Experience</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">Copyright ©2023 Flowbase.co</p>
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
