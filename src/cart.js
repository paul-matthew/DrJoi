import React from 'react';
import './App.css';
import './style.css';
import FadeInSection from './components/FadeIn.js';

function Cart() {
  return (
    
    <section className="ftco-section" id="about-us-brief" style={{minHeight:"100vh"}}>
        <div id='NavlogoMobile'><img src='./logo-green3.png' alt='logo mobile'style={{height:'7vh',marginTop:'0vh', position:'fixed', left:10, top:10}}onClick={() => window.location.href = './'}/></div>
        <FadeInSection>ollllllllllll
            <div className="container-xl">
                <div className="row justify-content-center"data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                </div>
                <div id="cart-container" className="row justify-content-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"></div>      
            </div>
      </FadeInSection>
    </section>
  );
}

export default Cart;