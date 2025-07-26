"use client";

import Image from "next/image";
import React from "react";
import { Preloaded, usePreloadedQuery } from "convex/react";
import { api } from "../../../convex/_generated/api";

interface HeroProps {
  preloadedHeroData: Preloaded<typeof api.queries.getProfile>;
}

export function Hero({ preloadedHeroData }: HeroProps) {
  const heroData = usePreloadedQuery(preloadedHeroData);

  return (
    <section>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {heroData?.availableForHire && (
            <>
              <span className="relative flex h-3 w-3 items-center justify-center rounded-full bg-[#00FF80]"></span>
              <span className="absolute h-3 w-3 animate-ping rounded-full bg-[#00FF80] opacity-75"></span>
            </>
          )}
          <p className="text-2xl">
            {heroData?.availableForHire
              ? "Available for hire"
              : "Currently unavailable"}
          </p>
        </div>
        <p className="flex items-center justify-center gap-1 text-2xl">
          <strong className="text-[#00FF80]">{heroData?.viewCount}</strong> -
          Views
        </p>
      </div>
      <div className="flex gap-5">
        <div className="text-2xl max-w-lg">
          <h1 className="mb-2 mt-5">
            {heroData?.title}
            <span className="text-[#00FF80]">{heroData?.name}</span>
          </h1>
          <p className="mb-2 text-lg">Modern Full-Stack Engineer.</p>
          <p className="mb-2 text-lg">
            I'm currently learning Learning AI, Web3.0 & DevOps.
          </p>
          <p className="text">
            <span className="font-semibold text-[#00FF80] dark:text-foreground">
              I&apos;m a Full Stack Developer with 3+ years
            </span>{" "}
            of experience in Web3.0, specializing in scalable web applications,
            microservices, token-based RESTful API servers, and API-driven
            solutions.
          </p>
        </div>
        <Image
          src={"/pfp.jpeg"}
          alt={"profile"}
          className="h-40 w-60 mt-4 border rounded-lg object-cover"
          width={1000}
          height={1000}
        />
      </div>
    </section>
  );
}
