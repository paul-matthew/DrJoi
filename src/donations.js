import "./App.css";
import FadeInSection from "./components/FadeIn.js";
import React, { useState,useEffect, useRef} from "react";
import DonationModal from "./components/DonationModal.js";

const Donations = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const contentWrapperRef = useRef(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handleClickOutside = (event) => {
    if (contentWrapperRef.current && !contentWrapperRef.current.contains(event.target)) {
      setExpandedSection(null);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div
      className="DonationContainer"
      style={{
        maxWidth: "100vw",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        paddingBottom: "50px", // Extra space at the bottom
        background: "#f9f9f9",
      }}
    >
      <div id="NavlogoMobile">
        <img
          src="./logo-green4.png"
          alt="logo mobile"
          style={{
            height: "7vh",
            marginTop: "0vh",
            position: "fixed",
            left: 10,
            top: 10,
            cursor: "pointer",
          }}
          onClick={() => (window.location.href = "./")}
        />
      </div>
      <div className="Banner">
        <img
          src="./bannerflower.png"
          alt="banner"
          style={{
            zIndex: 2,
            width: "100vw",
            maxHeight: "200px",
            marginTop: "3vh",
            objectFit: "cover",
          }}
        />
      </div>
      <div
        className="ContentWrapper"
        ref={contentWrapperRef}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "30px",
          width: "100%",
          maxWidth: "800px",
        }}
      >
        <DonationModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
        <FadeInSection>
          <div
            className="DonationContent"
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              width: "100%",
              position: "relative",
            }}
          >
            <img
              src="./hands.jpg"
              alt="Helping hands"
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: "0.3",
                zIndex: "1",
              }}
            />
            <div
              className="TextOverlay"
              style={{
                position: "relative",
                zIndex: "2",
                color: "#282938",
                fontFamily: "PlayfairDisplay",
              }}
            >
              <h1
                style={{
                  fontSize: "clamp(30px, 5vw, 50px)",
                  textAlign: "center",
                  marginBottom: "20px",
                }}
              >
                Donations
              </h1>
              <p
                style={{
                  fontSize: "clamp(16px, 4vw, 20px)",
                  textAlign: "center",
                  fontStyle: "italic",
                  marginBottom: "20px",
                }}
              >
                “	The Exotic Relief Research & Mental Health Institute is dedicated to advancing the understanding and treatment of mental health conditions and addictions. 
                All donations to the nonprofit organization are used to further innovative research, global exploration of natural health practices, and community outreach aimed at reducing stigma and support neurodiversity individuals.” - Dr. Joi
              </p>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <button
                  className="donate-button"
                  onClick={() => setModalOpen(true)}
                  style={{
                    zIndex: '1',
                    backgroundColor: 'red',
                    color: 'white',
                    padding: '10px 10px',
                    cursor: 'pointer',
                    border: 'solid 1px black',
                    borderRadius: '15px',
                    marginBottom:'10px',
                  }}
                >
                  Make a Donation
                </button>
              </div>
              <p>
                All donations made are tax-deductible, as they support our mission through our 501(c)(3) nonprofit organization.
              </p>
              <div className="Section" style={{ marginBottom: "20px"}}>
                <button
                  className="button"
                  onClick={() => toggleSection("purpose")}
                >
                  Purpose and Impact
                </button>
                <div
                  className={`section-content ${expandedSection === "purpose" ? "visible" : "hidden"}`}
                  style={{margin:'10px'}}
                >
                  <p style={{ paddingTop: "20px" }}>
                    As a future Clinical Neuropsychopharmacologist dedicated to advancing mental health care, I am passionate about addressing depression, anxiety, and related conditions through innovative research and holistic approaches. The Exotic Relief Research & Mental Health Institute is committed to breaking the stigma associated with mental illness and promoting a deeper understanding of neurodivergence. Your contributions will enable us to conduct groundbreaking research into the root causes of mental health disorders and addiction, develop effective treatments, and support educational initiatives that foster awareness and acceptance. Additionally, our global expeditions will explore natural health practices in remote regions, offering valuable insights into maintaining mental and physical well-being. Your support is vital in driving these efforts forward and creating a more inclusive and compassionate society.
                  </p>
                </div>
              </div>
              <div className="Section">
                <button
                  className="button"
                  onClick={() => toggleSection("allocation")}
                >
                  Allocation and Benefits
                </button>
                <div
                  className={`section-content ${expandedSection === "allocation" ? "visible" : "hidden"}`}
                  style={{margin:'10px'}}
                >
                  <p>
                    Donations to the Exotic Relief Research & Mental Health Institute will be directed towards critical research, community outreach, and international projects aimed at enhancing mental health. Funds will support laboratory research, clinical trials, and innovative programs that address the underlying causes of mental health issues and addiction. We will also invest in educational campaigns to challenge and change societal perceptions of mental illness. As the Institute operates under a recognized 501(c)(3) nonprofit framework, contributions are tax-deductible, offering you a meaningful way to support a transformative cause. Every donation plays a crucial role in advancing our mission to revolutionize mental health care, support those with unique perspectives, and champion natural health practices globally. Your involvement is instrumental in shaping a future where mental health is understood, valued, and effectively addressed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Donations;



