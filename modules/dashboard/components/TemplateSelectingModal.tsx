"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import {
  ChevronRight,
  Search,
  Star,
  Code,
  Server,
  Globe,
  Zap,
  Clock,
  Check,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

// TemplateSelectionModal.tsx
type TemplateSelectionModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: {
    title: string;
    template: "REACT" | "NEXTJS" | "EXPRESS" | "VUE" | "HONO" | "ANGULAR";
    description?: string;
  }) => void | Promise<void>;
};

interface TemplateOption {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  popularity: number;
  tags: string[];
  features: string[];
  category: "frontend" | "backend" | "fullstack";
}

const templates: TemplateOption[] = [
  {
    id: "react",
    name: "React",
    description:
      "A JavaScript library for building user interfaces with component-based architecture",
    icon: "/react.svg",
    color: "#61DAFB",
    popularity: 5,
    tags: ["UI", "Frontend", "JavaScript"],
    features: ["Component-Based", "Virtual DOM", "JSX Support"],
    category: "frontend",
  },
  {
    id: "nextjs",
    name: "Next.js",
    description:
      "The React framework for production with server-side rendering and static site generation",
    icon: "/nextjs-icon.svg",
    color: "#000000",
    popularity: 4,
    tags: ["React", "SSR", "Fullstack"],
    features: ["Server Components", "API Routes", "File-based Routing"],
    category: "fullstack",
  },
  {
    id: "express",
    name: "Express",
    description:
      "Fast, unopinionated, minimalist web framework for Node.js to build APIs and web applications",
    icon: "/expressjs-icon.svg",
    color: "#000000",
    popularity: 4,
    tags: ["Node.js", "API", "Backend"],
    features: ["Middleware", "Routing", "HTTP Utilities"],
    category: "backend",
  },
  {
    id: "vue",
    name: "Vue.js",
    description:
      "Progressive JavaScript framework for building user interfaces with an approachable learning curve",
    icon: "/vuejs-icon.svg",
    color: "#4FC08D",
    popularity: 4,
    tags: ["UI", "Frontend", "JavaScript"],
    features: ["Reactive Data Binding", "Component System", "Virtual DOM"],
    category: "frontend",
  },
  {
    id: "hono",
    name: "Hono",
    description:
      "Fast, lightweight, built on Web Standards. Support for any JavaScript runtime.",
    icon: "/hono.svg",
    color: "#e36002",
    popularity: 3,
    tags: ["Node.js", "TypeScript", "Backend"],
    features: [
      "Dependency Injection",
      "TypeScript Support",
      "Modular Architecture",
    ],
    category: "backend",
  },
  {
    id: "angular",
    name: "Angular",
    description:
      "Angular is a web framework that empowers developers to build fast, reliable applications.",
    icon: "/angular-2.svg",
    color: "#DD0031",
    popularity: 3,
    tags: ["React", "Fullstack", "JavaScript"],
    features: [
      "Reactive Data Binding",
      "Component System",
      "Virtual DOM",
      "Dependency Injection",
      "TypeScript Support",
    ],
    category: "fullstack",
  },
];

