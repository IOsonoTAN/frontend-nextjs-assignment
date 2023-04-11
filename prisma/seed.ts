import { generateUserData } from "../src/data/user";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const users = generateUserData();
  const result = await Promise.all(
    users.map((user) =>
      prisma.user.create({
        data: {
          avatar: user.avatar,
          address: user.address,
          suffix: user.suffix,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          gender: user.gender,
          birthday: String(user.birthday),
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
