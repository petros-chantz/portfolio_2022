import { FooterIcons } from "../../data/FooterIconsData";
import { FooterTitles } from "../../data/FooterTitlesData";

export const Footer = () => {
  return (
    <footer className="flex flex-col gap-5 px-10 py-20 lg:pl-52 lg:w-2/3">
      <div className="w-1/3 pb-5 border-t-2 border-t-white"></div>
      <h2 className="font-medium text-white ">
        {FooterTitles[Math.floor(Math.random() * FooterTitles.length)]}
      </h2>
      <h3 className="pb-10 font-light text-white">Get it touch!</h3>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 ">
          <p>petros.chantz [at] gmail [dot] com</p>
          <p>+31 6513 two 14 nine 0</p>
        </div>

        <div className="flex flex-row gap-8 pt-10">
          {FooterIcons.map((icon: any, index: number) => {
            return (
              <a
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                aria-label=""
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
