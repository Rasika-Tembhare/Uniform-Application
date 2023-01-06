import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default defineEventHandler(async () => {
  try {
    const allUsers = await prisma.schools.findMany({
      take: 50,
    });
    console.dir(allUsers, { depth: null });
    return { allUsers };
  } catch (error) {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
});
