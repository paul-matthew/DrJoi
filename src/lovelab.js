import React from 'react';
import FadeInSection from './components/FadeIn.js';
import './App.css';

const LoveLab = () => {
  return (
    <div className="BlogContainer">
      <div id='NavlogoMobile'>
        <img src='./logo-green3.png' alt='logo mobile' onClick={() => window.location.href = './'} />
      </div>
      <div className='Banner'>
        <img src='./bannerflower.png' alt='banner' />
      </div>
      <div className="contentContainer">
        <div className="MySkill" style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 56.67, display: 'inline-flex', padding: "0px 3vw" }}>

        <div className="SectionTitle" style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '3vh', display: 'flex' }}>

        <div className="Content" style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex' }}>
            <div className="MyExpertise" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(40px, 4vw, 61px)', fontFamily: 'PlayfairDisplay', fontWeight: '700', wordWrap: 'break-word' }}>Love Lab</div>
        </div>
        </div>

            <FadeInSection>
            <div className="section">
                <img src="./home1c.png" alt="Personal Guidance" className="sectionImage" />
                <div className="sectionText">
                <h2>Personal Guidance</h2>
                <p>By leveraging my positive and supportive persona, I want to help men navigate the complexities of dating and relationships by providing valuable insights and guidance while encouraging a sense of empowerment and self-improvement among my audience.</p>
                </div>
            </div>
            </FadeInSection>
            <FadeInSection>
            <div className="section">
                <div className="sectionText">
                <h2>Live Podcasts</h2>
                <p>8pm Wednesdays – Live Podcasts</p>
                </div>
                <img src="./home2.png" alt="Live Podcasts" className="sectionImage" />
            </div>
            </FadeInSection>
            <FadeInSection>
            <div className="section">
                <img src="./home3.png" alt="Personalized Coaching" className="sectionImage" />
                <div className="sectionText">
                <h2>Personalized Coaching</h2>
                <p>Offer Personalized Coaching:</p>
                <ul class='coachingbull'>
                    <li>Offering one-on-one coaching sessions for viewers who desire more personalized guidance and support in their dating journey.</li>
                    <li>Set clear pricing and availability for coaching sessions, and promote them during my live sessions and on my social media platforms.</li>
                </ul>
                </div>
          </div>
        </FadeInSection>
      </div>
      </div>
    </div>
  );
};

export default LoveLab;

