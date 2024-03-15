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
exports.Product = void 0;
exports.Product = {
    productReview: (parent, args, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        // console.log("post Categories", parent, args, userInfo);
        return yield prisma.productReview.findMany({
            where: {
                productReviewId: parent.id,
            },
        });
    }),
    productRating: (parent, args, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        // console.log("post Categories", parent, args, userInfo);
        return yield prisma.productRating.findMany({
            where: {
                productRatingsId: parent.id,
            },
        });
    }),
    productBrand: (parent, args, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        // console.log("post Categories", parent, args, userInfo);
        return yield prisma.productBrand.findUnique({
            where: {
                id: parent.productBrandId,
            },
        });
    }),
    productSupplier: (parent, args, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        // console.log("post Categories", parent, args, userInfo);
        return yield prisma.productSupplier.findUnique({
            where: {
                id: parent.productSupplierId,
            },
        });
    }),
    productCategory: (parent, args, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        // console.log("post Categories", parent, args, userInfo);
        return yield prisma.productCategory.findUnique({
            where: {
                id: parent.productCategoryId,
            },
        });
    }),
};
