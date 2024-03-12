export const isValidUser = async (prisma: any, postId: any, userId: any) => {
  // console.log("From Mutation file PostId: ", postId);
  // console.log("From Mutation file userInfo: ", userId);

  const isValidUser = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  const isAvailablePost = await prisma.post.findUnique({
    where: {
      id: Number(postId),
    },
  });

  if (!isAvailablePost) {
    return {
      message: "You have no post to Update or delete",
      post: null,
    };
  }

  if (isValidUser.id !== isAvailablePost.authorId) {
    return {
      message: "This is not your post. So you can not Update or delete it",
      post: null,
    };
  }
};
