"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { useCurrentUser } from "@/modules/auth/hooks/use-current-user";
import UserButton from "@/modules/auth/components/user-button";
import { Menu, X, ArrowRight, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Frameworks", href: "#frameworks" },
  { label: "AI", href: "#ai" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const user = useCurrentUser();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-colors duration-200 border-b",
        scrolled
          ? "bg-[#0D0F0E]/90 border-[#2B332E] backdrop-blur-md"
          : "bg-[#0D0F0E]/60 border-[#2B332E]/60 backdrop-blur-xs"
      )}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Brand */}
        <BrandLogo size="md" />

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-7 text-xs font-mono tracking-wide text-[#9BA59E]"
          aria-label="Main Navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-[#F2F5F2] transition-colors focus-visible:outline-hidden focus-visible:text-[#C5F36B]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-3">
              <Link
                href="/dashboard"
                className="text-xs font-mono text-[#F2F5F2] hover:text-[#C5F36B] transition-colors flex items-center gap-1.5"
              >
                <Terminal className="h-3.5 w-3.5" />
                <span>Dashboard</span>
              </Link>
              <UserButton />
            </div>
          ) : (
            <>
              <Link
                href="/auth/sign-in"
                className="text-xs font-mono text-[#9BA59E] hover:text-[#F2F5F2] transition-colors px-2.5 py-1.5"
              >
                Sign in
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-md bg-[#C5F36B] text-[#0D0F0E] hover:bg-[#D6FF83] transition-all shadow-xs"
              >
                <span>Get started</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 rounded-md text-[#9BA59E] hover:text-[#F2F5F2] hover:bg-[#1B201D] border border-transparent hover:border-[#2B332E] transition-colors"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="md:hidden fixed inset-x-0 top-14 bottom-0 bg-[#0D0F0E] border-b border-[#2B332E] z-40 flex flex-col p-6 animate-in fade-in slide-in-from-top-2 duration-150"
        >
          <nav className="flex flex-col gap-4 text-sm font-mono text-[#9BA59E] pt-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#2B332E]/50 hover:text-[#F2F5F2] hover:border-[#C5F36B]/40 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 flex flex-col gap-3 pt-4 border-t border-[#2B332E]">
            {user ? (
              <div className="flex items-center justify-between py-2">
                <Link
                  href="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 text-xs font-semibold rounded-md bg-[#C5F36B] text-[#0D0F0E] hover:bg-[#D6FF83] transition-colors"
                >
                  Open Dashboard
                </Link>
              </div>
            ) : (
              <>
                <Link
                  href="/auth/sign-in"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 text-xs font-mono text-[#F2F5F2] border border-[#2B332E] rounded-md hover:bg-[#141715] transition-colors"
                >
                  Sign in
                </Link>
                <Link
                  href="/dashboard"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 text-xs font-semibold rounded-md bg-[#C5F36B] text-[#0D0F0E] hover:bg-[#D6FF83] transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Get started</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
