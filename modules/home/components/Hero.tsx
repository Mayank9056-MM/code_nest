"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Terminal, Sparkles, Check, Copy } from "lucide-react";

export function Hero() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"code" | "terminal">("code");

  const copyCommand = () => {
    navigator.clipboard.writeText("npx codenest-cli init");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col items-center text-center">
        {/* Subtle Terminal Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2B332E] bg-[#141715] text-[#9BA59E] text-xs font-mono mb-8 hover:border-[#C5F36B]/40 transition-colors">
          <span className="flex h-1.5 w-1.5 rounded-full bg-[#C5F36B] animate-pulse" />
          <span className="text-[#F2F5F2]">CodeNest v2.0</span>
          <span className="text-[#2B332E]">•</span>
          <span>WebContainers + Monaco Runtime</span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F2F5F2] max-w-4xl leading-[1.08]">
          Your code. Your ideas. <br className="hidden sm:inline" />
          <span className="text-[#F2F5F2]">One workspace.</span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-base sm:text-lg text-[#9BA59E] max-w-2xl leading-relaxed font-normal">
          Build, run and experiment with web applications directly in your browser.
          No complicated setup required.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
          <Link
            href="/dashboard"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md bg-[#C5F36B] text-[#0D0F0E] font-semibold text-sm hover:bg-[#D6FF83] transition-all shadow-xs"
          >
            <span>Start coding</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="#features"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md bg-[#141715] border border-[#2B332E] text-[#F2F5F2] font-medium text-sm hover:border-[#9BA59E]/60 hover:bg-[#1B201D] transition-colors"
          >
            <span>Explore features</span>
          </Link>
        </div>

        {/* Authentic CodeNest Product Demonstration Mockup */}
        <div className="mt-14 w-full max-w-5xl rounded-xl border border-[#2B332E] bg-[#141715] shadow-2xl overflow-hidden text-left">
          {/* Top Window Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-[#0D0F0E] border-b border-[#2B332E] text-xs font-mono text-[#9BA59E]">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#2B332E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#2B332E]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#2B332E]" />
              </div>
              <span className="text-[#2B332E] ml-1">|</span>
              <span className="text-[#F2F5F2] font-medium">codenest // react-counter-starter</span>
            </div>

            {/* Simulated Window Tabs */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => setActiveTab("code")}
                className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                  activeTab === "code"
                    ? "bg-[#1B201D] text-[#C5F36B] border border-[#2B332E]"
                    : "text-[#9BA59E] hover:text-[#F2F5F2]"
                }`}
              >
                App.tsx
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("terminal")}
                className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                  activeTab === "terminal"
                    ? "bg-[#1B201D] text-[#C5F36B] border border-[#2B332E]"
                    : "text-[#9BA59E] hover:text-[#F2F5F2]"
                }`}
              >
                terminal (zsh)
              </button>
            </div>

            {/* Runtime Status */}
            <div className="hidden sm:flex items-center gap-2 text-[11px]">
              <span className="flex h-1.5 w-1.5 rounded-full bg-[#C5F36B]" />
              <span className="text-[#C5F36B]">WebContainer: Ready</span>
              <span className="text-[#2B332E]">•</span>
              <span>Port: 3000</span>
            </div>
          </div>

          {/* IDE Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[360px] bg-[#0D0F0E]">
            {/* File Tree Column (Desktop) */}
            <div className="hidden md:flex lg:col-span-3 flex-col border-r border-[#2B332E] bg-[#141715] p-3 text-xs font-mono text-[#9BA59E]">
              <div className="text-[10px] uppercase font-bold tracking-wider text-[#9BA59E]/60 mb-2 px-1">
                Explorer
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-[#1B201D] text-[#F2F5F2]">
                  <span className="text-[#C5F36B]">⚛</span>
                  <span>src/App.tsx</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-[#1B201D]/50 hover:text-[#F2F5F2]">
                  <span>📄</span>
                  <span>src/main.tsx</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-[#1B201D]/50 hover:text-[#F2F5F2]">
                  <span>🎨</span>
                  <span>src/index.css</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-[#1B201D]/50 hover:text-[#F2F5F2]">
                  <span>📦</span>
                  <span>package.json</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-1 rounded hover:bg-[#1B201D]/50 hover:text-[#F2F5F2]">
                  <span>⚙️</span>
                  <span>vite.config.ts</span>
                </div>
              </div>

              {/* Instant Terminal Quick-run snippet */}
              <div className="mt-auto pt-4 border-t border-[#2B332E]">
                <div className="text-[10px] text-[#9BA59E]/70 mb-1">In-browser Node runtime</div>
                <div className="flex items-center justify-between bg-[#0D0F0E] p-1.5 rounded border border-[#2B332E] text-[11px]">
                  <span className="text-[#9BA59E] truncate">npm run dev</span>
                  <button
                    type="button"
                    onClick={copyCommand}
                    className="text-[#9BA59E] hover:text-[#C5F36B] p-0.5"
                    title="Copy run command"
                  >
                    {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Center Editor Area */}
            <div className="lg:col-span-5 p-4 font-mono text-xs overflow-x-auto leading-relaxed border-b lg:border-b-0 lg:border-r border-[#2B332E] bg-[#0D0F0E]">
              <div className="flex flex-col gap-1 text-[#9BA59E]">
                <div className="flex gap-4">
                  <span className="w-5 text-right text-[#9BA59E]/40 select-none">1</span>
                  <span><span className="text-[#C5F36B]">import</span> React, &#123; useState &#125; <span className="text-[#C5F36B]">from</span> &quot;react&quot;;</span>
                </div>
                <div className="flex gap-4">
                  <span className="w-5 text-right text-[#9BA59E]/40 select-none">2</span>
                  <span className="text-[#9BA59E]/40">&#47;&#47; Fast in-browser live compiling</span>
                </div>
                <div className="flex gap-4">
                  <span className="w-5 text-right text-[#9BA59E]/40 select-none">3</span>
                  <span><span className="text-[#C5F36B]">export default function</span> <span className="text-[#F2F5F2]">Counter</span>() &#123;</span>
                </div>
                <div className="flex gap-4">
                  <span className="w-5 text-right text-[#9BA59E]/40 select-none">4</span>
                  <span>&nbsp;&nbsp;<span className="text-[#C5F36B]">const</span> [count, setCount] = <span className="text-[#D6FF83]">useState</span>(0);</span>
                </div>
                <div className="flex gap-4">
                  <span className="w-5 text-right text-[#9BA59E]/40 select-none">5</span>
                  <span>&nbsp;&nbsp;<span className="text-[#C5F36B]">return</span> (</span>
                </div>
                <div className="flex gap-4">
                  <span className="w-5 text-right text-[#9BA59E]/40 select-none">6</span>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;<span className="text-[#C5F36B]">button</span> onClick=&#123;() =&gt; setCount(c =&gt; c + 1)&#125;&gt;</span>
                </div>
                <div className="flex gap-4 bg-[#1B201D]/70 -mx-4 px-4 py-0.5 border-l-2 border-[#C5F36B]">
                  <span className="w-5 text-right text-[#9BA59E]/40 select-none">7</span>
                  <span className="text-[#F2F5F2] flex items-center gap-1.5 flex-wrap">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Count: &#123;count&#125;
                    {/* Inline AI suggestion preview */}
                    <span className="inline-flex items-center gap-1 px-1.5 py-0.2 rounded bg-[#C5F36B]/15 text-[#C5F36B] text-[10px] border border-[#C5F36B]/30 select-none">
                      <Sparkles className="h-2.5 w-2.5" />
                      <span>AI: Tab to complete</span>
                    </span>
                  </span>
                </div>
                <div className="flex gap-4">
                  <span className="w-5 text-right text-[#9BA59E]/40 select-none">8</span>
                  <span>&nbsp;&nbsp;&nbsp;&nbsp;&lt;/<span className="text-[#C5F36B]">button</span>&gt;</span>
                </div>
                <div className="flex gap-4">
                  <span className="w-5 text-right text-[#9BA59E]/40 select-none">9</span>
                  <span>&nbsp;&nbsp;);</span>
                </div>
                <div className="flex gap-4">
                  <span className="w-5 text-right text-[#9BA59E]/40 select-none">10</span>
                  <span>&#125;</span>
                </div>
              </div>
            </div>

            {/* Right Live Preview & Terminal Pane */}
            <div className="lg:col-span-4 flex flex-col bg-[#141715]">
              {/* Live Preview Viewport */}
              <div className="p-3 border-b border-[#2B332E]">
                <div className="text-[10px] font-mono text-[#9BA59E] mb-2 flex items-center justify-between">
                  <span>PREVIEW (PORT 3000)</span>
                  <span className="text-[#C5F36B] flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#C5F36B]" />
                    Live HMR
                  </span>
                </div>
                <div className="p-4 rounded-md border border-[#2B332E] bg-[#0D0F0E] flex flex-col items-center justify-center gap-3 py-6">
                  <span className="text-xs font-mono text-[#9BA59E]">Live Running React Component</span>
                  <div className="px-4 py-2 rounded-md bg-[#C5F36B] text-[#0D0F0E] font-mono text-xs font-bold shadow-xs">
                    Count is 42
                  </div>
                  <span className="text-[10px] font-mono text-[#9BA59E]/60">Rendered in-browser via WebContainers</span>
                </div>
              </div>

              {/* Integrated Terminal Output */}
              <div className="p-3 font-mono text-[11px] leading-relaxed text-[#9BA59E] flex-1 bg-[#0D0F0E]/80">
                <div className="text-[10px] uppercase font-bold text-[#9BA59E]/60 mb-1 flex items-center gap-1.5">
                  <Terminal className="h-3 w-3 text-[#C5F36B]" />
                  <span>Integrated Terminal</span>
                </div>
                <div className="text-[#F2F5F2]">$ npm run dev</div>
                <div className="text-[#9BA59E]">
                  &gt; vite dev --host<br />
                  <span className="text-[#C5F36B]">✓</span> ready in 142ms<br />
                  ➜ Local: <span className="text-[#F2F5F2] underline">http://localhost:3000/</span><br />
                  ➜ Network: use --host to expose
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
