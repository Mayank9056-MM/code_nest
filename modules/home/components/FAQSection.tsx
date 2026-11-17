"use client";

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "What is CodeNest and how does it differ from cloud VM IDEs?",
    answer:
      "CodeNest is an in-browser cloud development environment powered by WebContainers and Monaco Editor. Unlike traditional cloud IDEs that spin up remote virtual machines and suffer from cold starts and latency, CodeNest executes Node.js, npm, and dev servers directly within your browser thread using WebAssembly. This results in instant boot times, zero cloud runtime costs, and responsive feedback.",
  },
  {
    question: "What browser requirements are needed to run CodeNest?",
    answer:
      "CodeNest works on any modern web browser supporting WebAssembly and SharedArrayBuffer with Cross-Origin Isolation headers. This includes Google Chrome, Microsoft Edge, Brave, Mozilla Firefox, and Apple Safari (macOS 12+ / iOS 15+). We recommend Chromium-based browsers or Firefox for maximum terminal execution performance.",
  },
  {
    question: "Which web frameworks have verified runtime support?",
    answer:
      "CodeNest includes verified, one-click runtime templates for React (Vite + TypeScript), Next.js (App Router), Express (Node.js REST API), Vue.js (Vite + Vue 3), Hono (Web Standards / Node.js API), and Angular. Each template comes with pre-configured dev scripts and hot module replacement.",
  },
  {
    question: "How does the AI code completion functionality work?",
    answer:
      "CodeNest features a lightweight, context-aware code suggestion engine that parses the active file, detects framework semantics, evaluates surrounding cursor scope (inside functions, classes, or after comments), and provides non-intrusive completions. You can accept suggestions with Tab, dismiss them with Escape, or toggle the AI engine on and off at any time using the ToggleAI button in the editor toolbar.",
  },
  {
    question: "Where are my projects stored and can I lose my work?",
    answer:
      "When logged in via OAuth (Google or GitHub), your projects, starred workspaces, and code files are persisted directly to our cloud MongoDB database. Saving can be done with Ctrl+S (or Cmd+S), and all updates are synced automatically to ensure your work is preserved across browser sessions and devices.",
  },
  {
    question: "Can I connect and sync with GitHub repositories?",
    answer:
      "Yes. CodeNest integrates directly with GitHub via OAuth authentication. You can open and clone existing repositories into an isolated browser workspace, run dependencies, make edits, and experiment freely.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 border-t border-[#2B332E] bg-[#141715]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-xs font-mono uppercase tracking-wider text-[#C5F36B] mb-2 flex items-center justify-center gap-1.5">
            <span>{"// Frequently Asked Questions"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F5F2]">
            Everything you need to know
          </h2>
          <p className="mt-3 text-sm text-[#9BA59E] leading-relaxed font-normal">
            Detailed answers regarding runtime execution, browser compatibility, security, and workspaces.
          </p>
        </div>

        {/* Accordion */}
        <div className="rounded-xl border border-[#2B332E] bg-[#0D0F0E] p-2 sm:p-4 divide-y divide-[#2B332E]">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="border-b border-[#2B332E]/60 last:border-b-0 px-3"
              >
                <AccordionTrigger className="text-left font-medium text-sm text-[#F2F5F2] hover:text-[#C5F36B] hover:no-underline py-4 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm font-normal text-[#9BA59E] leading-relaxed pb-4 pt-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
