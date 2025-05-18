import React from 'react';
import './StrategySection.css';
import strategy from '../../Assets/homepagecompass.png'
import icon1 from '../../Assets/icon1.png';
import icon2 from '../../Assets/icon2.png';
import icon3 from '../../Assets/icon3.png';

const services = [
  {
    icon: icon1,
    title: 'Brand & Marketing Audit',
    description: 'Evaluate current brand positioning, messaging, channels, and campaign performance.',
  },
  {
    icon: icon2,
    title: 'Go-to-Market Strategy Design',
    description: 'Develop clear launch plans for new products, services, or markets, including audience segmentation, messaging, and channel mix.',
  },
  {
    icon: icon3,
    title: 'Customer Journey Mapping',
    description: 'Map and analyze the full customer experience across digital and physical touchpoints.',
  },
];


const StrategySection = () => {
  return (
    <section className="strategy-section">
      <div className="strategy-inner">
        <div className="strategy-content">
          <h1>Brand leadership is navigation – Not control</h1>
          <div className="strategy-text">
            <p className="intro"><strong>Brands grow through direction, not rigidity.</strong></p>
            <p>
              Markets shift. Disruption happens. In a world of constant change, brand strategy must act as a compass — guiding without limiting.
              <br /><br />
              <strong>THE BRAND NAVIGATION</strong> embraces change as the norm. Like sailing, strong brand leadership means course-correcting, staying focused, and steering with vision.
              <br /><br />
              There are no straight lines — just clarity of direction and the courage to adapt.
            </p>
          </div>

          <div className="strategy-services">
            {services.map((service, index) => (
              <div className="service-item" key={index}>
                <div className="service-icon">
                  <img src={service.icon} alt="service icon" />
                </div>
                <div className="service-info">
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="strategy-image">
          <div className="compass-wrapper"
          style={{
            backgroundImage:`url('/ringsRight.svg')`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right',
            backgroundSize: 'auto 100%'
          }}>
            <img src={strategy} alt="Compass" 
            style={{ 
               transform: 'translate(50%, 10%)',
               height: '440px',   
               width: 'auto', 
              //  boxShadow: '0px 30px 50px rgba(0, 0, 0, 0.3)',
               }}/>
               <span
                 style={{
                  position: 'absolute', top: '41%', right:'50%',
                  color:  "rgb(0, 139, 252)",
                  fontWeight: '600', fontSize:'1.3rem'
                }}>Strategy</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
