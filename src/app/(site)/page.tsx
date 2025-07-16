import { MouseTrailDemo } from "@/components/MouseTrailDemo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, School } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GitHubCalendar from "react-github-calendar";

export const github: any = {
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

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

export const skills = [
  {
    category: "Programming Languages",
    icons: "js,ts,cs,go,py,solidity&perline=6",
  },
  {
    category: "Front-End Development",
    icons: "react,next,astro,svelte,vite,vue&perline=6",
  },
  {
    category: "Libraries",
    icons: "redux,bootstrap,tailwind,threejs,mui,sass&perline=6",
  },
  {
    category: "Back-End,Clouds,PaaS",
    icons: "prisma,firebase,aws,docker,dotnet,nodejs&perline=6",
  },
  {
    category: "Database Management",
    icons: "firebase,planetscale,postgres,mysql,mongo,supabase,&perline=6",
  },
  {
    category: "OS & Package Managers",
    icons: "windows,linux,npm,yarn,pnpm,bun&perline=6",
  },
];

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <section>
        {" "}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3 items-center justify-center rounded-full bg-primary"></span>
            <span className="absolute h-3 w-3 animate-ping rounded-full bg-primary opacity-75"></span>
            <p className="text-2xl">Available for hire</p>
          </div>
          <p className="flex items-center justify-center gap-1 text-2xl">
            <strong className="text-primary">{78}</strong> - Views
          </p>
        </div>
        <div className="flex  gap-5">
          {" "}
          <div className="text-2xl max-w-lg">
            <h1 className="mb-2 mt-5">
              👋 Hey there! I&apos;m{" "}
              <span className="text-primary">Masab Bin Zia.</span>
            </h1>
            <p className="mb-2 text-lg">Modern Full-Stack Engineer.</p>
            <p className="mb-2 text-lg">
              I’m currently learning Learning AI, Web3.0 & DevOps.
            </p>
            <p className="text">
              <span className="font-semibold text-primary dark:text-foreground">
                {" "}
                I&apos;m a Full Stack Developer with 3+ years
              </span>{" "}
              of experience in Web3.0, specializing in scalable web
              applications, microservices, token-based RESTful API servers, and
              API-driven solutions.
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

      <div className="mt-10">
        <h2 className="text-4xl text-primary font-bold flex items-center justify-between">
          Projects{" "}
          <span className="flex items-center gap-2">
            <Badge className="bg-primary/10 text-primary text-lg">Work</Badge>
            <Badge className="text-lg text-white" variant={"outline"}>
              Personal
            </Badge>
          </span>
        </h2>
        <section className="flex flex-col">
          {[1, 2, 3, 4].map((_, index) => (
            <Link href={""} key={index}>
              <Card className="w-full bg-transparent border border-primary/20 hover:bg-primary/5 transition-all group p-2 px-0 mt-2">
                <CardHeader className="flex flex-row gap-4 items-center px-0">
                  <img
                    src={
                      "https://masab-mbz-portfolio.vercel.app/_next/image?url=%2Ficons%2Fdinemarket.png&w=256&q=75"
                    }
                    alt={"title"}
                    className="h-10 w-10 ml-2"
                    width={200}
                    height={200}
                  />

                  <div className="w-full">
                    <div className="flex gap-4 items-center">
                      <CardTitle className="text-xl font-bold line-clamp-1 group-hover:text-primary transition-colors">
                        Project {index + 1}
                      </CardTitle>
                    </div>
                    <CardDescription className="flex justify-between items-center line-clamp-2 group-hover:text-primary/80 transition-colors">
                      Project {index + 1} description
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
          <Button
            className="mt-4 w-1/2 mx-auto bg-transparent hover:bg-primary/5 hover:text-primary transition-all"
            variant={"outline"}
          >
            View All
          </Button>
        </section>
      </div>

      <div className="mt-10">
        <h2 className="text-4xl text-primary font-bold">Experience</h2>
        <section className="flex flex-col">
          {[
            {
              company: "ChainVerse Labs",
              role: "Full Stack Engineer",
              period: "Feb/2024 - Feb/2025",
              location: "Karachi, Pakistan - Remote",
              logo: "/meta.png",
            },
            {
              company: "Bitxcels",
              role: "Frontend Engineer",
              period: "Sep/2023 - Sep/2024",
              location: "New York, USA - Remote",
              logo: "/wealthsimple.png",
            },
            {
              company: "Freelance",
              role: "Full Stack Developer",
              period: "Feb/2022 - Present",
              location: "Karachi, Pakistan - Remote",
              logo: "/freelance.png",
            },
          ].map((experience, index) => (
            <Card
              key={index}
              className="w-full bg-transparent border border-primary/20 hover:bg-primary/5 transition-all group p-2 px-0 mt-2"
            >
              <CardHeader className="flex flex-row gap-4 items-center px-0">
                <div className="h-10 w-10 ml-2 flex items-center justify-center">
                  <img
                    src={experience.logo}
                    alt={experience.company}
                    className="h-8 w-8 object-contain"
                    width={32}
                    height={32}
                  />
                </div>

                <div className="w-full">
                  <div className="flex gap-4 items-center justify-between">
                    <div>
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                        {experience.company}
                      </CardTitle>
                      <CardDescription className="text-base group-hover:text-primary/80 transition-colors flex items-center gap-2">
                        {experience.role}
                        <span className="text-sm text-primary/80 flex items-center gap-1">
                          <MapPin className="w-4 h-4 mb-2" />
                          {experience.location}
                        </span>
                      </CardDescription>
                    </div>
                    <Badge className="mr-4 bg-primary/10 text-primary border border-primary/10">
                      {experience.period}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </section>
      </div>

      <div className="mt-10">
        <h2 className="text-4xl text-primary font-bold">My Expertise</h2>
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-2 gap-5">
          {skills.map((skill, index) => (
            <div key={index}>
              <p className="mb-2 text-xl">{skill.category}</p>
              <img
                src={`https://skillicons.dev/icons?i=${skill.icons}`}
                alt={`${skill.category} icons`}
                className="max-h-none max-w-none"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-4xl text-primary font-bold">Career Goals</h2>
        <div className="grid mt-2 gap-2">
          {goals.map((goal, index) => (
            <Card
              key={index}
              className="w-full bg-transparent border border-primary/20 hover:bg-primary/5 transition-all group p-2 px-0 mt-2"
            >
              <CardHeader className="flex flex-row gap-4 items-center px-0">
                <div className="h-10 w-10 ml-2 flex items-center justify-center">
                  <School className="w-8 h-8" />
                </div>

                <div className="w-full">
                  <div className="flex gap-4 items-center justify-between">
                    <div>
                      <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors">
                        {goal.title}
                      </CardTitle>
                      <CardDescription className="text-base group-hover:text-primary/80 transition-colors">
                        {goal.descritpion}
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-4xl text-primary font-bold">
          How frequently I code
        </h2>
        <div className="dark:bg-primary-bg bg-secondary-bg hidden rounded-lg border border-primary/20 p-8 mt-4 lg:block">
          <GitHubCalendar
            username={"MasabBinZia"}
            blockSize={9}
            year={"last"}
          />
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-4xl text-primary font-bold">Connect with me</h2>
        <div className="mt-4">
          <MouseTrailDemo />
        </div>
      </div>
    </div>
  );
}