const TemplateSelectionModal = ({
  isOpen,
  onClose,
  onSubmit,
}: TemplateSelectionModalProps) => {
  const [step, setStep] = useState<"select" | "configure">("select");
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState<
    "all" | "frontend" | "backend" | "fullstack"
  >("all");
  const [projectName, setProjectName] = useState("");

  const filteredTemplates = templates.filter((template) => {
    const matchesSearch =
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLocaleLowerCase())
      );

    const matchesCategory =
      category === "all" || template.category === category;

    return matchesCategory && matchesSearch;
  });

  const handleSelectTemplate = (templateId: string) => {
    setSelectedTemplate(templateId);
  };

  const handleContinue = () => {
    if (selectedTemplate) {
      setStep("configure");
    }
  };

  const handleCreateProject = () => {
    if (selectedTemplate) {
      const templateMap: Record<
        string,
        "REACT" | "NEXTJS" | "EXPRESS" | "VUE" | "HONO" | "ANGULAR"
      > = {
        react: "REACT",
        nextjs: "NEXTJS",
        express: "EXPRESS",
        vue: "VUE",
        hono: "HONO",
        angular: "ANGULAR",
      };

      const template = templates.find((t) => t.id === selectedTemplate);

      onSubmit({
        title: projectName || `New ${template?.name} Project`,
        template: templateMap[selectedTemplate] || "REACT",
        description: template?.description,
      });

      onClose();
      // Reset state for next time
      setStep("select");
      setSelectedTemplate(null);
      setProjectName("");
    }
  };

  const handleBack = () => {
    setStep("select");
  };

  const renderStars = (count: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          size={14}
          className={
            i < count ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }
        />
      ));
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          onClose();
          // Reset state when closing
          setStep("select");
          setSelectedTemplate(null);
          setProjectName("");
        }
      }}
    >
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto bg-[#141715] border-[#2B332E] text-[#F2F5F2]">
        {step === "select" ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold text-[#F2F5F2] flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded border border-[#2B332E] bg-[#0D0F0E] text-xs font-mono text-[#C5F36B]">
                  +
                </span>
                Select a Template
              </DialogTitle>
              <DialogDescription className="text-sm text-[#9BA59E]">
                Choose an environment template to initialize your workspace
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-6 py-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1">
                  <Search
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#9BA59E] outline-none"
                    size={16}
                  />
                  <Input
                    placeholder="Search templates (e.g. React, Next.js, Express)..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9 h-10 bg-[#0D0F0E] border-[#2B332E] text-[#F2F5F2] placeholder:text-[#9BA59E]/50 focus-visible:ring-1 focus-visible:ring-[#C5F36B] focus-visible:border-[#C5F36B]"
                  />
                </div>

                <Tabs
                  defaultValue="all"
                  className="w-full sm:w-auto"
                  onValueChange={(value) =>
                    setCategory(value as "all" | "frontend" | "backend" | "fullstack")
                  }
                >
                  <TabsList className="grid grid-cols-4 w-full sm:w-[380px] bg-[#0D0F0E] border border-[#2B332E] p-1 h-10">
                    <TabsTrigger
                      value="all"
                      className="text-xs text-[#9BA59E] data-[state=active]:bg-[#1B201D] data-[state=active]:text-[#F2F5F2]"
                    >
                      All
                    </TabsTrigger>
                    <TabsTrigger
                      value="frontend"
                      className="text-xs text-[#9BA59E] data-[state=active]:bg-[#1B201D] data-[state=active]:text-[#F2F5F2]"
                    >
                      Frontend
                    </TabsTrigger>
                    <TabsTrigger
                      value="backend"
                      className="text-xs text-[#9BA59E] data-[state=active]:bg-[#1B201D] data-[state=active]:text-[#F2F5F2]"
                    >
                      Backend
                    </TabsTrigger>
                    <TabsTrigger
                      value="fullstack"
                      className="text-xs text-[#9BA59E] data-[state=active]:bg-[#1B201D] data-[state=active]:text-[#F2F5F2]"
                    >
                      Fullstack
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <RadioGroup
                value={selectedTemplate || ""}
                onValueChange={handleSelectTemplate}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                  {filteredTemplates.length > 0 ? (
                    filteredTemplates.map((template) => (
                      <div
                        key={template.id}
                        className={`relative flex p-4 sm:p-5 border rounded-lg cursor-pointer transition-all duration-200 bg-[#0D0F0E] ${
                          selectedTemplate === template.id
                            ? "border-[#C5F36B] shadow-[0_0_0_1px_#C5F36B,0_0_20px_rgba(197,243,107,0.12)] bg-[#141715]"
                            : "border-[#2B332E] hover:border-[#9BA59E]/40 hover:bg-[#111412]"
                        }`}
                        onClick={() => handleSelectTemplate(template.id)}
                      >
                        <div className="absolute top-3.5 right-3.5 flex gap-0.5">
                          {renderStars(template.popularity)}
                        </div>

                        {selectedTemplate === template.id && (
                          <div className="absolute -top-2 -left-2 bg-[#C5F36B] text-[#0D0F0E] rounded-full p-1 shadow-md">
                            <Check size={12} strokeWidth={3} />
                          </div>
                        )}

                        <div className="flex gap-3.5">
                          <div
                            className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-md border border-[#2B332E]/60"
                            style={{ backgroundColor: `${template.color}15` }}
                          >
                            <Image
                              src={template.icon || "/placeholder.svg"}
                              alt={`${template.name} icon`}
                              width={28}
                              height={28}
                              className="object-contain"
                            />
                          </div>

                          <div className="flex flex-col">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-sm font-semibold text-[#F2F5F2]">
                                {template.name}
                              </h3>
                              <div className="flex gap-1">
                                {template.category === "frontend" && (
                                  <Code size={13} className="text-[#C5F36B]" />
                                )}
                                {template.category === "backend" && (
                                  <Server
                                    size={13}
                                    className="text-[#9BA59E]"
                                  />
                                )}
                                {template.category === "fullstack" && (
                                  <Globe
                                    size={13}
                                    className="text-[#D6FF83]"
                                  />
                                )}
                              </div>
                            </div>

                            <p className="text-xs text-[#9BA59E] leading-relaxed mb-3 line-clamp-2">
                              {template.description}
                            </p>

                            <div className="flex flex-wrap gap-1.5 mt-auto">
                              {template.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-[10px] font-mono px-2 py-0.5 border border-[#2B332E] rounded bg-[#141715] text-[#9BA59E]"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <RadioGroupItem
                          value={template.id}
                          id={template.id}
                          className="sr-only"
                        />
                      </div>
                    ))
                  ) : (
                    <div className="col-span-2 flex flex-col items-center justify-center p-8 text-center border border-dashed border-[#2B332E] rounded-lg">
                      <Search size={32} className="text-[#9BA59E]/50 mb-3" />
                      <h3 className="text-sm font-medium text-[#F2F5F2]">
                        No templates found
                      </h3>
                      <p className="text-xs text-[#9BA59E] mt-1">
                        Try adjusting your search query or category filter
                      </p>
                    </div>
                  )}
                </div>
              </RadioGroup>
            </div>

            <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-3 mt-4 pt-4 border-t border-[#2B332E]">
              <div className="flex items-center text-xs text-[#9BA59E]">
                <Clock size={13} className="mr-1.5 text-[#C5F36B]" />
                <span>
                  Setup time:{" "}
                  <strong className="text-[#F2F5F2]">
                    {selectedTemplate ? "Instant (in-browser)" : "Choose template"}
                  </strong>
                </span>
              </div>
              <div className="flex gap-2.5 justify-end">
                <Button
                  variant="outline"
                  onClick={onClose}
                  className="border-[#2B332E] bg-transparent text-[#9BA59E] hover:text-[#F2F5F2] hover:bg-[#1B201D] h-9 text-xs"
                >
                  Cancel
                </Button>
                <Button
                  className="bg-[#C5F36B] hover:bg-[#D6FF83] text-[#0D0F0E] font-medium transition-colors h-9 text-xs disabled:opacity-40"
                  disabled={!selectedTemplate}
                  onClick={handleContinue}
                >
                  Continue <ChevronRight size={14} className="ml-1" />
                </Button>
              </div>
            </div>
          </>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl font-semibold text-[#F2F5F2]">
                Configure Project
              </DialogTitle>
              <DialogDescription className="text-sm text-[#9BA59E]">
                {templates.find((t) => t.id === selectedTemplate)?.name} configuration
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-5 py-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="project-name" className="text-xs text-[#9BA59E] font-mono uppercase tracking-wider">
                  Project Title
                </Label>
                <Input
                  id="project-name"
                  placeholder="my-awesome-project"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="h-10 bg-[#0D0F0E] border-[#2B332E] text-[#F2F5F2] focus-visible:ring-1 focus-visible:ring-[#C5F36B] focus-visible:border-[#C5F36B]"
                />
              </div>

              <div className="p-4 rounded-lg border border-[#2B332E] bg-[#0D0F0E]">
                <h3 className="text-xs font-mono uppercase tracking-wider text-[#9BA59E] mb-3">
                  Included Capabilities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {templates
                    .find((t) => t.id === selectedTemplate)
                    ?.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs text-[#F2F5F2]">
                        <Zap size={13} className="text-[#C5F36B] shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-3 mt-4 pt-4 border-t border-[#2B332E]">
              <Button
                variant="outline"
                onClick={handleBack}
                className="border-[#2B332E] bg-transparent text-[#9BA59E] hover:text-[#F2F5F2] hover:bg-[#1B201D] h-9 text-xs"
              >
                Back
              </Button>
              <Button
                className="bg-[#C5F36B] hover:bg-[#D6FF83] text-[#0D0F0E] font-medium transition-colors h-9 text-xs"
                onClick={handleCreateProject}
              >
                Create Workspace
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default TemplateSelectionModal;
