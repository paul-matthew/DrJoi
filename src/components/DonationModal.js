import React, { useState, useEffect, useCallback } from 'react';
import PayPalButton from './PayPalButton.js';

const DonationModal = ({ isOpen, onClose }) => {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [email, setEmail] = useState('');

  const handleDonateClick = (method) => {
    setPaymentMethod(method);
  };

  const handleOptionChange = (value) => {
    setSelectedAmount(value);
    setAmount(value === 'Other' ? customAmount : value);
  };

  const handleCustomAmountChange = (event) => {
    const value = event.target.value;
    
    // Regular expression to allow only numbers with up to two decimal places
    const moneyFormat = /^\d*\.?\d{0,2}$/;
  
    if (moneyFormat.test(value)) {
      setCustomAmount(value);
      setAmount(value);
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
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
        textAlign: 'center',
        overflowY: 'auto', // Allow scrolling for overflow content
      }}
    >
      <div
        style={{
          background: `url('./hands2.jpg')`,
          bottom:'80px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '20px',
          margin: '100px auto',
          width: '80vw',
          maxWidth: '600px', // Max width for the modal
          height: '90vh',
          maxHeight: '90vh', // Max height for the modal
          borderRadius: '10px',
          border: 'solid black',
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          overflowY: 'auto', // Enable scrolling within the modal
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            color: 'black',
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
        <h2 style={{ color: 'black', fontSize: 'clamp(2.5rem, 2.5vw, 2.5rem)' }}>Donate</h2>

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

        {selectedAmount && (
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            style={{
              maxWidth: '200px',
              height: '45px',
              padding: '5px',
              border: 'solid 1px black',
              textAlign: 'center',
              fontSize: 'clamp(1rem, 2vw, 1.5rem)',
              marginBottom: '10px'
            }}
          />
        )}

        {paymentMethod ? (
          paymentMethod === 'paypal' ? (
            <div style={{ width: '100%' }}>
              <PayPalButton amount={amount} email={email} />
            </div>
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

        <p style={{ color: 'black', fontSize: 'clamp(0.7rem, 2vw, 1.0rem)', textAlign: 'center' }}>
          Refer to Terms of Use for more information on Donation Policy.
        </p>
      </div>
    </div>
  );
};

export default DonationModal;
