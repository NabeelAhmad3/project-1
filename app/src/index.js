import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Nav from './comps/Nav';
import Hero from './comps/Hero';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <App />
    <Nav/>
    <Hero/>
  </React.StrictMode>


);
