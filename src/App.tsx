import React from "react";
import { Route, Routes } from "react-router-dom";
import { Work } from "./pages/Work";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Work />} />
    </Routes>
  );
};

export default App;
