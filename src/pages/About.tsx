import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="px-10 py-20 my-10 lg:my-52 xl:px-32 desktop:px-52">
      <div className="flex flex-col gap-10">
        <motion.div
          className="flex justify-center md:justify-start lg:self-end lg:w-2/3"
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
          <h2 className="self-center lg:self-end">Hey! I'm Petros!</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "linear",
            stiffness: 300,
            damping: 2,
            duration: 2,
          }}
          className="flex justify-center md:justify-start lg:self-end lg:w-2/3 "
        >
          <img
            alt="petros-profile"
            src="assets/profile-photo.jpg"
            className="self-center w-2/3 md:w-2/4 md:self-start"
          />
        </motion.div>
        <motion.div
          className="flex flex-col self-end gap-5 pt-20 md:gap-10 lg:w-2/3"
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
          <h3>
            I'm interested in the connection between the physical and the
            digital world.
          </h3>
          <p>
            I research, explore, prototype and develop new modalities of
            interactions. I love translating (often) abstract and ambiguous
            user/stakeholder needs and wishes into detailed interaction
            requirements for tech teams. I thrive in multidisciplinary teams and
            enjoy working in diverse projects and domains.
          </p>
        </motion.div>
        <motion.div
          className="flex pt-32 bg-center lg:self-start lg:w-2/3"
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
          <img
            src="assets/about.jpg"
            alt="petros making things"
            className=" md:self-start"
          />
        </motion.div>
        <motion.div
          className="flex flex-col self-start gap-5 pt-5 md:gap-10 lg:w-2/3"
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
          <h3>"Show me, don't tell me" mindset.</h3>
          <p>
            Experiences are always felt, never described. Designing meaningful
            interactions is an act of doing, not an act of “gut feelings”. In my
            work, I’m in constant dialogue with what I’m designing or
            researching. I’m letting that experience inform my design process
            and let it guide me towards making decisions. When I feel my own
            experiences are becoming contaminated with opinions or biases then I
            test, test and test again and again, my designs with real users,
            stakeholders or other designers.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col self-end gap-5 pt-20 lg:pt-32 md:gap-10 lg:w-2/3"
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
          <div className="flex flex-col gap-2">
            <h3 className="self-start">Currently,</h3>
            <h3 className="self-start">I work at APS Group.</h3>
          </div>
          <p className="self-start">
            There, I’m working as a design researcher and multidisciplinary
            designer in the cross domain design team. I’m responsible for
            identifying needs, wishes and pain points within our products and I
            conduct design research activities with our external and internal
            clients.
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col self-end gap-5 pt-20 lg:pt-32 md:gap-10 lg:w-2/3"
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
          <motion.div
            className="flex flex-col gap-10"
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
            {[
              ["Writing", "https://medium.com/@petros.chantz"],
              ["Vision", ""],
            ].map(([linkTitle, url]) => (
              <div className="flex flex-row self-start gap-2 group">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="self-center"
                >
                  {linkTitle}
                </a>
                <ArrowRightIcon className="self-center w-10 h-10 text-white transition duration-700 opacity-0 group-hover:opacity-100 group-hover:translate-x-6" />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
