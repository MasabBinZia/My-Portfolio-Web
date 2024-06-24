import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/config";
import PageHeader from "@/components/page-header";
import PageLayout from "@/components/page-layout";

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

export default function page({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const project = projects.Myprojects.find((project) => project.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-center">
        <p className="text-4xl ">Project not found</p>
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
      <div className="flex flex-wrap justify-center items-center">
        <Image
          src={project.image || ""}
          placeholder="blur"
          alt={project.title}
          className="rounded-3xl"
          width={"1000"}
          height={"1000"}
        />
        <div className="flex justify-center my-10 gap-10">
          <Link
            href={project.link}
            target="_blank"
            className=" text-xl flex justify-center items-center gap-1 hover:text-foreground"
          >
            Visit Site
          </Link>
          {project.github ? (
            <Link
              href={project.github}
              target="_blank"
              className="text-xl flex justify-center items-center gap-1 hover:text-foreground"
            >
              Source Code
            </Link>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="flex justify-between items-center gap-6 my-12">
        <div>
          <h2 className="text-xl">My Role</h2>
          <p>Software Engineer</p>
        </div>
        <div>
          <h2 className="text-xl">Start Date</h2>
          <p>10/08/2022</p>
        </div>
        <div>
          <h2 className="text-xl">End Date</h2>
          <p>20/08/2022</p>
        </div>
      </div>
      <div className="my-12">
        <h2 className="text-xl">Tech Stack</h2>
        <div className="flex flex-wrap gap-6 my-4">
          {project.stack.map((item, index) => (
            <TooltipProvider key={index} delayDuration={200}>
              <Tooltip>
                <TooltipTrigger asChild className="hover:text-foreground">
                  {item.element}
                </TooltipTrigger>
                <TooltipContent>{item.key.toUpperCase()}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>
      <article className="prose lg:prose-xl my-12">
        <h2>Case Study</h2>
        <p className="dark:text-gray-400">{project.caseStudy}</p>
      </article>
      <div className="my-12">
        <h2 className="text-xl">My Process</h2>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-10 items-center my-6 px-10">
          {project.myProcess.map((step, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <Button
                variant={"outline"}
                className="w-24 h-24 rounded-full flex justify-center items-center"
              >
                {step.icon}
              </Button>
              <p className="text-lg my-2">{step.processTitle}</p>
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
                    className="flex justify-start items-center my-1"
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
                    className="flex justify-start items-center my-1"
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
