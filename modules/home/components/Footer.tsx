import React from "react";
import Link from "next/link";
import { BrandLogo } from "./BrandLogo";
import { Github, Twitter, Disc as Discord, Terminal } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#2B332E] bg-[#0D0F0E] text-[#9BA59E] py-14 text-xs font-mono">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 space-y-4">
            <BrandLogo size="md" showTagline />
            <p className="text-xs text-[#9BA59E] max-w-sm leading-relaxed font-sans font-normal">
              In-browser cloud development environment powered by WebContainers, Monaco Editor,
              and context-aware code assistance.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-[#9BA59E]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C5F36B]" />
              <span>Systems Operational • In-Browser Runtime</span>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <div className="text-[11px] uppercase font-bold text-[#F2F5F2] tracking-wider">
              Product
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="hover:text-[#F2F5F2] transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#frameworks" className="hover:text-[#F2F5F2] transition-colors">
                  Frameworks
                </Link>
              </li>
              <li>
                <Link href="#ai" className="hover:text-[#F2F5F2] transition-colors">
                  AI Assistant
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-[#F2F5F2] transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-[#C5F36B] hover:text-[#D6FF83] transition-colors">
                  Launch Editor
                </Link>
              </li>
            </ul>
          </div>

          {/* Documentation Links */}
          <div className="space-y-3">
            <div className="text-[11px] uppercase font-bold text-[#F2F5F2] tracking-wider">
              Resources
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="#how-it-works" className="hover:text-[#F2F5F2] transition-colors">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-[#F2F5F2] transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="https://webcontainers.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F2F5F2] transition-colors"
                >
                  WebContainers Docs
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#F2F5F2] transition-colors"
                >
                  GitHub Repository
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="space-y-3">
            <div className="text-[11px] uppercase font-bold text-[#F2F5F2] tracking-wider">
              Legal
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="hover:text-[#F2F5F2] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#F2F5F2] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/security" className="hover:text-[#F2F5F2] transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#2B332E] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div>
            &copy; {currentYear} CodeNest. All rights reserved. Built for developers.
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded text-[#9BA59E] hover:text-[#F2F5F2] hover:bg-[#1B201D] transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded text-[#9BA59E] hover:text-[#F2F5F2] hover:bg-[#1B201D] transition-colors"
              aria-label="Twitter / X"
            >
              <Twitter className="h-4 w-4" />
            </Link>
            <Link
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1 rounded text-[#9BA59E] hover:text-[#F2F5F2] hover:bg-[#1B201D] transition-colors"
              aria-label="Discord"
            >
              <Discord className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
