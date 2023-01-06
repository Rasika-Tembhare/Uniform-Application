import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  try {
    const review = JSON.parse((event.node.req as any).body).toString();
    const rating = await prisma.reviews.findMany({
      select: {
        rating: true,
      },
      where: {
        school_id: { gt: review.sch_id },
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
