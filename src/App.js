import React from 'react';
import './App.css';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import Homepage from './Components/Homepage/Homepage.js';
import About from './Components/About/About.js';
import Contact from './Components/Contact/Contact.js';
import Skills from './Components/Skills/Skills.js';
import Experience from './Components/Experience/Experience.js';
import Portfolio from './Components/Portfolio/Portfolio.js';
import Error from './Components/Error/Error.js';
import Testimonials from './Components/Testimonials/Testimonial.js';
import Faqs from './Components/Faqs/Faqs.js';

import { Routes, Route } from "react-router-dom";


function App() {

  return (
    <>
      <div className="App">
          <Header />
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/faqs" element={<Faqs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/*" element={<Error />} />
            </Routes>
          <Footer />
      </div>
    </>
  );
  
}

export default App;
