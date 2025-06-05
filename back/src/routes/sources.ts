import { PrismaClient } from "@prisma/client";
import { Router, Request, Response } from "express";

export const sourceRouter = Router();
const prisma = new PrismaClient();

sourceRouter.get("/exemple/:id?", async (req: Request, res: Response): Promise<any> => {},
);

export default sourceRouter;
