import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { LinkPreview } from "./ui/link-preview";
import Link from "next/link";
import { Link2, LinkIcon } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import Image from "next/image";


type ProjectCardProps = {
  title: string;
  desc: string;
  projLink: string;
  githubLink?: string;
  more: string;
  icon: string;
};



export default function ProjectCard({
  title,
  desc,
  projLink,
  githubLink,
  more,
  icon
}: ProjectCardProps) {
  return (
    <Card className="w-full bg-transparent border-none hover:bg-gray-200 dark:hover:bg-secondary shadow-none">
      <CardHeader className="flex flex-row gap-4 items-center">
        <Image
          src={icon}
          alt={title}
          className="h-20 w-20 ml-2"
          width={200}
          height={200}
        />

        <div className="w-full">
          <CardTitle>{title}</CardTitle>
          <CardDescription className="text-gray-800 dark:text-gray-400 flex justify-between items-center">
            <p className="line-clamp-1 lg:line-clamp-0 md:line-clamp-0 max-w-sm">
              {desc}
            </p>

            <div className="flex items-center justify-end gap-2">
              <LinkPreview
                url={projLink}
                className={cn(
                  buttonVariants({ variant: "link", size: "icon" })
                )}
              >
                <LinkIcon className="h-6 w-6" />
              </LinkPreview>
              {githubLink ? (
                <Link
                  href={githubLink}
                  target="_blank"
                  className={cn(
                    buttonVariants({ variant: "link", size: "icon" })
                  )}
                >
                  <GitHubLogoIcon className="h-6 w-6 hover:text-white" />
                </Link>
              ) : (
                <></>
              )}
              <Link
                href={more}
                className={cn(
                  buttonVariants({ variant: "link", size: "icon" })
                )}
              >
                More
              </Link>
            </div>
          </CardDescription>
        </div>
      </CardHeader>
    </Card>
  );
}
