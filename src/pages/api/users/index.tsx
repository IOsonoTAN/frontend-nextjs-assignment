import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, User } from "@prisma/client";
import paginator from "prisma-paginate";

const prisma = new PrismaClient();
const paginate = paginator(prisma);

export interface Pagination {
  page: number;
  pages: number;
  limit: number;
  count: number;
}
export interface UserDataResponse {
  data?: User | User[];
  pagination?: Pagination;
  error?: string;
}

export interface UserQueryParams {
  page?: number;
  limit?: number;
  id?: string;
  email?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<UserDataResponse>
) {
  if (req.method === "GET") {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const {
      result: users,
      totalPages: pages,
      count,
    } = await paginate.user.paginate({
      limit,
      page,
      orderBy: {
        id: "desc",
      },
    });

    return res.status(200).json({
      data: users,
      pagination: {
        page,
        pages,
        limit,
        count,
      },
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
      return res.status(201).json({
        data: user,
      });
    } catch (error) {
      let message = "unknown error";
      if (error instanceof Error) message = error.message;
      return res.status(400).json({
        error: message,
      });
    }
  } else {
    return res.status(404).send({
      error: "does not support http method",
    });
  }
}
