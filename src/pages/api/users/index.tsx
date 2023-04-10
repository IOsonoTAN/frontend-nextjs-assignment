import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export interface UserDataResponse {
  records: User[];
}

export interface UserDataResponseError {
  error: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserDataResponse | UserDataResponseError | User | string>
) {
  if (req.method === "GET") {
    const users = await prisma.user.findMany({
      orderBy: {
        id: "desc",
      },
    });
    return res.status(200).json({
      records: users,
    });
  } else if (req.method === "POST") {
    const { firstName, lastName, email, phoneNumber, gender } = req.body;
    try {
      const user = await prisma.user.create({
        data: {
          firstName,
          lastName,
          email,
          phoneNumber,
          gender,
        },
      });
      return res.status(201).json(user);
    } catch (error) {
      let message = "Unknown Error";
      if (error instanceof Error) message = error.message;
      return res.status(400).json({
        error: message,
      });
    }
  } else {
    return res.status(404).send("does not support http method");
  }
}
