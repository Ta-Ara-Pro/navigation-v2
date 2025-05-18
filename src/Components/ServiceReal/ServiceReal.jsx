import React, { useEffect, useState } from "react";
import compass from '../../Assets/compass.png';
import arrow from '../../Assets/arrow.png';
import tick from '../../Assets/tick-circle.png';
import GrowthArchitect from "../GrowthArchitect/GrowthArchitect";
import BrandNavigator from "../BrandNavigator/BrandNavigator";
import ConsultancyLab from "../ConsultancyLab/ConsultancyLab";
import TopTrends from "../TopTrends/TopTrends";
import Layout from "../../Layout";
import Footer from "../Footer/Footer";

const ServiceReal = () => {
  const [angle, setAngle] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const stepTaker = () => {
    setCurrentStep((prev) => (prev >= 3 ? 0 : prev + 1));
    setAngle((prev) => prev - 90);
  };

  useEffect(() => {
    const sectionIds = ["growth", "trends", "consultancy", "brand-nav"];
    const targetId = sectionIds[currentStep];
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 1);
    }

    document.documentElement.style.setProperty('--angle', `${angle}deg`);
  }, [currentStep, angle]);

  return (
    <><img
          src="/hero.svg"
          alt="hero"
          style={{
            position: "absolute",
            bottom: "-20%",
            width: "100%",
            zIndex: 0,
          }}
        />
    <Layout/>
      <div
        id="experience"
        style={{
          display: "flex",
          flexWrap: "wrap",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          minHeight: "100vh",
          overflow: "hidden",
          justifyContent: "center",
        }}
      >
        

        {/* Left Column */}
        <div
          style={{
            flex: "1 1 400px",
            maxWidth: "600px",
            padding: "8rem 5rem",
            zIndex: 1,
          }}
        >
          <h1 style={{ fontSize: "28px", fontWeight: "bold", color: "#222" }}>
            Fields of Expertise
          </h1>
          <p style={{ fontSize: "16px", color: "#444", lineHeight: "1.6", marginBottom: "1rem" }}>
            From strategic leadership to hands-on <br />
            transformation - these four pillars define how I help <br />
            brands grow, adapt, and lead in dynamic markets.
          </p>

          <strong style={{ fontSize: "16px" }}>What I deliver:</strong>

          {[
            "From Marketing Leader to Growth Architect",
            "Brand Navigator",
            "Marketing consultancy Lab",
            "Trends in Marketing & Brand Management",
          ].map((item, index) => (
            <p
              key={index}
              style={{ fontSize: "14px", color: "#444", display: "flex", alignItems: "center", paddingTop: "1rem" }}
            >
              <img
                src={tick}
                alt="tick"
                style={{ width: "18px", height: "18px", marginRight: "8px" }}
              />
              {item}
            </p>
          ))}
        </div>

        {/* Right Column - Compass */}
        <div style={{
          flex: "1 1 400px",
          maxWidth: "600px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
          padding: "2rem",
        }}>
          <div style={{
            position: "relative",
            width: "80vw",
            maxWidth: "400px",
            aspectRatio: "1/1",
          }}>
            {/* Labels */}
            <span className={`label top ${currentStep === 0 ? 'active' : ''}`}>Growth Architect</span>
            <span className={`label left ${currentStep === 1 ? 'active' : ''}`}>Trends</span>
            <span className={`label bottom ${currentStep === 2 ? 'active' : ''}`}>Consultancy Lab</span>
            <span className={`label right ${currentStep === 3 ? 'active' : ''}`}>Brand<br />Navigator</span>

            {/* Compass Image */}
            <img
              src={compass}
              alt="compass"
              onClick={stepTaker}
              style={{
                width: "90%",
                height: "auto",
                position: "relative",
                zIndex: 2,
                cursor: "pointer",
              }}
            />

            {/* Rotating Arrow */}
            <img src={arrow} alt="arrow"
          style={{
            marginLeft:"-1.2rem",
            marginBottom:"1.5rem",
            zIndex:2,
            position: 'absolute',
            bottom: `${currentStep === 0 ? '44%' :
                currentStep === 1 ? '50%' :
                  currentStep === 2 ? '56%' :
                    currentStep === 3 ? '50%' : '45%'
              }`,
            left: `${currentStep === 0 ? '42%' :
                currentStep === 1 ? '50%' :
                  currentStep === 2 ? '42%' :
                    currentStep === 3 ? '34%' : 'none'
              }`,
            width: '18%',
            cursor: 'pointer',
            transformOrigin: 'bottom center',
            rotate:
              `${
                angle.toString()+'deg'
                    
              }`,
            transition: 'all ease 0.7s'
          }}
          onClick={() => stepTaker()} />


            {/* Decorative Rings */}
            <img
              src="/interimFullRings.svg"
              alt="rings"
              style={{
                position: "absolute",
                top: 0,
                marginTop:"-2rem",
                marginRight:"5rem",
                marginLeft:"-2rem",
                left: 0,
                width: "120%",
                height: "auto",
                zIndex: 1,
              }}
            />
          </div>
        </div>
      </div>

      {/* Sections */}
      <GrowthArchitect />
      <BrandNavigator />
      <ConsultancyLab />
      <TopTrends />

      {/* Inline CSS for labels */}
      <style>{`
        .label {
          position: absolute;
          font-weight: 600;
          color: black;
          z-index: 3;
          text-align: center;
          font-size: clamp(0.75rem, 1vw + 0.5rem, 1rem);
          transition: color 0.3s ease;
        }
        .label.active {
          color: rgb(0, 139, 252);
        }
        .label.top {
          top: 0%;
          margin-top:-2rem;
          left: 45%;
          transform: translateX(-50%);
        }
        .label.left {
          top: 50%;
          left: 0%;
          margin-left: -4rem;
          transform: translateY(-50%);
        }
        .label.bottom {
          bottom: 0;
          left: 47%;
          margin-top:1rem;
          transform: translateX(-50%);
        }
        .label.right {
          top: 50%;
          right: 0;
          margin-right:-3rem;
          transform: translateY(-50%);
        }

        @media (max-width: 768px) {
          .label {
            font-size: 0.8rem;
          }
        }
      `}</style>
       <Footer />
    </>
  );
};

export default ServiceReal;
