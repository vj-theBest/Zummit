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
import IndividualThearapy from './components/IndividualThearapy';
import GroupThreapy from './components/GroupThreapy';
import SupportThreapy from './components/SupportThreapy';
import GroupTherapyDetail from './components/GroupTherapyDetail';

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
        <Route path="/individual-therapy" element={<IndividualThearapy />} />
        <Route path="/group-therapy" element={<GroupThreapy/>} />
        <Route path="/support-group" element={<SupportThreapy />} />
        <Route path="/group-therapy/:id" element={<GroupTherapyDetail />} />
      </Routes>
      <Footer />
    </Router>
 );
}

export default App;