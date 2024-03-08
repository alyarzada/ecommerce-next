import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/client";

// interface Data {
//   name: string;
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method === "GET") {
    try {
      const data = await prisma.cardItem.findMany();
      return res.status(200).json(data);
    } catch (error) {
      console.error(error);
      return res.status(500).json(error);
    }
  } else if (req.method === "POST") {
    const laptop = req.body;
    try {
      const data = await prisma.cardItem.create({
        data: laptop,
      });
      return res.status(200).json({ data });
    } catch (err) {
      return res.status(404).json(err);
    }
  }
}
