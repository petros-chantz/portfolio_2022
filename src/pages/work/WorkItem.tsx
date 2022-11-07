import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const WorkItem = (props: any) => {
  return (
    <Link
      className={`flex flex-col gap-5 group lg:w-2/3 even:self-start odd:self-end`}
      to={`/${props.project.path}`}
      key={props.project.index}
    >
      <div className="flex flex-row justify-start gap-2">
        <h3>{props.project.title}</h3>
        <ArrowUpRightIcon className="self-center text-white w-7 h-7 group-hover:opacity-100 opacity-70" />
      </div>

      <motion.img
        src={props.project.thumbnail}
        alt={`project-${props.project.title}`}
        className="bg-center hover:opacity-100 opacity-70"
        whileHover={{ scale: 1.005 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "linear", stiffness: 250, damping: 2 }}
      />

      <div className="flex flex-row justify-between gap-5">
        <div className="flex justify-center">
          <h4 className="projectList--project--year">{props.project.period}</h4>
        </div>
        <div className="flex flex-row justify-end gap-2">
          <h4 className="projectList--project--year">{props.project.area}</h4>
        </div>
      </div>
    </Link>
  );
};
