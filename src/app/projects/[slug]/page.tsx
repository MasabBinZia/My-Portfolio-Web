import PageHeader from "@/components/page-header";
import PageLayout from "@/components/page-layout";
import React from "react";

export default function page({ params }: { params: { slug: string } }) {
  return (
    <PageLayout>
      <PageHeader
        title="Dine Market"
        desc="Dine Market is an e-commerce project developed for the PIAIC hackathon."
        link="/projects"
      />
      <img src="" alt="" />
    </PageLayout>
  );
}
