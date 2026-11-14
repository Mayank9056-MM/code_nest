"use client";

import React, { useState } from "react";
import { Code2, Play, Sparkles, Terminal, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const SHOWCASE_TABS = [
  {
    id: "write",
    title: "1. Write Code",
    icon: Code2,
    badge: "Monaco Core",
    description: "Industry-standard Monaco Editor with multi-cursor, syntax highlighting, and file explorer.",
    code: `// src/api/routes.ts
import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono();
app.use("*", cors());

app.get("/api/v1/metrics", (c) => {
  return c.json({
    status: "healthy",
    uptime: process.uptime(),
    runtime: "WebContainer-NodeJS",
    timestamp: new Date().toISOString(),
  });
});

export default app;`,
    file: "src/api/routes.ts",
    terminal: "$ npx tsc --noEmit\n✓ 0 type errors found in 42ms\n$ vitest run\n✓ routes.test.ts (3 tests passed)",
  },
  {
    id: "run",
    title: "2. Run Instantly",
    icon: Play,
    badge: "WebContainers",
    description: "Full Node.js runtime executing directly in the client browser with microsecond boots and no remote VMs.",
    code: `// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    headers: {
      "Cross-Origin-Embedder-Policy": "require-corp",
      "Cross-Origin-Opener-Policy": "same-origin",
    },
  },
});`,
    file: "vite.config.ts",
    terminal: "$ npm run dev\n> vite dev --host\n\n  VITE v5.4.2  ready in 128 ms\n\n  ➜  Local:   http://localhost:3000/\n  ➜  Network: use --host to expose\n  ➜  press h + enter to show help",
  },
  {
    id: "ai",
    title: "3. AI Assistance",
    icon: Sparkles,
    badge: "Context Aware",
    description: "Inline autocompletion tuned to your project files, framework semantics, and current cursor position.",
    code: `// src/hooks/useMetrics.ts
import { useState, useEffect } from "react";

export function useMetrics(pollIntervalMs = 5000) {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);

  // [AI Completion]: Suggests optimal polling effect with cleanup
  useEffect(() => {
    let active = true;
    const fetchStats = async () => {
      const res = await fetch("/api/v1/metrics");
      const data = await res.json();
      if (active) setMetrics(data);
      setLoading(false);
    };
    fetchStats();
    const interval = setInterval(fetchStats, pollIntervalMs);
    return () => { active = false; clearInterval(interval); };
  }, [pollIntervalMs]);

  return { metrics, loading };
}`,
    file: "src/hooks/useMetrics.ts",
    terminal: "[AI Suggestion Engine]: Analyzed imports, hook pattern and cursor depth.\n[AI Autocomplete]: Suggested React polling effect with interval cleanup.\n[Action]: Press Tab to insert suggestion.",
  },
];

export function ProductShowcase() {
  const [activeTabId, setActiveTabId] = useState("write");
  const activeTab = SHOWCASE_TABS.find((t) => t.id === activeTabId) || SHOWCASE_TABS[0];

  return (
    <section id="showcase" className="py-20 border-t border-[#2B332E] bg-[#0D0F0E]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-[#C5F36B] mb-2 flex items-center gap-1.5">
              <span>// Product Workflow</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-[#F2F5F2]">
              From idea to running application in seconds
            </h2>
          </div>
          <p className="text-sm text-[#9BA59E] max-w-md font-mono leading-relaxed">
            Zero cloud compute lag. Code editing, command execution, and live hot reloading run
            100% inside your browser environment.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6">
          {SHOWCASE_TABS.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === activeTabId;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTabId(tab.id)}
                className={`flex flex-col items-start p-4 rounded-lg border text-left transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#141715] border-[#C5F36B] text-[#F2F5F2] shadow-xs"
                    : "bg-[#141715]/40 border-[#2B332E] text-[#9BA59E] hover:border-[#9BA59E]/40 hover:text-[#F2F5F2]"
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <div className="flex items-center gap-2">
                    <Icon className={`h-4 w-4 ${isActive ? "text-[#C5F36B]" : "text-[#9BA59E]"}`} />
                    <span className="font-mono text-xs font-semibold">{tab.title}</span>
                  </div>
                  <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                    isActive ? "bg-[#C5F36B]/15 text-[#C5F36B]" : "bg-[#1B201D] text-[#9BA59E]"
                  }`}>
                    {tab.badge}
                  </span>
                </div>
                <p className="text-xs text-[#9BA59E] leading-relaxed line-clamp-2">
                  {tab.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Interactive Code & Terminal Stage */}
        <div className="rounded-xl border border-[#2B332E] bg-[#141715] overflow-hidden shadow-xl">
          <div className="flex items-center justify-between px-4 py-2 border-b border-[#2B332E] bg-[#0D0F0E] text-xs font-mono text-[#9BA59E]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#C5F36B]" />
              <span className="text-[#F2F5F2]">{activeTab.file}</span>
            </div>
            <Link
              href="/dashboard"
              className="hover:text-[#C5F36B] transition-colors flex items-center gap-1 text-[11px]"
            >
              <span>Test in sandbox</span>
              <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 bg-[#0D0F0E]">
            {/* Editor Syntax Box */}
            <div className="lg:col-span-8 p-4 font-mono text-xs text-[#9BA59E] overflow-x-auto border-b lg:border-b-0 lg:border-r border-[#2B332E] leading-relaxed">
              <pre className="text-[#F2F5F2] font-mono whitespace-pre">{activeTab.code}</pre>
            </div>

            {/* Terminal Live Output */}
            <div className="lg:col-span-4 p-4 font-mono text-[11px] text-[#9BA59E] bg-[#141715] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-[#9BA59E]/60 mb-2">
                  <Terminal className="h-3 w-3 text-[#C5F36B]" />
                  <span>Virtual Execution log</span>
                </div>
                <pre className="text-[#9BA59E] whitespace-pre-wrap leading-relaxed">
                  {activeTab.terminal}
                </pre>
              </div>

              <div className="pt-4 border-t border-[#2B332E] mt-4 flex items-center justify-between text-[11px]">
                <span className="text-[#9BA59E]">Speed: <span className="text-[#C5F36B]">Instant (0ms cold start)</span></span>
                <span className="text-[#9BA59E]">RAM: <span className="text-[#F2F5F2]">Client sandbox</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
