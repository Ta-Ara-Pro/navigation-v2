import React from 'react';
import './TopTrends.css';

import icon from '../../Assets/icon-trends.png';
import tickBlue from '../../Assets/blueTick.png';
import bgImage from '../../Assets/trends-bg.png';

const leftTrends = [
  {
    title: 'AI-Powered Personalization',
    desc: 'AI delivers hyper-targeted content and experiences—boosting engagement, conversions, and customer loyalty.',
  },
  {
    title: 'CX Integration & Consistency',
    desc: 'AI helps unify brand messaging and customer experience across all channels and touchpoints.',
  },
  {
    title: 'The Agentic Shift',
    desc: 'AI agents go beyond automation—delivering 24/7 personalized support, boosting efficiency, and creating new growth opportunities.',
  },
  {
    title: 'AI-Infused Content Creation',
    desc: 'Generative AI scales content fast—but human creativity, empathy, and storytelling still set brands apart.',
  },
  {
    title: 'The Rise of Social Commerce',
    desc: 'Social platforms are becoming shopping hubs—blending content, community, and commerce into one seamless experience.',
  },
];

const rightTrends = [
  {
    title: 'Influencer Marketing is Booming',
    desc: 'Brands are turning to micro-influencers for authentic, value-driven connections with niche audiences.',
  },
  {
    title: 'Short-Form Video Content',
    desc: 'Snackable, story-driven content rules—brands must capture attention in seconds with authenticity and impact.',
  },
  {
    title: 'Voice & Visual Search',
    desc: 'As search evolves, brands must optimize for how people speak and see—with conversational keywords and visual SEO.',
  },
  {
    title: 'Augmented Reality Experiences',
    desc: 'AR brings brands to life—offering immersive try-ons, product demos, and next-level customer engagement.',
  },
  {
    title: 'Data Privacy & Ethical Marketing',
    desc: 'Trust is the new currency. Brands must be transparent, respectful, and ethical in how they handle customer data.',
  },
];

const TopTrends = () => {
  return (
    <section className="trends-wrapper" id='trends'>
      <div className="trends-background" />
      <div className="trends-container">
        <div className="trends-left">
          <div className="trends-header">
            <img src={icon} alt="icon" className="trends-icon" />
            <h2>Top Trends in Marketing &<br />Brand Management</h2>
            <p className="trends-intro">
              <strong>Top Trends in Marketing & Brand Management</strong><br />
              The rules are shifting—and so are the opportunities. From AI-driven personalization to immersive brand experiences,
              today's most effective strategies are built on adaptability, innovation, and insight. These trends show where the
              market is headed—and how forward-thinking brands stay ahead of the curve.
            </p>
          </div>
          <ul className="trend-list">
            {leftTrends.map((item, i) => (
              <li key={i}>
                <img src={tickBlue} alt="tick" />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <ul className="trend-list right-trend-list">
          {rightTrends.map((item, i) => (
            <li key={i}>
              <img src={tickBlue} alt="tick" />
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TopTrends;
