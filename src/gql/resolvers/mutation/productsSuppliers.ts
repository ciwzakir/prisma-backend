export const ProductsSupplierMutation = {
  createProductSupplier: async (
    parent: any,
    { inputs }: any,
    { prisma, userInfo }: any
  ) => {
    const isProductSupplierExit = await prisma.productSupplier.findFirst({
      where: {
        name: inputs.name,
      },
    });

    if (isProductSupplierExit) {
      return {
        message:
          "Product Supplier already exit . This Supplier name is not available right now",
        products: null,
      };
    } else {
      const newProductSupplier = await prisma.productSupplier.create({
        data: {
          name: inputs.name,
          description: inputs.description,
        },
      });

      return {
        message: "A product Supplier Created Successfully",
        products: newProductSupplier,
      };
    }
  },
};
