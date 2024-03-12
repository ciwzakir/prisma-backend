import { userLoader } from "../../../../dataLoader/userloader";

export const Product = {
  productReview: async (parent: any, args: any, { prisma, userInfo }: any) => {
    // console.log("post Categories", parent, args, userInfo);
    return await prisma.productReview.findMany({
      where: {
        productReviewId: parent.id,
      },
    });
  },

  productRating: async (parent: any, args: any, { prisma, userInfo }: any) => {
    // console.log("post Categories", parent, args, userInfo);
    return await prisma.productRating.findMany({
      where: {
        productRatingsId: parent.id,
      },
    });
  },
  productBrand: async (parent: any, args: any, { prisma, userInfo }: any) => {
    // console.log("post Categories", parent, args, userInfo);
    return await prisma.productBrand.findUnique({
      where: {
        id: parent.productBrandId,
      },
    });
  },
  productSupplier: async (
    parent: any,
    args: any,
    { prisma, userInfo }: any
  ) => {
    // console.log("post Categories", parent, args, userInfo);
    return await prisma.productSupplier.findUnique({
      where: {
        id: parent.productSupplierId,
      },
    });
  },
  productCategory: async (
    parent: any,
    args: any,
    { prisma, userInfo }: any
  ) => {
    // console.log("post Categories", parent, args, userInfo);
    return await prisma.productCategory.findUnique({
      where: {
        id: parent.productCategoryId,
      },
    });
  },
};
