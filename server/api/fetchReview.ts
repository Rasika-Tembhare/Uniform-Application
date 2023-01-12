import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  try {
    // const review = JSON.parse((event.node.req as any).body);

    const allReviews = await prisma.reviews.findMany({
      where: {
        approve: "Y",
      },

      orderBy: {
        school_id: "asc",
      },
    });

    console.dir(allReviews, { depth: null });
    return allReviews;
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

// export default defineEventHandler(async (event) => {
//   const getRating = await prisma.reviews.findMany({
//     select: {

//       date: true,
//       rating: true,
//       school_id: true,
//       review: true,
//       name: true,
//     },
//     where: {
//       AND: [
//         {
//           school_id : school_id;
//         },
//         {
//           approve: "Y",
//         }
//       ],
//     },
//   });
//   return getRating;
// });
