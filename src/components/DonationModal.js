import React, { useState, useEffect, useCallback } from 'react';
import PayPalButton from './PayPalButton.js';

const DonationModal = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');

  const handleDonateClick = (method) => {
    setPaymentMethod(method);
  };

  const handleOptionChange = (value) => {
    setSelectedAmount(value);
    setAmount(value === 'Other' ? customAmount : value);
  };

  const handleCustomAmountChange = (event) => {
    const value = event.target.value;
    setCustomAmount(value);
    setAmount(value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !paymentMethod) {
      handleDonateClick('paypal');
    }
  };

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
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 999,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        textAlign: 'center', // Center the content horizontally
        overflowY: 'auto', // Allow scrolling for overflow content
      }}
    >
      <div
        style={{
          background: `url('./hands.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '20px',
          margin: '100px auto',
          width: '80vw',
          maxWidth: '600px', // Max width for the modal
          height: '80vh',
          maxHeight: '90vh', // Max height for the modal
          borderRadius: '10px',
          border: 'solid black',
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center', // Center the content vertically
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
        <h2 style={{ color: 'white', fontSize: 'clamp(2.5rem, 2.5vw, 2.5rem)' }}>Donate</h2>
        <p style={{ color: 'white', fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', textAlign: 'center' }}>
          All donations are used to further promote mental health and wellness through Exotic Relief by Dr. Joi. Refer to Terms of Use for more information.
        </p>
        
        <div style={{ marginBottom: '10px', textAlign: 'center', position: 'relative', width: '100%' }}>
          {['10', '20', '50', '100'].map((value) => (
            <button
              key={value}
              onClick={() => handleOptionChange(value)}
              style={{
                display: 'inline-block',
                color: 'white',
                fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                margin: '5px',
                padding: '10px',
                width: '80px',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',                
                backgroundColor: selectedAmount === value ? 'green' : '#36454F',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                textAlign: 'center'
              }}
            >
              ${value}
            </button>
          ))}
          <button
            onClick={() => handleOptionChange('Other')}
            style={{
              display: 'inline-block',
              color: 'white',
              fontSize: 'clamp(1rem, 2vw, 1.5rem)',
              margin: '5px',
              padding: '10px',
              width: '80px',
              boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',                
              backgroundColor: selectedAmount === 'Other' ? 'green' : '#36454F',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              textAlign: 'center'
            }}
          >
            Other
          </button>

          <div style={{ height: '60px', marginTop: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> {/* Reserve space for the custom amount input */}
            {selectedAmount === 'Other' && (
              <input
                type="number"
                value={customAmount}
                onChange={handleCustomAmountChange}
                onKeyPress={handleKeyPress}
                placeholder="Enter amount"
                style={{
                  maxWidth: '200px',
                  height: '45px',
                  padding: '5px',
                  border: 'solid 1px black',
                  textAlign: 'center',
                  fontSize: 'clamp(1rem, 2vw, 1.5rem)',
                }}
              />
            )}
          </div>
        </div>

        {paymentMethod ? (
          paymentMethod === 'paypal' ? (
            <PayPalButton amount={amount} />
          ) : (
            <div>Card Payment Integration</div>
          )
        ) : (
          <button
            onClick={() => handleDonateClick('paypal')}
            style={{
              maxWidth: '200px',
              margin: '10px',
              padding: '10px',
              border: 'solid 1px black',
              fontSize: 'clamp(1rem, 2vw, 1.5rem)',
              cursor: 'pointer',
            }}
          >
            Enter
          </button>
        )}
      </div>
    </div>
  );
};

export default DonationModal;
