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
exports.ProductsRatingsMutation = void 0;
exports.ProductsRatingsMutation = {
    addProductRatings: (parent, args, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        const isProductBrandExit = yield prisma.product.findFirst({
            where: {
                id: args.productId,
            },
        });
        // console.log(args);
        if (!isProductBrandExit) {
            return {
                message: " There is no product to rate now",
                products: null,
            };
        }
        else {
            const addNewProductRating = yield prisma.productRating.create({
                data: {
                    rating: args.inputs.rating,
                    productRating: { connect: { id: args.productId } },
                },
            });
            return {
                message: "Rating Added Created Successfully",
                products: addNewProductRating,
            };
        }
    }),
};
