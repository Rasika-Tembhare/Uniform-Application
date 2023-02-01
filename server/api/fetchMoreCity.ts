import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  try {
    const getCity = await readBody(event);
    const moreCity = await prisma.schools.findMany({
      select: {
        school_id: true,
        school_name: true,
        school_city: true,
        school_picture: true,
        school_board: true,
        school_hostel: true,
        school_gender: true,
        avg_fees_day: true,
        avg_fees_residential: true,
        perma_link: true,
      },
      // take: 50,
      where: {
        school_city: getCity.city,
      },
      // distinct: ["school_city"],

      // orderBy: {
      //   school_id: "asc",
      // },
    });
    const count = await prisma.schools.count();
    // console.log(count);
    // console.log(`Page 1: `, JSON.stringify(pageOnePosts, undefined, 2));
    return { moreCity, count };
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
