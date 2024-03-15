"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productBrandTypeDefs = void 0;
exports.productBrandTypeDefs = `
  type ProductBrand {
    id          : ID!
    name        : String  
    description : String
    products    : [Product]
  }

  type ProductBrandResponse {
    message     : String
    products    : ProductBrand
  }

  input ProductBrandInputs {
    name        : String   
    description : String
  }
`;
