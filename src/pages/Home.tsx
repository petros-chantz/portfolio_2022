import React from "react";
import { Footer } from "../components/footer/Footer";

import { Navbar } from "../components/navbar/Navbar";
import { Hero } from "./Hero";
import { Projects } from "./work/Projects";

export const Home = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col h-screen">
        <Navbar />
        <Hero />
      </div>
      <Projects />
      <Footer />
    </React.Fragment>
  );
};
