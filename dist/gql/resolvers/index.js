"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const query_1 = require("./query");
const mutation_1 = require("./mutation");
const post_1 = require("./query/relation/post");
const user_1 = require("./query/user");
const profile_1 = require("./query/relation/profile");
const biofe_1 = require("./query/relation/biofe");
const postCategory_1 = require("./query/relation/postCategory");
const product_1 = require("./query/relation/product");
const productCategory_1 = require("./query/relation/productCategory");
const gg = productCategory_1.ProductCategory;
exports.resolvers = {
    Query: query_1.Query,
    Post: post_1.Post,
    Product: product_1.Product,
    PostCategory: postCategory_1.PostCategory,
    ProductCategory: productCategory_1.ProductCategory,
    User: user_1.User,
    Profile: profile_1.Profile,
    BioFeature: biofe_1.BioFeature,
    Mutation: mutation_1.Mutation,
};
