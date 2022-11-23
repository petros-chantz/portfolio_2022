import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <section className="flex flex-col h-screen py-10 pl-20 pr-10">
      <nav className="flex justify-end h-[20%] ">
        <div className="flex flex-col self-center gap-2">
          <div className="flex flex-row gap-2">
            <PlusIcon className="self-center w-10 h-10 text-white" />
            <h3>Work Experience</h3>
          </div>
          <div className="flex flex-row gap-2">
            <PlusIcon className="self-center w-10 h-10 text-white" />
            <h3>Public Work</h3>
          </div>
          <div className="flex flex-row gap-2">
            <ArrowUpRightIcon className="self-center w-10 h-10 text-white" />
            <h3>Writing</h3>
          </div>
        </div>
      </nav>
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
        <Link to={"/about"} className="flex flex-row gap-2 pt-10">
          <ArrowRightIcon className="w-10 h-10 text-white" />
          <h3>About me / Contact</h3>
        </Link>
      </section>
    </section>
  );
};

export default Home;
