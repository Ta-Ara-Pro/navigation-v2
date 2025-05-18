import React, { useState } from 'react';
import '../../App.css';
import BrandsSection from '../../Components/BrandsSection/BrandsSection'
import StrategySection from '../../Components/StrategySection/StrategySection';
import MotivationSection from '../../Components/MotivationSection/MotivationSection';
import logo from '../../Assets/logo.png';
import Eng from '../../Assets/Eng.png.png';
import WhyIDoThis from '../../Components/WhyIDoThis/WhyIDoThis';
import ServicesSection from '../../Components/ServicesSection/ServicesSection';
import ContactSection from '../../Components/ContactSection/ContactSection';
import Footer from '../../Components/Footer/Footer';
import telIcon from "../../Assets/tel-icon.png";
import theWay from "../../Assets/the-way.png"
import Layout from '../../Layout';

const HomePage = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const closeMenu = () => setMenuOpen(false);

    return (
        <div className={`app ${menuOpen ? 'no-scroll' : ''}`}>

            <div className={`side-menu ${menuOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={closeMenu}>×</button>
                <nav className="side-nav">
                    <a href="#" onClick={closeMenu}>Interim CMO & CBO</a>
                    <a href="services" onClick={closeMenu}>Services</a>
                    <a href="/experience" onClick={closeMenu}>Experience</a>
                    <a href="#" onClick={closeMenu}>About</a>
                    <button className="contact-button mobile-only">Keep in Touch →</button>
                </nav>
            </div>

            {menuOpen && <div className="overlay" onClick={closeMenu}></div>}

            <section ><img src='/hero.svg' alt='hero'
                style={{
                    position: 'absolute',
                    bottom: 0,
                    zIndex: 1,
                    top: 2
                }}
            />

                <Layout />
                <div className="hero">
                    <div className="hero-image-wrapper">
                        <img src={theWay} alt="The Way" className="the-way-image" />

                        <div className="moving-wrapper">
                            <img src={telIcon} alt="Phone Icon" className="tel-icon-image" />
                        </div>

                        <svg width="0" height="0">
                            <path id="roadPath" d="M100,410 L400,20" fill="none" stroke="none" />
                            {/* <path id="roadPath" d="M100,400 C150,300 250,200 400,100" fill="none" stroke="none" /> */}
                        </svg>
                    </div>

                    <div className="hero-content">
                        <h1>Navigating the intersection of<br />growth, relevance, and agility</h1>
                        <p>
                            Brand strategy as your growth compass.<br />
                            We navigate with vision, agility, and direction – never control.
                        </p>
                        <button className="appointment-button">Get Free Appointment →</button>
                    </div>
                </div>
            </section>

            <BrandsSection />
            <StrategySection />
            <MotivationSection />
            <WhyIDoThis />
            <ServicesSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default HomePage;
