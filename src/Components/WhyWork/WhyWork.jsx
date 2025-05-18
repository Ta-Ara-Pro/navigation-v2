import React from 'react';
import '../../Components/Interim/Interim.css';
import strategy from '../../Assets/whywork.png';
import flag from '../../Assets/grow.png';
import BlackTick from '../../Assets/blackTick.png';
import routeSquare from '../../Assets/route-square.png';
import pictureFrame from '../../Assets/picture-frame.png';


const WhyWork = () => {
  return (
    <section className="interim-section1" id="why-section">
      <div className="interim-container">
        <div className="interim-image">
          <img src={strategy} alt="Marketing Strategy" />
        </div>

        <div className="interim-text-work">
          <div className="interim-title">
            <h2>Why Work with me - <br />
            Interim CMO / CBO?</h2>
            <img src={flag} alt="flag icon" />
          </div>

          <p><strong>Senior Impact. No Full-Time Overhead.</strong></p>

          <p className="intro">
          I deliver executive-level leadership - fast, flexible, and cost-efficient.
          </p>

          <p><strong>What You Get:</strong></p>

          <div className="interim-points-work">
            <div className="point">
              <img src={BlackTick} alt="flag icon" />
              <p>Strategic clarity and hands-on execution</p>
            </div>
            <div className="point">
              <img src={BlackTick} alt="route icon" />
              <p>Fast integration and immediate traction</p>
            </div>
            <div className="point">
              <img src={BlackTick} alt="health icon" />
              <p>Scalable support for growth, change, or launches</p>
            </div>
            <div className="point">
              <img src={BlackTick} alt="health icon" />
              <p>Fresh, objective perspective</p>
            </div>
            <div className="point">
              <img src={BlackTick} alt="health icon" />
              <p>Team alignment and leadership from day one</p>
            </div>
          </div>
          <p className="intro">
          Adapt Fast. Lead Strong. Deliver Results. I align quickly, set clear direction, <br />and drive momentum - without wasting time.          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyWork;
