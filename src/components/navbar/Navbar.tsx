import { Bars2Icon, MinusIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NavbarList } from "./NavbarList";

export const Navbar = () => {
  const [isOpened, setOpened] = useState<boolean>(false);

  const HandleOpen = () => {
    setOpened(!isOpened);
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        type: "linear",
        stiffness: 300,
        damping: 2,
        delay: 2,
        duration: 3.5,
      }}
    >
      <div className="flex flex-row justify-between px-10">
        <Link to="/" relative="path">
          <h6 className="navbar--title">petros chantzopoulos</h6>
        </Link>
        <motion.div
          className="flex self-center justify-center"
          whileTap={{ rotate: 360, opacity: [1, 0, 1] }}
        >
          <button onClick={HandleOpen} type={"button"}>
            {isOpened ? (
              <MinusIcon
                className="navbar--icon"
                aria-label="close navigation menu"
              />
            ) : (
              <Bars2Icon
                className="navbar--icon"
                aria-label="open navigation menu"
              />
            )}
          </button>
        </motion.div>
      </div>
      {isOpened ? <NavbarList /> : null}
    </motion.nav>
  );
};
