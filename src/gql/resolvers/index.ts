import { Query } from "./query";
import { Mutation } from "./mutation";
import { Post } from "./query/relation/post";
import { User } from "./query/user";
import { Profile } from "./query/relation/profile";
import { BioFeature } from "./query/relation/biofe";
import { PostCategory } from "./query/relation/postCategory";
import { Product } from "./query/relation/product";
import { ProductCategory } from "./query/relation/productCategory";
const gg = ProductCategory;
export const resolvers = {
  Query,
  Post,
  Product,
  PostCategory,
  ProductCategory,
  User,
  Profile,
  BioFeature,
  Mutation,
};
