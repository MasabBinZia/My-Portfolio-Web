import {
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiRedux,
  SiJavascript,
  SiCss3,
  SiBootstrap,
  SiExpress,
  SiCloudinary,
  SiReactquery,
  SiShadcnui,
  SiAxios,
  SiAlchemy,
  SiSolidity,
  SiEthers,
  SiVite,
  SiClerk,
  SiSanity,
  SiContentful,
} from "react-icons/si";
import {
  TbBrandNextjs,
  TbBrandFramerMotion,
  TbBrandThreejs,
} from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { RiFirebaseFill } from "react-icons/ri";
import { IoLogoNodejs } from "react-icons/io5";
import { FaAws, FaFigma } from "react-icons/fa6";
import { FaHardHat } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { GiSpring } from "react-icons/gi";


import {
  Code,
  Headset,
  ImageIcon,
  MonitorCheck,
  PenLine,
  SquareGanttChart,
} from "lucide-react";

import dinemarket from "../../public/projects/dinemarket.jpg";
import photosapp from "../../public/projects/photos-app.jpg";
import votepulse from "../../public/projects/votepulse.jpg";
import bitxcles from "../../public/projects/bitxcels.jpg";
import horsely from "../../public/projects/horsely.jpg";
import chainverse from "../../public/projects/chainverse.jpg";
import sheep2mint from "../../public/projects/sheep2mint.jpg";
import motorMods from "../../public/projects/motormods.jpg";
import summaai from "../../public/projects/summaai.jpg";
import EAH from "../../public/projects/eliteacc.jpg";
import trumed from "../../public/projects/trumed.jpg";

