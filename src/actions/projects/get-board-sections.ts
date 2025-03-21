import { prismadb } from "@cc/lib/prisma";

export const getBoardSections = async (boadId: string) => {
  const data = await prismadb.sections.findMany({
    where: {
      board: boadId,
    },
  });

  return data;
};
