import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/project-card";
import { projects } from "@/data/config";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Projects() {
  return (
    <section>
      <div className="w-full overflow-x-hidden">
        <h2 className="landingSectionTitle relative mx-0 mb-4 max-w-max text-left md:w-max">
          {projects.title}
        </h2>
        <p className="text-lg">{projects.desc}</p>
        <div className="mt-4 flex flex-col items-center justify-center">
          <Tabs defaultValue="myproj" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="myproj">My Projects</TabsTrigger>
              <TabsTrigger value="workproj">Work Projects</TabsTrigger>
            </TabsList>
            <TabsContent
              value="myproj"
              className="grid grid-cols-2 justify-center items-center gap-2"
            >
              {projects.Myprojects.filter((proj) => proj.isPersonalProject).slice(0,4).map(
                (proj, index) => (
                  <ProjectCard
                    key={index}
                    title={proj.title}
                    desc={proj.description}
                    icon={proj.icon}
                    projLink={proj.link}
                    githubLink={proj.github}
                    more={`/projects/${proj.slug}`}
                    cardType="featured"
                  />
                )
              )}
            </TabsContent>
            <TabsContent
              value="workproj"
              className="flex flex-col justify-center items-center gap-2"
            >
              {projects.Myprojects.slice(4, 8).map((proj, index) => (
                <ProjectCard
                  key={index}
                  title={proj.title}
                  desc={proj.description}
                  icon={proj.icon}
                  projLink={proj.link}
                  more={`/projects/${proj.slug}`}
                  cardType="featured"
                />
              ))}
            </TabsContent>
          </Tabs>
          <Link
            href={"/projects"}
            className={`${buttonVariants({
              variant: "outline",
              size: "lg",
            })} my-4 w-1/2`}
          >
            View all
          </Link>
        </div>
      </div>
    </section>
  );
}