export const projects = {
  title: "Projects",
  desc: "Explore some of my proudest accomplishments in the form of the projects I've brought to life.",
  Myprojects: [
    {
      title: "Dine Market",
      slug: "dine-market",
      image: dinemarket,
      isPersonalProject: true,


      description:
        "Dine Market is an e-commerce project developed for the PIAIC hackathon.",
      link: "https://dine-market-ecommerce-web.vercel.app",
      github: "https://github.com/MasabBinZia/DineMarket-Ecommerce-web ",
      icon:"/icons/dinemarket.png" ,
      stack: [
        { key: "typescript", element: <SiTypescript className="h-8 w-8" /> },
        { key: "nextjs", element: <TbBrandNextjs className="h-8 w-8" /> },
        { key: "react", element: <SiReact className="h-8 w-8" /> },
        { key: "tailwindcss", element: <SiTailwindcss className="h-8 w-8" /> },
        { key: "redux", element: <SiRedux className="h-8 w-8" /> },
        { key: "shadcn ui", element: <SiShadcnui className="h-8 w-8" /> },
      ],
      caseStudy:
        "As a Modern Full-Stack Developer, I crafted “Dine Market,” an e-commerce web application tailored for the food industry. Utilizing TypeScript, Next.js, Redux for state management, ReactJS for dynamic user interfaces, Shadcn UI for modern UI components, and Tailwind CSS for responsive design, this project showcases my proficiency in creating scalable, maintainable, and user-friendly digital solutions. The application focuses on providing an exceptional online shopping experience for both vendors and consumers in the food sector.",

      challenges: [
        {
          desc: "Efficiently managing state across the application using Redux.",
        },
        {
          desc: "Ensuring a consistent user experience across various devices with Tailwind.",
        },
        {
          desc: "Maintaining a cohesive and modern interface using Shadcn UI components.",
        },
      ],
      learnings: [
        {
          desc: "Enhanced proficiency in TypeScript for robust, scalable code.",
        },
        {
          desc: "Leveraged Next.js for optimized server-side rendering and static site generation.",
        },
        {
          desc: "Developed skills in creating user-friendly interfaces and improving user experiences.",
        },
      ],
    },
    {
      title: "Photos App",
      slug: "photos-app",
      image: photosapp,
      isPersonalProject: true,

      description:
        "The Photos App is a web application , a cloud-based media management platform.",
      link: "https://photo-album-cloudinary.vercel.app",
      github: "https://github.com/MasabBinZia/Photo-Album-Cloudinary",
      icon:"/icons/photoapp.png" ,
      stack: [
        { key: "nextjs", element: <TbBrandNextjs className="h-8 w-8" /> },
        { key: "react", element: <SiReact className="h-8 w-8" /> },
        { key: "typescript", element: <SiTypescript className="h-8 w-8" /> },
        { key: "cloudinary", element: <SiCloudinary className="h-8 w-8" /> },
        { key: "tailwindcss", element: <SiTailwindcss className="h-8 w-8" /> },
        { key: "shadcn ui", element: <SiShadcnui className="h-8 w-8" /> },
      ],
      caseStudy:
        "The Photos App is a web application built using Next.js, React, TypeScript, Tailwind CSS, and Shards React UI. It leverages the Cloudinary service for image management and hosting. This project showcases my ability to integrate powerful third-party services with modern front-end frameworks to create efficient, user-friendly web applications. The app allows users to easily upload, manage, and display images using Cloudinary's platform.",

      challenges: [
        { desc: "Integrating Cloudinary for efficient image management." },
        { desc: "Ensuring responsive design using Tailwind CSS." },
        { desc: "Implementing server-side rendering with Next.js." },
      ],
      learnings: [
        {
          desc: "Enhanced understanding of Cloudinary's API and capabilities.",
        },
        { desc: "Improved skills in using Next.js for server-side rendering." },
        {
          desc: "Learned to create a highly responsive UI using Tailwind CSS.",
        },
      ],
    },
    {
      title: "VotePulse E-voting App",
      slug: "votepulse",
      image: votepulse,
      isPersonalProject: true,

      description:
        "MERN Stack E-voting App. User can vote and Admin can see their votes.",
      link: "https://github.com/MasabBinZia/e-voting-app",
      github: "https://github.com/MasabBinZia/e-voting-app",
      icon:"/icons/votepulse.png" ,
      stack: [
        { key: "mongodb", element: <DiMongodb className="h-8 w-8" /> },
        { key: "expressjs", element: <SiExpress className="h-8 w-8" /> },
        { key: "react", element: <SiReact className="h-8 w-8" /> },
        { key: "nodejs", element: <IoLogoNodejs className="h-8 w-8" /> },
        { key: "typescript", element: <SiTypescript className="h-8 w-8" /> },
        {
          key: "tanstack query",
          element: <SiReactquery className="h-8 w-8" />,
        },
        { key: "axios", element: <SiAxios className="h-8 w-8" /> },
        { key: "shadcn ui", element: <SiShadcnui className="h-8 w-8" /> },
        { key: "tailwindcss", element: <SiTailwindcss className="h-8 w-8" /> },
      ],
      caseStudy:
        "The VotePulse E-voting App is a MERN stack application allowing users to vote and admins to view results. Featuring JWT token authentication and role-based authorization, the app ensures secure and streamlined voting. The modern UI/UX, crafted using Shadcn UI, provides an intuitive and engaging experience. For Data Fetching I used Tanstack Query and posting data through axios.",

      challenges: [
        { desc: "Implementing secure authentication using JWT tokens." },
        {
          desc: "Ensuring role-based authorization for user and admin functionalities.",
        },
        { desc: "Creating a modern and responsive UI/UX with Shadcn UI." },
      ],
      learnings: [
        { desc: "Enhanced understanding of JWT token-based authentication." },
        { desc: "Improved skills in role-based access control." },
        {
          desc: "Developed proficiency in designing modern UI/UX with Shadcn UI.",
        },
      ],
    },
    {
      title: "SummaAI",
      slug: "summaai",
      image: summaai,
      isPersonalProject: true,

      description:
        "Effortlessly Summarize Articles with Cutting-Edge AI Technology. Get the Key Points in Seconds!",
      link: "https://summa-ai.vercel.app",
      github: "https://github.com/MasabBinZia/SummaAI",
      icon:"/icons/summaai.png" ,
      stack: [
        { key: "nextjs", element: <TbBrandNextjs className="h-8 w-8" /> },
        { key: "react", element: <SiReact className="h-8 w-8" /> },
        {
          key: "tanstack query",
          element: <SiReactquery className="h-8 w-8" />,
        },
        { key: "shadcn ui", element: <SiShadcnui className="h-8 w-8" /> },
        { key: "clerk", element: <SiClerk className="h-8 w-8" /> },
      ],
      caseStudy:
        "SummaAI leverages advanced AI technology to provide quick and efficient article summarization. Built with Next.js 14 and React, it ensures a seamless user experience with TanStack Query for client-side data fetching and styled with ShadcnUI. Authentication is handled securely with Clerk.",
      challenges: [
        {
          desc: "Integrating advanced AI API for accurate article summarization.",
        },
        {
          desc: "Implementing efficient client-side data fetching with TanStack Query.",
        },
        {
          desc: "Ensuring a modern and user-friendly interface using ShadcnUI.",
        },
      ],
      learnings: [
        {
          desc: "Gained experience in integrating AI API for content summarization.",
        },
        { desc: "Enhanced skills in using TanStack Query for data fetching." },
        {
          desc: "Improved proficiency in creating modern UI/UX with ShadcnUI.",
        },
      ],
    },

    //client project

    {
      "title": "Elite Accounting Hub",
      "slug": "elite-accounting-hub",
      "image": EAH,
      "description": "Elite Accounting Hub offers comprehensive accounting, finance, and tax services for US and Canadian clients.",
      "link": "https://eliteaccountinghub.com",
      "icon": "/icons/EAH.png",
      "stack": [
        { "key": "nextjs", "element": <TbBrandNextjs className="h-8 w-8" /> },
        { "key": "typescript", "element": <SiTypescript className="h-8 w-8" /> },
        { "key": "shadcn", "element": <SiShadcnui className="h-8 w-8" /> },
        { "key": "tailwindcss", "element": <SiTailwindcss className="h-8 w-8" /> },
        { "key": "sanity", "element": <SiSanity className="h-8 w-8" /> },
        { "key": "emailjs", "element": <MdEmail className="h-8 w-8" /> }
      ],
      "caseStudy": "In this project, my role as a Modern Full-Stack Developer focused on building a marketing website for Elite Accounting Hub using Next.js 13, TypeScript, ShadCN, and Tailwind CSS. I integrated Sanity as the CMS for content management and utilized EmailJS for communication services. Key tasks included creating responsive layouts, optimizing SEO to increase client acquisition, and delivering a smooth and user-friendly experience. By combining design, performance optimization, and content management, I ensured the website effectively communicates the value of Elite Accounting Hub's services.",
      
      "challenges": [
        { "desc": "Building a responsive and visually appealing marketing site." },
        { "desc": "Incorporating SEO best practices to improve client acquisition." },
        { "desc": "Managing dynamic content using Sanity and ensuring easy updates." }
      ],
      "learnings": [
        { "desc": "Enhanced proficiency in Next.js and TypeScript for building marketing websites." },
        { "desc": "Deepened knowledge in SEO optimization for better search visibility." },
        { "desc": "Improved experience with CMS integration using Sanity and EmailJS for effective content management." }
      ]
    },  
    {
      title: "Horsely-World",
      slug: "horsely-world",
      image: horsely,
      description:
        "Web 3.0 platform to mint horses genetics data as NFTs & can download them.",
      link: "https://horselyworld.com",
      icon:"/icons/horsely.png" ,
      stack: [
        { key: "javascript", element: <SiJavascript className="h-8 w-8" /> },
        { key: "nextjs", element: <TbBrandNextjs className="h-8 w-8" /> },
        { key: "react", element: <SiReact className="h-8 w-8" /> },
        { key: "tailwindcss", element: <SiTailwindcss className="h-8 w-8" /> },
        { key: "express", element: <SiExpress className="h-8 w-8" /> },
        { key: "mongodb", element: <DiMongodb className="h-8 w-8" /> },
        { key: "Alchemy SDK", element: <SiAlchemy className="h-8 w-8" /> },
        { key: "AWS", element: <FaAws className="h-8 w-8" /> },
        { key: "HardHat", element: <FaHardHat className="h-8 w-8" /> },
        { key: "Solidity", element: <SiSolidity className="h-8 w-8" /> },
      ],
      caseStudy:
        "In my role as a Modern Full-Stack Developer, I spearheaded the design and development of a comprehensive web application utilizing a cutting-edge stack including Next.js 13, Tailwind CSS, Express.js, MongoDB, Alchemy SDK, Web3.0 Connect Kit, AWS S3 Bucket, Hardhat, Solidity, JavaScript, and Wagmi. My responsibilities encompassed crafting the full application in JSX, integrating APIs and smart contracts within the frontend, implementing Web3 authentication, creating backend servers and APIs, and developing smart contracts, all aimed at delivering a robust, scalable, and highly interactive web3-enabled platform. I tightly collaborated with the backend developer, helping to create REST APIs, and integrated the smart contracts into the UI which was built by the Web3 backend developer.",

      challenges: [
        { desc: "Integrating APIs and smart contracts within the frontend." },
        {
          desc: "Implementing Web3 authentication and managing user sessions.",
        },
        {
          desc: "Creating and testing smart contracts for secure transactions.",
        },
      ],
      learnings: [
        { desc: "Enhanced proficiency in Web3 technologies and tools." },
        {
          desc: "Gained experience in developing and deploying smart contracts using Solidity.",
        },
        {
          desc: "Improved skills in integrating frontend applications with blockchain networks.",
        },
      ],
    },
    {
      title: "ChainVerse Lab",
      slug: "chain-verse-lab",
      image: chainverse,
      description: "Engaging static web application of ChainVerse Lab.",
      link: "https://chainvese-website.vercel.app",
      icon:"/icons/no-img.png" ,
      stack: [
        { key: "typescript", element: <SiTypescript className="h-8 w-8" /> },
        { key: "nextjs", element: <TbBrandNextjs className="h-8 w-8" /> },
        { key: "react", element: <SiReact className="h-8 w-8" /> },
        { key: "tailwindcss", element: <SiTailwindcss className="h-8 w-8" /> },
        {
          key: "FramerMotion",
          element: <TbBrandFramerMotion className="h-8 w-8" />,
        },
        { key: "threejs", element: <TbBrandThreejs className="h-8 w-8" /> },

        { key: "emailjs", element: <MdEmail className="h-8 w-8" /> },
      ],
      caseStudy:
        "As a modern Full-Stack Developer, I led the development of an engaging web application using Next.js 14, Tailwind CSS, Framer Motion, Email JS, and Three.js. My work involved the complete design of the app, converting designs into TypeScript (TSX) code, and enhancing user interaction with the integration of Three.js models. I focused on responsive design, user-friendly navigation, readability, and component-based architecture. Emphasizing animations, performance optimization, accessibility, and thorough testing, I ensured a robust, dynamic user experience. My approach was documented and geared towards continuous improvement, embodying modern development practices.",

      challenges: [
        { desc: "Integrating Three.js models for enhanced user interaction." },
        { desc: "Ensuring responsive design and readability across devices." },
        {
          desc: "Optimizing performance and accessibility for a dynamic user experience.",
        },
      ],
      learnings: [
        {
          desc: "Improved skills in using Three.js for creating interactive models.",
        },
        {
          desc: "Gained experience in converting designs into TypeScript (TSX) code.",
        },
        {
          desc: "Enhanced understanding of performance optimization and accessibility.",
        },
      ],
    },
    {
      title: "Sheep2Mint",
      slug: "sheep2mint",
      image: sheep2mint,
      description:
        "Enhancing the frontend using Bootstrap, ReactJS, Ethers JS, Firebase, and Wagmi.",
      link: "https://multisheapmint.web.app",
      icon:"/icons/sheep2mint.png" ,
      stack: [
        { key: "react", element: <SiReact className="h-8 w-8" /> },
        { key: "firebase", element: <RiFirebaseFill className="h-8 w-8" /> },
        { key: "bootstrap", element: <SiBootstrap className="h-8 w-8" /> },
        { key: "Css", element: <SiCss3 className="h-8 w-8" /> },
        { key: "ethers", element: <SiEthers className="h-8 w-8" /> },
      ],
      caseStudy:
        "In my role as a Modern Full-Stack Developer on the Sheep2Mint project, I focused on enhancing the frontend using Bootstrap, ReactJS, Ethers JS, Firebase, and Wagmi. My responsibilities included designing and developing the web application's UI with modern technologies, ensuring responsive design for cross-browser compatibility, and collaborating with backend teams for API integration. I also concentrated on UI enhancement, introducing dynamic, interactive elements to boost user engagement and crafting a seamless, intuitive user experience across various devices and platforms.",
      myProcess: [
        { icon: <PenLine className="h-10 w-10" />, processTitle: "Planning" },
        { icon: <ImageIcon className="h-10 w-10" />, processTitle: "Design" },
        {
          icon: <SquareGanttChart className="h-10 w-10" />,
          processTitle: "Development",
        },
        { icon: <Code className="h-10 w-10" />, processTitle: "Testing" },
        {
          icon: <MonitorCheck className="h-10 w-10" />,
          processTitle: "Deployment",
        },
      ],
      challenges: [
        { desc: "Ensuring responsive design for cross-browser compatibility." },
        { desc: "Collaborating with backend teams for API integration." },
        {
          desc: "Introducing dynamic, interactive elements to boost user engagement.",
        },
      ],
      learnings: [
        {
          desc: "Enhanced proficiency in using modern frontend technologies like Bootstrap and ReactJS.",
        },
        {
          desc: "Gained experience in integrating Ethers JS and Firebase for enhanced functionality.",
        },
        {
          desc: "Improved skills in creating intuitive user experiences and responsive designs.",
        },
      ],
    },
    {
      title: "Motor-mods",
      slug: "motor-mods",
      image: motorMods,
      description:
        "Enhance the UI/UX by adding ui components into existing MotorMods site.",
      link: "https://motor-mods.com",
      icon:"/icons/motormods.png" ,
      stack: [
        { key: "react", element: <SiReact className="h-8 w-8" /> },
        { key: "javascript", element: <SiJavascript className="h-8 w-8" /> },
        { key: "tailwindcss", element: <SiTailwindcss className="h-8 w-8" /> },
        { key: "redux", element: <SiRedux className="h-8 w-8" /> },
        { key: "vite", element: <SiVite className="h-8 w-8" /> },
        { key: "figma", element: <FaFigma className="h-8 w-8" /> },
      ],
      caseStudy:
        "As a modern Full-Stack Developer, I've leveraged my expertise in React.js, JavaScript, React-Router, Vite.js, Tailwind CSS, and Redux to enhance the functionality and responsiveness of the Motor Mods platform. My contributions include integrating existing app APIs, meticulously translating designs from Figma into React JSX and Tailwind CSS for a seamless and dynamic user experience on critical pages like Vendor Detail and Shops. This project showcases my ability to deliver a responsive, aesthetically pleasing, and highly functional web application, adhering to modern development practices and design principles.",

      challenges: [
        { desc: "Integrating existing app APIs seamlessly into the platform." },
        {
          desc: "Translating designs from Figma into React JSX and Tailwind CSS.",
        },
        {
          desc: "Ensuring a responsive and dynamic user experience on critical pages.",
        },
      ],
      learnings: [
        {
          desc: "Enhanced proficiency in using React.js and JavaScript for dynamic web applications.",
        },
        {
          desc: "Gained experience in translating designs into code using Figma, React JSX, and Tailwind CSS.",
        },
        {
          desc: "Improved skills in integrating and managing APIs within a modern web application.",
        },
      ],
    },
    {
      "title": "Trumed Medical Suppliers",
      "slug": "trumed-medical-suppliers",
      "image": trumed,
      "description": "Trumed Medical Suppliers F.Z.E offers a range of medical gas equipment, oxygen therapy products, and safety storage solutions for hospitals and industries worldwide.",
      "link": "https://www.trumedmedical.com",
      "icon": "/icons/trumed.png",
      "stack": [
        { "key": "nextjs", "element": <TbBrandNextjs className="h-8 w-8" /> },
        { "key": "react", "element": <SiReact className="h-8 w-8" /> },
        { "key": "typescript", "element": <SiTypescript className="h-8 w-8" /> },
        { "key": "tailwindcss", "element": <SiTailwindcss className="h-8 w-8" /> },
        { "key": "react-spring", "element": <GiSpring className="h-8 w-8" /> },
        { "key": "contentful", "element": <SiContentful className="h-8 w-8" /> },
        { "key": "emailjs", "element": <MdEmail className="h-8 w-8" /> }
      ],
      "caseStudy": "In this project, I worked as a Modern Full-Stack Developer to create a marketing website for Trumed Medical Suppliers F.Z.E. The website was built using Next.js 13, React 18, TypeScript, and Tailwind CSS, with animations powered by React Spring. I integrated Contentful for content management and EmailJS for communication. The website is fully responsive and delivers an engaging, interactive experience for showcasing Trumed’s extensive product range. Performance optimization, SEO improvements, and enhancing user engagement were key priorities to ensure the site effectively promotes the brand.",
      
      "challenges": [
        { "desc": "Creating a visually appealing and responsive site for a global medical supplier." },
        { "desc": "Integrating React Spring for smooth animations and interactions." },
        { "desc": "Ensuring content management flexibility using Contentful." }
      ],
      "learnings": [
        { "desc": "Gained deeper experience in using React Spring for creating dynamic user interfaces." },
        { "desc": "Enhanced my skills in content management with Contentful." },
        { "desc": "Refined best practices for building SEO-friendly marketing websites." }
      ]
    }
,    
    {
      title: "BITXCELS",
      slug: "bitxcels",
      image: bitxcles,
      description: "Welcome to Bitxcels, where innovation meets excellence.",
      link: "https://bitxcels.com",
      icon:"/icons/no-img.png" ,
      stack: [
        { key: "javascript", element: <SiJavascript className="h-8 w-8" /> },
        { key: "nextjs", element: <TbBrandNextjs className="h-8 w-8" /> },
        { key: "react", element: <SiReact className="h-8 w-8" /> },
        { key: "tailwindcss", element: <SiTailwindcss className="h-8 w-8" /> },
      ],
      caseStudy:
        "In this project, my role as a Modern Full-Stack Developer centered around creating a fully responsive, intuitive UI design for a website utilizing Next.js 13, JavaScript, Framer Motion, Email JS, and Tailwind CSS. The process encompassed planning and design with a focus on responsive layouts, seamless navigation and user flow, and ensuring typography and readability are optimized for all devices. I employed a component-based approach to structure the site, integrating animations and interactions for a dynamic user experience. Performance optimization, accessibility, thorough testing and debugging, comprehensive documentation, and a commitment to continuous improvement were key aspects of my development strategy.",

      challenges: [
        { desc: "Creating a fully responsive and intuitive UI design." },
        { desc: "Ensuring seamless navigation and user flow." },
        { desc: "Optimizing typography and readability across all devices." },
      ],
      learnings: [
        {
          desc: "Improved skills in using Next.js and JavaScript for responsive design.",
        },
        {
          desc: "Gained experience in using Framer Motion for animations and interactions.",
        },
        {
          desc: "Enhanced understanding of performance optimization and accessibility best practices.",
        },
      ],
    },
  ],
};

