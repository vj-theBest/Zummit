import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Therapists from "./components/Therapists";
import Resources from "./components/Resources";
import FAQ from "./components/FAQ";
import IndividualTherapy from "./components/IndividualThearapy";
import GroupTherapy from "./components/GroupTherapy";
import SupportTherapy from "./components/SupportTherapy";
import "./App.css";
import ContactSection from "./components/ContactSection";
import GroupTherapyDetail from "./components/GroupTherapyDetail";
import RegisterLogin from "./components/RegisterLogin";
import BookingPage from "./components/BookingPage";
import ForgotPassword from "./components/ForgotPassword";
import TherapistProfile from "./components/TherapistProfile";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services">
          <Route index element={<Services />} />
          <Route path="individual-therapy" element={<IndividualTherapy />} />
          <Route path="group-therapy">
            <Route path=":id" element={<GroupTherapyDetail />} />
            <Route index element={<GroupTherapy />} />
          </Route>
          <Route path="support-group" element={<SupportTherapy />} />
        </Route>
        <Route path="/therapists">
          <Route index element={<Therapists />}/>
          <Route path="profile" >
            <Route path=":id" element={<TherapistProfile />}/>
          </Route>
          <Route path="book-slot">
            <Route path=":id" element={<BookingPage />}/>
          </Route>
        </Route>
        <Route path="/resources" element={<Resources />} />
        <Route path="/FAQs" element={<FAQ />} />
        <Route path="/login" element={<RegisterLogin/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
      </Routes>
      <ContactSection />
      <Footer />
    </Router>
  );
}

export default App;
