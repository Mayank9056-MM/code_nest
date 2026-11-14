
"use client";

import React, { useState } from "react";
import { LogoutButtonProps } from "../types";
import { signOut } from "next-auth/react";
import { toast } from "sonner";

const LogoutButton = ({ children }: LogoutButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const onLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isLoading) return;

    try {
      setIsLoading(true);
      await signOut({ callbackUrl: "/auth/sign-in" });
    } catch (error) {
      console.error("Sign out error:", error);
      toast.error("Failed to sign out. Please try again.");
      setIsLoading(false);
    }
  };

  return (
    <span
      className={`cursor-pointer inline-flex items-center w-full ${isLoading ? "opacity-50 pointer-events-none" : ""}`}
      onClick={onLogout}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onLogout(e as unknown as React.MouseEvent);
        }
      }}
    >
      {children}
    </span>
  );
};

export default LogoutButton;
