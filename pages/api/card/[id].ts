import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/prisma/client";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "DELETE") {
    const { id } = req.query;

    try {
      const data = await prisma.cardItem.delete({
        where: { id: +id },
      });
      return res.status(200).json({ data });
    } catch (err) {
      return res.status(404).json(err);
    }
  }
};

export default handler;
