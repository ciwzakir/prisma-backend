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
exports.profileMutation = void 0;
exports.profileMutation = {
    createprofile: (parent, args, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        // console.log("From profileMutation file", args);
        // Check if the user is authenticated
        if (!userInfo) {
            return {
                message: "Unauthorized",
                profile: null,
            };
        }
        // Check if the user already has a profile
        const findUser = yield prisma.user.findUnique({
            where: {
                id: userInfo,
            },
            include: {
                profile: true,
            },
        });
        const findProfile = yield prisma.profile.findUnique({
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
            const createUserProfileWithoutBioData = yield prisma.profile.create({
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
            const createUserProfile = yield prisma.profile.create({
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
        }
        else
            return {
                message: "User profile already exits",
                profile: null,
            };
    }),
};
