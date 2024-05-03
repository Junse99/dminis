import { gql } from '@apollo/client';

export const IMAGE_FIELDS = gql`
  fragment imageFields on Imagen {
    code
    title
    description
    mobile {
      url
      height
      width
    }
    tablet {
      url
      height
      width
    }
    desktop {
      url
      height
      width
    }
  }
`;
