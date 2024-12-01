import "./App.css";
import FadeInSection from "./components/FadeIn.js";

import React, { useState, useEffect, useRef } from "react";

const Deals = () => {
  const [clientWidth, setClientWidth] = useState(window.innerWidth);
  const [goal, setGoal] = useState("");
  const [otherResponse, setOtherResponse] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const smallScreen = clientWidth <= 640;
  const formRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setClientWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      name: event.target.name.value,
      location: event.target.location.value,
      email: event.target.email.value,
      goal: goal === "other" ? otherResponse : goal,
    };

    let dealsFetchURL = "https://drjoiserver-106ea7a60e39.herokuapp.com/deals";
    if (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
    ) {
      dealsFetchURL = "http://localhost:5000/deals";
    }

    try {
      const response = await fetch(dealsFetchURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send the form. Please try again.");
      }

      const data = await response.json();
      console.log("Success:", data);
      setResponseMessage("Form submitted successfully!");
      formRef.current.reset(); // Reset the form after submission
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("An error occurred. Please try again.");
    }
  };

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
          src="./logo-green4.png"
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
                    display: "flex",
                    flexDirection: window.innerWidth < 768 ? "column" : "row", // Adjust based on screen size
                  }}
                >
                {/* contact card */}
                  <div
                    // className="Card"
                    style={{
                      width: window.innerWidth < 768 ? "100%" : "48%",
                      minHeight:"900px !important",
                      height: "1050px", 
                      background: "white",
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      display: "flex",
                      marginBottom: "20px",
                      padding: "16px",
                      boxSizing: "border-box",
                    }}
                  >
                    <img
                      className="PlaceholderImage"
                      style={{
                        alignSelf: "stretch",
                        minHeight: "150px",
                        maxHeight: "600px",
                        borderRadius: "8px",
                        objectFit: "cover",
                        width: "100%",
                      }}
                      src="./DrJoiLondon.jpg"
                      alt="Placeholder"
                    />
                    <div
                      className="CardContent dealcard"
                      style={{
                        padding: "16px",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: "16px",
                        display: "flex",
                        flex: 1,
                        width: "100%",
                      }}
                    >
                      <div
                        className="Content"
                        style={{
                          width: "100%",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                          gap: "10px",
                          display: "flex",
                          flex: 1,
                        }}
                      >
                        <div
                          style={{
                            width: "100%",
                            color: "#282938",
                            fontSize: "clamp(24px, 3vw, 30px)",
                            fontFamily: "Roboto",
                            fontWeight: "700",
                            wordWrap: "break-word",
                          }}
                        >
                          Travel Sign-up Deal
                        </div>
                        <div
                          style={{
                            width: "100%",
                            color: "black",
                            fontSize: "clamp(14px, 3vw, 17px)",
                            fontFamily: "Roboto",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          <form
                            className="DealsForm"
                            ref={formRef}
                            style={{ width: "100%", minHeight: "30vh" }}
                            onSubmit={handleSubmit}
                          >
                            <div className="FormGroup">
                              <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder={
                                  smallScreen ? "Name" : "Enter your name"
                                }
                                required
                              />
                            </div>
                            <div className="FormGroup">
                              <input
                                type="text"
                                id="location"
                                name="location"
                                placeholder={
                                  smallScreen
                                    ? "Location"
                                    : "Enter your location"
                                }
                                required
                              />
                            </div>
                            <div className="FormGroup">
                              <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder={
                                  smallScreen ? "Email" : "Enter your email"
                                }
                                required
                              />
                            </div>
                            <div className="FormGroup">
                              <label htmlFor="goal">What is your goal?</label>
                              <select
                                id="goal"
                                name="goal"
                                value={goal}
                                onChange={(e) => setGoal(e.target.value)}
                                required
                              >
                                <option value="" disabled>
                                  Select your goal
                                </option>
                                <option value="discounts">
                                  Discounts for Travel
                                </option>
                                <option value="income">
                                  Making Extra Income
                                </option>
                                <option value="community">
                                  Joining Travel Community
                                </option>
                                <option value="other">Other</option>
                              </select>
                            </div>
                            {goal === "other" && (
                              <div className="FormGroup">
                                <textarea
                                  id="otherResponse"
                                  name="otherResponse"
                                  rows="4"
                                  placeholder="Please type your response"
                                  value={otherResponse}
                                  onChange={(e) =>
                                    setOtherResponse(e.target.value)
                                  }
                                  required
                                ></textarea>
                              </div>
                            )}
                            <div
                              className="FormGroup last-form-group"
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                              }}
                            >
                              <button className="Button" type="submit">
                                <div
                                  className="Label"
                                  style={{ fontFamily: "PlayfairDisplay" }}
                                >
                                  Submit
                                </div>
                              </button>
                            </div>
                            <div
                              id="responseMessage"
                              style={{ marginTop: "15px", color: "black" }}
                            >
                              {responseMessage}
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
{/* amazon card */}
                  <div
                    // className="Card"
                    style={{
                      width: window.innerWidth < 768 ? "100%" : "48%",
                      minHeight:"900px !important",
                      maxHeight: "1050px", 
                      height: "1050px",
                      background: "white",
                      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
                      flexDirection: "column",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                      display: "flex",
                      marginBottom: "20px",
                      padding: "16px",
                      boxSizing: "border-box",
                    }}
                  >
                    <img
                      className="PlaceholderImage"
                      style={{
                        alignSelf: "stretch",
                        height: "600px",
                        maxHeight: "900px",
                        borderRadius: "8px",
                        objectFit: "contain",
                        width: "100%",
                      }}
                      src="./amazon-deals.jpg"
                      alt="Placeholder"
                    />
                    <div
                      className="CardContent"
                      style={{
                        padding: "16px",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        gap: "16px",
                        display: "flex",
                        flex: 1,
                        width: "100%",
                      }}
                    >
                      <div
                        className="Content"
                        style={{
                          width: "100%",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "flex-start",
                         gap: "10px",
                          display: "flex",
                          flex: 1,
                        }}
                      >
                        <div
                          style={{
                            width: "100%",
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
                            width: "100%",
                            color: "black",
                            fontSize: "clamp(14px, 3vw, 17px)",
                            fontFamily: "Roboto",
                            fontWeight: "400",
                            wordWrap: "break-word",
                          }}
                        >
                          <b>Offer: </b>
                          <a
                            href="https://www.amazon.com/shop/theebonijoi"
                            target="_blank"
                            rel="noreferrer"
                          >
                            www.amazon.com/shop/theebonijoi.com
                          </a>
                          <div>
                            Explore our curated selection of mental health and
                            self-care products from Amazon to support your
                            wellness journey. By purchasing through our
                            affiliate links, you help us earn a small commission
                            at no extra cost to you, enabling us to continue
                            providing valuable resources.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
