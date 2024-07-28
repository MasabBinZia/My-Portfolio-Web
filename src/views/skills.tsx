import { skills } from "@/data/config";
import React from "react";

export default function Skills() {
  return (
    <section className="pt-10">
      <div className="w-full overflow-x-hidden">
        <h2 className="landingSectionTitle relative mx-0 mb-4 max-w-max text-left md:w-max">
          My Expertise
        </h2>
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-2 gap-5">
          {skills.map((skill, index) => (
            <div key={index}>
              <p className="mb-2">{skill.category}</p>
              <img
                src={`https://skillicons.dev/icons?i=${skill.icons}`}
                alt={`${skill.category} icons`}
                className="max-h-none max-w-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
