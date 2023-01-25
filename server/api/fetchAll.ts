import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  try {
    const pageOnePosts = await prisma.schools.findMany({
      take: 50,
      // skip: 50 * page,
      orderBy: {
        school_id: "asc",
      },
    });
    // const last_id = pageOnePosts.slice(-1)[0].school_id;
    // console.log("last id", last_id);
    // const otherSchool = await prisma.schools.findMany({
    //   where: {
    //     school_id: {
    //       gt: last_id,
    //     },
    //   },
    //   take: 50,
    //   skip: page * 50,
    //   orderBy: {
    //     school_id: "asc",
    //   },
    // });
    // pageOnePosts.push(...otherSchool);

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
