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
    async resolve({ ctx }) {
      return await ctx.prisma.shoe.findMany();
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
