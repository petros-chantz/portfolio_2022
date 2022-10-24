import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProjectPage } from "./pages/work/ProjectPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:path" element={<ProjectPage />} />
    </Routes>
  );
};

export default App;
