import type { Metadata } from "next";
import { Be_Vietnam_Pro as Vite } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import SmoothScrolling from "@/components/smooth-scrolling";
import ProgressBar from "@/components/progress-bar";
import ScrollToTop from "@/components/scroll-to-top";
import { Toaster } from "@/components/ui/sonner";

const vite = Vite({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: " Masab Bin Zia - Modern Full-Stack Engineer",
  description:
    "I'm a Full Stack Developer with 3+ years of experience in Web3.0, specializing in scalable web applications, microservices, token-based RESTful API servers, and API-driven solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={vite.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScrolling>
            <ProgressBar />
            {children}
            <Toaster />
            <ScrollToTop />
          </SmoothScrolling>
        </ThemeProvider>
      </body>
    </html>
  );
}
