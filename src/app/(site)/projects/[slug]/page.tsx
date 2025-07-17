import React from "react";

import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaGithub, FaGlobe } from "react-icons/fa6";
import {
  Calendar,
  Clock,
  Users,
  Target,
  Lightbulb,
  CheckCircle,
  AlertCircle,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import PageLayout from "@/components/layout/page-layout";

// Mock data - replace with your actual data source
const projects = {
  Myprojects: [
    {
      id: 1,
      slug: "dinemarket",
      title: "DineMarket",
      image:
        "https://masab-mbz-portfolio.vercel.app/_next/image?url=%2Ficons%2Fdinemarket.png&w=256&q=75",
      type: "Work",
      status: "Live",
      duration: "6 months",
      team: "4 developers",
      role: "Full Stack Developer",
      date: "2024",
      link: "https://dinemarket.com",
      github: "https://github.com/username/dinemarket",
      caseStudy:
        "DineMarket is a comprehensive food delivery platform designed to connect hungry customers with local restaurants. The platform features real-time order tracking, secure payment processing, restaurant management dashboards, and delivery driver coordination. Built with modern web technologies, it handles thousands of orders daily while maintaining excellent performance and user experience.",
      overview:
        "A full-featured food delivery application that streamlines the ordering process for customers while providing powerful management tools for restaurants and delivery partners.",
      objectives: [
        "Create an intuitive ordering experience for customers",
        "Provide restaurants with comprehensive order management",
        "Implement real-time tracking and notifications",
        "Ensure secure and fast payment processing",
        "Build scalable architecture for high traffic",
      ],
      features: [
        "Real-time order tracking",
        "Multi-restaurant ordering",
        "Integrated payment gateway",
        "Restaurant dashboard",
        "Delivery management system",
        "Push notifications",
        "Rating and review system",
        "Advanced search and filtering",
      ],
      stack: [
        { key: "react", element: "⚛️", name: "React" },
        { key: "nodejs", element: "🟢", name: "Node.js" },
        { key: "mongodb", element: "🍃", name: "MongoDB" },
        { key: "stripe", element: "💳", name: "Stripe" },
        { key: "socketio", element: "🔌", name: "Socket.io" },
        { key: "tailwind", element: "🎨", name: "Tailwind CSS" },
        { key: "jwt", element: "🔐", name: "JWT" },
        { key: "cloudinary", element: "☁️", name: "Cloudinary" },
      ],
      challenges: [
        {
          desc: "Implementing real-time order tracking across multiple user types (customers, restaurants, drivers)",
        },
        {
          desc: "Managing complex state synchronization between different dashboards",
        },
        {
          desc: "Handling high traffic during peak ordering hours",
        },
        {
          desc: "Integrating multiple payment gateways for different regions",
        },
        {
          desc: "Ensuring data consistency across distributed systems",
        },
      ],
      learnings: [
        {
          desc: "Mastered WebSocket implementation for real-time features",
        },
        {
          desc: "Learned advanced database optimization techniques for MongoDB",
        },
        {
          desc: "Gained experience with microservices architecture",
        },
        {
          desc: "Developed skills in payment gateway integration and security",
        },
        {
          desc: "Improved understanding of scalable system design patterns",
        },
      ],
      results: [
        "Achieved 40% faster order processing compared to competitors",
        "Reduced customer support tickets by 60% through intuitive UI",
        "Handled 10,000+ daily orders without performance issues",
        "Achieved 4.8/5 average user rating on app stores",
      ],
    },
    {
      id: 2,
      slug: "task-manager",
      title: "TaskFlow - Project Management System",
      image:
        "https://masab-mbz-portfolio.vercel.app/_next/image?url=%2Ficons%2Fdinemarket.png&w=256&q=75",
      type: "Work",
      status: "Live",
      duration: "4 months",
      team: "3 developers",
      role: "Lead Developer",
      date: "2023",
      link: "https://taskflow.com",
      github: "https://github.com/username/taskflow",
      caseStudy:
        "TaskFlow is a comprehensive project management system designed for modern teams. It combines task management, team collaboration, time tracking, and project analytics in one unified platform. The system supports agile methodologies with kanban boards, sprint planning, and burndown charts.",
      overview:
        "A powerful project management tool that helps teams organize, track, and deliver projects efficiently with real-time collaboration features.",
      objectives: [
        "Streamline project planning and execution",
        "Enable seamless team collaboration",
        "Provide comprehensive project analytics",
        "Support multiple project methodologies",
        "Integrate with popular development tools",
      ],
      features: [
        "Kanban boards with drag-and-drop",
        "Sprint planning and management",
        "Time tracking and reporting",
        "Team collaboration tools",
        "Project analytics dashboard",
        "File sharing and comments",
        "Custom workflows",
        "API integrations",
      ],
      stack: [
        { key: "react", element: "⚛️", name: "React" },
        { key: "typescript", element: "📘", name: "TypeScript" },
        { key: "express", element: "🚀", name: "Express.js" },
        { key: "postgresql", element: "🐘", name: "PostgreSQL" },
        { key: "redis", element: "🔴", name: "Redis" },
        { key: "socketio", element: "🔌", name: "Socket.io" },
        { key: "docker", element: "🐳", name: "Docker" },
        { key: "jest", element: "🃏", name: "Jest" },
      ],
      challenges: [
        {
          desc: "Building a flexible workflow system that adapts to different methodologies",
        },
        {
          desc: "Implementing complex drag-and-drop functionality with real-time sync",
        },
        {
          desc: "Managing large datasets efficiently for enterprise clients",
        },
        {
          desc: "Creating comprehensive analytics without impacting performance",
        },
      ],
      learnings: [
        {
          desc: "Advanced React patterns for complex state management",
        },
        {
          desc: "Database optimization for large-scale applications",
        },
        {
          desc: "Real-time collaboration implementation techniques",
        },
        {
          desc: "Performance optimization for data-heavy applications",
        },
      ],
      results: [
        "Improved team productivity by 35% for client organizations",
        "Reduced project delivery time by 25% on average",
        "Achieved 99.9% uptime over 12 months",
        "Successfully onboarded 500+ teams in first year",
      ],
    },
  ],
};

const myProcess = [
  {
    icon: "🔍",
    processTitle: "Research & Discovery",
  },
  {
    icon: "🎨",
    processTitle: "Design & Prototype",
  },
  {
    icon: "⚡",
    processTitle: "Development",
  },
  {
    icon: "🧪",
    processTitle: "Testing & QA",
  },
  {
    icon: "🚀",
    processTitle: "Launch & Deploy",
  },
  {
    icon: "📊",
    processTitle: "Monitor & Optimize",
  },
];

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const project = projects.Myprojects.find((project) => project.slug === slug);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }
  return {
    title: project.title,
    description: project.caseStudy,
    openGraph: {
      title: project.title,
      description: project.caseStudy,
    },
  };
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const project = projects.Myprojects.find((project) => project.slug === slug);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center text-center">
        <p className="text-4xl">Project not found</p>
        <Link
          href="/projects"
          className={`${buttonVariants({
            variant: "link",
          })} my-4 hover:text-foreground`}
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-4"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start mb-12">
          <img
            src={
              "https://masab-mbz-portfolio.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdinemarket.4d146fac.jpg&w=1080&q=75"
            }
            alt={project.title}
            className="rounded-lg object-cover w-full h-full"
            width={64}
            height={64}
          />
          <div></div>
        </div>

        {/* Project Hero Section */}
        <div className="flex flex-col gap-8 items-start mb-12">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={project.image || ""}
                alt={project.title}
                className="h-16 w-16 rounded-lg object-cover"
                width={64}
                height={64}
              />
              <div>
                <h1 className="text-4xl font-bold text-primary mb-2">
                  {project.title}
                </h1>
                <div className="flex items-center gap-2">
                  <Badge className="bg-primary/10 text-primary border border-primary/10">
                    {project.type}
                  </Badge>
                  <Badge
                    className={`${
                      project.status === "Live"
                        ? "bg-green-500/10 text-green-500 border-green-500/20"
                        : "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                    }`}
                  >
                    {project.status}
                  </Badge>
                </div>
              </div>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              {project.overview}
            </p>
          </div>

          <div className="flex gap-4">
            <Link
              href={project.link}
              target="_blank"
              className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <FaGlobe className="h-4 w-4" />
              Visit Site
              <ExternalLink className="h-4 w-4" />
            </Link>
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 bg-transparent border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors"
              >
                <FaGithub className="h-4 w-4" />
                GitHub
                <ExternalLink className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>

        {/* Project Meta Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <Card className="bg-transparent border border-primary/20 hover:bg-primary/5 transition-all group p-2 px-0">
            <CardHeader className="flex flex-row gap-4 items-center px-0">
              <div className="h-10 w-10 ml-2 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div className="w-full">
                <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                  Duration
                </CardTitle>
                <CardDescription className="text-base group-hover:text-primary/80 transition-colors">
                  {project.duration}
                </CardDescription>
              </div>
            </CardHeader>
          </Card>

          <Card className="bg-transparent border border-primary/20 hover:bg-primary/5 transition-all group p-2 px-0">
            <CardHeader className="flex flex-row gap-4 items-center px-0">
              <div className="h-10 w-10 ml-2 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <div className="w-full">
                <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                  Team Size
                </CardTitle>
                <CardDescription className="text-base group-hover:text-primary/80 transition-colors">
                  {project.team}
                </CardDescription>
              </div>
            </CardHeader>
          </Card>

          <Card className="bg-transparent border border-primary/20 hover:bg-primary/5 transition-all group p-2 px-0">
            <CardHeader className="flex flex-row gap-4 items-center px-0">
              <div className="h-10 w-10 ml-2 flex items-center justify-center">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <div className="w-full">
                <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                  Role
                </CardTitle>
                <CardDescription className="text-base group-hover:text-primary/80 transition-colors">
                  {project.role}
                </CardDescription>
              </div>
            </CardHeader>
          </Card>

          <Card className="bg-transparent border border-primary/20 hover:bg-primary/5 transition-all group p-2 px-0">
            <CardHeader className="flex flex-row gap-4 items-center px-0">
              <div className="h-10 w-10 ml-2 flex items-center justify-center">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div className="w-full">
                <CardTitle className="text-lg font-bold group-hover:text-primary transition-colors">
                  Year
                </CardTitle>
                <CardDescription className="text-base group-hover:text-primary/80 transition-colors">
                  {project.date}
                </CardDescription>
              </div>
            </CardHeader>
          </Card>
        </div>

        {/* Project Objectives */}
        <div className="mb-12">
          <h2 className="text-4xl text-primary font-bold mb-6">
            Project Objectives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.objectives.map((objective, index) => (
              <Card
                key={index}
                className="bg-transparent border border-primary/20 hover:bg-primary/5 transition-all group p-2 px-0"
              >
                <CardHeader className="flex flex-row gap-4 items-center px-0">
                  <div className="h-10 w-10 ml-2 flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                  </div>
                  <div className="w-full">
                    <CardDescription className="text-base group-hover:text-primary/80 transition-colors">
                      {objective}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-4xl text-primary font-bold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature, index) => (
              <Card
                key={index}
                className="bg-transparent border border-primary/20 hover:bg-primary/5 transition-all group p-2 px-0"
              >
                <CardHeader className="flex flex-row gap-4 items-center px-0">
                  <div className="h-10 w-10 ml-2 flex items-center justify-center">
                    <div className="h-3 w-3 bg-primary rounded-full"></div>
                  </div>
                  <div className="w-full">
                    <CardDescription className="text-base group-hover:text-primary/80 transition-colors">
                      {feature}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-4xl text-primary font-bold mb-6">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {project.stack.map((item, index) => (
              <TooltipProvider key={index} delayDuration={200}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card className="bg-transparent border border-primary/20 h-10 w-10 flex items-center justify-center p-0 px-0 hover:bg-primary/5 transition-all group text-center cursor-pointer">
                      <div className="text-xl mb-2">{item.element}</div>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>{item.key.toUpperCase()}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>

        {/* Case Study */}
        <div className="mb-12">
          <h2 className="text-4xl text-primary font-bold mb-6">Case Study</h2>
          <Card className="bg-transparent border border-primary/20 hover:bg-primary/5 transition-all group p-6">
            <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-primary/80 transition-colors">
              {project.caseStudy}
            </p>
          </Card>
        </div>

        {/* Development Process */}
        <div className="mb-12">
          <h2 className="text-4xl text-primary font-bold mb-6">
            Development Process
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {myProcess.map((step, index) => (
              <Card
                key={index}
                className="bg-transparent border border-primary/20 hover:bg-primary/5 transition-all group p-4 text-center"
              >
                <div className="text-4xl mb-3">{step.icon}</div>
                <p className="text-sm font-medium group-hover:text-primary transition-colors">
                  {step.processTitle}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Challenges & Learnings */}
        <div className="mb-12">
          <h2 className="text-4xl text-primary font-bold mb-6">
            Challenges & Learnings
          </h2>
          <div className="grid  gap-6">
            {/* Challenges */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-red-500 flex items-center gap-2">
                <AlertCircle className="h-6 w-6" />
                Challenges
              </h3>
              <div className="space-y-4">
                {project.challenges.map((challenge, index) => (
                  <Card
                    key={index}
                    className="bg-transparent border border-red-500/20 hover:bg-red-500/5 transition-all group p-2 px-0"
                  >
                    <CardHeader className="flex flex-row gap-4 items-center px-0">
                      <div className="h-10 w-10 ml-2 flex items-center justify-center">
                        <div className="h-3 w-3 bg-red-500 rounded-full"></div>
                      </div>
                      <div className="w-full">
                        <CardDescription className="text-base group-hover:text-red-500/80 transition-colors">
                          {challenge.desc}
                        </CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {/* Learnings */}
            <div>
              <h3 className="text-2xl font-bold mb-4 text-green-500 flex items-center gap-2">
                <Lightbulb className="h-6 w-6" />
                Learnings
              </h3>
              <div className="space-y-4">
                {project.learnings.map((learning, index) => (
                  <Card
                    key={index}
                    className="bg-transparent border border-green-500/20 hover:bg-green-500/5 transition-all group p-2 px-0"
                  >
                    <CardHeader className="flex flex-row gap-4 items-center px-0">
                      <div className="h-10 w-10 ml-2 flex items-center justify-center">
                        <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="w-full">
                        <CardDescription className="text-base group-hover:text-green-500/80 transition-colors">
                          {learning.desc}
                        </CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Results & Impact */}
        {project.results && (
          <div className="mb-12">
            <h2 className="text-4xl text-primary font-bold mb-6">
              Results & Impact
            </h2>
            <div className="grid gap-4">
              {project.results.map((result, index) => (
                <Card
                  key={index}
                  className="bg-transparent border border-primary/20 hover:bg-primary/5 transition-all group p-2 px-0"
                >
                  <CardHeader className="flex flex-row gap-4 items-center px-0">
                    <div className="h-10 w-10 ml-2 flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <div className="w-full">
                      <CardDescription className="text-base group-hover:text-primary/80 transition-colors">
                        {result}
                      </CardDescription>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Back to Projects */}
        <div className="text-center">
          <Link href="/projects">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-2">
              View More Projects
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
}
