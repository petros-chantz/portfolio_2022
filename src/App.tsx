import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import { ComingSoon } from "./pages/ComingSoon";
import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/comingSoon" element={<ComingSoon />} />
    </Routes>
  );
};

export default App;
