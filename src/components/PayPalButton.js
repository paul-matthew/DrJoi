// PayPalButton.js
import React, { useEffect, useRef } from 'react';

const PayPalButton = ({ amount }) => {
  const paypalRef = useRef();

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.paypal.com/sdk/js?client-id=AZiLd6zqQUwa01x2PvxtcQw9hQY4p99xS61WRn2yDHBZxWdCVS4aLQbCA1CcUGj9HuF9AC9QwQ9qxfNC";
    script.onload = () => {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: amount
              }
            }]
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(details => {
            alert('Donation successful!');
          });
        }
      }).render(paypalRef.current);
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [amount]);

  return <div ref={paypalRef}></div>;
};

export default PayPalButton;

