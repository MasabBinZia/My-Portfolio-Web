import React from "react";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="p-6 lg:p-20 max-w-4xl m-auto w-full">{children}</main>
  );
}
