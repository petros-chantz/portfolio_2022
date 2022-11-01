import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { MakingWorkshop } from "./pages/projects/MakingWorkshop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/MakingWorkshop" element={<MakingWorkshop />} />
    </Routes>
  );
};

export default App;
