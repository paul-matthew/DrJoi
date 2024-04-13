// import React, { useState } from 'react';
import './App.css';
//UNCOMMENT WHEN READY TO BUILD BLOG PAGE
// import App from './App'
// import Services from './services'
// import Contact from './contact'
import FadeInSection from './components/FadeIn';


import React from 'react';

const Blog = () => {
    return (
        <div className="BlogContainer" style={{ width: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px',background: '#f0ece7' }}>
            <div className='Bloglogo'><img src='./logo-new.png' alt='logo mobile'style={{zIndex:2,position:'absolute',height:'5vh',marginTop:'3vh', left:0, top:0, marginLeft:'2.5vw'}}onClick={() => window.location.href = './'}/></div>
            <div className="PostsWrapper" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px',marginTop: '80px' }}>
                <FadeInSection>
                <div className="PostWrapper" style={{ border: '2px solid #000', padding: '20px', maxWidth: '600px', width: '100%', textAlign: 'center', marginBottom: '20px',background:'white' }}>
                    {/* Post 1 */}
                    <h1 style={{ marginTop: 0 }}>Keys to Strategic Planning</h1>
                    <div className="ContentWrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <img src='./project1.jpg' alt='blog post' style={{ maxWidth: '100%', maxHeight: '50vh', marginBottom: '20px' }} />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat, sapien sit amet finibus pharetra, mauris nulla consequat dolor, a pulvinar libero orci sed libero. Vestibulum nec justo id ipsum tincidunt placerat. Nullam congue nec neque at lacinia. Vestibulum consequat nibh eu nibh euismod ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    </div>
                </div>
                </FadeInSection>
                <FadeInSection>
                <div className="PostWrapper" style={{ border: '2px solid #000', padding: '20px', maxWidth: '600px', width: '100%', textAlign: 'center', marginBottom: '20px',background:'white' }}>
                    {/* Post 2 */}
                    <h1 style={{ marginTop: 0 }}>Importance of Time Management</h1>
                    <div className="ContentWrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <img src='./project2.jpg' alt='blog post' style={{ maxWidth: '100%', maxHeight: '50vh', marginBottom: '20px' }} />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat, sapien sit amet finibus pharetra, mauris nulla consequat dolor, a pulvinar libero orci sed libero. Vestibulum nec justo id ipsum tincidunt placerat. Nullam congue nec neque at lacinia. Vestibulum consequat nibh eu nibh euismod ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    </div>
                </div>
                </FadeInSection>
                <FadeInSection>
                <div className="PostWrapper" style={{ border: '2px solid #000', padding: '20px', maxWidth: '600px', width: '100%', textAlign: 'center', marginBottom: '20px',background:'white' }}>
                    {/* Post 3 */}
                    <h1 style={{ marginTop: 0 }}>Effective Communication Strategies</h1>
                    <div className="ContentWrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <img src='./project3.jpg' alt='blog post' style={{ maxWidth: '100%', maxHeight: '50vh', marginBottom: '20px' }} />
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat, sapien sit amet finibus pharetra, mauris nulla consequat dolor, a pulvinar libero orci sed libero. Vestibulum nec justo id ipsum tincidunt placerat. Nullam congue nec neque at lacinia. Vestibulum consequat nibh eu nibh euismod ultricies. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
                    </div>
                </div>
                </FadeInSection>
                <FadeInSection>
                    <div className="PostWrapper" style={{ border: '2px solid #000', padding: '20px', maxWidth: '600px', width: '100%', textAlign: 'center', marginBottom: '20px', background:'white' }}>
                        {/* Post 4 */}
                        <h1 style={{ marginTop: 0 }}>The Power of Collaboration</h1>
                        <div className="ContentWrapper" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                            <img src='./office.jpg' alt='blog post' style={{ maxWidth: '100%', maxHeight: '50vh', marginBottom: '20px' }} />
                            <p>Discover how effective collaboration can drive innovation and success. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed consequat, sapien sit amet finibus pharetra, mauris nulla consequat dolor, a pulvinar libero orci sed libero. Vestibulum nec justo id ipsum tincidunt placerat. Nullam congue nec neque at lacinia. Vestibulum consequat nibh eu nibh euismod ultricies.</p>
                        </div>
                    </div>
                </FadeInSection>

            </div>
        </div>
    );
};

export default Blog;

