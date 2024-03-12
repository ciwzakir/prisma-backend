export const userCheckForProfile = async (
  prisma: any,
  profileId: any,
  userId: any
) => {
  const isValidUser = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  const isAvailableProfile = await prisma.profile.findUnique({
    where: {
      id: Number(profileId),
    },
  });

  if (!isAvailableProfile) {
    return {
      message: "Their is no Profile ID like this",
      profile: null,
    };
  }

  if (isValidUser.id !== isAvailableProfile.userId) {
    return {
      message: "This is not your profile ID",
      profile: null,
    };
  }
};
