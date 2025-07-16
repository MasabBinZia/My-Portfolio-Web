import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ExternalLink, Github, Calendar, Tag } from "lucide-react";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "DineMarket",
      description:
        "A comprehensive food delivery platform with real-time ordering, payment integration, and restaurant management system.",
      image:
        "https://masab-mbz-portfolio.vercel.app/_next/image?url=%2Ficons%2Fdinemarket.png&w=256&q=75",
      type: "Work",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      date: "2024",
      status: "Live",
      github: "https://github.com/username/dinemarket",
      live: "https://dinemarket.com",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "Modern portfolio website built with Next.js, featuring responsive design, dark mode, and smooth animations.",
      image:
        "https://masab-mbz-portfolio.vercel.app/_next/image?url=%2Ficons%2Fdinemarket.png&w=256&q=75",
      type: "Personal",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      date: "2024",
      status: "Live",
      github: "https://github.com/username/portfolio",
      live: "https://yourportfolio.com",
    },
    {
      id: 3,
      title: "Task Management App",
      description:
        "Full-stack task management application with team collaboration features, real-time updates, and project tracking.",
      image:
        "https://masab-mbz-portfolio.vercel.app/_next/image?url=%2Ficons%2Fdinemarket.png&w=256&q=75",
      type: "Work",
      technologies: ["React", "Express.js", "PostgreSQL", "Socket.io"],
      date: "2023",
      status: "Live",
      github: "https://github.com/username/task-manager",
      live: "https://taskmanager.com",
    },
    {
      id: 4,
      title: "E-commerce Dashboard",
      description:
        "Admin dashboard for e-commerce management with analytics, inventory tracking, and sales reporting.",
      image:
        "https://masab-mbz-portfolio.vercel.app/_next/image?url=%2Ficons%2Fdinemarket.png&w=256&q=75",
      type: "Work",
      technologies: ["Vue.js", "Laravel", "MySQL", "Chart.js"],
      date: "2023",
      status: "In Development",
      github: "https://github.com/username/ecommerce-dashboard",
      live: null,
    },
    {
      id: 5,
      title: "Weather App",
      description:
        "Clean and intuitive weather application with location-based forecasts and interactive weather maps.",
      image:
        "https://masab-mbz-portfolio.vercel.app/_next/image?url=%2Ficons%2Fdinemarket.png&w=256&q=75",
      type: "Personal",
      technologies: ["React Native", "OpenWeather API", "AsyncStorage"],
      date: "2023",
      status: "Live",
      github: "https://github.com/username/weather-app",
      live: "https://weather-app.com",
    },
    {
      id: 6,
      title: "Blog Platform",
      description:
        "Full-featured blogging platform with markdown support, comment system, and SEO optimization.",
      image:
        "https://masab-mbz-portfolio.vercel.app/_next/image?url=%2Ficons%2Fdinemarket.png&w=256&q=75",
      type: "Personal",
      technologies: ["Next.js", "Prisma", "PostgreSQL", "MDX"],
      date: "2022",
      status: "Live",
      github: "https://github.com/username/blog-platform",
      live: "https://myblog.com",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="text-5xl font-bold mb-4 text-primary">My Projects</h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          Browse through my portfolio of projects and work. Each project
          represents a unique challenge and showcases different aspects of my
          development skills, from full-stack applications to mobile apps and
          everything in between.
        </p>
      </div>

      {/* Projects Section */}
      <div className="mt-10">
        <h2 className="text-4xl text-primary font-bold flex items-center justify-between mb-6">
          Projects{" "}
          <span className="flex items-center gap-2">
            <Badge className="bg-primary/10 text-primary text-lg">Work</Badge>
            <Badge className="text-lg text-white" variant={"outline"}>
              Personal
            </Badge>
          </span>
        </h2>

        <section className="flex flex-col">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="w-full bg-transparent border border-primary/20 hover:bg-primary/5 transition-all group p-0 px-0 mt-2"
            >
              <CardHeader className="flex flex-row gap-4 items-center p-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-20 w-20 ml-2 rounded-lg object-cover"
                  width={200}
                  height={200}
                />
                <div className="w-full">
                  <div className="flex gap-4 items-center mb-2">
                    <CardTitle className="text-xl font-bold line-clamp-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                      <Badge
                        className={`text-xs ${
                          project.type === "Work"
                            ? "bg-primary/10 text-primary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {project.type}
                      </Badge>
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          project.status === "Live"
                            ? "text-green-500 border-green-500"
                            : "text-yellow-500 border-yellow-500"
                        }`}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>

                  <CardDescription className="line-clamp-2 group-hover:text-primary/80 transition-colors mb-3">
                    {project.description}
                  </CardDescription>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {project.date}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Tag className="h-4 w-4" />
                        {project.technologies.slice(0, 2).join(", ")}
                        {project.technologies.length > 2 &&
                          ` +${project.technologies.length - 2}`}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="sm"
                          variant="ghost"
                          className="h-8 w-8 p-0 hover:bg-primary/10 hover:text-primary"
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      </Link>
                      {project.live && (
                        <Link
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button
                            size="sm"
                            variant="ghost"
                            className="h-8 w-8 p-0 hover:bg-primary/10 hover:text-primary"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}

          <Button
            className="mt-6 w-1/2 mx-auto bg-transparent hover:bg-primary/5 hover:text-primary transition-all"
            variant={"outline"}
          >
            View All Projects
          </Button>
        </section>
      </div>

      {/* Additional Info Section */}
      <div className="mt-16 p-6 rounded-lg bg-card/50 border border-primary/20">
        <h3 className="text-2xl font-bold mb-4 text-primary">
          Looking for Something Specific?
        </h3>
        <p className="text-muted-foreground mb-4">
          I'm always working on new projects and exploring different
          technologies. If you're interested in collaborating or have any
          questions about my work, feel free to reach out!
        </p>
        <div className="flex gap-4">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Get In Touch
          </Button>
          <Button
            variant="outline"
            className="hover:bg-primary/5 hover:text-primary"
          >
            View Resume
          </Button>
        </div>
      </div>
    </div>
  );
}
