export const productReviewsTypeDefs = `
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
