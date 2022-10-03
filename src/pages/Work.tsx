import React from "react";
import { Navbar } from "../components/Navbar";

export const Work = () => {
  return (
    <div className="flex flex-col h-screen ">
      <Navbar />
      <div className="px-10">
        <div className="absolute z-10 flex flex-col gap-5 right-10 top-1/2">
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
        <div className="absolute bottom-20 left-10">
          <img
            src="https://images.pexels.com/photos/2923595/pexels-photo-2923595.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

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
