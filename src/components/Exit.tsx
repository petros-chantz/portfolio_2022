import { XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
export const Exit = () => {
  return (
    <Link
      to={"/"}
      className="fixed rounded-full z-20 bg-black flex justify-center w-12 h-12 group hover:border-2 border-[#EE793B]"
    >
      <XMarkIcon className="w-10 h-10 fixed text-white self-center group-hover:text-[#EE793B] transition group-hover:rotate-180" />
    </Link>
  );
};
