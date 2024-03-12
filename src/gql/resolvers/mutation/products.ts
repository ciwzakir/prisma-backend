import { isValidUser } from "../../utils/useraccess";

export const productsMutation = {
  addNewProduct: async (
    parent: any,
    { inputs }: any,
    { prisma, userInfo }: any
  ) => {
    // console.log("From Mutation Post file", post, userInfo);

    if (!userInfo) {
      return {
        message: "Unauthorized",
        products: null,
      };
    }

    // const productCategory = await prisma.productCategory.findFirst({
    //   where: {
    //     id: inputs.productCategoryId,
    //   },
    // });

    // const productBrand = await prisma.productBrand.findFirst({
    //   where: {
    //     id: inputs.productBrandId,
    //   },
    // });

    // if (!productCategory || !productBrand) {
    //   return {
    //     message: "Product Category not found",
    //     products: null,
    //   };
    // }

    const newProducts = await prisma.product.create({
      data: {
        title: inputs.title,
        productImageUrl: inputs.productImageUrl,
        description: inputs.description,
        color: inputs.color,
        size: inputs.size,
        price: inputs.price,
        discount: inputs.discount,
        warranty: inputs.warranty,
        stockStatus: inputs.stockStatus,
        productCategory: { connect: { id: inputs.productCategoryId } },
        productBrand: { connect: { id: inputs.productBrandId } },
        productSupplier: { connect: { id: inputs.productSupplierId } },
        author: { connect: { id: userInfo } },
        isPublished: inputs.isPublished,
        paymentStatus: inputs.paymentStatus,
        salesStatus: inputs.salesStatus,
        isItemSupplierVerified: inputs.isItemSupplierVerified,
      },
    });

    return {
      message: "Post Created Successfully",
      products: newProducts,
    };
  },

  // updateProduct: async (
  //   parent: any,
  //   { args }: any,
  //   { prisma, userInfo }: any
  // ) => {
  //   if (!userInfo) {
  //     return {
  //       message: "Unauthorized",
  //       products: null,
  //     };
  //   }

  //   const updatedProductResult = await prisma.product.update({
  //     where: {
  //       id: args.productId,
  //     },
  //     data: {
  //       title: args.inputs.title,
  //       productImageUrl: args.inputs.productImageUrl,
  //       description: args.inputs.description,
  //       color: args.inputs.color,
  //       size: args.inputs.size,
  //       price: args.inputs.price,
  //       discount: args.inputs.discount,
  //       warranty: args.inputs.warranty,
  //       stockStatus: args.inputs.stockStatus,
  //       productCategory: { connect: { id: args.inputs.productCategoryId } },
  //       productBrand: { connect: { id: args.inputs.productBrandId } },
  //       productSupplier: { connect: { id: args.inputs.productSupplierId } },
  //       author: { connect: { id: userInfo } },
  //       isPublished: args.inputs.isPublished,
  //       paymentStatus: args.inputs.paymentStatus,
  //       salesStatus: args.inputs.salesStatus,
  //       isItemSupplierVerified: args.inputs.isItemSupplierVerified,
  //     },
  //   });

  //   return {
  //     message: "Product updated Successfully",
  //     products: updatedProductResult,
  //   };
  // },

  updateProduct: async (parent: any, args: any, { prisma, userInfo }: any) => {
    if (!userInfo) {
      return {
        message: "Unauthorized",
        products: null,
      };
    }

    const updatedProductResult = await prisma.product.update({
      where: {
        id: args.productId,
      },
      data: args.inputs,
    });

    return {
      message: "Post updated Successfully",
      products: updatedProductResult,
    };
  },

  // publishedpost: async (parent: any, args: any, { prisma, userInfo }: any) => {
  //   if (!userInfo) {
  //     return {
  //       message: "Unauthorized",
  //       post: null,
  //     };
  //   }

  //   const error = await isValidUser(prisma, args.postId, userInfo);

  //   if (error) {
  //     return error;
  //   }

  //   const published = await prisma.product.update({
  //     where: {
  //       id: Number(args.postId),
  //     },
  //     data: { isPublished: true },
  //   });

  //   return {
  //     message: "Post Published Successfully",
  //     post: published,
  //   };
  // },

  deleteproduct: async (parent: any, args: any, { prisma, userInfo }: any) => {
    if (!userInfo) {
      return {
        message: "Unauthorized",
        products: null,
      };
    }

    const deleteProducts = await prisma.product.delete({
      where: {
        id: args.productId,
      },
    });

    return {
      message: "Product Deleted Successfully",
      products: deleteProducts,
    };
  },
};
