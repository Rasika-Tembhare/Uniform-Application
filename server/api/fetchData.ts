import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  try {
    console.dir(event.node.req);
    const data = await readBody(event);

    const { page } = data;
    console.log(page);
    const post = await prisma.schools.findMany({
      take: 50,
      skip: 50 * page,
      orderBy: {
        school_id: "asc",
      },
    });
    const count = await prisma.schools.count();
    // console.log(count);
    // console.log(`Page 1: `, JSON.stringify(post, undefined, 2));
    return { post, count };
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
