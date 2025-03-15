import { prismadb } from "@cc/lib/prisma";

export const getDocumentsCount = async () => {
  const data = await prismadb.documents.count();
  return data;
};
