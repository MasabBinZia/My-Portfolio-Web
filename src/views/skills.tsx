import React from "react";

const skills = [
  {
    category: "Programming Languages",
    icons: "js,ts,cs,html,go,py,solidity,css",
  },
  {
    category: "Front-End Development",
    icons: "react,next,astro,svelte,vite,vue&perline=8",
  },
  {
    category: "Libraries",
    icons:
      "redux,bootstrap,tailwind,threejs,mui,sass,styledcomponents,tensorflow&perline=8",
  },
  {
    category: "Back-End,Clouds,PaaS",
    icons:
      "supabase,prisma,firebase,aws,docker,heroku,express,vercel,fastapi,dotnet,nodejs,netlify,appwrite,gcp,kubernetes&perline=8",
  },
  {
    category: "Database Management",
    icons: "firebase,planetscale,postgres,mysql,mongo&perline=8",
  },
  {
    category: "OS & Package Managers",
    icons: "windows,linux,ubuntu,npm,yarn,pnpm,bun&perline=8",
  },
  {
    category: "Design & Dev Tools",
    icons: "figma,ps,notion,postman,vscode,visualstudio,svg,git&perline=8",
  },
];

export default function Skills() {
  return (
    <section className="pt-10">
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max">
          My Expertise
        </h2>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <p>{skill.category}</p>
              <img
                src={`https://skillicons.dev/icons?i=${skill.icons}`}
                alt={`${skill.category} icons`}
                className="max-w-none max-h-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
