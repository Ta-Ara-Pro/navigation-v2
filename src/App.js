import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ExperiencePage from './Components/Experience/Experience';
import HomePage from './Pages/HomePage/HomePage';
import Layout from './Layout';
import About from './Components/About/About';
import ServicesPage from './Components/ServicesPage/ServicesPage';
import ServiceReal from './Components/ServiceReal/ServiceReal';
import KeepInTouch from './Components/KeepInTouch/KeepInTouch';
import './i18n';

const App = () => {
  return (
    <Routes>
      <Route >
        <Route path="/" element={<HomePage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/interim" element={<ServicesPage />} />
        <Route path="/services" element={<ServiceReal />} />
        <Route path="/keep-in-touch" element={<KeepInTouch />} />
      </Route>
    </Routes>
  );
};

export default App;
