"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productTypeDefs = void 0;
exports.productTypeDefs = `
  type Product {
    id               : ID!  
    title            : String!
    productImageUrl  : String!
    description      : String!
    color            : String!
    size             : String!
    price            : Float!
    discount         : Float
    warranty         : Int!
    stockStatus      : Boolean
    productCategory  : ProductCategory
    productBrand     : ProductBrand
    productSupplier  : ProductSupplier
    author           : User
    createdAt        : String!
    isPublished      : Boolean 
    paymentStatus    : String
    salesStatus      : String 
    isItemSupplierVerified  : Boolean 
    productRating    : [ProductRating]
    productReview    : [ProductReview]
   }

  type ProductResponse {
    message    : String
    products    : Product
  }

  input ProductInputs {
    title            : String!
    productImageUrl  : String!
    description      : String!
    color            : String!
    size             : String!
    price            : Float!
    discount         : Float
    warranty         : Int!
    stockStatus      : Boolean
    productCategoryId : String!
    productBrandId    : String!
    productSupplierId : String!
    isPublished      : Boolean 
    paymentStatus    : String
    salesStatus      : String 
    isItemSupplierVerified  : Boolean 
  }
  
  input ProductUpdateInputs {
    title            : String
    productImageUrl  : String
    description      : String
    color            : String
    size             : String
    price            : Float
    discount         : Float
    warranty         : Int
    stockStatus      : Boolean
    productCategoryId : String
    productBrandId    : String
    productSupplierId : String
    isPublished      : Boolean 
    paymentStatus    : String
    salesStatus      : String 
    isItemSupplierVerified  : Boolean 
  }
`;
