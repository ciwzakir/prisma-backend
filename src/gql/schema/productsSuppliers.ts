export const productSupplierTypeDefs = `
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
