import type { NextApiRequest, NextApiResponse } from "next";
import deleteShoe from "./deleteShoe";

export default async function shoeHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method, query } = req;
  const { styleColor } = query;
  switch (method) {
    case "DELETE":
      return deleteShoe({ styleColor: styleColor as string, res });
  }
}
