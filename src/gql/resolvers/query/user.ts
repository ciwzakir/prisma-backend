export const User = {
  posts: async (parent: any, args: any, { prisma, userInfo }: any) => {
    // console.log("from User>posts: ", parent, args, userInfo);

    const isMyProfile = parent.id === userInfo;

    if (isMyProfile) {
      return await prisma.post.findMany({
        orderBy: [
          {
            createdAt: "desc",
          },
          {
            isPublished: "desc",
          },
          // {
          //   postCategory.id: "desc",
          // },
        ],

        where: {
          authorId: parent.id,
        },
      });
    } else {
      return await prisma.post.findMany({
        where: {
          authorId: parent.id,
          isPublished: false,
        },
      });
    }
  },

  products: async (parent: any, args: any, { prisma, userInfo }: any) => {
    // console.log("from User>posts: ", parent, args, userInfo);

    const isMyProfile = parent.id === userInfo;

    if (isMyProfile) {
      return await prisma.product.findMany({
        orderBy: [
          {
            createdAt: "desc",
          },
          {
            price: "desc",
          },

          // {
          //   postCategory.id: "desc",
          // },
        ],

        where: {
          authorId: parent.id,
        },
      });
    } else {
      return await prisma.product.findMany({
        where: {
          authorId: parent.id,
          isPublished: false,
        },
      });
    }
  },

  profile: async (parent: any, args: any, { prisma, userInfo }: any) => {
    // console.log("from User>profile: ", parent, args, userInfo);
    return await prisma.profile.findUnique({
      where: {
        userId: parent.id,
      },
      // include: {
      //   biodata: {
      //     include: {
      //       userName: {
      //         select: {
      //           firstName: true,
      //         },
      //       },

      //       userAddress: {
      //         select: {
      //           city: true,
      //           street: true,
      //           zipCode: true,
      //         },
      //       },
      //       educationQualifications: {
      //         select: {
      //           fieldOfStudy: true,
      //           graduationYear: true,
      //           instituteName: true,
      //           obtainGrade: true,
      //           qualification: true,
      //         },
      //       },
      //       personalInformation: {
      //         select: {
      //           age: true,
      //           bloodGroup: true,
      //           gender: true,
      //           nationality: true,
      //           maritalStatus: true,
      //           phoneNumber: true,
      //         },
      //       },
      //     },
      //   },
      // },
    });
  },
};
