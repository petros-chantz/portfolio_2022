import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

export const Home = () => {
  return (
    <section className="flex flex-col h-screen p-5 lg:py-10 lg:pr-10 lg:pl-20">
      <Navbar />
      <section className="flex flex-col justify-center gap-5 lg:justify-center xl:w-1/2 h-5/6">
        <h2 className="self-start">Petros Chantzopoulos</h2>
        <p className="flex-col hidden lg:flex">
          <span className="block">
            I'm an interaction designer creating rich meaningful
          </span>
          <span className="block">
            experiences by connecting{" "}
            <span className="font-medium">design</span> &{" "}
            <span className="font-medium">technology</span> &{" "}
            <span className="font-medium">data.</span>
          </span>
        </p>
        <p className="text-lg lg:hidden">
          <span className="block">
            I'm an interaction designer creating rich
          </span>
          <span className="block">meaningful experiences by connecting </span>
          <span className="block">
            <span className="font-bold">design</span> &{" "}
            <span className="font-bold">technology</span> &{" "}
            <span className="font-bold"> data.</span>
          </span>
        </p>
        <p className="flex-col hidden lg:flex">
          <span className="block">
            Currently, I work for <span className="font-medium">APS Group</span>{" "}
            where I'm designing,
          </span>
          <span className="block">
            researching and developing new SaaS products.
          </span>
        </p>
        <p className="text-lg lg:hidden">
          <span className="block">
            Currently, I work for <span className="font-bold">APS Group</span>{" "}
            where
          </span>
          <span className="block">I'm designing, researching & developing</span>
          <span className="block">new SaaS products.</span>
        </p>
        <Link
          to={"/about"}
          className="flex flex-row self-start justify-start gap-2 pt-10 group"
        >
          <ArrowRightIcon className="self-center w-7 h-7 md:w-10 md:h-10 transition group-hover:translate-x-2 text-white group-hover:text-[#EE793B]" />
          <h3 className="self-center group-hover:underline group-hover:text-[#EE793B]">
            About me / Contact
          </h3>
        </Link>
      </section>
    </section>
  );
};

export default Home;
