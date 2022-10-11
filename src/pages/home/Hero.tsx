import { ChevronDownIcon } from "@heroicons/react/24/solid";
export const Hero = () => {
  return (
    <div className="flex flex-col h-full px-10 justify-evenly">
      <div className="flex flex-col justify-center gap-10 lg:flex-row lg:pt-20">
        <img
          src="https://images.pexels.com/photos/2923595/pexels-photo-2923595.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt=""
          className="lg:w-2/5"
        />
        <div className="flex flex-col w-2/3 gap-5 pt-5 lg:pt-0 xl:gap-10">
          <div className="w-1/3 border-t-2 border-white"></div>
          <h1 className="text-4xl text-white lg:text-5xl xl:text-6xl">
            Bridging the gap between designing and developing.
          </h1>
          <h2 className="hidden text-xl font-thin text-white md:text-3xl xl:text-4xl lg:flex">
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

{
  /* <div className="flex flex-col self-center h-full gap-10 px-10 pt-14 lg:flex-row">
<div className="flex self-start">
  <img
    src="https://images.pexels.com/photos/2923595/pexels-photo-2923595.jpeg?auto=compress&cs=tinysrgb&w=800"
    alt=""
    className=""
  />
</div>
<div className="flex flex-col gap-5 pt-5 lg:w-2/3 3xl:w-2/4 xl:gap-10">
  <div className="w-1/3 border-t-2 border-white"></div>
  <h1 className="text-4xl text-white lg:text-5xl xl:text-6xl">
    Bridging the gap between designing and developing.
  </h1>
  <h2 className="text-xl font-thin text-white md:text-3xl xl:text-4xl">
    Helping teams & organisations deliver rich meaningful experiences.
  </h2>
</div>
<div className="flex justify-center lg:hidden">
  <ChevronDownIcon className="w-10 h-10 text-white" />
</div>
</div> */
}
