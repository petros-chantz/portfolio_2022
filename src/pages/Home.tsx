import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export const Home = () => {
  return (
    <section className="flex flex-col h-screen py-10 pl-20 pr-10">
      <Navbar />
      <section className="flex flex-col justify-center w-1/2 gap-5 h-5/6">
        <h2 className="self-start">Petros Chantzopoulos</h2>
        <p>
          <span className="block">
            I'm an interaction designer creating rich meaninful
          </span>
          <span className="block">
            experiences by connecting{" "}
            <span className="font-medium">design</span> &{" "}
            <span className="font-medium">technology.</span>{" "}
          </span>
        </p>
        <p>
          <span className="block">
            Currently, I work for <span className="font-medium">APS Group</span>{" "}
            where I'm designing
          </span>
          <span className="block">and researching new SaaS experiences.</span>
        </p>
        <Link
          to={"/about"}
          className="flex flex-row self-start justify-start gap-2 pt-10 group"
        >
          <ArrowRightIcon className="self-center w-10 h-10 text-white group-hover:text-[#EE793B]" />
          <h3 className="self-center group-hover:underline  group-hover:text-[#EE793B]">
            About me / Contact
          </h3>
        </Link>
      </section>
    </section>
  );
};

export default Home;
