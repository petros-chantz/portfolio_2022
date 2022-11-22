import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export const WorkExperience = (props: any) => {
  return (
    <motion.a
      className={`flex flex-col gap-5 group lg:w-3/5 h-screen -mb-32 even:self-start odd:self-end`}
      href={`/${props.project.path}`}
      key={props.project.index}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "linear",
        stiffness: 70,
        duration: 0.7,
      }}
    >
      <div className="flex flex-row justify-start gap-2">
        <h3>{props.project.title}</h3>
        <ArrowRightIcon className="self-center w-10 h-10 text-white transition duration-700 opacity-0 group-hover:opacity-100 group-hover:translate-x-6" />
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
          className="object-cover object-center hover:opacity-100 opacity-80"
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
    </motion.a>
  );
};
