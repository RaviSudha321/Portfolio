import './App.css';
import Header from './Componenets/Header/Header.js';
import Footer from './Componenets/Footer/Footer.js';
import Homepage from './Componenets/Homepage/Homepage.js';
import About from './Componenets/About/About.js';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Header />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            </Routes>
        <Footer />
    </div>
  );
}

export default App;
