import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// export default defineEventHandler( async (event) => {
// //     // const data = await prisma.user.findMany()
//     const d= 5;
//     return d
// });
export default defineEventHandler(async (event) => {
  try {
    const slug = (event.node.req as any).body;
    // console.log('xyz', slug)
    const updateUser = await prisma.schools.findFirst({
      where: {
        perma_link: slug,
      },
    });
    return updateUser;
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
