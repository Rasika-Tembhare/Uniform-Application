import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  try {
    const pageOnePosts = await prisma.schools.findMany({
      select: {
        school_id: true,
        school_name: true,
        school_city: true,
        school_picture: true,
        school_board: true,
        school_hostel: true,
        school_gender: true,
        perma_link: true,
      },
      take: 100,
      // skip: 50 * page,
      orderBy: {
        school_id: "asc",
      },
    });

    const count = await prisma.schools.count();
    // console.log(count);
    // console.log(`Page 1: `, JSON.stringify(pageOnePosts, undefined, 2));
    return { pageOnePosts, count };
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
