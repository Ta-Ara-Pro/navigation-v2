import React from 'react';
import './Collaborative.css';
import icon1 from '../../Assets/mission.png';
import icon2 from '../../Assets/vision.png';
import icon3 from '../../Assets/values.png';
import aboutback from '../../Assets/aboutBack.png'
import group3 from '../../Assets/group3.png'

const services2 = [
    {
      icon: icon1,
      title: 'Mission',
      description: 'I guide brands through change with clarity, creativity, and data-driven thinking—turning strategy into a compass, not a constraint.',
    },
    {
      icon: icon2,
      title: 'Vision',
      description: 'I believe in brand leadership as proactive navigation - agile, inspiring, and future-focused. Flexible brands create meaningful progress.',
    },
    {
      icon: icon3,
      title: 'Values',
      description: 'Agility – Change is the norm; adaptability is key. Foresight – I connect strategy with cultural and tech shifts. Clarity – Clear positioning and a distinct voice matter. Partnership – I work collaboratively, with trust and shared purpose. Strategy is a horizon, not a fixed route.',
    }
  ];


const Collaborative = () => {
  return (
    <>
    <div className="gradient-background" id='collaborative'>
    <img src={group3} alt='background' style={{
      width:'30%', height:'70%',
       position: 'absolute', top:'20%',
      right:'0px'
    }}/>
    <section className="collaboration-section">
      <div className="collaboration-container">
 
        <div className="collaboration-text">
          <div className="collaboration-title">
            <h2>Collaborative Leadership</h2>
          </div>

          <p className="intro">
          My leadership style is inclusive and cross-functional - especially valuable during transformation, when alignment and clarity are key. 
          </p>

          <div className="collaboration-points">
            <div className="point">
              
              <p><strong>Team Structuring </strong> </p>
            </div>
            <div className="point">
              <p>I assess and optimise teams, close skill gaps, and align roles with strategic goals. </p>
            </div>
            <div className="point">
              <p><strong>Adaptability </strong></p>
            </div>
            <div className="point">
              <p>I quickly understand new industries and teams, driving change with clear strategy, strong communication, and sensitivity to context.</p>
            </div>
          </div>
        </div>
        {/* Right side background image 
  <div className="collaboration-background-image"></div>*/}
      </div>
    </section>
    <section className="services2-section">
    <div className="services2-inner">
    

      <div className="services2-grid">
        {services2.map((service, index) => (
          <div className="service2-card" key={index}>
            <img src={service.icon} alt="icon" className="service2-icon" />
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
        
    </div>
  </section>
  </div>
  </>
  );
};

export default Collaborative;
