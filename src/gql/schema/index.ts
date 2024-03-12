import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { userTypeDefs } from "./users";
import { categoryTypeDefs } from "./categories";
import { postTypeDefs } from "./posts";
import { Query } from "./query";
import { Mutation } from "./mutation";
import { productBrandTypeDefs } from "./productsBrands";
import { productTypeDefs } from "./products";
import { productSupplierTypeDefs } from "./productsSuppliers";
import { productRatingsTypeDefs } from "./productsRating";
import { productReviewsTypeDefs } from "./productsReviews";

const ss = productReviewsTypeDefs;
export const typeDefs = `#graphql
${userTypeDefs}
${categoryTypeDefs}
${productBrandTypeDefs}
${productSupplierTypeDefs}
${productRatingsTypeDefs}
${productReviewsTypeDefs}
${productTypeDefs}
${postTypeDefs}
${Query}
${Mutation}
`;
