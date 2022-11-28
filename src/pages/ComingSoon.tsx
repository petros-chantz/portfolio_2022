import { motion } from "framer-motion";
import { Exit } from "../components/Exit";

export const ComingSoon = () => {
  return (
    <motion.section
      className="flex flex-col h-screen gap-10 p-5 md:p-10"
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
      <Exit />
      <section className="flex flex-col self-center justify-center pt-10 h-95">
        <h1 className="self-center text-5xl font-medium md:text-7xl">
          Coming Soon!
        </h1>
      </section>
    </motion.section>
  );
};
