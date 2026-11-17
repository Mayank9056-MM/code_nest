import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import UserButton from "@/modules/auth/components/user-button";
import { getAllPlaygroundForUser } from "@/modules/dashboard/actions";
import { DashboardSidebar } from "@/modules/dashboard/components/DashboardSidebar";
import React from "react";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  if (!session?.user) {
    redirect("/auth/sign-in?callbackUrl=/dashboard");
  }

  const playgroundData = await getAllPlaygroundForUser();

  const technologyIconMap: Record<string, string> = {
    REACT: "Zap",
    NEXTJS: "Lightbulb",
    EXPRESS: "Database",
    VUE: "Compass",
    HONO: "FlameIcon",
    ANGULAR: "Terminal",
  };

  const formattedPlaygroundData = playgroundData?.map((item: {
    id: string;
    title: string;
    template: string;
    Starmark?: { isMarked: boolean }[];
  }) => ({
    id: item.id,
    name: item.title,
    starred: item.Starmark?.[0]?.isMarked || false,
    icon: technologyIconMap[item.template] || "Code2",
  }));

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full overflow-x-hidden">
        {/* Dashboard Sidebar */}
        <DashboardSidebar initialPlaygroundData={formattedPlaygroundData || []} />
        <main className="flex-1 flex flex-col min-w-0 bg-[#0D0F0E]">
          <header className="sticky top-0 z-10 flex h-14 shrink-0 items-center justify-between gap-2 border-b border-[#2B332E] bg-[#0D0F0E]/90 backdrop-blur-md px-4">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="-ml-1 text-[#9BA59E] hover:text-[#F2F5F2]" />
              <Separator orientation="vertical" className="mr-2 h-4 bg-[#2B332E]" />
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C5F36B]" />
                <h2 className="text-xs font-mono font-medium tracking-wide text-[#F2F5F2]">
                  Workspaces // Dashboard
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <UserButton />
            </div>
          </header>
          <div className="flex-1 bg-[#0D0F0E]">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
