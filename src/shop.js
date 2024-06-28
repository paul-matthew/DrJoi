import React from "react";
import "./App.css";
import "./style.css";
// import ServicesMobile from './components/ServicesMobile';
import FadeInSection from "./components/FadeIn.js";
import "./products.js";

function Shop() {
  return (
    <>
      <div
        className="Services"
        style={{
          maxWidth: "100vw",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
          background: "white",
        }}
      >
        <div id="NavlogoMobile">
          <img
            src="./logo-green3.png"
            alt="logo mobile"
            style={{
              height: "7vh",
              marginTop: "0vh",
              position: "fixed",
              left: 10,
              top: 10,
            }}
            onClick={() => (window.location.href = "./")}
          />
        </div>
        <div className="Banner">
          <img
            src="./bannerflower.png"
            alt="banner"
            style={{
              zIndex: 2,
              width: "100vw",
              maxHeight: "200px",
              marginTop: "3vh",
              left: 0,
              top: 0,
              objectFit: "cover",
            }}
          />
        </div>
        <div
          className="Servicesx"
          style={{
            width: "100%",
            position: "relative",
            background: "white",
            top: "100px",
            marginTop: "-90px",
            flexDirection: "column",
            display: "inline-flex",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <FadeInSection>
            <div style={{ backgroundColor: "white" }}>
              <div
                className="MySkill"
                style={{
                  height: "auto",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: 56.67,
                  display: "inline-flex",
                  padding: "0px 4vw",
                }}
              >
                <div
                  className="SectionTitle"
                  style={{
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    gap: "1vh",
                    display: "flex",
                  }}
                >
                  <div
                    className="Content"
                    style={{
                      alignSelf: "stretch",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      gap: 32,
                      display: "flex",
                    }}
                  >
                    <div
                      className="MyExpertise"
                      style={{
                        alignSelf: "stretch",
                        color: "#282938",
                        fontSize: "clamp(40px, 4vw, 61px)",
                        fontFamily: "PlayfairDisplay",
                        fontWeight: "700",
                        wordWrap: "break-word",
                      }}
                    >
                      Shop
                    </div>
                  </div>
                  <div
                    className="MyExpertise"
                    style={{
                      alignSelf: "stretch",
                      color: "#282938",
                      fontSize: "clamp(20px, 4vw, 20px)",
                      fontFamily: "PlayfairDisplay",
                      fontWeight: "500",
                      wordWrap: "break-word",
                    }}
                  >
                    “
                    <i>
                      I’m so excited to share with you my range of products that
                      I have personally designed. I hope they bring a smile to
                      your day.
                    </i>
                    ” - Dr. Joi
                  </div>
                  <div
                    className="MyExpertise"
                    style={{
                      alignSelf: "stretch",
                      color: "red",
                      fontSize: "clamp(30px, 4vw, 61px)",
                      fontFamily: "PlayfairDisplay",
                      fontWeight: "700",
                      wordWrap: "break-word",
                      marginTop: "30px",
                    }}
                  >
                    Limited Time Offers <div style={{color:'black',fontSize:'25px'}}>UP TO 25% OFF</div>
                  </div>
                </div>
              </div>
            </div>
          </FadeInSection>
          <div>
            <FadeInSection>
              <div
                id="products-container"
                className="row justify-content-center"
                data-aos="fade-up"
                data-aos-delay="200"
                data-aos-duration="1000"
                style={{ marginBottom: "50px", minHeight: "50vh" }}
              ></div>
            </FadeInSection>
            {/* <div className="Frame2230" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {services.map((service, index) => (
                        <div className="Servicecard" key={index} style={{ position: 'relative', backgroundColor: 'white', border: 'black 2px solid', width: '250px', margin: '20px', padding: '10px' }}>
                            <div className="CardTitle">
                                <div className="TitleSer">{service.title}</div>
                            </div>
                            <div className="CardImage" onClick={() => handleReadMoreClick(service)}>
                                <img className="cardpic" style={{ maxHeight: '200px', opacity: '80%' }} src={`./${service.image}`} alt={service.title} />
                            </div>
                            <div className="CardTextx" style={{ paddingLeft: '20px', paddingRight: '30px' }}>{service.description}</div>
                        </div>
                        ))}
                    </div> */}
            {/* <FadeInSection>
                    <div className="MyExpertise" style={{ alignSelf: 'stretch', color: 'black', fontSize: 'clamp(30px, 4vw, 51px)', fontFamily: 'PlayfairDisplay', fontWeight: '700', wordWrap: 'break-word',marginTop:'30px' }}>Our Full Collection</div>
                    <div className="Frame2230" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center',marginBottom:'100px' }}>
                        {services.map((service, index) => (
                            <div className="Servicecard" key={index} style={{ position: 'relative', backgroundColor: 'white', border: 'black 2px solid', width: '250px', margin: '20px', padding: '10px' }}>
                                <div className="CardTitle">
                                    <div className="TitleSer">{service.title}</div>
                                </div>
                                <div className="CardImage" onClick={() => handleReadMoreClick(service)}>
                                    <img className="cardpic" style={{ maxHeight: '200px', opacity: '80%' }} src={`./${service.image}`} alt={service.title} />
                                </div>
                                <div className="CardTextx" style={{ paddingLeft: '20px', paddingRight: '30px' }}>{service.description}</div>
                            </div>
                        ))}
                    </div>
                </FadeInSection> */}
          </div>
        </div>
      </div>
    </>
  );
}

// ReactDOM.render(<Shop />, document.getElementById('root'));
export default Shop;
