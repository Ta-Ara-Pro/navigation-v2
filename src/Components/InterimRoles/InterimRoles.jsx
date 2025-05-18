import React from 'react';
import './InterimRoles.css';
import greenTick from '../../Assets/greenTick.png';
import blueTick from '../../Assets/blueTick.png';
import paperPlane from '../../Assets/paperplane.png'; // Decorative image

const interimData = [
  {
    role: 'CMO',
    color: '#10b981',
    tick: greenTick,
    description: 'A part-time marketing leader who drives strategy, growth, and transformation - when you need it, without long-term commitment.',
  },
  {
    role: 'CBO',
    color: '#3b82f6',
    tick: blueTick,
    description: 'A part-time brand leader who shapes and strengthens your brand – aligning identity with strategy, without full-time cost.',
  },
];

const deliverables = [
  'Marketing leadership',
  'Strategy & Planning',
  'Flexible Engagement',
  'Team Empowerment',
  'Market Insight',
  'Optimization & Efficiency',
  'Go-to-Market Strategy',
  'Product & Sales Alignment',
  'Performance & ROI',
];

const descriptions = {
  'Marketing leadership':
    'Executive-level guidance to lead teams, drive decisions, and align marketing with business goals.',
  'Strategy & Planning':
    'Tailored strategies for your brand, market, and industry – with deep expertise in automotive and e-mobility across Europe & Asia.',
  'Flexible Engagement':
    'Access CMO-level skillsets as needed – from 10 to 40 hours per week. Scalable. No long-term commitment.',
  'Team Empowerment':
    'Your team executes. I provide the experience, foresight, and direction to make it effective.',
  'Market Insight':
    'Lead and translate market research into clear actions – based on trends, competitor analysis, and customer behavior.',
  'Optimization & Efficiency':
    'Spot untapped potential, streamline operations, and raise your team’s performance.',
  'Go-to-Market Strategy':
    'Build smart, actionable plans for product launches – with clear roles, metrics, and digital execution paths.',
  'Product & Sales Alignment':
    'Bridge marketing, product, and sales to accelerate GTM success.',
  'Performance & ROI':
    'Track KPIs, analyze impact, and adjust strategies with precision.',
};

const cboMetrics = [
  {
    title: 'Brand Engagement',
    desc: 'How people interact with your brand',
  },
  {
    title: 'Brand Awareness',
    desc: 'Recognition levels, both prompted and unprompted.',
  },
  {
    title: 'Brand Loyalty',
    desc: 'The value of your brand, based on loyalty, perception, and association.',
  },
  {
    title: 'Share of Voice',
    desc: 'Your brand’s presence versus competitors across media.',
  },
];

const comparisonData = [
  {
    title: 'Interim CMO:',
    description: 'Focuses on growth strategy, marketing performance, and customer acquisition.',
  },
  {
    title: 'Interim CBO:',
    description: 'Focuses on brand clarity, consistency, and long-term value creation.',
  },
];


const InterimRoles = () => {
  return (
    <>
      <div className="interim-container" id="cmo-cbo">
        {interimData.map((roleData, index) => (
          <div className="interim-column0">
            <h2>
            What Is an Interim{' '}
            <span style={{ color: roleData.color }}>{roleData.role}?</span>
          </h2>
          <p className="interim-desc">{roleData.description}</p>
          <div className="interim-column" key={index}>
          
            <div className="deliver-section">
              <h3>What I deliver?</h3>
              <ul>
                {deliverables.map((item, i) => (
                  <li key={i}>
                    <img src={roleData.tick} alt="tick" />
                    <div>
                      <strong>{item}</strong>
                      <p>{descriptions[item]}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </div>
        ))}
        <img src='/interim-navi.svg' alt='navi' 
      style={{position:'absolute',right:'7rem',bottom:'-18%',  width:'15%'}}/>
      </div>
      

      {/* 30/60/90 Plan Section */}
      <div className="plan-wrapper">
        <h2 className="plan-title">
          Getting Started: 30/60/90-Day<span className="blue-text"> CBO</span>{' '}
          Plan
        </h2>
        <p className="plan-subtitle">
          Every brand is unique—but strategic onboarding follows a rhythm. Here’s how I typically approach the first 90 days:
        </p>
        <div className="plan-circles">
          <div className="circle-block0">
            <img src={require('../../Assets/30.png')} alt="30" className="circle-number" />
            <h4>Days 1–30: Foundation</h4>
            <p>Understand the brand from the inside out – culture, values, assets, and perception. Align with key stakeholders and assess brand health.</p>
          </div>
          <div className="circle-block1">
            <img src={require('../../Assets/60.png')} alt="60" className="circle-number" />
            <h4>Days 31–60: Strategy</h4>
            <p>Shape brand positioning, messaging, and consistency. Define KPIs and align branding with business priorities.</p>
          </div>
          <div className="circle-block2">
            <img src={require('../../Assets/90.png')} alt="90" className="circle-number" />
            <h4>Days 61–90: Activation</h4>
            <p>Launch internal brand engagement. Roll out consistency tools, training, and a forward-looking brand growth roadmap.</p>
          </div>
          <img src='/interimFullRings.svg' alt='rings' 
               style={{position:'absolute',left:'5%',bottom:'-18%',  width:'40%', zIndex:0}}/>

        </div>
        <img src={paperPlane} alt="plane" className="plane-icon" />

        {/* Metrics Box */}
        <div className="metrics-section">
          <h3 className="metrics-title">CBO: Metrics That Matter</h3>
          <p className='metrics-des'>KPIs for Chief Brand Officers vary by industry and strategy, but these core <br /> metrics offer a solid foundation:</p>
          <div className="metrics-box">
            <h4>CBO: Metrics That Matter</h4>
            <ul>
              {cboMetrics.map((metric, i) => (
                <li key={i}>
                  <img src={blueTick} alt="tick" />

                  <div>
                    <strong className="title-metric">{metric.title}</strong>
                    <p className="des-metric">{metric.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="metrics-note">
              These metrics define KPIs and measure progress toward goal — like increasing awareness or boosting share of voice.
            </p>
          </div>
          <img src='/navi.svg' alt='navi' 
               style={{position:'absolute',right:'27%',top:'-23%',  width:'7%', zIndex:5}}/>
                <img src='/interimFullRings.svg' alt='rings' 
               style={{position:'absolute',right:'15%',bottom:'-20%',  opacity: 0.6 ,  width:'48%', zIndex:0}}/>
        </div>
         
        

        {/* Metrics Box */}
        <div className="2" id='vs-section'>
          <h3 className="metrics-title">CMO vs. CBO - What’s the Difference?</h3>
          <p className='metrics-des'>Together, they align short-term performance with long-term brand strength - -driving results <br /> today, while building relevance for tomorrow.</p>

          <div className="comparison-section">
          {comparisonData.map((item, index) => (
            <div className="interim-column-vs" key={index}>
              <div className="comparison-item">
                <h2>{item.title}</h2>
                <div className="desc-with-icon">
                  <img
                    src={item.title.includes('CMO') ? greenTick : blueTick}
                    alt="tick"
                    className="comparison-tick"
                  />
                  <p className="interim-desc">{item.description}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        </div>
       
        
      </div>
    </>
  );
};

export default InterimRoles;
