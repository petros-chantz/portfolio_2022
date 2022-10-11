import { ChevronDownIcon } from "@heroicons/react/24/solid";
import React from "react";

import { Navbar } from "../../components/Navbar";
import { Projects } from "./Projects";

export const Work = () => {
  return (
    <React.Fragment>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className="flex flex-col gap-10">
          <div className="flex flex-col-reverse gap-10 px-10 pt-32 xl:gap-20 lg:flex-row">
            <img
              src="https://images.pexels.com/photos/2923595/pexels-photo-2923595.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              className="lg:w-1/2"
            />
            <div className="flex flex-col gap-10 xl:gap-20">
              <h1 className="text-5xl text-white md:text-6xl xl:text-7xl">
                <span className="block">Bridging the gap</span>
                <span className="block">bewteen designing</span>
                <span className="block">and developing.</span>
              </h1>
              <h2 className="text-2xl font-thin text-white md:text-3xl xl:text-4xl">
                <span className="block">
                  Helping teams & organisations deliver
                </span>
                <span className="block">rich meaningful experiences.</span>
              </h2>
            </div>
          </div>
          <div className="justify-center hidden lg:flex ">
            <ChevronDownIcon className="w-10 h-10 text-white" />
          </div>
        </div>
      </div>
      {/* <Projects /> */}
    </React.Fragment>
  );
};

{
  /* <div className="flex flex-col justify-center h-full gap-20 px-10 pt-32">
          <div className="flex self-center">
            <img
              src="https://images.pexels.com/photos/2923595/pexels-photo-2923595.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt=""
              className=""
            />
          </div>
          <div className="flex justify-center">
            <ChevronDownIcon className="w-10 h-10 text-white" />
          </div>
        </div> */
}

{
  /* <div className="px-10">
<div className="absolute flex flex-col gap-5 z-5 right-10 top-1/2">
  <p className="text-3xl font-thin text-right text-white xl:text-6xl md:text-4xl">
    Designing rich meaningful experiences
  </p>
  <p className="text-3xl font-thin text-right text-white xl:text-6xl md:text-4xl">
    for and with the people in the center.
  </p>
  <p className="text-3xl font-thin text-right text-white xl:text-6xl md:text-4xl">
    Always with an aim.
  </p>
</div>
<div className="absolute top-1/3 ">
  <img
    src="https://images.pexels.com/photos/2923595/pexels-photo-2923595.jpeg?auto=compress&cs=tinysrgb&w=800"
    alt=""
    className=""
  />
</div>
</div> */
}

{
  /* <div className="flex flex-col gap-20 px-10 ">
<div className="flex justify-end mt-20 ml-20 md:ml-32 xl:ml-96 ">
  <p className="text-3xl font-thin text-right text-white xl:text-6xl md:text-4xl">
    Designing rich meaningful experiences for and with the people in the
    center, always with an aim.
  </p>
</div>
<div className="flex justify-start w-1/3">
  <img
    src="https://images.pexels.com/photos/2923595/pexels-photo-2923595.jpeg?auto=compress&cs=tinysrgb&w=800"
    alt=""
  />
</div>
</div> */
}
