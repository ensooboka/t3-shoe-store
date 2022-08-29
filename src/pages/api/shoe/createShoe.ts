import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../server/db/client";
import { z, ZodError } from "zod";

const ShoeSchema = z.object({
  designer: z.string().min(1).max(600),
  name: z.string().min(1).max(600),
  image: z.string().url(),
  styleColor: z.string().min(1).max(600),
  price: z.number(),
});

interface ShoeType {
  designer: string;
  name: string;
  image: string;
  styleColor: string;
  price: number;
}

export default async function createShoe({
  shoe,
  res,
}: {
  shoe: ShoeType;
  res: NextApiResponse;
}) {
  try {
    const { designer, image, name, styleColor, price } = ShoeSchema.parse(shoe);
    const c = await prisma.shoe.create({
      data: {
        designer,
        image,
        name,
        styleColor,
        price,
      },
    });
    return res.status(200).json(c);
  } catch (err) {
    if (err instanceof ZodError) {
      return res
        .status(400)
        .send({ message: "Validation Error", error: err.format() });
    } else return res.status(500).send({ message: "Unknown Error" });
  }
}
