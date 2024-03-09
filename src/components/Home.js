import React from "react";

import Hero from "./Hero";
import Card from "./Card";
import Carosel from "./Carosel";
import ContactSection from "./ContactSection";
import FeedbackSection from "./FeedBackSection";

const Home = () => {
  return (
    <div>
      <Hero />

      <Card />
      <Carosel />
      <FeedbackSection />
      <ContactSection />
    </div>
  );
};

export default Home;
