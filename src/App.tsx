import { Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import { Experience } from "./pages/experience/Experience";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/vision" element={<About />} />
      <Route path="/experience" element={<Experience />} />
    </Routes>
  );
};

export default App;
