"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";
import { MapPin } from "lucide-react";
import { Badge } from "../ui/badge";
import { Preloaded, usePreloadedQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

interface ExperienceProps {
  preloadedExperienceData: Preloaded<typeof api.queries.getAllExperience>;
}

export default function Experience({
  preloadedExperienceData,
}: ExperienceProps) {
  const experienceData = usePreloadedQuery(preloadedExperienceData);
  return (
    <div className="mt-10">
      <h2 className="text-4xl text-[#00FF80] font-bold">Experience</h2>
      <section className="flex flex-col">
        {experienceData.map((experience, index) => (
          <Card
            key={index}
            className="w-full bg-transparent border border-[#00FF80]/20 hover:bg-[#00FF80]/5 transition-all group p-2 px-0 mt-2"
          >
            <CardHeader className="flex flex-row gap-4 items-center px-0">
              <div className="h-20 w-20 ml-2 flex items-center justify-center">
                <img
                  src={experience.logo}
                  alt={experience.company}
                  className="h-20 w-20 object-contain"
                  width={32}
                  height={32}
                />
              </div>

              <div className="w-full">
                <div className="flex gap-4 items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold group-hover:text-[#00FF80] transition-colors">
                      {experience.company}
                    </CardTitle>
                    <CardDescription className="text-base group-hover:text-[#00FF80]/80 transition-colors flex items-center gap-2">
                      {experience.role}
                      <span className="text-sm text-[#00FF80]/80 flex items-center gap-1">
                        <MapPin className="w-4 h-4 mb-2" />
                        {experience.location}
                      </span>
                    </CardDescription>
                  </div>
                  <Badge className="mr-4 bg-[#00FF80]/10 text-[#00FF80] border border-[#00FF80]/10">
                    {experience.period}
                  </Badge>
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}
      </section>
    </div>
  );
}
