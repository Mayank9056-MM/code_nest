import React from "react";
import {
  Code2,
  Sparkles,
  Zap,
  Terminal,
  FolderGit2,
  FolderKanban,
  CheckCircle2,
} from "lucide-react";

const FEATURES = [
  {
    icon: Code2,
    tag: "Core Editor",
    title: "Monaco Engine",
    description:
      "Powered by the exact engine behind VS Code. Full TypeScript language server, multi-cursor editing, keyboard shortcuts, and syntax tree inspection.",
    specs: ["TypeScript & JSX", "Multi-file tabs", "Custom keybindings"],
  },
  {
    icon: Zap,
    tag: "Runtime",
    title: "WebContainers Sandbox",
    description:
      "Run standard Node.js applications directly inside browser tabs. Experience instant compilation with zero cold starts and no remote server costs.",
    specs: ["Node.js runtime", "Local package manager", "Microsecond startup"],
  },
  {
    icon: Sparkles,
    tag: "Intelligence",
    title: "Context-Aware AI",
    description:
      "Intelligent code completions generated dynamically from your active file, surrounding function scope, and framework syntax. Non-intrusive and toggleable.",
    specs: ["AST context parsing", "Tab-to-accept", "One-click toggle"],
  },
  {
    icon: Terminal,
    tag: "Shell",
    title: "Integrated Terminal",
    description:
      "Interactive xterm-powered terminal running real shell commands. Install npm dependencies, start dev servers, and run test suites directly.",
    specs: ["xterm.js frontend", "Interactive I/O", "Process monitoring"],
  },
  {
    icon: FolderKanban,
    tag: "Workspaces",
    title: "Project Management",
    description:
      "Persistent MongoDB project storage. Organize your workspaces, star favorite sandboxes, duplicate starter projects, and manage deployments.",
    specs: ["Cloud persistence", "One-click clone", "Star & organize"],
  },
  {
    icon: FolderGit2,
    tag: "VCS",
    title: "GitHub Integration",
    description:
      "Connect your GitHub account seamlessly. Import public or private repositories, spin up isolated dev environments, and collaborate with ease.",
    specs: ["OAuth authentication", "Repo import", "Git workflow support"],
  },
];

export function FeatureGrid() {
  return (
    <section id="features" className="py-20 border-t border-[#2B332E] bg-[#0D0F0E]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-[#C5F36B] mb-2 flex items-center justify-center gap-1.5">
            <span>// Architecture &amp; Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F5F2]">
            Built for modern engineering workflows
          </h2>
          <p className="mt-3 text-sm text-[#9BA59E] leading-relaxed font-normal">
            Every feature is verified and implemented natively in CodeNest. No simulated mockups or
            unsupported claims.
          </p>
        </div>

        {/* Features 3x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="group p-5 rounded-lg border border-[#2B332E] bg-[#141715] hover:border-[#9BA59E]/40 hover:bg-[#1B201D] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-9 w-9 rounded-md bg-[#1B201D] border border-[#2B332E] flex items-center justify-center text-[#C5F36B] group-hover:border-[#C5F36B]/40 transition-colors">
                      <Icon className="h-4 w-4" />
                    </div>
                    <span className="text-[10px] font-mono text-[#9BA59E] uppercase tracking-wider px-2 py-0.5 rounded bg-[#0D0F0E] border border-[#2B332E]">
                      {feat.tag}
                    </span>
                  </div>

                  <h3 className="text-base font-semibold text-[#F2F5F2] tracking-tight">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-xs text-[#9BA59E] leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                {/* Specs List */}
                <div className="mt-6 pt-4 border-t border-[#2B332E]/60 space-y-1.5">
                  {feat.specs.map((spec) => (
                    <div
                      key={spec}
                      className="flex items-center gap-2 text-[11px] font-mono text-[#9BA59E]"
                    >
                      <CheckCircle2 className="h-3 w-3 text-[#C5F36B] shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
