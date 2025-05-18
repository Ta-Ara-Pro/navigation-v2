import React from 'react';
import './MotivationSection.css';
import strategy from '../../Assets/motivation.jpg'

const MotivationSection = () => {
  return (
    <section className="motivation-section">
      <div className="motivation-inner">
        <div className="motivation-image">
          <img src={strategy} alt="Motivation" />
        </div>

        <div className="motivation-content">
          <h2>Motivation</h2>
          <p>
          As a temporary executive, I aim to do more than just fill leadership gaps or manage strategic projects. I see my role as also acting as a role model in areas such as corporate culture and ethics. A key advantage I bring is knowledge transfer, developed through years of experience and frequent exposure to different corporate environments. 
          I value the opportunity to create impact in a short time.
          </p>
          <button className="motivation-button">More About Me →</button>
        </div>
      </div>
    </section>
  );
};

export default MotivationSection;
