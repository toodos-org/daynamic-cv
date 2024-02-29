import { gql } from "@apollo/client";

export const GET_USER_CV_BY_ID = gql`
  query MyQuery {
    cv {
      edges {
        node {
          name
        }
      }
    }
  }
`;
