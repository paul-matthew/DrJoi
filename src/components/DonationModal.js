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
          background: 'white',
          padding: '20px',
          margin: '100px auto',
          width: '300px',
          borderRadius: '10px',
          border: 'solid black',
          position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          style={{
            fontSize: '12px',
            fontWeight:'bold',
            position: 'absolute',
            top: '10px',
            right: '10px',
            backgroundColor: 'black',
            color: 'white',
          }}
        >
          X
        </button>
        <h2>Donate</h2>
        <p>All donations are used to further promote mental health and wellness through Exotic Relief by Dr. Joi.</p>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          style={{ width: '100%', marginBottom: '10px' }}
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
              style={{ width: '100%', marginBottom: '10px' }}
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

