"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSupplierTypeDefs = void 0;
exports.productSupplierTypeDefs = `
  type ProductSupplier {
    id          : ID!
    name        : String  
    description : String
    products    : [Product]
  }

  type ProductSupplierResponse {
    message    : String
    products    : ProductSupplier
  }

  input ProductSupplierInputs {
    name        : String   
    description : String
  }
`;
