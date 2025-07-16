"use client";
import { useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MoonIcon,
  SunIcon,
  HomeIcon,
  FolderIcon,
  MessageCircleIcon,
  ExternalLinkIcon,
  Magnet,
} from "lucide-react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { UserButton, useAuth } from "@clerk/nextjs";
import { ThemeToggle } from "./theme-toggle";

const siteNavItems = [
  { label: "Home", href: "/", icon: HomeIcon },
  // { label: "About", href: "/about", icon: PackageIcon },
  { label: "Projects", href: "/projects", icon: FolderIcon },
  { label: "Contact", href: "/contact", icon: MessageCircleIcon },
  // { label: "Blog", href: "/blog", icon: BookIcon },
];

export function SiteNavbar() {
  const pathname = usePathname();
  const { userId } = useAuth();

  return (
    <nav className="w-full border-b border-border/40 bg-card/50 backdrop-blur-sm rounded-2xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-lg font-bold text-foreground flex items-center gap-2"
          >
            <Magnet size={16} />
            Masab.dev
          </Link>

          {/* Tab-style Navigation */}
          <div className="flex items-center">
            {siteNavItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                      flex items-center gap-2 px-3 py-2 text-sm font-medium transition-all duration-200 rounded-none hover:bg-none hover:border-b-2 hover:border-primary hover:text-primary
                      ${
                        isActive
                          ? "border-b-2 border-primary text-primary shadow-sm"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      }
                    `}
                >
                  <Icon size={16} />
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Auth and Theme Toggle */}
          <div className="flex items-center gap-4">
            <span>
              {" "}
              <ThemeToggle />
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function AdminNavbar() {
  return (
    <nav className="w-full border-b border-border/40 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/admin" className="text-xl font-bold text-foreground">
            Admin Dashboard
          </Link>

          <div className="flex items-center gap-8">
            {/* View Site Link */}
            <Link
              href="/"
              className="flex items-center gap-2 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted/50"
            >
              <ExternalLinkIcon size={16} />
              View Site
            </Link>

            {/* User Button and Theme Toggle */}
            <div className="flex items-center gap-4">
              <UserButton afterSignOutUrl="/" />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
