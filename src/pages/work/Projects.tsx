import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import { Link } from "react-router-dom";
import { ProjectData } from "./ProjectData";
import { motion } from "framer-motion";

export const Projects = () => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1 gap-20 lg:grid-cols-2">
        {ProjectData.sort((a, b) => b.year - a.year).map(
          ({ img, title, year, link }) => {
            return (
              <Link className={`flex flex-col gap-5 group`} to={link}>
                <motion.img
                  src={img}
                  alt={`project-${title}`}
                  className="hover:opacity-100 opacity-70"
                  whileHover={{ scale: 1.005 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "linear", stiffness: 250, damping: 2 }}
                />
                <div className="flex flex-row justify-between gap-5">
                  <div className="flex justify-center">
                    <h6 className="self-center text-slate-400 group-hover:opacity-100 opacity-70 font-extralight">
                      {year}
                    </h6>
                  </div>
                  <div className="flex flex-row justify-end gap-2">
                    <h6 className="self-center text-white group-hover:opacity-100 opacity-70">
                      {title}
                    </h6>
                    <ArrowUpRightIcon className="self-center w-5 h-5 text-white group-hover:opacity-100 opacity-70" />
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
