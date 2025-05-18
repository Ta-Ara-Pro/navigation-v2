import React from 'react';
import './ServicesSection.css';
import icon1 from '../../Assets/icon11.png';
import icon2 from '../../Assets/icon12.png';
import icon3 from '../../Assets/icon13.png';
import icon4 from '../../Assets/icon14.png';
import icon5 from '../../Assets/icon15.png';
import icon6 from '../../Assets/icon16.png';

const services = [
  {
    icon: icon1,
    title: 'Interim CMO & CBO',
    description: 'Strategic leadership when brands need clarity, speed, and results in times of change, growth, or transition.',
  },
  {
    icon: icon2,
    title: 'Voice of the customer/Engagement',
    description: 'Turn insights into action. I help you capture customer feedback, decode behavior, and translate it into meaningful brand and marketing strategies.',
  },
  {
    icon: icon3,
    title: 'Technology and Data',
    description: 'Leverage the right tools, track what matters. I align tech stacks and data insights to optimize marketing performance and brand decisions.',
  },
  {
    icon: icon4,
    title: 'Brand Strategy',
    description: 'Clarity drives growth. I define positioning, messaging, and brand architecture—built to adapt, resonate, and lead.',
  },
  {
    icon: icon5,
    title: 'Marketing Outreach',
    description: 'Make every touchpoint count. I design campaigns and experiences that connect, engage, and convert—online and offline.',
  },
  {
    icon: icon6,
    title: 'Revenue Growth',
    description: 'Marketing that delivers. I connect brand strategy with performance marketing to drive demand, increase conversions, and boost revenue.',
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <div className="services-inner">
      <div className="services-header" style={{backgroundColor:' #E4F1F0'}}>
        <h2 className="title">
          Get the best <span className="highlight">the services</span>
        </h2>
        <p className="subtitle">
          Get Proven Marketing Leadership – from CMO to Growth Architect
        </p>
        <p className="description">
          Bold. Outcome-focused. Spanning operational depth and strategic vision.
        </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <img src={service.icon} alt="icon" className="service-icon" />
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="services-button">
          <button className="cta-button">Services <span>→</span></button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
