import { Link } from "react-router-dom";
import Github from "../../assets/social_icons/Github";
import LinkedIn from "../../assets/social_icons/LinkedIn";
import Twitter from "../../assets/social_icons/Twitter";

interface IconsProperties {
  title: string;
  link: string;
  img: React.ReactNode;
  type: "social" | "email" | "link";
}

const Icons: IconsProperties[] = [
  {
    title: "linkedIn",
    link: "https://www.linkedin.com/in/petroschantz/",
    img: <LinkedIn />,
    type: "social",
  },
  {
    title: "github",
    link: "https://github.com/petros-chantz",
    img: <Github />,
    type: "social",
  },
  {
    title: "github",
    link: "https://github.com/petros-chantz",
    img: <Twitter />,
    type: "link",
  },
];

export const NavbarList = () => {
  return (
    <div className="absolute z-10 flex flex-col self-end w-full h-screen bg-black/60 top-32 backdrop-blur-lg">
      <div className="flex flex-col self-end w-5/6 gap-10 px-10 my-20 h-2/3">
        <div className="flex flex-col gap-10">
          {[
            ["about", "/about"],
            ["experience", "/experience"],
            ["vision", "/vision"],
          ].map(([title, url], index: number) => (
            <Link to={url} relative="path" className="self-end" key={index}>
              <button className="self-end text-5xl font-light tracking-wide text-white xl:text-6xl">
                {title}
              </button>
            </Link>
          ))}
          <a
            href="https://medium.com/@petros.chantz"
            target="_blank"
            rel="noopener noreferrer"
            className="self-end text-5xl font-light tracking-wide text-white xl:text-6xl"
          >
            writing
          </a>
        </div>
        <div className="flex flex-col gap-10 pt-10">
          <p className="self-end text-xl font-light tracking-wide text-white xl:text-2xl">
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
      </div>
    </div>
  );
};
