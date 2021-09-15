import React from 'react';
import './App.css';

import About from './About/About';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Landing from './Landing/Landing';
import Portfolio from './Portfolio/Portfolio';
import Service from './Service/Service';
import Team from './Team/Team';



function App() {
  return (
    <div>
    <Header />
    <Landing />
    <Service />
    <Portfolio />
    <About />
    <Team />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;


