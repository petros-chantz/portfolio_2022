import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { NavbarList } from "./NavbarList";

export const Navbar = () => {
  const [isOpened, setOpened] = useState<boolean>(false);
  // const [prevScrollPos, setPrevScrollPos] = useState<any>(0);
  // const [visible, setVisible] = useState<boolean>(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.scrollY;
  //     console.log("curent", currentScrollPos);
  //     console.log("pre", prevScrollPos);

  //     if (currentScrollPos > prevScrollPos) {
  //       setVisible(() => false);
  //     } else {
  //       setVisible(() => true);
  //     }

  //     setPrevScrollPos(() => currentScrollPos);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   console.log("useEffect was used");

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  const HandleOpen = () => {
    setOpened(!isOpened);
  };

  return (
    <nav
      // className={`${
      //   visible ? "fixed top-0 left-0 right-0 py-10 bg-black z-10" : "navbar"
      // }`}
      className="navbar"
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
              <PlusIcon
                className="navbar--icon"
                aria-label="open navigation menu"
              />
            )}
          </button>
        </motion.div>
      </div>
      {isOpened ? <NavbarList /> : null}
    </nav>
  );
};
