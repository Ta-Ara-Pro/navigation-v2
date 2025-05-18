import React from 'react';
import './ConsultancyLab.css';

import tick from '../../Assets/blackTick.png';

import strategyIcon from '../../Assets/icon-strategy.png';
import campaignsIcon from '../../Assets/icon-campaigns.png';
import digitalIcon from '../../Assets/icon-digital.png';
import contentIcon from '../../Assets/icon-content.png';
import seoIcon from '../../Assets/icon-seo.png';
import devIcon from '../../Assets/icon-dev.png';

const services = [
  {
    icon: strategyIcon,
    title: 'Brand Strategy & Development',
    subtitle: 'We define what makes your brand matter — and make it stick.',
    items: [
      'Positioning and messaging',
      'Visual & verbal identity systems',
      'Mission, vision, values alignment',
      'Target audience & persona definition',
    ],
  },
  {
    icon: campaignsIcon,
    title: 'Creative Campaigns',
    subtitle: 'From concept to execution— campaigns that connect and convert.',
    items: [
      'Cross-channel campaign development',
      'Ad concepts (digital & print)',
      'Event & activation strategies',
      'Experiential, guerrilla & sponsor-driven ideas',
      'Viral & social-first content',
    ],
  },
  {
    icon: digitalIcon,
    title: 'Digital Marketing',
    subtitle: 'Smart, scalable strategies that drive results — not just clicks.',
    items: [
      'Social media & content marketing',
      'Paid media (PPC, Meta, Google, TikTok)',
      'Influencer & partnership campaigns',
      'Email marketing automation',
      'AI-powered tools: content, lead generation & performance tracking',
    ],
  },
  {
    icon: contentIcon,
    title: 'Content Creation & Marketing',
    subtitle: 'Strategic storytelling – powered by AI and built for engagement.',
    items: [
      'Blogs, articles & long-form content',
      'Visuals: graphics, video, infographics',
      'Email, social & campaign content',
      'Interactive formats: polls, quizzes, games',
    ],
  },
  {
    icon: seoIcon,
    title: 'SEO & Analytics',
    subtitle: 'Visibility meets insight. We make your marketing measurable— and scalable.',
    items: [
      'SEO audits & keyword strategy',
      'On-page & off-page optimization',
      'Local SEO for regional reach',
      'Conversion rate optimization (CRO)',
    ],
  },
  {
    icon: devIcon,
    title: 'Design & Development',
    subtitle: 'Web experiences that look sharp — and perform even sharper.',
    items: [
      'Mobile-first, responsive web design',
      'Custom e-commerce solutions',
      'UX/UI design for seamless interaction',
      'SEO-optimized development',
      'Ongoing maintenance & updates',
    ],
  },
];

const ConsultancyLab = () => {
  return (
    <div className='gradient-background' id='consultancy'>
   <section className="lab-wrapper">
      <div className="lab-background" />
      <div className="lab-container">
        <header className="lab-header">
          <h1>Marketing Consultancy Lab</h1>
          <p className="subtitle">
            Outsource your marketing challenges. Gain clarity, momentum, and <strong>results</strong>.
          </p>
          <p className="description2">
            We’re not an agency — we’re a strategic lab for brand and growth. <br />
            Whether you’re launching, repositioning, or scaling, we bring sharp thinking, bold ideas, and practical execution.
          </p>
        </header>

        <div className="services-grid">
          {services.map((service, i) => (
            <div className="service-box" key={i}>
              <img src={service.icon} alt="icon" className="service-icon" />
              <h3>{service.title}</h3>
              <p className="service-sub">{service.subtitle}</p>
              <ul className="service-list">
                {service.items.map((item, j) => (
                  <li key={j}>
                    <img src={tick} alt="tick" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default ConsultancyLab;
