import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import { Experience } from "./pages/experience/Experience";
import { Work } from "./pages/work/Work";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Work />} />
      <Route path="/about" element={<About />} />
      <Route path="/experience" element={<Experience />} />
    </Routes>
  );
};

export default App;
