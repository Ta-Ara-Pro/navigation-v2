import React from 'react';
import './Refrences.css';

import logo1 from '../../Assets/1.png.png';
import logo2 from '../../Assets/2.png.png';
import logo3 from '../../Assets/3.png.png';
import logo4 from '../../Assets/4.png.png';
import logo5 from '../../Assets/5.png.png';
import logo6 from '../../Assets/6.png.png';
import logo7 from '../../Assets/7.png.png';
import henkel from '../../Assets/henkel.png'

// const brandLogos = [ logo1, logo2, logo3, logo4, logo5, logo6, logo7];
const brandLogos = [
  '/logo1.svg',
  '/audi.svg', '/bugatti.svg', henkel, '/freix.svg', '/heinken.svg', '/gosser.svg'];

const Refrences = () => {
  return (
    <section className="brands-section" id='reference'>
      <h2 className="brands-title">Refrences</h2>
      
      <div className="brands-logos">
        {brandLogos.map((logo, index) => (
          <React.Fragment key={index}>
            <img src={logo} alt={`Brand ${index + 1}`} className="brand-logo" 
            style={{
              width: `${index === 3 && '75px'}`,
              height: `${index === 3 && '35px'}`,
             }}
            />
            {index === 3 && <div className="logo-divider" />}
            {/* {index !== brandLogos.length - 1 && <div className="logo-divider" />} */}
            
          </React.Fragment>
        ))}
      </div>

      <p className="brands-description">
      Proven impact across global icons and challenger brands. I’ve led marketing and brand strategy for some of the world’s most respected companies—including <br/>Audi, Bugatti, Rimac, Henkell Freixenet, Heineken, and Gösser. Each engagement shaped by high standards, real results, and deep market understanding.<br />
      My international background helps me navigate diverse cultural nuances and market dynamics.
      </p>

    </section>
  );
};

export default Refrences;
