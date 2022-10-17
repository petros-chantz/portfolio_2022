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
              <motion.div
                whileHover={{ scale: 1.005 }}
                transition={{ type: "ease-in", stiffness: 250, damping: 2 }}
              >
                <Link className={`flex flex-col gap-5 group`} to={link}>
                  <motion.img
                    src={img}
                    alt={`project-${title}`}
                    className="hover:opacity-100 opacity-70"
                  />
                  <div className="flex flex-row justify-between gap-5">
                    <div className="flex justify-center">
                      <p className="self-center text-slate-400 group-hover:opacity-100 opacity-70 font-extralight">
                        {year}
                      </p>
                    </div>
                    <div className="flex flex-row justify-end gap-2">
                      <p className="self-center text-white group-hover:opacity-100 opacity-70">
                        {title}
                      </p>
                      <ArrowUpRightIcon className="self-center w-3 h-3 text-white group-hover:opacity-100 opacity-70" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          }
        )}
      </div>
    </React.Fragment>
  );
};
