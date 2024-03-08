import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/client";

type Data = {
  name: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    const { id } = req.query;
    try {
      const data = await prisma.laptop.findUnique({
        where: { id: +id },
      });
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  }
}
