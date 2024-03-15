"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mutation = void 0;
const auth_1 = require("./auth");
const posts_1 = require("./posts");
const profile_1 = require("./profile");
const biofeature_1 = require("./biofeature");
const categories_1 = require("./categories");
const productsBrands_1 = require("./productsBrands");
const productsSuppliers_1 = require("./productsSuppliers");
const ratings_1 = require("./ratings");
const reviews_1 = require("./reviews");
const products_1 = require("./products");
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
const generator = products_1.productsMutation;
exports.Mutation = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, auth_1.authMutation), posts_1.postMutation), categories_1.CategoryMutation), productsBrands_1.ProductsBrandMutation), productsSuppliers_1.ProductsSupplierMutation), products_1.productsMutation), ratings_1.ProductsRatingsMutation), reviews_1.ProductsReviewsMutation), profile_1.profileMutation), biofeature_1.addBioFeatureMutation);
