import { useState} from 'react';

const OverlaysMobile = ({setDesktopState, displayState, displayState2, desktopState,handleBlogClick, handleServicesClick, handleAboutClick}) => {
    
    const [SeroverlayLeft, setOverlayLeft] = useState('65vw');
    const [ManoverlayLeft, setManOverlayLeft] = useState('10vw');
    const [BlogoverlayLeft, setBlogOverlayLeft] = useState('80vw');
    const [SerbuttonText, setSerButtonText] = useState('Services');
    const [BlogbuttonText, setBlogButtonText] = useState('Blog');

    const handleButtonClick = (newState) => {
      const transitionDuration = 300; // Transition duration in milliseconds
  
      // Set the new desktop state with a delay
      setTimeout(() => {
          if (desktopState === 'Homedesktop1') {
              setDesktopState('Homedesktop3');
          } else {
              setDesktopState('Homedesktop1');
          }
      }, transitionDuration);
  
      // Set the overlay states based on the current state
      if (SeroverlayLeft === '65vw' && BlogoverlayLeft === '80vw') {
          setOverlayLeft('10vw');
          setManOverlayLeft('25vw');
          setTimeout(() => {
              setSerButtonText('About Us');
          }, transitionDuration / 2); // Wait for half of the transition duration
      } else if (SeroverlayLeft === '10vw' && BlogoverlayLeft === '80vw') {
          setOverlayLeft('65vw');
          setManOverlayLeft('10vw');
          setTimeout(() => {
              setSerButtonText('Services');
          }, transitionDuration / 2); // Wait for half of the transition duration
      } else {
          // Set overlay states for other cases
          setOverlayLeft('65vw');
          setBlogOverlayLeft('80vw');
          setManOverlayLeft('10vw');
          setTimeout(() => {
              setSerButtonText('Services');
              setBlogButtonText('Blog');
          }, transitionDuration / 2); // Wait for half of the transition duration
      }
  };
  
    
  const handleButton2Click = () => {
    const transitionDuration = 300; // Transition duration in milliseconds

    // Set the new desktop state with a delay
    setTimeout(() => {
        let newDesktopState;
        switch (desktopState) {
            case 'Homedesktop1':
                newDesktopState = 'Homedesktop2';
                break;
            case 'Homedesktop3':
                newDesktopState = 'Homedesktop2';
                break;
            case 'Homedesktop2':
                newDesktopState = 'Homedesktop3';
                break;
            default:
                newDesktopState = 'Homedesktop1';
                break;
        }
        setDesktopState(newDesktopState);
    }, transitionDuration);

    // Set the overlay states based on the current overlay positions
    if (BlogoverlayLeft === '80vw' && SeroverlayLeft === '65vw') {
        setOverlayLeft('10vw');
        setManOverlayLeft('40vw');
        setBlogOverlayLeft('25vw');
        setTimeout(() => {
            setSerButtonText('About Us');
            setBlogButtonText('Services');
        }, transitionDuration / 2); // Wait for half of the transition duration
    } else if (BlogoverlayLeft === '80vw' && SeroverlayLeft === '10vw') {
        setManOverlayLeft('40vw');
        setBlogOverlayLeft('25vw');
        setTimeout(() => {
            setBlogButtonText('Services');
        }, transitionDuration / 2); // Wait for half of the transition duration
    } else if (BlogoverlayLeft === '25vw' && SeroverlayLeft === '10vw') {
        setManOverlayLeft('25vw');
        setOverlayLeft('10vw');
        setBlogOverlayLeft('80vw');
        setTimeout(() => {
            setSerButtonText('About Us');
            setBlogButtonText('Blog');
        }, transitionDuration / 2); // Wait for half of the transition duration
    } else {
        // Set overlay states for other cases
        setOverlayLeft('65vw');
        setManOverlayLeft('10vw');
        setBlogOverlayLeft('80vw');
        setTimeout(() => {
            setSerButtonText('About Us');
            setBlogButtonText('Blog');
        }, transitionDuration / 2); // Wait for half of the transition duration
    }
};

  const handleHomeClick = () => {
    if (desktopState !== 'Homedesktop1') {
      setTimeout(() => {
      setSerButtonText('Services');
      setBlogButtonText('Blog');
      // setDisplayState('block');
      // setDisplayState2('1');
      setDesktopState('Homedesktop1');
      setOverlayLeft('65vw');
      setBlogOverlayLeft('80vw');
      setManOverlayLeft('10vw');
    }, 0);
  }
  };

  const isStateServices = desktopState === 'Homedesktop2';

    return (  
        <div className='overlays-container-mobile' style={{ display: "none"}}>
          <div id='NavlogoMobile'><img src='./logo-new.png' alt='logo mobile'style={{height:'5vh',marginTop:'1.5vh'}}onClick={() => handleHomeClick()}/></div>
        <div className="header-holder-mobile" style={{ height: "10vh", width: "100vw"}} />
        <div className="Rectangle158-mobile" style={{ display: displayState, zIndex: displayState2, width: '100vw', height: '55vh', left: 0, position: 'absolute', background: 'rgba(217, 217, 217, 0.10)', transition: 'top 0.5s ease-in-out' }} />      <div className="Rectangle158-mobile" style={{display:displayState,zIndex:displayState2,width: '100vw', height: '15vh', top: `${BlogoverlayLeft.replace("vw", "")}%` ,left: 0, position: 'absolute', background: 'rgba(217, 217, 217, 0.30)',transition: 'top 0.5s ease-in-out' }} />
      {/* MAIN */}
      <div className="Overlay1-mobile" style={{display:displayState,zIndex:displayState2, width: '100vw', height: "55vh", top: `${ManoverlayLeft.replace("vw", "")}%`, left: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.40)',transition: 'top 0.5s ease-in-out'}}></div>

      {/* Services */}
      <div className="Overlay2-mobile" style={{display:displayState,zIndex:displayState2,width: '100vw', height: '15vh',top: `${SeroverlayLeft.replace("vw", "")}%`, left: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.10)',transition: 'top 0.5s ease-in-out' }} />
      <div id='HoverOverlay2' className="HoverOverlay2-mobile" style={{zIndex:displayState2,opacity:displayState2,width: '100vw', height: '15vh', top: `${SeroverlayLeft.replace("vw", "")}%`, left: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.10)', outline: '1px #8C8484 solid', flexDirection: 'column', alignItems: 'center', gap: 8, display: 'inline-flex',transition: 'top 0.5s ease-in-out'}}>
        <div className="ButtonServices" style={{zIndex:2,height: '25vh',textAlign: 'center', color: 'white', fontSize: 'clamp(34px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', letterSpacing: 3, wordWrap: 'break-word', display: 'flex', justifyContent: 'center', alignItems: 'center', textShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)',}} onClick={() => handleButtonClick(desktopState)}>{SerbuttonText}</div>
      </div>

      {/* Blog */}
      <div className="Overlay3-mobile" style={{display:displayState,zIndex:displayState2,width: '100vw', height: '15vh', top: `${BlogoverlayLeft.replace("vw", "")}%`, left: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.10)',transition: 'top 0.5s ease-in-out' }} />
      <div id='HoverOverlay3' className="HoverOverlay3-mobile" style={{zIndex:displayState2,opacity:displayState2,width: '100vw', height: '15vh', top: `${BlogoverlayLeft.replace("vw", "")}%`, left: 0, position: 'absolute', hover: 'rgba(0, 0, 0, 0.20)', outline: '1px #8C8484 solid', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: 'inline-flex',transition: 'top 0.5s ease-in-out' }}>
          <div className="ButtonBlog" style={{zIndex:2,color: 'white',height:'25vh',textAlign:'center',fontSize: 'clamp(34px, 3vw, 30px)', fontFamily: 'Roboto', fontWeight: '700', letterSpacing: 3, wordWrap: 'break-word',display: 'flex', justifyContent: 'center', alignItems: 'center', textShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)' }}onClick={() => handleButton2Click(desktopState)}>{BlogbuttonText}</div>
      </div>

      {desktopState === 'Homedesktop1' && (
        <div className='Homedesktop1' style={{left: 0, top: 0, position: 'absolute', width: "100%"}}>
          <div className="Image" style={{width: '100%', height: '95vh', top: 0, position: 'absolute', justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex'}}>
              <img className="AboutMem2" style={{width: '100%', height: '100%', objectFit:'cover'}} src="./homepg-mobile.jpg"alt="About me"/>
          </div>
            
          <div className="TextContent1" style={{border:'hidden red',height: '50vh', left: '3.5vw', top: '17vh', position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex', padding: "1rem", width: "80vw"}}>
              <div className="Title" style={{width: '40vw', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                  <div className="Title" style={{zIndex:'1', boxShadow: '0 20px 8px rgba(0, 0, 0, 0.1)',color: 'white', fontSize: 'clamp(25px, 4vw, 54px)', fontFamily: 'Roboto', lineHeight: 1, wordWrap: 'break-word'}}>Community Minded Consulting Firm</div>
              </div>
              <div className="Lead" style={{zIndex:'1', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', maxWidth:'28vw',alignSelf: 'stretch', color: 'white', fontSize: 'clamp(20px, 2.5vw, 20px)', fontFamily: 'Roboto', fontWeight: '400', lineHeight: 1.5, wordWrap: 'break-word'}}>E3 Strategic Solutions empowers organizations to reach their full potential</div>
              <div className="Button InitialAbout">
                  <div className="Label" onClick={() => handleAboutClick()}>ABOUT US</div>
              </div>
          </div>
        </div>
      )}
      {desktopState === 'Homedesktop2' && (
        <div className='Homedesktop2' style={{left: 0, top: 0, position: 'absolute', border: '1px black solid'}}>
          <div className="Image" style={{width: '100vw', height: '97vh', left: '-2px', top: 0, position: 'absolute', justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex'}}>
              <img className="AboutMem2" style={{width: '100%', height: '100%', objectFit:'cover'}} src="./boardroom.jpeg" alt="Boardroom" />
          </div>
          {/* <div className="Rectangle158" style={{width: '50vw', height: 68, left: '0vw', top: '70vh', position: 'absolute', background: 'rgba(217, 217, 217, 0.30)'}} /> */}
          {/* <div className="Overlay2" style={{width: '25vw', height: '100vh', left: '0vw', top: 1, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)'}} />
          <div className="HoverOverlay2" style={{width: '25vw', height: '100vh', left: '0vw', top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)', border: '1px #8C8484 solid', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
              <div className="ButtonAbout" style={{zIndex:1,position: 'absolute',marginTop:17,top:'70vh',textAlign: 'center', color: '#DED8D8', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', letterSpacing: 3, wordWrap: 'break-word'}}onClick={() => handleButtonClick('Homedesktop1')}>About Us</div>
          </div>
          <div className="Overlay1" style={{width: '50vw', height: '100vh', top: 0, left:'50vw',position: 'absolute', background: 'rgba(0, 0, 0, 0.20)'}}></div> */}
          
          <div className="TextContent1" style={{height: '50vh', paddingLeft:'0vw',left: '20vw', top: '40vh', position: 'absolute', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 24, display: 'inline-flex'}}>
              <div className="Title" style={{width: '60vw', height: 28, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', display: 'flex'}}>
                  <div className="Title" style={{zIndex:'2',color: 'white', fontSize: 'clamp(20px, 4vw, 54px)', fontFamily: 'Roboto', lineHeight: 1, wordWrap: 'break-word', textAlign: 'center',textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}}>Stay up to date with current intitiatives and valuable insights</div>
              </div>
              <div className="Button">
                <div className="Label"onClick={() => handleBlogClick()}>READ BLOG</div>
              </div>  
          </div>

          {/* <div className="Overlay2" style={{width: '25vw', height: '100vh', left: '25vw', top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)'}} />
          <div className="HoverOverlay3" style={{width: '25vw', height: '100vh', left: '25vw', top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)', borderLeft: '1px #8C8484 solid', borderTop: '1px #8C8484 solid', borderRight: '1px #8C8484 solid', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
              <div className="ButtonServices" style={{zIndex:1,position: 'absolute',marginTop:17,top:'70vh', color: '#DED8D8', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', letterSpacing: 3, wordWrap: 'break-word'}}onClick={() => handleButtonClick('Homedesktop3')}>Services</div>
          </div> */}
        </div>
      )}
      {desktopState === 'Homedesktop3' && (
        <div className="Homedesktop3" style={{left: 0, top: 0, position: 'absolute', border: '1px black solid'}}>
          <div className="Image" style={{width: '100vw', height: '97vh', left: '-2px', top: 0, position: 'absolute', justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex'}}>
              <img className="AboutMem2" style={{width: '100%', height: '100%', objectFit:'cover'}} src="./servicesx.jpg" alt="Planning" />
          </div>          
          <div className="TextContent1 text-content3-mobile" style={{height: '50vh', width: "60vw", paddingLeft:'0vw',left: isStateServices ?'1000vw': "20vw", transition: "all 1s ease !important", transitionDelay: "1s", top:'30vh', position: 'absolute', flexDirection: 'column',justifyContent: 'center', alignItems: 'center', gap: 24, display: 'inline-flex'}}>
              <div className="Title" style={{width: '100%', height: 28, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', display: 'flex'}}>
                  <div className="Title" style={{zIndex:2,color: 'white', fontSize: 'clamp(20px, 4vw, 54px)', fontFamily: 'Roboto', lineHeight: 1, wordWrap: 'break-word', textAlign: 'center',boxShadow: '0 20px 8px rgba(0, 0, 0, 0.1)'}}>Assessments & Strategic Planning to achieve your business objectives</div>
              </div>
              <div className="Button">
                  <div className="Label"onClick={() => handleServicesClick()}>OUR SERVICES</div>
              </div>
          </div>
        </div>
      )}
      </div>
    //     <div style={{ position: "absolute", bottom: 0, width: "100%"}}>

    //   <div id='HoverOverlay2-Mobile' className="HoverOverlay2-mobile" style={{zIndex:displayState2,opacity:displayState2,width: '100%', height: '100px', left: 0, bottom: 0, borderTop: "1px solid rgb(140, 132, 132)", borderBottom: "1px solid rgb(140, 132, 132)", flexDirection: 'column', alignItems: 'center', gap: 8, display: "none",transition: 'left 0.5s ease-in-out', justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.2)", position: "relative" }}>
    //       <div className="ButtonServices" style={{ zIndex:1,marginTop: 0, textAlign: 'center', color: '#DED8D8', fontSize: "32px", fontFamily: 'Roboto', fontWeight: '700', zIndex: 1, letterSpacing: 3, wordWrap: 'break-word', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "transparent"}} onClick={() => handleButtonClick(desktopState)}>
    //         {SerbuttonText}
    //         </div>
    //     </div>
       
  
    //     {/* Blog */}
    //     <div id='HoverOverlay3-mobile' className="HoverOverlay3-mobile" style={{zIndex:displayState2,opacity:displayState2,width: '100%', height: '100px', left: 0, bottom: 0, borderTop: "1px solid rgb(140, 132, 132)", borderBottom: "1px solid rgb(140, 132, 132)", flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: 'none',transition: 'left 0.5s ease-in-out', justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.2)", position: "relative" }}>
    //         <div className="ButtonBlog" style={{zIndex:1,color: '#DED8D8',textAlign:'center', fontFamily: 'Roboto', fontSize: "32px", fontWeight: '700', letterSpacing: 3, wordWrap: 'break-word',display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "transparent" }}onClick={() => handleButton2Click(desktopState)}>
    //             {BlogbuttonText}
    //             </div>
    //     </div>
    //     </div>

    );
}
 
export default OverlaysMobile;