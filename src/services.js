import React, { useState } from 'react';
import './App.css';
import App from './App'
import Blog from './deals'
import Contact from './contact'
import Modal from './modal'
import ServicesMobile from './components/ServicesMobile';
import FadeInSection from './components/FadeIn';


function Services() {
    const [desktopState,setDesktopState] = useState('Services1');  
    const [showModal, setShowModal] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
      const handleContactClick = () => {
        setDesktopState('Contact');
      };



      const services = [
        { 
            title: "Assessments", 
            description: "Assessments include state analysis and an implementation roadmap.",
            image:'./empress-tshirt.png',
            description2: (
                <div>
                    <p>Our Assessments service provides a comprehensive evaluation of your organization's current state, identifying key areas of strength and areas for improvement. Through rigorous analysis and data-driven methodologies, we deliver actionable insights to drive strategic decision-making and organizational growth.</p>
                    <p><strong>Key Features:</strong></p>
                    <ul>
                        <li>State Analysis: Thorough assessment of your organization's operational, financial, and strategic performance.</li>
                        <li>SWOT Analysis: Identification of strengths, weaknesses, opportunities, and threats impacting your business.</li>
                        <li>Strategic Recommendations: Data-driven recommendations and actionable insights to optimize business processes and enhance performance.</li>
                    </ul>
                </div>
            )
        },
        { 
            title: "Organizational Audits", 
            description: "Detailed audits of your organization.",
            image:"./empress-tshirt.png",
            description2: (
                <div>
                    <p>Our Organization Audits service offers a detailed examination of your organization's structure, processes, and performance to identify areas for improvement and operational efficiencies.</p>
                    <p><strong>Key Features:</strong></p>
                    <ul>
                        <li>Operational Audits: Evaluation of your organization's day-to-day operations and processes.</li>
                        <li>Financial Audits: Review of financial statements, budgets, and financial controls.</li>
                        <li>Compliance Audits: Assessment of compliance with industry regulations and standards.</li>
                    </ul>
                </div>
            )
        },
        { 
            title: "Program Evaluation", 
            description: "Comprehensive analysis that is used to maintain effective program.",
            image:"./empress-tshirt.png",
            description2: (
                <div>
                    <p>Our Program Evaluation service provides a comprehensive analysis of your organization's programs and initiatives to assess their effectiveness and impact. Through thorough evaluation and data analysis, we help you make informed decisions to improve program outcomes and maximize results.</p>
                    <p><strong>Key Features:</strong></p>
                    <ul>
                        <li>Performance Measurement: Evaluation of program performance against predefined objectives and benchmarks.</li>
                        <li>Outcome Assessment: Analysis of program outcomes and impact on target beneficiaries or stakeholders.</li>
                        <li>Recommendation Development: Identification of strategies and recommendations for program improvement and optimization.</li>
                    </ul>
                </div>
            )
        },
        { 
            title: "Strategic Plan", 
            description: "Strategic Plan for your organization",
            image:"./empress-tshirt.png",
            description2: (
                <div>
                    <p>Our Strategic Plan service helps your organization develop a clear and actionable roadmap to achieve its long-term goals and objectives. Through a collaborative process, we work with you to define your vision, identify strategic priorities, and establish measurable targets for success.</p>
                    <p><strong>Key Components:</strong></p>
                    <ul>
                        <li>Vision and Mission: Defining the organization's purpose, values, and long-term aspirations.</li>
                        <li>Strategic Goals: Identifying high-level strategic objectives and priorities to guide decision-making.</li>
                        <li>Action Plans: Developing detailed action plans with specific initiatives, timelines, and responsible parties.</li>
                    </ul>
                </div>
            )
        },
    ];
    

    const handleReadMoreClick = (service) => {
        setSelectedService(service);
        setShowModal(true);
        document.body.classList.add('modal-open');
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedService(null);
        document.body.classList.remove('modal-open');
    };
  
  return (
    <>
    <div className="Services">
        <div className='Banner'><img src='./banner2.png' alt='banner'style={{zIndex:2,width:'100vw',height:'auto',marginTop:'3vh', left:0, top:0}}onClick={() => window.location.href = './'}/></div>
        {desktopState === 'Services1' && (
            <div className="Servicesx" style={{width: '100%', position: 'relative', background: 'white',top: '100px',marginTop: '-50px',flexDirection: 'column', display: 'inline-flex',justifyContent: 'flex-start', alignItems: 'center'}}>
                <FadeInSection>
                    <div style={{ backgroundColor:'white' }}>
                        <div className="MySkill" style={{ height: "auto", flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 56.67, display: 'inline-flex', padding: "0px 4vw" }}>
                            <div className="SectionTitle" style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '1vh', display: 'flex' }}>
                                <div className="Content" style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex' }}>
                                    <div className="MyExpertise" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(20px, 4vw, 61px)', fontFamily: 'PlayfairDisplay', fontWeight: '700', wordWrap: 'break-word' }}>Shop</div>
                                </div>
                                <div className="MyExpertise" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(20px, 4vw, 25px)', fontFamily: 'PlayfairDisplay', fontWeight: '500', wordWrap: 'break-word' }}>“<i>I’m so excited to share with you my range of products that I have personally designed with my tender love and care. I hope they bring a smile to your day.</i>” - Dr. Joi</div>
                            </div>
                        </div>
                    </div>
                </FadeInSection>
                <FadeInSection>
                    <div className="BodyX" style={{maxWidth:'100%',flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 48, display: 'inline-flex', marginTop:'50px'}}>
                    {/* THIS IS FOR THE PRODUCTS JS */}
                    <div id="products-container" class="row justify-content-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"></div> 
                        <div className="Frame2230">
                            {services.map((service, index) => (
                            <div className="Servicecard" key={index}style={{position:'relative',backgroundColor:'white',border:'black 2px solid'}}>
                                <div className="CardImage">
                                <img className="cardpic" style={{maxHeight:'160px', opacity:'80%'}} src={`./${service.image}`} alt={service.title} />
                                </div>
                                <div className="CardTitle">
                                    <div className="TitleSer">{service.title}</div>
                                </div>
                                <div className="CardTextx" style={{paddingLeft:'20px',paddingRight:'30px'}}>{service.description}</div>
                                <div className="Button">
                                    <div className="ReadMore" onClick={() => handleReadMoreClick(service)}>READ MORE</div>
                                </div>
                            </div>
                            ))}
                        </div>
                        {showModal && <Modal onClose={handleCloseModal} service={selectedService} />}
                        {showModal ? <div className="background-overlay" /> : null}
                    </div>
                </FadeInSection>
            </div>
        )}
        {desktopState === 'Homedesktop1' && (
        <App />
        )}
        {desktopState === 'Blog' && (
        <Blog />
        )}
        {desktopState === 'Contact' && (
        <Contact />
        )}

        {/* <div className="Navmenudesktop" style={{width: '80vw', height: '10vh', right: '0vw', position: 'absolute', justifyContent: 'flex-end', alignItems: 'flex-end', display: 'inline-flex'}}>
            <div className="ListitemDesktopNa" style={{width: 115, height: '100%', paddingLeft: 18, paddingRight: 18, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 100, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}onClick={() => handleAboutClick()}>About</div>
            </div>
            <div className="ListitemDesktopNaActive" style={{zIndex:2,width: 115, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: 'rgb(130, 117, 78)', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 131, textAlign: 'center', color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}onClick={() => handleServicesClick()}>Services</div>
            </div>
            <div className="ListitemDesktopNa" style={{width: 115, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 131, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}onClick={() => handleBlogClick()}>Blog</div>
            </div>
            <div className="ListitemDesktopNa" style={{width: 115, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div className="Label" style={{width: 131, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word'}}onClick={() => handleContactClick()}>Contact</div>
            </div>
        </div> */}
    </div>
    <ServicesMobile />
    </>
  );
}

export default Services;