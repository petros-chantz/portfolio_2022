import React from "react";
import { Footer } from "../components/footer/Footer";
import { About } from "./about/About";
import { Landing } from "./landing/Landing";
import { Projects } from "./projects/Projects";

export const Home = () => {
  return (
    <React.Fragment>
      <Landing />
      <About />
      {/* <Projects /> */}
      <Footer />
    </React.Fragment>
  );
};
