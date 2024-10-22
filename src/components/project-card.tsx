import React from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { LinkPreview } from "./ui/link-preview";
import Link from "next/link";
import { LinkIcon } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
import { Badge } from "./ui/badge";

type ProjectCardProps = {
  title: string;
  desc: string;
  projLink: string;
  githubLink?: string;
  more: string;
  icon: string;
  isPersonalProject?: boolean;
  cardType: "featured" | "normal";
};

export default function ProjectCard({
  title,
  desc,
  projLink,
  githubLink,
  more,
  icon,
  isPersonalProject,
  cardType,
}: ProjectCardProps) {
  return (
    <Link href={more} className="w-full">
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
            <div className="flex gap-4 items-center">
              <CardTitle className="text-xl font-bold">{title}</CardTitle>
              {cardType === "normal" ? (
                <Badge className="mr-20">
                  {isPersonalProject ? "Personal" : "Work"}
                </Badge>
              ) : (
                <></>
              )}
            </div>
            <CardDescription className="text-gray-800 dark:text-gray-400 flex justify-between items-center">
            
                {desc}
           

              {/* <div className="flex items-center justify-end gap-2">
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
              </div> */}
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}
