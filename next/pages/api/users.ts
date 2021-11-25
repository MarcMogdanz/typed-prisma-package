import type { NextApiRequest, NextApiResponse } from "next";
import * as Prisma from "@marcmogdanz/typed-prisma-package";
import { User } from "./user";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User[]>
) {
  console.log("req", req.body);

  const { prisma } = await Prisma.createContext();

  const users = await prisma.user.findMany();

  res.status(200).json(users);
}
