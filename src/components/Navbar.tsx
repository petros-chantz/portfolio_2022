import { MinusIcon, PlusIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Github from "../assets/social_icons/Github";
import LinkedIn from "../assets/social_icons/LinkedIn";
import Twitter from "../assets/social_icons/Twitter";

interface IconsProperties {
  title: string;
  link: string;
  img: React.ReactNode;
  type: "social" | "email" | "link";
}

const Icons: IconsProperties[] = [
  {
    title: "linkedIn",
    link: "https://www.linkedin.com/in/petroschantz/",
    img: <LinkedIn />,
    type: "social",
  },
  {
    title: "github",
    link: "https://github.com/petros-chantz",
    img: <Github />,
    type: "social",
  },
  {
    title: "github",
    link: "https://github.com/petros-chantz",
    img: <Twitter />,
    type: "link",
  },
];

export const Navbar = () => {
  const [isOpened, setOpened] = useState<boolean>(false);

  const HandleOpen = () => {
    setOpened(!isOpened);
  };

  return (
    <div className="flex flex-col pt-10 bg-black">
      <div className="flex flex-row justify-between h-24 px-10">
        <Link to="/" relative="path">
          <div className="flex justify-center h-full gap-5 md:flex-col">
            <p className="self-center text-3xl font-medium tracking-wide text-white md:text-[40px]">
              petros chantzopoulos
            </p>
            {/* <div className="justify-center hidden gap-3 lg:flex lg:flex-row">
              <p className="text-xl text-white font-extralight lg:tracking-wide">
                creative technologist
              </p>
              <p className="text-xl text-white font-extralight lg:tracking-wide">
                -
              </p>
              <p className="text-xl text-white font-extralight lg:tracking-wide">
                interaction designer
              </p>
            </div> */}
          </div>
        </Link>
        <div className="flex justify-center ">
          <button onClick={HandleOpen}>
            {isOpened ? (
              <MinusIcon className="w-12 h-12 text-white" />
            ) : (
              <PlusIcon className="w-12 h-12 text-white" />
            )}
          </button>
        </div>
      </div>
      {isOpened ? (
        <div className="absolute z-10 flex flex-col self-end w-full h-screen bg-black/60 md:h-4/5 top-36 backdrop-blur-lg">
          <div className="flex flex-col self-end w-5/6 gap-10 px-10 my-20 h-2/3">
            <div className="flex flex-col gap-10">
              {[
                ["about", "/about"],
                ["experience", "/experience"],
                ["vision", "/vision"],
              ].map(([title, url], index: number) => (
                <Link to={url} relative="path" className="self-end" key={index}>
                  <button className="self-end text-5xl font-light tracking-wide text-white xl:text-6xl">
                    {title}
                  </button>
                </Link>
              ))}
              <a
                href="https://medium.com/@petros.chantz"
                target="_blank"
                rel="noopener noreferrer"
                className="self-end text-5xl font-light tracking-wide text-white xl:text-6xl"
              >
                writing
              </a>
            </div>
            <div className="flex flex-col gap-10 pt-10">
              <p className="self-end text-xl font-light tracking-wide text-white xl:text-2xl">
                petros.chantz [at] gmail [dot] com
              </p>

              <div className="flex flex-row self-end gap-10">
                {Icons.map((icon: any, index: number) => {
                  return (
                    <a
                      href={icon.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={index}
                    >
                      {icon.img}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
