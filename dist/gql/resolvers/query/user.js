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
exports.User = void 0;
exports.User = {
    posts: (parent, args, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        // console.log("from User>posts: ", parent, args, userInfo);
        const isMyProfile = parent.id === userInfo;
        if (isMyProfile) {
            return yield prisma.post.findMany({
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
        }
        else {
            return yield prisma.post.findMany({
                where: {
                    authorId: parent.id,
                    isPublished: false,
                },
            });
        }
    }),
    products: (parent, args, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        // console.log("from User>posts: ", parent, args, userInfo);
        const isMyProfile = parent.id === userInfo;
        if (isMyProfile) {
            return yield prisma.product.findMany({
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
        }
        else {
            return yield prisma.product.findMany({
                where: {
                    authorId: parent.id,
                    isPublished: false,
                },
            });
        }
    }),
    profile: (parent, args, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        // console.log("from User>profile: ", parent, args, userInfo);
        return yield prisma.profile.findUnique({
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
    }),
};
