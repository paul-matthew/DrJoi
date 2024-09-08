import React, { useEffect, useRef } from 'react';

const PayPalButton = ({ amount, email }) => {
  const paypalRef = useRef();

  useEffect(() => {
    const fetchConfig = async () => {
      const headers = new Headers();
      headers.append("Content-Type", "application/json");

      let fetchURLpay = "";
      if (
        window.location.hostname === "localhost" ||
        window.location.hostname === "127.0.0.1"
      ) {
        fetchURLpay = "http://localhost:5000/config";
      } else {
        fetchURLpay = "https://drjoiserver-106ea7a60e39.herokuapp.com/config";
      }

      try {
        const response = await fetch(fetchURLpay);
        const config = await response.json();

        const script = document.createElement("script");
        script.src = `https://www.paypal.com/sdk/js?client-id=${config.paypalClientId}`;
        script.onload = () => initializePayPal();
        document.head.appendChild(script);
      } catch (error) {
        console.error("Error fetching configuration:", error);
      }
    };

    const initializePayPal = () => {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                currency_code: 'USD',
                value: amount
              }
            }],
            application_context: {
              shipping_preference: "NO_SHIPPING" // This disables shipping options
            }
          });
        },
        onApprove: async (data, actions) => {
          try {
            await actions.order.capture();
            alert('Donation successful!');
            
            // Send donation details to server
            let fetchDonations = "https://drjoiserver-106ea7a60e39.herokuapp.com/donation-email";
            if (
              window.location.hostname === "localhost" ||
              window.location.hostname === "127.0.0.1"
            ) {
              fetchDonations = "http://localhost:5000/donation-email";
            } else {
              fetchDonations = "https://drjoiserver-106ea7a60e39.herokuapp.com/donation-email";
            }
            await fetch(fetchDonations, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email,  // User's email for sending the receipt
                amount, // Donation amount
              })
            });
          } catch (error) {
            console.error('Error capturing order:', error);
          }
        },
        onError: (err) => {
          console.error('PayPal error:', err);
        }
      }).render(paypalRef.current);
    };

    fetchConfig();

    return () => {
      const scriptElement = document.querySelector(`script[src*="paypal.com/sdk/js"]`);
      if (scriptElement) {
        document.head.removeChild(scriptElement);
      }
    };
  }, [amount, email]);

  return <div ref={paypalRef}></div>;
};

export default PayPalButton;




