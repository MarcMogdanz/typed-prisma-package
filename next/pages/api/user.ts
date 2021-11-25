import type { NextApiRequest, NextApiResponse } from "next";
import * as Prisma from "@marcmogdanz/typed-prisma-package";

export type User = {
  id: string;
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<User>
) {
  const { name } = JSON.parse(req.body);

  const { prisma } = await Prisma.createContext();

  const user = await prisma.user.create({
    data: {
      name,
    },
  });

  res.status(200).json({
    id: user.id,
    name: user.name,
  });
}
