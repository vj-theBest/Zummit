import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Therapists from './components/Therapists';
import Resources from './components/Resources';
import FAQ from './components/FAQ';

function App() {
 return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/therapists" element={<Therapists />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/FAQs" element={<FAQ />} />
        
      </Routes>
      <Footer />
    </Router>
 );
}

export default App;