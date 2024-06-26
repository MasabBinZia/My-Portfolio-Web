import type { Metadata } from "next";
import { Be_Vietnam_Pro as Vite } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import SmoothScrolling from "@/components/smooth-scrolling";
import ProgressBar from "@/components/progress-bar";
import { Toaster } from "@/components/ui/sonner";
import ContactPopOver from "@/components/contact-pop-over";
import { SpeedInsights } from "@vercel/speed-insights/next";

const vite = Vite({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  metadataBase: new URL("https://masab-mbz-portfolio.vercel.app"),
  keywords: [
    "Full-Stack Developer",
    "Masab Bin Zia Full Stack Developer",
    "Web3.0 technologies developer",
    "Modern Full Stack Development",
    "Token-based Restful API servers",
    "API-driven solutions expert",
    "Scalable web applications developer",
    "Microservices architectures",
    "React and Next.js developer",
    "Mobile development with React Native and Expo",
    "Supabase and Prisma back-end solutions",
    "Firebase and Hasura cloud integration",
    "AWS and Netlify deployment",
    "Docker and Vercel expert",
    "FastAPI development",
    "Headless CMS integration",
    "Contentful, Strapi, WooCommerce, Shopify",
    "Airtable and Sanity integration",
    "Prismic CMS solutions",
    "Faunadb and MongoDB management",
    "Supabase Postgres and Firestore expert",
    "SQL and Planet-Scale DB",
    "AI integration with ChatGPT API",
    "Gemini and Claude AI applications",
    "AI-driven startups and SaaS solutions",
    "Innovating startups with AI",
    "Pioneering technology developer",
    "Enhancing business efficiency",
    "Continuous learning in tech",
  ],
  title: {
    default: "Masab Bin Zia - Modern Full-Stack Engineer",
    template: `%s | Masab Bin Zia`,
  },
  description:
    "I'm a Full Stack Developer with 3+ years of experience in Web3.0, specializing in scalable web applications, microservices, token-based RESTful API servers, and API-driven solutions.",
  openGraph: {
    title: "Masab Bin Zia",
    description:
      "I'm a Full Stack Developer with 3+ years of experience in Web3.0, specializing in scalable web applications, microservices, token-based RESTful API servers, and API-driven solutions.",
    url: "https://masab-mbz-portfolio.vercel.app",
    siteName: "Masab Bin Zia",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

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
