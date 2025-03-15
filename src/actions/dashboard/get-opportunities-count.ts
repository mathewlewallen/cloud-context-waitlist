import { prismadb } from "@cc/lib/prisma";

export const getOpportunitiesCount = async () => {
  const data = await prismadb.crm_Opportunities.count();
  return data;
};
