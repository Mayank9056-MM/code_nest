"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Code2,
  Compass,
  FolderPlus,
  History,
  Home,
  LayoutDashboard,
  Lightbulb,
  type LucideIcon,
  Plus,
  Star,
  Terminal,
  Zap,
  Database,
  FlameIcon,
  ChevronsUpDown,
  LogOut,
  User as UserIcon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarGroupAction,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCurrentUser } from "@/modules/auth/hooks/use-current-user";
import LogoutButton from "@/modules/auth/components/logout-button";
import { BrandMark } from "@/modules/home/components/BrandLogo";

// Define the interface for a single playground item, icon is now a string
interface PlaygroundData {
  id: string;
  name: string;
  icon: string; // Changed to string
  starred: boolean;
}

// Map icon names (strings) to their corresponding LucideIcon components
const lucideIconMap: Record<string, LucideIcon> = {
  Zap: Zap,
  Lightbulb: Lightbulb,
  Database: Database,
  Compass: Compass,
  FlameIcon: FlameIcon,
  Terminal: Terminal,
  Code2: Code2, // Include the default icon
  // Add any other icons you might use dynamically
};

export function DashboardSidebar({
  initialPlaygroundData = [],
}: {
  initialPlaygroundData?: PlaygroundData[];
}) {
  const pathname = usePathname();
  const user = useCurrentUser();
  const starredPlaygrounds = (initialPlaygroundData ?? []).filter((p) => p.starred);
  const recentPlaygrounds = initialPlaygroundData ?? [];

  return (
    <Sidebar variant="inset" collapsible="icon" className="border-1 border-r">
      <SidebarHeader className="border-b border-[#2B332E] py-3 px-3">
        <Link href="/" className="flex items-center gap-2.5 px-2 group">
          <BrandMark size="sm" />
          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="font-semibold text-sm tracking-tight text-[#F2F5F2] leading-tight flex items-center gap-0.5">
              <span>CodeNest</span>
              <span className="text-[#C5F36B] font-bold">.</span>
            </span>
            <span className="text-[10px] font-mono text-[#9BA59E]">Cloud IDE</span>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/"}
                tooltip="Home"
              >
                <Link href="/">
                  <Home className="h-4 w-4" />
                  <span>Home</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/dashboard"}
                tooltip="Dashboard"
              >
                <Link href="/dashboard">
                  <LayoutDashboard className="h-4 w-4" />
                  <span>Dashboard</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>
            <Star className="h-4 w-4 mr-2" />
            Starred
          </SidebarGroupLabel>
          <SidebarGroupAction title="Add starred playground">
            <Plus className="h-4 w-4" />
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {starredPlaygrounds.length === 0 &&
              recentPlaygrounds.length === 0 ? (
                <div className="text-center text-muted-foreground py-4 w-full">
                  Create your playground
                </div>
              ) : (
                starredPlaygrounds.map((playground) => {
                  const IconComponent = lucideIconMap[playground.icon] || Code2;
                  return (
                    <SidebarMenuItem key={playground.id}>
                      <SidebarMenuButton
                        asChild
                        isActive={pathname === `/playground/${playground.id}`}
                        tooltip={playground.name}
                      >
                        <Link href={`/playground/${playground.id}`}>
                          {IconComponent && (
                            <IconComponent className="h-4 w-4" />
                          )}
                          <span>{playground.name}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>
            <History className="h-4 w-4 mr-2" />
            Recent
          </SidebarGroupLabel>
          <SidebarGroupAction title="Create new playground">
            <FolderPlus className="h-4 w-4" />
          </SidebarGroupAction>
          <SidebarGroupContent>
            <SidebarMenu>
              {starredPlaygrounds.length === 0 && recentPlaygrounds.length === 0
                ? null
                : recentPlaygrounds.map((playground) => {
                    const IconComponent =
                      lucideIconMap[playground.icon] || Code2;
                    return (
                      <SidebarMenuItem key={playground.id}>
                        <SidebarMenuButton
                          asChild
                          isActive={pathname === `/playground/${playground.id}`}
                          tooltip={playground.name}
                        >
                          <Link href={`/playground/${playground.id}`}>
                            {IconComponent && (
                              <IconComponent className="h-4 w-4" />
                            )}
                            <span>{playground.name}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="View all">
                  <Link href="/playgrounds">
                    <span className="text-sm text-muted-foreground">
                      View all playgrounds
                    </span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-border/50 p-2">
        <SidebarMenu>
          <SidebarMenuItem>
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground cursor-pointer"
                  >
                    <Avatar className="h-8 w-8 rounded-lg border border-[#2B332E]">
                      <AvatarImage src={user.image ?? undefined} alt={user.name ?? "User"} />
                      <AvatarFallback className="rounded-lg bg-[#C5F36B]/15 text-[#C5F36B] font-mono font-semibold text-xs">
                        {(user.name || user.email || "U").slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                      <span className="truncate font-semibold">{user.name || "User"}</span>
                      <span className="truncate text-xs text-muted-foreground">{user.email}</span>
                    </div>
                    <ChevronsUpDown className="ml-auto size-4 group-data-[collapsible=icon]:hidden" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56 rounded-lg p-1.5 shadow-xl bg-[#141715] border-[#2B332E] text-[#F2F5F2]"
                  side="right"
                  align="end"
                  sideOffset={4}
                >
                  <div className="flex items-center gap-2 p-2">
                    <Avatar className="h-8 w-8 rounded-lg border border-[#2B332E]">
                      <AvatarImage src={user.image ?? undefined} alt={user.name ?? "User"} />
                      <AvatarFallback className="rounded-lg bg-[#C5F36B]/15 text-[#C5F36B] font-mono font-semibold text-xs">
                        {(user.name || user.email || "U").slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">{user.name || "User"}</span>
                      <span className="truncate text-xs text-muted-foreground">{user.email}</span>
                    </div>
                  </div>
                  <DropdownMenuSeparator className="bg-[#2B332E]" />
                  <DropdownMenuItem asChild>
                    <Link href="/" className="flex items-center gap-2 cursor-pointer focus:bg-[#1B201D] focus:text-[#F2F5F2]">
                      <Home className="h-4 w-4 text-[#9BA59E]" />
                      <span>Home</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard" className="flex items-center gap-2 cursor-pointer focus:bg-[#1B201D] focus:text-[#F2F5F2]">
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
            ) : (
              <SidebarMenuButton asChild tooltip="Sign In">
                <Link href="/auth/sign-in" className="flex items-center gap-2">
                  <UserIcon className="h-4 w-4" />
                  <span>Sign In</span>
                </Link>
              </SidebarMenuButton>
            )}
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
