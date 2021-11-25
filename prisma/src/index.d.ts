import { PrismaClient } from "@prisma/client";

export interface Context {
  prisma: PrismaClient;
}

export function createContext(): Promise<Context>;
