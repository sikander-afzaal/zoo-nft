import React from "react";
import "./style.css";
import Hero from "./Hero";
import Roadmap from "./Roadmap";
import Faq from "./Faq";
import Team from "./Team";

const Home = () => {
  return (
    <>
      <Hero />
      <Team />
      <Roadmap />
      <Faq />
    </>
  );
};

export default Home;
