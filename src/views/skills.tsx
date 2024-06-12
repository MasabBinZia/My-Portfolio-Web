import { skills } from "@/data/config";
import React from "react";

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
