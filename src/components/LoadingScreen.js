import React, { useEffect } from 'react';
import '../App.css';


const LoadingScreen = ({ hidden }) => {
  // const [showHeart, setShowHeart] = useState(false);

  useEffect(() => {
    const videoElements = document.querySelectorAll('video');
  
    videoElements.forEach((video) => {
      video.muted = true; // Ensure it's muted for autoplay
  
      // Hide the play button overlay by setting opacity to 0 at first
      video.style.opacity = '0';
  
      video.play().catch((error) => console.error('Autoplay failed:', error));
  
      // Once video is loaded, fade it in
      video.addEventListener('loadeddata', () => {
        video.style.opacity = '1';
      });
    });
  
    // Show the pulsing heart 2 seconds after the component mounts
    // const heartTimer = setTimeout(() => setShowHeart(true), 2000);
    
    // Hide the loading screen 6 seconds after the component mounts
    const hideTimer = setTimeout(() => {
      document.querySelector('.loading-screen').classList.add('fade-out');
    }, 5000); // Start fade-out after 5 seconds
    
    // Clean up timers and event listeners on unmount
    return () => {
      // clearTimeout(heartTimer);
      clearTimeout(hideTimer);
      videoElements.forEach((video) => {
        video.removeEventListener('loadeddata', () => {
          video.style.opacity = '1';
        });
      });
    };
  }, []);
  

  return (
    <div className={`loading-screen ${hidden ? 'hidden' : ''}`}>
      {/* {showHeart && <div className="pulsing-heart"></div>} */}
      <div>
      <video autoPlay muted loop playsInline preload="auto" className="heart-video portrait">
        <source src="/videos/intro-mobile.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video autoPlay muted loop playsInline preload="auto" className="heart-video landscape">
        <source src="/videos/intro.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      </div>
    </div>
  );
};

export default LoadingScreen;
