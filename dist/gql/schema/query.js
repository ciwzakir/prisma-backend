"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
exports.Query = `
type Query {
  postCategories: [PostCategory]
  postCategory(postCatId:ID!): PostCategory
  productsCategories: [ProductCategory]
  singleProductCategory(productCatId:ID!): ProductCategory
  productsBrands: [ProductBrand]
  productsSupplier: [ProductSupplier]
  products: [Product]
  singleProduct(productId:ID!): Product
  posts: [Post]
  post(postId:ID!): Post
  myprofile:Profile
  users: [User]
  user:User
  personalInformation(personId: ID!) : UserPersonalInfo
  bioData(profileId:ID) : BioFeature
}
`;
