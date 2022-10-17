import { Route, Routes } from "react-router-dom";
import { Experience } from "./pages/experience/Experience";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experience" element={<Experience />} />
    </Routes>
  );
};

export default App;
