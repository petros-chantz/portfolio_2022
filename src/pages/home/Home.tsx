import React from "react";

import { Navbar } from "../../components/navbar/Navbar";
import { Hero } from "./Hero";
import { Projects } from "./Projects";

export const Home = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col h-screen">
        <Navbar />
        <Hero />
      </div>
      <Projects />
    </React.Fragment>
  );
};
