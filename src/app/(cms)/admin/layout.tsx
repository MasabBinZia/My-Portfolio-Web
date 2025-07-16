import { AdminNavbar } from "@/components/layout/navbar";
import PageLayout from "@/components/layout/page-layout";
import { validEmail } from "@/lib/utils";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = await auth();
  const user = await currentUser();

  if (!userId || user?.emailAddresses[0]?.emailAddress !== validEmail) {
    redirect("/");
  }

  return (
    <PageLayout>
      <AdminNavbar />
      <main className="flex-1 p-4">{children}</main>
    </PageLayout>
  );
}
