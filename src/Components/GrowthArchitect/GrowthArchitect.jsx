import React from 'react';
import './GrowthArchitect.css';
import strategy from '../../Assets/homepagecompass.png'
import icon1 from '../../Assets/blueTick.png';
import icon2 from '../../Assets/icon2.png';
import icon3 from '../../Assets/icon3.png';
import chartSuccess from "../../Assets/chart-success.png"

const services = [
  {
    icon: icon1,
    title: 'Customer Centricity & Engagement',
    description: 'Build deeper, data-driven relationships through active listening and tailored action.',
  },
  {
    icon: icon1,
    title: 'Technology & Data',
    description: 'Use modern MarTech and analytics to make faster, smarter marketing decisions.',
  },
  {
    icon: icon1,
    title: 'Brand Strategy',
    description: 'Strengthen identity, consistency, and emotional impact across all touchpoints.',
  },
  {
    icon: icon1,
    title: 'Marketing Outreach',
    description: 'Boost visibility with integrated communication and memorable brand experiences.',
  },
  {
    icon: icon1,
    title: 'Revenue Growth',
    description: 'Drive results through high-performing, tech-enabled campaigns.',
  }
];


const GrowthArchitect = () => {
  return (
    <section className="strategy-section" id='growth'>
      <div className="strategy-inner">
        <div className="strategy-content">
          <h1 style={{fontSize:"25px"}}>From Marketing Leader to <br /> Growth Architect</h1>
          <img src={chartSuccess} alt="" />
          <div className="strategy-text">
            
            <p style={{marginTop:"1rem"}}>
              In times of rapid change, companies need more than marketing - they need <br /> strategic leadership that connects brand, technology, and performance. <br />
As a Growth Architect, I help businesses stay relevant, create value, and lead <br /> through transformation. Not by reacting - by building what’s next.
            </p>
            <p className="intro2"><strong>My 5 Strategic Modules</strong></p>
          </div>

          <div className="strategy-services">
            {services.map((service, index) => (
              <div className="service-item" key={index}>
                <div className="service-icon2">
                  <img src={service.icon} alt="service icon" />
                </div>
                <div className="service-info">
                  <h4>{service.title}</h4>
                  <p style={{paddingRight:"12rem", marginTop:"-0.1rem"}}>{service.description}</p>
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
            backgroundSize: '100% 100%',
            // overflow:'hidden'
          }}>
            <img src={strategy} alt="Compass" 
            style={{ 
               transform: 'translate(32%, 8%)',
               height: '600px',   
               width: '600px', 
              //  boxShadow: '0px 30px 50px rgba(0, 0, 0, 0.3)',
               }}/>
               <span
                 style={{
                  position: 'absolute', top: '49%', right:'75%',
                  color:  "rgb(0, 139, 252)",
                  fontWeight: '600', fontSize:'1.2rem',marginRight:'4rem',
                }}>Growth Architect</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthArchitect;
