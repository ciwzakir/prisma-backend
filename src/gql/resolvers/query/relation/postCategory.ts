export const PostCategory = {
  posts: async (parent: any, args: any, { prisma, userInfo }: any) => {
    // console.log("Category", args);
    return await prisma.post.findMany({
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
    });
  },
};
