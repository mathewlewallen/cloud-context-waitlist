import { prismadb } from "@cc/lib/prisma";

export const getLeadsCount = async () => {
  const data = await prismadb.crm_Leads.count();
  return data;
};
