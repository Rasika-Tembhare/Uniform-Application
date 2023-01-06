import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  // const Users = JSON.parse(event.node.req as any).body.toString();
  const { name, school_id, contact, review, rating, email } = JSON.parse(
    (event.node.req as any).body
  );

  const user = await prisma.reviews.create({
    data: {
      date: new Date(), //current date and time
      name: name, //get it from user
      school_id: school_id.toString(), // id of the school the user is writing the review for
      contact: contact, // contact numner that user gives in the modal
      review: review, //review the user writes in the modal
      rating: rating, //rating the user gives
      email: email, //email the user gives
    },
  });
  console.log(user);
  return user;
});
