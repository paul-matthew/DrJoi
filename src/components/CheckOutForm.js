// CheckoutForm.js
import React, { useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            return;
        }

        setLoading(true);

        // Create a payment method
        const { paymentMethod, error: paymentMethodError } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        if (paymentMethodError) {
            setError(paymentMethodError.message);
            setLoading(false);
            return;
        }

        // Send payment method ID to your server
        const response = await fetch('/create-payment-intent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                payment_method_id: paymentMethod.id,
            }),
        });

        const paymentIntentResponse = await response.json();

        if (paymentIntentResponse.error) {
            setError(paymentIntentResponse.error);
            setLoading(false);
            return;
        }

        const { clientSecret } = paymentIntentResponse;

        // Confirm the payment
        const { error: confirmError } = await stripe.confirmCardPayment(clientSecret);

        if (confirmError) {
            setError(confirmError.message);
        } else {
            alert('Payment successful!');
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe || loading}>
                {loading ? 'Processing…' : 'Pay'}
            </button>
            {error && <div>{error}</div>}
        </form>
    );
}

export default CheckoutForm;
