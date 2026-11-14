"use client";

import React from "react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LogOut, User as UserIcon, LayoutDashboard } from "lucide-react";
import LogoutButton from "./logout-button";
import { useCurrentUser } from "../hooks/use-current-user";

const UserButton = () => {
  const user = useCurrentUser();

  if (!user) {
    return (
      <Link href="/auth/sign-in">
        <Button
          size="sm"
          className="h-8 px-3 text-xs font-semibold bg-[#C5F36B] hover:bg-[#D6FF83] text-[#0D0F0E] rounded-md transition-all shadow-xs cursor-pointer font-mono"
        >
          Sign In
        </Button>
      </Link>
    );
  }

  const initials = (user.name || user.email || "U")
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-hidden">
        <div className={cn("relative rounded-full ring-1 ring-[#2B332E] hover:ring-[#C5F36B]/60 transition-all cursor-pointer")}>
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={user.image ?? undefined}
              alt={user.name ?? "User avatar"}
              className="object-cover"
            />
            <AvatarFallback className="bg-[#1B201D] text-[#C5F36B] font-semibold text-xs font-mono">
              {initials || <UserIcon className="h-4 w-4" />}
            </AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56 p-1.5 shadow-xl bg-[#141715] border border-[#2B332E] text-[#F2F5F2]">
        <div className="px-2 py-1.5">
          <p className="text-sm font-semibold truncate text-[#F2F5F2]">
            {user.name || "User"}
          </p>
          <p className="text-xs text-[#9BA59E] truncate font-mono">{user.email}</p>
        </div>
        <DropdownMenuSeparator className="bg-[#2B332E]" />
        <DropdownMenuItem asChild>
          <Link href="/dashboard" className="flex items-center gap-2 cursor-pointer text-[#F2F5F2] hover:text-[#C5F36B]">
            <LayoutDashboard className="h-4 w-4 text-[#9BA59E]" />
            <span>Dashboard</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator className="bg-[#2B332E]" />
        <LogoutButton>
          <DropdownMenuItem className="text-red-400 focus:text-red-300 focus:bg-red-500/10 cursor-pointer w-full">
            <LogOut className="h-4 w-4 mr-2" />
            <span>Log Out</span>
          </DropdownMenuItem>
        </LogoutButton>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
