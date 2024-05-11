import React from 'react';
import './App.css';
import './style.css';
import FadeInSection from './components/FadeIn.js';

function Cart() {
  return (
    
    <section style={{minHeight:"100vh"}}>
        <div id='NavlogoMobile'><img src='./logo-green3.png' alt='logo mobile'style={{height:'7vh',marginTop:'0vh', position:'fixed', left:10, top:10}}onClick={() => window.location.href = './'}/></div>
        <div className='Banner'><img src='./bannerflower.png' alt='banner'style={{zIndex:2,width:'100vw',maxHeight:'200px',marginTop:'3vh', left:0, top:0,objectFit:'cover'}}/></div>
        <div className="SectionTitle" style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '3vh', display: 'flex' }}>
            <div className="MySkill" style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 56.67, display: 'inline-flex', padding: "0px 3vw" }}>
                <div className="Content" style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex' }}>
                    <div className="MyExpertise" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(40px, 4vw, 61px)', fontFamily: 'PlayfairDisplay', fontWeight: '700', wordWrap: 'break-word' }}>Cart</div>
                </div>
            </div>
        </div>        
            <FadeInSection>
            <div className="container-xl">
                {/* <div className="row justify-content-center"data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                </div> */}
                <div id="cart-container" className="row justify-content-center" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000"></div>      
            </div>
      </FadeInSection>
    </section>
  );
}

export default Cart;