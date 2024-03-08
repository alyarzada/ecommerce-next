import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/client";

interface Data {
  name: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    try {
      const data = await prisma.laptop.findMany();
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  }
}
