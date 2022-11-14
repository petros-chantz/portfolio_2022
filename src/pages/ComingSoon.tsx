import { motion } from "framer-motion";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export const ComingSoon = () => {
  return (
    <motion.section
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
      <Navbar />
      <section className="flex flex-col justify-center gap-32 px-10 py-32 md:gap-52 lg:px-32 md:my-20">
        <h1 className="self-center font-bold">Coming Soon!</h1>
      </section>
      <Footer />
    </motion.section>
  );
};
