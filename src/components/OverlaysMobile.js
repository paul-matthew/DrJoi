import { useState} from 'react';

const OverlaysMobile = ({setDesktopState, displayState, displayState2, desktopState,handleBlogClick, handleServicesClick, handleAboutClick}) => {
    
    const [Overlay1, set1stOverlay] = useState('75vw');
    const [MainOverlay, setPrimeOverlay] = useState('10vw');
    const [Overlay2, set2ndOverlay] = useState('85vw');
    const [Button1, set1stButton] = useState('Shop');
    const [Button2, set2ndButton] = useState('Deals');

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
      if (Overlay1 === '75vw' && Overlay2 === '85vw') {
          set1stOverlay('10vw');
          setPrimeOverlay('20vw');
          setTimeout(() => {
              set1stButton('About');
          }, transitionDuration / 2); // Wait for half of the transition duration
      } else if (Overlay1 === '10vw' && Overlay2 === '85vw') {
          set1stOverlay('75vw');
          setPrimeOverlay('10vw');
          setTimeout(() => {
              set1stButton('Shop');
          }, transitionDuration / 2); // Wait for half of the transition duration
      } else {
          // Set overlay states for other cases
          set1stOverlay('75vw');
          set2ndOverlay('85vw');
          setPrimeOverlay('10vw');
          setTimeout(() => {
              set1stButton('Shop');
              set2ndButton('Deals');
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
    if (Overlay2 === '85vw' && Overlay1 === '75vw') {
        set1stOverlay('10vw');
        setPrimeOverlay('30vw');
        set2ndOverlay('20vw');
        setTimeout(() => {
            set1stButton('About');
            set2ndButton('Shop');
        }, transitionDuration / 2); // Wait for half of the transition duration
    } else if (Overlay2 === '85vw' && Overlay1 === '10vw') {
        setPrimeOverlay('30vw');
        set2ndOverlay('20vw');
        setTimeout(() => {
            set2ndButton('Shop');
        }, transitionDuration / 2); // Wait for half of the transition duration
    } else if (Overlay2 === '20vw' && Overlay1 === '10vw') {
        setPrimeOverlay('20vw');
        set1stOverlay('10vw');
        set2ndOverlay('85vw');
        setTimeout(() => {
            set1stButton('About');
            set2ndButton('Deals');
        }, transitionDuration / 2); // Wait for half of the transition duration
    } else {
        // Set overlay states for other cases
        set1stOverlay('75vw');
        setPrimeOverlay('10vw');
        set2ndOverlay('85vw');
        setTimeout(() => {
            set1stButton('About');
            set2ndButton('Deals');
        }, transitionDuration / 2); // Wait for half of the transition duration
    }
};

  const handleHomeClick = () => {
    if (desktopState !== 'Homedesktop1') {
      setTimeout(() => {
      set1stButton('Shop');
      set2ndButton('Deals');
      // setDisplayState('block');
      // setDisplayState2('1');
      setDesktopState('Homedesktop1');
      set1stOverlay('75vw');
      set2ndOverlay('85vw');
      setPrimeOverlay('10vw');
    }, 0);
  }
  };

  const isStateServices = desktopState === 'Homedesktop2';

    return (  
        <div className='overlays-container-mobile' style={{ display: "none"}}>
          <div id='NavlogoMobile'><img src='./logo2.png' alt='logo mobile'style={{height:'6vh',marginTop:'1vh'}}onClick={() => handleHomeClick()}/></div>
        <div className="header-holder-mobile" style={{ height: "10vh", width: "100vw"}} />
        <div className="Rectangle158-mobile" style={{ display: displayState, zIndex: displayState2, width: '100vw', height: '55vh', left: 0, position: 'absolute', background: 'rgba(217, 217, 217, 0.0)', transition: 'top 0.5s ease-in-out' }} />      
        <div className="Rectangle158-mobile" style={{display:displayState,zIndex:displayState2,width: '100vw', height: '15vh', top: `${Overlay2.replace("vw", "")}%` ,left: 0, position: 'absolute', background: 'rgba(217, 217, 217, 0.0)',transition: 'top 0.5s ease-in-out' }} />
      {/* MAIN */}
      <div className="Overlay1-mobile" style={{display:displayState,zIndex:displayState2, width: '100vw', height: "65vh", top: `${MainOverlay.replace("vw", "")}%`, left: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.10)',transition: 'top 0.5s ease-in-out'}}></div>

      {/* Services */}
      <div className="Overlay2-mobile" style={{display:displayState,zIndex:displayState2,width: '100vw', height: '10vh',top: `${Overlay1.replace("vw", "")}%`, left: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.4)',transition: 'top 0.5s ease-in-out' }} />
      <div id='HoverOverlay2' className="HoverOverlay2-mobile" style={{zIndex:displayState2,opacity:displayState2,width: '100vw', height: '10vh', top: `${Overlay1.replace("vw", "")}%`, left: 0, position: 'absolute', backgroundColor: 'rgba(120, 79, 57, 0.1)', flexDirection: 'column', alignItems: 'center', gap: 8, display: 'inline-flex',transition: 'top 0.5s ease-in-out'}}>
        <div className="ButtonServices" style={{zIndex:2,height: '25vh',textAlign: 'center', color: 'white', fontSize: 'clamp(34px, 3vw, 30px)', fontFamily: 'PlayfairDisplay', fontWeight: '700', letterSpacing: 3, wordWrap: 'break-word', display: 'flex', justifyContent: 'center', alignItems: 'center', textShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)',}} onClick={() => handleButtonClick(desktopState)}>{Button1}</div>
      </div>

      {/* Blog */}
      <div className="Overlay3-mobile" style={{display:displayState,zIndex:displayState2,width: '100vw', height: '10vh', top: `${Overlay2.replace("vw", "")}%`, left: 0, position: 'absolute', backgroundColor: 'rgba(0, 0, 0, 0.4)',transition: 'top 0.5s ease-in-out' }} />
      <div id='HoverOverlay3' className="HoverOverlay3-mobile" style={{zIndex:displayState2,opacity:displayState2,width: '100vw', height: '10vh', top: `${Overlay2.replace("vw", "")}%`, left: 0, position: 'absolute', backgroundColor: 'rgba(120, 79, 57, 0.1)', outline: '1px rgba(0, 0, 0, 0.50) solid', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: 'inline-flex',transition: 'top 0.5s ease-in-out' }}>
          <div className="ButtonBlog" style={{zIndex:2,color: 'white',height:'25vh',textAlign:'center',fontSize: 'clamp(34px, 3vw, 30px)', fontFamily: 'PlayfairDisplay', fontWeight: '700', letterSpacing: 3, wordWrap: 'break-word',display: 'flex', justifyContent: 'center', alignItems: 'center', textShadow: '4px 4px 4px rgba(0, 0, 0, 0.5)' }}onClick={() => handleButton2Click(desktopState)}>{Button2}</div>
      </div>

      {desktopState === 'Homedesktop1' && (
        <div className='Homedesktop1' style={{left: 0, top: 0, position: 'absolute', width: "100%"}}>
          <div className="Image" style={{width: '100%', height: '95vh', top: 0, position: 'absolute', justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex'}}>
              <img className="AboutMem2" style={{width: '100%', height: '100%', objectFit:'cover'}} src="./home1f.png"alt="About me"/>
          </div>
            
          <div className="TextContent1" style={{border:'hidden red',height: '50vh', left: '3.5vw', top: '17vh', position: 'absolute', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 24, display: 'inline-flex', padding: "1rem", width: "80vw"}}>
              <div className="Title" style={{width: '50vw', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
                  <div className="Title" style={{zIndex:'1', color: '#784F39', fontSize: 'clamp(40px, 4vw, 54px)', fontFamily: 'Rochester', lineHeight: 1, wordWrap: 'break-word'}}>Exotic Relief by Dr. Joi</div>
              </div>
              <div style={{maxWidth:'160px'}}>
                <div className="Lead" style={{zIndex:'1', textShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)', alignSelf: 'stretch', color: 'black', fontSize: 'clamp(20px, 2.5vw, 20px)', fontFamily: 'PlayfairDisplay', fontWeight: '400', lineHeight: 1.5, wordWrap: 'break-word'}}>Build The Life Your Brain Deserves</div>
              </div>
              <div className="Button InitialAbout">
                  <div className="Label" style={{color:'white', fontFamily:'PlayfairDisplay'}} onClick={() => handleAboutClick()}>About me</div>
              </div>
          </div>
        </div>
      )}
      {desktopState === 'Homedesktop2' && (
        <div className='Homedesktop2' style={{left: 0, top: 0, position: 'absolute', border: '1px black solid'}}>
          <div className="Image" style={{width: '100vw', height: '97vh', left: '-1px', top: 0, position: 'absolute', justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex'}}>
              <img className="AboutMem2" style={{width: '100%', height: '100%', objectFit:'cover'}} src="./home2c-mob.png" alt="Boardroom" />
          </div>
          {/* <div className="Rectangle158" style={{width: '50vw', height: 68, left: '0vw', top: '70vh', position: 'absolute', background: 'rgba(217, 217, 217, 0.30)'}} /> */}
          {/* <div className="Overlay2" style={{width: '25vw', height: '100vh', left: '0vw', top: 1, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)'}} />
          <div className="HoverOverlay2" style={{width: '25vw', height: '100vh', left: '0vw', top: 0, position: 'absolute', background: 'rgba(0, 0, 0, 0.20)', border: '1px #8C8484 solid', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
              <div className="ButtonAbout" style={{zIndex:1,position: 'absolute',marginTop:17,top:'70vh',textAlign: 'center', color: '#DED8D8', fontSize: 30, fontFamily: 'Roboto', fontWeight: '700', letterSpacing: 3, wordWrap: 'break-word'}}onClick={() => handleButtonClick('Homedesktop1')}>About Us</div>
          </div>
          <div className="Overlay1" style={{width: '50vw', height: '100vh', top: 0, left:'50vw',position: 'absolute', background: 'rgba(0, 0, 0, 0.20)'}}></div> */}
          
          <div className="TextContent1" style={{height: '50vh', paddingLeft:'0vw',left: '30vw', top: '30vh', position: 'absolute', flexDirection: 'column', justifyContent: 'center', alignItems: 'end', gap: 24, display: 'inline-flex'}}>
              <div className="Title" style={{width: '60vw', height: 28, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', display: 'flex'}}>
                  <div className="Title" style={{zIndex:'2',color: 'black', fontSize: 'clamp(40px, 4vw, 64px)', fontFamily: 'PlayfairDisplay', lineHeight: 1, wordWrap: 'break-word', textAlign: 'end',textShadow: '(0px 4px 3px rgba(162, 158, 158, 0.9)'}}>Unlock Exclusive Deals</div>
              </div>
              <div className="Button" style={{background:'#784F39'}}>
                <div className="Label"style={{color:'white', fontFamily:'PlayfairDisplay'}}onClick={() => handleBlogClick()}>Claim Deals</div>
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
          <div className="Image" style={{width: '100vw', height: '97vh', left: '-1px', top: 0, position: 'absolute', justifyContent: 'flex-end', alignItems: 'center', display: 'inline-flex'}}>
              <img className="AboutMem2" style={{width: '100%', height: '100%', objectFit:'cover'}} src="./home3d-mob.png" alt="Planning" />
          </div>          
          <div className="TextContent1 text-content3-mobile" style={{height: '50vh', width: "60vw", paddingLeft:'0vw',left: isStateServices ?'1000vw': "20vw", transition: "all 1s ease !important", transitionDelay: "1s", position: 'absolute', flexDirection: 'column',justifyContent: 'end', alignItems: 'center', gap: 24, display: 'inline-flex', top:'28vh'}}>
              <div className="Title" style={{width: '100%', height: 28, flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'flex-end', display: 'flex'}}>
                  <div className="Title" style={{ color: 'white', fontSize: 'clamp(30px, 4vw, 54px)', fontFamily: 'PlayfairDisplay', lineHeight: 1.1, wordWrap: 'break-word', textAlign: 'center',textShadow: '2px 2px 3px rgba(0, 0, 0, 0.9)' }}>Indulge in My Collection</div>
              </div>
              <div className="Button">
                  <div className="Label" style={{color:'white', fontFamily:'PlayfairDisplay'}} onClick={() => handleServicesClick()}>Explore Shop</div>
              </div>
          </div>
        </div>
      )}
      </div>
    //     <div style={{ position: "absolute", bottom: 0, width: "100%"}}>

    //   <div id='HoverOverlay2-Mobile' className="HoverOverlay2-mobile" style={{zIndex:displayState2,opacity:displayState2,width: '100%', height: '100px', left: 0, bottom: 0, borderTop: "1px solid rgb(140, 132, 132)", borderBottom: "1px solid rgb(140, 132, 132)", flexDirection: 'column', alignItems: 'center', gap: 8, display: "none",transition: 'left 0.5s ease-in-out', justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.2)", position: "relative" }}>
    //       <div className="ButtonServices" style={{ zIndex:1,marginTop: 0, textAlign: 'center', color: '#DED8D8', fontSize: "32px", fontFamily: 'Roboto', fontWeight: '700', zIndex: 1, letterSpacing: 3, wordWrap: 'break-word', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "transparent"}} onClick={() => handleButtonClick(desktopState)}>
    //         {Button1}
    //         </div>
    //     </div>
       
  
    //     {/* Blog */}
    //     <div id='HoverOverlay3-mobile' className="HoverOverlay3-mobile" style={{zIndex:displayState2,opacity:displayState2,width: '100%', height: '100px', left: 0, bottom: 0, borderTop: "1px solid rgb(140, 132, 132)", borderBottom: "1px solid rgb(140, 132, 132)", flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center', gap: 8, display: 'none',transition: 'left 0.5s ease-in-out', justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.2)", position: "relative" }}>
    //         <div className="ButtonBlog" style={{zIndex:1,color: '#DED8D8',textAlign:'center', fontFamily: 'Roboto', fontSize: "32px", fontWeight: '700', letterSpacing: 3, wordWrap: 'break-word',display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: "transparent" }}onClick={() => handleButton2Click(desktopState)}>
    //             {Button2}
    //             </div>
    //     </div>
    //     </div>

    );
}
 
export default OverlaysMobile;