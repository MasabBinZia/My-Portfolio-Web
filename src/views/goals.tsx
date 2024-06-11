import React from "react";

export default function Goals() {
  const goals = [
    {
      title: "Innovate Startups",
      description: "Launch multiple AI-driven startups and SaaS solutions.",
    },
    {
      title: "Pioneer Technology",
      description:
        "Develop platforms for today&apos;s and tomorrow&apos;s challenges.",
    },
    {
      title: "Boost Efficiency",
      description: "Enhance business efficiency and customization.",
    },
    {
      title: "Continuous Learning",
      description:
        "Remain committed to learning and hungry for new tech advancements.",
    },
  ];

  return (
    <section className="pt-10">
      <div className="overflow-x-hidden w-full">
        <h2 className="landingSectionTitle max-w-max mx-0 text-left relative mb-4 md:w-max">
          Career Goals
        </h2>
        <div>
          <ul className="list-disc">
            {goals.map((goal, index) => (
              <li key={index}>
                <span className="font-semibold text-green-800 darK:text-green-600 pr-2">
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
