import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Aps } from "./pages/projects/Aps";
import { Driven } from "./pages/projects/Driven";
import { Experiments } from "./pages/projects/Experiments";
import { Everyday } from "./pages/projects/Everyday";
import { Workshop } from "./pages/projects/Workshop";
import { Rituals } from "./pages/projects/Rituals";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/MakingWorkshop" element={<Workshop />} />
      <Route path="/APSGroup" element={<Aps />} />
      <Route path="/Experiments" element={<Experiments />} />
      <Route path="/DataDrivenDesign" element={<Driven />} />
      <Route path="/FutureEveryday" element={<Everyday />} />
      <Route path="/ComposingEverydayRituals" element={<Rituals />} />
    </Routes>
  );
};

export default App;
