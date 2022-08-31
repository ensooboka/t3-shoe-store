import { createRouter } from "./context";
import { z } from "zod";

export const shoeRouter = createRouter()
  .query("findOne", {
    input: z
      .object({
        styleColor: z.string(),
      })
      .nullish(),
    async resolve({ ctx, input }) {
      return await ctx.prisma.shoe.findUnique({
        where: {
          styleColor: input?.styleColor,
        },
      });
    },
  })
  .query("findAll", {
    input: z.object({
      limit: z.number(),
      cursor: z.number().default(0),
    }),
    async resolve({ ctx, input }) {
      const limit = input.limit || 10;
      const offset = input.cursor || 0;
      const shoes = await ctx.prisma.shoe.findMany({
        skip: offset,
        take: limit,
      });
      return { shoes, offset: offset + shoes.length };
    },
  })
  .mutation("create", {
    input: z.object({
      designer: z.string().min(1).max(600),
      name: z.string().min(1).max(600),
      image: z.string().url(),
      styleColor: z.string().min(1).max(600),
      price: z.number(),
    }),
    async resolve({ input }) {
      return await prisma?.shoe.create({
        data: {
          designer: "string",
          image: input.image,
          name: input.name,
          styleColor: input.styleColor,
          price: input.price,
        },
      });
    },
  });
