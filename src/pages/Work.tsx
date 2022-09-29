import React from "react";
import { Navbar } from "../components/Navbar";

export const Work = () => {
  return (
    <div className="flex flex-col gap-10">
      <Navbar />
      <div className="flex flex-col gap-5 px-10 ">
        <div className="flex justify-end mt-32 ml-20 md:ml-32 xl:ml-96 ">
          <p className="text-3xl font-light text-right text-white xl:text-6xl md:text-4xl">
            Designing rich meaninful experiences for and with the people in the
            center, always with an aim.
          </p>
        </div>
        <div className="flex justify-start w-2/3">
          <img
            src="https://images.pexels.com/photos/2923595/pexels-photo-2923595.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
