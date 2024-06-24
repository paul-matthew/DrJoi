import React from "react";
import FadeInSection from "./components/FadeIn.js";
import "./App.css";

const LoveLab = () => {
  return (
    <div
      className="BlogContainer"
      style={{
        maxWidth: "100vw",
        overflow: "hidden",
      }}
    >
      <div id="NavlogoMobile">
        <img
          src="./logo-green3.png"
          alt="logo mobile"
          onClick={() => (window.location.href = "./")}
        />
      </div>
      <div className="Banner">
        <img src="./bannerflower.png" alt="banner" />
      </div>
      <div className="contentContainer">
        <div
          className="MySkill"
          style={{
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
              gap: "3vh",
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
                Love Lab
              </div>
            </div>
          </div>

          <FadeInSection>
            <div className="section">
              <img
                src="./home1c.png"
                alt="Personal Guidance"
                className="sectionImage"
              />
              <div className="sectionText">
                <h2>Personal Guidance</h2>
                <p>
                  By leveraging my positive and supportive persona, I want to
                  help men navigate the complexities of dating and relationships
                  by providing valuable insights and guidance while encouraging
                  a sense of empowerment and self-improvement among my audience.
                </p>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="section">
              <div className="sectionText">
                <h2>Live Podcasts</h2>
                <p>8pm Wednesdays – Live Podcasts</p>
                <p>
                  Join me every Wednesday at 8pm for engaging live podcasts
                  where we explore topics on dating, relationships, and personal
                  growth. Participate in real-time discussions, ask questions,
                  and share your experiences in a supportive community.
                </p>
                <p>
                  These sessions provide practical advice and insights to help
                  you improve your relationships and personal development. Don't
                  miss the chance to connect with like-minded individuals and
                  gain valuable knowledge every Wednesday evening.
                </p>
              </div>
              <img
                src="./home2.png"
                alt="Live Podcasts"
                className="sectionImage"
              />
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="section">
              <img
                src="./home3.png"
                alt="Personalized Coaching"
                className="sectionImage"
              />
              <div className="sectionText">
                <h2>Personalized Coaching</h2>
                <p>
                  Offering one-on-one coaching sessions to provide you with
                  personalized guidance and support in your dating journey. Book
                  an appointment today to start making positive changes.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
      <a
        style={{
          float: "none",
          position: "fixed",
          right: "-2px",
          top: "25%",
          display: "block",
          zIndex: "20000",
        }}
        rel="noreferrer"
        target="_blank"
        href="https://booking.setmore.com/scheduleappointment/d1a338ee-1d7d-447f-aaf7-9937ed4774ac"
      >
        <img
          border="none"
          src="https://storage.googleapis.com/full-assets/setmore/images/1.0/Calendar/Setmore-Book-Now.png"
          alt="Book an appointment with Paul using Setmore"
        />
      </a>
    </div>
  );
};

export default LoveLab;
