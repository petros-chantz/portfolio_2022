import { Route, Routes } from "react-router-dom";
import { ComingSoon } from "./pages/ComingSoon";
import { Home } from "./pages/Home";
import { ProjectPage } from "./pages/ProjectPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:path" element={<ProjectPage />} />
      <Route path="/ComingSoon" element={<ComingSoon />} />
    </Routes>
  );
};

export default App;
