import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Project } from "./pages/projects/Project";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:path" element={<Project />} />
    </Routes>
  );
};

export default App;
