import React, { useState } from 'react';
import '../App.css';
import App from '../App.js'
import Services from '../services.js'
import Blog from '../deals.js'
import Contact from '../contact.js'
import FadeInSection from './FadeIn.js';

function AboutUsMobile() {
    const [desktopState] = useState('About1');  
    
    const scrollToMySkills = () => {
        const mySkillsElement = document.getElementById('my-skills-mobile');
        if (mySkillsElement) {
            const yOffset = -50; // Adjust this value as needed
            const y = mySkillsElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };
    

    // const handleAboutClick = () => {
    //     setDesktopState('AboutUs');
    //   };
    //   const handleServicesClick = () => {
    //     setDesktopState('Services');
    //   };
    //   const handleBlogClick = () => {
    //     setDesktopState('Blog');
    //   };
    //   const handleContactClick = () => {
    //     setDesktopState('Contact');
    //   };

  return (
    
    <div className="AboutUs-mobile" style={{width: '100%', height: '100vh', right:'0', position: 'relative', background: 'white', maxWidth: "100%", display: "none"}}>
        <div id='NavlogoMobile'><img src='/logo2.png' alt='logo mobile'style={{height:'6vh',marginTop:'1vh'}}onClick={() => window.location.href = './'}/></div>
        {desktopState === 'About1' && (
        <div>
            <div className="Aboutus" style={{width: '100%', position: 'absolute', background: 'white', top: "2vh"}}>
                <div className="Image" style={{width: '100%', height: 'auto', right: 0, top: 0, position: 'absolute', objectFit: "cover"}}>
                    <img className="Samplebio21" style={{width: 'auto', height: '100vh', right: 0, top: '0vh', position: 'absolute',opacity:'100%'}} src="/aboutme2c.png" alt='Placeholder'/>
                </div>
                <div className="Intro" style={{ position: "relative",width: '85vw', height: '100vh', left: "5vw", top: 0, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
                    {/* <div className="E3StrategicSolutions" style={{alignSelf: 'stretch', fontSize: 'clamp(16px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', textTransform: 'uppercase', wordWrap: 'break-word'}}>E3 STRATEGIC SOLUTIONS</div> */}
                    <div className="Content" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex'}}>
                        <div className="Subheadline" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex',marginTop:'50vh'}}>
                            <div style={{color:'white',width: '100%',  fontSize: 'clamp(26px, 2vw, 24px)', marginBottom:'22vh',fontFamily: 'PlayfairDisplay', fontWeight: '400', wordWrap: 'break-word',lineHeight: '1.2', textShadow:'2px 2px 3px rgba(0, 0, 0, 0.9)' }}>
                                <div style={{width:'100%', fontSize: 'clamp(35px, 4vw, 64px)', fontFamily: 'PlayfairDisplay', fontWeight: '700', wordWrap: 'break-word'}}>Hello, my name is Dr. Joi</div>
                                <div className='Experience' style={{fontSize: 'clamp(20px, 4vw, 64px)'}}>
                                I am passionate about empowering individuals to prioritize their mental health and well-being. 
                                </div>
                                <div className="Button" style={{marginTop:'20px'}}>
                                    <div className="Label"onClick={scrollToMySkills}>READ MORE</div>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'start', marginTop: '0px',marginLeft:'20px' }}>
                                    <a href="https://www.instagram.com/theebonijoi/" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-instagram" style={{ fontSize: '20px', color: 'white', marginRight: '10px' }}></i>
                                    </a>
                                    <a href="https://www.tiktok.com/@TheEboniJoi" target="_blank" rel="noopener noreferrer">
                                        <i className="fab fa-tiktok" style={{ fontSize: '20px', color: 'white' }}></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="my-skills-mobile" style={{ backgroundColor:'white' }}>
                    <div className="MySkill" style={{ height: "auto", flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 56.67, display: 'inline-flex', padding: "0px 3vw" }}>
                        <div className="SectionTitle" style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '3vh', display: 'flex' }}>
                            <div className="Content" style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex' }}>
                                <div className="MyExpertise" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(40px, 4vw, 61px)', fontFamily: 'PlayfairDisplay', fontWeight: '700', wordWrap: 'break-word' }}>My Expertise</div>
                            </div>
                        </div>
                        <FadeInSection>
                        <div className="Row" style={{ flexWrap: "wrap", justifyContent: "flex-start",marginBottom:'160px' }}>
                            <div className="Card" style={{ maxWidth: "100%", flex: '1 1 0', background: 'white', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex',marginBottom:'20px' }}>
                                <img className="PlaceholderImage" style={{ alignSelf: 'stretch', height: 200, borderRadius: 8, objectFit: 'cover' }} src="./exp1.jpg" alt='Placeholder' />
                                <div className="CardContent" style={{ alignSelf: 'stretch', height: '220px', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex',marginBottom:'50px' }}>
                                    <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                        <div style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                            <div className="Project1" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(20px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Professional Background</div>
                                            <div  style={{ alignSelf: 'stretch', color: 'black', fontSize: 'clamp(14px, 3vw, 17px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>With over a decade of experience as a mental health practitioner, I have honed my expertise in clinical settings, catering to diverse populations and addressing a spectrum of mental health challenges. My practice encompasses individual therapy as well as facilitating group counseling sessions, allowing me to offer comprehensive support tailored to each client's needs.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Card" style={{ maxWidth: "100%", flex: '1 1 0', background: 'white', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', marginBottom:'20px' }}>
                                <img className="PlaceholderImage" style={{ alignSelf: 'stretch', height: 200, borderRadius: 8, objectFit: 'cover' }} src="./exp2.jpg" alt='Placeholder' />
                                <div className="CardContent" style={{ alignSelf: 'stretch', height: '220px', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex',marginBottom:'50px' }}>
                                    <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                        <div style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                            <div className="Project3" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(20px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Education and Qualifications</div>
                                            <div  style={{ alignSelf: 'stretch', color: '#1C1E53', fontSize: 'clamp(14px, 3vw, 17px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>My educational journey reflects a commitment to a holistic approach to mental health care. Holding degrees in medicine, public health, and business, I possess a unique interdisciplinary perspective. My Master of Public Health coupled with coursework in clinical and community-based behavioral health research methods, equips me with the skills to address mental health issues comprehensively.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Card" style={{ maxWidth: "100%", flex: '1 1 0', background: 'white', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', marginBottom:'20px' }}>
                                <img className="PlaceholderImage" style={{ alignSelf: 'stretch', height: 200, borderRadius: 8, objectFit: 'cover' }} src="./exp3.jpg" alt='Placeholder' />
                                <div className="CardContent" style={{ alignSelf: 'stretch', height: '220px', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex',marginBottom:'50px' }}>
                                    <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                        <div style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                            <div className="Project3" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(20px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Areas of Specialization</div>
                                            <div  style={{ alignSelf: 'stretch', color: '#1C1E53', fontSize: 'clamp(14px, 3vw, 17px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Drawing from my diverse educational background, I approach mental health care holistically, considering biological, social, and economic factors. This interdisciplinary approach enables me to offer comprehensive support to individuals facing mental health challenges. Whether addressing clinical symptoms or social determinants of health, I am equipped to provide personalized and effective interventions.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Card" style={{ maxWidth: "100%", flex: '1 1 0', background: 'white', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', marginBottom:'20px' }}>
                                <img className="PlaceholderImage" style={{ alignSelf: 'stretch', height: 200, borderRadius: 8, objectFit: 'cover' }} src="./exp4.jpg" alt='Placeholder' />
                                <div className="CardContent" style={{ alignSelf: 'stretch', height: '220px', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex',marginBottom:'70px' }}>
                                    <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                        <div style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                            <div className="Project3" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(20px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Professional Philosophy</div>
                                            <div  style={{ alignSelf: 'stretch', color: '#1C1E53', fontSize: 'clamp(14px, 3vw, 17px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Grounded in empathy and compassion, my professional philosophy revolves around empowering individuals to take charge of their mental health journey and lead fulfilling lives. I believe in the transformative power of therapy and prioritize creating a safe and supportive therapeutic environment where clients feel heard and valued. By fostering a collaborative partnership with my clients, I strive to facilitate growth, resilience, and holistic well-being.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </FadeInSection>

                    </div>
                    <div className="Blog" style={{ position: "relative", padding: "0px 6vw", marginBottom: "3rem" }}>
                        <div className="SectionHeader" >
                            <div className="SectionTitle" style={{ width: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                                <div className="Content" style={{ alignSelf: 'stretch', height: 77, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 32, display: 'flex',marginBottom:'50px' }}>
                                    <div className="MyPortfolio" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(40px, 4vw, 61px)', fontFamily: 'PlayfairDisplay', fontWeight: '700', wordWrap: 'break-word' }}>My Favorite Affirmations</div>
                                </div>
                            </div>
                        </div>
                        <FadeInSection>
                        <div className="Row" style={{ flexWrap: "wrap", justifyContent: "flex-start",marginBottom:'160px' }}>
                            <div className="Card" style={{ maxWidth: "100%", flex: '1 1 0', background: 'white', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', marginBottom:'20px' }}>
                                <img className="PlaceholderImage" style={{ alignSelf: 'stretch', height: 200, borderRadius: 8, objectFit: 'cover' }} src="./affirmation.jpg" alt='Placeholder' />
                                <div className="CardContent" style={{ alignSelf: 'stretch', height: '140px', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex',marginBottom:'50px' }}>
                                    <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                        <div style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                            <div className="Project3" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(18px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Affirmation for Resilience</div>
                                            <div  style={{ alignSelf: 'stretch', color: '#1C1E53', fontSize: 'clamp(14px, 3vw, 17px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>In every challenge lies an opportunity for growth and strength. I embrace adversity as a chance to evolve and thrive, knowing that I am resilient and capable of overcoming any obstacle.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Card" style={{ maxWidth: "100%", flex: '1 1 0', background: 'white', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', marginBottom:'20px' }}>
                                <img className="PlaceholderImage" style={{ alignSelf: 'stretch', height: 200, borderRadius: 8, objectFit: 'cover' }} src="./selflove.jpeg" alt='Placeholder' />
                                <div className="CardContent" style={{ alignSelf: 'stretch', height: '140px', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex',marginBottom:'50px' }}>
                                    <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                        <div style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                            <div className="Project3" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(18px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Affirmation for Self-Compassion</div>
                                            <div  style={{ alignSelf: 'stretch', color: '#1C1E53', fontSize: 'clamp(14px, 3vw, 17px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>I am worthy of love and kindness, both from others and from myself. I treat myself with compassion and understanding, acknowledging that I am human and deserving of forgiveness and grace.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Card" style={{ maxWidth: "100%", flex: '1 1 0', background: 'white', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', marginBottom:'20px' }}>
                                <img className="PlaceholderImage" style={{ alignSelf: 'stretch', height: 200, borderRadius: 8, objectFit: 'cover' }} src="./meditation1.jpeg" alt='Placeholder' />
                                <div className="CardContent" style={{ alignSelf: 'stretch', height: '140px', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex',marginBottom:'50px' }}>
                                    <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                        <div style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                            <div className="Project3" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(18px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Affirmation for Inner Peace</div>
                                            <div  style={{ alignSelf: 'stretch', color: '#1C1E53', fontSize: 'clamp(14px, 3vw, 17px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>I cultivate inner peace by letting go of worries and fears that do not serve me. I trust in the journey of life, knowing that I am guided by inner wisdom and surrounded by love and support.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </FadeInSection>
                    </div>
                </div>
            </div>
        </div>
        )}
        {desktopState === 'Homedesktop1' && (
        <App />
        )}
        {desktopState === 'Services' && (
        <Services />
        )}
        {desktopState === 'Blog' && (
        <Blog />
        )}
        {desktopState === 'Contact' && (
        <Contact />
        )}

        {/* <div className="Navmenudesktop" style={{width: '80vw', height: '10vh', right: '0vw', position: 'absolute', justifyContent: 'flex-end', alignItems: 'flex-end', display: 'inline-flex'}}>
            <div className="ListitemDesktopNaActive" style={{zIndex:2, width: 'clamp(83px, 3vw, 16px)', height: '100%', paddingLeft: 18, paddingRight: 18, paddingTop: 0, paddingBottom: 0, background: '#FFD700', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 100, textAlign: 'center', color: 'black', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}onClick={() => handleAboutClick()}>About Us</div>
            </div>
            <div className="ListitemDesktopNa" style={{width: 50, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 131, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}onClick={() => handleServicesClick()}>Services</div>
            </div>
            <div className="ListitemDesktopNa" style={{width: 50, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 131, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}onClick={() => handleBlogClick()}>Blog</div>
            </div>
            <div className="ListitemDesktopNa" style={{width: 50, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 131, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}onClick={() => handleContactClick()}>Contact</div>
            </div>
        </div> */}
    </div>
    
  );
}

export default AboutUsMobile;