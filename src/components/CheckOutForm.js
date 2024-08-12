import React, { useState, useEffect } from 'react';
import { CardElement, useElements, useStripe, PaymentRequestButtonElement } from '@stripe/react-stripe-js';

function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [paymentRequest, setPaymentRequest] = useState(null);
    const [canMakePayment, setCanMakePayment] = useState(false);

    useEffect(() => {
        if (stripe) {
            const pr = stripe.paymentRequest({
                country: 'US',
                currency: 'usd',
                total: {
                    label: 'Total',
                    amount: 2000, // Amount in cents
                },
                requestPayerName: true,
                requestPayerEmail: true,
                // paymentMethodTypes: ['card'], // Only include 'card' for Google Pay
            });

            pr.canMakePayment().then((result) => {
                if (result) {
                    setCanMakePayment(true);
                }
            });

            setPaymentRequest(pr);
        }
    }, [stripe]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            console.log("Stripe.js has not yet loaded.");
            return;
        }

        setLoading(true);

        const cardElement = elements.getElement(CardElement);

        try {
            const { paymentMethod, error: paymentMethodError } = await stripe.createPaymentMethod({
                type: 'card',
                card: cardElement,
            });

            if (paymentMethodError) {
                console.error("Error creating payment method:", paymentMethodError);
                setError(paymentMethodError.message);
                setLoading(false);
                return;
            }

            let fetchURL = "/stripe/create-payment-intent";

            if (
              window.location.hostname === "localhost" ||
              window.location.hostname === "127.0.0.1"
            ) {
              fetchURL = "http://localhost:5000/stripe/create-payment-intent";
            } else {
              fetchURL = "https://drjoiserver-106ea7a60e39.herokuapp.com/stripe/create-payment-intent";
            }
            
            const response = await fetch(fetchURL, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                payment_method_id: paymentMethod.id, 
                amount: 2000,
              }),
            });
            
            const paymentIntentResponse = await response.json();

            if (paymentIntentResponse.error) {
                console.error("Error from payment intent response:", paymentIntentResponse.error);
                setError(paymentIntentResponse.error);
                setLoading(false);
                return;
            }

            const { error: confirmError } = await stripe.confirmCardPayment(paymentIntentResponse.clientSecret, {
                payment_method: paymentMethod.id,
            });
            
            if (confirmError) {
                console.error("Error confirming card payment:", confirmError);
                setError(confirmError.message);
            } else {
                alert('Payment successful!');
            }
        } catch (error) {
            console.error("Unexpected error:", error);
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="checkout-form">
            {canMakePayment && paymentRequest && (
                <div>
                    <PaymentRequestButtonElement
                        options={{ paymentRequest }}
                    />
                </div>
            )}
            <CardElement className="card-element" />
            <button type="submit" disabled={!stripe || loading} className="pay-button">
                {loading ? 'Processing…' : 'Pay'}
            </button>
            {error && <div className="error-message">{error}</div>}
        </form>
    );
}

export default CheckoutForm;



