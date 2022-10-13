import { ChevronDownIcon } from "@heroicons/react/24/solid";
export const Hero = () => {
  return (
    <section className="flex flex-col h-full px-10 py-10 ">
      <div className="flex flex-col self-center justify-center gap-10 h-95">
        <h1 className="text-justify">
          Bridging the gap between
          <span className="text-justify md:block">
            designing <span className="hidden md:inline-block">-</span> &{" "}
            <span className="hidden md:inline-block">-</span> developing.
          </span>
        </h1>
        <h2 className=" font-extralight">
          Helping teams & organisations deliver{" "}
          <span className="md:block">rich meaningful experiences.</span>
        </h2>
      </div>
      <div className="flex justify-center ">
        <ChevronDownIcon className="self-center w-10 h-10 text-white" />
      </div>
    </section>
  );
};
