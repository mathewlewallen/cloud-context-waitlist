import { prismadb } from "@cc/lib/prisma";

export const getBoardsCount = async () => {
  const data = await prismadb.boards.count();
  return data;
};
