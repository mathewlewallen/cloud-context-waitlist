import { prismadb } from "@cc/lib/prisma";

export async function getAccountSettings() {
  const myAccount = await prismadb.myAccount.findFirst({});

  return myAccount;
}
