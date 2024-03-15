"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postTypeDefs = void 0;
exports.postTypeDefs = `
  type Post {
    id           : ID!
    title        : String!
    content      : String!
    postCategory : PostCategory
    author       : User
    createdAt    : String!
    isPublished  : Boolean!  
  }

  type PostsResponse {
    message : String
    post    : Post
  }

  input PostInput {
    title      : String
    content    : String
    categoryId : String
  }
`;
