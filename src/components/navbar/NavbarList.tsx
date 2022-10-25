import { LockClosedIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { Icons } from "../../data/IconsData";
import { motion } from "framer-motion";

export const NavbarList = () => {
  return (
    <div className="navbar--list">
      <motion.div
        className="flex flex-col self-end gap-10 px-10 my-20 md:w-5/6 h-2/3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col gap-10">
          {[
            ["experience", "/experience"],
            ["vision", "/vision", "ready"],
          ].map(([title, url, ready], index: number) => (
            <Link
              to={url}
              relative="path"
              className={`flex self-end justify-center gap-5 ${
                ready ? null : "pointer-events-none"
              }`}
              key={`${index}-navbar`}
            >
              {ready ? null : (
                <LockClosedIcon
                  className="self-center text-slate-400 w-7 h-7"
                  aria-label="locked page"
                />
              )}
              <p
                className={`navbar--list--link ${
                  ready ? null : "text-slate-400 hover:opacity-80"
                }`}
              >
                {title}
              </p>
            </Link>
          ))}
          <a
            href="https://medium.com/@petros.chantz"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar--list--link"
          >
            writing
          </a>
        </div>
        <div className="flex flex-col w-full gap-10 pt-10">
          <p className="navbar--list--text">
            petros.chantz [at] gmail [dot] com
          </p>

          <div className="flex flex-row self-end gap-10">
            {Icons.map((icon: any, index: number) => {
              return (
                <a
                  href={icon.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                >
                  {icon.img}
                </a>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
