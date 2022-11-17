import React from "react";
import Community from "../Partials/Community";
import Features from "../Partials/Features";
import Footer from "../Partials/Footer";
import Hero from "../Partials/Hero";
// import Tools from "../Partials/Tools";
import people from "../../assets/PNGs/group-people.png";
import LiveLearning from "../Partials/LiveLearning";
const Home = () => {
  return (
    <div>
      <Hero />
      <LiveLearning />
      <Features />
      <Community />
      <Footer />
    </div>
  );
};

export default Home;
