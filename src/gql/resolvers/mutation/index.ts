import { authMutation } from "./auth";
import { postMutation } from "./posts";
import { profileMutation } from "./profile";
import { addBioFeatureMutation } from "./biofeature";
import { CategoryMutation } from "./categories";
import { ProductsBrandMutation } from "./productsBrands";
import { ProductsSupplierMutation } from "./productsSuppliers";
import { ProductsRatingsMutation } from "./ratings";
import { ProductsReviewsMutation } from "./reviews";
import { productsMutation } from "./products";

// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
const generator = productsMutation;
export const Mutation = {
  ...authMutation,
  ...postMutation,
  ...CategoryMutation,
  ...ProductsBrandMutation,
  ...ProductsSupplierMutation,
  ...productsMutation,
  ...ProductsRatingsMutation,
  ...ProductsReviewsMutation,
  ...profileMutation,
  ...addBioFeatureMutation,
};
