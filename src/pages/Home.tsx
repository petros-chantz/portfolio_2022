import React from "react";
import { Footer } from "../components/footer/Footer";
import { About } from "./about/About";
import { Hero } from "./Hero";
import { Work } from "./work/Work";

export const Home = () => {
  return (
    <React.Fragment>
      <Hero />
      <About />
      <Work />
      <Footer />
    </React.Fragment>
  );
};
