import { PrismaClient } from "@prisma/client";
import { Chance } from "chance";

const chance = Chance();

const prisma = new PrismaClient();

async function main() {
  const users = [];
  const maxUserCreated = 30;
  for (let i = 0; i < maxUserCreated; i++) {
    users.push({
      firstName: chance.name(),
      lastName: chance.name(),
      email: chance.email(),
      phoneNumber: chance.phone(),
      gender: chance.gender(),
    });
  }

  const result = await Promise.all(
    users.map((user) =>
      prisma.user.create({
        data: {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          gender: user.gender,
        },
      })
    )
  );
  console.log({ result });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
