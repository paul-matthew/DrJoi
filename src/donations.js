import "./App.css";
import FadeInSection from "./components/FadeIn.js";
import React from "react";


const Donations = () => {
  return (
    <div
      className="BlogContainer"
      style={{
        maxWidth: "100vw",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        background: "white",
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
        className="PostsWrapper"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <FadeInSection>
          <div style={{ backgroundColor: "white" }}>
            <div
              className="MySkill"
              style={{
                height: "auto",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: 56.67,
                display: "inline-flex",
                padding: "0px 3vw",
              }}
            >
              <div
                className="SectionTitle"
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "1vh",
                  display: "flex",
                }}
              >
                <div
                  className="Content"
                  style={{
                    alignSelf: "stretch",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: 32,
                    display: "flex",
                  }}
                >
                  <div
                    className="MyExpertise"
                    style={{
                      alignSelf: "stretch",
                      color: "#282938",
                      fontSize: "clamp(40px, 4vw, 61px)",
                      fontFamily: "PlayfairDisplay",
                      fontWeight: "700",
                      wordWrap: "break-word",
                    }}
                  >
                    Donations
                  </div>
                </div>
                <div
                  className="MyExpertise"
                  style={{
                    alignSelf: "stretch",
                    color: "#282938",
                    fontSize: "clamp(15px, 4vw, 25px)",
                    fontFamily: "PlayfairDisplay",
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}
                >
                  “
                  <i>
                  All donations are used to further promote mental health and wellness through Exotic Relief by Dr. Joi. 
                  Refer to Terms of Use for more information.
                  </i>
                  ” - Dr. Joi
                </div>
              </div>
              <FadeInSection>
              </FadeInSection>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Donations;
