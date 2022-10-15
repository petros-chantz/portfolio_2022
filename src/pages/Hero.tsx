import { ChevronDownIcon, PlusIcon } from "@heroicons/react/24/solid";
export const Hero = () => {
  return (
    <section className="flex flex-col h-full px-10 py-10">
      <div className="flex justify-center h-95">
        <h1 className="self-center hidden md:inline-block">
          Delivering rich meaningful
          <span className="block">experiences by connecting </span>
          <span className="block">
            {" "}
            <span className="font-bold">design</span> &{" "}
            <span className="font-bold">technology</span>.
          </span>
        </h1>
        <h1 className="self-center text-start md:hidden">
          Connecting{" "}
          <span className="">
            <span className="font-bold">design</span> &{" "}
            <span className="font-bold">technology</span>.
          </span>
        </h1>
      </div>

      <div className="flex justify-center ">
        <ChevronDownIcon className="self-center w-10 h-10 text-white" />
      </div>
    </section>
  );
};
