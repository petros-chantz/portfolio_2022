import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ProjectData } from "./ProjectData";

export const Projects = () => {
  return (
    <div className="flex flex-col gap-24 px-10 mt-32 lg:px-32 lg:gap-52 md:gap-32 md:mt-52">
      <div className="self-end">
        <h1>Work</h1>
      </div>
      {ProjectData.map(([img, title, year, url, position]) => (
        <Link
          className={`flex flex-col gap-5 md:w-1/3 lg:w-2/4   ${
            position === "left" ? "md:self-start" : "md:self-end"
          }`}
          to={url}
        >
          <img
            src={img}
            alt={`project-${title}`}
            className="hover:opacity-100 opacity-80"
          />
          <div className="flex flex-row justify-between">
            <div className="flex flex-row gap-5">
              <p className="text-white">{title}</p>
              <div className="flex justify-center pl-2 border-l-2 border-gray-400">
                <p className="text-gray-400 font-extralight"> {year}</p>
              </div>
            </div>
            <ArrowUpRightIcon className="self-center w-5 h-5 text-white" />
          </div>
        </Link>
      ))}
      ;
    </div>
  );
};
