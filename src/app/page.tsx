import GitHubCalendarSection from "@/components/github-calender";
import { ReportView } from "@/components/view";
import Contact from "@/views/contact";
import Goals from "@/views/goals";
import { Header } from "@/views/header";
import Projects from "@/views/projects";
import Skills from "@/views/skills";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export default function Home() {
  const views = redis.mget<number[]>("pageviews");
  return (
    <main className="p-6 lg:p-20 max-w-4xl m-auto w-full">
      <Header views={views ?? 0} />
      <ReportView />
      <Projects />
      <Skills />
      <Goals />
      <GitHubCalendarSection />
      {/* <Contact /> */}
    </main>
  );
}
