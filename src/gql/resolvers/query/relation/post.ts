import { userLoader } from "../../../../dataLoader/userloader";

export const Post = {
  author: async (parent: any, args: any, { prisma, userInfo }: any) => {
    // console.log("From Post-author :", parent.authorId);
    return await userLoader.load(parent.authorId);
  },
  postCategory: async (parent: any, args: any, { prisma, userInfo }: any) => {
    // console.log("post Categories", parent, args, userInfo);
    return await prisma.postCategory.findUnique({
      where: {
        id: parent.categoryId,
      },
    });
  },
};
