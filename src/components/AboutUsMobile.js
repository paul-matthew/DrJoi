import React, { useState } from 'react';
import '../App.css';
import FadeInSection from './FadeIn.js';
import greenhori5Image from '../greenhori5.jpeg';


function AboutUsMobile() {
    const [desktopState] = useState('About1');  
    
    const scrollToMySkills = () => {
        window.location.href = '#my-skills-mobile'; 
      };

  return (
    
    <div className="AboutUs-mobile" style={{width: '100%', height: '100vh', right:'0', position: 'relative', background: 'white', maxWidth: "100%", display: "none"}}>
        <div id='NavlogoMobile'><img src='/logo-green3.png' alt='logo mobile'style={{height:'7vh',marginTop:'0vh'}}onClick={() => window.location.href = './'}/></div>
        {desktopState === 'About1' && (
        <div>
            <div className="Aboutus" style={{width: '101%', height:'100%',position: 'absolute', backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 1)), url(${greenhori5Image})`,  top: "2vh"}}>
                <div className="Image" style={{width: '80%', height: 'auto', right: 0, top: 0, position: 'absolute', objectFit: "cover"}}>
                    <img className="Samplebio21" style={{width: 'auto', height: '80vh', right: 0, top: '10vh', position: 'absolute',opacity:'100%'}} src="/aboutme2c-icon3-new.png" alt='Placeholder'/>
                </div>
                <div className="Intro" style={{ position: "relative",width: '85vw', height: '100vh', left: "5vw", top: 0, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
                    {/* <div className="E3StrategicSolutions" style={{alignSelf: 'stretch', fontSize: 'clamp(16px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', textTransform: 'uppercase', wordWrap: 'break-word'}}>E3 STRATEGIC SOLUTIONS</div> */}
                    <div className="Content" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex'}}>
                        <div className="Subheadline" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex',marginTop:'50vh'}}>
                            <div style={{color:'white',width: '100%',  fontSize: 'clamp(26px, 2vw, 24px)', marginBottom:'22vh',fontFamily: 'PlayfairDisplay', fontWeight: '400', wordWrap: 'break-word',lineHeight: '1.2', textShadow:'2px 2px 3px rgba(0, 0, 0, 0.9)' }}>
                                <div style={{width:'100%', fontSize: 'clamp(35px, 4vw, 64px)', fontFamily: 'PlayfairDisplay', fontWeight: '700', wordWrap: 'break-word'}}>Hello, my name is Dr. Joi</div>
                                <div className='Experience' style={{fontSize: 'clamp(20px, 4vw, 64px)',textShadow:'2px 2px 3px rgba(0, 0, 0, 1.9)' }}>
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
                            <div className="Card" style={{ minHeight:'650px',maxWidth: "100%", flex: '1 1 0', background: 'white', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex',marginBottom:'20px' }}>
                                <img className="PlaceholderImage" style={{ alignSelf: 'stretch', height: 200, borderRadius: 8, objectFit: 'cover' }} src="./professional.jpg" alt='Placeholder' />
                                <div className="CardContent" style={{ alignSelf: 'stretch', height: '220px', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex',marginBottom:'50px' }}>
                                    <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                        <div style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                            <div className="Project1" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(20px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Professional Background</div>
                                            <div  style={{ alignSelf: 'stretch', color: 'black', fontSize: 'clamp(14px, 3vw, 17px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>With over a decade of experience as a mental health practitioner, I have honed my expertise in hospital, clinic, and home settings, catering to diverse populations and addressing a spectrum of mental health challenges. For a training Clinical Neuropsychopharmacologist, my role as a medical doctor encompasses the diagnosis and treatment of various psychiatric and neurological disorders using pharmacological interventions. Specializing and studying the brain and behavior, I also conduct research to investigate the efficacy and safety of medications for mental health conditions, in addition to better understanding the underlying neurobiology of these disorders. </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Card" style={{ minHeight:'550px',maxWidth: "100%", flex: '1 1 0', background: 'white', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', marginBottom:'20px' }}>
                                <img className="PlaceholderImage" style={{ alignSelf: 'stretch', height: 200, borderRadius: 8, objectFit: 'cover' }} src="./grad.jpg" alt='Placeholder' />
                                <div className="CardContent" style={{ alignSelf: 'stretch', height: '220px', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex',marginBottom:'50px' }}>
                                    <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                        <div style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                            <div className="Project3" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(20px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Education and Qualifications</div>
                                            <div  style={{ alignSelf: 'stretch', color: '#1C1E53', fontSize: 'clamp(14px, 3vw, 17px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>My educational journey reflects a commitment to a holistic approach to mental health care. Holding degrees in medicine, public health, and business, I possess a unique interdisciplinary perspective. My Master of Public Health coupled with coursework in clinical and community-based behavioral health research methods, equips me with the skills to address mental health issues comprehensively.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Card" style={{ minHeight:'550px',maxWidth: "100%", flex: '1 1 0', background: 'white', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', marginBottom:'20px' }}>
                                <img className="PlaceholderImage" style={{ alignSelf: 'stretch', height: 200, borderRadius: 8, objectFit: 'cover' }} src="./expertise.jpg" alt='Placeholder' />
                                <div className="CardContent" style={{ alignSelf: 'stretch', height: '220px', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex',marginBottom:'50px' }}>
                                    <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                        <div style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                            <div className="Project3" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(20px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Areas of Specialization</div>
                                            <div style={{alignSelf: 'stretch', color: '#1C1E53', fontSize: 'clamp(10px, 3vw, 17px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap:'breakWord'}}>
                                            Drawing from my diverse educational background, experience, and training, my areas of specialization include:
                                            <ol>
                                                <li>Depression</li>
                                                <li>Anxiety</li>
                                                <li>Neurodivergence</li>
                                                <li>Autism</li>
                                                <li>Down syndrome</li>
                                                <li>Alzheimer’s</li>
                                                <li>Dementia</li>
                                                <li>Substance Abuse</li>
                                            </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Card" style={{ minHeight:'600px',axWidth: "100%", flex: '1 1 0', background: 'white', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', marginBottom:'20px' }}>
                                <img className="PlaceholderImage" style={{ alignSelf: 'stretch', height: 200, borderRadius: 8, objectFit: 'cover' }} src="./exp4.jpg" alt='Placeholder' />
                                <div className="CardContent" style={{ alignSelf: 'stretch', height: '220px', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex',marginBottom:'70px' }}>
                                    <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                        <div style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                            <div className="Project3" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(20px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Professional Philosophy</div>
                                            <div  style={{ alignSelf: 'stretch', color: '#1C1E53', fontSize: 'clamp(14px, 3vw, 17px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>My professional philosophy is not just about empathy and compassion, but also about empowering individuals to take charge of their mental health journey and lead fulfilling lives. A key principle is my emphasis on prioritizing the transformative power of self-care. I believe in creating a safe, supportive therapeutic environment where clients feel heard and valued. By fostering collaborative partnerships with my clients, I strive to facilitate growth, resilience, and holistic well-being. This unique approach sets me apart from other practitioners and ensures a personalized experience for each client.</div>
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
                            <video className="PlaceholderVideo"style={{alignSelf: "stretch",height: 200,borderRadius: 8,objectFit: "cover",}}controls>
                                <source src="./sample-affirmation.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>                                
                            <div className="CardContent" style={{ alignSelf: 'stretch', height: '340px', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex',marginBottom:'50px' }}>
                                    <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                        <div style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                            <div className="Project3" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(18px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Good Morning Affirmation</div>
                                            <div  style={{ alignSelf: 'stretch', color: '#1C1E53', fontSize: 'clamp(14px, 3vw, 17px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Start your day with positivity and purpose with these empowering affirmations. As you awaken to a new dawn, allow these affirmations to set the tone for a day filled with potential and promise. By affirming your strengths, embracing gratitude, and envisioning success, you'll embark on your journey with confidence and clarity. Let these affirmations serve as a beacon of light, guiding you towards a morning filled with joy, productivity, and boundless opportunities.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Card" style={{ maxWidth: "100%", flex: '1 1 0', background: 'white', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', marginBottom:'20px' }}>
                                <video className="PlaceholderVideo"style={{alignSelf: "stretch",height: 200,borderRadius: 8,objectFit: "cover",}}controls>
                                    <source src="./sample-affirmation.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>                                
                                <div className="CardContent" style={{ alignSelf: 'stretch', height: '340px', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex',marginBottom:'50px' }}>
                                    <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                        <div style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                            <div className="Project3" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(18px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Good Afternoon</div>
                                            <div  style={{ alignSelf: 'stretch', color: '#1C1E53', fontSize: 'clamp(14px, 3vw, 17px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>Amidst the hustle and bustle of the day, take a moment to center yourself and recharge with these uplifting affirmations. Whether you're facing challenges or embracing triumphs, these affirmations will fortify your spirit and fuel your perseverance. Remind yourself of your resilience, inner strength, and unwavering determination as you navigate through the afternoon. With each affirmation, reaffirm your ability to overcome obstacles and seize the day with unwavering resolve.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="Card" style={{ maxWidth: "100%", flex: '1 1 0', background: 'white', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex', marginBottom:'20px' }}>
                                <video className="PlaceholderVideo"style={{alignSelf: "stretch",height: 200,borderRadius: 8,objectFit: "cover",}}controls>
                                    <source src="./sample-affirmation.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>                                
                                <div className="CardContent" style={{ alignSelf: 'stretch', height: '340px', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex',marginBottom:'50px' }}>
                                    <div className="Content" style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                        <div style={{ alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex' }}>
                                            <div className="Project3" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(18px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word' }}>Good Night</div>
                                            <div  style={{ alignSelf: 'stretch', color: '#1C1E53', fontSize: 'clamp(14px, 3vw, 17px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word' }}>As the day draws to a close, grant yourself the gift of tranquility and serenity with these calming affirmations. Let go of the stresses and worries of the day as you prepare for a restful night's sleep. These affirmations will soothe your mind, ease tension from your body, and invite peace into your heart. Embrace gratitude for the day's blessings, release any lingering anxieties, and welcome a sense of calm into your soul. May these affirmations guide you into a peaceful night’s sleep, rejuvenating your spirit for the adventures that await in the morning light.</div>
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
    </div>
    
  );
}

export default AboutUsMobile;