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
exports.CategoryMutation = void 0;
exports.CategoryMutation = {
    createPostCategory: (parent, { inputs }, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        // console.log("From Mutation Cat File", parent, inputs, userInfo);
        const isCategoriesExit = yield prisma.postCategory.findFirst({
            where: {
                name: inputs.name,
            },
        });
        if (isCategoriesExit) {
            return {
                message: "Category already exit . This name is not available right now",
                categoryInfo: null,
            };
        }
        else {
            const newCategories = yield prisma.postCategory.create({
                data: {
                    name: inputs.name,
                    description: inputs.description,
                },
            });
            return {
                message: "A Category Created Successfully",
                categoryInfo: newCategories,
            };
        }
    }),
    createProductCategory: (parent, { inputs }, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        // console.log("From Mutation Cat File", parent, inputs, userInfo);
        const isProductExit = yield prisma.productCategory.findFirst({
            where: {
                name: inputs.name,
            },
        });
        if (isProductExit) {
            return {
                message: "Product Category already exit . This Category name is not available right now",
                categoryInfo: null,
            };
        }
        else {
            const newProductCategories = yield prisma.productCategory.create({
                data: {
                    name: inputs.name,
                    description: inputs.description,
                },
            });
            return {
                message: "A product Category Created Successfully",
                categoryInfo: newProductCategories,
            };
        }
    }),
};
