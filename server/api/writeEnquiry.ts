import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const value = await readBody(event);
  const sendEnquiry = await prisma.enquiry.create({
    data: {
      name: value.fname,
      contact: value.mob,
      email: value.email,
      school_id: value.school_id.toString(),
      class_selected: value.selectClass,
    },
  });
  // console.log(sendEnquiry);

  return sendEnquiry;
});
