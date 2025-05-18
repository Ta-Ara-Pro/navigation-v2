import React from 'react';
import './Interim.css';
import strategy from '../../Assets/interim.png';
import flag from '../../Assets/flag.png';
import health from '../../Assets/health.png';
import routeSquare from '../../Assets/route-square.png';
import pictureFrame from '../../Assets/picture-frame.png';


const Interim = () => {
  return (
    <section className="interim-section" id='marketing'>
      <div className="interim-container">
        <div className="interim-image">
          <img src={strategy} alt="Marketing Strategy" />
        </div>

        <div className="interim-text">
          <div className="interim-title">
            <h2>Interim Marketing Leadership</h2>
            <img src={flag} alt="flag icon" />
          </div>

          <p className="intro">
            I lead marketing through change – flexibly, fast, and outcome-focused. <br />
            From transformation to market entry, I drive strategic clarity, execution, and continuity.
          </p>

          <div className="interim-points">
            <div className="point">
              <img src={health} alt="flag icon" />
              <p><strong>Core strength:</strong> C-level marketing leadership, Complex project delivery.</p>
            </div>
            <div className="point">
              <img src={routeSquare} alt="route icon" />
              <p><strong>Industry focus:</strong> Automotive & mobility, B2B, hospitality.</p>
            </div>
            <div className="point">
              <img src={pictureFrame} alt="health icon" />
              <p><strong>Network:</strong> A trusted network of strategists, creatives, and tech specialists.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interim;
