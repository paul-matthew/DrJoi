import React, { useState, useEffect, useCallback } from 'react';
import PayPalButton from './PayPalButton.js';

const DonationModal = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleDonateClick = (method) => {
    setPaymentMethod(method);
  };

  // Memoize handleOutsideClick to prevent it from being recreated on every render
  const handleOutsideClick = useCallback((event) => {
    if (event.target.id === 'modal-overlay') {
      onClose();
    }
  }, [onClose]);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !paymentMethod) {
      handleDonateClick('paypal');
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    } else {
      document.removeEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, handleOutsideClick]);

  return (
    <div
      id="modal-overlay"
      style={{
        display: isOpen ? 'block' : 'none',
        position: 'fixed',
        top: -140,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 4,
      }}
    >
    <div
    style={{
        background: `url('./hands.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white overlay
        padding: '20px',
        margin: '100px auto',
        width: '60vw',
        borderRadius: '10px',
        border: 'solid black',
        position: 'relative',
    }}
    >
    <button
        onClick={onClose}
        style={{
        position: 'absolute',
        color: 'white',
        top: '10px',
        right: '10px',
        backgroundColor: 'transparent',
        border: 'none',
        fontSize: '20px',
        cursor: 'pointer'
        }}
    >
        X
    </button>
    <h2 style={{color:'white'}}>Donate</h2>
    <p style={{color:'white'}}>All donations are used to further promote mental health and wellness through Exotic Relief by Dr. Joi. Refer to Term of Use for more information.</p>
    <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter amount"
        style={{ width: '40%', maxHeight:'40px',margin: '10px',padding:'5px', border:'solid 1px black' }}
    />
    {paymentMethod ? (
        paymentMethod === 'paypal' ? (
        <PayPalButton amount={amount} />
        ) : (
        // Include debit/credit card payment integration here
        <div>Card Payment Integration</div>
        )
    ) : (
        <>
        <button
            onClick={() => handleDonateClick('paypal')}
            style={{ maxWidth: '200px', margin: '10px', border:'solid 1px black' }}
        >
            Enter
        </button>
        </>
    )}
    </div>

    </div>
  );
};

export default DonationModal;

