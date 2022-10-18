import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const Exit = () => {
  return (
    <section className="flex justify-end px-10 py-10 md:py-52 lg:px-32">
      <Link className="flex flex-row self-end gap-3 group" to={"/"}>
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
    </section>
  );
};
