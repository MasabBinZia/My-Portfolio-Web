'use client';

import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import pfp from '../../public/pfp.jpg';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import NavDock from '@/components/nav-dock';

export function Hero({ views }: { views: any }) {
  const { setTheme } = useTheme();

  return (
    <header className="mb-20">
      <div className="flex w-full flex-row items-center justify-between">
        <div className="relative h-20 w-20 overflow-hidden rounded-full">
          <Image
            src={pfp}
            placeholder="blur"
            priority
            className="h-20 w-20"
            alt="mbz"
          />
        </div>
        <NavDock />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme('light')}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('dark')}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme('system')}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="relative flex h-3 w-3 items-center justify-center rounded-full bg-sky-500"></span>
          <span className="absolute h-3 w-3 animate-ping rounded-full bg-sky-400 opacity-75"></span>
          <p className="">Available for hire</p>
        </div>
        <p className="flex items-center justify-center gap-1">
          <strong className="text-foreground">{views}</strong> - Views
        </p>
      </div>
      <div className="">
        <h1 className="mb-2 mt-5">👋 Hey there! I&apos;m Masab Bin Zia.</h1>
        <p className="mb-2 text-lg">Modern Full-Stack Engineer.</p>
        <p className="mb-2 text-lg">
          I’m currently learning Learning AI, Web3.0 & DevOps.
        </p>
        <p className="text">
          <span className="font-semibold text-black dark:text-foreground">
            {' '}
            I&apos;m a Full Stack Developer with 3+ years
          </span>{' '}
          of experience in Web3.0, specializing in scalable web applications,
          microservices, token-based RESTful API servers, and API-driven
          solutions.
        </p>
      </div>
    </header>
  );
}
