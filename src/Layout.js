import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom'; // import useNavigate
import Footer from './Components/Footer/Footer';
import logo from './Assets/logo.png';
import Eng from './Assets/England.jpg';
import { useTranslation } from 'react-i18next';
import GermanFlag from './Assets/germany.png';

const Layout = () => {
  const navigate = useNavigate(); // initialize the hook
  const { t, i18n } = useTranslation();

  const handleContactClick = () => {
    navigate('/keep-in-touch'); // navigate to the path
  };

  const handleLogoClick =() => {
    navigate('/')
  }
  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'de' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div>
      <header className="topbar">
        <div className='topbar-line'>
          <div className="topbar-inner">
            <div className="logo-section">
              <img src={logo} alt="Logo" className="logo" onClick={handleLogoClick}/>
            </div>

            <nav className="nav desktop-only">
  <a href="/interim">{t('interim')}</a>
  <a href="/services">{t('services')}</a>
  <a href="/experience">{t('experience')}</a>
  <a href="/about">{t('about')}</a>
  <button className="contact-button" onClick={handleContactClick}>
    {t('keepInTouch')}
  </button>
  <img
    src={i18n.language === 'en' ? Eng : GermanFlag}
    alt="Language"
    className="flag"
    onClick={toggleLanguage}
    style={{ cursor: 'pointer' }}
  />
</nav>

          </div>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
