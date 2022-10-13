import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
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
    <div className="navbar">
      <div className="flex flex-row justify-between px-10">
        <Link to="/" relative="path">
          <p className="navbar--title">petros chantzopoulos</p>
        </Link>
        <div className="flex self-center justify-center">
          <button onClick={HandleOpen}>
            {isOpened ? (
              <MinusIcon className="navbar--icon" />
            ) : (
              <PlusIcon className="navbar--icon" />
            )}
          </button>
        </div>
      </div>
      {isOpened ? <NavbarList /> : ""}
    </div>
  );
};
