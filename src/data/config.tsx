import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

export const projects = {
  title: "Projects",
  desc: "Explore some of my proudest accomplishments in the form of the projects I've brought to life.",
  Myprojects: [
    {
      title: "Dine Market",
      description:
        "Dine Market is an e-commerce project developed for the PIAIC hackathon.",
      link: "https://dine-market-ecommerce-web.vercel.app",
      github: "MasabBinZia/Hackthon-01-web-Ecommerce-web",
      stack: [
        { key: "typescript", element: <SiTypescript className="w-6 h-6" /> },
        { key: "nextjs", element: <TbBrandNextjs className="w-6 h-6" /> },
        { key: "react", element: <SiReact className="w-6 h-6" /> },
        { key: "tailwindcss", element: <SiTailwindcss className="w-6 h-6" /> },
        { key: "redux", element: <SiRedux className="w-6 h-6" /> },
      ],
    },
    {
      title: "Photo-Album-Cloudinary",
      description: "A cloud-based media management platform.",
      link: "https://photo-album-cloudinary.vercel.app",
      github: "https://github.com/MasabBinZia/Photo-Album-Cloudinary",
      stack: [
        { key: "typescript", element: <SiTypescript className="w-6 h-6" /> },
        { key: "nextjs", element: <TbBrandNextjs className="w-6 h-6" /> },
        { key: "react", element: <SiReact className="w-6 h-6" /> },
        { key: "tailwindcss", element: <SiTailwindcss className="w-6 h-6" /> },
      ],
    },
    {
      title: "E-voting App",
      description:
        "MERN Stack E-voting App. User can vote and Admin can see their votes.",
      link: "https://github.com/MasabBinZia/e-voting-app",
      github: "https://github.com/MasabBinZia/e-voting-app",
      stack: [
        { key: "typescript", element: <SiTypescript className="w-6 h-6" /> },
        { key: "express", element: <SiExpress className="w-6 h-6" /> },
        { key: "react", element: <SiReact className="w-6 h-6" /> },
        { key: "tailwindcss", element: <SiTailwindcss className="w-6 h-6" /> },
        { key: "mongodb", element: <DiMongodb className="w-6 h-6" /> },
      ],
    },
  ],
  Clientprojects: [
    {
      title: "BITXCELS",
      description: "Welcome to Bitxcels, where innovation meets excellence.",
      link: "https://bitxcels.com",
      stack: [
        { key: "javascript", element: <SiJavascript className="w-6 h-6" /> },
        { key: "nextjs", element: <TbBrandNextjs className="w-6 h-6" /> },
        { key: "react", element: <SiReact className="w-6 h-6" /> },
        { key: "tailwindcss", element: <SiTailwindcss className="w-6 h-6" /> },
      ],
    },
    {
      title: "Sheep2mint",
      description:
        "Fix existing UI, create new UI components and created Profile Page.",
      link: "https://sheep2mint.com",
      stack: [
        { key: "javascript", element: <SiJavascript className="w-6 h-6" /> },
        { key: "react", element: <SiReact className="w-6 h-6" /> },
        { key: "css3", element: <SiCss3 className="w-6 h-6" /> },
        { key: "bootstrap", element: <SiBootstrap className="w-6 h-6" /> },
      ],
    },
    {
      title: "SuperFood NFT Frontend",
      description: "Fix and update UI and added UI components.",
      link: "http://few-control.surge.sh/",
      stack: [
        { key: "javascript", element: <SiJavascript className="w-6 h-6" /> },
        { key: "react", element: <SiReact className="w-6 h-6" /> },
        { key: "css3", element: <SiCss3 className="w-6 h-6" /> },
        { key: "bootstrap", element: <SiBootstrap className="w-6 h-6" /> },
      ],
    },
  ],
};
