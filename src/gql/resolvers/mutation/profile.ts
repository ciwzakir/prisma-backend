export const profileMutation = {
  createprofile: async (parent: any, args: any, { prisma, userInfo }: any) => {
    // console.log("From profileMutation file", args);

    // Check if the user is authenticated
    if (!userInfo) {
      return {
        message: "Unauthorized",
        profile: null,
      };
    }

    // Check if the user already has a profile
    const findUser = await prisma.user.findUnique({
      where: {
        id: userInfo,
      },
      include: {
        profile: true,
      },
    });

    const findProfile = await prisma.profile.findUnique({
      where: {
        userId: userInfo,
      },
    });

    if (findProfile) {
      return {
        message: "User profile already exit, create new one ",
        profile: null,
      };
    }

    if (!args.profileData) {
      const createUserProfileWithoutBioData = await prisma.profile.create({
        data: {
          userId: userInfo,
        },
      });

      return {
        message: "User profile created without Bio data",
        profile: createUserProfileWithoutBioData,
      };
    }

    if (!findUser.profile && args.profileData) {
      // Create a new Profile
      const createUserProfile = await prisma.profile.create({
        data: {
          userId: userInfo,
          biodata: {
            create: {
              userName: { create: args.profileData.userName },
              userAddress: { create: args.profileData.userAddress },
              educationQualifications: {
                create: args.profileData.educationQualifications,
              },
              personalInformation: {
                create: args.profileData.personalInformation,
              },
            },
          },
        },
      });

      return {
        message: "User profile created successfully",
        profile: createUserProfile,
      };
    } else
      return {
        message: "User profile already exits",
        profile: null,
      };
  },
};
