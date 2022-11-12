import Github from "../social_icons/Github";
import LinkedIn from "../social_icons/LinkedIn";
import Twitter from "../social_icons/Twitter";
import { IconsProperties } from "../interfaces/IconProperties.interface";

export const Icons: IconsProperties[] = [
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
    title: "twitter",
    link: "https://twitter.com/PetrosChantz",
    img: <Twitter />,
    type: "link",
  },
];
