import {
  FaCss3,
  FaGithub,
  FaHtml5,
  FaInstagram,
  FaJsSquare,
  FaLinkedin,
  FaReact,
  FaMobile,
  FaVuejs,
  FaSass,
  FaBootstrap,
  FaAngular,
  FaFacebookSquare,
  FaTwitter,
  // FaNpm,
  // FaFigma,
  // FaWordpress,
} from "react-icons/fa";
import {
  BiLogoJquery,
  BiLogoRedux,
  BiLogoGit,
  BiLogoTypescript,
  BiLogoTailwindCss,
} from "react-icons/bi";
import {
  SiAntdesign,
  SiMui,
  SiStyledcomponents,
  SiVuetify,
} from "react-icons/si";
import { TbMobiledata } from "react-icons/tb";
// import { GoCommandPalette } from "react-icons/go";

export const navPages = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Skills", link: "/skills" },
  { id: 3, name: "Projects", link: "/projects" },
  { id: 4, name: "About me", link: "/about-me" },
  { id: 5, name: "Contact", link: "/contact" },
  // { id: 6, name: "Certificates", link: "/certificates" },
];

export const social = [
  {
    id: 2,
    icon: <FaGithub />,
    link: "https://github.com/ahmedsarkies",
  },
  {
    id: 1,
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/ahmedsarkies",
  },
  {
    id: 4,
    icon: <FaFacebookSquare />,
    link: "https://www.facebook.com/ahmedsarkies",
  },
  {
    id: 5,
    icon: <FaTwitter />,
    link: "https://twitter.com/ahmedsarkies",
  },
  {
    id: 3,
    icon: <FaInstagram />,
    link: "https://www.instagram.com/ahmed.sarkies",
  },
];

export const skills = [
  { id: 1, icon: <FaHtml5 />, text: "HTML5" },
  { id: 2, icon: <FaCss3 />, text: "CSS3" },
  { id: 3, icon: <FaJsSquare />, text: "JavaScript (ES6)" },
  { id: 4, icon: <BiLogoTypescript />, text: "TypeScript" },
  { id: 5, icon: <BiLogoJquery />, text: "jQuery" },
  { id: 6, icon: <FaReact />, text: "React.js" },
  { id: 7, icon: <BiLogoRedux />, text: "Redux" },
  { id: 8, icon: <FaAngular />, text: "Angular" },
  { id: 9, icon: <FaVuejs />, text: "VueJs" },
  { id: 10, icon: <FaSass />, text: "SASS" },
  { id: 11, icon: <BiLogoTailwindCss />, text: "Tailwind css" },
  { id: 12, icon: <SiMui />, text: "Material-UI" },
  { id: 13, icon: <SiStyledcomponents />, text: "Styled components" },
  { id: 14, icon: <SiAntdesign />, text: "Ant Design" },
  { id: 15, icon: <FaBootstrap />, text: "Bootstrap" },
  { id: 16, icon: <SiVuetify />, text: "Vuetify" },
  { id: 17, icon: <BiLogoGit />, text: "Git" },
  { id: 18, icon: <FaGithub />, text: "Github" },
  { id: 19, icon: <TbMobiledata />, text: "RESTful API's" },
  { id: 20, icon: <FaMobile />, text: "Responsive Designs" },
  // { id: 21, icon: <GoCommandPalette />, text: "Command line" },
  // { id: 22, icon: <FaNpm />, text: "Package managers" },
  // { id: 23, icon: <FaFigma />, text: "Figma" },
  // { id: 24, icon: <FaWordpress />, text: "Wordpress" },
];
