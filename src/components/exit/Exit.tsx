import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ProjectData } from "../../pages/work/ProjectData";

export const Exit = (props: any) => {
  const { title } = useParams();
  const previousIndex = ProjectData.find(
    (project) => project.title === props.previousIndex
  );
  const nextIndex = ProjectData.find(
    (project) => project.title === props.nextIndex
  );
  let navigate = useNavigate();

  return (
    <section className="flex justify-between px-10 py-10 md:py-52 lg:px-32">
      <Link className="flex flex-row self-start gap-3 group" to={"/"}>
        <ArrowLeftIcon className="text-white w-14 h-14 opacity-70 group-hover:opacity-100" />
        <motion.h3
          className="self-center "
          whileHover={{ opacity: 0.6 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "linear", stiffness: 250, damping: 2 }}
        >
          Back
        </motion.h3>
      </Link>
      <button
        className="flex flex-row self-end gap-3 group"
        onClick={() => navigate(`/`)}
      >
        <motion.h3
          className="self-center "
          whileHover={{ opacity: 0.6 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "linear", stiffness: 250, damping: 2 }}
        >
          Next Project
        </motion.h3>
        <ArrowRightIcon className="text-white w-14 h-14 opacity-70 group-hover:opacity-100" />
      </button>
    </section>
  );
};
