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
exports.userCheckForProfile = void 0;
const userCheckForProfile = (prisma, profileId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    const isValidUser = yield prisma.user.findUnique({
        where: {
            id: userId,
        },
    });
    const isAvailableProfile = yield prisma.profile.findUnique({
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
});
exports.userCheckForProfile = userCheckForProfile;
