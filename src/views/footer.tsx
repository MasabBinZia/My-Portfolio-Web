import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer>
      <Separator className="w-full my-6" />
      <p>
        Build by
        <Subheading link="/" title="Masab Bin Zia" />
        with
        <Subheading link="https://nextjs.org" title="Next.js" />,
        <Subheading link="https://tailwindcss.com" title="TailwindCss" />,
        <Subheading link="https://ui.shadcn.com" title="Shadcn UI" />
        and
        <Subheading
          link="https://www.framer.com/motion"
          title="Framer Motion"
        />
        .
      </p>
      <p>
        For source code{" "}
        <Subheading
          link="https://github.com/MasabBinZia/My-Portfolio-Web"
          title="Github"
        />
      </p>
      <Separator className="w-full my-6" />
      {/* <p className="flex justify-end">spotify</p> */}
    </footer>
  );
}

export function Subheading({ link, title }: { link: string; title: string }) {
  return (
    <Link href={link} target="_blank">
      <span className="font-bold text-foreground px-1 hover:underline">
        {title}
      </span>
    </Link>
  );
}
