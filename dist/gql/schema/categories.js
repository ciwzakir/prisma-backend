"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoryTypeDefs = void 0;
exports.categoryTypeDefs = `
  type PostCategoryResponse {
    message : String
    categoryInfo : PostCategory
  }

  type PostCategory {
    id          : String
    name        : String
    description : String 
    posts       : [Post]!
  }

  input PostCategoryPayload {
    name        : String
    description : String  
  }
  
  type ProductCategory {
    id          : String
    name        : String
    description : String  
    products    : [Product]  
  }

  type ProductCategoryResponse {
    message : String
    categoryInfo : ProductCategory
  }
 
  input ProductCategoryPayload {
    name        : String
    description : String 
  }
`;
