import { motion } from "framer-motion";
import { ProjectData } from "../data/ProjectData";
import { Project } from "./Project";

export const Work = () => {
  return (
    <section className="flex flex-col gap-24 px-10 mt-32 lg:px-32 md:gap-32 md:my-52">
      <motion.div
        className="flex flex-col self-start gap-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "linear",
          stiffness: 300,
          damping: 2,
          duration: 2,
        }}
      >
        <h1>Work</h1>
        <h2>
          A selection of different{" "}
          <span className="lg:block">multidisciplanary projects.</span>
        </h2>
      </motion.div>
      <div className="flex flex-col gap-48 pt-20 lg:pt-32 lg:gap-52">
        {ProjectData.sort((a, b) => b.year - a.year).map((project, index) => (
          <Project project={project} key={index} />
        ))}
      </div>
    </section>
  );
};
