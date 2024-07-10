import { skills } from '@/data/config';
import React from 'react';

export default function Skills() {
  return (
    <section className="pt-10">
      <div className="w-full overflow-x-hidden">
        <h2 className="landingSectionTitle relative mx-0 mb-4 max-w-max text-left md:w-max">
          My Expertise
        </h2>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <p>{skill.category}</p>
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
