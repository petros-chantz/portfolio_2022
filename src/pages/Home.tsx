import React from "react";
import { Footer } from "../components/footer/Footer";
import { About } from "./about/About";
import { Landing } from "./landing/Landing";
import { Projects } from "./work/Projects";
import { Work } from "./work/Work";

export const Home = () => {
  return (
    <React.Fragment>
      <Landing />
      <About />
      <Work />
      <Footer />
    </React.Fragment>
  );
};
