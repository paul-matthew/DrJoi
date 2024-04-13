/*This file serves as the main entry point of your React application.
It's responsible for rendering the root component of your application into the DOM.
Usually, it imports the necessary modules like React, ReactDOM, and your main component (App) and renders the App component into the DOM..*/

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

ReactDOM.render(<App />, document.getElementById('root'));
