"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { validEmail } from "@/lib/utils";
import { ProfileForm } from "@/components/admin/profile-admin";
import { ExperienceManager } from "@/components/admin/experience-admin";
import { SkillsManager } from "@/components/admin/skills-admin";
import { GoalsManager } from "@/components/admin/goals-admin";
import { SocialLinksManager } from "@/components/admin/socials-admin";
import ProjectManager from "@/components/admin/project-admin";

export default function AdminPage() {
  const { user, isLoaded } = useUser();
  const isAuthorized = user?.primaryEmailAddress?.emailAddress === validEmail;

  return (
    <>
      <>
        <UserButton />
        {isAuthorized ? (
          <div className="p-4">
            <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
            {/* <ProfileForm /> */}
            {/* <ExperienceManager /> */}
            {/* <SkillsManager /> */}
            {/* <GoalsManager /> */}
            {/* <SocialLinksManager /> */}
            <ProjectManager />
          </div>
        ) : (
          <div className="p-4">
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4 text-red-700 dark:text-red-400">
                Unauthorized Access
              </h2>
              <p className="text-red-600 dark:text-red-300">
                Sorry, only masabmbz5@gmail.com is authorized to access this
                admin area.
              </p>
            </div>
          </div>
        )}
      </>
    </>
  );
}
