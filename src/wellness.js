import './App.css';
import FadeInSection from './components/FadeIn';


import React from 'react';

const Wellness = () => {
    return (
        <div className="BlogContainer" style={{ width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center',padding: '20px',background: 'white' }}>
            <div id='NavlogoMobile'><img src='./logo2.png' alt='logo mobile'style={{height:'6vh',marginTop:'1vh', position:'fixed', left:10, top:10}}onClick={() => window.location.href = './'}/></div>
            <div className='Banner'><img src='./banner3.png' alt='banner'style={{zIndex:2,width:'100vw',maxHeight:'200px',marginTop:'3vh', objectFit:'cover'}}onClick={() => window.location.href = './'}/></div>
            <div className="PostsWrapper" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px',marginTop: '30px' }}>
                <FadeInSection>
                <div style={{ backgroundColor:'white' }}>
                                <div className="MySkill" style={{ height: "auto", flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 56.67, display: 'inline-flex', padding: "0px 3vw" }}>
                                    <div className="SectionTitle" style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: '1vh', display: 'flex' }}>
                                        <div className="Content" style={{ alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 32, display: 'flex' }}>
                                            <div className="MyExpertise" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(40px, 4vw, 61px)', fontFamily: 'PlayfairDisplay', fontWeight: '700', wordWrap: 'break-word' }}>Spiritual Wellness Hub</div>
                                        </div>
                                        <div className="MyExpertise" style={{ alignSelf: 'stretch', color: '#282938', fontSize: 'clamp(15px, 4vw, 25px)', fontFamily: 'PlayfairDisplay', fontWeight: '500', wordWrap: 'break-word' }}>“<i>This is the content that I personally use to nurture my spiritual well-being and enhance my daily journey towards inner peace and fulfillment. Dive in and explore these carefully curated resources designed to uplift your spirit and elevate your consciousness.</i>” - Dr. Joi</div>
                                    </div>
                                    <FadeInSection>
                                    <div className="Row" style={{ flexWrap: "wrap", justifyContent: "center",marginBottom:'160px' }}>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/pIwzVer7ZDQ?si=-N_UpIM6I3VpDMt_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{border:'solid black',boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)'}}></iframe>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/xdKglDO6Pd8?si=qOkoPeiJBjLplayD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{border:'solid black',boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)'}}></iframe>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/UX5zqQuLMOw?si=Ma220d-we4cEbOjQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{border:'solid black',boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)'}}></iframe>
                                        <iframe width="560" height="315" src="https://www.youtube.com/embed/3fi7DGQXgeU?si=o9qsEnW4DVzmZ9Zi" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style={{border:'solid black',boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)'}}></iframe>
                                    </div>
                                    </FadeInSection>
                                </div>
                            </div>
                </FadeInSection>


            </div>
        </div>
    );
};

export default Wellness;

