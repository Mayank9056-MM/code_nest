"use server";

import { db } from "@/lib/db";
import { currentUser } from "@/modules/auth/actions";
import { revalidatePath } from "next/cache";

export const toggleStarMarked = async (
  playgroundId: string,
  isChecked: boolean
) => {
  const user = await currentUser();
  const userId = user?.id;
  if (!userId) {
    throw new Error("User authentication required");
  }

  try {
    // Verify user owns the playground
    const playground = await db.playground.findFirst({
      where: {
        id: playgroundId,
        userId: userId,
      },
    });

    if (!playground) {
      throw new Error("Playground not found or unauthorized");
    }

    if (isChecked) {
      await db.starMark.upsert({
        where: {
          userId_playgroundId: {
            userId: userId,
            playgroundId: playgroundId,
          },
        },
        create: {
          userId: userId,
          playgroundId: playgroundId,
          isMarked: true,
        },
        update: {
          isMarked: true,
        },
      });
    } else {
      await db.starMark.deleteMany({
        where: {
          userId: userId,
          playgroundId: playgroundId,
        },
      });
    }
    revalidatePath("/dashboard");
    return { success: true, isMarked: isChecked };
  } catch (error) {
    console.error("Error updating star mark:", error);
    return {
      success: false,
      error: "Failed to update star mark",
    };
  }
};

export const getAllPlaygroundForUser = async () => {
  const user = await currentUser();

  // Strict check: unauthenticated users must never see any projects
  if (!user?.id) {
    return [];
  }

  try {
    const playground = await db.playground.findMany({
      where: {
        userId: user.id,
      },
      include: {
        user: true,
        Starmark: {
          where: {
            userId: user.id,
          },
          select: {
            isMarked: true,
          },
        },
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    return playground;
  } catch (error) {
    console.error("Error : getAllPlaygroundForUser", error);
    return [];
  }
};

export const createPlayground = async (data: {
  title: string;
  template: "REACT" | "NEXTJS" | "EXPRESS" | "VUE" | "HONO" | "ANGULAR";
  description?: string;
}) => {
  const user = await currentUser();
  if (!user?.id) {
    throw new Error("User authentication required");
  }

  const { template, title, description } = data;

  try {
    const playground = await db.playground.create({
      data: {
        title: title,
        description: description,
        template: template,
        userId: user.id,
      },
    });

    revalidatePath("/dashboard");
    return playground;
  } catch (error) {
    console.error("Error : createPlayground", error);
    throw error;
  }
};

export const deleteProjectById = async (id: string) => {
  const user = await currentUser();
  if (!user?.id) {
    throw new Error("User authentication required");
  }

  try {
    // Ensure the project belongs to the current user
    const existing = await db.playground.findFirst({
      where: {
        id,
        userId: user.id,
      },
    });

    if (!existing) {
      throw new Error("Project not found or unauthorized");
    }

    await db.playground.delete({
      where: {
        id,
      },
    });

    revalidatePath("/dashboard");
    return { success: true };
  } catch (error) {
    console.error("Error : deleteProjectById", error);
    throw error;
  }
};

export const editProjectById = async (
  id: string,
  data: { title: string; description: string }
) => {
  const user = await currentUser();
  if (!user?.id) {
    throw new Error("User authentication required");
  }

  try {
    // Ensure the project belongs to the current user
    const existing = await db.playground.findFirst({
      where: {
        id,
        userId: user.id,
      },
    });

    if (!existing) {
      throw new Error("Project not found or unauthorized");
    }

    const updated = await db.playground.update({
      where: {
        id,
      },
      data: {
        title: data.title,
        description: data.description,
      },
    });

    revalidatePath("/dashboard");
    return updated;
  } catch (error) {
    console.error("Error : editProjectById", error);
    throw error;
  }
};

export const dublicateProjectById = async (id: string) => {
  const user = await currentUser();
  if (!user?.id) {
    throw new Error("User authentication required");
  }

  try {
    const originalPlayground = await db.playground.findFirst({
      where: {
        id,
        userId: user.id,
      },
      include: {
        templateFiles: true,
      },
    });

    if (!originalPlayground) {
      throw new Error("Original playground not found or unauthorized");
    }

    const duplicatedPlayground = await db.playground.create({
      data: {
        title: `${originalPlayground.title} (copy)`,
        description: originalPlayground.description,
        template: originalPlayground.template,
        userId: user.id,
        ...(originalPlayground.templateFiles?.[0]?.content
          ? {
              templateFiles: {
                create: {
                  content: originalPlayground.templateFiles[0].content,
                },
              },
            }
          : {}),
      },
    });

    revalidatePath("/dashboard");
    return duplicatedPlayground;
  } catch (error) {
    console.error("Error : dublicateProjectById", error);
    throw error;
  }
};
