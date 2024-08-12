import "./App.css";
import FadeInSection from "./components/FadeIn.js";
import React, { useEffect, useState } from "react";
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "./components/CheckOutForm.js";
import { loadStripe } from '@stripe/stripe-js';

const Donations = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState('');
  const [amount, setAmount] = useState(5000); // Default amount in cents

  useEffect(() => {
    let fetchURL = "https://drjoiserver-106ea7a60e39.herokuapp.com/stripe/publishable-key";
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      fetchURL = "http://localhost:5000/stripe/publishable-key";
    }
  
    fetch(fetchURL)
      .then(response => response.json())
      .then(data => {
        setStripePromise(loadStripe(data.publishableKey));
      })
      .catch(error => console.error("Error fetching publishable key:", error));
  }, []);

  const handleDonate = () => {
    let fetchURL = "https://drjoiserver-106ea7a60e39.herokuapp.com/stripe/create-payment-intent";
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      fetchURL = "http://localhost:5000/stripe/create-payment-intent";
    }

    fetch(fetchURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: amount, // Use the user-specified amount
      }),
    })
      .then(response => response.json())
      .then(data => setClientSecret(data.clientSecret))
      .catch(error => console.error("Error fetching payment intent:", error));
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
            objectFit: "cover",
          }}
        />
      </div>
      <div
        className="PostsWrapper"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
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
                padding: "0px 3vw",
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
                    Donations
                  </div>
                </div>
                <div
                  className="MyExpertise"
                  style={{
                    alignSelf: "stretch",
                    color: "#282938",
                    fontSize: "clamp(15px, 4vw, 25px)",
                    fontFamily: "PlayfairDisplay",
                    fontWeight: "500",
                    wordWrap: "break-word",
                  }}
                >
                  “
                  <i>
                    All donations are used to further promote mental health and wellness through Exotic Relief by Dr. Joi. 
                    Refer to Terms of Use for more information.
                  </i>
                  ” - Dr. Joi
                </div>
              </div>
              {/* <FadeInSection> */}
                <div>
                  <input
                    type="number"
                    value={amount / 100}
                    onChange={(e) => setAmount(e.target.value * 100)}
                    style={{ marginBottom: "10px" }}
                  />
                  <button onClick={handleDonate} style={{ padding: "10px", fontSize: "16px" }}>
                    Donate ${amount / 100}
                  </button>
                </div>
                {stripePromise && clientSecret && (
                  <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm />
                  </Elements>
                )}
              {/* </FadeInSection> */}
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default Donations;

