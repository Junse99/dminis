import { apolloClient } from '@/utils/apollo-client';
import { IMAGE_FIELDS } from '@/utils/fragments/image.fragment';
import { gql } from '@apollo/client';
import type { ProductsSectionProps } from './products-section.types';


const GET_PRODUCTS_SECTION = gql`
${IMAGE_FIELDS}

query ProductsSections($code: String!) {
  contenidoTransversalCollection(where: { code: $code }, limit: 1) {
    items {
      code
      title
      listCollection {
        items {
          ... on ContenidoTransversal {
            code
            title
            image {
              ... imageFields
            }
          }
        }
      }
    }
  }
}
`;

export  const getProductsSection = async (code: string): Promise<ProductsSectionProps> => {
  const { data } = await apolloClient.query({
    query: GET_PRODUCTS_SECTION,
    variables: {
      code,
    },
  });

  return data.contenidoTransversalCollection.items[0];
};
