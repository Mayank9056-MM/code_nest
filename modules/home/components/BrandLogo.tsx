import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  className?: string;
  showTagline?: boolean;
  size?: "sm" | "md" | "lg";
  href?: string;
}

export function BrandMark({ size = "md", className }: { size?: "sm" | "md" | "lg"; className?: string }) {
  const sizeClasses = {
    sm: "h-7 w-7 rounded-md",
    md: "h-8 w-8 rounded-lg",
    lg: "h-10 w-10 rounded-xl",
  };

  const svgSizes = {
    sm: 15,
    md: 18,
    lg: 22,
  };

  return (
    <div
      className={cn(
        "relative flex items-center justify-center bg-[#141715] border border-[#2B332E] shadow-xs shrink-0 select-none",
        sizeClasses[size],
        className
      )}
      aria-hidden="true"
    >
      <svg
        width={svgSizes[size]}
        height={svgSizes[size]}
        viewBox="0 0 240 240"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-200 group-hover:scale-105 shrink-0"
      >
        <path
          fill="#F2F5F2"
          d="M240 0 H0 V240 H240 V216 H24 V24 H240 Z M216 48 H48 V192 H216 V168 H72 V72 H216 Z"
        />
        <path fill="#C5F36B" d="M96 96 H144 V144 H96 Z" />
      </svg>
    </div>
  );
}

export function BrandLogoImage({
  width = 140,
  height = 42,
  className,
  variant = "primary",
}: {
  width?: number;
  height?: number;
  className?: string;
  variant?: "primary" | "white" | "stacked" | "icon";
}) {
  const srcMap = {
    primary: "/codenest-logo-primary.svg",
    white: "/codenest-logo-white.svg",
    stacked: "/codenest-logo-stacked.svg",
    icon: "/codenest-logo-icon.svg",
  };

  return (
    <Image
      src={srcMap[variant]}
      alt="CodeNest Logo"
      width={width}
      height={height}
      className={cn("object-contain", className)}
      priority
    />
  );
}

export function BrandLogo({
  className,
  showTagline = false,
  size = "md",
  href = "/",
}: BrandLogoProps) {
  const textSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg",
  };

  const content = (
    <div className={cn("group inline-flex items-center gap-2.5 select-none", className)}>
      <BrandMark size={size} />
      <div className="flex flex-col leading-none">
        <span
          className={cn(
            "font-semibold tracking-tight text-[#F2F5F2] flex items-center gap-0.5",
            textSizes[size]
          )}
        >
          <span>CodeNest</span>
          <span className="text-[#C5F36B] font-bold">.</span>
        </span>
        {showTagline && (
          <span className="text-[10px] font-mono tracking-wider text-[#9BA59E] uppercase mt-0.5">
            Build. Run. Create.
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex items-center focus:outline-hidden" aria-label="CodeNest home">
        {content}
      </Link>
    );
  }

  return content;
}
