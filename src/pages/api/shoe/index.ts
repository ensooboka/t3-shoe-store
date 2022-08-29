import type { NextApiRequest, NextApiResponse } from "next";
import createShoe from "./createShoe";

export default async function shoeHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, body } = req;
  switch (method) {
    case "POST":
      return createShoe({ shoe: body, res });
  }
}
