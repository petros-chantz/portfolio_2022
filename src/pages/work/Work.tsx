import { motion } from "framer-motion";
import { ProjectData } from "../../data/ProjectData";
import { ProjectListItem } from "./ProjectListItem";

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
        <h2>A selection of different multidisciplanary projects.</h2>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 gap-20 lg:grid-cols-2"
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
        {ProjectData.sort((a, b) => b.year - a.year).map((project, index) => (
          <ProjectListItem project={project} key={index} />
        ))}
      </motion.div>
    </section>
  );
};
