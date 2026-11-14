"use client";

import { Button } from "@/components/ui/button";
// import { createPlayground } from "@/features/playground/actions";
import { Plus } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import TemplateSelectingModal from "./TemplateSelectingModal";
import { createPlayground } from "../actions";

const AddNewButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const handleSubmit = async (data: {
    title: string;
    template: "REACT" | "NEXTJS" | "EXPRESS" | "VUE" | "HONO" | "ANGULAR";
    description?: string;
  }) => {
    const res = await createPlayground(data);
    toast.success(`Playground created successfully`);
    setIsModalOpen(false);
    if (res?.id) {
      router.push(`/playground/${res.id}`);
    }
  };

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
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
            <Plus
              size={18}
              className="transition-transform duration-200 group-hover:rotate-90"
            />
          </Button>
          <div className="flex flex-col">
            <h1 className="text-base font-semibold text-[#F2F5F2] group-hover:text-[#C5F36B] transition-colors">
              New Playground
            </h1>
            <p className="text-xs text-[#9BA59E] max-w-[220px] font-mono">
              Create sandbox from template
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden opacity-80 group-hover:opacity-100 transition-opacity">
          <Image
            src={"/add-new.svg"}
            alt="Create new playground"
            width={120}
            height={120}
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      <TemplateSelectingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </>
  );
};

export default AddNewButton;
