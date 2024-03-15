"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const users_1 = require("./users");
const categories_1 = require("./categories");
const posts_1 = require("./posts");
const query_1 = require("./query");
const mutation_1 = require("./mutation");
const productsBrands_1 = require("./productsBrands");
const products_1 = require("./products");
const productsSuppliers_1 = require("./productsSuppliers");
const productsRating_1 = require("./productsRating");
const productsReviews_1 = require("./productsReviews");
const ss = productsReviews_1.productReviewsTypeDefs;
exports.typeDefs = `#graphql
${users_1.userTypeDefs}
${categories_1.categoryTypeDefs}
${productsBrands_1.productBrandTypeDefs}
${productsSuppliers_1.productSupplierTypeDefs}
${productsRating_1.productRatingsTypeDefs}
${productsReviews_1.productReviewsTypeDefs}
${products_1.productTypeDefs}
${posts_1.postTypeDefs}
${query_1.Query}
${mutation_1.Mutation}
`;
