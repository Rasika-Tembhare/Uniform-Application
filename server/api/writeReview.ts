import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  // const Users = JSON.parse(event.node.req as any).body.toString();
  const info = await readBody(event);

  const user = await prisma.reviews.create({
    data: {
      date: new Date(), //current date and time
      name: info.name, //get it from user
      school_id: info.school_id.toString(), // id of the school the user is writing the review for
      contact: info.contact, // contact numner that user gives in the modal
      review: info.review, //review the user writes in the modal
      rating: parseFloat(info.rating), //rating the user gives
      email: info.email, //email the user gives
      approve: "N",
    },
  });
  // console.log(user);
  return user;
});
