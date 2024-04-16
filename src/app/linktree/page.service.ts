import { apolloClient } from '@/utils/apollo-client';
import { gql } from '@apollo/client';
import type { LinkPageTypes } from './page.types';

const GET_PAGE_LINKS = gql`
query LinksPage($pageCode: String!) {
  linkPageCollection(where: { code: $pageCode }, limit: 1) {
    items {
      code
      name
      title
      subtittle
      linklistCollection(limit: 6) { 
        items {
          code
          link {
            code
            texto
            isExternal
            url
          }
          image {
            code
            title
            description
            mobile {
              url
              height
              width
            }
          }
        }
      }
      backgroundImage {
        code
        title
        description
        mobile {
          url
          height
          width
        }
      }
      image {
        code
        title
        description
        mobile {
          url
          height
          width
        }
      }
    }
  }
}
`;

export  const getPLinkPageContent = async (pageCode: string): Promise<LinkPageTypes> => {
  const { data } = await apolloClient.query({
    query: GET_PAGE_LINKS,
    variables: {
      pageCode,
    },
  });
  const page = data.linkPageCollection.items[0];

  return page;
};
