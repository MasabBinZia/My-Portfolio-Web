import React from "react";
import { Dock, DockIcon } from "@/components/ui/dock";
import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaSquareUpwork,
} from "react-icons/fa6";

const iconData = [
  {
    label: "GitHub Profile",
    link: "https://github.com/MasabBinZia",
    icon: <FaGithub className="h-6 w-6" />,
  },
  {
    label: "LinkedIn Profile",
    link: "https://www.linkedin.com/in/masabbinzia",
    icon: <FaLinkedin className="h-6 w-6" />,
  },
  {
    label: "Twitter Profile",
    link: "https://twitter.com/hadescreeping",
    icon: <FaXTwitter className="h-6 w-6" />,
  },
  {
    label: "Upwork Profile",
    link: "https://www.upwork.com/freelancers/~01f3a7fb10a583411b?mp_source=share",
    icon: <FaSquareUpwork className="h-6 w-6" />,
  },
];

export default function NavDock() {
  return (
    <Dock>
      {iconData.map((item, index) => (
        <DockIcon key={index}>
          <Link href={item.link} target="_blank" aria-label={item.label}>
            {item.icon}
          </Link>
        </DockIcon>
      ))}
    </Dock>
  );
}
