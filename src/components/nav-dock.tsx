import React from "react";

import { Dock, DockIcon } from "@/components/ui/dock";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter, FaSquareUpwork } from "react-icons/fa6";

export type IconProps = React.HTMLAttributes<SVGElement>;
export default function NavDock() {
  return (
    <Dock>
      <DockIcon>
        <Link
          href="https://github.com/MasabBinZia"
          target="_blank"
          aria-label="GitHub Profile"
        >
          <FaGithub className="h-6 w-6" />
        </Link>
      </DockIcon>
      <DockIcon>
        <Link
          href="https://www.linkedin.com/in/masabbinzia"
          target="_blank"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin className="h-6 w-6" />
        </Link>
      </DockIcon>
      <DockIcon>
        <Link
          href="https://twitter.com/hadescreeping"
          target="_blank"
          aria-label="Twitter Profile"
        >
          <FaXTwitter className="h-6 w-6" />
        </Link>
      </DockIcon>
      <DockIcon>
        <Link
          href="https://www.upwork.com/freelancers/~01f3a7fb10a583411b?mp_source=share"
          target="_blank"
          aria-label="Upwork Profile"
        >
          <FaSquareUpwork className="h-6 w-6" />
        </Link>
      </DockIcon>
    </Dock>
  );
}
