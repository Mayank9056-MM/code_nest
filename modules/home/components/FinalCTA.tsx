import React from "react";
import Link from "next/link";
import { ArrowRight, Terminal } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 border-t border-[#2B332E] bg-[#0D0F0E] relative overflow-hidden">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 relative z-10 text-center">
        {/* Terminal Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2B332E] bg-[#141715] text-[#9BA59E] text-xs font-mono mb-6">
          <span className="h-1.5 w-1.5 rounded-full bg-[#C5F36B] animate-pulse" />
          <span className="text-[#F2F5F2]">Instant Sandbox Available</span>
          <span className="text-[#2B332E]">•</span>
          <span>Zero Server Waiting</span>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#F2F5F2] max-w-3xl mx-auto leading-tight">
          Build. Run. Create. <br />
          <span className="text-[#C5F36B]">Anywhere.</span>
        </h2>

        {/* Description */}
        <p className="mt-6 text-sm sm:text-base text-[#9BA59E] max-w-xl mx-auto leading-relaxed">
          Open a full-stack IDE directly in your browser. Select a framework, write code with Monaco,
          and run development servers in seconds.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/dashboard"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-7 rounded-md bg-[#C5F36B] text-[#0D0F0E] font-semibold text-sm hover:bg-[#D6FF83] transition-all shadow-xs"
          >
            <span>Start coding now</span>
            <ArrowRight className="h-4 w-4" />
          </Link>

          <Link
            href="/auth/sign-in"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-11 px-6 rounded-md bg-[#141715] border border-[#2B332E] text-[#F2F5F2] font-medium text-sm hover:border-[#9BA59E]/60 hover:bg-[#1B201D] transition-colors"
          >
            <Terminal className="h-4 w-4 text-[#C5F36B]" />
            <span>Sign in with GitHub</span>
          </Link>
        </div>

        {/* Minimalist prompt indicator */}
        <div className="mt-10 inline-flex items-center gap-2 text-xs font-mono text-[#9BA59E]/60">
          <span>codenest // free tier • no credit card required</span>
        </div>
      </div>
    </section>
  );
}
