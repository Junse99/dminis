import { apolloClient } from '@/utils/apollo-client';
import { IMAGE_FIELDS } from '@/utils/fragments/image.fragment';
import { gql } from '@apollo/client';
import type { HomeCarouselProps } from './home-carousel.types';
import { LINK_FIELDS } from '@/utils/fragments/link.fragment';

const GET_HOME_CAROUSEL = gql`
${IMAGE_FIELDS}
${LINK_FIELDS}
query HomeCarousel($code: String!) {
  contenidoTransversalCollection(where: { code: $code }, limit: 1) {
    items {
      code,
      listCollection(limit: 20) {
        items {
          ... on ContenidoTransversal {
							code
            	image {
                ... imageFields
              }
            	link {
                ... linkFields
              }
          }
        }
      }
    }
  }
}
`;

export  const getHomeCarousel = async (code: string): Promise<HomeCarouselProps> => {
  const { data } = await apolloClient.query({
    query: GET_HOME_CAROUSEL,
    variables: {
      code,
    },
  });
  return data.contenidoTransversalCollection.items[0];
};
