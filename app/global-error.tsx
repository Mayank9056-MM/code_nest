"use client";

import React, { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { BrandMark } from "@/modules/home/components/BrandLogo";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error("Global application error caught:", error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0D0F0E] text-[#F2F5F2] flex items-center justify-center p-4 font-sans antialiased selection:bg-[#C5F36B] selection:text-[#0D0F0E]">
        <div className="max-w-md w-full text-center space-y-6 p-8 rounded-xl border border-[#2B332E] bg-[#141715] shadow-2xl">
          <div className="mx-auto flex justify-center">
            <BrandMark size="lg" />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-center gap-1.5 text-amber-400 text-xs font-mono">
              <AlertTriangle className="h-4 w-4" />
              <span>CRITICAL_SYSTEM_ERROR</span>
            </div>
            <h1 className="text-xl font-bold tracking-tight text-[#F2F5F2]">
              Application Error
            </h1>
            <p className="text-xs text-[#9BA59E] leading-relaxed">
              CodeNest encountered an unexpected initialization failure. Reloading the application will
              restore your workspace session.
            </p>
          </div>

          {error?.digest && (
            <div className="text-[11px] font-mono text-[#9BA59E] bg-[#0D0F0E] p-2 rounded border border-[#2B332E]">
              Digest: {error.digest}
            </div>
          )}

          <div>
            <button
              type="button"
              onClick={() => reset()}
              className="w-full h-10 rounded-md bg-[#C5F36B] text-[#0D0F0E] font-semibold text-xs hover:bg-[#D6FF83] transition-colors shadow-xs inline-flex items-center justify-center gap-2 cursor-pointer"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Reload Application</span>
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
