import { prismadb } from "@cc/lib/prisma";

export const getContactCount = async () => {
  const data = await prismadb.crm_Contacts.count();
  return data;
};
