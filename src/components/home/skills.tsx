"use client";

import React from "react";
import { Preloaded, usePreloadedQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export const skills = [
  {
    category: "Programming Languages",
    icons: "js,ts,cs,go,py,solidity&perline=6",
  },
  {
    category: "Front-End Development",
    icons: "react,next,astro,svelte,vite,vue&perline=6",
  },
  {
    category: "Libraries",
    icons: "redux,bootstrap,tailwind,threejs,mui,sass&perline=6",
  },
  {
    category: "Back-End,Clouds,PaaS",
    icons: "prisma,firebase,aws,docker,dotnet,nodejs&perline=6",
  },
  {
    category: "Database Management",
    icons: "firebase,planetscale,postgres,mysql,mongo,supabase,&perline=6",
  },
  {
    category: "OS & Package Managers",
    icons: "windows,linux,npm,yarn,pnpm,bun&perline=6",
  },
];

interface SkillsProps {
  preloadedSkillsData: Preloaded<typeof api.queries.getAllSkills>;
}

export default function Skills({ preloadedSkillsData }: SkillsProps) {
  const skillsData = usePreloadedQuery(preloadedSkillsData);
  return (
    <div className="mt-10">
      <h2 className="text-4xl text-[#00FF80] font-bold">My Expertise</h2>
      <div className="w-full grid md:grid-cols-2 lg:grid-cols-2 gap-5">
        {skillsData.map((skill, index) => (
          <div key={index}>
            <p className="mb-2 text-xl">{skill.category}</p>
            <img
              src={`https://skillicons.dev/icons?i=${skill.icons}`}
              alt={`${skill.category} icons`}
              className="max-h-none max-w-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
