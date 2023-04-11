import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, User } from "@prisma/client";
import { generateUserData } from "@/data/user";

const prisma = new PrismaClient();

export interface UserAdminResponse {
  data?: User[];
  message?: string;
  error?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserAdminResponse>
) {
  if (req.method === "POST") {
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
    return res.status(201).send({
      data: result,
    });
  } else if (req.method === "DELETE") {
    const { count } = await prisma.user.deleteMany();
    return res.status(200).send({
      message: `the user ${count} records has been deleted`,
    });
  } else {
    return res.status(404).send({
      error: "does not support http method",
    });
  }
}
