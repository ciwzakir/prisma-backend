export const ProductsRatingsMutation = {
  addProductRatings: async (
    parent: any,
    args: any,
    { prisma, userInfo }: any
  ) => {
    const isProductBrandExit = await prisma.product.findFirst({
      where: {
        id: args.productId,
      },
    });
    // console.log(args);
    if (!isProductBrandExit) {
      return {
        message: " There is no product to rate now",
        products: null,
      };
    } else {
      const addNewProductRating = await prisma.productRating.create({
        data: {
          rating: args.inputs.rating,
          productRating: { connect: { id: args.productId } },
        },
      });

      return {
        message: "Rating Added Created Successfully",
        products: addNewProductRating,
      };
    }
  },
};
