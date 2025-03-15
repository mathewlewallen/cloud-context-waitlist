import { prismadb } from "@cc/lib/prisma";

export const getSections = async () => {
  const data = await prismadb.sections.findMany({});

  return data;
};
