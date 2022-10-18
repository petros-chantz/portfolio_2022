import { Route, Routes } from "react-router-dom";
import { Experience } from "./pages/experience/Experience";
import { Home } from "./pages/Home";
import { Project } from "./pages/work/Project";
import { Work } from "./pages/work/Work";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
    </Routes>
  );
};

export default App;
