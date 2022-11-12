import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Project = (props: any) => {
  return (
    <Link
      className={`flex flex-col gap-5 group lg:w-3/5 h-screen -mb-32 even:self-start odd:self-end`}
      to={`/${props.project.path}`}
      key={props.project.index}
    >
      <div className="flex flex-row justify-start gap-2">
        <h3 className="group-hover:opacity-100 opacity-70">
          {props.project.title}
        </h3>
        <ArrowUpRightIcon className="self-center text-white w-7 h-7 group-hover:opacity-100 opacity-70" />
      </div>

      <motion.div
        className="overflow-hidden h-3/5"
        whileHover={{ scale: 1.005 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "linear", stiffness: 250, damping: 2 }}
      >
        <img
          src={props.project.thumbnail}
          alt={`project-${props.project.title}`}
          className="object-cover object-center hover:opacity-100 opacity-60"
        />
      </motion.div>

      <div className="flex flex-row justify-between gap-5">
        <div className="flex justify-center">
          <h4 className="projectList--project--year">{props.project.year}</h4>
        </div>
        <div className="flex flex-row justify-end gap-2">
          <h4 className="!text-white projectList--project--year">
            {props.project.area}
          </h4>
        </div>
      </div>
    </Link>
  );
};
