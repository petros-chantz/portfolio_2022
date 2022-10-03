import { Navbar } from "../../components/Navbar";
import { Page } from "../Page";

export const Experience = () => {
  return (
    <Page
      contentSlot={
        <div className="flex flex-col justify-center gap-10 px-10 h-2/3">
          <p className="self-center font-black text-center text-white text-8xl">
            Oops, sorry!
          </p>
          <p className="self-center text-3xl text-center text-white">
            This page is still under development.
          </p>
        </div>
      }
    />
  );
};
