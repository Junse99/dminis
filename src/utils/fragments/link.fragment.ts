import { gql } from '@apollo/client';

export const LINK_FIELDS = gql`
  fragment linkFields on EnlaceDeNavegacion {
    code
    texto
    url
    isExternal
  }
`;
