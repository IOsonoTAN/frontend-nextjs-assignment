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
  res: NextApiResponse<boolean>
) {
  const result = await prisma.user.deleteMany();
  console.log("result", result);
  return res.status(200).send(true);
}
