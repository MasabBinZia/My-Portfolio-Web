export const meta = {
  title: "Masab Bin Zia - FrontEnd Dev",
  description:
    "Hey, I'm Masab Bin Zia. I'm a web developer bringing people's ideas to life.",
};

export const hero = {
  title: "👋 Hey there! I'm Masab Bin Zia.",
  desc: "💫 How about I create engaging and intuitive digital experiences as a Junior Frontend Developer, bringing people's ideas to life?",
  more: "🌱 I’m currently learning Typescript,Next.js,Web3.0 and Back-End Development",
};

import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { SiFirebase } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";

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
        <SiTypescript />,
        <TbBrandNextjs />,
        <SiReact />,
        <SiTailwindcss />,
        <SiRedux />,
      ],
    },
    {
      title: "CoinControl Expense Tracker",
      description:
        "🪙 CoinControl is ExpenseTracker bulid with Nextjs,TailwindCss and FireBase. ",
      link: "https://coin-control-expense-tracker.vercel.app",
      github: "MasabBinZia/CoinControl-ExpenseTracker",
      stack: [
        <SiJavascript />,
        <TbBrandNextjs />,
        <SiReact />,
        <SiTailwindcss />,
        <SiFirebase />,
      ],
    },
    {
      title: "NFT Marketplace",
      description: " 🚀 Welcome to our cutting-edge NFT Marketplace. ",
      link: "https://nft-market-place-one-taupe.vercel.app",
      github: "MasabBinZia/NFT-MarketPlace",
      stack: [
        <SiTypescript />,
        <TbBrandNextjs />,
        <SiReact />,
        <SiTailwindcss />,
      ],
    },
  ],
  Clientprojects: [
    {
      title: "BITXCELS",
      description: "Welcome to Bitxcels, where innovation meets excellence.",
      link: "https://bitxcels.com",
      stack: [
        <SiJavascript />,
        <TbBrandNextjs />,
        <SiReact />,
        <SiTailwindcss />,
      ],
    },
    {
      title: "Sheep2mint",
      description:
        "Fix existing UI,create new UI components and Created Profile Page.",
      link: "https://sheep2mint.com",
      stack: [<SiJavascript />, <SiReact />, <SiCss3 />, <SiBootstrap />],
    },
    {
      title: "SuperFood NFT Frontend",
      description: "Fix and update UI and added UI components",
      link: "http://few-control.surge.sh/",
      stack: [<SiJavascript />, <SiReact />, <SiCss3 />, <SiBootstrap />],
    },
  ],
};

import HTML from "../public/static/icons/TechIcons/Html.svg";
import CSS from "../public/static/icons/TechIcons/Css.svg";
import JS from "../public/static/icons/TechIcons/Js.svg";
import TS from "../public/static/icons/TechIcons/Ts.svg";
import React from "../public/static/icons/TechIcons/React.svg";
import Next from "../public/static/icons/TechIcons/Next.svg";
import Tailwind from "../public/static/icons/TechIcons/Tailwindcss.svg";
import Git from "../public/static/icons/TechIcons/Git.svg";
import NodeJS from "../public/static/icons/TechIcons/Nodejs.svg";
import Bootstrap from "../public/static/icons/TechIcons/Bootstrap.svg";
import Figma from "../public/static/icons/TechIcons/Figma.svg";
// import Csh from "../public/static/icons/TechIcons/C#.svg";
import Python from "../public/static/icons/TechIcons/python.svg";
import Redux from "../public/static/icons/TechIcons/Redux.svg";
import MySql from "../public/static/icons/TechIcons/mySql.svg";
import MUI from "../public/static/icons/TechIcons/mui.svg";
import Sass from "../public/static/icons/TechIcons/sass.svg";

export const stack = {
  title: "My Tech Stack",
  stack: [
    { id: 1, Name: "HTML", Icon: HTML },
    { id: 2, Name: "CSS", Icon: CSS },
    { id: 3, Name: "JavaScript", Icon: JS },
    { id: 4, Name: "TypeScript", Icon: TS },
    { id: 5, Name: "React", Icon: React },
    { id: 6, Name: "Next.js", Icon: Next },
    { id: 7, Name: "Tailwind CSS", Icon: Tailwind },
    { id: 8, Name: "Git", Icon: Git },
    { id: 9, Name: "Node.js", Icon: NodeJS },
    { id: 10, Name: "Bootstrap", Icon: Bootstrap },
    { id: 11, Name: "Figma", Icon: Figma },
    { id: 12, Name: "Python", Icon: Python },
    { id: 13, Name: "Redux", Icon: Redux },
    { id: 14, Name: "MySQL", Icon: MySql },
    { id: 15, Name: "Material-UI", Icon: MUI },
    { id: 16, Name: "Sass", Icon: Sass },
  ],
};

export const contact = {
  title: "Contact Me",
  email: "masabmbz5@gmail.com",
  github: "MasabBinZia",
  linkedin: "masab-bin-zia-411a0922a",
  twitter: "hadescreeping",
};
