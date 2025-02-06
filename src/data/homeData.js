import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaVoicemail } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";

export const homeData = [
  {
    id: 1,
    icon: <FaInstagram size={25} />,
    link: "https://www.instagram.com/",
  },
  {
    id: 2,
    icon: <FaDribbble size={25} />,
    link: "https://dribbble.com/session/new",
  },
  {
    id: 3,
    icon: <FaFacebookF size={25} />,
    link: "https://www.facebook.com/",
  },
];

export const homeDesc = [
  {
    id: 1,
    icon: <FaVoicemail size={22} />,
    text: "+77 022 444 05 05",
    link: "tel:770224440505",
  },
  {
    id: 2,
    icon: <TfiEmail size={22} />,
    text: "jacob360@gmail.com",
    link: "mailto:jacob360@gmail.com",
  },
];
