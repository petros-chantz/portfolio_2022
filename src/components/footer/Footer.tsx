import Github from "../../assets/social_icons/Github";
import LinkedIn from "../../assets/social_icons/LinkedIn";
import Twitter from "../../assets/social_icons/Twitter";

const Titles = [
  ["See a great opportunity for a project?"],
  ["Sounds interesting?"],
  ["Wanna chat about technology, design, ethics or privacy?"],
  ["Love what you see?"],
];

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

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-5 px-10 py-20 lg:pl-52 lg:w-2/3">
      <div className="w-32 pb-5 border-t-2 border-t-white"></div>
      <h2 className="font-medium text-white ">
        {Titles[Math.floor(Math.random() * Titles.length)]}
      </h2>
      <h3 className="pb-10 font-light text-white">Get it touch!</h3>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 ">
          <p>petros.chantz [at] gmail [dot] com</p>
          <p>+31 6513 two 14 nine 0</p>
        </div>

        <div className="flex flex-row gap-8 pt-10">
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
    </footer>
  );
};
