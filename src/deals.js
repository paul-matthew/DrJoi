import "./App.css";
import FadeInSection from "./components/FadeIn.js";

import React from "react";

const Deals = () => {
  return (
    <div
      className="BlogContainer"
      style={{
        maxWidth: "100vw",
        overflow: "hidden",
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
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0px",
          marginTop: "30px",
        }}
      >
        <FadeInSection>
          <div style={{ backgroundColor: "white" }}>
            <div
              className="MySkill"
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: 56.67,
                display: "inline-flex",
                padding: "0px 3vw",
              }}
            >
              <div
                className="SectionTitle"
                style={{
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "flex-start",
                  gap: "3vh",
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
                    Exclusive Offers
                  </div>
                </div>
              </div>
              <FadeInSection>
                <div
                  className="Row"
                  style={{
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                    marginBottom: "160px",
                  }}
                >
                  <div
                    className="Card"
                    style={{
                      maxWidth: "50%",
                      maxHeight:'500px',
                      flex: "1 1 0",
                      background: "white",
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      display: "inline-flex",
                      marginBottom: "20px",
                    }}
                  >
                    <img
                      className="PlaceholderImage"
                      style={{
                        alignSelf: "stretch",
                        height: 200,
                        borderRadius: 8,
                        objectFit: "cover",
                      }}
                      src="./plane.jpg"
                      alt="Placeholder"
                    />
                    <div
                      className="CardContent dealcard"
                      style={{
                        alignSelf: "stretch",
                        padding: 32,
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 32,
                        display: "flex",
                        marginBottom: "50px",
                      }}
                    >
                      <div
                        className="Content"
                        style={{
                          alignSelf: "stretch",
                          height: "30vh",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          gap: 10.67,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            alignSelf: "stretch",
                            height: "30vh",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            gap: 10.67,
                            display: "flex",
                          }}
                        >
                          <div
                            className="Project1"
                            style={{
                              alignSelf: "stretch",
                              color: "#282938",
                              fontSize: "clamp(24px, 3vw, 30px)",
                              fontFamily: "Roboto",
                              fontWeight: "700",
                              wordWrap: "break-word",
                            }}
                          >
                            Travel Signup Deal
                          </div>
                          <div
                            style={{
                              alignSelf: "stretch",
                              color: "black",
                              fontSize: "clamp(14px, 3vw, 17px)",
                              fontFamily: "Roboto",
                              fontWeight: "400",
                              wordWrap: "break-word",
                            }}
                          >
                            <b>Offer: </b>
                            <a href="https://www.placeholder.com"target="_blank"rel="noreferrer">
                              www.placeholder.com
                            </a>
                            <div>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Nulla nec justo eget ex consectetur luctus
                              sit amet eu sapien. Phasellus vel felis id magna
                              convallis feugiat. Nam ullamcorper ante vitae
                              felis consectetur, eu vehicula quam placerat.
                              Integer euismod massa non dolor porta, sed semper
                              arcu vestibulum.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="Card"
                    style={{
                      maxWidth: "50%",
                      flex: "1 1 0",
                      maxHeight:'500px',
                      background: "white",
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      display: "inline-flex",
                      marginBottom: "20px",
                    }}
                  >
                    <img
                      className="PlaceholderImage"
                      style={{
                        alignSelf: "stretch",
                        height: 200,
                        borderRadius: 8,
                        objectFit: "cover",
                      }}
                      src="./amazon-deals.jpg"
                      alt="Placeholder"
                    />
                    <div
                      className="CardContent"
                      style={{
                        alignSelf: "stretch",
                        padding: 32,
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 32,
                        display: "flex",
                        marginBottom: "50px",
                      }}
                    >
                      <div
                        className="Content"
                        style={{
                          alignSelf: "stretch",
                          height: "30vh",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          gap: 10.67,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            alignSelf: "stretch",
                            height: "30vh",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            gap: 10.67,
                            display: "flex",
                          }}
                        >
                          <div
                            className="Project1"
                            style={{
                              alignSelf: "stretch",
                              color: "#282938",
                              fontSize: "clamp(24px, 3vw, 30px)",
                              fontFamily: "Roboto",
                              fontWeight: "700",
                              wordWrap: "break-word",
                            }}
                          >
                            Amazon Deals
                          </div>
                          <div
                            style={{
                              alignSelf: "stretch",
                              color: "black",
                              fontSize: "clamp(14px, 3vw, 17px)",
                              fontFamily: "Roboto",
                              fontWeight: "400",
                              wordWrap: "break-word",
                            }}
                          >
                            <b>Offer: </b>
                            <a href="https://www.amazon.com/shop/theebonijoi"target="_blank"rel="noreferrer">
                              www.amazon.com/shop/theebonijoi.com
                            </a>
                            <div>
                            Explore our curated selection of mental health and self-care products from Amazon to support your wellness journey. 
                            By purchasing through our affiliate links, you help us earn a small commission at no extra cost to you, enabling us to continue providing valuable resources.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div
                    className="Card"
                    style={{
                      maxWidth: "100%",
                      flex: "1 1 0",
                      background: "white",
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      display: "inline-flex",
                      marginBottom: "20px",
                    }}
                  >
                    <img
                      className="PlaceholderImage"
                      style={{
                        alignSelf: "stretch",
                        height: 200,
                        borderRadius: 8,
                        objectFit: "cover",
                      }}
                      src="./recipes.jpg"
                      alt="Placeholder"
                    />
                    <div
                      className="CardContent"
                      style={{
                        alignSelf: "stretch",
                        padding: 32,
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: 32,
                        display: "flex",
                        marginBottom: "50px",
                      }}
                    >
                      <div
                        className="Content"
                        style={{
                          alignSelf: "stretch",
                          height: "30vh",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          gap: 10.67,
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            alignSelf: "stretch",
                            height: "30vh",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            gap: 10.67,
                            display: "flex",
                          }}
                        >
                          <div
                            className="Project1"
                            style={{
                              alignSelf: "stretch",
                              color: "#282938",
                              fontSize: "clamp(24px, 3vw, 30px)",
                              fontFamily: "Roboto",
                              fontWeight: "700",
                              wordWrap: "break-word",
                            }}
                          >
                            Recipes
                          </div>
                          <div
                            style={{
                              alignSelf: "stretch",
                              color: "black",
                              fontSize: "clamp(14px, 3vw, 17px)",
                              fontFamily: "Roboto",
                              fontWeight: "400",
                              wordWrap: "break-word",
                            }}
                          >
                            <b>Offer: </b>
                            <a href="https://www.placeholder.com"target="_blank"rel="noreferrer">
                              www.placeholder.com
                            </a>
                            <div>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Nulla nec justo eget ex consectetur luctus
                              sit amet eu sapien. Phasellus vel felis id magna
                              convallis feugiat. Nam ullamcorper ante vitae
                              felis consectetur, eu vehicula quam placerat.
                              Integer euismod massa non dolor porta, sed semper
                              arcu vestibulum.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </FadeInSection>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Deals;
