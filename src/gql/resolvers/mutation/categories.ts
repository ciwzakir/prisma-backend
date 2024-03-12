export const CategoryMutation = {
  createPostCategory: async (
    parent: any,
    { inputs }: any,
    { prisma, userInfo }: any
  ) => {
    // console.log("From Mutation Cat File", parent, inputs, userInfo);
    const isCategoriesExit = await prisma.postCategory.findFirst({
      where: {
        name: inputs.name,
      },
    });
    if (isCategoriesExit) {
      return {
        message: "Category already exit . This name is not available right now",
        categoryInfo: null,
      };
    } else {
      const newCategories = await prisma.postCategory.create({
        data: {
          name: inputs.name,
          description: inputs.description,
        },
      });
      return {
        message: "A Category Created Successfully",
        categoryInfo: newCategories,
      };
    }
  },
  createProductCategory: async (
    parent: any,
    { inputs }: any,
    { prisma, userInfo }: any
  ) => {
    // console.log("From Mutation Cat File", parent, inputs, userInfo);
    const isProductExit = await prisma.productCategory.findFirst({
      where: {
        name: inputs.name,
      },
    });
    if (isProductExit) {
      return {
        message:
          "Product Category already exit . This Category name is not available right now",
        categoryInfo: null,
      };
    } else {
      const newProductCategories = await prisma.productCategory.create({
        data: {
          name: inputs.name,
          description: inputs.description,
        },
      });
      return {
        message: "A product Category Created Successfully",
        categoryInfo: newProductCategories,
      };
    }
  },
};
