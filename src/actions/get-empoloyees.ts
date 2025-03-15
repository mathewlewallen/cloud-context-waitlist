import { prismadb } from "@cc/lib/prisma";

export const getEmployees = async () => {
  const data = await prismadb.employees.findMany({});
  return data;
};
