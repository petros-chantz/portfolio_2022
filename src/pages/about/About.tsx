import { Footer } from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import { Page } from "../Page";
import { AboutContent } from "./AboutContent";

const About = () => {
  return <Page contentSlot={<AboutContent />} />;
};

export default About;
