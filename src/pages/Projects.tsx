import { XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export const Projects = () => {
  return (
    <section className="flex flex-col h-screen gap-10 p-10">
      <Link to={"/"}>
        <XMarkIcon className="w-10 h-10 text-white" />
      </Link>
      <section className="flex flex-col gap-10">
        <h2 className="self-center">Public Work</h2>
        <div className="flex flex-row justify-between">
          <p>12 projects</p>
          <p>6 years</p>
        </div>
      </section>
    </section>
  );
};

export default Projects;
