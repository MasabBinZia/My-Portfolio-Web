import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { myProcess, projects } from "@/data/config";
import PageHeader from "@/components/page-header";
import PageLayout from "@/components/page-layout";
import NoImg from "../../../../public/noImgPlaceholder.webp";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { FaGlobe } from "react-icons/fa6";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const project = projects.Myprojects.find((project) => project.slug === slug);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }
  return {
    title: project.title,
    description: project.caseStudy,
    openGraph: {
      title: project.title,
      description: project.caseStudy,
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = projects.Myprojects.find((project) => project.slug === slug);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center text-center">
        <p className="text-4xl">Project not found</p>
        <Link
          href="/"
          className={`${buttonVariants({
            variant: "link",
          })} my-4 hover:text-foreground`}
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <PageLayout>
      <PageHeader title={project.title} desc="" link="/projects" />
      <div className="flex flex-wrap items-center justify-center">
        <Image
          src={project.image || NoImg}
          placeholder="blur"
          alt={project.title}
          className="rounded-3xl"
          width={"1000"}
          height={"1000"}
        />
        <div className="my-10 flex justify-center gap-10">
          <Link
            href={project.link}
            target="_blank"
            className="flex items-center justify-center gap-1 text-lg hover:text-foreground"
          >
            <FaGlobe className="h-5 w-5 hover:text-white" />
            Visit Site
          </Link>
          {project.github ? (
            <Link
              href={project.github}
              target="_blank"
              className="flex items-center justify-center gap-1 text-lg hover:text-foreground"
            >
              <GitHubLogoIcon className="h-5 w-5 hover:text-white" />
              Github
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="my-12">
        <h2 className="text-xl">Tech Stack</h2>
        <div className="my-4 flex flex-wrap gap-6">
          {project.stack.map((item, index) => (
            <TooltipProvider key={index} delayDuration={200}>
              <Tooltip>
                <TooltipTrigger
                  asChild
                  className="cursor-pointer hover:text-foreground"
                >
                  {item.element}
                </TooltipTrigger>
                <TooltipContent>{item.key.toUpperCase()}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
      <article className="prose my-12 lg:prose-xl">
        <h2>Case Study</h2>
        <p className="dark:text-gray-400">{project.caseStudy}</p>
      </article>
      <div className="my-12">
        <h2 className="text-xl">My Process</h2>
        <div className="my-6 grid grid-cols-2 items-center gap-5 px-10 lg:grid-cols-3 lg:gap-10">
          {myProcess.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center"
            >
              <Button
                variant={"outline"}
                className="flex h-24 w-24 items-center justify-center rounded-full"
              >
                {step.icon}
              </Button>
              <p className="my-2 text-lg">{step.processTitle}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="my-12">
        <h2 className="text-xl">Challenges & Learnings</h2>
        <Card className="my-6 bg-foreground/10">
          <CardHeader>
            <CardTitle>
              <p className="text-orange-600">CHALLENGES</p>
            </CardTitle>
            <CardDescription className="my-2">
              <ul className="list-disc pl-5">
                {project.challenges.map((challenge, index) => (
                  <li
                    key={index}
                    className="my-1 flex items-center justify-start"
                  >
                    {challenge.desc}
                  </li>
                ))}
              </ul>
            </CardDescription>
          </CardHeader>
        </Card>

        <Card className="my-6 bg-foreground/10">
          <CardHeader>
            <CardTitle>
              <p className="text-green-600">LEARNINGS</p>
            </CardTitle>
            <CardDescription className="my-2">
              <ul className="list-disc pl-5">
                {project.learnings.map((learning, index) => (
                  <li
                    key={index}
                    className="my-1 flex items-center justify-start"
                  >
                    {learning.desc}
                  </li>
                ))}
              </ul>
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </PageLayout>
  );
}
