import React, { useState } from 'react';
import '../App.css';
import App from '../App'
import Services from '../services'
import Blog from '../blog'
import Contact from '../contact'
import FadeInSection from './FadeIn';

function AboutUsMobile() {
    const [desktopState] = useState('About1');  
    
    const scrollToMySkills = () => {
        const mySkillsElement = document.getElementById('my-skills-mobile');
        if (mySkillsElement) {
            mySkillsElement.scrollIntoView({ behavior: 'smooth' });
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
        <div id='NavlogoMobile'><img src='./logo-new.png' alt='logo mobile'style={{height:'5vh',marginTop:'1.5vh'}}onClick={() => window.location.href = './'}/></div>
        {desktopState === 'About1' && (
        <div>
            <div className="Aboutus" style={{width: '100%', position: 'absolute', background: '#efe6dd', top: "10vh"}}>
                <div className="Image" style={{width: '100%', height: 'auto', right: 0, top: 0, position: 'absolute', objectFit: "cover"}}>
                    <img className="Samplebio21" style={{width: 'auto', height: '80vh', right: 0, top: '0vh', position: 'absolute'}} src="./biointro-tan.png" alt='Placeholder'/>
                </div>
                <div className="Intro" style={{ position: "relative",width: '85vw', height: '100vh', left: "5vw", top: 20, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'inline-flex'}}>
                    {/* <div className="E3StrategicSolutions" style={{alignSelf: 'stretch', fontSize: 'clamp(16px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', textTransform: 'uppercase', wordWrap: 'break-word'}}>E3 STRATEGIC SOLUTIONS</div> */}
                    <div className="Content" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex'}}>
                        <div className='content-name' style={{width:'100%', fontSize: 'clamp(25px, 4vw, 64px)', fontFamily: 'Playfair Display', fontWeight: '700', wordWrap: 'break-word'}}>Hello, my name is Erica Opoku</div>
                        <div className="Subheadline" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 12, display: 'flex'}}>
                            <div className="Text" style={{width: '100%',  fontSize: 'clamp(16px, 2vw, 24px)', marginBottom:'22vh',fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word',lineHeight: '1.5' }}>
                                <div className='Experience'>
                                    I have over 20 years of experience working with non-profits.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="about-button" className="Button">
                        <div className="Label"onClick={scrollToMySkills}>READ MORE</div>
                    </div>
                </div>
                <div id="my-skills-mobile" className="MySkill" style={{height: 732.33, left: 50, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 56.67, display: 'inline-flex'}}>
                    <div className="SectionTitle" style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '3vh', display: 'flex'}}>
                        <div className="MySkills" style={{textAlign: 'center', color: '#282938', fontSize: 'clamp(21px, 2vw, 21px)', fontFamily: 'Roboto', fontWeight: '600', wordWrap: 'break-word'}}>My Skills</div>
                        <div className="Content" style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex'}}>
                            <div className="MyExpertise" style={{alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(50px, 4vw, 61px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>My Expertise</div>
                        </div>
                    </div>
                    <div className="Row" style={{flexWrap: "wrap", justifyContent: "flex-start"}}>
                        <FadeInSection>
                        <div className="Content1" style={{marginBottom:50,flex: '1 1 0', padding: 32, background: 'white', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',borderRadius: 10.67, borderBottom: '4px rgb(130, 117, 78) solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                            <div className="SectionTitle" style={{alignSelf: 'stretch', height: 351.33, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex'}}>
                                <div className="StrategyDirection" style={{padding: 13.33, background: 'white', boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.10)', borderRadius: 10.67, justifyContent: 'center', alignItems: 'center', gap: 13.33, display: 'inline-flex'}}>
                                    <img className="ProductChain1" style={{width: 53.33, height: 53.33}} src="./project1.jpg" alt='Placeholder'/>
                                </div>
                                <div className="ContentX" style={{height: 239.33, gap: 21.33}}>
                                    <div className="StrategyDirection" style={{alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(30px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>Strategy & Direction</div>
                                    <div className="Place" style={{alignSelf: 'stretch', color: '#1C1E53', fontSize: 'clamp(21px, 3vw, 21px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
                                </div>
                            </div>
                        </div>
                        </FadeInSection>
                        <FadeInSection>
                        <div className="Content1" style={{marginBottom:50,flex: '1 1 0', padding: 32, background: 'white', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',borderRadius: 10.67, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                            <div className="SectionTitle" style={{alignSelf: 'stretch', height: 306.33, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 21.33, display: 'flex'}}>
                                <div className="BrandingLogo" style={{padding: 13.33, background: 'white', boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.10)', borderRadius: 10.67, justifyContent: 'center', alignItems: 'center', gap: 13.33, display: 'inline-flex'}}>
                                    <img className="Tag1" style={{width: 53.33, height: 53.33}} src="./project2.jpg" alt='Placeholder'/>
                                </div>
                                <div className="ContentX" style={{height: 205, gap: 32}}>
                                    <div className="Skill2" style={{alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(30px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>Skill #2</div>
                                    <div className="Place" style={{alignSelf: 'stretch', color: 'black', fontSize: 'clamp(21px, 3vw, 21px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
                                </div>
                            </div>
                        </div>
                        </FadeInSection>
                        <FadeInSection>
                        <div className="Content1" style={{marginBottom:50,flex: '1 1 0', padding: 32, background: 'white',boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', borderRadius: 10.67, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                            <div className="SectionTitle" style={{alignSelf: 'stretch', height: 306.33, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 21.33, display: 'flex'}}>
                                <div className="UiUxDesign" style={{padding: 13.33, background: 'white', boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.10)', borderRadius: 10.67, justifyContent: 'center', alignItems: 'center', gap: 13.33, display: 'inline-flex'}}>
                                    <img className="FeatherPen1" style={{width: 53.33, height: 53.33}} src="./project3.jpg" alt='Placeholder'/>
                                </div>
                                <div className="ContentX" style={{height: 205, gap: 32}}>
                                    <div className="Skill3" style={{alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(30px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>Skill #3</div>
                                    <div className="Place" style={{alignSelf: 'stretch', color: 'black', fontSize: 'clamp(21px, 3vw, 21px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
                                </div>
                            </div>
                        </div>
                        </FadeInSection>
                        <FadeInSection>
                        <div className="Content1 last" style={{marginBottom:50,flex: '1 1 0', padding: 32, background: 'white',boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', borderRadius: 10.67, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                            <div className="SectionTitle" style={{alignSelf: 'stretch', height: "auto", flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 21.33, display: 'flex'}}>
                                <div className="WebflowDevelopment" style={{padding: 13.33, background: 'white', boxShadow: '0px 0px 16px rgba(0, 0, 0, 0.10)', borderRadius: 10.67, justifyContent: 'center', alignItems: 'center', gap: 13.33, display: 'inline-flex'}}>
                                    <img className="FeatherPen1" style={{width: 53.33, height: 53.33}} src="./project4.jpg" alt='Placeholder'/>
                                </div>
                                <div className="ContentX" style={{alignSelf: 'stretch', height: "auto", flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex'}}>
                                    <div className="Skill4" style={{alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(30px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700',  wordWrap: 'break-word'}}>Skill #4</div>
                                    <div className="Place" style={{alignSelf: 'stretch', color: 'black', fontSize: 'clamp(21px, 3vw, 21px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</div>
                                </div>
                            </div>
                        </div>
                        </FadeInSection>
                    </div>
                </div>
                <div className="Blog" style={{ margin: "5%", marginBottom: "6rem"}}>
                    <div className="SectionHeader" style={{width: '100%', justifyContent: 'flex-start', alignItems: 'center', gap: 16.67, display: 'inline-flex'}}>
                        <div className="SectionTitle" style={{width: '100%', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                            <div className="RecentProjects" style={{textAlign: 'center', color: '#282938', fontSize: 'clamp(21px, 3vw, 21px)', fontFamily: 'Roboto', fontWeight: '600', lineHeight: 3, wordWrap: 'break-word'}}>Recent Projects</div>
                            <div className="Content" style={{alignSelf: 'stretch', height: "auto", flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 32, display: 'flex'}}>
                                <div className="MyPortfolio" style={{alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(50px, 4vw, 61px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>My Portfolio</div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="Content" style={{alignSelf: 'stretch', height: 615.67, paddingLeft: 30, paddingRight: 30, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 85.33, display: 'flex'}}>
                        <div className="Content" style={{alignSelf: 'stretch', height: 615.67, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 85.33, display: 'flex'}}> */}
                            <div className="Row" style={{flexWrap: "wrap", justifyContent: "flex-start", rowGap: "1.5rem"}}>
                            <FadeInSection>
                                <div className="Card" style={{width: "100%",flex: '1 1 0', background: 'white', boxShadow: '0px 0px 32px rgba(0, 0, 0, 0.15)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                    <img className="PlaceholderImage" style={{alignSelf: 'stretch', height: 200, borderRadius: 8,objectFit:'cover'}} src="./project1.jpg" alt='Placeholder'/>
                                    <div className="Content" style={{alignSelf: 'stretch', height: 'auto', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex'}}>
                                        <div className="Content" style={{alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex'}}>
                                            <div style={{alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex'}}>
                                                <div className="Project1" style={{alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(30px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>Project 1</div>
                                                <div className="LoremIpsumDolorSitAmetConsecteturAdipiscingElitSuspendisseVariusEnimInEros" style={{alignSelf: 'stretch', color: 'black', fontSize: 'clamp(21px, 3vw, 21px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeInSection>
                            <FadeInSection>
                                <div className="Card" style={{width: "100%",flex: '1 1 0', background: 'white', boxShadow: '0px 5.333333492279053px 16px rgba(0, 0, 0, 0.15)', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                    <img className="PlaceholderImage" style={{alignSelf: 'stretch', height: 200, borderRadius: 8, objectFit:'cover'}} src="./project2.jpg" alt='Placeholder'/>
                                    <div className="Content" style={{alignSelf: 'stretch', height: 'auto', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex'}}>
                                        <div className="Content" style={{alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex'}}>
                                            <div style={{alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex'}}>
                                                <div className="Project2" style={{alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(30px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>Project 2</div>
                                                <div className="LoremIpsumDolorSitAmetConsecteturAdipiscingElitSuspendisseVariusEnimInEros" style={{alignSelf: 'stretch', color: '#1C1E53', fontSize: 'clamp(21px, 3vw, 21px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FadeInSection>
                                <div className="Card last" style={{ width: "100%", flex: '1 1 0', background: 'white', boxShadow: '0px 5.333333492279053px 32px rgba(0, 0, 0, 0.15)', borderRadius: 8, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                    <img className="PlaceholderImage" style={{alignSelf: 'stretch', height: 200, borderRadius: 8,objectFit:'cover'}} src="./project3.jpg" alt='Placeholder'/>
                                    <div className="Content" style={{alignSelf: 'stretch', height: 'auto', padding: 32, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex'}}>
                                        <div className="Content" style={{alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex'}}>
                                            <div style={{alignSelf: 'stretch', height: '30vh', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 10.67, display: 'flex'}}>
                                                <div className="Project3" style={{alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(30px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>Project 3</div>
                                                <div className="LoremIpsumDolorSitAmetConsecteturAdipiscingElitSuspendisseVariusEnimInEros" style={{alignSelf: 'stretch', color: '#1C1E53', fontSize: 'clamp(21px, 3vw, 21px)', fontFamily: 'Roboto', fontWeight: '400', wordWrap: 'break-word'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        {/* </div>
                    </div> */}
                </div>
                {/* <div className="Testimonial" style={{height: 675.52, paddingLeft: 85.33, paddingRight: 85.33, paddingTop: 20, paddingBottom: 20, left: 0, top: 2904, position: 'absolute', background: 'white', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 106.67, display: 'inline-flex'}}>
                    <div className="SectionTitle" style={{alignSelf: 'stretch', height: 130.33, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 21.33, display: 'flex'}}>
                        <div className="ClientsFeedback" style={{width: 746.67, color: '#282938', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '600', lineHeight: 3, wordWrap: 'break-word'}}>Clients Feedback</div>
                        <div className="CustomerTestimonials" style={{width: 746.67, color: '#282938', fontSize: 64, fontFamily: 'Roboto', fontWeight: '700', wordWrap: 'break-word'}}>Customer testimonials</div>
                    </div>
                    <div className="Content" style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 42.67, display: 'inline-flex'}}>
                        <div className="Column" style={{flex: '1 1 0', padding: 42.67, borderRadius: 8, border: '1.33px #5F5FB0 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 42.67, display: 'inline-flex'}}>
                            <div className="Stars" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5.33, display: 'inline-flex'}}>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                            </div>
                            <div className="PlaceDuisCursusMiQuisViverra" style={{alignSelf: 'stretch', color: '#1C1E53', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 32, wordWrap: 'break-word'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</div>
                            <div className="Avatar" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 21.33, display: 'inline-flex'}}>
                                <img className="AvatarImage" style={{width: 74.67, height: 74.67, borderRadius: 9999}} src="https://via.placeholder.com/75x75" alt='Placeholder'/>
                                <div className="AvatarContent" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                    <div className="DianneRussell" style={{color: '#282938', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '600', lineHeight: 32, wordWrap: 'break-word'}}>Dianne Russell</div>
                                    <div className="Starbucks" style={{color: '#1C1E53', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 32, wordWrap: 'break-word'}}>Starbucks</div>
                                </div>
                            </div>
                        </div>
                        <div className="Column" style={{flex: '1 1 0', padding: 42.67, borderRadius: 8, overflow: 'hidden', border: '1.33px #5F5FB0 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 42.67, display: 'inline-flex'}}>
                            <div className="Stars" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5.33, display: 'inline-flex'}}>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                            </div>
                            <div className="PlaceDuisCursusMiQuisViverra" style={{alignSelf: 'stretch', color: '#1C1E53', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 32, wordWrap: 'break-word'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</div>
                            <div className="Avatar" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 21.33, display: 'inline-flex'}}>
                                <img className="AvatarImage" style={{width: 74.67, height: 74.67, borderRadius: 9999}} src="https://via.placeholder.com/75x75" alt='Placeholder'/>
                                <div className="AvatarContent" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}} alt='Placeholder'>
                                    <div className="KristinWatson" style={{color: '#282938', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '600', lineHeight: 32, wordWrap: 'break-word'}}>Kristin Watson</div>
                                    <div className="LouisVuitton" style={{color: '#1C1E53', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 32, wordWrap: 'break-word'}}>Louis Vuitton</div>
                                </div>
                            </div>
                        </div>
                        <div className="Column" style={{flex: '1 1 0', padding: 42.67, borderRadius: 8, overflow: 'hidden', border: '1.33px #5F5FB0 solid', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 42.67, display: 'inline-flex'}}>
                            <div className="Stars" style={{justifyContent: 'flex-start', alignItems: 'flex-start', gap: 5.33, display: 'inline-flex'}}>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                                <div className="Vector" style={{width: 26.67, height: 25.19, background: '#5F5FB0'}}></div>
                            </div>
                            <div className="PlaceDuisCursusMiQuisViverra" style={{alignSelf: 'stretch', color: '#1C1E53', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 32, wordWrap: 'break-word'}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</div>
                            <div className="Avatar" style={{justifyContent: 'flex-start', alignItems: 'center', gap: 21.33, display: 'inline-flex'}}>
                                <img className="AvatarImage" style={{width: 74.67, height: 74.67, borderRadius: 9999}} src="https://via.placeholder.com/75x75" alt='Placeholder'/>
                                <div className="AvatarContent" style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'inline-flex'}}>
                                    <div className="KathrynMurphy" style={{color: '#282938', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '600', lineHeight: 32, wordWrap: 'break-word'}}>Kathryn Murphy</div>
                                    <div className="McdonaldS" style={{color: '#1C1E53', fontSize: 21.33, fontFamily: 'Roboto', fontWeight: '400', lineHeight: 32, wordWrap: 'break-word'}}>McDonald's</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
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