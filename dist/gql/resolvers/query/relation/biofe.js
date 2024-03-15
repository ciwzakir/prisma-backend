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
exports.BioFeature = void 0;
exports.BioFeature = {
    userName: (parent, args, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        // console.log("BioFeature = > userName :", parent, args);
        return yield prisma.userName.findUnique({
            where: {
                nameId: Number(parent.id),
            },
        });
    }),
    userAddress: (parent, args, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        // console.log("BioFeature = > userName :", parent, args);
        return yield prisma.userAddress.findUnique({
            where: {
                addressId: Number(parent.id),
            },
        });
    }),
    educationQualifications: (parent, args, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        // console.log("BioFeature = > userName :", parent, args);
        return yield prisma.userEducationQualifications.findMany({
            where: {
                educationId: Number(parent.id),
            },
        });
    }),
    personalInformation: (parent, args, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        // console.log("BioFeature = > userName :", parent, args);
        return yield prisma.personalInformation.findUnique({
            where: {
                personalInfoId: Number(parent.id),
            },
        });
    }),
};
