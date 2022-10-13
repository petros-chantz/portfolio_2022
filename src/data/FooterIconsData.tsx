import Github from "../assets/social_icons/Github";
import LinkedIn from "../assets/social_icons/LinkedIn";
import Twitter from "../assets/social_icons/Twitter";
import { IconsProperties } from "../interfaces/IconProperties.interface";

export const FooterIcons: IconsProperties[] = [
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
