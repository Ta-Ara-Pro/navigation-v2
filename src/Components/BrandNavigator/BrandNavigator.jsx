import React from 'react';
import './BrandNavigator.css';
import infoIcon from '../../Assets/newicon.png'; 
import brandDiagram from '../../Assets/human.png'; 
import strategyCircle from '../../Assets/boss.png';
import infoicon2 from '../../Assets/newicon2.png'

const BrandNavigator = () => {
  return (
    <div className="brand-navigator-container" id='brand-nav'>
      {/* Section 1: Brand Navigator */}
      <section className="navigator-section">
        <h2 className="navigator-title">
          The <span className="quote">„BRAND NAVIGATOR“</span>{' '}
          
        </h2>
        <img src={infoIcon} alt="info" className="info-icon" />
        <p className="navigator-desc">
          The “BRAND NAVIGATOR” serves as the foundation for developing a robust, future-oriented brand strategy.
          The goal is to strengthen the <br /> brand’s core values – steadily and systemically chart a sustainable path for forward growth. <br />
          At the heart of the „BRAND NAVIGATOR“ is the development of a powerful brand identity and a clearly defined brand positioning.
          These <br /> form the strategic foundation from which goals, strategies, and actionable measures can be derived—
          ultimately driving the brand’s long- <br />term success.
        </p>
        <img src={brandDiagram} alt="Brand Diagram" className="brand-diagram" />
      </section>

      {/* Section 2: Corporate Strategy */}
      <section className="strategy-section">
        <h2 className="strategy-title">
          CORPORATE STRATEGY<span className="underscore">__</span> BRAND STRATEGY
        </h2>
        <img src={infoicon2} alt="info" className="info-icon" />
        <p className="strategy-desc">
          A chief brand officer is a key strategic role in any organization. They drive brand strategy and innovation,
          which has a significant long-term <br /> impact on the company. If your marketing team is still managing your brand,
          it’s time to give it the strategic importance and investment <br /> it deserves. Make hiring a CBO a company priority
          if you’re ready to drive true brand equity and turn your brand into a real revenue driver <br /> for your organization.
        </p>
        <img src={strategyCircle} alt="Strategy Circle" className="strategy-circle" />
      </section>
    </div>
  );
};

export default BrandNavigator;
