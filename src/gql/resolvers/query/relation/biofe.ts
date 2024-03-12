export const BioFeature = {
  userName: async (parent: any, args: any, { prisma, userInfo }: any) => {
    // console.log("BioFeature = > userName :", parent, args);
    return await prisma.userName.findUnique({
      where: {
        nameId: Number(parent.id),
      },
    });
  },
  userAddress: async (parent: any, args: any, { prisma, userInfo }: any) => {
    // console.log("BioFeature = > userName :", parent, args);
    return await prisma.userAddress.findUnique({
      where: {
        addressId: Number(parent.id),
      },
    });
  },
  educationQualifications: async (
    parent: any,
    args: any,
    { prisma, userInfo }: any
  ) => {
    // console.log("BioFeature = > userName :", parent, args);
    return await prisma.userEducationQualifications.findMany({
      where: {
        educationId: Number(parent.id),
      },
    });
  },
  personalInformation: async (
    parent: any,
    args: any,
    { prisma, userInfo }: any
  ) => {
    // console.log("BioFeature = > userName :", parent, args);
    return await prisma.personalInformation.findUnique({
      where: {
        personalInfoId: Number(parent.id),
      },
    });
  },
};
