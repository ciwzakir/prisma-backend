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
exports.ProductsReviewsMutation = void 0;
exports.ProductsReviewsMutation = {
    addProductReviews: (parent, args, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        const isProductBrandExit = yield prisma.product.findFirst({
            where: {
                id: args.productId,
            },
        });
        // console.log(args);
        if (!isProductBrandExit) {
            return {
                message: " There is no product to review",
                products: null,
            };
        }
        else {
            const addNewProductReview = yield prisma.productReview.create({
                data: {
                    review: args.inputs.review,
                    productReview: { connect: { id: args.productId } },
                },
            });
            return {
                message: "A product addNewProductReview Created Successfully",
                products: addNewProductReview,
            };
        }
    }),
};
