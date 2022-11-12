import React from "react";
import { Footer } from "../components/Footer";
import { About } from "./About";
import { Hero } from "./Hero";
import { Work } from "./Work";

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
