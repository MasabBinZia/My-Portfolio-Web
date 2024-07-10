import { goals } from '@/data/config';
import React from 'react';

export default function Goals() {
  return (
    <section className="pt-10">
      <div className="w-full overflow-x-hidden">
        <h2 className="landingSectionTitle relative mx-0 mb-4 max-w-max text-left md:w-max">
          Career Goals
        </h2>
        <div>
          <ul className="list-disc">
            {goals.map((goal, index) => (
              <li key={index}>
                <span className="darK:text-green-600 pr-2 font-semibold text-green-800">
                  {goal.title}:
                </span>
                {goal.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
