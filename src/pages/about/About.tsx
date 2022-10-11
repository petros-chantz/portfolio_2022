import { Footer } from "../../components/footer/Footer";
import { Navbar } from "../../components/navbar/Navbar";
import { Page } from "../Page";
import { AboutContent } from "./AboutContent";

const About = () => {
  return <Page contentSlot={<AboutContent />} />;
};

export default About;
