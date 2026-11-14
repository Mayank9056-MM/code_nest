"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-20 border-t border-[#2B332E] bg-[#0D0F0E]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="text-xs font-mono uppercase tracking-wider text-[#C5F36B] mb-2 flex items-center justify-center gap-1.5">
            <span>// Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F5F2]">
            Straightforward plans for developers
          </h2>
          <p className="mt-3 text-sm text-[#9BA59E] leading-relaxed font-normal">
            Start building for free with full runtime capabilities. Upgrade only when you need expanded
            storage, team sharing, or higher AI throughput.
          </p>

          {/* Billing Interval Toggle */}
          <div className="mt-8 inline-flex items-center p-1 rounded-md bg-[#141715] border border-[#2B332E] text-xs font-mono">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`px-3 py-1.5 rounded transition-colors cursor-pointer ${
                !isAnnual
                  ? "bg-[#1B201D] text-[#F2F5F2] border border-[#2B332E]"
                  : "text-[#9BA59E] hover:text-[#F2F5F2]"
              }`}
            >
              Monthly billing
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`px-3 py-1.5 rounded transition-colors flex items-center gap-1.5 cursor-pointer ${
                isAnnual
                  ? "bg-[#1B201D] text-[#F2F5F2] border border-[#2B332E]"
                  : "text-[#9BA59E] hover:text-[#F2F5F2]"
              }`}
            >
              <span>Annual billing</span>
              <span className="text-[10px] text-[#C5F36B] font-bold bg-[#C5F36B]/15 px-1 rounded">
                -20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Free Tier */}
          <div className="p-6 sm:p-8 rounded-xl border border-[#2B332E] bg-[#141715] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#9BA59E]">
                  Developer Free
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#1B201D] text-[#9BA59E] border border-[#2B332E]">
                  Default
                </span>
              </div>

              <div className="flex items-baseline gap-1.5 mb-4">
                <span className="text-4xl font-bold font-mono text-[#F2F5F2]">$0</span>
                <span className="text-xs font-mono text-[#9BA59E]">/ forever</span>
              </div>

              <p className="text-xs text-[#9BA59E] leading-relaxed mb-6 pb-6 border-b border-[#2B332E]">
                Full in-browser development environment with all standard frameworks and Monaco editor.
              </p>

              <div className="space-y-3 font-mono text-xs text-[#F2F5F2]">
                <div className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-[#C5F36B] shrink-0" />
                  <span>Unlimited in-browser WebContainer boots</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-[#C5F36B] shrink-0" />
                  <span>All 6 official framework starter templates</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-[#C5F36B] shrink-0" />
                  <span>Full Monaco Editor with syntax highlighting</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-[#C5F36B] shrink-0" />
                  <span>Integrated xterm.js terminal with npm/node</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-[#C5F36B] shrink-0" />
                  <span>GitHub repository import</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-[#C5F36B] shrink-0" />
                  <span>Standard AI code completions</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#2B332E]">
              <Link
                href="/dashboard"
                className="w-full h-11 inline-flex items-center justify-center gap-2 rounded-md bg-[#1B201D] border border-[#2B332E] text-[#F2F5F2] font-semibold text-xs hover:border-[#9BA59E] hover:bg-[#232B25] transition-colors"
              >
                <span>Start building free</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Pro Tier */}
          <div className="p-6 sm:p-8 rounded-xl border border-[#C5F36B] bg-[#141715] flex flex-col justify-between relative shadow-lg">
            <div className="absolute -top-3 right-6 px-2.5 py-0.5 rounded-full bg-[#C5F36B] text-[#0D0F0E] font-mono text-[10px] font-bold tracking-wider uppercase">
              Pro Engineer
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#C5F36B]">
                  Professional
                </span>
                <span className="text-[10px] font-mono text-[#9BA59E]">
                  Configurable plan
                </span>
              </div>

              <div className="flex items-baseline gap-1.5 mb-4">
                <span className="text-4xl font-bold font-mono text-[#F2F5F2]">
                  {isAnnual ? "$12" : "$15"}
                </span>
                <span className="text-xs font-mono text-[#9BA59E]">/ month (billed {isAnnual ? "annually" : "monthly"})</span>
              </div>

              <p className="text-xs text-[#9BA59E] leading-relaxed mb-6 pb-6 border-b border-[#2B332E]">
                Designed for engineers, freelancers, and power users who need team workspaces and higher AI generation throughput.
              </p>

              <div className="space-y-3 font-mono text-xs text-[#F2F5F2]">
                <div className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-[#C5F36B] shrink-0" />
                  <span>Everything in Free, plus:</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-[#C5F36B] shrink-0" />
                  <span>High-frequency AI completion limits</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-[#C5F36B] shrink-0" />
                  <span>Unlimited persistent cloud projects</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-[#C5F36B] shrink-0" />
                  <span>Private repository synchronization</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-[#C5F36B] shrink-0" />
                  <span>Custom environment variables per project</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-[#C5F36B] shrink-0" />
                  <span>Priority template asset caching</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#2B332E]">
              <Link
                href="/dashboard"
                className="w-full h-11 inline-flex items-center justify-center gap-2 rounded-md bg-[#C5F36B] text-[#0D0F0E] font-semibold text-xs hover:bg-[#D6FF83] transition-colors shadow-xs"
              >
                <span>Upgrade to Pro</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Pricing Notice */}
        <p className="mt-8 text-center text-xs font-mono text-[#9BA59E]/70 max-w-xl mx-auto">
          Need custom self-hosted runners or organizational procurement? Configure seats directly within the dashboard or contact our engineering team.
        </p>
      </div>
    </section>
  );
}
