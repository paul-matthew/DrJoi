import React, { useState } from 'react';
import './App.css';
// import App from './App'
// import Services from './services'
// import Blog from './blog'
// import Contact from './contact'
import AboutUsMobile from './components/AboutUsMobile';
import FadeInSection from './components/FadeIn';
import ReactDOM from 'react-dom';


function About() {
    const [desktopState] = useState('About1');
    // const scrollToMySkills = () => {
    //     const mySkillsElement = document.querySelector('.MySkills');
    //     if (mySkillsElement) {
    //         mySkillsElement.scrollIntoView({ behavior: 'smooth' });
    //     }
    // };

    // const handleAboutClick = () => {
    //     setDesktopState('AboutUs');
    // };
    // const handleServicesClick = () => {
    //     setDesktopState('Services');
    // };
    // const handleBlogClick = () => {
    //     setDesktopState('Blog');
    // };
    // const handleContactClick = () => {
    //     setDesktopState('Contact');
    // };

    return (

        <>
            <div className="AboutUs" style={{ width: '100%', height: '100%', right: '0', position: 'relative', background: 'white'}}>
                {desktopState === 'About1' && (
                        <div className="Aboutus" style={{ width: '100%', height:'100%',top: '10vh', position: 'absolute', background: 'white' }}>
                            <div className="Image" style={{ width: '100%', height: '100%', right: 0, bottom: 0, position: 'absolute' }}>
                                <img className="aboutmepic" style={{ width: 'auto', maxWidth:'65vw',maxHeight:'80vh',height: 'auto', right: 0, top: '5vh', position: 'absolute' }} src="./aboutme2c.png" alt='Placeholder' />
                            </div>
                            <div className="Intro" style={{ width: '100%', height: '100%', top: 24, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex', padding: "0px 3vw" }}>
                                <div className="E3StrategicSolutions" style={{ alignSelf: 'stretch', color: 'black', fontSize: 'clamp(16px, 3vw, 3vw)', fontFamily: 'Roboto', fontWeight: '700', textTransform: 'uppercase', wordWrap: 'break-word', marginTop:'20px' }}>Exotic Relief by Dr. Joi</div>
                                <div className="Content" style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex' }}>
                                    <div className='' style={{ width: '30vw', color: '#25282B', fontSize: 'clamp(16px, 4vw, 4vw)', fontFamily: 'Playfair Display', fontWeight: '700', wordWrap: 'break-word' }}>Hello, my name is Joi</div>
                                    <div className="Subheadline" style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex',marginTop:'0px'}}>
                                        <div className="Text biointro" style={{ textShadow: '2px 2px 4px rgba(255, 255, 255, 0.5)',color: 'black', fontSize: 'clamp(13px, 2vw, 1.5vw)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word', lineHeight: '1.5' }}>I am passionate about empowering individuals to prioritize their mental health and well-being. As a mental health advocate, I believe in fostering a supportive and inclusive environment where everyone feels heard and valued. Through my journey and experiences, I am committed to breaking stigmas surrounding mental health and promoting self-care practices for a happier and healthier life.
                                        I am currently pursuing a Psy.D. in Clinical Psychology with an emphasis in Neuroscience, as well as an M.S. in Clinical Psychopharmacology.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div style={{ backgroundColor:'white' }}>
                                <div className="MySkill" style={{ height: "auto", flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 56.67, display: 'inline-flex', padding: "0px 3vw" }}>
                                    <div className="SectionTitle" style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '3vh', display: 'flex' }}>
                                        <div className="Content" style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex' }}>
                                            <div className="MyExpertise" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(20px, 4vw, 61px)', fontFamily: 'PlayfairDisplay', fontWeight: '700', wordWrap: 'break-word' }}>My Expertise</div>
                                        </div>
                                    </div>
                                    <FadeInSection>
                                    <div className="Row" style={{ flexWrap: "wrap", justifyContent: "flex-start",marginBottom:'160px' }}>
                                        <div className="Card" style={{ maxWidth: "100%", flex: '1 1 0', background: 'white', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex',marginBottom:'20px' }}>
                                            <img className="PlaceholderImage" style={{ alignSelf: 'stretch', height: 200, borderRadius: 8, objectFit: 'cover' }} src="./exp1.jpg" alt='Placeholder' />
                                            <div className="CardContent" style={{ alignSelf: 'stretch', height: '450px', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex',marginBottom:'50px' }}>
                                                <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                    <div style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                        <div className="Project1" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(10px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Professional Background</div>
                                                        <div  style={{ alignSelf: 'stretch', color: 'black', fontSize: 'clamp(10px, 3vw, 17px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>With over a decade of experience as a mental health practitioner, I have honed my expertise in clinical settings, catering to diverse populations and addressing a spectrum of mental health challenges. My practice encompasses individual therapy as well as facilitating group counseling sessions, allowing me to offer comprehensive support tailored to each client's needs.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Card" style={{ maxWidth: "100%", flex: '1 1 0', background: 'white', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', marginBottom:'20px' }}>
                                            <img className="PlaceholderImage" style={{ alignSelf: 'stretch', height: 200, borderRadius: 8, objectFit: 'cover' }} src="./exp2.jpg" alt='Placeholder' />
                                            <div className="CardContent" style={{ alignSelf: 'stretch', height: '450px', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex',marginBottom:'50px' }}>
                                                <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                    <div style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                        <div className="Project3" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(10px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Education and Qualifications</div>
                                                        <div  style={{ alignSelf: 'stretch', color: '#1C1E53', fontSize: 'clamp(10px, 3vw, 17px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>My educational journey reflects a commitment to a holistic approach to mental health care. Holding degrees in medicine, public health, and business, I possess a unique interdisciplinary perspective. My Master of Public Health coupled with coursework in clinical and community-based behavioral health research methods, equips me with the skills to address mental health issues comprehensively.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Card" style={{ maxWidth: "100%", flex: '1 1 0', background: 'white', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', marginBottom:'20px' }}>
                                            <img className="PlaceholderImage" style={{ alignSelf: 'stretch', height: 200, borderRadius: 8, objectFit: 'cover' }} src="./exp3.jpg" alt='Placeholder' />
                                            <div className="CardContent" style={{ alignSelf: 'stretch', height: '450px', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex',marginBottom:'50px' }}>
                                                <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                    <div style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                        <div className="Project3" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(10px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Areas of Specialization</div>
                                                        <div  style={{ alignSelf: 'stretch', color: '#1C1E53', fontSize: 'clamp(10px, 3vw, 17px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Drawing from my diverse educational background, I approach mental health care holistically, considering biological, social, and economic factors. This interdisciplinary approach enables me to offer comprehensive support to individuals facing mental health challenges. Whether addressing clinical symptoms or social determinants of health, I am equipped to provide personalized and effective interventions.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Card" style={{ maxWidth: "100%", flex: '1 1 0', background: 'white', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', marginBottom:'20px' }}>
                                            <img className="PlaceholderImage" style={{ alignSelf: 'stretch', height: 200, borderRadius: 8, objectFit: 'cover' }} src="./exp4.jpg" alt='Placeholder' />
                                            <div className="CardContent" style={{ alignSelf: 'stretch', height: '450px', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex',marginBottom:'50px' }}>
                                                <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                    <div style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                        <div className="Project3" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(10px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Professional Philosophy</div>
                                                        <div  style={{ alignSelf: 'stretch', color: '#1C1E53', fontSize: 'clamp(10px, 3vw, 17px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Grounded in empathy and compassion, my professional philosophy revolves around empowering individuals to take charge of their mental health journey and lead fulfilling lives. I believe in the transformative power of therapy and prioritize creating a safe and supportive therapeutic environment where clients feel heard and valued. By fostering a collaborative partnership with my clients, I strive to facilitate growth, resilience, and holistic well-being.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </FadeInSection>

                                </div>
                                <div className="Blog" style={{ position: "relative", padding: "0px 3vw", marginBottom: "3rem" }}>
                                    <div className="SectionHeader" style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'center', gap: 16.67, display: 'inline-flex' }}>
                                        <div className="SectionTitle" style={{ width: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex' }}>
                                            <div className="Content" style={{ alignSelf: 'stretch', height: 77, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 32, display: 'flex' }}>
                                                <div className="MyPortfolio" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(16px, 4vw, 61px)', fontFamily: 'PlayfairDisplay', fontWeight: '700', wordWrap: 'break-word' }}>My Favorite Affirmations</div>
                                            </div>
                                        </div>
                                    </div>
                                    <FadeInSection>
                                    <div className="Row" style={{ flexWrap: "wrap", justifyContent: "flex-start",marginBottom:'100px' }}>
                                        <div className="Card" style={{ maxWidth: "100%", flex: '1 1 0', background: 'white', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', marginBottom:'20px' }}>
                                            <img className="PlaceholderImage" style={{ alignSelf: 'stretch', height: 200, borderRadius: 8, objectFit: 'cover' }} src="./affirmation.jpg" alt='Placeholder' />
                                            <div className="CardContent1" style={{ alignSelf: 'stretch', height: '450px', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex',marginBottom:'0px' }}>
                                                <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                    <div style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                        <div className="Project3" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(10px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Affirmation for Resilience</div>
                                                        <div  style={{ alignSelf: 'stretch', color: '#1C1E53', fontSize: 'clamp(10px, 3vw, 17px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>In every challenge lies an opportunity for growth and strength. I embrace adversity as a chance to evolve and thrive, knowing that I am resilient and capable of overcoming any obstacle.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Card" style={{ maxWidth: "100%", flex: '1 1 0', background: 'white', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', marginBottom:'20px' }}>
                                            <img className="PlaceholderImage" style={{ alignSelf: 'stretch', height: 200, borderRadius: 8, objectFit: 'cover' }} src="./selflove.jpeg" alt='Placeholder' />
                                            <div className="CardContent1" style={{ alignSelf: 'stretch', height: '450px', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex',marginBottom:'0px' }}>
                                                <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                    <div style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                        <div className="Project3" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(10px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Affirmation for Self-Compassion</div>
                                                        <div  style={{ alignSelf: 'stretch', color: '#1C1E53', fontSize: 'clamp(10px, 3vw, 17px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>I am worthy of love and kindness, both from others and from myself. I treat myself with compassion and understanding, acknowledging that I am human and deserving of forgiveness and grace.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="Card" style={{ maxWidth: "100%", flex: '1 1 0', background: 'white', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', marginBottom:'20px' }}>
                                            <img className="PlaceholderImage" style={{ alignSelf: 'stretch', height: 200, borderRadius: 8, objectFit: 'cover' }} src="./meditation1.jpeg" alt='Placeholder' />
                                            <div className="CardContent1" style={{ alignSelf: 'stretch', height: '450px', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex',marginBottom:'0px' }}>
                                                <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                    <div style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                                        <div className="Project3" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(10px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Affirmation for Inner Peace</div>
                                                        <div  style={{ alignSelf: 'stretch', color: '#1C1E53', fontSize: 'clamp(10px, 3vw, 17px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>I cultivate inner peace by letting go of worries and fears that do not serve me. I trust in the journey of life, knowing that I am guided by inner wisdom and surrounded by love and support.</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </FadeInSection>
                                </div>
                            </div>
                        </div>
                )}
                {/* {desktopState === 'Homedesktop1' && (
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
                )} */}

                {/* <div className="Navmenudesktop" style={{ width: '80vw', height: '10vh', right: '0vw', position: 'absolute', justifyContent: 'flex-end', alignItems: 'flex-end', display: 'inline-flex', paddingLeft: "calc(100vw - 100%)" }}>
                    <div className="ListitemDesktopNaActive" style={{ zIndex: 2, width: 115, height: '100%', paddingLeft: 18, paddingRight: 18, paddingTop: 0, paddingBottom: 0,background: 'rgb(130, 117, 78)', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                        <div className="Label" style={{ width: 100, textAlign: 'center', color: 'white',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word' }} onClick={() => handleAboutClick()}>About</div>
                    </div>
                    <div className="ListitemDesktopNa" style={{ width: 115, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                        <div className="Label" style={{ width: 131, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word' }} onClick={() => handleServicesClick()}>Services</div>
                    </div>
                    <div className="ListitemDesktopNa" style={{ width: 115, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                        <div className="Label" style={{ width: 131, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word' }} onClick={() => handleBlogClick()}>Blog</div>
                    </div>
                    <div className="ListitemDesktopNa" style={{ width: 115, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                        <div className="Label" style={{ width: 131, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word' }} onClick={() => handleContactClick()}>Contact</div>
                    </div>
                </div> */}
            </div>

            <AboutUsMobile />
        </>
    );
}

ReactDOM.render(<About />, document.getElementById('root'));
export default About;