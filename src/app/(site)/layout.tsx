import { SiteNavbar } from "@/components/layout/navbar";
import PageLayout from "@/components/layout/page-layout";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PageLayout>
      <SiteNavbar />
      <main className="flex-1">{children}</main>
    </PageLayout>
  );
}
