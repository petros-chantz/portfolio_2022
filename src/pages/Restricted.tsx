import { EyeSlashIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { Copyright } from "../components/Copyright";
import { Exit } from "../components/Exit";

export const Restricted = () => {
  return (
    <motion.section
      className="flex flex-col gap-10 p-5 md:h-screen md:p-10"
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
      <section className="flex flex-col self-center md:w-[80%] gap-20 pt-20 md:pt-52 desktop:pt-80 md:h-95">
        <div className="flex flex-col self-start gap-10 md:flex-row">
          <EyeSlashIcon className="self-center w-20 h-20" />
          <h1 className="self-start text-5xl font-medium md:self-center md:text-7xl">
            Unfortunatelly, great designs
            <span className="block">can't always be made public.</span>
          </h1>
        </div>
        <h3 className="leading-10 font-extralight">
          Due to NDA aggreements, a lot of my latest professional work can't be
          displayed in public.{" "}
          <span className="block pt-10 md:inline md:pt-0">
            However, if you contact me at{" "}
            <span className="font-medium">
              petros.chantz [at] gmail [dot] com
            </span>{" "}
            I can send you an up-to-date detailed portfolio showcasing some
            elements of these restricted projects.
          </span>
        </h3>
      </section>
      <Copyright />
    </motion.section>
  );
};
