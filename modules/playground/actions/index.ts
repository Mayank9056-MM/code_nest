"use server";

import { db } from "@/lib/db";
import { currentUser } from "@/modules/auth/actions";
import { TemplateFolder } from "../lib/path-to-json";

export const getPlaygroundById = async (id: string) => {
  const user = await currentUser();
  if (!user?.id) {
    return null;
  }

  try {
    const playground = await db.playground.findFirst({
      where: {
        id,
        userId: user.id,
      },
      select: {
        id: true,
        title: true,
        description: true,
        templateFiles: {
          select: {
            content: true,
          },
        },
      },
    });

    return playground;
  } catch (error) {
    console.log("Error : getPlaygroundById", error);
    return null;
  }
};

export const SaveUpdatedCode = async (
  playgroundId: string,
  data: TemplateFolder
) => {
  const user = await currentUser();
  if (!user?.id) return null;

  try {
    const playground = await db.playground.findFirst({
      where: {
        id: playgroundId,
        userId: user.id,
      },
    });

    if (!playground) {
      console.log("SaveUpdatedCode error: Unauthorized playground access");
      return null;
    }

    const updatedPlaygroundd = await db.templateFile.upsert({
      where: {
        playgroundId,
      },
      update: {
        content: JSON.stringify(data),
      },
      create: {
        playgroundId,
        content: JSON.stringify(data),
      },
    });

    return updatedPlaygroundd;
  } catch (error) {
    console.log("SaveUpdatedCode error:", error);
    return null;
  }
};
