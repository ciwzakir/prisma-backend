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
exports.productsMutation = void 0;
exports.productsMutation = {
    addNewProduct: (parent, { inputs }, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        // console.log("From Mutation Post file", post, userInfo);
        if (!userInfo) {
            return {
                message: "Unauthorized",
                products: null,
            };
        }
        // const productCategory = await prisma.productCategory.findFirst({
        //   where: {
        //     id: inputs.productCategoryId,
        //   },
        // });
        // const productBrand = await prisma.productBrand.findFirst({
        //   where: {
        //     id: inputs.productBrandId,
        //   },
        // });
        // if (!productCategory || !productBrand) {
        //   return {
        //     message: "Product Category not found",
        //     products: null,
        //   };
        // }
        const newProducts = yield prisma.product.create({
            data: {
                title: inputs.title,
                productImageUrl: inputs.productImageUrl,
                description: inputs.description,
                color: inputs.color,
                size: inputs.size,
                price: inputs.price,
                discount: inputs.discount,
                warranty: inputs.warranty,
                stockStatus: inputs.stockStatus,
                productCategory: { connect: { id: inputs.productCategoryId } },
                productBrand: { connect: { id: inputs.productBrandId } },
                productSupplier: { connect: { id: inputs.productSupplierId } },
                author: { connect: { id: userInfo } },
                isPublished: inputs.isPublished,
                paymentStatus: inputs.paymentStatus,
                salesStatus: inputs.salesStatus,
                isItemSupplierVerified: inputs.isItemSupplierVerified,
            },
        });
        return {
            message: "Post Created Successfully",
            products: newProducts,
        };
    }),
    // updateProduct: async (
    //   parent: any,
    //   { args }: any,
    //   { prisma, userInfo }: any
    // ) => {
    //   if (!userInfo) {
    //     return {
    //       message: "Unauthorized",
    //       products: null,
    //     };
    //   }
    //   const updatedProductResult = await prisma.product.update({
    //     where: {
    //       id: args.productId,
    //     },
    //     data: {
    //       title: args.inputs.title,
    //       productImageUrl: args.inputs.productImageUrl,
    //       description: args.inputs.description,
    //       color: args.inputs.color,
    //       size: args.inputs.size,
    //       price: args.inputs.price,
    //       discount: args.inputs.discount,
    //       warranty: args.inputs.warranty,
    //       stockStatus: args.inputs.stockStatus,
    //       productCategory: { connect: { id: args.inputs.productCategoryId } },
    //       productBrand: { connect: { id: args.inputs.productBrandId } },
    //       productSupplier: { connect: { id: args.inputs.productSupplierId } },
    //       author: { connect: { id: userInfo } },
    //       isPublished: args.inputs.isPublished,
    //       paymentStatus: args.inputs.paymentStatus,
    //       salesStatus: args.inputs.salesStatus,
    //       isItemSupplierVerified: args.inputs.isItemSupplierVerified,
    //     },
    //   });
    //   return {
    //     message: "Product updated Successfully",
    //     products: updatedProductResult,
    //   };
    // },
    updateProduct: (parent, args, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        if (!userInfo) {
            return {
                message: "Unauthorized",
                products: null,
            };
        }
        const updatedProductResult = yield prisma.product.update({
            where: {
                id: args.productId,
            },
            data: args.inputs,
        });
        return {
            message: "Post updated Successfully",
            products: updatedProductResult,
        };
    }),
    // publishedpost: async (parent: any, args: any, { prisma, userInfo }: any) => {
    //   if (!userInfo) {
    //     return {
    //       message: "Unauthorized",
    //       post: null,
    //     };
    //   }
    //   const error = await isValidUser(prisma, args.postId, userInfo);
    //   if (error) {
    //     return error;
    //   }
    //   const published = await prisma.product.update({
    //     where: {
    //       id: Number(args.postId),
    //     },
    //     data: { isPublished: true },
    //   });
    //   return {
    //     message: "Post Published Successfully",
    //     post: published,
    //   };
    // },
    deleteproduct: (parent, args, { prisma, userInfo }) => __awaiter(void 0, void 0, void 0, function* () {
        if (!userInfo) {
            return {
                message: "Unauthorized",
                products: null,
            };
        }
        const deleteProducts = yield prisma.product.delete({
            where: {
                id: args.productId,
            },
        });
        return {
            message: "Product Deleted Successfully",
            products: deleteProducts,
        };
    }),
};
