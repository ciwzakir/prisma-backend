export const ProductsReviewsMutation = {
  addProductReviews: async (
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
        message: " There is no product to review",
        products: null,
      };
    } else {
      const addNewProductReview = await prisma.productReview.create({
        data: {
          review: args.inputs.review,
          productReview: { connect: { id: args.productId } },
        },
      });

      return {
        message: "A product addNewProductReview Created Successfully",
        products: addNewProductReview,
      };
    }
  },
};
