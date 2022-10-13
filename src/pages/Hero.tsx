import { ChevronDownIcon } from "@heroicons/react/24/solid";
export const Hero = () => {
  return (
    <div className="flex flex-col justify-between h-full px-10 py-10 lg:px-52">
      <div className="flex flex-col gap-10 pt-52">
        <h1>Bridging the gap between designing & developing.</h1>
        <div className="w-1/3 border-t-2 border-white"></div>
        <div className="flex flex-col">
          <h2 className="font-light">
            Helping teams & organisations deliver rich meaningful experiences.
          </h2>
        </div>
      </div>
      <div className="flex justify-center pt-10">
        <ChevronDownIcon className="w-10 h-10 text-white" />
      </div>
    </div>
  );
};
