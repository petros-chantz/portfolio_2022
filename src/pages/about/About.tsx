import ProfilePhoto from "../../assets/profile-photo.jpg";
import ShowMePhoto from "../../assets/about.jpg";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="px-10 py-20 my-10 lg:my-32 xl:px-32 desktop:px-52">
      <div className="flex flex-col gap-5">
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
            src={ProfilePhoto}
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
            user/stakeholder needs and wishes into straightforward interaction
            requirements for tech teams. I work within multidisciplinary and
            diverse teams and projects.
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
            src={ShowMePhoto}
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
          <h3>"Show me don't tell me" mindset.</h3>
          <p>
            Experiences are always felt, never described. We can't claim to
            design meaningful interactions when we haven't experience them
            ourselves first. In my work I always experience what I'm designing,
            letting the experience inform the design process and decisions. When
            I feel my own experience is starting to become contaminated with
            biases then I test, test and test my designs with users and
            stakeholders.
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
            There, I'm working as a multidisciplinary designer bridging the gap
            between UX/UI design and frontend development. I help deliver new
            product features to our SaaS products and make sure every
            interaction is accessible and responsive for all of our users.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
