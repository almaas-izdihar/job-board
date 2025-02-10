import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

import "./globals.css";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jobs Board",
  description: "Find and apply jobs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />

        <main className="px-4 pb-20">{children}</main>
      </body>
    </html>
  );
}

function NavBar() {
  return (
    <header>
      <nav className="flex flex-wrap gap-4 justify-between p-4 bg-primary text-white">
        <Link href="/" className="flex gap-2 items-center">
          <Image
            src="/jobs-briefcase.png"
            alt="Jobs Briefcase"
            width={40}
            height={40}
            className="size-8 sm:size-10"
            priority
          />
          <h1 className="font-black text-xl sm:text-3xl">Jobs Board</h1>
        </Link>

        <ul className="flex items-center gap-4 sm:gap-8">
          <li>
            <Link href="/">All Jobs</Link>
          </li>
          <li>
            <Button asChild variant="secondary">
              <Link href="/new">Add New Job</Link>
            </Button>
          </li>
        </ul>
      </nav>

      <div className="p-4">
        <form method="get" action="/search">
          <div className="flex gap-2">
            <Input name="keyword" type="search" placeholder="Search jobs..." />
            <Button>
              <SearchIcon />
              Search
            </Button>
          </div>
        </form>
      </div>
    </header>
  );
}
