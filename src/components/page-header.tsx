import Link from 'next/link';
import React from 'react';

type PageHeaderProps = {
  link: string;
  title: string;
  desc: string;
};

export default function PageHeader({ link, title, desc }: PageHeaderProps) {
  return (
    <section className="w-full overflow-x-hidden">
      <Link
        href={link}
        className="animate-slide-from-down-and-fade-1 group mb-4 flex cursor-pointer flex-row items-center space-x-2 md:px-2"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          className="text-secondaryDarker rotate-180 duration-200 group-hover:-translate-x-1"
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
      <h1 className="landingSectionTitle relative mx-0 mb-4 max-w-max text-left text-3xl md:w-max">
        {title}
      </h1>
      <p className="text-lg">{desc}</p>
    </section>
  );
}
