import React from "react";

export default function Skills() {
  return (
    <section className="pt-10">
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max">
          My Expertise
        </h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <p>Programming Languages</p>
            <img
              src="https://skillicons.dev/icons?i=js,ts,cs,html,go,py,solidity,css"
              alt=""
            />
          </div>
          <div className="space-y-2">
            <p>Front-End Development</p>
            <img
              src="https://skillicons.dev/icons?i=react,next,astro,svelte,vite,vue&perline=8"
              alt=""
            />
          </div>
          <div className="space-y-2">
            <p>Libraies</p>
            <img
              src="https://skillicons.dev/icons?i=redux,bootstrap,tailwind,threejs,mui,sass,styledcomponents,tensorflow&perline=8"
              alt=""
            />
          </div>
          <div className="space-y-2">
            <p>Back-End,Clouds,PaaS</p>
            <img
              src="https://skillicons.dev/icons?i=supabase,prisma,firebase,aws,docker,heroku,express,vercel,fastapi,dotnet,nodejs,netlify,appwrite,gcp,kubernetes&perline=8"
              alt=""
            />
          </div>
          <div className="space-y-2">
            <p>Database Management</p>
            <img
              src="https://skillicons.dev/icons?i=firebase,planetscale,postgres,mysql,mongo&perline=8"
              alt=""
            />
          </div>
          <div className="space-y-2">
            <p>OS & Package Mangers</p>
            <img
              src="https://skillicons.dev/icons?i=windows,linux,ubuntu,npm,yarn,pnpm,bun&perline=8"
              alt=""
            />
          </div>
          <div className="space-y-2">
            <p>Design & Dev Tools</p>
            <img
              src="https://skillicons.dev/icons?i=figma,ps,notion,postman,vscode,visualstudio,svg,git&perline=8"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
