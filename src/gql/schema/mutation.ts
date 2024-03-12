export const Mutation = `

type Mutation {
  registerUsers(
    name       : String!,
    email      : String!,
    userRole   : AllowedUserRole!,
    password   : String!
    biodata    : UserBioDataPayload
    ): UserAuthPayload,
    
  login(
    email      : String!,
    password   : String!
    ): UserAuthPayload,

  addpost(post:PostInput!): PostsResponse,
  createPostCategory(inputs:PostCategoryPayload): PostCategoryResponse,
  createProductCategory(inputs:ProductCategoryPayload): ProductCategoryResponse,
  createProductBrand(inputs:ProductBrandInputs): ProductBrandResponse,
  createProductSupplier(inputs:ProductSupplierInputs): ProductSupplierResponse,
  addProductReviews(productId:ID!, inputs:ProductReviewsInputs): ProductReviewsResponse,
  addProductRatings(productId:ID!, inputs:ProductRatingsInputs): ProductRatingsResponse,
  addNewProduct(inputs:ProductInputs): ProductResponse,
  updateProduct(productId: ID!, inputs:ProductUpdateInputs): ProductResponse,
  deleteproduct(productId: ID!): ProductResponse,
  updatepost(postId: ID!, post:PostInput): PostsResponse,
  deletepost(postId: ID!): PostsResponse,
  publishedpost(postId: ID!): PostsResponse,
  createprofile(profileData:UserBioDataPayload): ProfileResponse,
  addBioFeature(profileId:ID!, bioData:UserBioDataPayload):UserCompleteBioDataResponse
  addUserFullName(bioFeatureId:ID!, input:UserNamePayload):UserNameResponse
  addUserAddress(bioFeatureId:ID!, UserAddress:UserAddressPayload):UserAddressResponse
  addPersonalInfo(bioFeatureId:ID!, UserPersonalInfo:UserPersonalInfoPayload):UserPersonalInfoResponse
  addUserQualification(bioFeatureId:ID!, input:UserEducationPayload):UserEducationResponse
  }
`;
