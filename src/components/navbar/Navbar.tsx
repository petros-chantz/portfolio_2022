import { Bars2Icon, MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavbarList } from "./NavbarList";

export const Navbar = () => {
  const [isOpened, setOpened] = useState<boolean>(false);
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  const HandleOpen = () => {
    setOpened(!isOpened);
  };

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  // return visible ? (
  //   <div className="fixed top-0 left-0 right-0">
  //     <div className="flex flex-col py-10 bg-black drop-shadow-3xl">
  //       <div className="flex flex-row justify-between px-10">
  //         <Link to="/" relative="path">
  //           <div className="flex justify-center h-full gap-5 md:flex-col">
  //             <p className="self-center text-3xl font-normal tracking-wide text-white md:text-[40px]">
  //               petros chantzopoulos
  //             </p>
  //           </div>
  //         </Link>
  //         <div className="flex justify-center ">
  //           <button onClick={HandleOpen}>
  //             {isOpened ? (
  //               <MinusIcon className="w-12 h-12 text-white" />
  //             ) : (
  //               <PlusIcon className="w-12 h-12 text-white" />
  //             )}
  //           </button>
  //         </div>
  //       </div>
  //       {isOpened ? <NavbarList /> : ""}
  //     </div>
  //   </div>
  // ) : (
  //   <div className="flex flex-col py-10 bg-black">
  //     <div className="flex flex-row justify-between px-10">
  //       <Link to="/" relative="path">
  //         <div className="flex justify-center h-full gap-5 md:flex-col">
  //           <p className="self-center text-3xl font-normal tracking-wide text-white md:text-[40px]">
  //             petros chantzopoulos
  //           </p>
  //         </div>
  //       </Link>
  //       <div className="flex justify-center ">
  //         <button onClick={HandleOpen}>
  //           {isOpened ? (
  //             <MinusIcon className="w-12 h-12 text-white" />
  //           ) : (
  //             <PlusIcon className="w-12 h-12 text-white" />
  //           )}
  //         </button>
  //       </div>
  //     </div>
  //     {isOpened ? <NavbarList /> : ""}
  //   </div>
  // );

  return (
    <nav className="navbar">
      <div className="flex flex-row justify-between px-10">
        <Link to="/" relative="path">
          <h6 className="navbar--title">petros chantzopoulos</h6>
        </Link>
        <motion.div
          className="flex self-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
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
      {isOpened ? <NavbarList /> : ""}
    </nav>
  );
};
