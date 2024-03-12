export const productBrandTypeDefs = `
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
