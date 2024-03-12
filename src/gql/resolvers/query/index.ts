// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
// destructure prisma from context

import { IUserInfo } from "../../interface";

export const Query = {
  posts: async (parent: any, args: IUserInfo, { prisma }: any) => {
    return await prisma.post.findMany();
  },
  users: async (parent: any, args: IUserInfo, { prisma }: any) => {
    return await prisma.user.findMany();
  },

  user: async (parent: any, args: any, { prisma, userInfo }: any) => {
    // console.log(parent, args, userInfo);
    return await prisma.user.findUnique({
      where: {
        id: Number(userInfo),
      },
    });
  },

  postCategory: async (parent: any, args: any, { prisma, userInfo }: any) => {
    // console.log(parent, args, userInfo);
    return await prisma.postCategory.findUnique({
      where: {
        id: args.postCatId,
      },
    });
  },

  singleProductCategory: async (
    parent: any,
    args: any,
    { prisma, userInfo }: any
  ) => {
    console.log(parent, args, userInfo);
    return await prisma.productCategory.findUnique({
      where: {
        id: args.productCatId,
      },
    });
  },

  productsCategories: async (
    parent: any,
    args: any,
    { prisma, userInfo }: any
  ) => {
    // console.log(parent, args, userInfo);
    return await prisma.productCategory.findMany();
  },
  productsBrands: async (parent: any, args: any, { prisma, userInfo }: any) => {
    // console.log(parent, args, userInfo);
    return await prisma.productBrand.findMany();
  },
  productsSupplier: async (
    parent: any,
    args: any,
    { prisma, userInfo }: any
  ) => {
    // console.log(parent, args, userInfo);
    return await prisma.productSupplier.findMany();
  },

  post: async (parent: any, args: any, { prisma, userInfo }: any) => {
    // console.log(parent, args, userInfo);
    return await prisma.post.findUnique({
      where: {
        // authorId: Number(userInfo),
        id: Number(args.postId),
      },
    });
  },

  myprofile: async (parent: any, args: any, { prisma, userInfo }: any) => {
    // console.log("userInfo", userInfo);
    const getUserFromUserInfo = Number(userInfo);

    if (!getUserFromUserInfo) {
      return "You are not authorized";
    }
    return await prisma.profile.findUnique({
      where: {
        userId: getUserFromUserInfo,
      },
    });
  },

  personalInformation: async (
    parent: any,
    args: any,
    { prisma, userInfo }: any
  ) => {
    // console.log(userInfo, args);

    return await prisma.personalInformation.findUnique({
      where: {
        personalInfoId: Number(args.personId),
      },
    });
  },

  bioData: async (parent: any, args: any, { prisma, userInfo }: any) => {
    // console.log(userInfo, args);

    return await prisma.biofeature.findUnique({
      where: {
        bioId: Number(args.profileId),
      },
    });
  },

  postCategories: async (parent: any, args: any, { prisma }: any) => {
    // console.log(parent, args);
    return await prisma.postCategory.findMany();
  },
  products: async (parent: any, args: any, { prisma, userInfo }: any) => {
    return await prisma.product.findMany();
  },
  singleProduct: async (parent: any, args: any, { prisma, userInfo }: any) => {
    return await prisma.product.findUnique({
      where: {
        id: args.productId,
      },
    });
  },
};
