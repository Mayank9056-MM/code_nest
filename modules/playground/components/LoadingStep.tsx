import { Check, Loader2 } from "lucide-react";
import { type LoadingStepProps } from "../types";

export const LoadingStep: React.FC<LoadingStepProps> = ({
  currentStep,
  step,
  label,
}) => {
  const isDone = currentStep > step;
  const isActive = currentStep === step;

  return (
    <div className="flex items-center gap-3 py-2 px-1">
      <div
        className={`flex h-6 w-6 items-center justify-center rounded-full border transition-colors ${
          isActive
            ? "border-[#C5F36B] bg-[#C5F36B]/15 text-[#C5F36B]"
            : isDone
            ? "border-[#C5F36B]/50 bg-[#C5F36B]/10 text-[#C5F36B]"
            : "border-[#2B332E] bg-[#1B201D] text-[#9BA59E]"
        }`}
      >
        {isDone ? (
          <Check className="h-3.5 w-3.5 stroke-[2.5]" />
        ) : isActive ? (
          <Loader2 className="h-3.5 w-3.5 animate-spin" />
        ) : (
          <div className="h-1.5 w-1.5 rounded-full bg-[#9BA59E]/40" />
        )}
      </div>
      <span
        className={`text-xs font-mono transition-colors ${
          isActive
            ? "text-[#C5F36B] font-medium"
            : isDone
            ? "text-[#F2F5F2]"
            : "text-[#9BA59E]"
        }`}
      >
        {label}
      </span>
    </div>
  );
};
