"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { FolderGit2 } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

const AddRepo = () => {
  const handleClick = () => {
    toast.info("GitHub Repository Import: Enter repository URL or select from your GitHub repositories in project settings.");
  };

  return (
    <div
      onClick={handleClick}
      className="group px-6 py-5 flex flex-row justify-between items-center border border-[#2B332E] rounded-xl bg-[#141715] hover:bg-[#1B201D] cursor-pointer 
      transition-all duration-200 ease-in-out
      hover:border-[#C5F36B]/60 shadow-xs"
    >
      <div className="flex flex-row justify-center items-start gap-4">
        <Button
          variant={"outline"}
          className="flex justify-center items-center bg-[#1B201D] border-[#2B332E] text-[#F2F5F2] group-hover:bg-[#C5F36B] group-hover:text-[#0D0F0E] group-hover:border-[#C5F36B] transition-colors duration-200 rounded-lg"
          size={"icon"}
        >
          <FolderGit2 size={18} className="transition-transform duration-200 group-hover:scale-105" />
        </Button>
        <div className="flex flex-col">
          <h1 className="text-base font-semibold text-[#F2F5F2] group-hover:text-[#C5F36B] transition-colors">
            Open GitHub Repository
          </h1>
          <p className="text-xs text-[#9BA59E] max-w-[220px] font-mono">
            Clone and execute repos in browser
          </p>
        </div>
      </div>

      <div className="relative flex items-center justify-center p-2.5 rounded-xl border border-[#2B332E] bg-[#0D0F0E] opacity-90 group-hover:opacity-100 group-hover:border-[#C5F36B]/40 transition-all">
        <Image
          src="/github.svg"
          alt="Open GitHub repository"
          width={52}
          height={52}
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    </div>
  );
};

export default AddRepo;
