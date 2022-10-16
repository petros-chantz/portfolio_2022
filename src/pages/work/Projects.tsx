import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";
import { ProjectData } from "./ProjectData";

export const Projects = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
        {ProjectData.sort((a, b) => b.year - a.year).map(
          ({ img, title, year, link }) => {
            return (
              <Link className={`flex flex-col gap-5 `} to={link}>
                <img
                  src={img}
                  alt={`project-${title}`}
                  className="hover:opacity-100 opacity-80"
                />
                <div className="flex flex-row justify-between">
                  <p className="text-gray-400 font-extralight"> {year}</p>
                  <div className="flex flex-row justify-end gap-2">
                    <p className="self-center text-white">{title}</p>
                    <ArrowUpRightIcon className="self-center w-4 h-4 text-white" />
                  </div>
                </div>
              </Link>
            );
          }
        )}
      </div>
    </React.Fragment>
  );
};
