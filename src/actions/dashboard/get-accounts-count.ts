import { prismadb } from "@cc/lib/prisma";

export const getAccountsCount = async () => {
  const data = await prismadb.crm_Accounts.count();
  return data;
};
