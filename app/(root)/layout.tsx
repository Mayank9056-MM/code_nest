import React from "react";
import { Navbar } from "@/modules/home/components/Navbar";
import { Footer } from "@/modules/home/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodeNest — In-Browser Cloud IDE & Code Editor",
  description:
    "Build, run and experiment with web applications directly in your browser. Powered by WebContainers, Monaco Editor, and intelligent code assistance.",
  openGraph: {
    title: "CodeNest — In-Browser Cloud IDE & Code Editor",
    description: "Build, run and experiment with web applications directly in your browser.",
    type: "website",
    siteName: "CodeNest",
  },
};

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#0D0F0E] text-[#F2F5F2] flex flex-col selection:bg-[#C5F36B] selection:text-[#0D0F0E]">
      <Navbar />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
}
