"use strict";
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
// destructure prisma from context
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
exports.Query = void 0;
exports.Query = {
    posts: (parent, args, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.post.findMany();
    }),
    users: (parent, args, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.user.findMany();
    }),
    user: (parent, args, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        // console.log(parent, args, userInfo);
        return yield prisma.user.findUnique({
            where: {
                id: Number(userInfo),
            },
        });
    }),
    postCategory: (parent, args, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        // console.log(parent, args, userInfo);
        return yield prisma.postCategory.findUnique({
            where: {
                id: args.postCatId,
            },
        });
    }),
    singleProductCategory: (parent, args, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(parent, args, userInfo);
        return yield prisma.productCategory.findUnique({
            where: {
                id: args.productCatId,
            },
        });
    }),
    productsCategories: (parent, args, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        // console.log(parent, args, userInfo);
        return yield prisma.productCategory.findMany();
    }),
    productsBrands: (parent, args, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        // console.log(parent, args, userInfo);
        return yield prisma.productBrand.findMany();
    }),
    productsSupplier: (parent, args, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        // console.log(parent, args, userInfo);
        return yield prisma.productSupplier.findMany();
    }),
    post: (parent, args, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        // console.log(parent, args, userInfo);
        return yield prisma.post.findUnique({
            where: {
                // authorId: Number(userInfo),
                id: Number(args.postId),
            },
        });
    }),
    myprofile: (parent, args, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        // console.log("userInfo", userInfo);
        const getUserFromUserInfo = Number(userInfo);
        if (!getUserFromUserInfo) {
            return "You are not authorized";
        }
        return yield prisma.profile.findUnique({
            where: {
                userId: getUserFromUserInfo,
            },
        });
    }),
    personalInformation: (parent, args, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        // console.log(userInfo, args);
        return yield prisma.personalInformation.findUnique({
            where: {
                personalInfoId: Number(args.personId),
            },
        });
    }),
    bioData: (parent, args, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        // console.log(userInfo, args);
        return yield prisma.biofeature.findUnique({
            where: {
                bioId: Number(args.profileId),
            },
        });
    }),
    postCategories: (parent, args, { prisma }) => __awaiter(void 0, void 0, void 0, function* () {
        // console.log(parent, args);
        return yield prisma.postCategory.findMany();
    }),
    products: (parent, args, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.product.findMany();
    }),
    singleProduct: (parent, args, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        return yield prisma.product.findUnique({
            where: {
                id: args.productId,
            },
        });
    }),
};
