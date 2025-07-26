"use client";
import React from "react";
import { Badge } from "../ui/badge";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { Button } from "../ui/button";
import { Preloaded, usePreloadedQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

interface ProjectsProps {
  preloadedProjectsData: Preloaded<typeof api.queries.getRecentProjects>;
}

export default function Projects({ preloadedProjectsData }: ProjectsProps) {
  const projectsData = usePreloadedQuery(preloadedProjectsData);
  return (
    <div className="mt-10">
      <h2 className="text-4xl text-[#00FF80] font-bold flex items-center justify-between">
        Projects{" "}
        <span className="flex items-center gap-2">
          <Badge className="bg-[#00FF80]/10 text-[#00FF80] text-lg">Work</Badge>
          <Badge className="text-lg text-white" variant={"outline"}>
            Personal
          </Badge>
        </span>
      </h2>
      <section className="flex flex-col">
        {projectsData.map((project, index) => (
          <Link href={""} key={index}>
            <Card className="w-full bg-transparent border border-[#00FF80]/20 hover:bg-[#00FF80]/5 transition-all group p-2 px-0 mt-2">
              <CardHeader className="flex flex-row gap-4 items-center px-0">
                <img
                  src={
                    "https://masab-mbz-portfolio.vercel.app/_next/image?url=%2Ficons%2Fdinemarket.png&w=256&q=75"
                  }
                  alt={"title"}
                  className="h-10 w-10 ml-2"
                  width={200}
                  height={200}
                />

                <div className="w-full">
                  <div className="flex gap-4 items-center">
                    <CardTitle className="text-xl font-bold line-clamp-1 group-hover:text-[#00FF80] transition-colors">
                      {project.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="flex justify-between items-center line-clamp-2 group-hover:text-[#00FF80]/80 transition-colors">
                    {project.overview}
                  </CardDescription>
                </div>
              </CardHeader>
            </Card>
          </Link>
        ))}
        <Button
          className="mt-4 w-1/2 mx-auto bg-transparent hover:bg-[#00FF80]/5 hover:text-[#00FF80] transition-all"
          variant={"outline"}
        >
          View All
        </Button>
      </section>
    </div>
  );
}
