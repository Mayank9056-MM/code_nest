"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, LayoutDashboard, Home } from "lucide-react";
import { BrandLogo } from "@/modules/home/components/BrandLogo";

interface RootErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function RootError({ error, reset }: RootErrorProps) {
  useEffect(() => {
    console.error("CodeNest runtime caught error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0D0F0E] text-[#F2F5F2] flex flex-col justify-between selection:bg-[#C5F36B] selection:text-[#0D0F0E]">
      {/* Top Header */}
      <header className="border-b border-[#2B332E] bg-[#0D0F0E]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <BrandLogo size="md" />

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-xs font-mono text-[#9BA59E] hover:text-[#F2F5F2] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md bg-[#C5F36B] text-[#0D0F0E] hover:bg-[#D6FF83] transition-colors shadow-xs"
            >
              <LayoutDashboard className="h-3.5 w-3.5" />
              <span>Dashboard</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Error Body */}
      <main className="flex-1 flex items-center justify-center px-4 py-16 sm:py-20">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-[#141715] border border-[#2B332E] text-amber-400">
            <AlertTriangle className="h-6 w-6" />
          </div>

          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-[#2B332E] bg-[#141715] text-[11px] font-mono text-amber-400">
              <span>APPLICATION_EXCEPTION</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#F2F5F2]">
              Something went wrong
            </h1>
            <p className="text-xs sm:text-sm text-[#9BA59E] leading-relaxed max-w-sm mx-auto">
              An unexpected condition interrupted the operation. Your workspaces and saved files are safe.
            </p>
          </div>

          {error?.digest && (
            <div className="inline-block px-3 py-1 rounded bg-[#141715] border border-[#2B332E] text-xs font-mono text-[#9BA59E]">
              Digest: <span className="text-[#F2F5F2]">{error.digest}</span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => reset()}
              className="w-full sm:w-auto h-10 px-5 rounded-md bg-[#C5F36B] text-[#0D0F0E] font-semibold text-xs hover:bg-[#D6FF83] transition-colors shadow-xs inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Try again</span>
            </button>

            <Link
              href="/dashboard"
              className="w-full sm:w-auto h-10 px-5 rounded-md bg-[#141715] border border-[#2B332E] text-[#F2F5F2] font-medium text-xs hover:border-[#9BA59E]/60 hover:bg-[#1B201D] transition-colors inline-flex items-center justify-center gap-2"
            >
              <LayoutDashboard className="h-3.5 w-3.5" />
              <span>Go to Dashboard</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#2B332E] py-5 text-center text-xs font-mono text-[#9BA59E]">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between text-[11px]">
          <span>© {new Date().getFullYear()} CodeNest. All rights reserved.</span>
          <Link href="/" className="hover:text-[#F2F5F2] transition-colors flex items-center gap-1.5">
            <Home className="h-3.5 w-3.5" />
            <span>Home</span>
          </Link>
        </div>
      </footer>
    </div>
  );
}
