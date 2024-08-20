import React, { useEffect, useState } from 'react';
import '../App.css';


const LoadingScreen = ({ hidden }) => {
  const [showHeart, setShowHeart] = useState(false);

  useEffect(() => {
    // Show the pulsing heart 2 seconds after the component mounts
    const heartTimer = setTimeout(() => setShowHeart(true), 2000);
    
    // Hide the loading screen 6 seconds after the component mounts
    const hideTimer = setTimeout(() => {
      document.querySelector('.loading-screen').classList.add('fade-out');
    }, 5000); // Start fade-out after 5 seconds
    
    // Clean up timers on unmount
    return () => {
      clearTimeout(heartTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className={`loading-screen ${hidden ? 'hidden' : ''}`}>
      {showHeart && <div className="pulsing-heart"></div>}
      <div>
        <video autoPlay muted loop className="heart-video portrait">
          <source src="../videos/intro-mobile.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video autoPlay muted loop className="heart-video landscape">
          <source src="../videos/intro.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default LoadingScreen;
