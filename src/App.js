import React, { useState } from 'react';
import './App.css';
import About from './aboutus'
import Services from './services'
import Blog from './blog'
import Contact from './contact'
import MobileMenu from './components/MobileMenu';
import OverlaysMobile from './components/OverlaysMobile';

const desktopStateList = ["AboutUs", "Services", "Blog", "Contact"]

function App() {
  const [desktopState, setDesktopState] = useState('Homedesktop1');
  const [SeroverlayLeft, setOverlayLeft] = useState('50vw');
  const [ManoverlayLeft, setManOverlayLeft] = useState('0vw');
  const [BlogoverlayLeft, setBlogOverlayLeft] = useState('75vw');
  const [SerbuttonText, setSerButtonText] = useState('Shop');
  const [BlogbuttonText, setBlogButtonText] = useState('Deals');
  const [displayState, setDisplayState] = useState('block');
  const [displayState2, setDisplayState2] = useState('1');

  const isHomeDesktop = !desktopStateList.includes(desktopState);

  const handleButtonClick = (newState) => {
    if (desktopState === 'Homedesktop1') {
      setTimeout(() => {
        setDesktopState('Homedesktop3'); // Ease in the state change
      }, 300); // Adjust the delay for the transition duration
    }
    else if (desktopState === 'Homedesktop2') {
      setTimeout(() => {
        setDesktopState('Homedesktop1'); // Ease in the state change
      }, 300); // Adjust the delay for the transition duration
    }
    else {
      setTimeout(() => {
        setDesktopState('Homedesktop1'); // Ease in the state change
      }, 300);
    }
    // setDesktopState(newState);
    if (SeroverlayLeft === '50vw' && BlogoverlayLeft === '75vw') {
      setOverlayLeft('0vw');
      setManOverlayLeft('25vw');
      setTimeout(() => {
        setSerButtonText('About');
      }, 0); // Wait for 0.5s transition duration
    } else if (SeroverlayLeft === '0vw' && BlogoverlayLeft === '75vw') {
      setOverlayLeft('50vw');
      setManOverlayLeft('0vw');
      setTimeout(() => {
        setSerButtonText('Shop');
      }, 0); // Wait for 0.5s transition duration
    }
    else {
      setOverlayLeft('50vw');
      setBlogOverlayLeft('75vw');
      setManOverlayLeft('0vw');
      setTimeout(() => {
        setSerButtonText('Shop');
        setBlogButtonText('Deals');
      }, 0); // Wait for 0.5s transition duration
    }
  };

  const handleButton2Click = (newState) => {
    if (desktopState === 'Homedesktop1') {
      setTimeout(() => {
        setDesktopState('Homedesktop2') //2 is blog
      }, 300);
    }
    else if (desktopState === 'Homedesktop3') {
      setTimeout(() => {
        setDesktopState('Homedesktop2')
      }, 300);
    }
    else if (desktopState === 'Homedesktop2') {
      setTimeout(() => {
        setDesktopState('Homedesktop3')
      }, 300);
    }
    else {
      setTimeout(() => {
        setDesktopState('Homedesktop1')
      }, 300);
    }

    // setDesktopState(newState);
    if (BlogoverlayLeft === '75vw' && SeroverlayLeft === '50vw') {
      setOverlayLeft('0vw');
      setManOverlayLeft('50vw');
      setBlogOverlayLeft('25vw');
      setTimeout(() => {
        setSerButtonText('About');
        setBlogButtonText('Shop');
      }, 0); // Wait for 0.5s transition duration
    } else if (BlogoverlayLeft === '75vw' && SeroverlayLeft === '0vw') {
      setManOverlayLeft('50vw');
      setBlogOverlayLeft('25vw');
      setTimeout(() => {
        setBlogButtonText('Shop');
      }, 0);
    } // Wait for 0.5s transition duration
    else if (BlogoverlayLeft === '25vw' && SeroverlayLeft === '0vw') {
      setManOverlayLeft('25vw');
      setOverlayLeft('0vw');
      setBlogOverlayLeft('75vw');
      setTimeout(() => {
        setSerButtonText('About');
        setBlogButtonText('Deals');
      }, 0);
    } // Wait for 0.5s transition duration
    else {
      setOverlayLeft('50vw');
      setManOverlayLeft('0vw');
      setBlogOverlayLeft('75vw');
      setTimeout(() => {
        setSerButtonText('About');
        setBlogButtonText('Deals');
      }, 0); // Wait for 0.5s transition duration
    }
  };

  const handleAboutClick = () => {
    setDisplayState('none');
    setDisplayState2('0');
    setDesktopState('AboutUs');
  };
  const handleServicesClick = () => {
    setDisplayState('none');
    setDisplayState2('0');
    setDesktopState('Services');
  };
  const handleBlogClick = () => {
    setDisplayState('none');
    setDisplayState2('0');
    setDesktopState('Blog');
  };
  const handleContactClick = () => {
    setDisplayState('none');
    setDisplayState2('0');
    setDesktopState('Contact');
  };
  const handleHomeClick = () => {
    if (desktopState !== 'Homedesktop1') {
      setSerButtonText('Shop');
      setBlogButtonText('Deals');
        setDisplayState('block');
        setDisplayState2('1');
      setDesktopState('Homedesktop1');
      setOverlayLeft('50vw');
      setBlogOverlayLeft('75vw');
      setManOverlayLeft('0vw');
  }
  };

  return (
    <div className="Homepage" style={{ width: '100%', height: '100vh', position: 'relative', background: 'white', border: 'hidden red' }}>
      <div className="Navdesktop" style={{ zIndex: 2, position: 'absolute', width: "100%" }}>
        <div className="Navbanner" style={{ width: '100%', height: '10vh', left: 0, top: 0, position: 'absolute', background: '#0E0E0E' }} />
        <div className="Navlogo" style={{ width: 99, height: '10vh', left: 39, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', display: 'inline-flex' }}>
          <div className="Logos" style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }} onClick={() => handleHomeClick()}>
            <img className="Logo1" style={{ width: 'auto', height: '8vh',marginTop:'0px' }} src="./logo2.png" alt="logo" />

          </div>
        </div>
      </div>
      <div id='Navmenudesktop' className="Navmenudesktop" style={{ zIndex: 2, width: '80vw', height: '10vh', right: '0vw', position: 'absolute', justifyContent: 'flex-end', alignItems: 'flex-end', display: 'inline-flex' }}>
        <div className="ListitemDesktopNa" style={{ width: 115, height: '100%', paddingLeft: 18, paddingRight: 18, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}onClick={() => handleAboutClick()}>
          <div className="Label" style={{ width: 100, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'PlayfairDisplay', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word' }}>About</div>
        </div>
        <div className="ListitemDesktopNa" style={{ width: 115, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}onClick={() => handleServicesClick()}>
          <div className="Label" style={{ width: "auto", textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'PlayfairDisplay', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word' }}>Services</div>
        </div>
        <div className="ListitemDesktopNa" style={{ width: 115, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}onClick={() => handleBlogClick()}>
          <div className="Label" style={{ width: 131, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'PlayfairDisplay', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word' }} >Blog</div>
        </div>
        <div className="ListitemDesktopNa" style={{ width: 115, height: '100%', paddingLeft: 38, paddingRight: 38, paddingTop: 0, paddingBottom: 0, background: '#0E0E0E', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}onClick={() => handleContactClick()}>
          <div className="Label" style={{ width: 131, textAlign: 'center', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'PlayfairDisplay', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word' }}>Contact</div>
        </div>
      </div>

      <MobileMenu handleContactClick={handleContactClick} handleBlogClick={handleBlogClick} handleServicesClick={handleServicesClick} handleAboutClick={handleAboutClick} desktopState={desktopState} />

      <div className="Rectangle158" style={{ display: desktopStateList.includes(desktopState) ? "none":displayState, zIndex: displayState2, width: '25vw', height: '15vh', maxHeight: "10%", left: `${SeroverlayLeft.replace("vw", "")}%`, top: '73vh', position: 'absolute', background: 'rgba(120, 79, 57, 0.6)', transition: 'left 0.5s ease-in-out' }} />
      <div className="Rectangle158" style={{ display: desktopStateList.includes(desktopState) ? "none":displayState, zIndex: displayState2, width: '25vw', height: '15vh', maxHeight: "10%", left: `${BlogoverlayLeft.replace("vw", "")}%`, top: '73vh', position: 'absolute', background: 'rgba(120, 79, 57, 0.6)', transition: 'left 0.5s ease-in-out' }} />
      {/* MAIN */}
      <div className="Overlay1" style={{ display: desktopStateList.includes(desktopState) ? "none":displayState, zIndex: displayState2, width: '50vw', height: '100vh', left: `${ManoverlayLeft.replace("vw", "")}%`, top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)', transition: 'left 0.5s ease-in-out' }}></div>

      {/* Services */}
      <div className="Overlay2" style={{ display: desktopStateList.includes(desktopState) ? "none":displayState, zIndex: displayState2, width: '25vw', height: '100vh', left: `${SeroverlayLeft.replace("vw", "")}%`, top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.0)', transition: 'left 0.5s ease-in-out' }} />
      <div id='HoverOverlay2' className="HoverOverlay2" style={{ zIndex: displayState2, opacity: displayState2, width: '25vw', height: '100vh', left: `${SeroverlayLeft.replace("vw", "")}%`, top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.0)', flexDirection: 'column', alignItems: 'center', gap: 8, display: desktopStateList.includes(desktopState) ? "none":'inline-flex', transition: 'left 0.5s ease-in-out' }}>
        <div className="ButtonServices" style={{ position: 'absolute', marginTop: 0, height: '15vh', top: '70vh', textAlign: 'center', color: 'white', fontSize: 'clamp(12px, 3vw, 30px)', fontFamily: 'PlayfairDisplay', fontWeight: '700', zIndex: 1, letterSpacing: 3, wordWrap: 'break-word', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => handleButtonClick(desktopState)}>{SerbuttonText}</div>
      </div>

      {/* Blog */}
      <div className="Overlay3" style={{ display: desktopStateList.includes(desktopState) ? "none":displayState, zIndex: displayState2, width: '25vw', height: '100vh', left: `${BlogoverlayLeft.replace("vw", "")}%`, top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.0)', transition: 'left 0.5s ease-in-out' }} />
      <div id='HoverOverlay3' className="HoverOverlay3" style={{ zIndex: displayState2, opacity: displayState2, width: '25vw', height: '100vh', left: `${BlogoverlayLeft.replace("vw", "")}%`, top: 0, position: 'absolute', hover: 'rgba(0, 0, 0, 0.20)', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: desktopStateList.includes(desktopState) ? "none":'inline-flex', transition: 'left 0.5s ease-in-out' }}>
        <div className="ButtonBlog" style={{ zIndex: 1, color: 'white', position: 'absolute', height: '15vh', top: '70vh', textAlign: 'center', fontSize: 'clamp(12px, 3vw, 30px)', fontFamily: 'PlayfairDisplay', fontWeight: '700', letterSpacing: 3, wordWrap: 'break-word', display: 'flex', justifyContent: 'center', alignItems: 'center' }} onClick={() => handleButton2Click(desktopState)}>{BlogbuttonText}</div>
      </div>

      {isHomeDesktop && <OverlaysMobile displayState={desktopStateList.includes(desktopState) ? "none":displayState} displayState2={displayState2} desktopState={desktopState} handleBlogClick={handleBlogClick} handleServicesClick={handleServicesClick} handleAboutClick={handleAboutClick} setDesktopState={setDesktopState}/>}

      {desktopState === 'Homedesktop1' && (
        <div id='Homedesktop1' className='Homedesktop1' style={{ left: 0, top: 0, position: 'absolute', width: "100%", display: desktopStateList.includes(desktopState) ? "none":"static" }}>
          <div className="Image" style={{ width: '100%', height: '147vh', top: 0, position: 'absolute', justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex' }}>
            <img className="AboutMem2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="./home1d.png" alt="About me" />
          </div>

          <div className="TextContent1" style={{ border: 'hidden red', height: '75vh', left: '3.5vw', top: '30vh', position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex' }}>
            <div className="Title" style={{ width: '40vw', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-start', display: 'flex' }}>
              <div className="Title" style={{ color: '#784F39', fontSize: 'clamp(45px, 4vw, 75px)', fontFamily: 'Rochester', lineHeight: 1, wordWrap: 'break-word' }}>Exotic Relief by Dr. Joi</div>
            </div>
            <div className="Lead" style={{ maxWidth: '40vw', alignSelf: 'stretch', color: 'black', textShadow: '0px 4px 3px rgba(162, 158, 158, 0.9)',fontSize: 'clamp(30px, 2.5vw, 30px)', fontFamily: 'PlayfairDisplay', fontWeight: '400', lineHeight: 1.5, wordWrap: 'break-word' }}>Build The Life Your Brain Deserves</div>
            <div className="Button InitialAbout" style={{background:'#784F39'}}>
              <div className="Label" style={{color:'white'}} onClick={() => handleAboutClick()}>About Me</div>
            </div>
          </div>
        </div>
      )}
      {desktopState === 'Homedesktop2' && (
        <div id='Homedesktop2' className='Homedesktop2' style={{ left: 0, top: 0, position: 'absolute', border: '1px black solid', display: desktopStateList.includes(desktopState) ? "none":"static"  }}>
          <div className="Image" style={{ width: '100vw', height: '97vh', left: '-2px', top: 0, position: 'absolute', justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex' }}>
            <img className="AboutMem2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="./home3b.png" alt="Boardroom" />
          </div>
          {/* <div className="Rectangle158" style={{width: '50vw', height: 68, left: '0vw', top: '70vh', position: 'absolute', background: 'rgba(217, 217, 217, 0.30)'}} /> */}
          {/* <div className="Overlay2" style={{width: '25vw', height: '100vh', left: '0vw', top: 1, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)'}} />
          <div className="HoverOverlay2" style={{width: '25vw', height: '100vh', left: '0vw', top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)', border: '1px #8C8484 solid', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
              <div className="ButtonAbout" style={{zIndex:1,position: 'absolute',marginTop:17,top:'70vh',textAlign: 'center', color: '#DED8D8', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', letterSpacing: 3, wordWrap: 'break-word'}}onClick={() => handleButtonClick('Homedesktop1')}>About Us</div>
          </div>
          <div className="Overlay1" style={{width: '50vw', height: '100vh', top: 0, left:'50vw',position: 'absolute', background: 'rgba(0, 0, 0, 0.20)'}}></div> */}

          <div className="TextContent1" style={{ height: '87vh', paddingLeft: '0vw', left: '60vw', top: '10vh', position: 'absolute', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 24, display: 'inline-flex' }}>
            <div className="Title" style={{ width: '30vw', height: 28, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', display: 'flex' }}>
              <div className="Title" style={{ color: 'white', fontSize: 'clamp(20px, 4vw, 54px)', fontFamily: 'Roboto', lineHeight: 1, wordWrap: 'break-word', textAlign: 'center' }}>Stay up to date with current intitiatives and valuable insights</div>
            </div>
            <div className="Button"style={{background:'#efe6dd'}}>
              <div className="Label" style={{color:'black'}} onClick={() => handleBlogClick()}>Read Blog</div>
            </div>
          </div>

          {/* <div className="Overlay2" style={{width: '25vw', height: '100vh', left: '25vw', top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)'}} />
          <div className="HoverOverlay3" style={{width: '25vw', height: '100vh', left: '25vw', top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)', borderLeft: '1px #8C8484 solid', borderTop: '1px #8C8484 solid', borderRight: '1px #8C8484 solid', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
              <div className="ButtonServices" style={{zIndex:1,position: 'absolute',marginTop:17,top:'70vh', color: '#DED8D8', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', letterSpacing: 3, wordWrap: 'break-word'}}onClick={() => handleButtonClick('Homedesktop3')}>Services</div>
          </div> */}
        </div>
      )}
      {desktopState === 'Homedesktop3' && (
        <div id='Homedesktop3' className="Homedesktop3" style={{ left: 0, top: 0, position: 'absolute', border: '1px black solid', display: desktopStateList.includes(desktopState) ? "none":"static"  }}>
          <div className="Image" style={{ width: '100vw', height: '97vh', left: '-2px', top: 70, position: 'absolute', justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex' }}>
            <img className="AboutMem2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} src="./home2c.png" alt="Planning" />
          </div>
          <div className="TextContent1" style={{ height: '87vh', paddingLeft: '0vw', left: '25vw', position: 'absolute', flexDirection: 'column', top: '10vh', justifyContent: 'center', alignItems: 'center', gap: 24, display: 'inline-flex' }}>
            <div className="Title" style={{ zIndex:'1',width: '50vw', height: 28, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', display: 'flex' }}>
              <div className="Title" style={{ color: 'white', fontSize: 'clamp(20px, 4vw, 54px)', fontFamily: 'PlayfairDisplay', lineHeight: 1, wordWrap: 'break-word', textAlign: 'center' }}>Indulge in My Hand Picked Collection</div>
            </div>
            <div className="Button"style={{background:'#efe6dd'}}>
              <div className="Label" style={{color:'black'}} onClick={() => handleServicesClick()}>Explore Shop</div>
            </div>
          </div>
        </div>
      )}

      {desktopState === 'AboutUs' && (
        <About />
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

      <div className="Footerdesktop" style={{ zIndex: 4, width: '100%', height: 43, left: 0, bottom: '0vh', position: 'fixed', background: '#0E0E0E' }}>
        <div className="Footerprivacy" style={{ height: 43, marginRight: 20, right: '0vw', top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
          <div className="HeadingName" style={{ height: 43, paddingTop: 0, paddingBottom: 0, justifyContent: 'center', alignItems: 'flex-start', gap: 20, display: 'flex' }}>
            <div className="HeaderMenuDefault" style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
              <div className="Label" style={{ color: 'white', fontSize: 'clamp(11px, 1vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word', textAlign: "center" }}>Terms of Use</div>
            </div>
            <div className="MenuItemDefault" style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
              <div className="Label" style={{ color: 'white', fontSize: 'clamp(11px, 1vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word' }}>Privacy</div>
            </div>
            <div className="MenuItemDefault contact-footer" style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
              <div className="Label" style={{ color: 'white', fontSize: 'clamp(11px, 1vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word' }}onClick={() => handleContactClick()}>Contact</div>
            </div>
            <div className="MenuItemDefault" style={{ alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
              <div className="Label" style={{ color: 'white', fontSize: 'clamp(11px, 1vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word', textAlign: "center" }}><a href='https://www.pmdaybreak.com' style={{ color: 'white' }}>Web Design: PM Daybreak Designs</a></div>
            </div>
          </div>
        </div>
        <div className="Footercompany" style={{ width: 358, height: 43, left: 0, top: 0, position: 'absolute', justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
          <div className="HeadingName" style={{ paddingTop: 9, paddingBottom: 10, paddingRight: 119, justifyContent: 'flex-start', alignItems: 'center', display: 'flex' }}>
            <div className="MenuItemDefault" style={{ alignSelf: 'stretch', paddingLeft: 20, paddingRight: 20, justifyContent: 'flex-start', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
              <div className="Label" style={{ color: 'white', fontSize: 'clamp(11px, 1vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', wordWrap: 'break-word' }}>Exotic Relief by Dr Joi</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

