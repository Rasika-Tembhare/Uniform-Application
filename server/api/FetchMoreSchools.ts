import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default defineEventHandler(async (event) => {
  const school = JSON.parse((event.node.req as any).body);
  const schools = await prisma.schools.findMany({
    select: {
      school_id: true,
      school_name: true,
      school_board: true,
      perma_link: true,
      school_city: true,
    },
    where: {
      AND: [
        {
          school_id: {
            gt: school.id,
          },
        },
        {
          school_city: school.city,
        },
      ],
    },
    take: 3,
    orderBy: {
      school_id: "asc",
    },
  });
  // if(schools.length >0 && schools.length <=1) return schools
  if (schools.length < 3) {
    const additionalSchools = await prisma.schools.findMany({
      select: {
        school_id: true,
        school_name: true,
        school_board: true,
        school_city: true,
        perma_link: true,
      },
      where: {
        school_city: school.city,
      },
      take: 3 - schools.length,
      orderBy: {
        school_id: "asc",
      },
    });
    schools.push(...additionalSchools);
    console.log(schools.length);
    if (schools.length === 1) {
      return null;
    }
  }
  // const finalschools = removeDuplicateObjects(schools)
  return schools;
});
