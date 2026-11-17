import React from "react";
import { FolderPlus, Code2, Eye, ArrowRight } from "lucide-react";
import Link from "next/link";

const STEPS = [
  {
    step: "01",
    icon: FolderPlus,
    title: "Create a project",
    description:
      "Select a starter from verified templates—React, Next.js, Express, Vue, Hono, or Angular—or connect a GitHub repository.",
    details: "Zero package install wait times. WebContainers initializes filesystem in under 200 milliseconds.",
  },
  {
    step: "02",
    icon: Code2,
    title: "Build with CodeNest",
    description:
      "Write code inside the Monaco editor. Trigger context-aware inline AI completions with Tab, manage files, and execute shell scripts.",
    details: "Built-in TypeScript diagnostics, syntax tree parsing, and instant local saving.",
  },
  {
    step: "03",
    icon: Eye,
    title: "Preview application",
    description:
      "Observe changes immediately with local port forwarding and Hot Module Replacement inside an isolated browser viewport.",
    details: "Interactive DOM inspection, live error overlays, and active terminal output logging.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 border-t border-[#2B332E] bg-[#141715]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-[#C5F36B] mb-2 flex items-center justify-center gap-1.5">
            <span>{"// Three-Step Execution"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F5F2]">
            How CodeNest works
          </h2>
          <p className="mt-3 text-sm text-[#9BA59E] leading-relaxed font-normal">
            A frictionless path from local inspiration to fully functioning web application.
          </p>
        </div>

        {/* 3 Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 relative">
          {STEPS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="p-6 rounded-lg border border-[#2B332E] bg-[#0D0F0E] flex flex-col justify-between relative group hover:border-[#9BA59E]/50 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-mono font-bold text-[#C5F36B]">
                      {item.step}
                    </span>
                    <div className="h-8 w-8 rounded-md bg-[#1B201D] border border-[#2B332E] flex items-center justify-center text-[#F2F5F2]">
                      <Icon className="h-4 w-4 text-[#C5F36B]" />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold text-[#F2F5F2] tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs text-[#9BA59E] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#2B332E]/60 text-[11px] font-mono text-[#9BA59E]/80">
                  {item.details}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Bottom Bar */}
        <div className="mt-10 flex items-center justify-center">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#C5F36B] hover:text-[#D6FF83] transition-colors"
          >
            <span>Launch your first project now</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
