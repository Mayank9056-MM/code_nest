import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { BrandLogo } from "@/modules/home/components/BrandLogo";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center bg-[#0D0F0E] text-[#F2F5F2] px-4 py-12 selection:bg-[#C5F36B] selection:text-[#0D0F0E]">
      {/* Top Bar Navigation */}
      <header className="absolute top-4 left-4 right-4 flex items-center justify-between max-w-5xl mx-auto z-10">
        <BrandLogo size="md" />

        <Link
          href="/"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-[#2B332E] bg-[#141715] text-[#9BA59E] hover:text-[#F2F5F2] hover:border-[#9BA59E]/50 text-xs font-mono transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          <span>Back to Home</span>
        </Link>
      </header>

      {/* Main Auth Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-md pt-8">
        {children}
      </div>

      {/* Minimal Footer */}
      <div className="absolute bottom-4 text-center text-[11px] font-mono text-[#9BA59E]/60">
        CodeNest IDE • Secure Authentication
      </div>
    </main>
  );
};

export default AuthLayout;
