import React from "react";

import Hero from "./Hero";
import Card from "./Card";
import Carosel from "./Carosel";
import ContactSection from "./ContactSection";
import FeedbackSection from "./FeedBackSection";
import Meet from "./Meet";
import Health from "./Health";

const Home = () => {
  return (
    <div>
      <Hero />
      <Card />
      <Carosel />
      <Meet/>
      <Health/>
      <FeedbackSection />
      <ContactSection />
    </div>
  );
};

export default Home;
