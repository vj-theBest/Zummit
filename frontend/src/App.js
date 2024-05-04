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
import UserDashboard from "./components/UserDashboard";
import TherapistDetailsPage from "./components/TherapistDetailsPage";
import BookTherapistPage from "./components/BookTherapistPage";
import ShowBookingDetailsPage from "./components/ShowBookingDetailsPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WithHeaderAndFooter><Home /></WithHeaderAndFooter>} />
        <Route path="/about" element={<WithHeaderAndFooter><About /></WithHeaderAndFooter>} />
        <Route path="/services">
          <Route index element={<WithHeaderAndFooter><Services /></WithHeaderAndFooter>} />
          <Route path="individual-therapy" element={<WithHeaderAndFooter><IndividualTherapy /></WithHeaderAndFooter>} />
          <Route path="group-therapy">
            <Route path=":id" element={<WithHeaderAndFooter><GroupTherapyDetail /></WithHeaderAndFooter>} />
            <Route index element={<WithHeaderAndFooter><GroupTherapy /></WithHeaderAndFooter>} />
          </Route>
          <Route path="support-group" element={<WithHeaderAndFooter><SupportTherapy /></WithHeaderAndFooter>} />
        </Route>

        <Route path="/therapists">
          <Route index element={<WithHeaderAndFooter><Therapists /></WithHeaderAndFooter>}/>
          <Route path="profile" >
            <Route path=":id" element={<WithHeaderAndFooter><TherapistProfile /></WithHeaderAndFooter>}/>
          </Route>
          <Route path="booking">
            <Route path=":id" element={<WithHeaderAndFooter><BookingPage/></WithHeaderAndFooter>}/>
          </Route>
        </Route>
        <Route path="/resources" element={<WithHeaderAndFooter><Resources /></WithHeaderAndFooter>} />
        <Route path="/FAQs" element={<WithHeaderAndFooter><FAQ /></WithHeaderAndFooter>} />
        <Route path="/login" element={<WithHeaderAndFooter><RegisterLogin/></WithHeaderAndFooter>} />
        <Route path="/forgot-password" element={<WithHeaderAndFooter><ForgotPassword/></WithHeaderAndFooter>} />
        <Route path="/userdashboard" element={<UserDashboard/>} />
        <Route path="/BookingPage" element={<BookingPage/>} />
        <Route path="/TherapistDetailsPage" element={<TherapistDetailsPage/>} />
        <Route path="/BookTherapistPage" element={<BookTherapistPage/>} />
        <Route path="/ShowBookingDetailsPage" element={<ShowBookingDetailsPage/>} />


      </Routes>
     
    </Router>
  );
}

const WithHeaderAndFooter = ({ children }) => (
  <>
    <Navbar />
    {children}
    <ContactSection />
    <Footer />
  </>
);

export default App;
