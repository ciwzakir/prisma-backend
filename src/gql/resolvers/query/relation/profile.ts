export const Profile = {
  user: async (parent: any, args: any, { prisma, userInfo }: any) => {
    // console.log("From Profile :", parent, args, userInfo);
    return await prisma.user.findUnique({
      where: {
        id: parent.userId,
      },
    });
  },

  biodata: async (parent: any, args: any, { prisma, userInfo }: any) => {
    // console.log("profile uery fileProfile  > biodata : ", parent);
    return await prisma.biofeature.findUnique({
      where: {
        bioId: Number(parent.id),
      },
    });
  },

  products: async (parent: any, args: any, { prisma, userInfo }: any) => {
    // console.log("profile uery fileProfile  > biodata : ", parent);
    return await prisma.product
      .findMany
      //   {
      //   where: {
      //     authorId: Number(parent.id),
      //   },
      // }
      ();
  },
};
