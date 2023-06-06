export const GetAllCategoriesQuery = `
    query {
      categoryCollection (first: 100) {
        edges {
          node {
            id
            name
            slug
            image
            items (first: 100) {
              edges {
                node {
                  id
                  name
                  image
                  price
                }
              }
            }
          }
        }
      }
    }
  `;

export const GetProductQuery = (productId) => `
  query {
      item (
          by: { id: "${productId}" }
      ) {
          id
          name
          type
          price
          stock
          description
          image
          location
          supplier {
              id
              name
          }
          category {
              id
              name
          }
          orders (last: 100) {
              edges {
                  node {
                      quantity
                      total
                      rentalPeriod
                      rentalStart
                      rentalEnd
                  }
              }
          }
      }
  }
`;

export const GetAllProductsQuery = (categorySlug) => `
query {
  category (
    by: { slug: "${categorySlug}" }
  ) {
    id
    name
    slug
    description
    image
    items (first: 100) {
      edges {
        node {
          id
          name
          type
          price
          stock
          description
          image
          location
          supplier {
            id
            name
            email
            phone
          }
        }
      }
    }
  }
}
`; 