export const skills = [
  {
    category: "Programming Languages",
    icons: "js,ts,cs,go,py,solidity&perline=6",
  },
  {
    category: "Front-End Development",
    icons: "react,next,astro,svelte,vite,vue&perline=6",
  },
  {
    category: "Libraries",
    icons: "redux,bootstrap,tailwind,threejs,mui,sass&perline=6",
  },
  {
    category: "Back-End,Clouds,PaaS",
    icons: "prisma,firebase,aws,docker,dotnet,nodejs&perline=6",
  },
  {
    category: "Database Management",
    icons: "firebase,planetscale,postgres,mysql,mongo,supabase,&perline=6",
  },
  {
    category: "OS & Package Managers",
    icons: "windows,linux,npm,yarn,pnpm,bun&perline=6",
  },
  // {
  //   category: 'Design & Dev Tools',
  //   icons: 'figma,ps,notion,postman,vscode,visualstudio,svg,git&perline=6',
  // },
];

export const github: any = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

export const myProcess = [
  { icon: <PenLine className="h-10 w-10" />, processTitle: "Definition" },
  { icon: <ImageIcon className="h-10 w-10" />, processTitle: "Design" },
  {
    icon: <SquareGanttChart className="h-10 w-10" />,
    processTitle: "Planning",
  },
  { icon: <Code className="h-10 w-10" />, processTitle: "Development" },
  {
    icon: <MonitorCheck className="h-10 w-10" />,
    processTitle: "Deployment",
  },
  { icon: <Headset className="h-10 w-10" />, processTitle: "Suppport" },
];

export const goals = [
  {
    title: "Innovate Startups",
    description: "Launch multiple AI-driven startups and SaaS solutions.",
  },
  {
    title: "Pioneer Technology",
    description: "Develop platforms for today's and tomorrow's challenges.",
  },
  {
    title: "Boost Efficiency",
    description: "Enhance business efficiency and customization.",
  },
  {
    title: "Continuous Learning",
    description:
      "Remain committed to learning and hungry for new tech advancements.",
  },
];
