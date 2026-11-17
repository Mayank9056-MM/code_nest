import React from "react";
import { Sparkles, Terminal, ToggleLeft, Cpu } from "lucide-react";

export function AIShowcase() {
  return (
    <section id="ai" className="py-20 border-t border-[#2B332E] bg-[#141715]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-[#C5F36B] mb-2 flex items-center justify-center gap-1.5">
            <span>{"// Contextual Intelligence"}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F5F2]">
            AI assistance that stays out of your way
          </h2>
          <p className="mt-3 text-sm text-[#9BA59E] leading-relaxed font-normal">
            No bloated conversational sidebars or intrusive popups. Code completions parse surrounding
            lines and function context directly inside your active editor tab.
          </p>
        </div>

        {/* AI Demonstration Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: Code Context Demonstration */}
          <div className="lg:col-span-7 rounded-xl border border-[#2B332E] bg-[#0D0F0E] overflow-hidden flex flex-col justify-between">
            {/* Top Toolbar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-[#141715] border-b border-[#2B332E] text-xs font-mono text-[#9BA59E]">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#C5F36B]" />
                <span className="text-[#F2F5F2]">lib/fetcher.ts</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#1B201D] text-[#C5F36B] text-[10px] border border-[#2B332E]">
                  AI: Active
                </span>
                <span className="text-[10px] text-[#9BA59E]/70">Model: llama3.2</span>
              </div>
            </div>

            {/* Monaco-style Code Sample */}
            <div className="p-4 font-mono text-xs leading-relaxed text-[#9BA59E] overflow-x-auto space-y-1">
              <div><span className="text-[#9BA59E]/40 select-none mr-3">1</span><span className="text-[#C5F36B]">export async function</span> <span className="text-[#F2F5F2]">fetchUserData</span>(userId: <span className="text-[#C5F36B]">string</span>) &#123;</div>
              <div><span className="text-[#9BA59E]/40 select-none mr-3">2</span>&nbsp;&nbsp;<span className="text-[#C5F36B]">try</span> &#123;</div>
              <div><span className="text-[#9BA59E]/40 select-none mr-3">3</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#C5F36B]">const</span> response = <span className="text-[#C5F36B]">await</span> fetch(&#96;/api/users/$&#123;userId&#125;&#96;);</div>
              <div className="bg-[#1B201D] -mx-4 px-4 py-1 border-l-2 border-[#C5F36B]">
                <span className="text-[#9BA59E]/40 select-none mr-3">4</span>
                <span className="text-[#F2F5F2]">&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#C5F36B]">if</span> (!response.ok) </span>
                <span className="text-[#C5F36B] underline decoration-dotted">throw new Error(&quot;User not found&quot;);</span>
                <span className="ml-2 inline-flex items-center gap-1 text-[10px] font-mono bg-[#C5F36B]/20 text-[#C5F36B] px-1.5 py-0.5 rounded border border-[#C5F36B]/40">
                  <Sparkles className="h-2.5 w-2.5" />
                  <span>Tab to accept</span>
                </span>
              </div>
              <div><span className="text-[#9BA59E]/40 select-none mr-3">5</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#C5F36B]">return await</span> response.json();</div>
              <div><span className="text-[#9BA59E]/40 select-none mr-3">6</span>&nbsp;&nbsp;&#125; <span className="text-[#C5F36B]">catch</span> (error) &#123;</div>
              <div><span className="text-[#9BA59E]/40 select-none mr-3">7</span>&nbsp;&nbsp;&nbsp;&nbsp;console.error(&quot;Failed user lookup:&quot;, error);</div>
              <div><span className="text-[#9BA59E]/40 select-none mr-3">8</span>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#C5F36B]">return null</span>;</div>
              <div><span className="text-[#9BA59E]/40 select-none mr-3">9</span>&nbsp;&nbsp;&#125;</div>
              <div><span className="text-[#9BA59E]/40 select-none mr-3">10</span>&#125;</div>
            </div>

            {/* Bottom Analysis Indicator */}
            <div className="px-4 py-2 bg-[#141715] border-t border-[#2B332E] text-[11px] font-mono text-[#9BA59E] flex items-center justify-between">
              <span>Context: TypeScript • In-Function • Error-pattern</span>
              <span className="text-[#C5F36B]">Latency: ~85ms</span>
            </div>
          </div>

          {/* Right: Technical Features Breakdown */}
          <div className="lg:col-span-5 flex flex-col gap-3 justify-between">
            <div className="p-5 rounded-xl border border-[#2B332E] bg-[#0D0F0E]">
              <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#C5F36B]">
                <Cpu className="h-4 w-4" />
                <span className="uppercase font-semibold">AST &amp; Scope Aware</span>
              </div>
              <h4 className="text-sm font-semibold text-[#F2F5F2] mb-1">
                Context-sensitive parsing
              </h4>
              <p className="text-xs text-[#9BA59E] leading-relaxed">
                CodeNest analyzes preceding imports, enclosing class or function headers, and the
                active cursor column before generating recommendations.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[#2B332E] bg-[#0D0F0E]">
              <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#C5F36B]">
                <ToggleLeft className="h-4 w-4" />
                <span className="uppercase font-semibold">One-Click Toggle</span>
              </div>
              <h4 className="text-sm font-semibold text-[#F2F5F2] mb-1">
                Full developer control
              </h4>
              <p className="text-xs text-[#9BA59E] leading-relaxed">
                Disable or enable suggestions whenever you want directly from the editor header
                using the ToggleAI switch. No telemetry, no background noise.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[#2B332E] bg-[#0D0F0E]">
              <div className="flex items-center gap-2 mb-2 text-xs font-mono text-[#C5F36B]">
                <Terminal className="h-4 w-4" />
                <span className="uppercase font-semibold">Zero Friction Keystrokes</span>
              </div>
              <h4 className="text-sm font-semibold text-[#F2F5F2] mb-1">
                Natural keyboard workflow
              </h4>
              <p className="text-xs text-[#9BA59E] leading-relaxed">
                Press <code className="text-[#C5F36B] font-mono">Tab</code> to accept an inline suggestion or keep typing to ignore it. No modal prompts or workflow interruptions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
