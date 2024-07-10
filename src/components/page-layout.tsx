import React from 'react';

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="m-auto w-full max-w-4xl p-6 lg:p-20">{children}</main>
  );
}
