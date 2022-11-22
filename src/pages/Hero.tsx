import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Navbar } from "../components/Navbar";

export const Hero = () => {
  return (
    <motion.div
      className="flex flex-col h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "linear",
        stiffness: 300,
        damping: 2,
        duration: 3.5,
      }}
    >
      <Navbar />
      <section className="flex flex-col h-full px-10 py-10">
        <div className="flex flex-col justify-center h-95">
          <h1 className="self-center hidden lg:inline-block">
            Hey, I'm Petros!
            <span className="block">I'm designing rich meaningful</span>
            <span className="block">experiences by connecting </span>
            <span className="block">
              {" "}
              <span className="font-bold">design</span> &{" "}
              <span className="font-bold">technology</span>.
            </span>
          </h1>
          <h1 className="self-center lg:hidden">
            Connecting{" "}
            <span className="block">
              <span className="block">
                <span className="font-bold">design</span> &{" "}
              </span>
              <span className="font-bold">technology</span>.
            </span>
          </h1>
        </div>
        <div className="flex justify-center h-5">
          <ChevronDownIcon className="self-center w-10 h-10 text-white transition ease-linear delay-1000 animate-pulse" />
        </div>
      </section>
    </motion.div>
  );
};
