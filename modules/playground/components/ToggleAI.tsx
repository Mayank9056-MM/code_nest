"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Bot, 
  Loader2, 
  Power, 
  PowerOff, 
  Sparkles 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ToggleAIProps {
  isEnabled: boolean;
  onToggle: (value: boolean) => void;
  suggestionLoading: boolean;
  loadingProgress?: number;
  activeFeature?: string;
}

const ToggleAI: React.FC<ToggleAIProps> = ({
  isEnabled,
  onToggle,
  suggestionLoading,
  loadingProgress = 0,
  activeFeature,
}) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          size="sm" 
          variant="outline"
          className={cn(
            "relative gap-2 h-8 px-3 text-xs font-mono font-medium transition-all duration-200 cursor-pointer",
            isEnabled 
              ? "bg-[#141715] hover:bg-[#1B201D] text-[#F2F5F2] border-[#C5F36B]/50 shadow-[0_0_12px_rgba(197,243,107,0.1)]" 
              : "bg-[#0D0F0E] hover:bg-[#141715] text-[#9BA59E] border-[#2B332E]",
            suggestionLoading && "opacity-75"
          )}
          onClick={(e) => e.preventDefault()}
        >
          {suggestionLoading ? (
            <Loader2 className="h-3.5 w-3.5 animate-spin text-[#C5F36B]" />
          ) : (
            <Sparkles className="h-3.5 w-3.5 text-[#C5F36B]" />
          )}
          <span>AI</span>
          <div
            className={cn(
              "w-1.5 h-1.5 rounded-full transition-all",
              isEnabled ? "bg-[#C5F36B] shadow-[0_0_6px_#C5F36B]" : "bg-[#9BA59E]/40"
            )}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-72 bg-[#141715] border-[#2B332E] text-[#F2F5F2] shadow-2xl p-1.5">
        <DropdownMenuLabel className="flex items-center justify-between py-2 px-2">
          <div className="flex items-center gap-2">
            <Bot className="h-4 w-4 text-[#C5F36B]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#F2F5F2]">AI Code Assistant</span>
          </div>
          <Badge 
            variant="outline" 
            className={cn(
              "text-[10px] font-mono",
              isEnabled 
                ? "bg-[#C5F36B]/15 text-[#C5F36B] border-[#C5F36B]/40" 
                : "bg-[#0D0F0E] text-[#9BA59E] border-[#2B332E]"
            )}
          >
            {isEnabled ? "ACTIVE" : "DISABLED"}
          </Badge>
        </DropdownMenuLabel>
        
        {suggestionLoading && activeFeature && (
          <div className="px-2 pb-2">
            <div className="space-y-1.5 p-2 rounded border border-[#2B332E] bg-[#0D0F0E]">
              <div className="flex items-center justify-between text-[11px] font-mono text-[#9BA59E]">
                <span>{activeFeature}</span>
                <span className="text-[#C5F36B]">{Math.round(loadingProgress)}%</span>
              </div>
              <Progress 
                value={loadingProgress} 
                className="h-1 bg-[#141715]"
              />
            </div>
          </div>
        )}
        
        <DropdownMenuSeparator className="bg-[#2B332E]" />
        
        <DropdownMenuItem 
          onClick={() => onToggle(!isEnabled)}
          className="py-2.5 px-2 cursor-pointer focus:bg-[#1B201D] focus:text-[#F2F5F2] rounded"
        >
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2.5">
              {isEnabled ? (
                <Power className="h-4 w-4 text-[#C5F36B]" />
              ) : (
                <PowerOff className="h-4 w-4 text-[#9BA59E]" />
              )}
              <div>
                <div className="text-xs font-medium text-[#F2F5F2]">
                  {isEnabled ? "Disable" : "Enable"} AI Suggestions
                </div>
                <div className="text-[11px] text-[#9BA59E]">
                  Toggle inline code completion
                </div>
              </div>
            </div>
            <div className={cn(
              "w-7 h-4 rounded-full border transition-all duration-200 relative",
              isEnabled 
                ? "bg-[#C5F36B] border-[#C5F36B]" 
                : "bg-[#0D0F0E] border-[#2B332E]"
            )}>
              <div className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-200 absolute top-0.5",
                isEnabled ? "left-3.5 bg-[#0D0F0E]" : "left-0.5 bg-[#9BA59E]"
              )} />
            </div>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ToggleAI;
