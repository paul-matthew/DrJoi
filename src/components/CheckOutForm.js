import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

const handleSubmit = async (event, stripe, elements, clientSecret, setLoading, setError, handlePaymentIntentCreation) => {
    event.preventDefault();
    setLoading(true);

    // Ensure the payment intent is created if the clientSecret is not set
    if (!clientSecret) {
      await handlePaymentIntentCreation();
    }

    if (!stripe || !elements || !clientSecret) {
      setLoading(false);
      return;
    }

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      setError(result.error.message);
    } else if (result.paymentIntent && result.paymentIntent.status === "succeeded") {
      alert("Payment succeeded!");
      // You can redirect or show a success message here
    }

    setLoading(false);
  };

const CheckoutForm = ({ clientSecret, handlePaymentIntentCreation }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);



  return (
    <form
      onSubmit={(event) =>
        handleSubmit(event, stripe, elements, clientSecret, setLoading, setError, handlePaymentIntentCreation)
      }
      className="checkout-form"
    >      
    <CardElement className="card-element"/>
      {error && <div>{error}</div>}
      <button type="submit" disabled={loading || !stripe} className="pay-button">
        {loading ? "Processing..." : "Pay"}
      </button>
    </form>
  );
};

export default CheckoutForm;



