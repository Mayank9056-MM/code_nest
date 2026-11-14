import React from "react";
import Image from "next/image";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="relative mb-6">
        <div className="absolute -inset-4 bg-[#C5F36B]/5 rounded-full blur-xl pointer-events-none" />
        <Image
          src="/codenest-logo-stacked.svg"
          alt="CodeNest - No projects yet"
          width={140}
          height={140}
          className="relative w-32 h-32 object-contain transition-transform duration-300 hover:scale-105 opacity-85"
        />
      </div>
      <h2 className="text-lg font-semibold text-[#F2F5F2]">No projects yet</h2>
      <p className="text-xs text-[#9BA59E] max-w-sm mt-1 mb-6 font-mono">
        Select a template above to spin up a new high-performance cloud playground in seconds.
      </p>
    </div>
  );
};

export default EmptyState;
