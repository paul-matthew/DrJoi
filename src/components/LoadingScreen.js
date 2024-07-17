import React from 'react';
import '../App.css';


const LoadingScreen = ({ hidden }) => {
    return (
      <div className={`loading-screen ${hidden ? 'hidden' : ''}`}>
        <div className="pulsing-heart"></div>
      </div>
    );
  };

export default LoadingScreen;
