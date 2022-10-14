import { ChevronDownIcon } from "@heroicons/react/24/solid";
export const Hero = () => {
  return (
    <section className="flex flex-col h-full px-10 py-10 ">
      <div className="flex flex-col self-center justify-center gap-10 h-95">
        <h1 className="">
          Bridging the gap between{" "}
          <span className="md:block">
            designing{" "}
            <span className="hidden font-normal text-gray-500 md:inline-block">
              -
            </span>{" "}
            <span className="font-normal text-gray-500">&</span>{" "}
            <span className="hidden font-normal text-gray-500 md:inline-block">
              -
            </span>{" "}
            developing.
          </span>
        </h1>
        <h2 className="text-gray-300 font-extralight">
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
