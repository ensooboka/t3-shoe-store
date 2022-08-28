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
  });
