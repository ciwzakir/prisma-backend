"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productReviewsTypeDefs = void 0;
exports.productReviewsTypeDefs = `
  type ProductReview {
    id             : ID!
    review         : String  
  }

  type ProductReviewsResponse {
    message     : String
    products    : ProductReview
  }

  input ProductReviewsInputs {
    review        : String  
  }
`;
