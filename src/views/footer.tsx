import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="px-4 sm:px-6 lg:px-8">
      <Separator className="mb-6 w-full" />
      <div className="flex flex-col gap-4 text-sm sm:text-base">
        <p className="flex flex-wrap items-center gap-1">
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
        <p className="flex flex-wrap items-center gap-1">
          For source code{' '}
          <Subheading
            link="https://github.com/MasabBinZia/My-Portfolio-Web"
            title="Github"
          />
        </p>
      </div>
      <Separator className="my-6 w-full" />
      {/* <p className="flex justify-end">spotify</p> */}
    </footer>
  );
}

export function Subheading({ link, title }: { link: string; title: string }) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <span className="font-bold text-foreground hover:underline">{title}</span>
    </Link>
  );
}
