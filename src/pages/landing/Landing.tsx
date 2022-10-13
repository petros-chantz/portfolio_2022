import { Navbar } from "../../components/navbar/Navbar";
import { Hero } from "../Hero";

export const Landing = () => {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <Hero />
    </div>
  );
};
