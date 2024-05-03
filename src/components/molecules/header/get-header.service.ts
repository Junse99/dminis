import { gql } from '@apollo/client';
import { apolloClient } from '@/utils/apollo-client';
import { IMAGE_FIELDS } from '@/utils/fragments/image.fragment';
import type { HeaderProps } from './header.types';

const GET_HEADER = gql`
${IMAGE_FIELDS}
query Header($code: String!) {
  contenidoTransversalCollection(where: { code: $code }, limit: 1) {
    items {
      code
      name
      title
      image {
				...imageFields
      }
      link {
        code
        texto
        isExternal
        url
      }
      listCollection(limit: 6) {
        items {
          ... on EnlaceDeNavegacion {
            code
            url
            isExternal
            texto
          }
        }
      }
    }
  }
}
`;

export  const getHeader = async (code: string): Promise<HeaderProps> => {
  const { data } = await apolloClient.query({
    query: GET_HEADER,
    variables: {
      code,
    },
  });

  return data.contenidoTransversalCollection.items[0];
};
