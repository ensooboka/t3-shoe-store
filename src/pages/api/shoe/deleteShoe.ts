import type { NextApiResponse } from "next";
import { prisma } from "../../../server/db/client";

export default async function deleteShoe({
  styleColor,
  res,
}: {
  styleColor: string;
  res: NextApiResponse;
}) {
  try {
    await prisma.shoe.delete({ where: { styleColor } });
    return res.status(200).end();
  } catch (err) {
    return res.status(500).send({ message: "Unknown Error", error: err });
  }
}
