"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRatingsTypeDefs = void 0;
exports.productRatingsTypeDefs = `
  type ProductRating {
    id             : ID!
    rating         : Int  
    }

  type ProductRatingsResponse {
    message    : String
    products    : ProductRating
  }

  input ProductRatingsInputs {
    rating         : Int  
  }
`;
