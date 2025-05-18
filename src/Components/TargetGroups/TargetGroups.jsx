import React from 'react';
import './TargetGroups.css';
import startupIcon from '../../Assets/start-up.png';
import scaleupsIcon from '../../Assets/scale-ups.png';
import establishedIcon from '../../Assets/established.png';
import checkIcon from '../../Assets/check.png';

const offers = [
  {
    title: "Start-up",
    subtitle: "Building Strategy from Day One",
    icon: startupIcon,
    points: [
      "Develop a clear marketing strategy and positioning to launch with impact.",
      "Build a distinctive, scalable brand identity across channels.",
      "Create marketing frameworks that grow with your business.",
      "Align product, marketing, and sales from the start.",
      "Provide flexible, senior leadership without long-term overhead."
    ]
  },
  {
    title: "Scale-ups",
    subtitle: "Structuring Growth for Success",
    icon: scaleupsIcon,
    points: [
      "Strengthen marketing strategy to support fast expansion.",
      "Professionalize brand management for consistency across markets.",
      "Optimize marketing operations and internal collaboration.",
      "Position innovation clearly to new and existing audiences.",
      "Bring senior expertise to guide teams through scaling challenges."
    ]
  },
  {
    title: "Established",
    subtitle: "Refreshing Brand",
    icon: establishedIcon,
    points: [
      "Reposition brand and marketing to adapt to changing markets.",
      "Modernize brand management and customer experience strategies.",
      "Break down silos between marketing, sales, and communications.",
      "Lead digital transformation & AI initiatives aligned with brand goals.",
      "Provide external leadership to drive change while preserving brand equity."
    ]
  }
];

const TargetGroups = () => {
  return (
    <section className="target-section" id='target'>
      <div className="target-header">
        <h2>TARGET GROUPS</h2>
        <p>Driving Brand Power and Marketing Performance — at Every Stage of Growth</p>
      </div>
      <div className="target-cards">
        {offers.map((offer, index) => (
          <div className="target-card" key={index}>
            <div className="card-header">
              <img src={offer.icon} alt={`${offer.title} icon`} />
              <div>
                <h3>Offer for <span>{offer.title}</span></h3>
                <p>{offer.subtitle}</p>
              </div>
            </div>
            <hr style={{
              display:'flex',
            alignSelf:'center',
              width:'115%',
              border: 'none',
              borderTop: '1px solid #D8D8D8',
                marginTop:'0.9rem',
                marginBottom:'1.5rem'
                }}/>
            <ul className="card-list">
              {offer.points.map((point, i) => (
                <li key={i}>
                  <img src={checkIcon} alt="check" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="card-footer">
              <p><strong>Free</strong><br />For the first appointment</p>
              <button>Let's talk →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TargetGroups;
