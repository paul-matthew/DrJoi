import React, { useState, useEffect } from "react";
import DisplayProducts from "./products.js";
import "./App.css";
import "./style.css";
import About from "./aboutus.js";
import Shop from "./shop.js";
import Deals from "./deals.js";
import LoveLab from "./lovelab.js";
import Terms from "./terms.js";
import Wellness from "./wellness.js";
import Contact from "./contact.js";
import Cart from "./cart.js";
import MobileMenu from "./components/MobileMenu.js";
import OverlaysMobile from "./components/OverlaysMobile.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import LoadingScreen from "./components/LoadingScreen.js";

const desktopStateList = [
  "About",
  "Shop",
  "Deals",
  "Wellness",
  "Lovelab",
  "Contact",
  "Cart",
  "Terms",
];

function App() {
  const [desktopState, setDesktopState] = useState("Homedesktop1");
  const [Overlay1, set1stOverlay] = useState("50vw");
  const [MainOverlay, setPrimeOverlay] = useState("0vw");
  const [Overlay2, set2ndOverlay] = useState("75vw");
  const [Button1, set1stButton] = useState("Shop");
  const [Button2, set2ndButton] = useState("Deals");
  const [displayState, setDisplayState] = useState("block");
  const [displayState2, setDisplayState2] = useState("1");
  const [Mainwidth, setwidthMain] = useState("50vw");
  const [Recwidth, setwidthRec] = useState("25vw");
  // const [showCart, setShowCart] = useState(false);
  const [displayed, setDisplayed] = useState(false);
  const [loading, setLoading] = useState(true);

  const isHomeDesktop = !desktopStateList.includes(desktopState);

  const handleButtonClick = (newState) => {
    if (desktopState === "Homedesktop1") {
      setTimeout(() => {
        setDesktopState("Homedesktop3"); // Ease in the state change
      }, 300); // Adjust the delay for the transition duration
    } else if (desktopState === "Homedesktop2") {
      setTimeout(() => {
        setDesktopState("Homedesktop1"); // Ease in the state change
      }, 300); // Adjust the delay for the transition duration
    } else {
      setTimeout(() => {
        setDesktopState("Homedesktop1"); // Ease in the state change
      }, 300);
    }
    // setDesktopState(newState);
    if (Overlay1 === "50vw" && Overlay2 === "75vw") {
      set1stOverlay("0vw");
      set2ndOverlay("70vw");
      setPrimeOverlay("30vw");
      setwidthMain("40vw");
      setwidthRec("30vw");
      setTimeout(() => {
        set1stButton("About");
      }, 0); // Wait for 0.5s transition duration
    } else if (Overlay1 === "0vw" && Overlay2 === "70vw") {
      set1stOverlay("50vw");
      set2ndOverlay("75vw");
      setPrimeOverlay("0vw");
      setwidthMain("50vw");
      setwidthRec("25vw");
      setTimeout(() => {
        set1stButton("Shop");
      }, 0); // Wait for 0.5s transition duration
    } else {
      set1stOverlay("50vw");
      set2ndOverlay("75vw");
      setPrimeOverlay("0vw");
      setwidthMain("50vw");
      setwidthRec("25vw");
      setTimeout(() => {
        set1stButton("Shop");
        set2ndButton("Deals");
      }, 0); // Wait for 0.5s transition duration
    }
  };

  const handleButton2Click = (newState) => {
    if (desktopState === "Homedesktop1") {
      setTimeout(() => {
        setDesktopState("Homedesktop2"); //2 is blog
      }, 300);
    } else if (desktopState === "Homedesktop3") {
      setTimeout(() => {
        setDesktopState("Homedesktop2");
      }, 300);
    } else if (desktopState === "Homedesktop2") {
      setTimeout(() => {
        setDesktopState("Homedesktop3");
      }, 300);
    } else {
      setTimeout(() => {
        setDesktopState("Homedesktop1");
      }, 300);
    }

    // setDesktopState(newState);
    if (Overlay2 === "75vw" && Overlay1 === "50vw") {
      set1stOverlay("0vw");
      setPrimeOverlay("60vw");
      set2ndOverlay("30vw");
      setwidthMain("40vw");
      setwidthRec("30vw");
      setTimeout(() => {
        set1stButton("About");
        set2ndButton("Shop");
      }, 0); // Wait for 0.5s transition duration
    } else if (Overlay2 === "70vw" && Overlay1 === "0vw") {
      setPrimeOverlay("60vw");
      set2ndOverlay("30vw");
      setwidthRec("30vw");
      setwidthMain("40vw");
      setTimeout(() => {
        set2ndButton("Shop");
      }, 0);
    } // Wait for 0.5s transition duration
    else if (Overlay2 === "30vw" && Overlay1 === "0vw") {
      setPrimeOverlay("30vw");
      set1stOverlay("0vw");
      set2ndOverlay("70vw");
      setwidthMain("40vw");
      setwidthRec("30vw");
      setTimeout(() => {
        set1stButton("About");
        set2ndButton("Deals");
      }, 0);
    } // Wait for 0.5s transition duration
    else {
      set1stOverlay("50vw");
      setPrimeOverlay("0vw");
      set2ndOverlay("75vw");
      setwidthMain("50vw");
      setwidthRec("25vw");
      setTimeout(() => {
        set1stButton("About");
        set2ndButton("Deals");
      }, 0); // Wait for 0.5s transition duration
    }
  };
  const changeUrl = (newUrl) => {
    window.history.pushState({}, "", newUrl);
  };

  const handleAboutClick = () => {
    setDisplayState("none");
    setDisplayState2("0");
    setDesktopState("About");
    changeUrl("/About");
    // setShowCart(false);
  };
  const handleServicesClick = () => {
    // setShowCart(false);
    setDisplayState("none");
    setDisplayState2("0");
    setDesktopState("Shop");
    changeUrl("/Shop");
    if (!displayed) {
      // Call DisplayProducts only if it hasn't been called yet
      setDisplayed(true);
      // DisplayProducts();
    }
  };
  const handleBlogClick = () => {
    setDisplayState("none");
    setDisplayState2("0");
    setDesktopState("Deals");
    changeUrl("/Deals");
    // setShowCart(false);
  };
  const handleWellnessClick = () => {
    setDisplayState("none");
    setDisplayState2("0");
    setDesktopState("Wellness");
    changeUrl("/Wellness");
    // setShowCart(false);
  };
  const handleLoveClick = () => {
    setDisplayState("none");
    setDisplayState2("0");
    setDesktopState("Lovelab");
    changeUrl("/Lovelab");
    // setShowCart(false);
  };
  const handleContactClick = () => {
    setDisplayState("none");
    setDisplayState2("0");
    setDesktopState("Contact");
    changeUrl("/Contact");
    // setShowCart(false);
  };
  const handleTermsClick = () => {
    setDisplayState("none");
    setDisplayState2("0");
    setDesktopState("Terms");
    changeUrl("/Terms");
    // setShowCart(false);
  };
  const handleHomeClick = () => {
    if (desktopState !== "Homedesktop1") {
      set1stButton("Shop");
      set2ndButton("Deals");
      setDisplayState("block");
      setDisplayState2("1");
      setDesktopState("Homedesktop1");
      set1stOverlay("50vw");
      set2ndOverlay("75vw");
      setPrimeOverlay("0vw");
      setwidthMain("50vw");
      setwidthRec("25vw");
    }
    changeUrl("/");
  };
  // eslint-disable-next-line
  const handleCartClick = () => {
    setDisplayState("none");
    setDisplayState2("0");
    setDesktopState("Cart");
    changeUrl("/Cart");
    // setShowCart(!showCart);
    // console.log('hmmmm',!showCart);
  };

  useEffect(() => {
    const currentUrl = window.location.pathname.toLowerCase();
    const allowedUrls = [
      "/about",
      "/shop",
      "/deals",
      "/wellness",
      "/lovelab",
      "/contact",
      "/cart",
      "/terms",
    ];

    if (allowedUrls.includes(currentUrl)) {
      const stateFromUrl = currentUrl.replace("/", ""); // Remove the leading slash
      setDesktopState(
        stateFromUrl.charAt(0).toUpperCase() + stateFromUrl.slice(1)
      ); // Capitalize the first letter
      // if (currentUrl === '/cart') {
      //   console.log('sip');
      //   // const { handleCart } = DisplayProducts();
      //   handleCart();
      // }
    } else {
      setDesktopState("Homedesktop1"); // Set default state if URL doesn't match
    }
    if(desktopState==='Homedesktop1'){
      // Simulate a loading time of 2 seconds
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
    else{//This is so that the loader does show on any of the other pages.  If i do it another way the DisplayProducts gets displayed multiple times!
      const timer = setTimeout(() => {
        setLoading(false);
      }, 0);
      return () => clearTimeout(timer);
    }

  }, [desktopState]);

  if (loading) {
    return <LoadingScreen />;
  }
  return (
    <div
      className="Homepage"
      style={{
        width: "100%",
        overflowX: "hidden",
        // overflowY: "hidden",
        position: "relative",
        background: "white",
        minHeight: "100vh",
      }}
    >
      <div
        className="Navdesktop"
        style={{ zIndex: 2, position: "fixed", width: "100%" }}
      >
        <div
          className="Navbanner"
          style={{
            width: "100%",
            height: "10vh",
            left: 0,
            top: 0,
            position: "absolute",
            background: "#0e3022",
            borderBottom: "solid black",
          }}
        />
        <div
          className="Navlogo"
          style={{
            width: 99,
            height: "10vh",
            left: 39,
            top: 0,
            position: "absolute",
            justifyContent: "flex-start",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <div
            className="Logos"
            style={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
            onClick={() => handleHomeClick()}
          >
            <img
              className="Logo1"
              style={{ width: "auto", height: "8vh", marginTop: "0px" }}
              src="./logo-green4.png"
              alt="logo"
            />
          </div>
        </div>
      </div>
      <div
        id="Navmenudesktop"
        className="Navmenudesktop"
        style={{
          zIndex: 2,
          width: "80vw",
          height: "10vh",
          right: "0vw",
          position: "fixed",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          display: "inline-flex",
        }}
      >
        <div
          className="ListitemDesktopNa"
          style={{
            width: 115,
            height: "100%",
            paddingLeft: 18,
            paddingRight: 18,
            paddingTop: 0,
            paddingBottom: 0,
            background: "#0e3022",
            borderBottom: "solid black",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
          onClick={() => handleAboutClick()}
        >
          <div
            className="Label"
            style={{
              width: 100,
              textAlign: "center",
              color: "white",
              fontSize: "clamp(13px, 2vw, 16px)",
              fontFamily: "PlayfairDisplay",
              fontWeight: "500",
              letterSpacing: 2,
              wordWrap: "break-word",
            }}
          >
            About
          </div>
        </div>
        <div
          className="ListitemDesktopNa"
          style={{
            width: 115,
            height: "100%",
            paddingLeft: 38,
            paddingRight: 38,
            paddingTop: 0,
            paddingBottom: 0,
            background: "#0e3022",
            borderBottom: "solid black",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
          onClick={() => handleServicesClick()}
        >
          <div
            className="Label"
            style={{
              width: "auto",
              textAlign: "center",
              color: "white",
              fontSize: "clamp(13px, 2vw, 16px)",
              fontFamily: "PlayfairDisplay",
              fontWeight: "500",
              letterSpacing: 2,
              wordWrap: "break-word",
            }}
          >
            Shop
          </div>
        </div>
        <div
          className="ListitemDesktopNa"
          style={{
            width: 115,
            height: "100%",
            paddingLeft: 38,
            paddingRight: 38,
            paddingTop: 0,
            paddingBottom: 0,
            background: "#0e3022",
            borderBottom: "solid black",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
          onClick={() => handleBlogClick()}
        >
          <div
            className="Label"
            style={{
              width: 131,
              textAlign: "center",
              color: "white",
              fontSize: "clamp(13px, 2vw, 16px)",
              fontFamily: "PlayfairDisplay",
              fontWeight: "500",
              letterSpacing: 2,
              wordWrap: "break-word",
            }}
          >
            Deals
          </div>
        </div>
        <div
          className="ListitemDesktopNa"
          style={{
            width: 115,
            height: "100%",
            paddingLeft: 38,
            paddingRight: 38,
            paddingTop: 0,
            paddingBottom: 0,
            background: "#0e3022",
            borderBottom: "solid black",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
          onClick={() => handleLoveClick()}
        >
          <div
            className="Label"
            style={{
              width: 131,
              textAlign: "center",
              color: "white",
              fontSize: "clamp(13px, 2vw, 16px)",
              fontFamily: "PlayfairDisplay",
              fontWeight: "500",
              letterSpacing: 2,
              wordWrap: "break-word",
            }}
          >
            Coaching
          </div>
        </div>
        <div
          className="ListitemDesktopNa"
          style={{
            width: 115,
            height: "100%",
            paddingLeft: 38,
            paddingRight: 38,
            paddingTop: 0,
            paddingBottom: 0,
            background: "#0e3022",
            borderBottom: "solid black",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
          onClick={() => handleWellnessClick()}
        >
          <div
            className="Label"
            style={{
              width: 131,
              textAlign: "center",
              color: "white",
              fontSize: "clamp(13px, 2vw, 16px)",
              fontFamily: "PlayfairDisplay",
              fontWeight: "500",
              letterSpacing: 2,
              wordWrap: "break-word",
            }}
          >
            Wellness
          </div>
        </div>
        <div
          className="ListitemDesktopNa"
          style={{
            width: 115,
            height: "100%",
            paddingLeft: 38,
            paddingRight: 38,
            paddingTop: 0,
            paddingBottom: 0,
            background: "#0e3022",
            borderBottom: "solid black",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}
          onClick={() => handleContactClick()}
        >
          <div
            className="Label"
            style={{
              width: 131,
              textAlign: "center",
              color: "white",
              fontSize: "clamp(13px, 2vw, 16px)",
              fontFamily: "PlayfairDisplay",
              fontWeight: "500",
              letterSpacing: 2,
              wordWrap: "break-word",
            }}
          >
            Contact
          </div>
        </div>
      </div>

      {/* {showCart && <Cart handleCartClick={handleCartClick} />} */}
      {/* <DisplayProducts handleCartClick={handleCartClick} /> */}

      <MobileMenu
        handleContactClick={handleContactClick}
        handleWellnessClick={handleWellnessClick}
        handleLoveClick={handleLoveClick}
        handleBlogClick={handleBlogClick}
        handleServicesClick={handleServicesClick}
        handleAboutClick={handleAboutClick}
        desktopState={desktopState}
      />

      <div
        className="Rectangle158"
        style={{
          display: desktopStateList.includes(desktopState)
            ? "none"
            : displayState,
          zIndex: displayState2,
          width: Recwidth,
          height: "15vh",
          maxHeight: "10%",
          left: `${Overlay1.replace("vw", "")}%`,
          top: "73vh",
          position: "absolute",
          background: "rgba(33, 74, 109, 0.8)",
          transition: "left 0.5s ease-in-out",
          border: "solid rgba(14, 29, 48, 1)",
        }}
      />
      <div
        className="Rectangle158"
        style={{
          display: desktopStateList.includes(desktopState)
            ? "none"
            : displayState,
          zIndex: displayState2,
          width: Recwidth,
          height: "15vh",
          maxHeight: "10%",
          left: `${Overlay2.replace("vw", "")}%`,
          top: "73vh",
          position: "absolute",
          background: "rgba(33, 74, 109, 0.8)",
          transition: "left 0.5s ease-in-out",
          border: "solid rgba(14, 29, 48, 1)",
        }}
      />
      {/* MAIN */}
      <div
        className="Overlay1"
        style={{
          display: desktopStateList.includes(desktopState)
            ? "none"
            : displayState,
          zIndex: displayState2,
          width: Mainwidth,
          height: "100vh",
          left: `${MainOverlay.replace("vw", "")}%`,
          top: 0,
          position: "absolute",
          background: "rgba(0, 0, 0, 0.20)",
          transition: "left 0.5s ease-in-out",
        }}
      ></div>

      {/* Shop */}
      <div
        className="Overlay2"
        style={{
          display: desktopStateList.includes(desktopState)
            ? "none"
            : displayState,
          zIndex: displayState2,
          width: "25vw",
          height: "100vh",
          left: `${Overlay1.replace("vw", "")}%`,
          top: 0,
          position: "absolute",
          background: "rgba(0, 0, 0, 0.0)",
          transition: "left 0.5s ease-in-out",
        }}
      />
      <div
        id="HoverOverlay2"
        className="HoverOverlay2"
        style={{
          zIndex: displayState2,
          opacity: displayState2,
          height: "100vh",
          left: `${Overlay1.replace("vw", "")}%`,
          top: 0,
          position: "absolute",
          background: "rgba(0, 0, 0, 0.)",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          display: desktopStateList.includes(desktopState)
            ? "none"
            : "inline-flex",
          transition: "left 0.5s ease-in-out",
          width: Recwidth,
        }}
      >
        <div
          className="ButtonServices"
          style={{
            position: "absolute",
            marginTop: 0,
            height: "15vh",
            top: "70vh",
            textAlign: "center",
            color: "white",
            fontSize: "clamp(12px, 3vw, 30px)",
            fontFamily: "PlayfairDisplay",
            fontWeight: "700",
            zIndex: 1,
            letterSpacing: 3,
            wordWrap: "break-word",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => handleButtonClick(desktopState)}
        >
          {Button1}
        </div>
      </div>

      {/* Blog */}
      <div
        className="Overlay3"
        style={{
          display: desktopStateList.includes(desktopState)
            ? "none"
            : displayState,
          zIndex: displayState2,
          width: "25vw",
          height: "100vh",
          left: `${Overlay2.replace("vw", "")}%`,
          top: 0,
          position: "absolute",
          background: "rgba(0, 0, 0, 0.0)",
          transition: "left 0.5s ease-in-out",
        }}
      />
      <div
        id="HoverOverlay3"
        className="HoverOverlay3"
        style={{
          zIndex: displayState2,
          opacity: displayState2,
          height: "100vh",
          left: `${Overlay2.replace("vw", "")}%`,
          top: 0,
          position: "absolute",
          hover: "rgba(0, 0, 0, 0.20)",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "center",
          gap: 8,
          display: desktopStateList.includes(desktopState)
            ? "none"
            : "inline-flex",
          transition: "left 0.5s ease-in-out",
          width: Recwidth,
        }}
      >
        <div
          className="ButtonBlog"
          style={{
            zIndex: 1,
            color: "white",
            position: "absolute",
            height: "15vh",
            top: "70vh",
            textAlign: "center",
            fontSize: "clamp(12px, 3vw, 30px)",
            fontFamily: "PlayfairDisplay",
            fontWeight: "700",
            letterSpacing: 3,
            wordWrap: "break-word",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => handleButton2Click(desktopState)}
        >
          {Button2}
        </div>
      </div>

      {isHomeDesktop && (
        <OverlaysMobile
          displayState={
            desktopStateList.includes(desktopState) ? "none" : displayState
          }
          displayState2={displayState2}
          desktopState={desktopState}
          handleWellnessClick={handleWellnessClick}
          handleBlogClick={handleBlogClick}
          handleServicesClick={handleServicesClick}
          handleAboutClick={handleAboutClick}
          handleCartClick={handleCartClick}
          setDesktopState={setDesktopState}
        />
      )}

      {desktopState === "Homedesktop1" && (
        <div
          id="Homedesktop1"
          className="Homedesktop1"
          style={{
            width: "100%",
            height: "100vh",
            position: "absolute",
            display: desktopStateList.includes(desktopState)
              ? "none"
              : "static",
            overflow: "hidden",
          }}
        >
          <div
            className="Image"
            style={{
              width: "100%",
              height: "147vh",
              top: 0,
              position: "absolute",
              justifyContent: "flex-end",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <img
              className="AboutMem2"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              // src="./home1e-trop2.png"
              src="./home1e-trop2-new.png"
              alt="About me"
            />
          </div>
          {/* <FadeInSection> */}
          <div
            className="TextContent1"
            style={{
              border: "hidden red",
              height: "75vh",
              left: "3.5vw",
              top: "30vh",
              position: "absolute",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              gap: 24,
              display: "inline-flex",
            }}
          >
            <div
              className="Title"
              style={{
                width: "40vw",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-start",
                display: "flex",
              }}
            >
              <div
                className="Title"
                style={{
                  zIndex: 1,
                  color: "black",
                  fontSize: "clamp(45px, 4vw, 75px)",
                  fontFamily: "Rochester",
                  lineHeight: 1,
                  wordWrap: "break-word",
                  textShadow: "2 2 2px rgba(255, 255, 255, 1)",
                }}
              >
                Exotic Relief by Dr. Joi
              </div>
            </div>
            <div
              className="Lead"
              style={{
                maxWidth: "40vw",
                alignSelf: "stretch",
                color: "black",
                textShadow: "0px 4px 3px rgba(162, 158, 158, 0.9)",
                fontSize: "clamp(30px, 2.5vw, 30px)",
                fontFamily: "PlayfairDisplay",
                fontWeight: "400",
                lineHeight: 1.5,
                wordWrap: "break-word",
              }}
            >
              Build The Life Your Brain Deserves
            </div>
            <div
              className="Button InitialAbout"
              style={{ background: "rgba(33, 74, 109, 1)" }}
            >
              <div
                className="Label"
                style={{ color: "white", fontFamily: "PlayfairDisplay" }}
                onClick={() => handleAboutClick()}
              >
                About Me
              </div>
            </div>
          </div>
          {/* </FadeInSection> */}
        </div>
      )}
      {desktopState === "Homedesktop2" && (
        <div
          id="Homedesktop2"
          className="Homedesktop2"
          style={{
            left: 0,
            top: 0,
            position: "absolute",
            width: "100%",
            height: "100vh",
            border: "1px black solid",
            display: desktopStateList.includes(desktopState)
              ? "none"
              : "static",
            overflow: "hidden",
          }}
        >
          <div
            className="Image"
            style={{
              width: "100vw",
              height: "97vh",
              left: "-1px",
              top: 0,
              position: "absolute",
              justifyContent: "flex-end",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <img
              className="AboutMem2"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="./home3h.jpg"
              alt="Boardroom"
            />
          </div>
          <div
            className="TextContent1"
            style={{
              height: "87vh",
              paddingLeft: "0vw",
              right: "10px",
              top: "10vh",
              position: "absolute",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "end",
              gap: 24,
              display: "inline-flex",
            }}
          >
            <div
              className="Title"
              style={{
                width: "30vw",
                height: 28,
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                display: "flex",
              }}
            >
              <div
                className="Title2"
                style={{
                  zIndex: 1,
                  color: "white",
                  fontSize: "clamp(20px, 4vw, 64px)",
                  fontFamily: "PlayfairDisplay",
                  lineHeight: 1.1,
                  wordWrap: "break-word",
                  textAlign: "end",
                }}
              >
                Unlock Exlusive Deals
              </div>
            </div>
            <div
              className="Title2"
              style={{
                zIndex: 1,
                color: "white",
                fontSize: "clamp(15px, 2vw, 20px)",
                fontFamily: "PlayfairDisplay",
                lineHeight: 1.1,
                wordWrap: "break-word",
                textAlign: "end",
                maxWidth: "25vw",
              }}
            >
              Explore Curated Selections and Partnerships for Top-Quality
              Products
            </div>
            <div
              className="Button"
              style={{ background: "rgba(33, 74, 109, 1)" }}
            >
              <div
                className="Label"
                style={{ color: "white", fontFamily: "PlayfairDisplay" }}
                onClick={() => handleBlogClick()}
              >
                Claim Deals
              </div>
            </div>
          </div>
        </div>
      )}
      {desktopState === "Homedesktop3" && (
        <div
          id="Homedesktop3"
          className="Homedesktop3"
          style={{
            left: 0,
            top: 0,
            position: "absolute",
            width: "100%",
            height: "100vh",
            border: "1px black solid",
            display: desktopStateList.includes(desktopState)
              ? "none"
              : "static",
            overflow: "hidden",
          }}
        >
          <div
            className="Image"
            style={{
              width: "100vw",
              height: "97vh",
              left: "-1px",
              top: 0,
              position: "absolute",
              justifyContent: "flex-end",
              alignItems: "center",
              display: "inline-flex",
            }}
          >
            <img
              className="AboutMem2"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              src="./home2w.jpg"
              alt="Planning"
            />
          </div>
          <div
            className="TextContent1"
            style={{
              height: "87vh",
              paddingLeft: "0vw",
              left: "35vw",
              position: "absolute",
              flexDirection: "column",
              top: "10vh",
              justifyContent: "center",
              alignItems: "center",
              gap: 24,
              display: "inline-flex",
            }}
          >
            <div
              className="Title2"
              style={{
                zIndex: "1",
                width: "30vw",
                height: 28,
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                display: "flex",
              }}
            >
              <div
                className="Title2"
                style={{
                  color: "white",
                  fontSize: "clamp(20px, 4vw, 54px)",
                  fontFamily: "PlayfairDisplay",
                  lineHeight: 1.1,
                  wordWrap: "break-word",
                  textAlign: "center",
                }}
              >
                Indulge in My Hand Picked Collection
              </div>
            </div>
            <div
              className="Title2"
              style={{
                zIndex: "1",
                color: "white",
                fontSize: "clamp(15px, 2vw, 30px)",
                fontFamily: "PlayfairDisplay",
                lineHeight: 1.1,
                wordWrap: "break-word",
                textAlign: "center",
                width: "30vw",
              }}
            >
              Discover Personalized Essentials Tailored for You.
            </div>
            <div
              className="Button"
              style={{ background: "rgba(33, 74, 109, 1)" }}
            >
              <div
                className="Label"
                style={{ color: "white", fontFamily: "PlayfairDisplay" }}
                onClick={() => handleServicesClick()}
              >
                Explore Shop
              </div>
            </div>
          </div>
        </div>
      )}

      {desktopState === "About" && <About />}
      {desktopState === "Shop" && (
        <>
          <DisplayProducts handleCartClick={handleCartClick} />
          <Shop />
        </>
      )}
      {desktopState === "Deals" && <Deals />}
      {desktopState === "Lovelab" && <LoveLab />}
      {desktopState === "Wellness" && <Wellness />}
      {desktopState === "Contact" && <Contact />}
      {desktopState === "Cart" && (
        <>
          {/* <DisplayProducts handleCartClick={handleCartClick} /> */}
          <Cart />
        </>
      )}
      {desktopState === "Terms" && <Terms />}

      <div
        className="Footerdesktop"
        style={{
          zIndex: 4,
          width: "100%",
          height: 43,
          left: 0,
          bottom: "0vh",
          position: "fixed",
          background: "#0e3022",
          border: "solid black",
        }}
      >
        <div
          className="Footerprivacy"
          style={{
            height: 43,
            marginRight: 20,
            right: "0vw",
            top: 0,
            position: "absolute",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 10,
            display: "inline-flex",
          }}
        >
          <div
            className="HeadingName"
            style={{
              height: 43,
              paddingTop: 0,
              paddingBottom: 0,
              justifyContent: "center",
              alignItems: "flex-start",
              gap: 20,
              display: "flex",
            }}
          >
            <div
              className="HeaderMenuDefault"
              style={{
                alignSelf: "stretch",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 10,
                display: "inline-flex",
              }}
            >
              <div
                className="Label"
                style={{
                  color: "white",
                  fontSize: "clamp(11px, 1vw, 16px)",
                  fontFamily: "Roboto",
                  fontWeight: "500",
                  wordWrap: "break-word",
                  textAlign: "center",
                }}
                onClick={() => handleTermsClick()}
              >
                Terms of Use
              </div>
            </div>
            <div
              className="MenuItemDefault"
              style={{
                alignSelf: "stretch",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 10,
                display: "inline-flex",
              }}
            >
              <div
                className="Label"
                style={{
                  color: "white",
                  fontSize: "clamp(11px, 1vw, 16px)",
                  fontFamily: "Roboto",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
                onClick={() => handleTermsClick()}
              >
                Privacy
              </div>
            </div>
            <div
              className="MenuItemDefault contact-footer"
              style={{
                alignSelf: "stretch",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 10,
                display: "inline-flex",
              }}
            >
              <div
                className="Label"
                style={{
                  color: "white",
                  fontSize: "clamp(11px, 1vw, 16px)",
                  fontFamily: "Roboto",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
                onClick={() => handleContactClick()}
              >
                Contact
              </div>
            </div>
            <div
              className="MenuItemDefault"
              style={{
                alignSelf: "stretch",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 10,
                display: "inline-flex",
              }}
            >
              <div
                className="Label"
                style={{
                  color: "white",
                  fontSize: "clamp(11px, 1vw, 16px)",
                  fontFamily: "Roboto",
                  fontWeight: "500",
                  wordWrap: "break-word",
                  textAlign: "center",
                }}
              >
                <a href="https://www.pmdaybreak.com" target="_blank"rel="noreferrer"style={{ color: "white" }}>
                  Web Design: PM Daybreak
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="Footercompany"
          style={{
            width: 458,
            height: 43,
            left: 0,
            top: 0,
            position: "absolute",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: 10,
            display: "inline-flex",
          }}
        >
          <div
            className="HeadingName"
            style={{
              paddingTop: 9,
              paddingBottom: 10,
              paddingRight: 119,
              justifyContent: "flex-start",
              alignItems: "center",
              display: "flex",
            }}
          >
            <div
              className="MenuItemDefault"
              style={{
                alignSelf: "stretch",
                paddingLeft: 20,
                paddingRight: 20,
                justifyContent: "flex-start",
                alignItems: "center",
                gap: 10,
                display: "inline-flex",
              }}
            >
              <div
                className="Label"
                style={{
                  color: "white",
                  fontSize: "clamp(11px, 1vw, 16px)",
                  fontFamily: "Roboto",
                  fontWeight: "500",
                  wordWrap: "break-word",
                }}
              >
                Exotic Relief by Dr Joi
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "0px",
                }}
              >
                <a
                  href="https://www.instagram.com/theebonijoi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fab fa-instagram"
                    style={{
                      fontSize: "15px",
                      color: "white",
                      marginRight: "10px",
                    }}
                  ></i>
                </a>
                <a
                  href="https://www.tiktok.com/@TheEboniJoi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fab fa-tiktok"
                    style={{ fontSize: "15px", color: "white" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
