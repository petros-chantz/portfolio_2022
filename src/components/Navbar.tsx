import { ArrowUpRightIcon, PlusIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="flex justify-end h-[20%] ">
      <div className="flex flex-col self-center gap-2">
        {[
          ["Work Experience", "/work"],
          ["Public Work", "/projects"],
        ].map(([title, url]) => (
          <Link className="flex flex-row justify-start gap-2 group" to={url}>
            <PlusIcon className="self-center w-7 h-7 md:w-10 md:h-10 text-white transition group-hover:rotate-180 group-hover:text-[#EE793B]" />
            <h3 className="self-center group-hover:underline group-hover:text-[#EE793B]">
              {title}
            </h3>
          </Link>
        ))}
        <a
          className="flex flex-row gap-2 group"
          href={"https://medium.com/@petros.chantz"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ArrowUpRightIcon className="self-center w-7 h-7 md:w-10 md:h-10 transition group-hover:rotate-45 text-white group-hover:text-[#EE793B]" />
          <h3 className="self-center group-hover:underline group-hover:text-[#EE793B]">
            Writing
          </h3>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
