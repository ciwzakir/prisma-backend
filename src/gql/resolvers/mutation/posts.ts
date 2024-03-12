import { isValidUser } from "../../utils/useraccess";

export const postMutation = {
  addpost: async (parent: any, { post }: any, { prisma, userInfo }: any) => {
    // console.log("From Mutation Post file", post, userInfo);

    if (!userInfo) {
      return {
        message: "Unauthorized",
        post: null,
      };
    }
    if (!post.title || !post.content || !post.categoryId) {
      return {
        message: "Insert Title or Content Or category Id",
        post: null,
      };
    }
    const newPost = await prisma.post.create({
      data: {
        title: post.title,
        content: post.content,
        categoryId: post.categoryId,
        authorId: userInfo,
      },
    });

    return {
      message: "Post Created Successfully",
      post: newPost,
    };
  },

  updatepost: async (parent: any, args: any, { prisma, userInfo }: any) => {
    if (!userInfo) {
      return {
        message: "Unauthorized",
        post: null,
      };
    }

    const error = await isValidUser(prisma, args.postId, userInfo);

    if (error) {
      return error;
    }

    const updatedPost = await prisma.post.update({
      where: {
        id: Number(args.postId),
      },
      data: args.post,
    });

    return {
      message: "Post updated Successfully",
      post: updatedPost,
    };
  },

  publishedpost: async (parent: any, args: any, { prisma, userInfo }: any) => {
    if (!userInfo) {
      return {
        message: "Unauthorized",
        post: null,
      };
    }

    const error = await isValidUser(prisma, args.postId, userInfo);

    if (error) {
      return error;
    }

    const published = await prisma.post.update({
      where: {
        id: Number(args.postId),
      },
      data: { isPublished: true },
    });

    return {
      message: "Post Published Successfully",
      post: published,
    };
  },

  deletepost: async (parent: any, args: any, { prisma, userInfo }: any) => {
    if (!userInfo) {
      return {
        message: "Unauthorized",
        post: null,
      };
    }

    const error = await isValidUser(prisma, args.postId, userInfo);

    if (error) {
      return error;
    }

    const deletedPost = await prisma.post.delete({
      where: {
        id: Number(args.postId),
      },
    });

    return {
      message: "Post Deleted Successfully",
      post: deletedPost,
    };
  },
};
