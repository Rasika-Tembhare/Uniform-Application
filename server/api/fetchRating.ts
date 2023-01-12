import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  try {
    const sch_id = JSON.parse((event.node.req as any).body).toString();
    const rating = await prisma.reviews.aggregate({
      _avg: {
        rating: true,
      },
      _count: {
        review: true,
      },
      where: {
        school_id: sch_id,
      },
    });

    console.dir(rating, { depth: null });
    return rating;
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
