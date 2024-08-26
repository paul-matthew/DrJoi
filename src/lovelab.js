import React from "react";
import FadeInSection from "./components/FadeIn.js";
import "./App.css";

const LoveLab = () => {
  return (
    <div className="BlogContainer" style={{overflowY:'hidden'}}>
      <div id="NavlogoMobile">
        <img
          src="./logo-green4.png"
          alt="logo mobile"
          onClick={() => (window.location.href = "./")}
        />
      </div>
      <div className="Banner">
        <img src="./bannerflower.png" alt="banner" />
      </div>
      <div className="contentContainer">
        <div className="MySkill">
          <div className="SectionTitle">
            <div className="Content">
              <div
                className="MyExpertise"
                style={{
                  color: "#282938",
                  fontSize: "clamp(40px, 4vw, 61px)",
                  fontFamily: "PlayfairDisplay",
                  fontWeight: "700",
                  wordWrap: "break-word",
                }}
              >
                The Love Lab
              </div>
            </div>
          </div>
          <div className='coach-container'>
          <FadeInSection>
            <div className="section">
              <img
                src="./coach1.jpg"
                alt="Personal Guidance"
                className="sectionImage"
              />
              <div className="sectionText">
                <h2>Personal Coaching</h2>
                <p>
                  Offering one-on-one coaching sessions to provide you with
                  personalized guidance and support in your journey. Book
                  an appointment today to start making positive changes.
                </p>
              </div>
            </div>
          </FadeInSection>

          <div className="section" style={{ margin: "20px",justifyContent:'center' }}>
          <div className="sectionText caption-mobile"style={{maxWidth:'300px',visibility:'visible'}}>
              <h2>Discover My Coaching Services</h2>
            </div>

            <div className="buttonsContainer">
              <button
                className="infoButton"
                onClick={() =>
                  window.open(
                    "https://exoticrelief.setmore.com/beta/services/cf66b8eb-db57-4cde-900e-16c2ea7a34c9?source=easyshare",
                    "_blank"
                  )
                }
              >
                Finding Love
              </button>
              <button
                className="infoButton"
                onClick={() =>
                  window.open(
                    "https://exoticrelief.setmore.com/beta/services/76ed5a2c-d73d-4a10-8136-8abd0872a954?source=easyshare",
                    "_blank"
                  )
                }
              >
                Fixing Love
              </button>
              <button
                className="infoButton"
                onClick={() =>
                  window.open(
                    "https://exoticrelief.setmore.com/beta/services/1a59a8a9-5fe2-4dde-bfc0-794533574481?source=easyshare",
                    "_blank"
                  )
                }
              >
                Self-Esteem
              </button>
              <button
                className="infoButton"
                onClick={() =>
                  window.open(
                    "https://exoticrelief.setmore.com/beta/services/b068a1db-14a1-45b8-8731-8a04d48019bf?source=easyshare",
                    "_blank"
                  )
                }
              >
                Personal
              </button>
              <button
                className="infoButton"
                onClick={() =>
                  window.open(
                    "https://exoticrelief.setmore.com/beta/services/3d7a7aef-57fe-4e2a-9299-e6f2301e6700?source=easyshare",
                    "_blank"
                  )
                }
              >
                Image Consulting
              </button>
              <button
                className="infoButton"
                onClick={() =>
                  window.open(
                    "https://exoticrelief.setmore.com/beta/services/35062118-735a-47a5-98fc-905ffc11e2fa?source=easyshare",
                    "_blank"
                  )
                }
              >
                Self-Improvement
              </button>
              <button
                className="infoButton"
                onClick={() =>
                  window.open(
                    "https://exoticrelief.setmore.com/beta/services/bde59724-c761-457e-9a9f-bedc1563b0d4?source=easyshare",
                    "_blank"
                  )
                }
              >
                General
              </button>
            </div>
            <div className="sectionText caption-desktop"style={{maxWidth:'300px',visibility:"hidden"}}>
              <h2>Discover My Coaching Services</h2>
            </div>
          </div>

          <FadeInSection>
            <div className="section" style={{justifyContent:'flex-start'}}>
            <img
                src="./guidance.jpg"
                alt="Personalized Coaching"
                className="sectionImage"
              />
              <div className="sectionText">
                <h2>Personalized Guidance</h2>
                <p>
                Life can be incredibly tough, and sometimes it feels like no one truly understands the struggles you’re facing. 
                Whether you're battling mental health challenges, feeling lost or lonely, navigating the unique experiences of being neurodivergent, or need help with a situation, I’m here to support you. 
                My coaching isn’t just about giving advice; it’s about walking with you through your journey, offering compassionate guidance, and helping you find your way to a place of peace and strength. 
                I’m here for anyone who needs a listening ear and a caring heart. Let’s work together to rediscover the hope and purpose that sometimes gets buried in life’s challenges.
                </p>
              </div>

            </div>
          </FadeInSection>

          {/* <FadeInSection>
            <div className="section">
              <img
                src="./home2.png"
                alt="Live Podcasts"
                className="sectionImage"
              />
              <div className="sectionText">
                <h2>Live Podcasts</h2>
                <p>8pm Wednesdays – Live Podcasts</p>
                <p>
                  Join me every Wednesday at 8pm for engaging live podcasts where
                  we explore topics on dating, relationships, and personal growth.
                  Participate in real-time discussions, ask questions, and share
                  your experiences in a supportive community.
                </p>
                <p>
                  These sessions provide practical advice and insights to help you
                  improve your relationships and personal development. Don't miss
                  the chance to connect with like-minded individuals and gain
                  valuable knowledge every Wednesday evening.
                </p>
              </div>
            </div>
          </FadeInSection> */}
          </div>
        </div>
      </div>
      <a
        style={{
          float: "none",
          position: "fixed",
          right: "-2px",
          top: "25%",
          display: "block",
          zIndex: "1",
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
