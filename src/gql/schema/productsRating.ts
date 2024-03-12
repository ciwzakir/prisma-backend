export const productRatingsTypeDefs = `
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
