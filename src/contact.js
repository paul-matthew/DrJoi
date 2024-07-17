import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import FadeInSection from './components/FadeIn.js';

function Contact() {
    const [desktopState] = useState('Contact1');
    const [clientWidth, setClientWidth] = useState(window.innerWidth);
    const [modalOpen, setModalOpen] = useState(false);
    const [subscribeEmail, setSubscribeEmail] = useState('');
    const [subscribeResponse, setSubscribeResponse] = useState('');
    const modalRef = useRef(null);
    // const [contactResponse, setContactResponse] = useState('');

    const smallScreen = clientWidth <= 640;

    useEffect(() => {
        const handleResize = () => {
            setClientWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setModalOpen(false);
            }
        }

        if (modalOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [modalOpen]);

    let fetchURL = "https://drjoiserver-106ea7a60e39.herokuapp.com/subscribe";
    if (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
    ) {
      fetchURL = "http://localhost:5000/subscribe";
    }

    const handleSubscribe = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(fetchURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: subscribeEmail }),
            });

            if (!response.ok) {
                throw new Error('Failed to subscribe. Please try again.');
            }

            const data = await response.json();
            setSubscribeResponse(data.message);
        } catch (error) {
            console.error('Error:', error);
            setSubscribeResponse('An error occurred. Please try again.');
        }
    };

    let contactFetchURL = "https://drjoiserver-106ea7a60e39.herokuapp.com/contact";
    if (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
    ) {
      contactFetchURL = "http://localhost:5000/contact";
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const formData = {
          name: event.target.name.value,
          email: event.target.email.value,
          message: event.target.message.value,
        };
      
        try {
          const response = await fetch(contactFetchURL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
      
          if (!response.ok) {
            throw new Error('Failed to send message. Please try again.');
          }
      
          const data = await response.json(); // Parse JSON response
          console.log('Success:', data); // Log success message
          alert('Email sent successfully!');
          window.location.reload();           
          // Handle success message display or any other logic
        } catch (error) {
          console.error('Error:', error);
          alert('An error occurred. Please try again.');        
        }
      };
      
            

    return (
        <div className="ContactX" style={{ width: '100vw', right: '0', }}>
            <div id='NavlogoMobile'>
                <img src='./logo-green4.png' alt='logo mobile' style={{ height: '7vh', marginTop: '0vh' }} onClick={() => window.location.href = './'} />
            </div>
            {desktopState === 'Contact1' && (
                <FadeInSection>
                    <div className="ContactX" style={{ width: '100%', top: "2vh", display: 'flex', justifyContent: 'center', alignItems: 'center', position: "relative" }}>
                    <form className="ContactForm" style={{ width: '70%', minHeight: '30vh', border: 'solid gray', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)' }} onSubmit={handleSubmit}>
                    <p className='contact-title' style={{ margin: "10px auto", textAlign: "center", color: 'black', fontSize: 'clamp(26px, 3vw, 30px)', fontFamily: 'PlaydairDisplay', fontWeight: '700' }}>Contact Me</p>
                    <div className="FormGroup">
                        <input type="text" id="name" name="name" placeholder={smallScreen ? "Name" : "Enter your name"} required />
                    </div>
                    <div className="FormGroup">
                        <input type="email" id="email" name="email" placeholder={smallScreen ? "Email" : "Enter your email"} required />
                    </div>
                    <div className="FormGroup">
                        <textarea id="message" name="message" rows="4" placeholder={smallScreen ? "Message" : "Enter your message"} required style={{ minHeight: '10vh' }}></textarea>
                    </div>
                    <div className="FormGroup last-form-group" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <button className='Button' type="submit"><div className='Label' style={{ fontFamily: 'PlayfairDisplay' }}>Submit</div></button>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
                        <a href="https://www.instagram.com/theebonijoi/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-instagram" style={{ fontSize: '20px', color: 'black', marginRight: '10px' }}></i>
                        </a>
                        <a href="https://www.tiktok.com/@TheEboniJoi" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-tiktok" style={{ fontSize: '20px', color: 'black' }}></i>
                        </a>
                        </div>
                    </div>
                    </form>
                    {/* {contactResponse && <p style={{display:'absolute',zIndex:'2'}}>{contactResponse}</p>} */}

                    </div>
                </FadeInSection>
            )}
            <button
                className="subscribe-button"
                style={{
                    position: 'fixed',
                    right: '3%',
                    top: '12%',
                    zIndex: 1,
                    backgroundColor: 'black',
                    color: 'white',
                    padding: '10px 10px',
                    marginRight: '20px',
                    cursor: 'pointer',
                    border: 'solid 1px black',
                    borderRadius: '15px',
                }}
                onClick={() => setModalOpen(true)}
            >
                Subscribe
            </button>
            {modalOpen && (
                <div className="modal" style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 10
                }}>
                <div className="modal-content modal-newsletter" ref={modalRef} style={{
                    background: `url('./DrJoiTwists.jpg')`,
                    backgroundSize: 'cover', // Ensure the background image covers the entire area
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '20px',
                    borderRadius: '5px',
                    width: '80%',
                    height: '80%',
                    maxWidth: '40vw',
                    maxHeight: '70vh',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    alignItems: 'center'
                }}>
                    <div>
                    <h2 style={{ maxWidth:'300px',textAlign: 'center',background: `rgba(255, 255, 255, 0.8)`,border:'solid 1px black',boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",marginTop: '150px',fontWeight:'bold',fontSize: "clamp(20px, 2vw, 1.5vw)",paddingLeft:'8px',paddingRight:'8px' }}>Subscribe to my Newsletter</h2>
                    <p style={{ maxWidth:'300px',textAlign: 'center',background: `rgba(255, 255, 255, 0.8)`,border:'solid 1px black',boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",paddingLeft:'8px',paddingRight:'8px',fontSize: "clamp(14px, 2vw, 1.5vw)" }}>Stay up to date with my content focusing on mental health and wellness, my personal products, offers and everything else Dr. Joi.</p>
                    <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <input
                            type="email"
                            id="newsletter-email"
                            placeholder="Enter your email"
                            required
                            style={{ maxWidth:'300px',width: '100%', padding: '10px', marginBottom: '10px',border:'solid 1px black',boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)" }}
                            value={subscribeEmail}
                            onChange={(e) => setSubscribeEmail(e.target.value)}
                        />
                        <button className='Button' type="submit" style={{ cursor: 'pointer' }}>Subscribe</button>
                    </form>
                    <div id="response">{subscribeResponse}</div>
                    <button className='news-close' onClick={() => setModalOpen(false)} style={{
                        position: 'absolute',
                        color: 'black',
                        top: '10px',
                        right: '10px',
                        backgroundColor: 'transparent',
                        border: 'none',
                        fontSize: '20px',
                        cursor: 'pointer'
                    }}>
                        &times;
                    </button>
                    </div>
                </div>
                </div>
            )}
        </div>
    );
}

export default Contact;
