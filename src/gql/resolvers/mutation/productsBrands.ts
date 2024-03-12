export const ProductsBrandMutation = {
  createProductBrand: async (
    parent: any,
    { inputs }: any,
    { prisma, userInfo }: any
  ) => {
    const isProductBrandExit = await prisma.productBrand.findFirst({
      where: {
        name: inputs.name,
      },
    });

    if (isProductBrandExit) {
      return {
        message:
          "Product Brand already exit . This Brand name is not available right now",
        products: null,
      };
    } else {
      const newProductBrand = await prisma.productBrand.create({
        data: {
          name: inputs.name,
          description: inputs.description,
        },
      });

      return {
        message: "A product Brand Created Successfully",
        products: newProductBrand,
      };
    }
  },
};
