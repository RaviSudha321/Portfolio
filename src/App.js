import './App.css';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';
import Homepage from './Components/Homepage/Homepage.js';
import About from './Components/About/About.js';
import Contact from './Components/Contact/Contact.js';
import Skills from './Components/Skills/Skills.js';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Header />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        <Footer />
    </div>
  );
}

export default App;
