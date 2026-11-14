import { auth } from "@/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

export default async function PlaygroundLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const session = await auth();
  const { id } = await params;

  if (!session?.user?.id) {
    redirect(`/auth/sign-in?callbackUrl=/playground/${id}`);
  }

  // Ensure this playground exists and belongs to the authenticated user
  const playground = await db.playground.findFirst({
    where: {
      id,
      userId: session.user.id,
    },
    select: { id: true },
  });

  if (!playground) {
    redirect("/dashboard");
  }

  return <SidebarProvider>{children}</SidebarProvider>;
}
