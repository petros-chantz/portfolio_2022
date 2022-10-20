import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { animated, useTransition, config } from "react-spring";

const Mount = () => {
  const [show, set] = useState<boolean>(false);
  const transitions = useTransition(show, {
    from: { opacity: 0.2 },
    enter: { opacity: 1 },
    leave: { opacity: 0.2 },
    reverse: show,
    delay: 1000,
    config: config.molasses,
    onRest: () => set(!show),
  });
  return transitions(
    (styles, item) =>
      item && (
        <animated.div className="flex justify-center" style={styles}>
          <ChevronDownIcon className="self-center w-10 h-10 text-white" />
        </animated.div>
      )
  );
};

export const Hero = () => {
  return (
    <section className="flex flex-col h-full px-10 py-10">
      <div className="flex justify-center h-95">
        <h1 className="self-center hidden lg:inline-block">
          Delivering rich meaningful
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
      {Mount()}
    </section>
  );
};
