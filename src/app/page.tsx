import GitHubCalendarSection from "@/components/github-calender";
import { ReportView } from "@/components/view";
import Goals from "@/views/goals";
import Projects from "@/views/projects";
import Skills from "@/views/skills";
import { Redis } from "@upstash/redis";
import PageLayout from "@/components/page-layout";
import { Hero } from "@/views/hero";
import Footer from "@/views/footer";

const redis = Redis.fromEnv();

export default function Home() {
  const views = redis.mget<number[]>("pageviews");
  return (
    <PageLayout>
      <Hero views={views ?? 0} />
      <ReportView />
      <Projects />
      <Skills />
      <Goals />
      <GitHubCalendarSection />
      <Footer />
    </PageLayout>
  );
}
