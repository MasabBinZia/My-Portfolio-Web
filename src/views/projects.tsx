import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/project-card";
import { projects } from "@/data/config";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Projects() {
  return (
    <section>
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max">
          {projects.title}
        </h2>
        <p className="text-lg">{projects.desc}</p>
        <div className="flex flex-col justify-center items-center mt-4">
          <Tabs defaultValue="myproj" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="myproj">My Projects</TabsTrigger>
              <TabsTrigger value="workproj">Work Projects</TabsTrigger>
            </TabsList>
            <TabsContent
              value="myproj"
              className="grid md:grid-cols-2 gap-2 lg:grid-cols-2"
            >
              {projects.Myprojects.slice(0, 3).map((proj, index) => (
                <ProjectCard
                  key={index}
                  title={proj.title}
                  desc={proj.description}
                  icons={proj.stack}
                  projLink={proj.link}
                  githubLink={proj.github}
                  more={`/projects/${proj.slug}`}
                />
              ))}
            </TabsContent>
            <TabsContent
              value="workproj"
              className="grid md:grid-cols-2 gap-2 lg:grid-cols-2"
            >
              {projects.Myprojects.slice(3, 7).map((proj, index) => (
                <ProjectCard
                  key={index}
                  title={proj.title}
                  desc={proj.description}
                  icons={proj.stack}
                  projLink={proj.link}
                  more={`/projects/${proj.slug}`}
                />
              ))}
            </TabsContent>
          </Tabs>
          {/* <PdfDownloadButton /> */}
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
