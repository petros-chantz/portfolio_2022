import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const ProjectListItem = (props: any) => {
  return (
    <Link
      className={`flex flex-col gap-5 group`}
      to={`/${props.project.url}`}
      key={props.project.index}
    >
      <motion.img
        src={props.project.img}
        alt={`project-${props.project.title}`}
        className="hover:opacity-100 opacity-70"
        whileHover={{ scale: 1.005 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "linear", stiffness: 250, damping: 2 }}
      />
      <div className="flex flex-row justify-between gap-5">
        <div className="flex justify-center">
          <h4 className="self-center text-slate-400 group-hover:opacity-100 opacity-70 font-extralight">
            {props.project.year}
          </h4>
        </div>
        <div className="flex flex-row justify-end gap-2">
          <h4 className="self-center text-white group-hover:opacity-100 opacity-70">
            {props.project.title}
          </h4>
          <ArrowUpRightIcon className="self-center w-4 h-4 text-white group-hover:opacity-100 opacity-70" />
        </div>
      </div>
    </Link>
  );
};
