import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Features from './components/Features';
import Offers from './components/Offers';
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Features/>
      <Offers/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
