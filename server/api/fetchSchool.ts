import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// export default defineEventHandler( async (event) => {
// //     // const data = await prisma.user.findMany()
//     const d= 5;
//     return d
// });
export default defineEventHandler(async (event) => {
  const slug = event.node.req.body.toString();
  // console.log('xyz', slug)
  const updateUser = await prisma.schools.findFirst({
    where: {
      perma_link: slug,
    },
  });
  return updateUser;
});
