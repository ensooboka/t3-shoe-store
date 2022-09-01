import { prisma } from "./db/client";

export async function loadShoe({ styleColor }: { styleColor: string }) {
  return prisma.shoe.findUnique({
    where: {
      styleColor,
    },
    select: {
      designer: true,
      name: true,
      id: true,
      image: true,
      price: true,
      styleColor: true,
    },
  });
}
