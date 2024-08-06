import * as React from "react";
import { useEffect } from "react";

function MobileMenu({ handleAboutClick, handleServicesClick, handleBlogClick, handleDonationsClick, handleLoveClick, handleContactClick, desktopState}) {
  const [openMenuContent, setOpenMenuContent] = React.useState(false);

  const handleClickBurgerMenu = (event) => {
    setOpenMenuContent((prevState) => !prevState);
  };

  const _handleAboutClick = () => {
    handleAboutClick()
  }

  const _handleServicesClick = () => {
    handleServicesClick()
  }

  const _handleBlogClick = () => {
    handleBlogClick()

  }
    const _handleDonationsClick = () => {
    handleDonationsClick()

  }
  // const _handleWellnessClick = () => {
  //   handleWellnessClick()

  // }

  const _handleLoveClick = () => {
    handleLoveClick()

  }

  const _handleContactClick = () => {
    handleContactClick()
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest("#mobile-menu")) {
        setOpenMenuContent(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div
      id="mobile-menu"
      style={{
        zIndex: 2,
        position: "fixed",
        right: 0,
        top: 0,
        display: "none",
        width: "100px", 
        height: "10vh"
      }}
    >
      <div style={{ position: "relative", width:"100%", height: "100%"}}>
      <div id="burger-menu-container" style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", height: "100%", justifyContent: "center" }}>
        <button id="burger-menu" className={openMenuContent ? "close" : ""} onClick={handleClickBurgerMenu}>
          <span></span>
        </button>
      </div>
        {openMenuContent && (
          <div id="menu-content" style={{ backgroundColor: "#000", position: "absolute", left: 0, width: "119px", transform: "translateX(1px)" }}>
            <div className={desktopState === "About" ? "active-menu-mobile": "ListitemDesktopNa"} style={{ width: '100%', height: '100%', padding: "8px 18px", background: '#0e3022', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
              <div className="Label" style={{ width: "100%", textAlign: 'left', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word', cursor: "pointer" }} onClick={_handleAboutClick}>About</div>
            </div>

            <div className={desktopState === "Shop" ? "active-menu-mobile": "ListitemDesktopNa"} style={{ width: '100%', height: '100%',  padding: "8px 18px", background: '#0e3022', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
              <div className="Label" style={{ width: "100%", textAlign: 'left', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word', cursor: "pointer" }} onClick={_handleServicesClick}>Shop</div>

            </div>

            <div className={desktopState === "Deals" ? "active-menu-mobile": "ListitemDesktopNa"} style={{ width: '100%', height: '100%',  padding: "8px 18px", background: '#0e3022', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
              <div className="Label" style={{ width: "100%", textAlign: 'left', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word', cursor: "pointer" }} onClick={_handleBlogClick}>Deals</div>

            </div>

            <div className={desktopState === "Donations" ? "active-menu-mobile": "ListitemDesktopNa"} style={{ width: '100%', height: '100%',  padding: "8px 18px", background: '#0e3022', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
              <div className="Label" style={{ width: "100%", textAlign: 'left', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word', cursor: "pointer" }} onClick={_handleDonationsClick}>Donations</div>
            </div>


            {/* <div className={desktopState === "Wellness" ? "active-menu-mobile": "ListitemDesktopNa"} style={{ width: '100%', height: '100%',  padding: "8px 18px", background: '#0e3022', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
              <div className="Label" style={{ width: "100%", textAlign: 'left', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word', cursor: "pointer" }} onClick={_handleWellnessClick}>Wellness</div>
            </div> */}

            <div className={desktopState === "Lovelab" ? "active-menu-mobile": "ListitemDesktopNa"} style={{ width: '100%', height: '100%',  padding: "8px 18px", background: '#0e3022', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
              <div className="Label" style={{ width: "100%", textAlign: 'left', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word', cursor: "pointer" }} onClick={_handleLoveClick}>Coaching</div>
            </div>

            <div className={desktopState === "Contact" ? "active-menu-mobile": "ListitemDesktopNa"} style={{ width: '100%', height: '100%',  padding: "8px 18px", background: '#0e3022', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
              <div className="Label" style={{ width: "100%", textAlign: 'left', color: 'white', fontSize: 'clamp(13px, 2vw, 16px)', fontFamily: 'Roboto', fontWeight: '500', letterSpacing: 2, wordWrap: 'break-word', cursor: "pointer" }} onClick={_handleContactClick}>Contact</div>
            </div>
          </div>
        )}
      </div>
      

      
    </div>
  );
}

export default MobileMenu;
