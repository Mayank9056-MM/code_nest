import React from "react";
import Link from "next/link";
import { BrandLogo } from "@/modules/home/components/BrandLogo";
import { Home, LayoutDashboard, ArrowRight } from "lucide-react";

export default function NotFound() {
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

      {/* Main 404 Hero */}
      <main className="flex-1 flex items-center justify-center px-4 py-16 sm:py-24">
        <div className="max-w-xl w-full text-center space-y-8">
          {/* Badge & Visual Identifier */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#2B332E] bg-[#141715] text-[#9BA59E] text-xs font-mono">
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#C5F36B]" />
            <span className="text-[#C5F36B]">ERR_404</span>
            <span className="text-[#2B332E]">•</span>
            <span>ROUTE_NOT_FOUND</span>
          </div>

          <div className="space-y-3">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#F2F5F2]">
              Lost in the codebase?
            </h1>
            <p className="text-sm sm:text-base text-[#9BA59E] max-w-md mx-auto leading-relaxed font-normal">
              The page, sandbox, or endpoint you are looking for doesn&apos;t exist, was moved, or
              is temporarily unavailable.
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              href="/dashboard"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-10 px-6 rounded-md bg-[#C5F36B] text-[#0D0F0E] font-semibold text-xs hover:bg-[#D6FF83] transition-colors shadow-xs"
            >
              <LayoutDashboard className="h-4 w-4" />
              <span>Open Dashboard</span>
            </Link>

            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-10 px-6 rounded-md bg-[#141715] border border-[#2B332E] text-[#F2F5F2] font-medium text-xs hover:border-[#9BA59E]/60 hover:bg-[#1B201D] transition-colors"
            >
              <Home className="h-4 w-4" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Quick Helpful Destinations */}
          <div className="pt-8 border-t border-[#2B332E] grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
            <Link
              href="/dashboard"
              className="group p-4 rounded-lg border border-[#2B332E] bg-[#141715] hover:border-[#9BA59E]/50 hover:bg-[#1B201D] transition-all"
            >
              <div className="flex items-center justify-between mb-1 text-[#F2F5F2] font-semibold text-xs font-mono">
                <span>Dashboard</span>
                <ArrowRight className="h-3 w-3 text-[#C5F36B] group-hover:translate-x-0.5 transition-transform" />
              </div>
              <p className="text-[11px] text-[#9BA59E] line-clamp-2">
                Manage and resume your cloud development workspaces.
              </p>
            </Link>

            <Link
              href="/auth/sign-in"
              className="group p-4 rounded-lg border border-[#2B332E] bg-[#141715] hover:border-[#9BA59E]/50 hover:bg-[#1B201D] transition-all"
            >
              <div className="flex items-center justify-between mb-1 text-[#F2F5F2] font-semibold text-xs font-mono">
                <span>Authentication</span>
                <ArrowRight className="h-3 w-3 text-[#C5F36B] group-hover:translate-x-0.5 transition-transform" />
              </div>
              <p className="text-[11px] text-[#9BA59E] line-clamp-2">
                Sign in to sync your playgrounds and cloud environments.
              </p>
            </Link>

            <Link
              href="/"
              className="group p-4 rounded-lg border border-[#2B332E] bg-[#141715] hover:border-[#9BA59E]/50 hover:bg-[#1B201D] transition-all"
            >
              <div className="flex items-center justify-between mb-1 text-[#F2F5F2] font-semibold text-xs font-mono">
                <span>Features</span>
                <ArrowRight className="h-3 w-3 text-[#C5F36B] group-hover:translate-x-0.5 transition-transform" />
              </div>
              <p className="text-[11px] text-[#9BA59E] line-clamp-2">
                Learn about in-browser WebContainers and AI assistance.
              </p>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#2B332E] py-5 text-center text-xs font-mono text-[#9BA59E]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px]">
          <span>© {new Date().getFullYear()} CodeNest. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="/" className="hover:text-[#F2F5F2] transition-colors">Home</Link>
            <Link href="/dashboard" className="hover:text-[#F2F5F2] transition-colors">Dashboard</Link>
            <Link href="/auth/sign-in" className="hover:text-[#F2F5F2] transition-colors">Sign in</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
