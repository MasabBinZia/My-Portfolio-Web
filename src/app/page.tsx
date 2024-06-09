import GitHubCalendarSection from "@/components/github-calender";
import Contact from "@/views/contact";
import Goals from "@/views/goals";
import Projects from "@/views/projects";
import Skills from "@/views/skills";


export default function Home() {
  return (
    <>
      <Projects />
      <Skills/>
      <Goals/>
      <GitHubCalendarSection/>
      <Contact/>
    </>
  );
}
