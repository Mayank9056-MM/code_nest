import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Cpu } from "lucide-react";

const FRAMEWORKS = [
  {
    name: "React",
    slug: "REACT",
    tagline: "Vite + TypeScript",
    description: "Component-driven user interfaces with fast refresh and modular architecture.",
    icon: "/react.svg",
    bootTime: "~120ms",
    stack: "Vite 5 / React 18 / TypeScript",
  },
  {
    name: "Next.js",
    slug: "NEXTJS",
    tagline: "Full-Stack Web App",
    description: "Server-side rendering, API routes, and optimized React architecture in the browser.",
    icon: "/nextjs-icon.svg",
    bootTime: "~210ms",
    stack: "Next.js App Router / React",
  },
  {
    name: "Hono",
    slug: "HONO",
    tagline: "Ultrafast Web Standards",
    description: "Lightweight, ultrafast web framework built on Web Standards. Great for APIs and microservices.",
    icon: "/hono.svg",
    bootTime: "~90ms",
    stack: "Node.js / Hono / Web Fetch API",
  },
  {
    name: "Express",
    slug: "EXPRESS",
    tagline: "Node.js REST API",
    description: "Classic robust web server for building JSON APIs, middlewares, and backend logic.",
    icon: "/expressjs-icon.svg",
    bootTime: "~110ms",
    stack: "Node.js / Express / REST",
  },
  {
    name: "Vue.js",
    slug: "VUE",
    tagline: "Vite + Vue 3",
    description: "Progressive JavaScript framework with Composition API and Single File Components.",
    icon: "/vuejs-icon.svg",
    bootTime: "~130ms",
    stack: "Vue 3 / Vite / TypeScript",
  },
  {
    name: "Angular",
    slug: "ANGULAR",
    tagline: "Enterprise Framework",
    description: "Full-featured client framework with dependency injection and typed reactive forms.",
    icon: "/angular-2.svg",
    bootTime: "~240ms",
    stack: "Angular CLI / TypeScript",
  },
];

export function FrameworkGrid() {
  return (
    <section id="frameworks" className="py-20 border-t border-[#2B332E] bg-[#0D0F0E]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#C5F36B] mb-2 flex items-center gap-1.5">
              <span>// Verified Runtime Support</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F2F5F2]">
              Native framework templates
            </h2>
          </div>
          <p className="text-sm text-[#9BA59E] font-mono max-w-md leading-relaxed">
            Every starter template is verified to boot cleanly in WebContainers with zero configuration.
          </p>
        </div>

        {/* 6 Framework Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FRAMEWORKS.map((fw) => (
            <div
              key={fw.name}
              className="group p-5 rounded-lg border border-[#2B332E] bg-[#141715] hover:border-[#9BA59E]/40 hover:bg-[#1B201D] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="h-9 w-9 relative flex items-center justify-center p-1.5 rounded-md bg-[#0D0F0E] border border-[#2B332E]">
                    <Image
                      src={fw.icon}
                      alt={`${fw.name} logo`}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <span className="text-[10px] font-mono text-[#9BA59E] bg-[#0D0F0E] px-2 py-0.5 rounded border border-[#2B332E]">
                    Boot: {fw.bootTime}
                  </span>
                </div>

                <div className="flex items-baseline gap-2">
                  <h3 className="text-base font-semibold text-[#F2F5F2]">{fw.name}</h3>
                  <span className="text-[11px] font-mono text-[#9BA59E]">{fw.tagline}</span>
                </div>

                <p className="mt-2 text-xs text-[#9BA59E] leading-relaxed">
                  {fw.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#2B332E]/60 flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#9BA59E]/70 truncate max-w-[200px]">
                  {fw.stack}
                </span>
                <Link
                  href="/dashboard"
                  className="text-xs font-mono text-[#C5F36B] hover:text-[#D6FF83] flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Launch</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
