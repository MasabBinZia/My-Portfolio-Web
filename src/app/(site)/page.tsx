import {
  Hero,
  Projects,
  Experience,
  Skills,
  Goals,
  GithubStats,
  Connect,
} from "@/components/home";
import { preloadQuery } from "convex/nextjs";
import { api } from "../../../convex/_generated/api";

export default async function HomePage() {
  const preloadedHeroData = await preloadQuery(api.queries.getProfile);
  const preloadedProjectsData = await preloadQuery(api.queries.getAllProjects);
  const preloadedExperienceData = await preloadQuery(
    api.queries.getAllExperience
  );
  const preloadedSkillsData = await preloadQuery(api.queries.getAllSkills);
  const preloadedGoalsData = await preloadQuery(api.queries.getAllGoals);
  return (
    <div className="container mx-auto px-4 py-12">
      <Hero preloadedHeroData={preloadedHeroData} />
      <Projects preloadedProjectsData={preloadedProjectsData} />
      <Experience preloadedExperienceData={preloadedExperienceData} />
      <Skills preloadedSkillsData={preloadedSkillsData} />
      <Goals preloadedGoalsData={preloadedGoalsData} />
      <GithubStats />
      <Connect />
    </div>
  );
}
