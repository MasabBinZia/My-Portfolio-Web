"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { validEmail } from "@/lib/utils";

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

            <div className="grid gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">
                  Welcome to your Admin Panel
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  This is your secure admin area. Only you (masabmbz5@gmail.com)
                  can access this page.
                </p>
              </div>
            </div>
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
