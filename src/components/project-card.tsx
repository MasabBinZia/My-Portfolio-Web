import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './ui/card';
import { LinkPreview } from './ui/link-preview';
import Link from 'next/link';
import { Link2 } from 'lucide-react';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Separator } from './ui/separator';

export default function ProjectCard({
  title,
  desc,
  icons,
  projLink,
  githubLink,
  more,
}: any) {
  return (
    <Card className="lg:w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="text-gray-800 dark:text-gray-400">
          {desc}
        </CardDescription>
        <Separator className="my-4" />
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-center gap-2">
          {icons.slice(0, 5).map((icon: any, index: any) => (
            <span key={index}>{icon.element}</span>
          ))}
        </div>
        <Separator className="my-4" />
        <div className="flex items-center justify-center gap-10">
          <LinkPreview
            url={projLink}
            className="flex items-center justify-center gap-1 font-bold"
          >
            <Link2 className="h-6 w-6" />
            Link
          </LinkPreview>
          {githubLink ? (
            <Link
              href={githubLink}
              target="_blank"
              className="flex items-center justify-center gap-1"
            >
              <GitHubLogoIcon className="h-6 w-6" /> Github
            </Link>
          ) : (
            <></>
          )}
          <Link href={more}>More</Link>
        </div>
      </CardContent>
    </Card>
  );
}
