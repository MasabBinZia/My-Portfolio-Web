"use client";

import { Authenticated } from "convex/react";
import { UserButton, useUser } from "@clerk/nextjs";
import { validEmail } from "@/lib/utils";
import { redirect } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  User,
  Briefcase,
  Code,
  Target,
  Share2,
  FolderOpen,
  MessageSquare,
  HelpCircle,
  Calendar,
  BarChart3,
} from "lucide-react";
import { ProfileForm } from "@/components/admin/profile-admin";
import { ExperienceManager } from "@/components/admin/experience-admin";
import { SkillsManager } from "@/components/admin/skills-admin";
import { GoalsManager } from "@/components/admin/goals-admin";
import { SocialLinksManager } from "@/components/admin/socials-admin";
import ProjectManager from "@/components/admin/project-admin";
import ContactAdmin from "@/components/admin/contact-admin";

export default function AdminPage() {
  const { user, isLoaded } = useUser();

  // Redirect to sign-in if not authenticated
  if (isLoaded && !user) {
    redirect("/sign-in");
  }

  const isAuthorized = user?.primaryEmailAddress?.emailAddress === validEmail;

  return (
    <>
      {isAuthorized ? (
        <div className="min-h-screen max-w-7xl mx-auto">
          {isAuthorized ? (
            <div className=" px-4 py-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-3xl font-bold">Admin Dashboard</h1>
                  <p className="text-gray-300 mt-2">
                    Manage your portfolio content and settings
                  </p>
                </div>
                <UserButton />
              </div>

              <Tabs defaultValue="overview" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4 bg-transparent">
                  <TabsTrigger
                    value="overview"
                    className="flex items-center gap-2"
                  >
                    <BarChart3 className="h-4 w-4" />
                    Overview
                  </TabsTrigger>
                  <TabsTrigger
                    value="profile"
                    className="flex items-center gap-2"
                  >
                    <User className="h-4 w-4" />
                    Profile
                  </TabsTrigger>
                  <TabsTrigger
                    value="experience"
                    className="flex items-center gap-2"
                  >
                    <Briefcase className="h-4 w-4" />
                    Experience
                  </TabsTrigger>
                  <TabsTrigger
                    value="skills"
                    className="flex items-center gap-2"
                  >
                    <Code className="h-4 w-4" />
                    Skills
                  </TabsTrigger>
                  <TabsTrigger
                    value="goals"
                    className="flex items-center gap-2"
                  >
                    <Target className="h-4 w-4" />
                    Goals
                  </TabsTrigger>
                  <TabsTrigger
                    value="social"
                    className="flex items-center gap-2"
                  >
                    <Share2 className="h-4 w-4" />
                    Social
                  </TabsTrigger>
                  <TabsTrigger
                    value="projects"
                    className="flex items-center gap-2"
                  >
                    <FolderOpen className="h-4 w-4" />
                    Projects
                  </TabsTrigger>
                  <TabsTrigger
                    value="contact"
                    className="flex items-center gap-2"
                  >
                    <MessageSquare className="h-4 w-4" />
                    Contact
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  {/* <DashboardStats /> */}
                </TabsContent>

                <TabsContent value="profile" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <User className="h-5 w-5" />
                        Profile Management
                      </CardTitle>
                      <CardDescription>
                        Manage your personal information and profile details
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ProfileForm />
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="experience" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Briefcase className="h-5 w-5" />
                        Work Experience
                      </CardTitle>
                      <CardDescription>
                        Add, edit, and manage your professional experience
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ExperienceManager />
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="skills" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Code className="h-5 w-5" />
                        Skills & Technologies
                      </CardTitle>
                      <CardDescription>
                        Manage your technical skills and technology stack
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <SkillsManager />
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="goals" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="h-5 w-5" />
                        Goals & Objectives
                      </CardTitle>
                      <CardDescription>
                        Set and manage your professional goals
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <GoalsManager />
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="social" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Share2 className="h-5 w-5" />
                        Social Media Links
                      </CardTitle>
                      <CardDescription>
                        Manage your social media presence and links
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <SocialLinksManager />
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="projects" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FolderOpen className="h-5 w-5" />
                        Projects Portfolio
                      </CardTitle>
                      <CardDescription>
                        Showcase your work and manage project details
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ProjectManager />
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="contact" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MessageSquare className="h-5 w-5" />
                        Contact Submissions
                      </CardTitle>
                      <CardDescription>
                        View and manage incoming contact form submissions
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ContactAdmin />
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          ) : (
            <div className="min-h-screen flex items-center justify-center">
              <Card className="w-full max-w-md">
                <CardHeader>
                  <CardTitle className="text-center text-red-600">
                    Unauthorized Access
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">
                    Sorry, only masabmbz5@gmail.com is authorized to access this
                    admin area.
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
