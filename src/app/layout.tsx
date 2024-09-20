import "./globals.css";
import type { Metadata } from "next";
import { Be_Vietnam_Pro as Vite } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import SmoothScrolling from "@/components/smooth-scrolling";
import ProgressBar from "@/components/progress-bar";
import { Toaster } from "@/components/ui/sonner";
import ContactPopOver from "@/components/contact-pop-over";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { metadata as generatedMetadata } from "@/data/meta-data";

const vite = Vite({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = generatedMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
        <script
          src="https://beamanalytics.b-cdn.net/beam.min.js"
          data-token="81406a2b-5290-4d6f-b4ca-bd31fe459c92"
          async
        ></script>
      </head>
      <body className={vite.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SpeedInsights />
          <SmoothScrolling>
            <ProgressBar />
            {children}
            <Toaster position="top-center" expand={true} />
            <ContactPopOver />
          </SmoothScrolling>
        </ThemeProvider>
      </body>
    </html>
  );
}
