import React, { useState } from 'react';
import './App.css';
// import App from './App.js'
// import Services from './services.js'
// import Blog from './deals.js'
import FadeInSection from './components/FadeIn.js';

function Contact() {
    const [desktopState] = useState('Contact1');  
    const [clientWidth, setClientWidth] = useState(window.innerWidth);

    const smallScreen = clientWidth <= 640;

    // const handleAboutClick = () => {
    //     setDesktopState('AboutUs');
    //   };
    //   const handleServicesClick = () => {
    //     setDesktopState('Services');
    //   };
    //   const handleBlogClick = () => {
    //     setDesktopState('Blog');
    //   };

      React.useEffect( () => {
        const handleResize = () => {
          setClientWidth(window.innerWidth)
        }
    
        window.addEventListener("resize", handleResize)
    
        return () => {
        window.removeEventListener("resize", handleResize)
    
        }
      }, [])
  
  return (
    
    <div className="ContactX" style={{width: '100%', height: '100vh', right:'0',backgroundColor:'white'}}>
        <div id='NavlogoMobile'><img src='./logo-green3.png' alt='logo mobile'style={{height:'7vh',marginTop:'0vh'}}onClick={() => window.location.href = './'}/></div>
        {desktopState === 'Contact1' && (
                    <FadeInSection>

            <div className="ContactX" style={{width: '100%', height: 'auto', top: "2vh", display: 'flex', justifyContent: 'center', alignItems: 'center', position: "absolute"}}>
                <form className="ContactForm" style={{width: '70%',minHeight:'60vh', border:'solid gray',boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)'}}>
                    <p className='contact-title' style={{ margin: "10px auto", textAlign: "center", color: 'black', fontSize: 'clamp(26px, 3vw, 30px)', fontFamily: 'PlaydairDisplay', fontWeight: '700'}}>Contact Me</p>
                    <div className="FormGroup">
                        <label htmlFor="name" style={{ display: smallScreen ? "none": "block"}}>Name</label>
                        <input type="text" id="name" name="name" placeholder={ smallScreen ? "Name": "Enter your name"} required />
                    </div>
                    <div className="FormGroup">
                        <label htmlFor="email" style={{ display: smallScreen ? "none": "block"}}>Email</label>
                        <input type="email" id="email" name="email" placeholder={ smallScreen ? "Email": "Enter your email"} required />
                    </div>
                    <div className="FormGroup">
                        <label htmlFor="message" style={{ display: smallScreen ? "none": "block"}}>Message</label>
                        <textarea id="message" name="message" rows="5" placeholder={ smallScreen ? "Message": "Enter your message"} required style={{minHeight:'20vh'}}></textarea>
                    </div>
                    <div className="FormGroup last-form-group" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <button className='Button' type="submit"><div className='Label' style={{ fontFamily: 'PlayfairDisplay' }}>Submit</div></button>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                            <a href="https://www.instagram.com/theebonijoi/" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-instagram" style={{ fontSize: '20px', color: 'black', marginRight: '10px' }}></i>
                            </a>
                            <a href="https://www.tiktok.com/@TheEboniJoi" target="_blank" rel="noopener noreferrer">
                                <i className="fab fa-tiktok" style={{ fontSize: '20px', color: 'black' }}></i>
                            </a>
                        </div>
                    </div>
                </form>
            </div>
            </FadeInSection>
        )}
    </div>
    
  );
}

export default Contact;