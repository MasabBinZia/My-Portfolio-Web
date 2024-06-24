import Link from "next/link";
import React from "react";

type PageHeaderProps = {
  link: string;
  title: string;
  desc: string;
};

export default function PageHeader({ link, title, desc }: PageHeaderProps) {
  return (
    <section className="overflow-x-hidden w-full">
      <Link
        href={link}
        className="flex flex-row space-x-2 items-center md:px-2 group cursor-pointer mb-4 animate-slide-from-down-and-fade-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className="text-secondaryDarker group-hover:-translate-x-1 duration-200 rotate-180"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M1.25 8A.75.75 0 0 1 2 7.25h10.19L9.47 4.53a.75.75 0 0 1 1.06-1.06l4 4a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 1 1-1.06-1.06l2.72-2.72H2A.75.75 0 0 1 1.25 8"
            clipRule="evenodd"
          />
        </svg>
        <span className="text-secondaryDarker">Back</span>
      </Link>
      <h1 className="landingSectionTitle max-w-max mx-0 text-left text-3xl relative mb-4 md:w-max">
        {title}
      </h1>
      <p className="text-lg">{desc}</p>
    </section>
  );
}
