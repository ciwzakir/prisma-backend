"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postMutation = void 0;
const useraccess_1 = require("../../utils/useraccess");
exports.postMutation = {
    addpost: (parent, { post }, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
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
        const newPost = yield prisma.post.create({
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
    }),
    updatepost: (parent, args, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        if (!userInfo) {
            return {
                message: "Unauthorized",
                post: null,
            };
        }
        const error = yield (0, useraccess_1.isValidUser)(prisma, args.postId, userInfo);
        if (error) {
            return error;
        }
        const updatedPost = yield prisma.post.update({
            where: {
                id: Number(args.postId),
            },
            data: args.post,
        });
        return {
            message: "Post updated Successfully",
            post: updatedPost,
        };
    }),
    publishedpost: (parent, args, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        if (!userInfo) {
            return {
                message: "Unauthorized",
                post: null,
            };
        }
        const error = yield (0, useraccess_1.isValidUser)(prisma, args.postId, userInfo);
        if (error) {
            return error;
        }
        const published = yield prisma.post.update({
            where: {
                id: Number(args.postId),
            },
            data: { isPublished: true },
        });
        return {
            message: "Post Published Successfully",
            post: published,
        };
    }),
    deletepost: (parent, args, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        if (!userInfo) {
            return {
                message: "Unauthorized",
                post: null,
            };
        }
        const error = yield (0, useraccess_1.isValidUser)(prisma, args.postId, userInfo);
        if (error) {
            return error;
        }
        const deletedPost = yield prisma.post.delete({
            where: {
                id: Number(args.postId),
            },
        });
        return {
            message: "Post Deleted Successfully",
            post: deletedPost,
        };
    }),
};
