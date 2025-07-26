"use client";
import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { School } from "lucide-react";
import { Preloaded, usePreloadedQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

export const goals = [
  {
    title: "Innovate Startups",
    descritpion: "Launch multiple AI-driven startups and SaaS solutions.",
  },
  {
    title: "Pioneer Technology",
    descritpion: "Develop platforms for today's and tomorrow's challenges.",
  },
  {
    title: "Boost Efficiency",
    descritpion:
      "Remain committed to learning and hungry for new tech advancements.",
  },
  {
    title: "Continuous Learning",
    descritpion:
      "Remain committed to learning and hungry for new tech advancements.",
  },
];

interface GoalsProps {
  preloadedGoalsData: Preloaded<typeof api.queries.getAllGoals>;
}

export default function Goals({ preloadedGoalsData }: GoalsProps) {
  const goalsData = usePreloadedQuery(preloadedGoalsData);
  return (
    <div className="mt-10">
      <h2 className="text-4xl text-[#00FF80] font-bold">Career Goals</h2>
      <div className="grid mt-2 gap-2">
        {goalsData.map((goal, index) => (
          <Card
            key={index}
            className="w-full bg-transparent border border-[#00FF80]/20 hover:bg-[#00FF80]/5 transition-all group p-2 px-0 mt-2"
          >
            <CardHeader className="flex flex-row gap-4 items-center px-0">
              <div className="h-10 w-10 ml-2 flex items-center justify-center">
                <School className="w-8 h-8" />
              </div>

              <div className="w-full">
                <div className="flex gap-4 items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold group-hover:text-[#00FF80] transition-colors">
                      {goal.title}
                    </CardTitle>
                    <CardDescription className="text-base group-hover:text-[#00FF80]/80 transition-colors">
                      {goal.description}
                    </CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
}
