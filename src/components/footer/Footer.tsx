import { Icons } from "../../data/IconsData";
import { FooterTitles } from "../../data/FooterTitlesData";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      className="flex flex-col gap-5 px-10 py-20 lg:px-32 lg:w-2/3"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        type: "linear",
        stiffness: 300,
        damping: 2,
        duration: 2,
      }}
    >
      <div className="w-1/3 pb-5 border-t-2 border-t-white"></div>
      <h2 className="font-medium text-white ">
        {FooterTitles[Math.floor(Math.random() * FooterTitles.length)]}
      </h2>
      <h3 className="pb-10 font-light text-white">Get in touch!</h3>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5 ">
          <h4 className="text-white">petros.chantz [at] gmail [dot] com</h4>
          <h4 className="text-white">+31 6513 two 14 nine 0</h4>
        </div>

        <div className="flex flex-row gap-8 pt-10">
          {Icons.map((icon: any, index: number) => {
            return (
              <a
                href={icon.link}
                target="_blank"
                rel="noopener noreferrer"
                key={`item-${index}`}
                aria-label="social media links"
              >
                {icon.img}
              </a>
            );
          })}
        </div>
      </div>
    </motion.footer>
  );
};
