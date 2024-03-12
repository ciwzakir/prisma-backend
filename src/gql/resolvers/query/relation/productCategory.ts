export const ProductCategory = {
  products: async (parent: any, args: any, { prisma, userInfo }: any) => {
    // console.log("Category", args);
    return await prisma.product.findMany({
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
    });
  },
};
